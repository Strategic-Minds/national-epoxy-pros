# CODEX HANDOFF: NATIONAL EPOXY PROS REPO REPLACEMENT

## PHASE
REPLACE -> VALIDATE -> PUSH MAIN -> VERCEL DOMAIN PROOF

## ABSOLUTE TARGETS

Use ONLY this GitHub repo:

```text
https://github.com/Strategic-Minds/national-epoxy-pros
```

Use ONLY this branch:

```text
main
```

Use ONLY this Vercel production target/domain context:

```text
Deployment: national-epoxy-pros-ccjfvufoi-strategic-minds-advisory.vercel.app
Domain: nationalepoxypros.com
Source: main
Known current commit before replacement: 4a575fc
Known current commit message before replacement: init: .gitignore
```

## FORBIDDEN TARGETS

Do NOT use:

```text
Strategic-Minds/XTREME-NATIONAL-EPOXY
Strategic-Minds/XPSWEBSITES
xpswebsites
xpswebsites-wefb
national-epoxy-pros-preview
feature/true-approved-national-epoxy-build
any new Vercel project
any preview-only Vercel project
```

If Codex sees any of those as the active repo/project, STOP and relink to `Strategic-Minds/national-epoxy-pros`.

## SOURCE PACKAGE

Use the folder/package contents from:

```text
NATIONAL_EPOXY_PROS_COMPLETE_REPLACEMENT_PACKAGE
```

This package was compiled from the prior National Epoxy Pros launch package, validated locally, and renamed specifically for the real National Epoxy Pros repo replacement.

## MISSION

Replace the contents of `Strategic-Minds/national-epoxy-pros` with this package, validate locally, push to `main`, then verify Vercel and `nationalepoxypros.com`.

## OPERATING RULES

- Do not create a new Vercel project.
- Do not push to a feature branch.
- Do not deploy from XTREME-NATIONAL-EPOXY.
- Do not expose secrets.
- Do not print `.env` values.
- Do not activate Twilio, SMS, email sending, payments, Supabase writes, or customer messaging.
- Do not reassign DNS or domains without explicit operator approval.
- Vercel auto-deploy from `main` is acceptable if the repo is connected to the existing `nationalepoxypros.com` project.

## REQUIRED FIRST OUTPUT

Before changing files, output:

```text
PHASE:
STEP:
TARGET_REPO:
TARGET_BRANCH:
TARGET_DOMAIN:
TARGET_VERCEL_DEPLOYMENT:
SOURCE_PACKAGE:
TODO:
VALIDATION_COMMANDS:
APPROVAL_GATES:
EXPECTED_RESULT:
```

## STEP 1: CLONE ONLY THE CORRECT REPO

```bash
git clone https://github.com/Strategic-Minds/national-epoxy-pros.git
cd national-epoxy-pros
git remote -v
git branch --show-current
git log --oneline -10
git status --short
```

STOP if the repo is not `Strategic-Minds/national-epoxy-pros`.

## STEP 2: CONFIRM VERCEL CONTEXT

```bash
if [ -f .vercel/project.json ]; then cat .vercel/project.json; else echo "No .vercel/project.json present"; fi
vercel whoami
vercel projects ls --scope strategic-minds-advisory
```

The correct project must be the one connected to `nationalepoxypros.com` and/or the deployment `national-epoxy-pros-ccjfvufoi-strategic-minds-advisory.vercel.app`.

If Vercel tries to create `national-epoxy-pros-preview`, STOP.

## STEP 3: REPLACE REPO CONTENTS

Preserve only:

```text
.git/
.github/ if present
.vercel/ if present
.env.example if present
.env.local.example if present
```

Do not print or delete real secret env files.

Remove old app/package files:

```bash
rm -rf app components lib public scripts docs outputs validation
rm -f package.json package-lock.json pnpm-lock.yaml yarn.lock
rm -f next.config.js next.config.mjs next.config.ts
rm -f tsconfig.json vercel.json postcss.config.* tailwind.config.*
rm -f README.md
```

Copy all contents of `NATIONAL_EPOXY_PROS_COMPLETE_REPLACEMENT_PACKAGE` into the repo root.

Required files after copy:

