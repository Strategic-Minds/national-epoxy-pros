#!/usr/bin/env python3
import sys, json, hashlib, pathlib
root = pathlib.Path(sys.argv[1] if len(sys.argv)>1 else '.').resolve()
packet = pathlib.Path(__file__).resolve().parents[1]
manifest = json.loads((packet/'nep_asset_lock_manifest.json').read_text(encoding='utf-8'))
fail=[]
warn=[]
def sha256(path):
    h=hashlib.sha256()
    with open(path,'rb') as f:
        for b in iter(lambda:f.read(1024*1024), b''):
            h.update(b)
    return h.hexdigest()
for e in manifest['entries']:
    rel=e['repo_destination'].lstrip('/')
    target=root/rel
    if not target.exists():
        fail.append(f"MISSING {rel}")
        continue
    got=sha256(target)
    if got != e['sha256']:
        fail.append(f"SHA_MISMATCH {rel} expected={e['sha256']} got={got}")
legacy=root/'public/images/hero/national-epoxy-pros-garage-epoxy-hero.png'
approved=root/'public/images/hero/nep-hero-flake-garage-sports-cars.png'
if legacy.exists() and approved.exists() and sha256(legacy)!=sha256(approved):
    warn.append('LEGACY_HERO_DIFFERS public/images/hero/national-epoxy-pros-garage-epoxy-hero.png exists and does not equal approved hero. Do not reference it in homepage code.')
print(json.dumps({'ok':not fail,'checked_assets':len(manifest['entries']),'failures':fail,'warnings':warn}, indent=2))
if fail:
    sys.exit(1)
