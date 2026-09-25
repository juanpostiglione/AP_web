import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BrandLanding from '../../components/representations/BrandLanding';
import ProductDetail from '../../components/representations/ProductDetail';
import { pagesBySlug, representationPages } from '../../data/representations';

interface PageProps { params: Promise<{ slug: string }> }

// Next/Vercel builds all known representation pages. Unknown slugs return 404.
export const dynamicParams = false;
export function generateStaticParams() {
  return representationPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const page = pagesBySlug.get((await params).slug);
  return page ? { title: page.title, description: page.kind === 'brand' ? page.subtitle : page.label } : {};
}

export default async function RepresentationRoute({ params }: PageProps) {
  const page = pagesBySlug.get((await params).slug);
  if (!page) notFound();
  return page.kind === 'brand' ? <BrandLanding page={page} /> : <ProductDetail page={page} />;
}
