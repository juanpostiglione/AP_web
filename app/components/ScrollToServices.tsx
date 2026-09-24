'use client';

import { useEffect } from 'react';

// Runs on the home page after a cross-page "Representaciones" navigation,
// scrolling to #services once layout has settled instead of relying on the
// browser's native hash-jump (which lands on the section before it reveals).
export default function ScrollToServices() {
  useEffect(() => {
    const cameFromHeader = sessionStorage.getItem('scrollToServices') === '1';
    const cameFromHash = window.location.hash === '#services';
    if (!cameFromHeader && !cameFromHash) return;

    sessionStorage.removeItem('scrollToServices');
    if (cameFromHash) {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }

    const timer = setTimeout(() => {
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
