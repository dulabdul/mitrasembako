import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/data/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    // Jika nanti ada halaman lain, tambahkan di sini
  ];
}