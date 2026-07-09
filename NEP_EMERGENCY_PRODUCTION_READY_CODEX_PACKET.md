# NEP EMERGENCY PRODUCTION-READY CODEX FIX PACKET

PHASE: DOCS / STEP: APPROVED-ASSET INSTALL + VALIDATION
Generated: 2026-07-08T01:46:23.942165Z

## Mission
Install locked National Epoxy Pros assets into a brand-new repo and validate that code references the approved assets, not placeholders.

## Non-Negotiables
- Do not push to main first.
- Use branch: `feature/nep-production-ready-asset-lock`.
- No production deploy until preview passes route, asset, mobile, form, and build validation.
- Do not use legacy hero `national-epoxy-pros-garage-epoxy-hero.png` on homepage.
- Homepage hero must use `/images/hero/nep-hero-flake-garage-sports-cars.png`.
- Keep both XPS chart set and NEP verified chart set unless operator approves deleting one.

## Install Command From Repo Root
```bash
bash scripts/install_nep_assets.sh .
```

If scripts are copied into repo, run:
```bash
python3 scripts/validate_nep_asset_lock.py .
npm install
npm run build
```

## Required Code References
- `/images/hero/nep-hero-flake-garage-sports-cars.png`
- `/images/floor-systems/nep-polished-concrete-commercial-lobby.png`
- `/images/floor-systems/nep-metallic-epoxy-luxury-lounge.png`
- `/images/floor-systems/nep-polished-concrete-retail.png`
- `/images/floor-systems/nep-decorative-concrete-countertop.png`
- `/images/floor-systems/nep-metallic-epoxy-residential.png`
- `/images/floor-systems/nep-solid-color-commercial-epoxy.png`
- `/images/floor-systems/nep-exterior-patio-coating.png`
- `/images/floor-systems/nep-exterior-driveway-coating.png`
- `/logos/nep-logo-horizontal-black-gold-v1.svg`
- `/manifest.json`

## Required Routes
- `/`
- `/free-digital-bid`
- `/design-center`
- `/color-charts`
- `/floor-systems`
- `/floor-systems/metallic`
- `/floor-systems/garage-floors`
- `/floor-systems/polished-concrete`
- `/floor-systems/exterior-coatings`
- `/contact`
- `/thank-you`
- `/privacy`
- `/terms`
- `/offline`

## Validation Gates
1. `python3 scripts/validate_nep_asset_lock.py .` returns `ok: true`.
2. `npm run build` passes.
3. Desktop screenshots exist for homepage and key routes.
4. Mobile screenshots exist for homepage and `/free-digital-bid`.
5. No rejected claims appear: `12-hour quote`, `500+ cities`, fake reviews, fake warranties, unverified licensed/insured/bonded.
6. Form routes to safe mock/test handler unless approved live backend exists.
7. Preview URL returned for operator review.

## Receipt Requirement
Create `/docs/receipts/nep-production-readiness-receipt.md` with command outputs and screenshot paths.
