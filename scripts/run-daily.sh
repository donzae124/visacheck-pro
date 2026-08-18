#!/usr/bin/env bash
# Daily visa research scrape – schedule with cron, e.g.:
#   0 6 * * * /path/to/visa-checklist-site/scripts/run-daily.sh >> /path/to/data/cron.log 2>&1
set -euo pipefail
DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$DIR"
echo "[$(date -Iseconds)] Starting daily scrape..."
node scripts/scrape-daily.js
echo "[$(date -Iseconds)] Done. Output: data/live-data.json"
