// The 20 representation routes share two layouts: brand index and product detail.
export type Brand = 'chesterton' | 'orange' | 'worldfluid';

export interface Category {
  slug: string;
  title: string;
  description: string;
}

export interface ProductCard {
  title: string;
  description: string;
  image: string;
  alt: string;
  detailImage?: boolean;
  imageHeight?: number;
}

export type StoryItem =
  | { type: 'paragraph'; html: string }
  | { type: 'subheading'; text: string }
  | { type: 'list'; items: string[] };

export type DetailBlock =
  | { type: 'heading'; text: string }
  | { type: 'story'; items: StoryItem[]; image?: string; imageAlt?: string }
  | { type: 'products'; scroll: boolean; cards: ProductCard[] }
  | { type: 'features'; title: string; items: { title: string; text: string }[] }
  | { type: 'bullets'; title: string; items: string[] }
  | { type: 'links'; title?: string; items: { text: string; href: string }[] };

interface BasePage {
  slug: string;
  brand: Brand;
  title: string;
  label: string;
}

export interface BrandPage extends BasePage {
  kind: 'brand';
  heroTitle: string;
  subtitle: string;
  logo: string;
  categories: Category[];
}

export interface DetailPageData extends BasePage {
  kind: 'detail';
  parent: string;
  blocks: DetailBlock[];
}

export type RepresentationPage = BrandPage | DetailPageData;
