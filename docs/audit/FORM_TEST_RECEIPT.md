# Form Test Receipt

Endpoint: /api/digital-bid
Mode: mock-safe
Live sending: disabled/gated

Captured local response:

```json
{"ok":true,"mode":"mock-safe","message":"Digital bid request prepared for review. Live integrations are gated."}
```
# Form Test Receipt

Local API test status: PASS.

Request:
- POST `/api/digital-bid`
- fake/test payload only

Response:
- `ok: true`
- `mode: mock-safe`
- `message: Digital bid request prepared for review. Live integrations are gated.`
