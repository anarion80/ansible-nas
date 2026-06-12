---
title: "Supabase"
description: "The open source Firebase alternative with Postgres, Auth, instant APIs, Edge Functions, Realtime, and Storage"
---

Homepage: [https://supabase.com/](https://supabase.com/)

Supabase is the open source Firebase alternative. It provides a Postgres database, Authentication, instant APIs, Edge Functions, Realtime subscriptions, Storage, and Vector embeddings out of the box.

## Usage

Set `supabase_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

Set all `supabase_*` variables in `inventories/<your_inventory>/group_vars/all.yml`.

The Supabase dashboard can be found at [http://ansible_nas_host_or_ip:8186](http://ansible_nas_host_or_ip:8186).

## Specific Configuration

You MUST change all default secrets before starting Supabase for the first time. At minimum, update:

- `supabase_postgres_password` - Database password
- `supabase_jwt_secret` - Must be at least 32 characters
- `supabase_dashboard_password` - Must contain at least one letter
- `supabase_secret_key_base` - Must be at least 64 characters
- `supabase_vault_enc_key` - Must be exactly 32 characters
- `supabase_pg_meta_crypto_key` - Must be at least 32 characters

### Optional Services

Disable services you don't need to reduce resource usage:

- `supabase_realtime_enabled: false` - Disable Realtime subscriptions
- `supabase_storage_enabled: false` - Disable Storage and image processing
- `supabase_functions_enabled: false` - Disable Edge Functions
