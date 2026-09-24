'use client';

import { useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';

// Legacy CSS/JS keys off body.classList.contains('home-page'); the App Router
// root layout has no per-route body tag, so this keeps that class in sync.
export default function BodyClassSync() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    document.body.classList.toggle('home-page', pathname === '/');
  }, [pathname]);

  return null;
}
