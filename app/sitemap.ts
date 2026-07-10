import { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://nationalepoxypros.com';
  return [
    '/','/floor-systems','/floor-systems/flake','/floor-systems/metallic','/floor-systems/solid-color',
    '/floor-systems/quartz','/floor-systems/polished-concrete','/visualizer','/projects','/process',
    '/service-areas','/about','/reviews','/faq','/quote','/contact','/privacy','/terms',
  ].map(r => ({ url: base+r, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: r==='/'?1:0.8 }));
}
