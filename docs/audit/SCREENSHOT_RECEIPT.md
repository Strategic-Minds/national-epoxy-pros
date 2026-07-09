# Screenshot Receipt

Local browser screenshot capture was attempted with:

```bash
BASE_URL=http://127.0.0.1:3000 node scripts/capture-screenshots.mjs
```

Result: blocked by workspace browser policy with `net::ERR_BLOCKED_BY_ADMINISTRATOR`.

Required after Vercel deploy:

```bash
BASE_URL="https://nationalepoxypros.com" node scripts/capture-screenshots.mjs
npm run score
```
# Screenshot Receipt

Local capture status: PASS.

Captured routes:
- `/`
- `/contact`
- `/floor-systems`
- `/flake-garage-floors`
- `/metallic-epoxy`
- `/exterior-coatings`
- `/color-charts`
- `/free-digital-bid`
- `/digital-bid`

Capture outputs:
- `validation/screenshots/desktop/`
- `validation/screenshots/mobile/`
- `validation/receipts/screenshot-validation.json`
