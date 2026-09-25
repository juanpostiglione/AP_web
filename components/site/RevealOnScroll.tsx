'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Estas secciones comparten un único observador. Las tarjetas de
// Representaciones solo se ocultan tras activar JS para mantenerlas visibles
// si el navegador no ejecuta scripts o prefiere menos movimiento.
const selectors = '.story--page .story-panel, .project-panel, .service-chapter, .service-work__heading, .service-work__list li, .service-profile__intro, .service-profile__figures, .service-profile__specialties li, .rep-product-card, .product-card, .section-reveal, .representation-card';

export default function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(selectors);
    const reveal = (element: HTMLElement) => element.classList.add('is-visible');
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach(reveal);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        reveal(entry.target as HTMLElement);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });

    elements.forEach((element) => {
      if (element.classList.contains('representation-card')) element.classList.add('is-reveal-ready');
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
