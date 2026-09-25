import type { Metadata, Viewport } from 'next';
import Header from '../components/site/Header';
import Footer from '../components/site/Footer';
import BodyClassSync from '../components/site/BodyClassSync';
import RevealOnScroll from '../components/site/RevealOnScroll';
import BackToTop from '../components/site/BackToTop';
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

export const metadata: Metadata = {
  title: 'A.P ASOCIADOS C.A - Soluciones Industriales',
  description: 'Soluciones metalmecánicas industriales y representaciones especializadas.',
  icons: { icon: '/images/logo-ap-asociados.jpg' },
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="site-shell is-ready" suppressHydrationWarning>
        <BodyClassSync />
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
        <RevealOnScroll />
      </body>
    </html>
  );
}
