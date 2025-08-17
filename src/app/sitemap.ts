import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://byworship.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://byworship.com/features',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://byworship.com/pricing',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://byworship.com/testimonials',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]
}