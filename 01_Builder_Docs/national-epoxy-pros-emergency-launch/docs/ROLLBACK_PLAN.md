# Rollback Plan

PHASE: RELEASE / STEP: ROLLBACK_READY

## Protected state

Production remains locked until Jeremy approves merge/promotion.

## Rollback options

1. If branch preview fails:
   - Do not merge.
   - Leave production on current READY deployment.
   - Record build logs and failure receipt.

2. If branch preview succeeds but visual QA fails:
   - Do not merge.
   - Create targeted patch branch only after approval.

3. If production is promoted and fails:
   - Roll back to last known READY Vercel deployment.
   - Do not change domain/DNS unless required.
   - Record deployment ID, timestamp, rollback actor, and reason.

4. If npm ci still crashes:
   - Confirm Node version.
   - Confirm npm version.
   - Confirm lockfile version.
   - Consider installCommand override only after approval.

## Never roll back by

- Deleting repo files.
- Replacing source truth with old PR #2/#3 code.
- Overwriting current package without a receipt.
- Changing DNS blindly.
