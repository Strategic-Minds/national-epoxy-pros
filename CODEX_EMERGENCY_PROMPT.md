# CODEX PROMPT: NATIONAL EPOXY PROS EMERGENCY PRODUCTION-READY PREVIEW

You are Codex working in the new National Epoxy Pros repo.

Operate on branch `feature/nep-production-ready-asset-lock`.
Do not push to main. Do not deploy production. Do not expose secrets. Do not send emails/SMS. Use mock-first APIs unless env vars and operator approval exist.

FIRST:
1. Copy this packet into the repo root.
2. Run `bash scripts/install_nep_assets.sh .`.
3. Run `python3 scripts/validate_nep_asset_lock.py .` and confirm `ok: true`.

BUILD:
Create or repair the Next.js site so required routes exist and use the locked assets exactly.
Homepage hero image must be `/images/hero/nep-hero-flake-garage-sports-cars.png`.
Do not use `/images/hero/national-epoxy-pros-garage-epoxy-hero.png` as homepage hero.

ROUTES:
/ , /free-digital-bid, /design-center, /color-charts, /floor-systems, /floor-systems/metallic, /floor-systems/garage-floors, /floor-systems/polished-concrete, /floor-systems/exterior-coatings, /contact, /thank-you, /privacy, /terms, /offline.

APPROVED CLAIMS ONLY:
- 24 Hour Quote Guarantee
- Over 70 Locations
- Powered by Xtreme Polishing Systems - America's #1 Epoxy Superstore
- Built Nationwide. Made To Last.

REJECTED CLAIMS:
- 12-hour quote
- 500+ cities
- fake reviews
- fake warranties
- fake licensed/insured/bonded claims

VALIDATE:
- npm install
- npm run build
- asset validator
- screenshot desktop/mobile
- form submits to mock/test endpoint
- no rejected claims
- PWA manifest loads

RETURN:
- preview URL
- branch name
- build output summary
- screenshot paths
- asset validation JSON
- blockers
- release recommendation
