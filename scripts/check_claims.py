
from pathlib import Path
rejected=['lorem ipsum','500+ cities','thousands of 5-star reviews','lifetime warranty','5-Star Rated by Homeowners','5-star rated by homeowners']
# Do not reject locked reference screenshots or source docs. Only live app/lib/component code.
text=''
for base in ['app','components','lib']:
    for p in Path(base).rglob('*'):
        if p.suffix.lower() in ['.tsx','.ts','.jsx','.js','.md','.json']:
            text += '\n'+p.read_text(errors='ignore')
found=[r for r in rejected if r.lower() in text.lower()]
required=['support@nationalepoxypros.com','leads@nationalepoxypros.com','+15559730487','/free-digital-bid']
missing=[r for r in required if r not in text]
print({'ok':not found and not missing,'rejected_found':found,'missing_required_text':missing})
raise SystemExit(1 if found or missing else 0)
