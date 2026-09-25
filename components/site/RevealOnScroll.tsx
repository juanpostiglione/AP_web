'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// The older cards require .is-visible; the new portfolio pages remain readable
// before JS and use this observer only to trigger motion as each page enters.
const selectors = '.story--page .story-panel, .project-panel, .service-chapter, .service-work__heading, .service-work__list li, .service-profile__intro, .service-profile__figures, .service-profile__specialties li, .rep-product-card, .product-card, .section-reveal';

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
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
