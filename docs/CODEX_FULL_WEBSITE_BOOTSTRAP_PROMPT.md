You are operating on https://github.com/Strategic-Minds/NATION-EPOXY-PROVS-V2.

Use this full emergency website ZIP as the repo root.

Create branch: feature/nep-v2-full-production-site

Run:

npm install
npm run validate:assets
npm run smoke
npm run build

Push the branch, create PR, and trigger Vercel preview.

Do not push to main.
Do not deploy production.
Do not expose secrets.
Do not connect live SMS/email/WhatsApp/payments/production databases.

Return:
- branch
- PR URL
- preview URL
- asset validation output
- smoke output
- build output
- desktop screenshot
- mobile screenshot
- blockers
- release recommendation
