PHASE: CLEAN REPO DEPLOY
STEP: INSTALL XTREME-NATIONAL-EPOXY LOCAL-GREEN PACKAGE

You are Codex operating on the clean repo:
https://github.com/Strategic-Minds/XTREME-NATIONAL-EPOXY

MISSION:
Install the attached local-green XTREME-NATIONAL-EPOXY package into the clean repo, validate it, deploy Vercel preview only, and fix only if Vercel logs show a real failure.

DO NOT:
- Do not push directly to main.
- Do not deploy production.
- Do not use `latest` dependencies.
- Do not change the approved visual direction.
- Do not remove locked references.
- Do not substitute images.
- Do not remove Digital Bid.
- Do not connect live SMS/email/WhatsApp/payments/database.
- Do not copy `.next`, `node_modules`, old receipts, logs, artifact trees, or old repo history.

BRANCH:
feature/clean-xtreme-national-epoxy-launch

INSTALL:
1. Apply this package to the repo root.
2. Confirm these files exist:
   - package.json
   - package-lock.json
   - next.config.mjs
   - vercel.json
   - .npmrc
   - .vercelignore
   - app/layout.tsx
   - app/page.tsx
   - components/ReferencePage.tsx
   - lib/site.ts
   - public/locked-references/A_homepage.png through I_contact.png
   - public/color-charts/*.webp
   - public/images/floor-systems/*.png
   - scripts/validate_v2_assets.py
   - scripts/check_claims.py
   - scripts/smoke_static_routes.py
   - scripts/score_release_readiness.py
   - scripts/capture-screenshots.mjs

MANDATORY LOCAL VALIDATION:
Run:

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

EXPECTED LOCAL RESULT:
- assets: pass
- claims: pass
- smoke: pass
- typecheck: pass
- build: pass
- score: preview-ready / production-blocked until Vercel + screenshots

VERCEL LOOP:
1. Push branch.
2. Open PR.
3. Let Vercel preview run.
4. If Vercel fails, read exact Vercel build log.
5. Patch only the exact failing cause.
6. Re-run local validation.
7. Push again.
8. Repeat until Vercel is green.

SCREENSHOT LOOP AFTER VERCEL GREEN:
Run:

```bash
BASE_URL="https://YOUR-VERCEL-PREVIEW.vercel.app" node scripts/capture-screenshots.mjs
```

Capture desktop/mobile for:
- `/`
- `/contact`
- `/floor-systems`
- `/flake-garage-floors`
- `/metallic-epoxy`
- `/exterior-coatings`
- `/color-charts`
- `/free-digital-bid`
- `/digital-bid`

RELEASE RULE:
- Local build fail = blocked
- Vercel fail = blocked
- Missing screenshots = preview only
- Score below 95 = preview only
- Vercel green + screenshots + operator approval = release candidate

FINAL OUTPUT:
Return:
PHASE:
STEP:
BRANCH:
PR URL:
VERCEL PREVIEW URL:
LOCAL VALIDATION:
VERCEL STATUS:
SCREENSHOT STATUS:
FILES CHANGED:
BLOCKERS:
RELEASE RECOMMENDATION:
NEXT ACTIONS:
