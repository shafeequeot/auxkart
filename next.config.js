/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['s.w.org', 'auxkart.com'],
  },
}

module.exports = nextConfig
