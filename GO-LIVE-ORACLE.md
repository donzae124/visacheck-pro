# Step-by-step: Make https://hhcvisa.ffgpak.com live  
# Backend = Oracle Free VPS (daily scrape + auto-upload)  
# Frontend = FastComet shared hosting

Follow in order. Total time: about 2–4 hours if accounts are ready.

---

## PART 1 — FastComet frontend (do this first)

### Step 1.1 — Subdomain
1. Log in to **FastComet cPanel**.
2. Open **Domains → Subdomains** (or **Domains**).
3. Create subdomain:
   - **Subdomain:** `hhcvisa`
   - **Domain:** `ffgpak.com`
   - **Document root:** note the path shown (often `public_html/hhcvisa` or similar).
4. Save. Wait a few minutes for DNS if needed.

### Step 1.2 — SSL
1. In cPanel open **SSL/TLS Status** or **Let’s Encrypt / AutoSSL**.
2. Run AutoSSL for `hhcvisa.ffgpak.com`.
3. Confirm later: `https://hhcvisa.ffgpak.com` loads without certificate warnings.

### Step 1.3 — FTP credentials
1. cPanel → **FTP Accounts** (or use main cPanel login as FTP user).
2. Note:
   - **FTP host** (often `ftp.ffgpak.com` or the server hostname from cPanel home)
   - **Username**
   - **Password**
   - **Document root path** for the subdomain (from Step 1.1)

### Step 1.4 — Upload website files (first time)
From your Mac, unzip the project, then upload **only**:

| Local file | Remote path (example) |
|------------|------------------------|
| `index.html` | `public_html/hhcvisa/index.html` |
| `app.js` | `public_html/hhcvisa/app.js` |
| `extra-data.js` | `public_html/hhcvisa/extra-data.js` |
| `data/live-data.json` | `public_html/hhcvisa/data/live-data.json` |

Ways to upload:
- **cPanel File Manager** — Create folder `data`, upload files.
- **FileZilla / Cyberduck** — FTP to the host above.

**Do not upload** `node_modules`, `scripts`, or `.env` files to FastComet.

### Step 1.5 — Quick test
Open:
- https://hhcvisa.ffgpak.com  
- https://hhcvisa.ffgpak.com/data/live-data.json  

You should see the site and a JSON file. Checklist may still show static snapshot until VPS pushes fresh data.

---

## PART 2 — Oracle Cloud Always Free VPS

### Step 2.1 — Create Oracle account
1. Go to https://www.oracle.com/cloud/free/
2. Sign up (credit card required for verification; Always Free resources are not charged if you stay within limits).
3. Choose home region (pick one close to you, e.g. closest Asia/Europe region).

### Step 2.2 — Create a Compute instance
1. Oracle Cloud Console → **Compute → Instances → Create instance**.
2. Settings:
   - **Name:** `visacheck-scraper`
   - **Image:** Canonical Ubuntu 22.04 (or 24.04)
   - **Shape:** Always Free eligible  
     - Prefer **VM.Standard.A1.Flex** (ARM): 1–2 OCPU, 6–12 GB RAM  
     - Or **VM.Standard.E2.1.Micro** (AMD) if A1 is unavailable
   - **Networking:** Create new VCN or use default; assign **public IP**
   - **SSH keys:** Generate a key pair or paste your public key  
     - Mac: `cat ~/.ssh/id_ed25519.pub` (create with `ssh-keygen -t ed25519` if needed)
3. Create. Wait until state = **Running**.
4. Copy the **Public IP address**.

### Step 2.3 — Open SSH (security list)
1. Instance → Subnet → **Security Lists → Default Security List**.
2. **Add Ingress Rule**:
   - Source: `0.0.0.0/0` (or your home IP for tighter security)
   - Protocol: TCP
   - Destination port: `22`
3. Save.

### Step 2.4 — SSH into the VPS
On your Mac:
```bash
ssh -i ~/.ssh/id_ed25519 ubuntu@YOUR_PUBLIC_IP
```
(If image uses `opc` user instead of `ubuntu`, use that.)

First login may ask to accept host key — type `yes`.

---

## PART 3 — Install software on the VPS

Run all of these on the VPS after SSH:

### Step 3.1 — System update + Node.js 20
```bash
sudo apt update && sudo apt upgrade -y

curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs git unzip lftp

node -v   # should show v20.x
npm -v
```

### Step 3.2 — Puppeteer / Chrome dependencies
```bash
sudo apt install -y \
  ca-certificates fonts-liberation libasound2t64 libatk-bridge2.0-0 \
  libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 \
  libfontconfig1 libgbm1 libgcc-s1 libglib2.0-0 libgtk-3-0 libnspr4 \
  libnss3 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 \
  libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 \
  libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 \
  wget xdg-utils
```
(If `libasound2t64` fails on older Ubuntu, try `libasound2` instead.)

---

## PART 4 — Put the project on the VPS

### Step 4.1 — Upload zip from your Mac
On **Mac** (new terminal, project folder):
```bash
scp -i ~/.ssh/id_ed25519 visa-checklist-site.zip ubuntu@YOUR_PUBLIC_IP:~/
```

