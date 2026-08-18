# Daily data scraping – VisaCheck Pro

## What it does
`scripts/scrape-daily.js` fetches public official guidance pages (GOV.UK, IRCC, Spain VAC, etc.), extracts simple signals (financial requirement mentions, TB, fees), and writes:

- `data/live-data.json` – consumed by the website
- `data/scrape-log.txt` – append-only log

The front-end loads `data/live-data.json` on startup and shows scrape status on the Research tab.

## Run once
```bash
cd visa-checklist-site
node scripts/scrape-daily.js
```

Or:
```bash
./scripts/run-daily.sh
```

## Schedule daily (cron)
```bash
# Every day at 06:00
0 6 * * * /full/path/to/visa-checklist-site/scripts/run-daily.sh >> /full/path/to/visa-checklist-site/data/cron.log 2>&1
```

## Limits
- Some sites (e.g. travel.state.gov, homeaffairs.gov.au) return HTTP 403 to basic bots – expected.
- This is **public page snapshotting**, not a full visa API.
- Always verify critical decisions on official sites.
- For production: add more sources, use headless browser where needed, and host the site so `data/live-data.json` is writable and served.

## Extending sources
Edit the `SOURCES` array in `scripts/scrape-daily.js`.
