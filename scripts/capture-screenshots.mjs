import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const baseUrl = process.env.BASE_URL || 'http://127.0.0.1:3000';
const routes = ['/', '/contact', '/floor-systems', '/flake-garage-floors', '/metallic-epoxy', '/exterior-coatings', '/color-charts', '/free-digital-bid', '/digital-bid'];
const viewports = [
  ['desktop', { width: 1440, height: 1100 }],
  ['mobile', { width: 390, height: 844 }]
];
const root = process.cwd();
const desktopDir = path.join(root, 'validation', 'screenshots', 'desktop');
const mobileDir = path.join(root, 'validation', 'screenshots', 'mobile');
const receiptsDir = path.join(root, 'validation', 'receipts');
fs.mkdirSync(desktopDir, { recursive: true });
fs.mkdirSync(mobileDir, { recursive: true });
fs.mkdirSync(receiptsDir, { recursive: true });

function safeName(route) {
  return route === '/' ? 'home' : route.replace(/^\//, '').replaceAll('/', '-');
}

const browser = await chromium.launch({
  headless: true,
  executablePath: process.env.CHROMIUM_PATH || '/usr/bin/chromium',
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu']
});

const results = [];
for (const route of routes) {
  for (const [label, viewport] of viewports) {
    const page = await browser.newPage({ viewport });
    const url = new URL(route, baseUrl).toString();
    const file = `${label}-${safeName(route)}.png`;
    const screenshotPath = path.join(label === 'desktop' ? desktopDir : mobileDir, file);
    try {
      const resp = await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
      await page.screenshot({ path: screenshotPath, fullPage: true });
      results.push({ route, label, viewport, url, status: resp?.status() ?? null, ok: !!resp && resp.ok(), screenshotPath });
    } catch (error) {
      results.push({ route, label, viewport, url, ok: false, error: String(error), screenshotPath });
    } finally {
      await page.close();
    }
  }
}
await browser.close();
const receipt = { ok: results.every(r => r.ok), timestamp: new Date().toISOString(), baseUrl, count: results.length, results };
fs.writeFileSync(path.join(receiptsDir, 'screenshot-validation.json'), JSON.stringify(receipt, null, 2));
console.log(JSON.stringify(receipt, null, 2));
process.exit(receipt.ok ? 0 : 1);
