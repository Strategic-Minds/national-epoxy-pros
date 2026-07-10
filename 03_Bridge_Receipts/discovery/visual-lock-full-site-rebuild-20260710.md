# National Epoxy Pros Visual Lock Full-Site Rebuild Receipt

PHASE: DISCOVERY + VISUAL LOCK / STEP 1
DATE: 2026-07-10
BRANCH: visual-lock/full-site-rebuild-20260710

## Operator instruction
Use the uploaded NATIONAL_EPOXY_PROS_COMPLETE_REPLACEMENT_PACKAGE as the locked visual source of truth. Rebuild the full National Epoxy Pros site as real Next.js components, not screenshot surfaces.

## Locked visual references
- public/locked-references/A_homepage.png
- public/locked-references/B_free_digital_bid.png
- public/locked-references/C_design_center_color_charts.png
- public/locked-references/D_floor_systems.png
- public/locked-references/E_metallic_epoxy.png
- public/locked-references/F_garage_flake.png
- public/locked-references/G_polished_concrete.png
- public/locked-references/H_exterior_coatings.png
- public/locked-references/I_contact.png

## Branch changes
- Replaced site data with locked package content and safe verified-claims posture.
- Applied locked black, white, and gold visual system.
- Rebuilt the page renderer as real React/HTML/CSS components.
- Kept screenshots out of the live page surface.
- Preserved forms and route structure.
- Extended validation checks for visual-lock branches.

## Explicitly removed / blocked claims
- 5-Star Rated by Homeowners
- 10+ Year System Warranty
- Lifetime Warranty
- 24-Hour Quote Guarantee
- Licensed, Insured & Bonded / Licensed & Insured
- 10,000+ projects
- Wrong phone number: (480) 800-8246

## Required validation before merge
- npm install
- npx tsc --noEmit
- npm run build
- static grep anti-regression checks
- route smoke test
- visual comparison against locked references
- Vercel project/domain mapping confirmation

## Production gate
Do not merge, deploy, or attach production domain until branch validation and operator approval are complete.

## Verified
- Uploaded package contains locked visual references A through I.
- Package contains real Next.js app/components/lib source files.
- Risky claims named by operator were removed or blocked in validation.

## Inferred
- Locked references are visual blueprints, not live page assets.
- Existing public image assets are expected to exist in the repo or Vercel build context.

## Could not verify
- Live Vercel project/domain source mapping.
- Visual parity in browser until preview deployment is available.

## Blockers
- Binary asset upload is limited by text-only GitHub file connector if any package images are missing.
- Production domain previously did not reflect repaired repo source.

## Workarounds
- Use existing repo assets where present.
- Keep package screenshots only as local/source QA references.
- Require Vercel mapping verification before release.

## Next actions
- Open PR.
- Wait for validation workflow.
- Compare preview screenshots to locked references.
- Verify Vercel project and domain mapping before production release.
