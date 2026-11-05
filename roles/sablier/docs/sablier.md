# Sablier

Homepage: [https://sablierapp.dev/](https://sablierapp.dev/)

Start your containers on demand, and shut them down automatically when there is no activity.

## Usage

Set `sablier_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

Sablier has no web interface of its own. Its API listens on [http://ansible_nas_host_or_ip:10002](http://ansible_nas_host_or_ip:10002) and reports its health on [http://ansible_nas_host_or_ip:10002/health](http://ansible_nas_host_or_ip:10002/health).

The role runs a single container, `sablier`, with the Docker socket mounted so it can start and
stop the containers it manages. Sablier never creates, recreates or removes a container, so a
managed container has to exist already, created with a `restart` policy of `unless-stopped` or
`no`. Opt a container in with two labels:

- `sablier.enable: "true"` - hands the container over to Sablier
- `sablier.group` - the group a session covers, `default` when the label is missing

A container started with `docker compose up` or `docker start` keeps running until its first
session expires. Sablier also stops opted-in containers when it starts itself, which is what
`sablier_provider_auto_stop_on_startup` controls.

## Reverse proxy

Sablier is called by a reverse proxy, not by a browser, so the role publishes the API on the host
but does not add a Traefik router for it. The Traefik integration is a middleware plugin
([sablier-traefik-plugin](https://github.com/sablierapp/sablier-traefik-plugin)). Set
`traefik_sablier_plugin_enabled: true` in the Traefik role, then attach the `sablier@file`
middleware to the routers of the containers Sablier should manage. Traefik in Ansible-NAS runs
with host networking, so an endpoint of `http://127.0.0.1:10002` reaches Sablier. Any proxy that
can make an HTTP call works as well:

- `/api/strategies/blocking?group=<group>&session_duration=<duration>` holds the request until the
  containers of the group are ready
- `/api/strategies/dynamic?group=<group>&theme=<theme>` returns a waiting page that refreshes itself
- `/health` reports whether Sablier itself is up

## Specific Configuration

### Ports

The upstream compose file publishes port `10000`, which Budibase already uses in Ansible-NAS, so
the role publishes the first free port next to it:

- `sablier_port` - host port of the API, `10002`
- `sablier_server_port` - port inside the container, `10000`

### Sessions

- `sablier_sessions_default_duration` - how long a session lasts, `5m` by default
- `sablier_sessions_expiration_interval` - how often expired sessions are looked for, `20s` by
  default. A longer interval is less work for the CPU; with sessions of an hour, `5m` is fine
- `sablier_provider_docker_strategy` - `stop` (default) or `pause` idle containers. Paused
  containers keep their memory, stopped ones give it back
- `sablier_provider_auto_stop_on_startup` - stop the opted-in containers that are already running
  at startup, `true` by default
- `sablier_provider_auto_stop_externally_started` - keep stopping containers that are running but
  were not started by Sablier, `false` by default
- `sablier_provider_auto_warm_externally_started` - give those containers a session instead of
  stopping them, `false` by default

### Waiting pages

The dynamic strategy serves a waiting page while the containers start.

- `sablier_strategy_dynamic_default_theme` - the built-in theme, `hacker-terminal` by default
- `sablier_strategy_dynamic_show_details_by_default` - list the instances on the page, `true` by
  default
- `sablier_strategy_dynamic_default_refresh_frequency` - how often the page refreshes, `5s` by
  default
- `sablier_strategy_dynamic_custom_themes_directory` - host directory for your own `.html` themes,
  `{{ docker_home }}/sablier/themes`, mounted read-only at
  `sablier_strategy_dynamic_custom_themes_path` (`/etc/sablier/themes`)

The blocking strategy has its own settings: `sablier_strategy_blocking_default_timeout` (`1m`) is
how long a request waits before it is answered, and
`sablier_strategy_blocking_default_refresh_frequency` (`5s`) is how often the container status is
checked.

### Data

Sablier keeps its sessions in memory, so a restart forgets which containers were started or
stopped. Set `sablier_storage_file` to a file inside the container to keep them, for example
`"/data/sessions.json"`; `sablier_data_directory` (`{{ docker_home }}/sablier`) is mounted at
`/data`. There is nothing else to back up.

### Security

The Docker socket gives the container root-level access to the host. To limit what Sablier can do,
put a socket proxy such as [docker-socket-proxy](https://github.com/linuxserver/docker-socket-proxy)
in front of it and point `sablier_docker_socket` at the proxy's socket or address instead of
`/var/run/docker.sock`.

### Observability

- `sablier_server_metrics_enabled` - serve Prometheus metrics on `/metrics`, `false` by default
- `sablier_logging_level` - `error`, `warn`, `info` (default) or `debug`
- `sablier_tracing_enabled` - send OpenTelemetry traces, `false` by default. With it on,
  `sablier_tracing_endpoint` (an OTLP collector, `http://localhost:4318` by default),
  `sablier_tracing_exporter_type` (`otlphttp` or `stdout`), `sablier_tracing_sampling_rate` (`1`
  for every trace) and `sablier_tracing_service_name` (`sablier`) apply

### Advanced

- `sablier_server_base_path` - serve the API under a subpath, `/` by default
- `sablier_provider_reject_unlabeled_requests` - refuse named requests for containers that are not
  labeled `sablier.enable=true`, `false` by default
- `sablier_provider_verify_enabled_on_expiration` - check the label again before an expired
  instance is stopped, `false` by default
- `sablier_provider_docker_honor_restart_policy` - report a one-shot container that exited `0` as
  completed instead of stopped, `false` by default

Settings without a dedicated variable can be passed through `sablier_optional_env`, for example
`DOCKER_HOST` to manage a remote daemon instead of the local socket. A variable the role sets
itself wins over the same key in that dict.
