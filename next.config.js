/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,  // This will ignore ESLint errors during build
  },
}

export default nextConfig
