from pathlib import Path
import hashlib, json, sys
from PIL import Image
root=Path.cwd()
required=[
 'public/locked-references/A_homepage.png',
 'public/locked-references/B_free_digital_bid.png',
 'public/locked-references/C_design_center_color_charts.png',
 'public/locked-references/D_floor_systems.png',
 'public/locked-references/E_metallic_epoxy.png',
 'public/locked-references/F_garage_flake.png',
 'public/locked-references/G_polished_concrete.png',
 'public/locked-references/H_exterior_coatings.png',
 'public/locked-references/I_contact.png',
 'public/color-charts/xps-concrete-dye-stain-colors.webp',
 'public/color-charts/xps-solid-color-epoxy-base-coats.webp',
 'public/color-charts/xps-top-flake-colors-approved.webp',
 'public/color-charts/xps-top-glitter-additive-colors.webp',
 'public/color-charts/xps-top-metallic-colors-standardized.webp',
 'public/color-charts/xps-top-quartz-colors-standardized.webp',
 'public/images/floor-systems/nep-hero-flake-garage-sports-cars.png',
 'public/images/floor-systems/nep-polished-concrete-commercial-lobby.png',
 'public/images/floor-systems/nep-metallic-epoxy-luxury-lounge.png',
 'public/images/floor-systems/nep-polished-concrete-retail.png',
 'public/images/floor-systems/nep-decorative-concrete-countertop.png',
 'public/images/floor-systems/nep-metallic-epoxy-residential.png',
 'public/images/floor-systems/nep-solid-color-commercial-epoxy.png',
 'public/images/floor-systems/nep-exterior-patio-coating.png',
 'public/images/floor-systems/nep-exterior-driveway-coating.png'
]
missing=[]; images=[]
for rel in required:
    p=root/rel
    if not p.exists():
        missing.append(rel); continue
    data=p.read_bytes()
    item={'path':rel,'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest()}
    try:
        with Image.open(p) as im:
            item.update({'width':im.width,'height':im.height,'format':im.format})
    except Exception as e:
        item['image_error']=str(e)
    images.append(item)
rejected=['12-hour quote','12 hour quote','500+ cities','licensed and insured','bonded','thousands of 5-star reviews','lifetime warranty']
text=''
for base in ['app','components','lib','public/manifest.json','public/manifest.webmanifest','package.json']:
    pbase=root/base
    if pbase.is_file():
        try: text += '\n' + pbase.read_text(errors='ignore')
        except Exception: pass
    elif pbase.exists():
        for p in pbase.rglob('*'):
            if p.suffix.lower() in ['.tsx','.ts','.jsx','.js','.md','.json','.webmanifest']:
                try: text += '\n' + p.read_text(errors='ignore')
                except Exception: pass
rejected_found=[r for r in rejected if r.lower() in text.lower()]
required_text=['leads@nationalepoxypros.com','support@nationalepoxypros.com','+15559730487','/free-digital-bid']
missing_text=[r for r in required_text if r not in text]
result={'missing_assets':missing,'image_count':len(images),'rejected_claims_found':rejected_found,'missing_required_text':missing_text,'images':images}
print(json.dumps(result,indent=2))
if missing or rejected_found or missing_text:
    sys.exit(1)
