PHASE: TRUE APPROVED COMPONENT REBUILD
STEP: INSTALL REAL WEBSITE PACKAGE, NOT SCREENSHOT POSTER

Repo:
https://github.com/Strategic-Minds/XTREME-NATIONAL-EPOXY

Package:
XTREME_NATIONAL_EPOXY_TRUE_APPROVED_PACKAGE.zip

MISSION:
Apply this package to the repo so the live website is built from real components and matches the approved visual direction. Do not use locked screenshots as the public page layer.

BRANCH:
feature/true-approved-component-rebuild

DO NOT:
- Do not merge PR #2 as-is.
- Do not use the screenshot-as-page strategy.
- Do not render `/locked-references/${page.ref}` as the first public page layer.
- Do not leave “Live Functionality” copy on public pages.
- Do not remove real TopTrustBar, Header, or Footer from app/layout.tsx.
- Do not use a Vercel project generically named `repo` for final approval.
- Do not deploy production.
- Do not connect live SMS, email, WhatsApp, payment, or database services.
- Do not change the approved visual direction or substitute images.

MANDATORY FILE INTENT:
- `app/layout.tsx` must render `<TopTrustBar/><Header/>{children}<Footer/>`.
- `components/ReferencePage.tsx` must render live hero/sections/forms/charts, not screenshot poster pages.
- Locked screenshots stay in `public/locked-references` and may be shown only in QA/reference details, not as the main public page.
- `lib/site.ts` must preserve approved content/assets and use safe live trust language.

VALIDATION:
Run:

npm ci
npm run validate:assets
npm run validate:claims
npm run validate:visual-strategy
npm run smoke
npm run typecheck
npm run build
npm run score
npm run validate:all

If any command fails, patch the smallest exact issue and rerun the full sequence.

VERCEL:
Open a PR from `feature/true-approved-component-rebuild`.
Create a Vercel preview tied to `Strategic-Minds/XTREME-NATIONAL-EPOXY`, preferably under a project named `xtreme-national-epoxy` or `national-epoxy-pros`, not `repo`.

SCREENSHOT QA:
After preview is green, run:

BASE_URL="[VERCEL_PREVIEW_URL]" node scripts/capture-screenshots.mjs

Capture desktop/mobile screenshots for:
/
/contact
/floor-systems
/flake-garage-floors
/metallic-epoxy
/exterior-coatings
/color-charts
/free-digital-bid
/digital-bid

FINAL OUTPUT:
Return:
PHASE:
STEP:
BRANCH:
PR URL:
VERCEL PROJECT NAME:
VERCEL PREVIEW URL:
DID YOU REMOVE SCREENSHOT-AS-PAGE STRATEGY:
DID YOU RESTORE REAL HEADER/FOOTER:
LOCAL VALIDATION:
SCREENSHOT STATUS:
VISUAL MATCH NOTES:
ROUTES VERIFIED:
FILES CHANGED:
BLOCKERS:
RELEASE RECOMMENDATION:
