---
title: "Tactical RMM"
description: "A remote monitoring & management tool"
---

Homepage: <https://github.com/amidaware/tacticalrmm>

Tactical RMM is a remote monitoring & management tool, built with Django and Vue.
It uses an agent written in golang and integrates with MeshCentral.

## Usage

Set `tacticalrmm_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

Set all `tacticalrmm_*` variables in `inventories/<your_inventory>/group_vars/all.yml`.

The tacticalrmm web interface can be found at <http://ansible_nas_host_or_ip:8117>.