```bash
test -f package.json
test -f package-lock.json
test -f vercel.json
test -f app/layout.tsx
test -f app/page.tsx
test -f components/Header.tsx
test -f components/Footer.tsx
test -f components/DigitalBidForm.tsx
test -f public/manifest.json
test -f public/manifest.webmanifest
test -f scripts/score_release_readiness.py
test -f scripts/smoke_static_routes.py
test -f scripts/validate_v2_assets.py
test -f scripts/check_claims.py
test -f scripts/validate_visual_strategy.py
test -f scripts/capture-screenshots.mjs
test -f CODEX_NATIONAL_EPOXY_PROS_REPLACEMENT_HANDOFF.md
test -f docs/audit/FINAL_RELEASE_SCORECARD.md
test -f docs/audit/ROLLBACK_PLAN.md
```

## STEP 4: LOCAL VALIDATION

Run exactly:

```bash
npm ci
npm run validate:assets
npm run validate:claims
npm run validate:visual-strategy
npm run smoke
npm run build
npm run typecheck
npm run score
npm run validate:all
npm audit --audit-level=moderate
```

Known local result from package compilation:

```text
npm ci: PASS
validate:assets: PASS
validate:claims: PASS
validate:visual-strategy: PASS
smoke: PASS
build: PASS
typecheck: PASS
score: 82/100
validate:all: PASS
npm audit: 2 moderate findings from Next/PostCSS chain; do NOT force downgrade to next@9.3.3
```

If typecheck fails only because `.next/types` does not exist, run `npm run build` then `npm run typecheck` again.

## STEP 5: LOCAL ROUTE AND FORM CHECKS

Run local server:

```bash
npm run start
```

Check routes:

```text
/
/contact
/floor-systems
/flake-garage-floors
/metallic-epoxy
/exterior-coatings
/color-charts
/free-digital-bid
/digital-bid
/privacy
/terms
/offline
/robots.txt
/sitemap.xml
```

Expected: HTTP 200 for all listed routes.

Test `/api/digital-bid` with fake/test data only. Expected response:

```json
{"ok":true,"mode":"mock-safe","message":"Digital bid request prepared for review. Live integrations are gated."}
```

## STEP 6: COMMIT AND PUSH MAIN

Only after validation passes:

```bash
git status --short
git add .
git commit -m "Replace with complete National Epoxy Pros launch package"
git push origin main
```

Do NOT push to a feature branch.

## STEP 7: VERCEL AND DOMAIN PROOF

After push, confirm Vercel deploys the existing project attached to:

```text
nationalepoxypros.com
national-epoxy-pros-ccjfvufoi-strategic-minds-advisory.vercel.app
```

Confirm:

```text
Deployment status: Ready
Source branch: main
Commit SHA: new replacement commit
Domain attached: nationalepoxypros.com
No new preview project created
```

Then run:

```bash
BASE_URL="https://nationalepoxypros.com" node scripts/capture-screenshots.mjs
npm run score
```

If DNS has not updated yet, use the exact Vercel deployment URL for screenshots first, then retest the production domain.

## STEP 8: UPDATE RECEIPTS

Update:

```text
IMPLEMENTATION_RECEIPT.md
docs/audit/REPO_REPLACEMENT_RECEIPT.md
docs/audit/VERCEL_PREVIEW_RECEIPT.md
docs/audit/SCREENSHOT_RECEIPT.md
docs/audit/FORM_TEST_RECEIPT.md
docs/audit/PWA_SEO_RECEIPT.md
docs/audit/FINAL_RELEASE_SCORECARD.md
docs/audit/BLOCKERS_AND_WORKAROUNDS.md
docs/audit/FINAL_OPERATOR_APPROVAL_CHECKLIST.md
```

## FINAL REPORT REQUIRED

Return:

```text
Target repo:
Branch:
Commit before:
Commit after:
Vercel deployment:
Domain status:
Validation commands run:
Build result:
Route test table:
Screenshot result:
Form test result:
Final score:
Production live: yes/no
Remaining blockers:
Exact next action:
```

## FINAL STATUS BLOCK

End with:

```text
VERIFIED:
INFERRED:
COULD NOT VERIFY:
BLOCKERS:
WORKAROUNDS:
NEXT ACTIONS:
```
