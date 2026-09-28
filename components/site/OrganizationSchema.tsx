import { contactEmails } from '../../data/contact';

export default function OrganizationSchema() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'A.P ASOCIADOS C.A',
    foundingDate: '1982',
    email: contactEmails[0],
    ...(siteUrl ? { url: siteUrl, logo: `${siteUrl}/images/logo-ap-asociados.webp` } : {}),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Puerto Ordaz',
      addressRegion: 'Bolívar',
      addressCountry: 'VE',
    },
    areaServed: 'Venezuela',
    knowsAbout: [
      'Fabricación metalmecánica',
      'Estructuras metálicas',
      'Tanques y recipientes',
      'Montaje industrial',
      'Mantenimiento industrial',
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
