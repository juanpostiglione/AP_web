import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Use dynamic output for on-demand ISR
  output: "standalone",
  
  images: {
    unoptimized: false,
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
