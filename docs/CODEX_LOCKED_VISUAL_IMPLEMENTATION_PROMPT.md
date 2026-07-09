# Codex Locked Visual Implementation Prompt

Repo: https://github.com/Strategic-Minds/NATION-EPOXY-PROVS-V2

Create branch: `feature/v2-locked-visual-production-build`

Apply this package to the repo root. Run:

```bash
npm install
npm run validate:assets
npm run validate:claims
npm run smoke
npm run typecheck
npm run build
npm run score
```

Then deploy preview only. Capture desktop/mobile screenshots for all locked routes and compare against `public/locked-references/*.png`. Do not merge main or production deploy without operator approval.
