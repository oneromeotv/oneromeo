import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://oneromeo.com';

  // Define your routes here
  const routes = [
    { url: '', priority: 1.0, changeFrequency: 'weekly' as const }, // Home
    { url: '/notes', priority: 0.9, changeFrequency: 'daily' as const }, // Dynamic Notes
    { url: '/who', priority: 0.7, changeFrequency: 'monthly' as const }, // About/Who
    { url: '/ebook', priority: 1.0, changeFrequency: 'monthly' as const }, // Ebook
    { url: '/say-hi', priority: 0.6, changeFrequency: 'yearly' as const }, // Contact
    { url: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const }, // Legal
    { url: '/terms', priority: 0.3, changeFrequency: 'yearly' as const }, // Legal
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
