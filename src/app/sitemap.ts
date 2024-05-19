import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.dev-lab.tech/',
      lastModified: '2024-04-14T18:36:30+00:00',
      priority: 1,
    },
    {
      url: 'https://www.dev-lab.tech/converter/hex-to-rgb',
      lastModified: '2024-04-14T18:36:30+00:00',
      priority: 0.8,
    },
    {
      url: 'https://www.dev-lab.tech/converter/rgb-to-hex',
      lastModified: '2024-05-19T17:55:49.330Z',
      priority: 0.8,
    },
  ]
}
