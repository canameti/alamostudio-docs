#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

echo "==> Installing dependencies"
pnpm install --frozen-lockfile

echo "==> Building production app"
rm -rf docs/.nuxt docs/node_modules/.cache/nuxt
pnpm run docs:build

echo "==> Starting / reloading PM2"
if pm2 describe alamostudio-docs > /dev/null 2>&1; then
  pm2 reload ecosystem.config.cjs --update-env
else
  pm2 start ecosystem.config.cjs
fi

pm2 save

echo "==> Deploy complete"
pm2 status alamostudio-docs
