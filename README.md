# Mongol OS Website

Official website source for `https://mongol-os.org`, representing the Mongolian Debian-based Linux OS project.

## For Contributors

### Requirements
- Node.js 20+ (or current LTS)
- npm
- Docker (for production-style local deploy)

### Local development
```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

### Quality checks
```bash
npm run lint
npm run build
```

### Project structure
- `src/app/page.tsx` — homepage
- `src/app/code-of-conduct/page.tsx` — Code of Conduct page
- `src/app/privacy-statement/page.tsx` — Privacy Statement page
- `src/app/terms-of-use/page.tsx` — Terms of Use page
- `src/app/sponsors-and-contributors/page.tsx` — Sponsors & Contributors page
- `src/app/layout.tsx` — global layout and footer navigation

## Deployment (VPS)

This repo includes:
- `Dockerfile`
- `docker-compose.yml`

Manual deploy:
```bash
docker compose up -d --build
```

Production routing:
- Canonical site: `https://mongol-os.org`
- `www` and alias domains are redirected to the canonical domain.

## Auto-deploy

The VPS runs a systemd timer that checks `main` every 24 hours and deploys when changed.

Immediate deploy trigger:
```bash
sudo systemctl start mongol-os-web-autodeploy.service
```
