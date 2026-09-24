'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

interface HeaderProps {
  activePage?: string;
}

export default function Header({ activePage = '' }: HeaderProps) {
  const navToggleRef = useRef<HTMLButtonElement>(null);
  const navLinksRef = useRef<HTMLUListElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  const handleRepresentacionesClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    if (pathname === '/') {
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      sessionStorage.setItem('scrollToServices', '1');
      router.push('/');
    }
  };

  useEffect(() => {
    const navToggle = navToggleRef.current;
    const navLinks = navLinksRef.current;
    if (!navToggle || !navLinks) return;

    const handleToggleClick = () => {
      navLinks.classList.toggle('active');

      const spans = navToggle.querySelectorAll('span');
      if (navLinks.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(10px, 10px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
      }
    };

    const handleLinkClick = () => {
      navLinks.classList.remove('active');
      const spans = navToggle.querySelectorAll('span');
      spans.forEach((span) => {
        span.style.transform = '';
        span.style.opacity = '1';
      });
    };

    navToggle.addEventListener('click', handleToggleClick);
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', handleLinkClick);
    });

    return () => {
      navToggle.removeEventListener('click', handleToggleClick);
      navLinks.querySelectorAll('a').forEach((link) => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, []);

  return (
    <header className="header" suppressHydrationWarning>
      <nav className="navbar" aria-label="Navegacion principal">
        <div className="nav-container tw-industrial-shell">
          <Link className="logo" href="/" aria-label="A.P Asociados C.A, inicio">
            <img src="/images/logo-ap-asociados.jpg" alt="" className="logo-image" />
            <span className="logo-text-wrap">
              <span className="logo-text">A.P ASOCIADOS C.A</span>
            </span>
          </Link>
          <ul className="nav-links" ref={navLinksRef}>
            <li><Link href="/" className={`nav-link ${activePage === 'home' ? 'active' : ''}`}>Inicio</Link></li>
            <li><Link href="/nosotros" className={`nav-link ${activePage === 'about' ? 'active' : ''}`}>Nosotros</Link></li>
            <li><Link href="/#services" className="nav-link" onClick={handleRepresentacionesClick}>Representaciones</Link></li>
            <li><Link href="/contacto" className={`nav-link ${activePage === 'contact' ? 'active' : ''}`}>Contacto</Link></li>
          </ul>
          <button
            className="nav-toggle"
            ref={navToggleRef}
            type="button"
            aria-label="Abrir menu de navegacion"
            aria-expanded="false"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
