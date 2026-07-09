#!/usr/bin/env bash
set -euo pipefail
ROOT="${1:-.}"
PACKET_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
echo "[NEP] Installing locked public assets into: $ROOT/public"
mkdir -p "$ROOT/public"
rsync -a "$PACKET_DIR/repo_public/public/" "$ROOT/public/"
echo "[NEP] Installed assets. Running validator..."
python3 "$PACKET_DIR/scripts/validate_nep_asset_lock.py" "$ROOT"
echo "[NEP] Asset lock PASS. Now run: npm install && npm run build"
