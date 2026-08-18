# VisaCheck Pro – Mac Local Setup

Run the website and daily scraper on your Mac. Scrape locally, then upload only the static files + `data/live-data.json` to FastComet.

## 1. Prerequisites

### Install Node.js (LTS)
```bash
# Option A – Homebrew (recommended)
brew install node

# Option B – Download from https://nodejs.org (LTS)
```

Check:
```bash
node -v    # should be v18+ or v20+
npm -v
```

### Optional: Chrome
Puppeteer downloads its own Chromium. You do **not** need a separate Chrome install for the scraper.

---

## 2. Get the project on your Mac

Copy the whole `visa-checklist-site` folder to your Mac (AirDrop, USB, zip download, or git).

Example location:
```bash
cd ~/Projects/visa-checklist-site
```

Project should look like:
```
visa-checklist-site/
├── index.html
├── app.js
├── extra-data.js
├── package.json
├── data/
│   └── live-data.json
├── scripts/
│   ├── scrape-daily.js
│   └── run-daily.sh
├── MAC-SETUP.md
├── README-SCRAPING.md
└── DEPLOY-FASTCOMET.md
```

---

## 3. Install dependencies (once)

```bash
cd ~/Projects/visa-checklist-site
npm install
```

This installs **Puppeteer** (and Chromium). First install can take a few minutes and use ~300–400 MB disk.

If install fails on Apple Silicon:
```bash
export PUPPETEER_SKIP_DOWNLOAD=false
npm install puppeteer
```

---

## 4. Run the website locally

### Simple way (no server)
```bash
open index.html
```
Or double-click `index.html` in Finder.

> Note: loading `data/live-data.json` may be blocked by browser security (`file://`). Prefer a local server:

### Better way – local server
```bash
# From project folder
npx serve .
# or
python3 -m http.server 8080
```

Then open:
- http://localhost:3000  (serve)
- http://localhost:8080  (python)

You should see:
- Country + visa selectors
- **Generate Full Checklist (Merged Research)**
- Live research banner (loads `data/live-data.json`)

---

## 5. Run the daily scraper

```bash
cd ~/Projects/visa-checklist-site
npm run scrape
```

Or:
```bash
node scripts/scrape-daily.js
```

What happens:
1. HTTP fetch for GOV.UK, Canada, Spain, etc.
2. On **403 / blocked** pages → **Puppeteer** (headless Chrome)
3. Writes:
   - `data/live-data.json`  ← website reads this
   - `data/scrape-log.txt`  ← log

First full run may take 2–5 minutes (Puppeteer sources are slower).

---

## 6. Automate daily scrape on Mac (optional)

### Using launchd (native Mac scheduler)

Create `~/Library/LaunchAgents/com.visacheckpro.scrape.plist`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>com.visacheckpro.scrape</string>
  <key>ProgramArguments</key>
  <array>
    <string>/usr/local/bin/node</string>
    <string>/Users/YOUR_USERNAME/Projects/visa-checklist-site/scripts/scrape-daily.js</string>
  </array>
  <key>WorkingDirectory</key>
  <string>/Users/YOUR_USERNAME/Projects/visa-checklist-site</string>
  <key>StartCalendarInterval</key>
  <dict>
    <key>Hour</key>
    <integer>6</integer>
    <key>Minute</key>
    <integer>0</integer>
  </dict>
  <key>StandardOutPath</key>
  <string>/Users/YOUR_USERNAME/Projects/visa-checklist-site/data/cron-out.log</string>
  <key>StandardErrorPath</key>
  <string>/Users/YOUR_USERNAME/Projects/visa-checklist-site/data/cron-err.log</string>
</dict>
</plist>
```

Replace `YOUR_USERNAME` and the node path (`which node`).

Load it:
```bash
launchctl load ~/Library/LaunchAgents/com.visacheckpro.scrape.plist
```

Or use **crontab**:
```bash
crontab -e
# Add:
0 6 * * * cd /Users/YOUR_USERNAME/Projects/visa-checklist-site && /usr/local/bin/node scripts/scrape-daily.js >> data/cron.log 2>&1
```

---

## 7. Deploy to FastComet after scrape

Upload **only** these (via FTP / cPanel File Manager / Git):

| File | Required |
|------|----------|
| `index.html` | Yes |
| `app.js` | Yes |
| `extra-data.js` | Yes |
| `data/live-data.json` | Yes (after each scrape) |

**Do not upload** `node_modules/` to shared hosting.

Target: `https://hhcvisa.ffgpak.com`

After upload, hard-refresh the live site (`Cmd+Shift+R`).

---

## 8. Quick test checklist on Mac

1. `npm install` completes without errors  
2. `npm run scrape` finishes and updates `data/live-data.json`  
3. Local server shows the site  
4. Select **United Kingdom → Spouse / Partner** → Generate  
5. Documents tab includes sponsor + finance + education notes  
6. Research tab shows scrape status  
7. Print / Export PDF works  

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `Cannot find module 'puppeteer'` | Run `npm install` in project root |
| Scraper stuck / Chrome crash | Close other Chrome instances; ensure enough RAM |
| Live banner says “static snapshot” | Run scrape, confirm `data/live-data.json` exists, use local server not `file://` |
| CORS / failed to load JSON | Always use `npx serve .` or `python3 -m http.server` |
| 403 still failing | Puppeteer path should handle most; some sites may still block – check `data/scrape-log.txt` |

---

## Summary workflow

```text
Mac (daily)
  npm run scrape  →  data/live-data.json updated

Deploy
  Upload index.html + app.js + extra-data.js + data/live-data.json
  → https://hhcvisa.ffgpak.com
```

You are set up correctly for local Mac + FastComet static hosting.
MD