'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  // The top bar compresses after scrolling and hides while moving down.
  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const y = Math.max(window.scrollY, 0);
        setScrolled(y > 20);
        setHidden(y > 120 && y > lastY.current);
        lastY.current = y;
        frame = 0;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(frame); };
  }, []);

  useEffect(() => { setMenuOpen(false); setHidden(false); }, [pathname]);

  // From inner pages, route home first, then ScrollToServices scrolls after
  // the home content mounts. Direct home clicks simply scroll to the section.
  const showRepresentations = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    setMenuOpen(false);
    if (pathname === '/') document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    else { sessionStorage.setItem('scrollToServices', '1'); router.push('/'); }
  };

  return (
    <header className={`header${scrolled ? ' is-scrolled' : ''}${hidden && !menuOpen ? ' is-hidden' : ''}`}>
      <nav className="navbar" aria-label="Navegación principal">
        <div className="nav-container tw-industrial-shell">
          <Link className="logo" href="/" aria-label="A.P Asociados C.A, inicio" onClick={() => setMenuOpen(false)}>
            <img src="/images/logo-ap-asociados.jpg" alt="" className="logo-image" />
            <span className="logo-text-wrap"><span className="logo-text">A.P ASOCIADOS C.A</span></span>
          </Link>
          <ul className={`nav-links${menuOpen ? ' active' : ''}`}>
            <li><Link href="/" className={`nav-link${pathname === '/' ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>Inicio</Link></li>
            <li><Link href="/nosotros" className={`nav-link${pathname === '/nosotros' ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>Trayectoria</Link></li>
            <li><Link href="/servicios" className={`nav-link${pathname === '/servicios' ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>Servicios</Link></li>
            <li><Link href="/proyectos" className={`nav-link${pathname === '/proyectos' ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>Proyectos</Link></li>
            <li><Link href="/contacto" className={`nav-link${pathname === '/contacto' ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>Contacto</Link></li>
          </ul>
          <button className={`nav-toggle${menuOpen ? ' active' : ''}`} type="button" aria-label="Abrir menú de navegación"
            aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
            <span /><span /><span />
          </button>
        </div>
      </nav>
    </header>
  );
}
