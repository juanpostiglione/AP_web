import type { MetadataRoute } from 'next';
import { representationPages } from '../data/representations';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!siteUrl) return [];
  const staticRoutes = ['', '/nosotros', '/servicios', '/proyectos', '/contacto'];
  return [...staticRoutes, ...representationPages.map((page) => `/${page.slug}`)].map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: route === '' ? 'monthly' : 'yearly',
    priority: route === '' ? 1 : route === '/contacto' ? 0.8 : 0.7,
  }));
}
