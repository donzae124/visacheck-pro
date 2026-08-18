# Free VPS + FastComet Frontend Setup

**Architecture**
```
┌─────────────────────────────┐     daily upload      ┌──────────────────────────────┐
│  Free VPS (backend)         │  ──────────────────►  │  FastComet (frontend)        │
│  - Node + Puppeteer scrape  │   data/live-data.json │  https://hhcvisa.ffgpak.com  │
│  - cron every day 06:00     │                       │  static: index.html, app.js  │
└─────────────────────────────┘                       └──────────────────────────────┘
```

Scrape runs on the VPS. Only static files + JSON live on FastComet shared hosting.

---

## Recommended free / cheap VPS options

| Provider | Free tier | Notes |
|----------|-----------|--------|
| **Oracle Cloud Always Free** | 2× AMD VMs or 4 ARM OCPUs, 24 GB RAM total | Best long-term free option. Requires card for verification; no charge if you stay in free limits. |
| **Google Cloud / AWS / Azure** | Free credits (time-limited) | Good for testing; not permanent free. |
| **Railway / Render / Fly.io** | Free or hobby tier | Easier deploy; may sleep or limit long cron + Puppeteer. |
| **GitHub Actions** | 2,000 min/month free | No VPS needed. Schedule scrape, commit or SCP `live-data.json` to FastComet. |

**Best permanent free choice:** Oracle Cloud Always Free (Ubuntu ARM or AMD).

**Easiest no-VPS choice:** GitHub Actions (see section at bottom).

---

## A. Oracle Cloud free VPS (recommended)

### 1. Create instance
1. Sign up: https://www.oracle.com/cloud/free/
2. Create **Compute → Instance**
   - Image: **Ubuntu 22.04** or 24.04
   - Shape: Always Free eligible (VM.Standard.A1.Flex ARM or AMD E2.1.Micro)
   - Add SSH key
3. Open ports if needed (SSH 22 is enough; no public web required for scraper)

### 2. SSH in and install stack
```bash
ssh ubuntu@YOUR_VPS_IP

sudo apt update && sudo apt upgrade -y
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs git

# Puppeteer system deps (Ubuntu)
sudo apt install -y \
  ca-certificates fonts-liberation libasound2 libatk-bridge2.0-0 \
  libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 \
  libfontconfig1 libgbm1 libgcc1 libglib2.0-0 libgtk-3-0 libnspr4 \
  libnss3 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 \
  libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 \
  libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 \
  lsb-release wget xdg-utils
```

### 3. Deploy project on VPS
```bash
cd ~
# Upload zip via scp from your Mac, or git clone if you push to GitHub
unzip visa-checklist-site.zip -d visa-checklist-site
cd visa-checklist-site
npm install
npm run scrape   # test once
```

From your Mac:
```bash
scp visa-checklist-site.zip ubuntu@YOUR_VPS_IP:~/
```

### 4. Daily cron on VPS
```bash
crontab -e
```
Add:
```cron
0 6 * * * cd /home/ubuntu/visa-checklist-site && /usr/bin/node scripts/scrape-daily.js >> data/cron.log 2>&1
```

### 5. Push `live-data.json` to FastComet daily

**Option 1 – FTP/SFTP script (lftp)**
```bash
sudo apt install -y lftp
```

Create `scripts/upload-to-fastcomet.sh`:
```bash
#!/bin/bash
set -euo pipefail
cd "$(dirname "$0")/.."
# Run scrape first if you want
# node scripts/scrape-daily.js

lftp -u "YOUR_FTP_USER","YOUR_FTP_PASSWORD" ftp://YOUR_FTP_HOST <<EOF
cd public_html/hhcvisa   # or your subdomain document root
mkdir -p data
put data/live-data.json -o data/live-data.json
bye
EOF
```

Cron:
```cron
15 6 * * * /home/ubuntu/visa-checklist-site/scripts/upload-to-fastcomet.sh >> /home/ubuntu/visa-checklist-site/data/upload.log 2>&1
```

**Option 2 – SCP if FastComet gives SSH**
```bash
scp data/live-data.json user@fastcomet-host:~/public_html/data/
```

---

## B. Frontend on FastComet (hhcvisa.ffgpak.com)

Upload once (and when you change HTML/JS):

| File | Path on host |
|------|----------------|
| `index.html` | document root |
| `app.js` | document root |
| `extra-data.js` | document root |
| `data/live-data.json` | `data/live-data.json` |

In cPanel:
1. Create subdomain **hhcvisa** → `hhcvisa.ffgpak.com`
2. Point document root to the folder with `index.html`
3. Enable **AutoSSL / Let’s Encrypt**
4. Confirm: `https://hhcvisa.ffgpak.com` and `https://hhcvisa.ffgpak.com/data/live-data.json`

Do **not** upload `node_modules` or run Node on FastComet shared hosting.

---

## C. GitHub Actions (no VPS)

Create `.github/workflows/daily-scrape.yml` in a GitHub repo:

```yaml
name: Daily visa scrape
on:
  schedule:
    - cron: '0 1 * * *'   # 06:00 PKT ≈ 01:00 UTC
  workflow_dispatch:

jobs:
  scrape:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: sudo apt-get update && sudo apt-get install -y ca-certificates fonts-liberation libasound2t64 libatk-bridge2.0-0 libatk1.0-0 libcups2 libdbus-1-3 libdrm2 libgbm1 libgtk-3-0 libnspr4 libnss3 libx11-xcb1 libxcomposite1 libxdamage1 libxrandr2 xdg-utils
      - run: npm install
      - run: npm run scrape
      - name: Upload live-data.json via FTP
        env:
          FTP_HOST: ${{ secrets.FTP_HOST }}
          FTP_USER: ${{ secrets.FTP_USER }}
          FTP_PASS: ${{ secrets.FTP_PASS }}
        run: |
          sudo apt-get install -y lftp
          lftp -u "$FTP_USER","$FTP_PASS" "ftp://$FTP_HOST" -e "cd public_html; mkdir -p data; put data/live-data.json -o data/live-data.json; bye"
```

Add secrets in GitHub repo → Settings → Secrets: `FTP_HOST`, `FTP_USER`, `FTP_PASS`.

---

## D. Study sources (for research only)

These are **not** official immigration law. Treated as study guidance / market signals:

- https://www.applyboard.com/blog  
- https://www.studies-overseas.com/  
- https://www.educatly.com/  
- https://adventus.io/  
- https://edvoy.com/  
- https://www.idp.com/pakistan/  
- https://studyportals.com/  

Official GOV.UK / IRCC / embassies remain the source of truth for checklists.

---

## Go-live checklist

- [ ] Free VPS or GitHub Actions runs `npm run scrape` successfully  
- [ ] `data/live-data.json` updates daily  
- [ ] JSON uploaded to FastComet `data/live-data.json`  
- [ ] `https://hhcvisa.ffgpak.com` serves index.html over HTTPS  
- [ ] Browser shows live banner with last scrape time  
- [ ] Generate checklist works for UK spouse / student etc.

**Minimum time to go live:** same day for static frontend; 1–2 days for free VPS + cron + FTP upload.
MD
