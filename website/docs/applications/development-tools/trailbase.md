---
title: TrailBase
sidebar_position: 14
---

TrailBase

![Logo](https://trailbase.io/img/logo.svg)

[TrailBase](https://trailbase.io/) is an open-source backend framework with integrated database, authentication, and file management.

## Configuration

The following variables can be adjusted in your inventory file to customize the TrailBase deployment:

### Basic Configuration

- `trailbase_enabled`: Enable or disable the TrailBase service (default: `false`)
- `trailbase_available_externally`: Make TrailBase accessible from outside your LAN (default: `false`)
- `trailbase_port`: Internal port for TrailBase (default: `4003`)
- `trailbase_hostname`: Hostname to access TrailBase within your LAN (default: `trailbase`)

### Resource Configuration

- `trailbase_memory`: Memory limit for the container (default: `1g`)

### Data Storage

- `trailbase_data_directory`: Directory where TrailBase stores its data (default: `{{ docker_home }}/trailbase`)

## Accessing TrailBase

Once deployed, you can access TrailBase at:

- Internal: `http://trailbase:4000` (within Docker network)
- External: `http://trailbase.ansible-nas-domain.com` (if `trailbase_available_externally` is true)
- Local: `http://ansible_nas_ip:4003` (if `trailbase_available_externally` is false)

## Special Requirements

TrailBase may require specific directory permissions to be set correctly for the traildepot folder as mentioned in the official documentation. Ensure your NAS has sufficient storage space for your intended usage.