### Step 4.2 — Unzip and install on VPS
On **VPS**:
```bash
cd ~
unzip visa-checklist-site.zip
cd visa-checklist-site
npm install
```
First `npm install` downloads Chromium for Puppeteer (several minutes).

### Step 4.3 — Test scrape once
```bash
npm run scrape
```
You should see success/fail counts and `data/live-data.json` updated.

Check:
```bash
ls -la data/live-data.json
head -20 data/live-data.json
```

---

## PART 5 — Auto-upload to FastComet

### Step 5.1 — Create secrets file on VPS
```bash
cd ~/visa-checklist-site
cp .fastcomet.env.example .fastcomet.env
nano .fastcomet.env
```

Fill in (from Part 1):
```bash
FTP_HOST=ftp.ffgpak.com
FTP_USER=your_actual_ftp_user
FTP_PASS=your_actual_ftp_password
FTP_REMOTE_ROOT=public_html/hhcvisa
```
Adjust `FTP_HOST` and `FTP_REMOTE_ROOT` to match your cPanel exactly.

Save (`Ctrl+O`, Enter, `Ctrl+X` in nano).

Lock permissions:
```bash
chmod 600 .fastcomet.env
chmod +x scripts/upload-to-fastcomet.sh scripts/daily-job.sh
```

### Step 5.2 — Test upload once
```bash
./scripts/upload-to-fastcomet.sh
```
If successful, open in browser:
`https://hhcvisa.ffgpak.com/data/live-data.json`  
and confirm the file’s `scrapedAt` timestamp is new.

**If upload fails:**
- Wrong `FTP_REMOTE_ROOT` — list folders via FileZilla and fix path
- FTP SSL issues — script already sets `ftp:ssl-allow no`; some hosts need FTPS (ask FastComet support for host/port)
- Passive mode: add to lftp block if needed: `set ftp:passive-mode true`

---

## PART 6 — Daily automation (scrape + push)

### Step 6.1 — Cron job
On VPS:
```bash
crontab -e
```
If asked for editor, choose nano.

Add this line (runs every day at **06:00 Pakistan time** ≈ 01:00 UTC — adjust if your VPS timezone differs):

```cron
0 1 * * * /home/ubuntu/visa-checklist-site/scripts/daily-job.sh
```

Or if VPS timezone is already Asia/Karachi:
```cron
0 6 * * * /home/ubuntu/visa-checklist-site/scripts/daily-job.sh
```

Check timezone:
```bash
timedatectl
# Optional: set to Pakistan
sudo timedatectl set-timezone Asia/Karachi
```

Save and exit.

### Step 6.2 — Verify cron
```bash
crontab -l
# After the scheduled time, or force a run now:
~/visa-checklist-site/scripts/daily-job.sh
tail -50 ~/visa-checklist-site/data/daily-job.log
```

---

## PART 7 — Final checks (go-live)

| Check | URL / action | Expected |
|-------|----------------|----------|
| Site loads | https://hhcvisa.ffgpak.com | VisaCheck Pro UI |
| HTTPS | padlock in browser | Valid certificate |
| Live JSON | https://hhcvisa.ffgpak.com/data/live-data.json | JSON with `scrapedAt` |
| Generate checklist | UK → Spouse → Generate | Documents + finance + sponsor merged |
| Live banner | Top area after load | “Live research data loaded • Last scrape: …” |
| Daily job | Next morning | New `scrapedAt` + log in `data/daily-job.log` |

Hard-refresh browser: **Cmd+Shift+R** (Mac) or **Ctrl+Shift+R**.

---

## PART 8 — Ongoing maintenance

**When you change website code (HTML/JS):**  
Upload `index.html`, `app.js`, `extra-data.js` again via FTP/cPanel (not via the daily script).

**When scrape fails:**  
```bash
ssh ubuntu@YOUR_PUBLIC_IP
cd ~/visa-checklist-site
npm run scrape
tail -100 data/scrape-log.txt
tail -50 data/daily-job.log
```

**Security tips:**
- Prefer SSH key only; disable password login later
- Restrict security list SSH to your home IP if possible
- Never put `.fastcomet.env` inside the public FastComet folder
- Rotate FTP password if leaked

---

## Quick command cheat sheet

```bash
# Mac → VPS
scp -i ~/.ssh/id_ed25519 visa-checklist-site.zip ubuntu@IP:~/

# VPS
cd ~/visa-checklist-site
npm run scrape
./scripts/upload-to-fastcomet.sh
./scripts/daily-job.sh          # scrape + upload
tail -f data/daily-job.log
```

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Cannot SSH | Check public IP, security list port 22, correct key/user |
| `npm install` / Puppeteer fails | Re-run Chrome deps in Step 3.2; ensure enough free disk (`df -h`) |
| FTP login failed | Confirm host/user/pass in cPanel; try FileZilla first |
| JSON 404 on site | Create `data/` folder on FastComet; check `FTP_REMOTE_ROOT` |
| Live banner stays “static” | Confirm JSON URL works; hard-refresh; check browser console for CORS/404 |
| Cron not running | `crontab -l`; check `data/daily-job.log`; ensure scripts are executable |

You are live when the site is on HTTPS, checklist generates, and `live-data.json` updates after `daily-job.sh` without manual upload.
MD
