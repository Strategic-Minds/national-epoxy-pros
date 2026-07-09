PHASE: TRUE APPROVED COMPONENT BUILD
STEP: INSTALL FULL APPROVED PACKAGE INTO NEW REPO

You are Codex operating on a brand-new clean repo.

NEW REPO:
https://github.com/Strategic-Minds/XTREME-NATIONAL-EPOXY

PACKAGE:
XTREME_NATIONAL_EPOXY_TRUE_APPROVED_PACKAGE.zip

MISSION:
Install this full approved website package into the new repo and deploy a Vercel preview. This package is the real component-built National Epoxy Pros website. It is NOT the screenshot-poster strategy.

SOURCE TRUTH:
Use this package exactly as the source of truth. It includes the approved live component website, approved files, approved images, approved locked references, validators, and handoff docs.

DO NOT:
- Do not use the old PR #2 screenshot-as-page strategy.
- Do not render /locked-references images as the public page body.
- Do not leave “Live Functionality” copy on public pages.
- Do not remove TopTrustBar, Header, Footer, or the real component layout.
- Do not redesign.
- Do not substitute images.
- Do not use latest dependencies.
- Do not deploy production.
- Do not connect live SMS, email, WhatsApp, payments, or database writes.
- Do not deploy to a generic Vercel project named repo.

BRANCH:
feature/true-approved-national-epoxy-build

VERCEL PROJECT NAME:
xtreme-national-epoxy

MANDATORY INSTALL:
1. Apply all package contents to the repo root.
2. Keep package-lock.json.
3. Keep public/locked-references for QA only.
4. Keep public/color-charts and public/images/floor-systems exactly.
5. Keep scripts/validate_visual_strategy.py so screenshot-as-page regression is blocked.

MANDATORY FILE INTENT:
- app/layout.tsx must render TopTrustBar, Header, children, Footer.
- components/ReferencePage.tsx must render live hero, sections, forms, charts, and gallery.
- components/ReferencePage.tsx must NOT render locked screenshots as the public first layer.
- locked screenshots may remain in public/locked-references for QA and comparison only.
- app/api/digital-bid/route.ts must stay mock-safe.

VALIDATION COMMANDS:
Run from repo root:

npm ci
npm run validate:assets
npm run validate:claims
npm run validate:visual-strategy
npm run smoke
npm run typecheck
npm run build
npm run score
npm run validate:all

If any command fails:
1. Capture the exact error.
2. Fix only the smallest exact issue.
3. Rerun the full validation sequence.

EXPECTED RESULT:
- Asset validation PASS
- Claim validation PASS
- Visual strategy validation PASS
- Smoke route validation PASS
- Typecheck PASS
- Build PASS
- Score preview-ready, production-blocked until Vercel preview and screenshots

VERCEL PREVIEW:
1. Push branch.
2. Open PR.
3. Let Vercel build preview.
4. Project name must be xtreme-national-epoxy, not repo.
5. If Vercel fails, read exact logs and patch only the exact error.

SCREENSHOT QA:
After preview is green, run:

BASE_URL="[VERCEL_PREVIEW_URL]" node scripts/capture-screenshots.mjs

Capture desktop and mobile for:
/
/contact
/floor-systems
/flake-garage-floors
/metallic-epoxy
/exterior-coatings
/color-charts
/free-digital-bid
/digital-bid

ACCEPTANCE RULES:
- Routes returning 200 is not enough.
- Screenshots existing is not enough.
- The site must be a real component-built website, not screenshot-as-page.
- Production remains blocked until operator approval.

FINAL OUTPUT:
Return:
PHASE:
STEP:
REPO:
BRANCH:
PR URL:
VERCEL PROJECT NAME:
VERCEL PREVIEW URL:
LOCAL VALIDATION:
DID YOU CONFIRM SCREENSHOT-AS-PAGE IS ABSENT:
DID YOU CONFIRM REAL HEADER/FOOTER EXISTS:
SCREENSHOT STATUS:
VISUAL MATCH NOTES:
ROUTES VERIFIED:
FILES CHANGED:
BLOCKERS:
RELEASE RECOMMENDATION:
NEXT ACTIONS:
