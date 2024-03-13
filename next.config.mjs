/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Add other experimental features here if needed
  },
  images: {
    remotePatterns: ['https://skillicons.dev/']
  },
  output: 'export',
};

export default nextConfig;
