---
title: "OpenGym"
description: "A self-hosted gym and body-weight tracker with routines, workouts, progress and passkey sign-in"
---

Homepage: [https://github.com/DuarteSantos8/openGym](https://github.com/DuarteSantos8/openGym)

A self-hosted gym and body-weight tracker: plan routines, log workouts, track your weight and progress, with passkey sign-in.

## Usage

Set `opengym_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

The OpenGym web interface can be found at [http://ansible_nas_host_or_ip:8115](http://ansible_nas_host_or_ip:8115).

OpenGym runs as two containers that share the `opengym` Docker network:

- `opengym-web` - the web application and reverse proxy for the API, available on port `8115`
- `opengym-api` - the Node.js API, not published to the host

## Specific Configuration

### Passkeys

Sign-in uses passkeys, which are bound to an exact hostname, so `opengym_rp_id` and
`opengym_origin` have to match the address people type in the browser:

- `opengym_rp_id` - the host, without a scheme or a port. Defaults to `opengym.<ansible_nas_domain>`
- `opengym_origin` - the full address, without a path. Defaults to `https://<opengym_rp_id>`

The defaults require Traefik (`opengym_available_externally: true`) and a DNS record for
`opengym.<ansible_nas_domain>`. When running on the local network only, set both to the NAS
address instead, for example `opengym_rp_id: ansible_nas_host_or_ip` and
`opengym_origin: http://ansible_nas_host_or_ip:8115`.

Browsers only allow passkeys over HTTPS (`localhost` is the exception), so on a plain HTTP LAN
address openGym is reached with a password instead. Turn that on with
`opengym_password_login: "1"`; new profiles can then be created with a password, and an existing
profile sets one in **Settings → Account**.

Changing `opengym_rp_id` later invalidates every existing passkey.

### Accounts

A fresh instance has open sign-up and no admin. Set `opengym_first_user_admin: "1"` before the
first profile is created to make that profile an admin, or list account IDs in
`opengym_admin_uids`, for example `"1,4"`. Admins get an admin dashboard to manage users,
generate invite codes, view the activity log and set up the AI Coach.

- `opengym_invite_only: "1"` requires an invite code for new profiles
- `opengym_allow_guest: "0"` removes the "Continue without account" button
- `opengym_default_lang` sets the language for the sign-in screen and for profiles that never
  picked one, for example `"pt-BR"`

### Data

Everything the API stores lives in `opengym_api_data_directory` (default
`{{ docker_home }}/opengym/data`): the accounts, the passkey credentials, each profile's state,
the session secret and the uploaded exercise photos and videos. Back up that directory and you
have backed up the instance. Losing the `secret` file it contains signs everyone out.

`opengym_coach_auth_directory` holds the Codex login cache of the AI Coach. It is deliberately
outside the data directory and does not need to be backed up; losing it only means signing the
provider in again.

### Activity log

The admin dashboard shows an activity log of sign-ins, failed sign-ins and admin actions. It is
on by default.

- `opengym_audit_log` - set to `"0"` to turn it off
- `opengym_audit_max` and `opengym_audit_days` - how many events and how many days to keep
- `opengym_audit_ip` - `off` (default) records no addresses, `net` only the network, `full` the
  whole address

### Sessions and notifications

`opengym_session_days` sets how long a sign-in lasts (default 90 days). Push notifications work
without configuration; VAPID keys are generated on first run. `opengym_vapid_subject` can be set
to a `mailto:` address if the push services should have a contact. `opengym_allowed_private_ips`
allows push endpoints whose DNS resolves to private addresses (a DNS proxy or a split-horizon
resolver), as a comma or space separated list of addresses, ranges and CIDR blocks.

### Photos and videos

Every profile has a quota for the photos, GIFs and videos attached to custom exercises and
logged workouts. The API defaults are usually fine and can be changed with:

- `opengym_media_uploads` - `"0"` removes the upload routes, leaving a link field only
- `opengym_media_quota_mb` - space per profile, `"0"` for no cap
- `opengym_media_image_max_mb`, `opengym_media_gif_max_mb`, `opengym_media_video_max_mb` - per
  file limits
- `opengym_media_video_max_sec` - video length
- `opengym_media_uploads_per_hour` - uploads per profile per hour
- `opengym_media_min_free_mb` - uploads are refused below this much free disk, `"0"` for no floor
- `opengym_media_gc_grace_days` - how long a file nobody uses is kept
- `opengym_media_upload_max` - the web container's body limit, keep it above the video limit

### AI Coach

The Coach is off until an admin turns it on under **Admin dashboard → AI Coach** and connects a
provider. Anthropic, OpenAI, Gemini and OpenAI-compatible endpoints (Ollama, LM Studio, vLLM,
OpenRouter, ...) are called over HTTPS with an API key and work with the prebuilt image this role
uses. The Claude Agent SDK and the Codex CLI are part of openGym's `coach` build target instead,
so they are not available here.

`opengym_coach_disabled: "1"` is a kill switch that overrules the admin toggle.
`opengym_coach_job_timeout_ms` gives a job longer than the default five minutes, which only a
local model on a CPU needs.

### Integrations

Settings → Integrations shows the health store imports and the CSV export on every instance;
webhooks are off unless a provider is named. Set `opengym_integrations: "webhook"` to let each
profile add up to ten signed webhook URLs, and `opengym_integrations_allow_lan: "1"` to allow
those URLs to point at private addresses such as Home Assistant or Node-RED on your own network.
Only do that on an instance whose users you trust.

### Advanced

- `opengym_base_path` serves openGym under a subpath such as `/gym` when the reverse proxy passes that prefix through, and must stay empty when the proxy strips it
- `opengym_cf_connecting_ip` is `$http_cf_connecting_ip` only when Cloudflare is in front, so the activity log records the real client address; empty drops the header
- `opengym_content_security_policy` replaces the Content-Security-Policy the web container sends on every response, for a reverse proxy that injects a script of its own; empty keeps the image's default

Settings without a dedicated variable can be passed through `opengym_api_optional_env` and
`opengym_web_optional_env`; a variable the role sets itself wins over the same key in either dict.

Three settings from openGym's own documentation do not apply to this role, because it runs the
prebuilt images and pins the data path:

- `WEB_PORT` is `opengym_port`
- `API_TARGET`, `VITE_IMG_BASE` and `VITE_GIF_BASE` are build-time values, so they do nothing here
- `DATA_DIR` is fixed to `/data`, the host side is `opengym_api_data_directory`
