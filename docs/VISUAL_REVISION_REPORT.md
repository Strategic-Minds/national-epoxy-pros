# XTREME Website Visual Revision Report

## Finding
The green package was deploy-safe, but the rendered site did not visually match the locked approved screenshots. The approved package and the green package had identical core files for `app/globals.css`, `components/ReferencePage.tsx`, and `lib/site.ts`, so the drift was architectural: the live components were interpreting the approved visuals instead of rendering the locked A-I references as the design source.

## Fix
This revision changes the visual strategy:

- `app/layout.tsx` no longer adds a separate live header/footer around pages that already include header/footer inside the approved locked screenshots.
- `components/ReferencePage.tsx` renders the approved A-I locked reference screenshot first, full-width, as the visual source of truth.
- Live functionality remains below the locked visual, including Digital Bid, contact, chart, services, gallery, and review-slot functionality.
- `lib/site.ts` removes the unverified text claim `5-Star Rated by Homeowners` from live text and replaces it with `Verified Review Slots`.
- `scripts/check_claims.py` now rejects that unverified claim in live text.

## Release posture
This package is preview-ready. Production still requires Vercel preview, screenshot receipts, and operator approval.
