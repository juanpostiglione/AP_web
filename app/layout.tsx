import type { Metadata, Viewport } from 'next';
import Header from '../components/site/Header';
import Footer from '../components/site/Footer';
import BodyClassSync from '../components/site/BodyClassSync';
import RevealOnScroll from '../components/site/RevealOnScroll';
import BackToTop from '../components/site/BackToTop';
import OrganizationSchema from '../components/site/OrganizationSchema';
import './globals.css';

// These files retain the original cascade order while separating its design
// layers. Changes to a later file may override earlier rules.
import '../styles/01-base.css';
import '../styles/02-inner-pages.css';
import '../styles/03-home.css';
import '../styles/04-industrial.css';
import '../styles/05-page-polish.css';
import '../styles/06-palette.css';
import '../styles/07-current.css';
import '../styles/08-representations.css';
import '../styles/09-interactions.css';
import '../styles/10-projects-services.css';
import '../styles/11-ap-theme.css';
import '../styles/14-site-upgrade.css';

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  metadataBase: configuredSiteUrl ? new URL(configuredSiteUrl) : undefined,
  title: {
    default: 'A.P ASOCIADOS C.A | Soluciones metalmecánicas',
    template: '%s | A.P ASOCIADOS C.A',
  },
  description: 'Fabricación, montaje y mantenimiento metalmecánico para la industria venezolana desde 1982.',
  applicationName: 'A.P ASOCIADOS C.A',
  keywords: ['metalmecánica', 'estructuras metálicas', 'tanques industriales', 'montaje industrial', 'mantenimiento industrial', 'Puerto Ordaz'],
  authors: [{ name: 'A.P ASOCIADOS C.A' }],
  creator: 'A.P ASOCIADOS C.A',
  formatDetection: { telephone: false },
  icons: { icon: '/images/logo-ap-asociados.webp' },
  openGraph: {
    type: 'website',
    locale: 'es_VE',
    siteName: 'A.P ASOCIADOS C.A',
    title: 'A.P ASOCIADOS C.A | Soluciones metalmecánicas',
    description: 'Fabricación, montaje y mantenimiento metalmecánico para la industria venezolana desde 1982.',
    ...(configuredSiteUrl ? { url: configuredSiteUrl, images: [{ url: '/og.png', width: 1200, height: 630, alt: 'A.P ASOCIADOS C.A — Soluciones metalmecánicas' }] } : {}),
  },
  twitter: configuredSiteUrl ? {
    card: 'summary_large_image',
    title: 'A.P ASOCIADOS C.A | Soluciones metalmecánicas',
    description: 'Fabricación, montaje y mantenimiento metalmecánico para la industria venezolana desde 1982.',
    images: ['/og.png'],
  } : undefined,
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#17242d' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="site-shell is-ready" suppressHydrationWarning>
        <a className="skip-link" href="#main-content">Saltar al contenido</a>
        <BodyClassSync />
        <OrganizationSchema />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <BackToTop />
        <RevealOnScroll />
      </body>
    </html>
  );
}
