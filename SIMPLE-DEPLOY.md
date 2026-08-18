# Pakistan → Selected Destinations (GitHub + FastComet only)

## Scope
- **Origin:** Pakistan (fixed)
- **Destinations:** UK, USA, Canada, Australia, Europe (Schengen/EU pick country), China, Gulf (pick country), Saudi Arabia, Malaysia

## Stack
- **FastComet:** static site (`index.html`, `app.js`, `extra-data.js`, `simple-pk.js`)
- **GitHub:** daily scrape → updates `data/live-data.json` on `master`
- Site loads live JSON from:
  `https://raw.githubusercontent.com/donzae124/visacheck-pro/master/data/live-data.json`

## Files to upload to FastComet (site root)
1. `index.html`
2. `app.js`
3. `extra-data.js`
4. `simple-pk.js`
5. (optional) `data/live-data.json` as offline fallback

**Do not need:** countries.js, global-app.js, api-client.js, api/, sql/, scraper/ for this simplified mode.

## GitHub
1. Commit these files to `donzae124/visacheck-pro` on **master**
2. Ensure repo is **Public** (for raw.githubusercontent.com)
3. Actions → **Daily visa scrape** → Run workflow once
4. Confirm: https://raw.githubusercontent.com/donzae124/visacheck-pro/master/data/live-data.json

## Workflow file
`.github/workflows/daily-scrape.yml` – already included

## Test
1. Open site → Destination **United Kingdom** → Spouse → Generate
2. Destination **Europe** → pick Spain → Business → Generate
3. Destination **Gulf** → UAE → Visit → Generate
