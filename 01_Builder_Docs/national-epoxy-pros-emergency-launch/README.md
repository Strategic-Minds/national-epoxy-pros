# National Epoxy Pros Emergency Launch Workbook Controller

PHASE: VALIDATE / STEP: WORKBOOK INSTALL

This folder registers the National Epoxy Pros Emergency Launch Validation Workbook as the source-truth control packet for rescuing the National Epoxy Pros website deployment.

## Purpose

Use this workbook controller to stop agent drift and validate the current replacement package against GitHub, Vercel, routes, screenshots, and production gates.

## Canonical workbook

- Workbook name: `NATIONAL_EPOXY_PROS_EMERGENCY_LAUNCH_VALIDATION_WORKBOOK.xlsx`
- Intended repo path: `01_Builder_Docs/national-epoxy-pros-emergency-launch/NATIONAL_EPOXY_PROS_EMERGENCY_LAUNCH_VALIDATION_WORKBOOK.xlsx`
- Current binary status: `PENDING_BINARY_UPLOAD`

The active GitHub connector available to this run supports UTF-8 text file writes, not direct binary `.xlsx` upload. Do not fake the workbook binary. Upload the workbook binary with Codex/Git CLI or GitHub web upload, then rerun validation.

## Emergency facts

- Production domain: `nationalepoxypros.com`
- Stale production commit previously detected: `4a575fc`
- Correct replacement package commit reported by Base44: `068f75e221fe`
- Current branch fix: adds `engines.node = 20.x` to avoid Vercel Node 24/npm install crash.

## Validation commands

Run after binary upload or after branch preview build:

```bash
npm ci
npm run validate:assets
npm run validate:claims
npm run validate:visual-strategy
npm run smoke
npm run typecheck
npm run build
npm run score
npm run validate:all
```

## Production gate

Production remains locked until:

1. Vercel builds from the current replacement package.
2. Deployment source is not `4a575fc`.
3. `/free-digital-bid` returns 200.
4. `/color-charts` returns 200.
5. Desktop and mobile screenshots pass.
6. No live SMS, WhatsApp, Gmail, Stripe, Supabase write, or Base44 live lead is triggered.
7. Jeremy approves production promotion or merge.

## Do not

- Do not redesign.
- Do not merge old PR #2 or PR #3 code.
- Do not overwrite production without approval.
- Do not send customer messages.
- Do not expose secrets.
