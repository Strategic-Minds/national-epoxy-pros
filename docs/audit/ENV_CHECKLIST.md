# Environment Checklist

## Required locally

- Node.js 20+ recommended
- npm
- Vercel CLI for deployment
- Git for repo handoff

## Required environment variables

No production secrets are required for the current static/mock-safe validation package.

## Optional/gated integrations

- Supabase: approval-gated
- AI Gateway: approval-gated
- CRM/form live lead routing: approval-gated
- SMS/email/customer messages: approval-gated
- Payments: approval-gated

## Commands

```bash
npm ci
npm run validate:all
npm run build
vercel
BASE_URL="https://YOUR-VERCEL-PREVIEW.vercel.app" node scripts/capture-screenshots.mjs
npm run score
# approval required before production
vercel --prod
```
