# Configuration

Configuration for project

## Environment variables

| Name | Default | Required | Notes |
|-|-|-|-|
|`PUBLIC_PORT`|`4321`|❌|Port for development and preview server|
|`SITE_BASE_URL`||✅[^base_url]|Required for RSS and sitemap in production.|
|`INDEXNOW_KEY`||✅[^indexing]||

## Project configuration

Other project configurations are located in `/src/config`.

[^base_url]: Not needed in development environment if RSS and sitemap are not needed.
[^indexing]: For indexing
