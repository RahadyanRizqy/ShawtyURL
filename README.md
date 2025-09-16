# ShawtyURL
<p align="center">
    <img src="https://raw.githubusercontent.com/RahadyanRizqy/ShawtyURL/refs/heads/main/assets/shawty-url.png" width="75%" alt="ShawtyURL Banner" align="center">
</p>

A serverless URL shortener built for Cloudflare Workers and D1 database. With one-time QRCode authentication.

## Features

- Create short, memorable URLs
- Serverless architecture
- Simple web interface for management

## Prerequisites

- Node.js (v22+)
- npm
- Cloudflare Wrangler CLI v4+
- Cloudflare account

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ShawtyURL.git shawtyurl
   cd shawtyurl
   ```

2. Install dependencies:
   ```bash
   cd panel
   npm install
   cd ../resolver
   npm install
   ```

## Configuration

1. Copy the example `wrangler.jsonc.example` file

2. Update the `wrangler.jsonc.example` files with your Cloudflare account details and other configuration.

## Login with Wrangler

1. Install Wrangler globally if you haven't already:
   ```bash
   npm install -g wrangler
   ```

2. Login to your Cloudflare account:
   ```bash
   wrangler login
   ```
   This will open a browser window where you can authenticate with your Cloudflare credentials.

3. Verify your login:
   ```bash
   wrangler whoami
   ```

## Database Setup and Migration

1. Create a new D1 database:
   ```bash
   wrangler d1 create SHORTLINKS
   ```
   Copy the details and put them in `wrangler.jsonc` both in panel and resolver

2. Apply the database migrations:
   ```bash
   cd panel
   wrangler d1 execute SHORTLINKS --remote --file=../migrations/001_create_shortlinks.sql
   ```

3. Create a new KV namespace:
   ```bash
   wrangler kv namespace create OTP
   ```
   Copy the details and put them in `wrangler.jsonc` only in panel

## Local Development

1. Start the development server:
   ```bash
   # In the dir of the workers
   wrangler dev --remote
   ```

2. The panel interface will be available at `http://localhost:8787`

## Deployment

1. Deploy the panel and resolver separately:
   ```bash
   cd panel
   wrangler deploy
   
   cd ../resolver
   wrangler deploy
   ```

## Post-deployment configuration on dashboard (optional)
You may...
- Setup QRCode authentication with Authy, Google Authenticator, and Ente (compulsory)
- Use your own domain to redirect to the resolver
- Use your own desired default redirect URL (to redirect unknown shortcodes)
- Use your own desired domain with subdomain to access the panel

## Usage

1. Access the panel at your deployed URL
2. Log in using the authentication key
3. Create new short URLs and manage existing ones

## Notes
- Animated BG (https://github.com/baunov/gradients-bg)