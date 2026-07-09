# National Epoxy Pros V2 Locked Visual Full Production Build Packet

This packet merges the production bootstrap code with the approved locked Codex visual package. The locked A-I references govern the build.

## Required commands

```bash
npm install
npm run validate:assets
npm run validate:claims
npm run smoke
npm run typecheck
npm run build
npm run score
```

## Production gate

This package is branch/preview-ready. Production requires Vercel build, desktop screenshots, mobile screenshots, form tests, PWA checks, and operator claim approval.


---

# Complete Launch Package Instructions

## Install

```bash
npm ci
```

## Validate locally

```bash
npm run validate:assets
npm run validate:claims
npm run validate:visual-strategy
npm run smoke
npm run typecheck
npm run build
npm run score
npm run validate:all
```

## Deploy Vercel preview

```bash
vercel
```

## Capture preview screenshots

```bash
BASE_URL="https://YOUR-VERCEL-PREVIEW.vercel.app" node scripts/capture-screenshots.mjs
npm run score
```

## Production promotion

Approval required before running:

```bash
vercel --prod
```

## Current status

The package is preview-ready. Production remains blocked until Vercel preview, browser screenshots, claim approval, and operator approval are recorded.
