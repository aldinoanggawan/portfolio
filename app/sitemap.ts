import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: siteConfig.url,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
  },
  {
    url: `${siteConfig.url}/about`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: `${siteConfig.url}/contact`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.5,
  },
];

export default sitemap;
