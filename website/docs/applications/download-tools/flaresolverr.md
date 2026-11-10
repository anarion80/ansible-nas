---
title: "FlareSolverr"
description: "A proxy server that bypasses Cloudflare and DDoS-GUARD protection for other applications"
---

Homepage: [https://github.com/FlareSolverr/FlareSolverr](https://github.com/FlareSolverr/FlareSolverr)

FlareSolverr is a proxy server to bypass Cloudflare and DDoS-GUARD protection. Some Jackett indexers
require it.

## Usage

Set `flaresolverr_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

The FlareSolverr API can be accessed from [http://ansible_nas_host_or_ip:8191](http://ansible_nas_host_or_ip:8191).
Requests are JSON documents posted to the `/v1` endpoint:

```bash
curl -L -X POST 'http://ansible_nas_host_or_ip:8191/v1' \
  -H 'Content-Type: application/json' \
  --data-raw '{"cmd": "request.get", "url": "https://example.com", "maxTimeout": 60000}'
```

Other applications on the host or the local network reach it at `http://ansible_nas_host_or_ip:8191`,
which is what Jackett uses. A container has to point at that same host address too, or at
`http://flaresolverr:8191` when you attach it to the same user-defined Docker network; this role
runs a single container, so it does not create one of its own.

**Do not expose FlareSolverr to the internet, it can be abused.** Keep
`flaresolverr_available_externally` at `false` unless you know what you are doing; the port is
published on the host so that other applications and browsers on your network can reach it.

## Volumes

| Host directory | Container path | Purpose |
| --- | --- | --- |
| `flaresolverr_config_directory` | `/config` | Optional log file target, configured with `flaresolverr_log_file` |

The headless browser creates and destroys a temporary profile for every challenge request. The role
mounts `/tmp` as tmpfs so those files stay in RAM instead of being written to the host disk, which
avoids SSD and NVMe wear on machines solving many challenges. `flaresolverr_tmpfs_size` caps it at
`256M` by default; roughly 10MB to 30MB per request is used and released when the request finishes.

## Settings

- `flaresolverr_port` publishes the API on port `8191`, the port from the upstream compose file, and
  `flaresolverr_port_container` keeps the container at its own `8191`. Both can be changed together
  when `8191` is already taken on your host.
- `flaresolverr_timezone` is passed as `TZ`, `flaresolverr_memory` limits the container,
  `flaresolverr_image_version` defaults to `latest`, and `flaresolverr_available_externally`
  publishes it through Traefik as `flaresolverr.<your_domain>`.
- `flaresolverr_log_level` is `info` by default, `debug` adds a log line for every proxied request.
- `flaresolverr_log_file` defaults to `none`, which logs to the container output. Set it to a path
  inside the container, for example `/config/flaresolverr.log`, to also write a log file.
- `flaresolverr_log_html` logs every HTML document that passes through the proxy, for debugging only.
- `flaresolverr_captcha_solver` defaults to `none`. Upstream notes that none of the bundled captcha
  solver adapters work at the moment, so leaving it at `none` is expected.
- `flaresolverr_optional_env` holds the remaining variables from the upstream
  [environment variables guide](https://github.com/FlareSolverr/FlareSolverr#environment-variables).
  All of them default to an empty value, and empty values are not passed to the container, so the
  role works without defining any of them. Set only what you need, quoted as strings:

| Variable | Default | Notes |
| --- | --- | --- |
| `PROXY_URL` | none | Upstream proxy, for example `http://127.0.0.1:8080` |
| `PROXY_USERNAME` | none | Username for the upstream proxy |
| `PROXY_PASSWORD` | none | Password for the upstream proxy |
| `LANG` | none | Browser language, for example `en_GB` |
| `HEADLESS` | true | Run the browser headless, debugging only |
| `DISABLE_MEDIA` | false | Skip images, CSS and fonts to save bandwidth |
| `BROWSER_WAIT_TIMEOUT` | 1 | Seconds to wait for the expected page state, raise it on slow hosts |
| `TEST_URL` | `https://www.google.com` | URL requested on startup to check the browser works |
| `HOST` | 0.0.0.0 | Listening interface inside the container |

- `flaresolverr_prometheus_enabled` turns on the upstream Prometheus exporter and publishes its
  metrics on port `8193`. Change the host side with `flaresolverr_prometheus_port` and the exporter
  side with `flaresolverr_prometheus_port_container`.
