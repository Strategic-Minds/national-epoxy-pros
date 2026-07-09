# XTREME-NATIONAL-EPOXY Clean Local-Green Package

This package is prepared for `Strategic-Minds/XTREME-NATIONAL-EPOXY`.

## Commands

```bash
npm ci
npm run validate:assets
npm run validate:claims
npm run smoke
npm run typecheck
npm run build
npm run score
npm run validate:all
```

## Vercel
This package includes `vercel.json` using `npm ci` and `npm run build`.

## Screenshot validation
After Vercel preview is green:

```bash
BASE_URL="https://YOUR-VERCEL-PREVIEW.vercel.app" node scripts/capture-screenshots.mjs
```
