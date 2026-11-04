---
title: "Sablier"
description: "Start your containers on demand, and shut them down automatically when there is no activity"
---

Homepage: [https://sablierapp.dev/](https://sablierapp.dev/)

Start your containers on demand, and shut them down automatically when there is no activity.

## Usage

Set `sablier_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

Sablier has no web interface of its own; its API and health endpoint can be found at
[http://ansible_nas_host_or_ip:10002](http://ansible_nas_host_or_ip:10002).

The role runs a single container with the Docker socket mounted, so Sablier can stop idle
containers and start them again when a request needs them. It never creates or removes a
container, so opt an existing container in with the `sablier.enable: "true"` label and give it a
group with `sablier.group`.

## Reverse Proxy

Sablier is called by a reverse proxy, so the role publishes the API on the host but does not add a
Traefik router for it. The Traefik integration is the
[sablier-traefik-plugin](https://github.com/sablierapp/sablier-traefik-plugin) middleware, which is
configured on the Traefik side. Traefik in Ansible-NAS runs with host networking, so
`http://127.0.0.1:10002` reaches Sablier.

## Configuration

- `sablier_port`: host port of the API (default: "10002", the upstream port 10000 is used by Budibase)
- `sablier_sessions_default_duration`: how long a session lasts (default: "5m")
- `sablier_provider_docker_strategy`: stop or pause idle containers (default: "stop")
- `sablier_strategy_dynamic_default_theme`: theme of the waiting page (default: "hacker-terminal")
- `sablier_storage_file`: file inside the container that keeps the sessions (default: in memory)
- `sablier_strategy_dynamic_custom_themes_directory`: host directory for your own waiting page themes

The Docker socket gives the container root-level access to the host. Point `sablier_docker_socket`
at a socket proxy if you want to limit what Sablier can do.
