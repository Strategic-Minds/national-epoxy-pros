# Codex Visual-Lock Handoff

PHASE: BUILD / BRANCH ONLY
STEP: Implement Approved Website System v1

## Repo
`Strategic-Minds/national-epoxy-pros`

## Branch
`visual-lock/approved-nep-v1`

## Current Production
- URL: https://nationalepoxypros.com
- Source: main
- Production remains locked.

## Mission
Make the website match the approved images in the Drive folder as closely as possible. This is a visual parity implementation, not a redesign.

## Drive Source Truth
- Root: https://drive.google.com/drive/folders/1yiZl4PZvzd3SAvzokqSZx4zwencinQB4
- Approved images: https://drive.google.com/drive/folders/1Xvq8nbS8M_jEWJB4r_I6Fj0_DLSgHZzr

## Required Route Map
1. `/` -> `E_home.png`
2. `/contact` -> `F_contact.png`
3. `/floor-systems` -> `C_floor_systems.png`
4. `/digital-bid` and `/free-digital-bid` -> `A_digital_bid.png`
5. `/metallic-epoxy` -> `B_metallic_epoxy.png`
6. `/flake-garage-floors` -> `D_flake_garage_floors.png`
7. `/design-center` and `/color-charts` -> `G_design_center.png`
8. `/exterior-coatings` -> `H_exterior_coatings.png`

## Business Data to Use
- Address: 2200 NW 32nd St #700, Pompano Beach, FL 33069
- Phone: (877) 958-6408
- Phone href: tel:+18779586408
- WhatsApp: +15559730487
- SMS: +15616780328
- Inbound leads: leads@nationalepoxypros.com
- Outbound/support: support@nationalepoxypros.com
- XPS rating: 4.4-star, not 5-star

## Forbidden
- Do not write to main.
- Do not deploy production.
- Do not change DNS/domains.
- Do not expose secrets.
- Do not send live WhatsApp, SMS, Gmail, or customer messages.
- Do not run payments.
- Do not mutate live customer data.
- Do not claim XPS is 5-star.
- Do not invent fake reviews, ratings, awards, or counts.
- Do not add unapproved visual sections.
- Do not remove approved sections.

## Implementation Plan
1. Pull latest branch.
2. Confirm approved image folder contains all 8 images.
3. Commit approved images into `01_Source_Truth/national-epoxy-pros/approved-website-system-v1/images/` if accessible.
4. Patch global header/top bar/logo/nav/footer.
5. Patch routes one by one in the route order above.
6. Replace unsupported review/star language.
7. Install locked business data in footer, forms, schema, and contact surfaces.
8. Keep WhatsApp/SMS implementation in sandbox/draft mode only.

## Validation Commands
Run only commands that exist:

```bash
npm install
npm run typecheck
npm run build
npm run validate:all
npm run smoke
```

Record skipped checks with reasons.

## Required Output
- Vercel preview URL
- Desktop screenshot for every approved route
- Mobile screenshot for every approved route
- Mismatch ledger
- Build command output
- Claims scan result
- Business data scan result
- Rollback note

## Stop Condition
Stop after preview and validation. Do not merge. Do not deploy production. Wait for Jeremy approval.
