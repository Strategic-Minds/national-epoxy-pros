
from pathlib import Path
routes=['app/page.tsx','app/free-digital-bid/page.tsx','app/digital-bid/page.tsx','app/design-center/page.tsx','app/color-charts/page.tsx','app/floor-systems/page.tsx','app/floor-systems/metallic/page.tsx','app/floor-systems/garage-floors/page.tsx','app/floor-systems/polished-concrete/page.tsx','app/floor-systems/exterior-coatings/page.tsx','app/contact/page.tsx','app/reviews/page.tsx','app/about/page.tsx','app/service-areas/page.tsx','app/privacy/page.tsx','app/terms/page.tsx','app/offline/page.tsx','app/api/digital-bid/route.ts','app/robots.ts','app/sitemap.ts']
missing=[r for r in routes if not Path(r).exists()]
print({'ok':not missing,'checked_routes':len(routes),'missing':missing})
raise SystemExit(1 if missing else 0)
