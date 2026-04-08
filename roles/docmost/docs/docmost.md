# Docmost

Homepage: [https://github.com/docmost/docmost](https://github.com/docmost/docmost)

Open-source collaborative document editor and knowledge base

## Usage

Set `docmost_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

Docmost web interface can be found at [http://ansible_nas_host_or_ip:3038](http://ansible_nas_host_or_ip:3038).

## Configuration

The following environment variables can be configured:

### Application Configuration

- `docmost_app_secret`: A long secret key for the application (default: "REPLACE_WITH_LONG_SECRET")
- `docmost_db_pass`: PostgreSQL database password (default: "STRONG_DB_PASSWORD")
- `docmost_app_url`: The URL where Docmost will be accessible (default: `https://docmost.{{ ansible_nas_domain }}`)
- `docmost_jwt_token_expires_in`: JWT token expiration time (default: "30d")

### Storage Configuration

- `docmost_storage_driver`: Storage driver - "local" or "s3" (default: "local")
- `docmost_file_upload_size_limit`: Maximum file upload size (default: "50mb")
- `docmost_file_import_size_limit`: Maximum file import size (default: "100mb")

### S3 Storage (optional)

- `docmost_aws_s3_access_key_id`: AWS S3 access key ID
- `docmost_aws_s3_secret_access_key`: AWS S3 secret access key
- `docmost_aws_s3_region`: AWS S3 region
- `docmost_aws_s3_bucket`: AWS S3 bucket name
- `docmost_aws_s3_endpoint`: AWS S3 endpoint URL (for compatible services)
- `docmost_aws_s3_force_path_style`: Force path-style addressing (default: "false")

### Email Configuration

- `docmost_mail_driver`: Email driver - "smtp" or "postmark" (default: "smtp")
- `docmost_smtp_host`: SMTP server hostname
- `docmost_smtp_port`: SMTP server port
- `docmost_smtp_username`: SMTP username
- `docmost_smtp_password`: SMTP password
- `docmost_smtp_secure`: Use TLS (default: "false")
- `docmost_mail_from_address`: Sender email address
- `docmost_mail_from_name`: Sender name (default: "Docmost")
- `docmost_postmark_token`: Postmark API token (if using postmark)

### Other Configuration

- `docmost_drawio_url`: Draw.io server URL (default: <https://embed.diagrams.net>)
- `docmost_disable_telemetry`: Disable telemetry (default: "false")

It is recommended to change the default passwords and secrets for production use.
