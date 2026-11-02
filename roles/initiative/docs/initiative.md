# Initiative

Homepage: [https://github.com/beyonders-studio/initiative](https://github.com/beyonders-studio/initiative)

A self-hosted shared workspace for projects, tasks, files, calendars and wikis.

## Usage

Set `initiative_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

The Initiative web interface can be found at [http://ansible_nas_host_or_ip:8190](http://ansible_nas_host_or_ip:8190).

Initiative runs as two containers that share the `initiative` Docker network:

- `initiative` - the web application and API, available on port `8190`
- `initiative-db` - PostgreSQL 17 database, not published to the host

The first account to register becomes the owner of the server unless
`initiative_first_owner_email` and `initiative_first_owner_password` are set.

## Specific Configuration

Change the two required secrets before starting Initiative for the first time:

- `initiative_secret_key` - Signs sessions and encrypts stored data, generate one with `openssl rand -hex 32` and never change it on an existing install
- `initiative_db_password` - Database owner password, only read when the database is first created. Keep it alphanumeric

`initiative_app_url` is the public address people reach Initiative at. It defaults to
`https://initiative.<ansible_nas_domain>`, which requires Traefik
(`initiative_available_externally: true`) and a matching DNS record. When running on
the local network only, set it to `http://ansible_nas_host_or_ip:8190` instead and
point your reverse proxy at port `8190`.

The application trusts proxy headers by default (`initiative_behind_proxy: true`),
which is right when it runs behind Traefik. Set it to `false` if nothing sits in front
of it, and use `initiative_forwarded_allow_ips` only when the proxy reaches Initiative
over a public address from another machine.

Uploaded files are stored in `initiative_uploads_directory`. The container creates the
unprivileged user, takes ownership of that directory and drops privileges, so
`initiative_puid` and `initiative_pgid` can be matched to your NAS user.

Most other settings - single sign-on, SMTP, push notifications, captcha - only pre-fill
the platform settings on the first start; afterwards they are managed under
**Settings → Platform** in the app. Settings without a dedicated variable can be passed
through `initiative_optional_env`.
