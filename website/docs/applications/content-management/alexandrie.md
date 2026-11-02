---
title: "Alexandrie"
description: "A self-hosted, open-source knowledge base with an extended Markdown editor"
---

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

Set `alexandrie_allow_unsecure: false` when Alexandrie is only reachable over HTTPS.
Sign ups, the landing page and native login can be turned off with
`alexandrie_disable_signup`, `alexandrie_disable_landing` and `alexandrie_disable_native_login`.

Password reset emails are optional and only sent when `alexandrie_smtp_host`,
`alexandrie_smtp_mail` and `alexandrie_smtp_password` are set.

Single sign-on (OIDC) providers and other settings without a dedicated variable can be
added through `alexandrie_backend_optional_env`, for example:

```yaml
alexandrie_backend_optional_env:
  ADMIN_ACCOUNTS: "1"
  OIDC_1_CONFIG_URL: "https://sso.example.com/.well-known/openid-configuration"
  OIDC_1_CLIENT_ID: "alexandrie"
  OIDC_1_CLIENT_SECRET: "change-me"
  OIDC_1_PROVIDER_NAME: "Example SSO"
```
