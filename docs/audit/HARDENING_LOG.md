# Hardening Log

## Dependency hardening
- `next`: 15.5.4 -> 15.5.20
- `eslint`: 9.17.0 -> 9.39.4
- `playwright`: 1.49.1 -> 1.61.1
- `postcss`: 8.4.49 -> 8.5.10

## Audit result after hardening
- Critical: 0
- High: 0
- Moderate: 2
- Low: 0

The remaining moderate findings are still reported by npm audit through the Next/PostCSS dependency chain. They are documented as residual review items and should be checked again after Vercel preview install.
