# Codex Binary Upload and Validation Handoff

PHASE: BUILD / STEP: BINARY_UPLOAD_ONLY

## Mission

Upload the workbook binary that ChatGPT created into the repo branch, then run validation. Do not redesign or rewrite the website.

## Files

Source local file expected from operator:

`NATIONAL_EPOXY_PROS_EMERGENCY_LAUNCH_VALIDATION_WORKBOOK.xlsx`

Target repo path:

`01_Builder_Docs/national-epoxy-pros-emergency-launch/NATIONAL_EPOXY_PROS_EMERGENCY_LAUNCH_VALIDATION_WORKBOOK.xlsx`

## Branch

`auto-builder/install-nep-emergency-launch-workbook`

## Rules

- Do not push to main.
- Do not merge.
- Do not deploy production.
- Do not edit site design.
- Do not touch secrets/env vars.
- Do not trigger customer messaging.

## Commands

```bash
git checkout auto-builder/install-nep-emergency-launch-workbook
mkdir -p 01_Builder_Docs/national-epoxy-pros-emergency-launch
cp /path/to/NATIONAL_EPOXY_PROS_EMERGENCY_LAUNCH_VALIDATION_WORKBOOK.xlsx 01_Builder_Docs/national-epoxy-pros-emergency-launch/NATIONAL_EPOXY_PROS_EMERGENCY_LAUNCH_VALIDATION_WORKBOOK.xlsx
git add 01_Builder_Docs/national-epoxy-pros-emergency-launch/NATIONAL_EPOXY_PROS_EMERGENCY_LAUNCH_VALIDATION_WORKBOOK.xlsx
git commit -m "docs: add NEP emergency launch validation workbook binary"
git push origin auto-builder/install-nep-emergency-launch-workbook
```

## Validation

```bash
npm ci
npm run validate:assets
npm run validate:claims
npm run validate:visual-strategy
npm run smoke
npm run typecheck
npm run build
npm run score
```

## Expected result

The branch should build under Node 20.x because package.json pins:

```json
"engines": { "node": "20.x" }
```

If Vercel still uses Node 24.x, stop and report project settings override/root cause.
