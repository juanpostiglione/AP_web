import { chestertonPages } from './chesterton';
import { orangePages } from './orange';
import { worldfluidPages } from './worldfluid';
import type { RepresentationPage } from './types';

// Keep page lookup in one place. A new category needs a data entry and an
// image in public/images; the dynamic Next.js route handles the rest.
export const representationPages: RepresentationPage[] = [
  ...chestertonPages,
  ...orangePages,
  ...worldfluidPages,
];

export const pagesBySlug = new Map(representationPages.map((page) => [page.slug, page]));

export const featuredBrands = [
  {
    slug: 'chesterton', name: 'Chesterton', logo: '/images/chesterton.png',
    description: 'Sellos mecánicos, empaquetaduras, juntas y soluciones de sellado industrial de clase mundial.',
  },
  {
    slug: 'orange-technologies', name: 'Orange Technologies', logo: '/images/orange-technologies.png',
    description: 'Soluciones avanzadas en abrazaderas de tubería, recubrimientos y reparación industrial.',
  },
  {
    slug: 'worldfluid', name: 'WorldFluid', logo: '/images/worldfluid.png',
    description: 'Válvulas, tuberías, sistemas de filtración y equipos especializados para la industria.',
  },
];
