# XTREME Website Visual Revision Package

## Root cause
The green package was deploy-safe but visually interpretive. It used component-rendered sections that were inspired by the locked screenshots, while the approved package's actual visual approval source is the locked A-I screenshot set. Comparing the approved package and green package showed the core files `app/globals.css`, `components/ReferencePage.tsx`, and `lib/site.ts` were byte-for-byte identical before this revision. That means the mismatch was not a lost asset issue. It was a rendering strategy issue: live components were approximating the approved visual instead of enforcing the approved visual.

## Revision
This package restores the approved look by rendering the locked A-I references as the first visual layer of each mapped route. The live form/chart/contact/service functionality is preserved below the locked visual so the site remains usable and mock-safe.

## Changed files
- app/layout.tsx
- components/ReferencePage.tsx
- app/globals.css
- lib/site.ts
- scripts/check_claims.py
- package.json
- package-lock.json
- docs/VISUAL_REVISION_REPORT.md

## Validation
Local validation passed for assets, claims, route smoke, typecheck, and Next production build with Next 15.5.4.

## Production gate
Production remains blocked until Vercel preview and browser screenshots pass.
