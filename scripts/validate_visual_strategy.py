from pathlib import Path
checks=[]
ref=Path('components/ReferencePage.tsx').read_text(errors='ignore')
layout=Path('app/layout.tsx').read_text(errors='ignore')
fail=[]
if 'approved-reference-image' in ref or 'approved-visual-lock' in ref or "src={`/locked-references/${page.ref}`}" in ref:
    fail.append('ReferencePage renders locked screenshots as public page content. Locked refs must be QA-only, not the page layer.')
for required in ['TopTrustBar','Header','Footer']:
    if required not in layout:
        fail.append(f'app/layout.tsx does not render {required}.')
if '<body>{children}</body>' in layout.replace('\n','').replace(' ',''):
    fail.append('app/layout.tsx appears to render children only without live chrome.')
print({'ok': not fail, 'failures': fail})
raise SystemExit(1 if fail else 0)
