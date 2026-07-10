# Emergency National Epoxy Pros Repair Receipt

PHASE: DISCOVERY / STEP 1
BRANCH: emergency/real-site-repair-20260709
DATE: 2026-07-09

## Scope
Stabilize the National Epoxy Pros website repair path without mutating production. The approved visual direction must be rebuilt as real Next.js, React, HTML, and CSS components, not full-page screenshots or invisible overlays.

## Verified
- Repository inspected: Strategic-Minds/national-epoxy-pros.
- Default branch is main.
- Bad commit stack exists in main history:
  - cb3d472 fix: make approved mockups the visible page surface
  - e50d1e2 fix: style approved mockup surface as full page
  - bb83531 fix: add clickable hotspots over approved visual pages
  - 253a236 fix: make approved mockup buttons clickable
  - d31dfbc fix: rebuild pages as real working components
- Current main contains a partial real-component correction in components/ReferencePage.tsx.
- Current live site at https://nationalepoxypros.com did not match inspected repository source at time of audit.
- Live page text still exposed unverified or wrong claims and data during audit:
  - phone shown as (480) 800-8246
  - 5-star rated claim
  - 10,000+ projects completed claim
  - licensed and insured claim
- The Vercel team visible to the connector was Strategic Minds Advisory, but the National Epoxy Pros project/domain was not visible in the listed project set.

## Branch Changes
- Created safe branch: emergency/real-site-repair-20260709.
- Normalized lib/site.ts to verified business data and safe claim language.
- Expanded real navigation to the required repair routes.
- Replaced header with one real sticky header only.
- Rebuilt ReferencePage as real HTML/CSS/React sections with real buttons, real forms, real cards, and editable chart usage.
- Cleaned globals.css to remove screenshot-surface styling and keep responsive real layout styles.

## Production Gate
Production mutation is blocked. Do not merge or attach domain until:
- npm run typecheck passes
- npm run build passes
- homepage loads
- required routes load
- nav works
- forms render and post to /api/leads
- no duplicate headers
- no screenshot-as-page pattern
- no invisible hotspots
- mobile layout is usable
- Vercel project/domain source is verified

## Rollback
If preview fails, abandon branch emergency/real-site-repair-20260709 and keep production locked. Do not force-push main.
