'use client';

import { useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';

// Root layouts persist during Next.js navigation, while the visual styles
// depend on route-specific body classes. Remove old brand classes first.
export default function BodyClassSync() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const route = pathname ?? '';
    document.body.classList.toggle('home-page', route === '/');
    document.body.classList.remove('brand-chesterton', 'brand-orange', 'brand-worldfluid');
    if (route.startsWith('/chesterton')) document.body.classList.add('brand-chesterton');
    if (route.startsWith('/orange')) document.body.classList.add('brand-orange');
    if (route.startsWith('/worldfluid')) document.body.classList.add('brand-worldfluid');
  }, [pathname]);

  return null;
}
