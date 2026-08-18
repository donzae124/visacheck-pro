# Deploying to FastComet (hhcvisa.ffgpak.com)

## Critical: shared hosting limits
FastComet **shared hosting** typically cannot run Puppeteer / headless Chrome or long Node scrape jobs.

**Correct architecture:**
1. Scrape **elsewhere** (PC, VPS, or GitHub Actions) once per day.
2. Upload **static files** + `data/live-data.json` to FastComet via FTP/cPanel.

## Upload to public_html (or subdomain folder)
- index.html
- app.js
- extra-data.js
- data/live-data.json

Do **not** upload node_modules. Visitors only need the static site + JSON.

## Daily update
On a machine with Node + Puppeteer:
```bash
cd visa-checklist-site
npm install
npm run scrape
```
Upload refreshed `data/live-data.json` so it is available at:
`https://hhcvisa.ffgpak.com/data/live-data.json`

## SSL
Enable AutoSSL / Let's Encrypt for hhcvisa.ffgpak.com in cPanel.

## Go-live checklist
- [ ] Files uploaded
- [ ] HTTPS works
- [ ] Generate checklist works
- [ ] Live banner or static fallback works
- [ ] Print/PDF works
- [ ] Disclaimer visible
