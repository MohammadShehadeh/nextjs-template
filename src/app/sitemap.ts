import type { MetadataRoute } from 'next';

import { BASE_URL } from '@/constants/urls';

// This allows to generate a `sitemap.xml` file dynamically based on the needs of your Website
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${BASE_URL}`,
      lastModified: new Date(),
      changeFrequency: 'always',
    },
  ];
}
