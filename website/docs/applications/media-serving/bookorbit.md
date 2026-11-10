---
title: "BookOrbit"
description: "A self-hosted ebook platform for managing and reading your digital library"
---

Homepage: [https://bookorbit.app/](https://bookorbit.app/)

A self-hosted ebook platform for managing and reading your digital library.

## Usage

Set `bookorbit_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

BookOrbit web interface can be found at [http://ansible_nas_host_or_ip:3041](http://ansible_nas_host_or_ip:3041).

## Configuration

All BookOrbit settings are passed to the container as environment variables, built up in
`bookorbit_env`. The ones worth overriding in an inventory:

- `bookorbit_log_level` (`LOG_LEVEL`, `info` by default). Set to `debug` for verbose output.
- `bookorbit_disable_local_auth` (`DISABLE_LOCAL_AUTH`, `false` by default). Set to `true` once an
  administrator has linked an enabled OIDC provider to reject password sign-in.
- `bookorbit_oidc_allow_local_issuers` (`OIDC_ALLOW_LOCAL_ISSUERS`, `false` by default). Allows OIDC
  discovery on private addresses; enable only on a trusted network.
- `bookorbit_node_extra_ca_certs` (`NODE_EXTRA_CA_CERTS`, empty by default). In-container path to a
  PEM CA bundle trusted for outbound TLS, needed when an OIDC provider uses a private certificate
  authority. The app data directory is mounted at `/data`, so a bundle placed in
  `bookorbit_app_data_directory` can be referenced as `/data/<file>.pem`.
- `bookorbit_node_max_old_space_size` (`NODE_MAX_OLD_SPACE_SIZE`, `2048` MB by default). Raise it for
  very large libraries.
- `bookorbit_host` (`HOST`, `0.0.0.0` by default). Listen address inside the container.
- `bookorbit_csp_allow_cloudflare_insights` (`CSP_ALLOW_CLOUDFLARE_INSIGHTS`, `false` by default).

Change `bookorbit_db_pass`, `bookorbit_jwt_secret` and `bookorbit_setup_bootstrap_token` from their
defaults before the first run.

### Optional settings

`bookorbit_optional_env` adds to or overrides the container environment. It already carries the keys
upstream recommends when the matching feature is used, empty by default:

- `EMAIL_ENCRYPTION_KEY` - encrypts stored SMTP credentials at rest.
- `MIGRATION_ENCRYPTION_KEY` - encrypts stored migration source credentials.
- `BOOK_REQUEST_ENCRYPTION_KEY` - required before download-client or indexer credentials can be
  saved.
- `MIGRATION_IMPORT_ROOT` - set it to `/import` to authorise the read-only import directory this role
  mounts at `/import` and enable local migration backups.
- `GITHUB_RELEASES_TOKEN` - optional token, raises the anonymous GitHub API rate limit used for
  release notes.

Generate each encryption key with `openssl rand -hex 32`.

Upstream can also read secrets from mounted files instead of the environment (`<VARIABLE>_FILE`, for
example `JWT_SECRET_FILE`). This role keeps secrets in inventory variables, so keep them in an
Ansible vault and do not set the `_FILE` variants.

BookOrbit's optional read-aloud worker and Kokoro text-to-speech containers are not managed by this
role. The app runs without them; add those containers yourself if you want those features.

## Metadata providers

BookOrbit can use extra metadata sources that run beside it as small containers, published in
[bookorbit-metadata-providers](https://github.com/bookorbit/bookorbit-metadata-providers). Providers
are off by default; list the keys of the ones to run in `bookorbit_metadata_providers_enabled`:

    bookorbit_metadata_providers_enabled:
      - fantlab
      - mangabaka

| Provider | Covers | Container |
| --- | --- | --- |
| AudioSilo | Audiobook metadata from the AudioSilo Meta community catalogue | `bookorbit-audiosilo` |
| Douban | Chinese books from book.douban.com, covers excluded | `bookorbit-douban` |
| FantLab | Russian-language science fiction and fantasy from fantlab.ru | `bookorbit-fantlab` |
| J-Novel Club | English light novels and manga from j-novel.club | `bookorbit-jnovelclub` |
| Libris | Swedish books and audiobooks from the National Library of Sweden | `bookorbit-libris` |
| LubimyCzytac | Polish books from lubimyczytac.pl | `bookorbit-lubimyczytac` |
| MangaBaka | Manga, manhwa, manhua and light novels from mangabaka.org | `bookorbit-mangabaka` |
| Romance.io | Romance books from romance.io | `bookorbit-romanceio` |
| Soundbooth Theater | English audiobooks from soundbooththeater.com | `bookorbit-soundbooththeater` |
| Yandex Books | Russian books, audiobooks and comics from books.yandex.ru | `bookorbit-yandexbooks` |

Adding a provider to BookOrbit is a one-time step per provider, done in its web interface:

1. Open **Settings > Metadata > Providers > External** and choose **Add provider**.
2. Enter the container address, such as `http://bookorbit-fantlab:8080`.
3. Turn on **Allow private address**, since the provider is on a Docker network.
4. Save, choose **Test**, then turn the provider on and add it to the field rules you want it in.

The upstream guide at
[External Metadata Providers](https://github.com/bookorbit/bookorbit/blob/main/docs/METADATA_PROVIDERS.md)
covers every option in detail. LubimyCzytac keeps the key it had when it was built in, so ids and
field rules already stored for it keep working once its provider is added.

Provider containers publish no ports and are reachable only from the BookOrbit network. A provider
whose key is not in `bookorbit_metadata_providers_enabled` is not run, and its container is removed
if it was running before.

### Provider settings

- `bookorbit_metadata_provider_image_version` defaults to `latest`. Pin a release such as `0.1.0`
  to update on purpose.
- `bookorbit_metadata_provider_memory` limits each provider container, `128m` by default.
- `bookorbit_metadata_providers_optional_env` adds environment variables to individual providers,
  keyed by provider key. Some providers need these:
  - `douban` uses `DOUBAN_COOKIE` (your logged-in douban.com cookie), `REQUEST_INTERVAL_MS` and
    `DOUBAN_SITE`.
  - `fantlab`, `libris`, `mangabaka`, `jnovelclub`, `romanceio` and `yandexbooks` accept pacing and
    user-agent variables, plus site or API overrides, documented in their own READMEs.
  - Every provider accepts `AUTH_TOKEN`. When it is set, enter the same value in BookOrbit's
    **Authorization header** field for that provider.
- `bookorbit_metadata_providers` holds the provider definitions. Add your own entry, with a unique
  `key`, `container_name` and `image_name`, to run a provider that is not listed above.
