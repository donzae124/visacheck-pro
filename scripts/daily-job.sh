#!/usr/bin/env bash
# Daily job: scrape → upload live-data.json to FastComet
set -euo pipefail
DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$DIR"
LOG_DIR="${DIR}/data"
mkdir -p "$LOG_DIR"
LOG="${LOG_DIR}/daily-job.log"

{
  echo "======== $(date -Iseconds) START ========"
  /usr/bin/node scripts/scrape-daily.js
  ./scripts/upload-to-fastcomet.sh
  echo "======== $(date -Iseconds) DONE ========"
} >> "$LOG" 2>&1
