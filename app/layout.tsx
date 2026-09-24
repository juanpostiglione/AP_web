import type { Metadata } from 'next';
import Script from 'next/script';
import Header from './components/Header';
import Footer from './components/Footer';
import ClientScript from './components/ClientScript';
import BodyClassSync from './components/BodyClassSync';
import './globals.css';

export const metadata: Metadata = {
  title: 'A.P ASOCIADOS C.A - Soluciones Industriales',
  description: 'Soluciones metalmecanicas industriales y representaciones especializadas.',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="site-shell" suppressHydrationWarning>
        {/* Runs before hydration so the home-page background/section styles are
            correct on the very first paint — avoids a flash of wrong colors on
            full navigations (e.g. browser back/forward). Also flags this as a
            Next.js-routed page so legacy web.js skips its full-reload link
            hijacking and lets Next's router handle navigation/back-forward. */}
        <Script id="home-page-class" strategy="beforeInteractive">
          {`window.__NEXT_APP__ = true; document.body.classList.toggle('home-page', location.pathname === '/');`}
        </Script>
        <BodyClassSync />
        <Header activePage="" />
        <main>{children}</main>
        <Footer />
        <button className="back-to-top" id="backToTop" aria-label="Volver arriba">
          ↑
        </button>
        
        {/* GSAP Scripts — afterInteractive ensures these run only once React
            has finished hydrating, preventing GSAP's inline style mutations
            from racing ahead of hydration and forcing a full tree remount. */}
        <Script src="/vendor/gsap.min.js" strategy="afterInteractive" />
        <Script src="/vendor/ScrollTrigger.min.js" strategy="afterInteractive" />
        <Script src="/web.js" strategy="afterInteractive" />
        
        <ClientScript />
      </body>
    </html>
  );
}
