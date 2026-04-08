# Docmost

Homepage: [https://github.com/docmost/docmost](https://github.com/docmost/docmost)

Open-source collaborative document editor and knowledge base

## Usage

Set `docmost_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

Docmost web interface can be found at [http://ansible_nas_host_or_ip:3038](http://ansible_nas_host_or_ip:3038).

## Configuration

The following environment variables can be configured:

- `docmost_app_secret`: A long secret key for the application (default: "REPLACE_WITH_LONG_SECRET")
- `docmost_db_pass`: PostgreSQL database password (default: "STRONG_DB_PASSWORD")
- `docmost_app_url`: The URL where Docmost will be accessible (default: "http://localhost:3038")

It is recommended to change the default passwords and secrets for production use.

