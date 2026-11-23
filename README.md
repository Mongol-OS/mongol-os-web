This is the official website project for `mongol-os.org`, built with [Next.js](https://nextjs.org).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Deploy with Docker + Traefik (VPS)

This repo includes production deployment files:

- `Dockerfile`
- `docker-compose.yml`

Start or update deployment:

```bash
docker compose up -d --build
```

## Auto-deploy schedule

This VPS is configured to auto-deploy `main` every 24 hours using a systemd timer.
If you need immediate deployment after a push, run:

```bash
sudo systemctl start mongol-os-web-autodeploy.service
```

The compose file publishes the service to Traefik on:

- `https://mongol-os.org`

The `www.mongol-os.org` alias is expected to be redirected to the canonical domain by your edge routing config.
