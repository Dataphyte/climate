/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['i0.wp.com', 'images.unsplash.com'],
  },
};

module.exports = nextConfig;
