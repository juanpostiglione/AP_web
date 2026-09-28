import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'A.P ASOCIADOS C.A',
    short_name: 'A.P Asociados',
    description: 'Soluciones metalmecánicas industriales desde 1982.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f7f8f6',
    theme_color: '#17242d',
    lang: 'es-VE',
  };
}
