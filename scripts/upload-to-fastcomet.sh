#!/usr/bin/env bash
# Upload data/live-data.json to FastComet after a successful scrape.
# Configure credentials via .fastcomet.env (never commit passwords).
#
# Usage:
#   ./scripts/upload-to-fastcomet.sh

set -euo pipefail
DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$DIR"

ENV_FILE="${DIR}/.fastcomet.env"
if [[ -f "$ENV_FILE" ]]; then
  # shellcheck disable=SC1090
  source "$ENV_FILE"
fi

: "${FTP_HOST:?Set FTP_HOST in .fastcomet.env}"
: "${FTP_USER:?Set FTP_USER in .fastcomet.env}"
: "${FTP_PASS:?Set FTP_PASS in .fastcomet.env}"
REMOTE_ROOT="${FTP_REMOTE_ROOT:-public_html}"

if [[ ! -f data/live-data.json ]]; then
  echo "ERROR: data/live-data.json not found. Run npm run scrape first."
  exit 1
fi

if ! command -v lftp >/dev/null 2>&1; then
  echo "ERROR: lftp not installed. Run: sudo apt install -y lftp"
  exit 1
fi

echo "[$(date -Iseconds)] Uploading data/live-data.json → ${FTP_HOST}:${REMOTE_ROOT}/data/"

lftp -u "${FTP_USER},${FTP_PASS}" "ftp://${FTP_HOST}" <<LFTP
set ftp:ssl-allow no
set ftp:passive-mode true
set net:timeout 30
set net:max-retries 3
cd ${REMOTE_ROOT}
mkdir -p data
put data/live-data.json -o data/live-data.json
bye
LFTP

echo "[$(date -Iseconds)] Upload complete."
echo "File size: $(wc -c < data/live-data.json | tr -d ' ') bytes"
