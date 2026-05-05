# Gramps Web

Homepage: [https://gramps-project.github.io/gramps-web/](https://gramps-project.github.io/gramps-web/)

Gramps Web is a web-based genealogy software application for collaborative family tree research.

## Usage

Set `grampsweb_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

Gramps Web web interface can be found at [http://ansible_nas_host_or_ip:3039](http://ansible_nas_host_or_ip:3039).

## Configuration

All Gramps Web configuration options are available as environment variables prefixed with `GRAMPSWEB_`. See the [official documentation](https://www.grampsweb.org/install_setup/configuration/) for full details.

### Required Settings

- `grampsweb_tree`: The Gramps Web tree name (default: "Gramps Web")
- `grampsweb_secret_key`: Flask secret key (required for production)
- `grampsweb_user_db_uri`: User database URI (required for production)

### Email Settings

- `grampsweb_email_host`: SMTP server host
- `grampsweb_email_port`: SMTP server port
- `grampsweb_email_host_user`: SMTP server username
- `grampsweb_email_host_password`: SMTP server password
- `grampsweb_email_use_tls`: Boolean, use TLS (deprecated)
- `grampsweb_email_use_ssl`: Boolean, use implicit SSL/TLS
- `grampsweb_email_use_starttls`: Boolean, use explicit STARTTLS
- `grampsweb_default_from_email`: "From" address for automated e-mails

### OIDC Authentication

- `grampsweb_oidc_enabled`: Boolean, enable OIDC authentication
- `grampsweb_oidc_issuer`: OIDC provider issuer URL
- `grampsweb_oidc_client_id`: OAuth client ID
- `grampsweb_oidc_client_secret`: OAuth client secret
- `grampsweb_oidc_name`: Custom display name for the provider
- `grampsweb_oidc_scopes`: OAuth scopes (default: "openid email profile")
- `grampsweb_oidc_username_claim`: Claim to use for username
- `grampsweb_oidc_disable_local_auth`: Boolean, disable local auth
- `grampsweb_oidc_auto_redirect`: Boolean, auto-redirect to OIDC

### Built-in OIDC Providers

- `grampsweb_oidc_google_client_id` / `grampsweb_oidc_google_client_secret`
- `grampsweb_oidc_microsoft_client_id` / `grampsweb_oidc_microsoft_client_secret`
- `grampsweb_oidc_github_client_id` / `grampsweb_oidc_github_client_secret`

### AI Features

- `grampsweb_llm_base_url`: Base URL for OpenAI-compatible chat API
- `grampsweb_llm_model`: Model to use for chat
- `grampsweb_vector_embedding_model`: Sentence Transformers model for semantic search
- `grampsweb_llm_max_context_length`: Character limit for LLM context (default: 50000)
- `grampsweb_llm_system_prompt`: Custom system prompt

### Other Settings

- `grampsweb_base_url`: Base URL where the API can be reached
- `grampsweb_cors_origins`: Allowed CORS origins
- `grampsweb_registration_disabled`: Boolean, disallow new user registration
- `grampsweb_disable_telemetry`: Boolean, disable telemetry
- `grampsweb_pillow_max_image_pixels`: Max image pixels setting
