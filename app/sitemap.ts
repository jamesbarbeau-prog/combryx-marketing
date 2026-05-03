import { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://combryx.com',              lastModified: new Date(), changeFrequency: 'weekly',  priority: 1 },
    { url: 'https://combryx.com/about',         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://combryx.com/how-it-works',  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://combryx.com/platform',      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://combryx.com/pricing',       lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.95 },
  ]
}
