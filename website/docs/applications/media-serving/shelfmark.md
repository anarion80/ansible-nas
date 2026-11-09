---
title: "Shelfmark"
description: "A self-hosted web interface for searching and requesting books and audiobooks across multiple sources"
---

Homepage: [https://github.com/calibrain/shelfmark](https://github.com/calibrain/shelfmark)

Shelfmark is a self-hosted web interface for searching and requesting books and audiobooks across
multiple sources. Metadata providers, indexers, download clients and a multi-user request system are
configured in its web interface.

## Usage

Set `shelfmark_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

Shelfmark web interface can be found at [http://ansible_nas_host_or_ip:8192](http://ansible_nas_host_or_ip:8192).
The image listens on port 8084; 8192 is the first host port free in this playbook, and it can be
changed with `shelfmark_port`.

## Volumes

| Host directory | Container path | Purpose |
| --- | --- | --- |
| `shelfmark_config_directory` | `/config` | Settings, database and plugin configuration |
| `shelfmark_books_directory` (`books_root`) | `/books` | Default destination for downloaded books |
| `shelfmark_downloads_directory` (`downloads_root`) | `/downloads` | Torrent and usenet handover |

The downloads mount has to use the same path, inside the container, that your download client uses:
Shelfmark moves or hardlinks finished files from that path. Change the container side with
`shelfmark_downloads_container_path` if your clients mount downloads somewhere else.

## Settings

- `shelfmark_user_id` and `shelfmark_group_id` set `PUID` and `PGID` for files Shelfmark writes,
  `1000` by default.
- `shelfmark_timezone` is passed as `TZ`, `shelfmark_memory` limits the container and
  `shelfmark_available_externally` publishes it through Traefik.
- `shelfmark_image_version` defaults to `latest`; pin a release to update on purpose.
- `shelfmark_optional_env` holds every variable from the upstream
  [environment variables guide](https://github.com/calibrain/shelfmark/blob/main/docs/environment-variables.md).
  All of them default to an empty value, and empty values are not passed to the container, so the
  role works without defining any of them and nothing is locked to an environment override unless
  you set it. The comment after each entry shows Shelfmark's own default. Set only what you need,
  quoted as strings:

      shelfmark_optional_env:
        AUTH_METHOD: "builtin"
        SHELFMARK_API_KEY: "change-me"
        EXT_BYPASSER_URL: "http://flaresolverr:8191"

  `AUTH_METHOD` selects `none`, `builtin`, `proxy`, `oidc` or `cwa`; the OIDC and proxy variables are
  documented in the upstream [configuration guide](https://github.com/calibrain/shelfmark/blob/main/docs/configuration.md).
  The egress and VPN variables additionally need capabilities such as `NET_ADMIN` that this role does
  not add.
