const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const routes = ['/', '/contact', '/floor-systems', '/flake-garage-floors', '/metallic-epoxy', '/exterior-coatings', '/color-charts', '/free-digital-bid'];
(async()=>{
  const out = path.join(process.cwd(),'outputs','visual-qa');
  fs.mkdirSync(out,{recursive:true});
  const browser = await chromium.launch({ headless: true, executablePath: '/usr/bin/chromium', args:['--no-sandbox','--disable-dev-shm-usage','--disable-gpu','--disable-crash-reporter'] });
  const results=[];
  for (const route of routes) {
    const name = route === '/' ? 'home' : route.replace(/^\//,'').replaceAll('/','-');
    for (const [label, viewport] of [['desktop',{width:1440,height:1100}], ['mobile',{width:390,height:844}]]) {
      const page = await browser.newPage({ viewport });
      const url = `http://localhost:4173${route}`;
      try {
        const resp = await page.goto(url,{waitUntil:'networkidle', timeout:20000});
        await page.screenshot({ path: path.join(out, `${name}-${label}.png`), fullPage:true });
        results.push({route,label,status:resp ? resp.status() : null, ok: !!resp && resp.ok()});
      } catch (e) {
        results.push({route,label,ok:false,error:String(e)});
      }
      await page.close();
    }
  }
  await browser.close();
  fs.writeFileSync(path.join(out,'screenshot_receipt.json'), JSON.stringify({ok: results.every(r=>r.ok), results}, null, 2));
  console.log(JSON.stringify({ok: results.every(r=>r.ok), count: results.length, results}, null, 2));
  process.exit(results.every(r=>r.ok)?0:1);
})();
