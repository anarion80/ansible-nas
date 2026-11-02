# Alexandrie

Homepage: [https://github.com/Smaug6739/Alexandrie](https://github.com/Smaug6739/Alexandrie)

A self-hosted, open-source knowledge base with an extended Markdown editor.

## Usage

Set `alexandrie_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

The Alexandrie web interface can be found at [http://ansible_nas_host_or_ip:8206](http://ansible_nas_host_or_ip:8206).

Alexandrie is made of four containers that share the `alexandrie` Docker network:

- `alexandrie` - Nuxt frontend, available on port `8206`
- `alexandrie-backend` - Go API, available on port `8207`
- `alexandrie-rustfs` - S3 compatible object storage, available on port `9006`
- `alexandrie-db` - MySQL database, available on port `3307`

## Specific Configuration

Change the default credentials and secrets before starting Alexandrie for the first time:

- `alexandrie_db_password` - Database user password
- `alexandrie_db_root_password` - Database root password
- `alexandrie_jwt_secret` - Token signing secret, generate one with `openssl rand -hex 32`
- `alexandrie_rustfs_access_key` and `alexandrie_rustfs_secret_key` - Object storage credentials

The frontend, the API and the object storage are reached through the
`alexandrie_frontend_url`, `alexandrie_api_url` and `alexandrie_cdn_url` variables.
They default to the `alexandrie`, `alexandrie-api` and `alexandrie-cdn` subdomains of
`ansible_nas_domain`, which requires Traefik (`alexandrie_available_externally: true`)
and the matching DNS records. When running on the local network only, point these
variables at `http://ansible_nas_host_or_ip:<port>` instead and set
`alexandrie_cookie_domain` to the same host.

`alexandrie_cookie_domain` must be the common domain of the frontend and the API,
without the protocol, otherwise logins appear to work but users are logged out immediately.

`alexandrie_cdn_endpoint` is the path under which uploaded files are served and must match
`alexandrie_bucket_name` (`/alexandrie/` for the default bucket).

### Users and administrators

The first account is created from the web interface. To grant administrator rights, list the
numeric account IDs in `alexandrie_admin_accounts`, for example `"1"` or `"1,4"`.

### Single sign-on (OIDC)

Alexandrie supports up to ten OIDC providers. Add them to `alexandrie_oidc_providers`; they are
exported to the backend as `OIDC_1_*`, `OIDC_2_*`, ... in list order:

```yaml
alexandrie_oidc_providers:
  - name: "Company SSO"
    config_url: "https://sso.example.com/realms/main/.well-known/openid-configuration"
    client_id: "alexandrie"
    client_secret: "a-confidential-secret"
  - name: "Google"
    config_url: "https://accounts.google.com/.well-known/openid-configuration"
    client_id: "google-client-id"
    client_secret: "google-client-secret"
```

Register `<alexandrie_frontend_url>/login/oidc/callback` as the redirect URI at each provider.
`name` is the label shown on the login page and is also the value for
`alexandrie_oidc_provider_auto_redirect`.

For an SSO-only instance set `alexandrie_disable_native_login: true`, and optionally
`alexandrie_hide_native_login: true` to hide the local login form as well.

### Feature flags

Set `alexandrie_allow_unsecure: false` when Alexandrie is only reachable over HTTPS.
Sign ups and the landing page can be turned off with `alexandrie_disable_signup` and
`alexandrie_disable_landing`.

### Email

Password reset emails are optional and only sent when `alexandrie_smtp_host`,
`alexandrie_smtp_mail` and `alexandrie_smtp_password` are set.

### Advanced

`alexandrie_config_file` mounts a custom backend `config.toml` and sets `CONFIG_PATH`;
`alexandrie_minio_ca_certificate` mounts a PEM CA certificate and sets `MINIO_CA_PATH`, for an
S3 endpoint using a certificate from a private CA.

Settings without a dedicated variable can be passed through `alexandrie_backend_optional_env` and
`alexandrie_frontend_optional_env`.
