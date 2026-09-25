import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Preserve old links and bookmarks after moving product HTML into Next routes.
  async redirects() {
    return [{ source: '/:slug.html', destination: '/:slug', permanent: true }];
  },
};

export default nextConfig;
