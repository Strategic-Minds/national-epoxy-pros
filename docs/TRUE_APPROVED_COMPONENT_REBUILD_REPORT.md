# XTREME Website True Approved Component Rebuild Report

## Decision
This package restores the real live component website from the approved NEP V2 locked visual build packet and rejects the later screenshot-as-page strategy.

## What was wrong with PR #2 / screenshot restore
The previous approved-visual restore rendered `public/locked-references/*.png` as the first public page layer, then placed live functionality below it. That made routes return 200 and screenshot receipts look acceptable, but it was not the real website. It was a screenshot poster plus a second website underneath.

## What this package does
- Restores `TopTrustBar`, `Header`, `{children}`, and `Footer` in `app/layout.tsx`.
- Restores the real component `ReferencePage` hero, trust strip, sections, forms, charts, gallery, and QA-only locked reference details.
- Keeps locked A-I references in `public/locked-references` for QA only.
- Keeps approved images and color charts.
- Keeps the mock-safe Digital Bid flow.
- Keeps safer live-copy posture by removing the unverified `5-Star Rated by Homeowners` live-text claim.
- Adds `scripts/validate_visual_strategy.py` so the screenshot-as-page strategy fails validation.

## Production posture
Preview-ready after Codex/Vercel validation. Production remains blocked until the Vercel preview URL, screenshots, and operator visual approval are complete.
