/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for Cloudflare Pages deployment
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
