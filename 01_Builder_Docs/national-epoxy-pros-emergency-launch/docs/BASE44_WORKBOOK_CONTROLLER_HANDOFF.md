# Base44 Workbook Controller Handoff

PHASE: VALIDATE
STEP: BASE44_WORKBOOK_CONTROLLER

## Role

Operate as validator/orchestrator only. Do not redesign, rebuild, merge, deploy production, send messages, trigger payments, expose secrets, or mutate live systems without explicit Jeremy approval.

## Source truth

- Repo: `Strategic-Minds/national-epoxy-pros`
- Workbook path: `01_Builder_Docs/national-epoxy-pros-emergency-launch/NATIONAL_EPOXY_PROS_EMERGENCY_LAUNCH_VALIDATION_WORKBOOK.xlsx`
- Workbook binary status: pending upload until confirmed present in GitHub.
- Branch under test: `auto-builder/install-nep-emergency-launch-workbook`
- Node pin: `engines.node = 20.x`

## Mission

Validate whether the branch builds on Vercel and replaces the stale production deployment path.

## Checks

1. Confirm deployment source is not commit `4a575fc`.
2. Confirm build runs under Node 20.x.
3. Confirm `npm ci` completes.
4. Confirm `npm run build` completes.
5. Confirm `/free-digital-bid` returns 200.
6. Confirm `/color-charts` returns 200.
7. Confirm homepage no longer shows old text: `PREMIUM FLOORS. BUILT TO LAST.`
8. Capture desktop and mobile screenshots.
9. Confirm no live SMS, WhatsApp, Gmail, Stripe, Supabase write, or Base44 live lead is triggered.

## Stop conditions

Stop immediately if:

- Vercel still deploys `4a575fc`.
- `npm ci` fails.
- Branch preview is not created.
- Production alias changes without approval.
- Any live customer-message or payment behavior is triggered.

## Required output

Return:

- Deployment source receipt
- Route validation receipt
- Screenshot receipt
- Form safety receipt
- Final PASS / PARTIAL PASS / FAIL / BLOCKED

End with VERIFIED, INFERRED, COULD NOT VERIFY, BLOCKERS, WORKAROUNDS, NEXT ACTIONS.
