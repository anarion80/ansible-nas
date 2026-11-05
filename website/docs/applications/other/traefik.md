---
title: "Traefik"
---

Homepage: [https://traefik.io](https://traefik.io)

Traefik is a reverse proxy used to provide external access to your Ansible-NAS box. Additionally, Traefik will automatically request and renew SSL certificates for you.

You can configure which applications are available externally by enabling the `<application_name>_available_externally` setting
for each application in the Advanced Settings section of your `all.yml`.

See [External Access](../../getting-started/external-access.md) for more info.

## Usage

Set `traefik_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

Traefik's web interface can be found at [http://ansible_nas_host_or_ip:8083](http://ansible_nas_host_or_ip:8083).

## Sablier plugin

To start containers on demand and stop them when they are idle, enable the
[sablier-traefik-plugin](https://github.com/sablierapp/sablier-traefik-plugin):

```yaml
traefik_sablier_plugin_enabled: true
```

The [Sablier](../system-tools/sablier.md) role also has to be enabled with `sablier_enabled: true`.
The role registers the plugin in the Traefik static configuration and writes a middleware to the
file provider at `{{ traefik_data_directory }}/dynamic/sablier.yml`. Traefik in Ansible-NAS runs
with host networking, so `traefik_sablier_plugin_url` defaults to `http://127.0.0.1:10002`, the
port the Sablier role publishes.

Attach the middleware to the router of every container Sablier should manage. With Docker labels:

```yaml
traefik.http.routers.<application>.middlewares: "sablier@file"
```

Opt the container in with `sablier.enable: "true"` and, optionally, `sablier.group`. The group has
to match `traefik_sablier_plugin_group`.

### Plugin configuration

- `traefik_sablier_plugin_version`: plugin version (default: `v1.4.0`)
- `traefik_sablier_plugin_middleware_name`: name of the middleware (default: `sablier`)
- `traefik_sablier_plugin_url`: Sablier API URL (default: `http://127.0.0.1:10002`)
- `traefik_sablier_plugin_group`: group managed by the middleware (default: `default`)
- `traefik_sablier_plugin_session_duration`: how long containers keep running after a request (default: `5m`)
- `traefik_sablier_plugin_strategy`: `dynamic` shows a waiting page, `blocking` waits for the containers (default: `dynamic`)
- `traefik_sablier_plugin_ignore_user_agent`: list of regexes that are answered without waking the containers (default: empty)
- `traefik_sablier_plugin_fail_open`: pass requests through when Sablier is unreachable (default: `false`)
- `traefik_sablier_plugin_dial_timeout`: connection timeout to Sablier (default: `2s`)
- `traefik_sablier_plugin_keep_alive_interval`: re-ping Sablier for long-lived connections (default: disabled)
- `traefik_sablier_plugin_dynamic_display_name`, `traefik_sablier_plugin_dynamic_show_details`, `traefik_sablier_plugin_dynamic_theme`, `traefik_sablier_plugin_dynamic_refresh_frequency`: waiting page settings
- `traefik_sablier_plugin_blocking_timeout`: how long the blocking strategy waits (default: `1m`)

Traefik needs access to the internet to download the plugin the first time it starts.

## Specific Configuration

You'll need to map port 80 and 443 from your router to your Ansible-NAS box. A quick search should reveal instruction for your model of router.
