# Repo Replacement Receipt

Target repo: Strategic-Minds/national-epoxy-pros
Target branch: main
Target domain: nationalepoxypros.com
Target deployment context: national-epoxy-pros-ccjfvufoi-strategic-minds-advisory.vercel.app
Source package: NATIONAL_EPOXY_PROS_COMPLETE_REPLACEMENT_PACKAGE

## Local Proof Completed
- npm ci: PASS
- npm run validate:assets: PASS
- npm run validate:claims: PASS
- npm run validate:visual-strategy: PASS
- npm run smoke: PASS
- npm run build: PASS
- npm run typecheck: PASS
- npm run score: 82/100
- Local route checks: PASS
- Mock form endpoint: PASS
- Screenshot capture: PASS
- Screenshot receipt: `validation/receipts/screenshot-validation.json`

## External Proof Required
- Vercel deployment Ready state after push to main
- nationalepoxypros.com route checks
- browser screenshots against deployed URL
- final score update after screenshot receipts

## Production Gate
Do not create or use national-epoxy-pros-preview. Replace and deploy only from Strategic-Minds/national-epoxy-pros on main.
