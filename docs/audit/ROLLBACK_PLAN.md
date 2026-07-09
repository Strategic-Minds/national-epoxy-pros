# Rollback Plan

## Before production
Keep all changes on branch:
`feature/forensic-launch-validation`

## Rollback command if branch changes need reversal
```bash
git checkout main
git branch -D feature/forensic-launch-validation
```

## Vercel rollback
If a production deployment is later approved and fails, use Vercel dashboard:
Project -> Deployments -> Previous known-good deployment -> Promote to Production.

Do not promote production without operator approval.
