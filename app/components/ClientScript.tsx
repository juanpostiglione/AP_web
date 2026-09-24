'use client';

import { useEffect } from 'react';

export default function ClientScript() {
  useEffect(() => {
    // Load the web.js script logic here
    // This will be executed after the page loads
    
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    const header = document.querySelector('.header');
    const backToTopBtn = document.getElementById('backToTop');
    const isHomePage = document.body.classList.contains('home-page');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let lastScrollY = window.scrollY;
    let _scrollRAFId: number | null = null;
    let _headerScrolled = false;
    let _headerHidden = false;

    // Cache section top positions
    let _cachedSectionTops: Array<{ id: string | null; top: number }> = [];
    const _cacheSections = () => {
      _cachedSectionTops = Array.from(sections).map((s) => ({
        id: s.getAttribute('id'),
        top: s.getBoundingClientRect().top + window.scrollY,
      }));
    };
    _cacheSections();

    const _onScroll = () => {
      _scrollRAFId = null;
      const currentY = window.scrollY;

      // Active nav link
      let current = '';
      for (const s of _cachedSectionTops) {
        if (currentY + 200 >= s.top) current = s.id || '';
      }
      navLinks.forEach((link) => {
        const href = link.getAttribute('href') || '';
        const id = href.includes('#') ? href.split('#').pop() : '';
        const active = id !== '' && id === current;
        if (link.classList.contains('active') !== active) {
          link.classList.toggle('active', active);
        }
      });

      // Header
      if (header) {
        const isScrollingDown = currentY > lastScrollY;
        const shouldScroll = currentY > 20;
        const shouldHide = currentY > 120 && isScrollingDown;
        if (_headerScrolled !== shouldScroll) {
          header.classList.toggle('is-scrolled', shouldScroll);
          _headerScrolled = shouldScroll;
        }
        if (_headerHidden !== shouldHide) {
          header.classList.toggle('is-hidden', shouldHide);
          _headerHidden = shouldHide;
        }
        lastScrollY = Math.max(currentY, 0);
      }

      // Back-to-top button
      if (backToTopBtn) {
        const show = currentY > 400;
        if (backToTopBtn.classList.contains('is-visible') !== show) {
          backToTopBtn.classList.toggle('is-visible', show);
        }
      }
    };

    window.addEventListener('scroll', () => {
      if (!_scrollRAFId) _scrollRAFId = requestAnimationFrame(_onScroll);
    }, { passive: true });

    // Back to top functionality
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0)';
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    // Observe cards
    if (!(window as any).gsap) {
      document.querySelectorAll('.service-card, .project-card').forEach((card) => {
        (card as HTMLElement).style.opacity = '0';
        (card as HTMLElement).style.transform = 'translateY(20px)';
        (card as HTMLElement).style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
      });
    }

    // CTA button ripple effect
    const ctaButtons = document.querySelectorAll('.cta-button, .cta-button-secondary');
    ctaButtons.forEach((button) => {
      button.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
      });
    });
  }, []);

  return null;
}
