import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://nationalepoxypros.com'
  const routes = [
    '', '/commercial', '/solutions', '/specs', '/floor-systems',
    '/floor-systems/flake', '/floor-systems/metallic',
    '/floor-systems/polished-concrete', '/floor-systems/solid-color',
    '/floor-systems/quartz', '/contact', '/quote',
  ]
  return routes.map(r => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: r === '' ? 'weekly' : 'monthly',
    priority: r === '' ? 1 : r.includes('commercial') ? 0.9 : 0.7,
  }))
}
