import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = ['en', 'ru', 'ge'];
  const pages = ['', '/about', '/blogs', '/contact'];
  const baseUrl = 'https://blueberrygardens.ge';

  const routes = languages.flatMap(lang => 
    pages.map(page => ({
      url: `${baseUrl}/${lang}${page}`,
      lastModified: new Date(),
      changeFrequency: page === '' ? 'weekly' as const : 'monthly' as const,
      priority: page === '' ? 1 : 0.8,
    }))
  );

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    ...routes,
  ];
}
