# Mac → MySQL (FastComet) monthly workflow

No GitHub Actions required. You run everything on your Mac, then upload SQL + website files to FastComet.

## One-time setup

### 1. FastComet MySQL
1. cPanel → **MySQL Databases**
2. Create database + user, assign **ALL PRIVILEGES**
3. Note: host (usually `localhost`), db name, user, password

### 2. Import schema + seed
1. cPanel → **phpMyAdmin**
2. Select your database
3. Import **`sql/schema.sql`**
4. Import **`sql/seed-core.sql`**

### 3. API config
1. Edit **`api/config.php`** with real DB credentials
2. Upload folder **`api/`** to site root so URL is:
   `https://hhcvisa.ffgpak.com/api/checklist.php`

Test in browser:
```
https://hhcvisa.ffgpak.com/api/checklist.php?origin=pk&dest=gb&visa=family
```
You should see JSON with UK spouse-style requirements from the seed.

### 4. Website files on FastComet
Upload:
- `index.html`
- `countries.js`
- `global-app.js`
- `app.js`
- `extra-data.js`
- `api/config.php` + `api/checklist.php`

### 5. Point UI at API
In `global-app.js` / `app.js`, checklist load should call the API first (see `api-client.js` if provided). Fallback to local DB object if API fails.

## Monthly on your Mac

```bash
cd visa-checklist-site/scraper
npm install
npm run scrape
```

Outputs:
- `sql/monthly-update.sql`  ← import in phpMyAdmin
- `data/live-data.json`     ← optional research log

Then:
1. phpMyAdmin → Import **`sql/monthly-update.sql`**
2. (Optional) upload refreshed front-end files if you changed them

## Puppeteer note
Sites that block simple HTTP are fetched with Puppeteer (headless Chrome). First `npm install` downloads Chromium.

## Growing toward full coverage
1. Keep adding official URLs to `scraper/scrape-to-sql.js` → `SOURCES`
2. Add hand-verified rows to `requirements` / `financial_rules` for new destinations
3. Add `origin_code` rows for nationality-specific rules (TB lists, VAC cities, etc.)

The API always returns **corridor-specific** packs (origin + dest + visa). Seed data for UK/US/CA/AU/Schengen is real operational structure, not invented thresholds presented as fixed law—notes tell users to confirm current figures on official sites.
MD
