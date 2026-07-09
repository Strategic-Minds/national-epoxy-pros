# Blockers and Workarounds

## Blockers
- Browser screenshots cannot complete inside this workspace due to environment restrictions.
- Vercel deployment proof must be generated after pushing to Strategic-Minds/national-epoxy-pros main.
- nationalepoxypros.com must be verified live after Vercel deploys.
- npm audit reports 2 moderate findings in the Next/PostCSS dependency chain; force fix would downgrade Next and is not applied.

## Workarounds
- Run screenshot capture against the Vercel deployment URL or nationalepoxypros.com after deployment.
- Do not use `npm audit fix --force`; keep Next 15.5.20 unless a safe compatible patch is available.
- Use only Strategic-Minds/national-epoxy-pros main, not preview projects or XTREME repo.
# Blockers and Workarounds

## Blockers
- None for local replacement and validation.
- Live Vercel/domain proof still pending because it requires the push-to-main deployment cycle.

## Workarounds used
- Set `CHROMIUM_PATH` to the installed Chrome binary for local screenshot capture.
