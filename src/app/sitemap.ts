import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://3d-pdf-converter.com',
      lastModified: new Date(),
    },
  ];
}
