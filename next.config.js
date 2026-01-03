/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Use standalone for production deployment
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
      },
      {
        protocol: "https",
        hostname: "**", // Allow all HTTPS domains
      },
    ],
    unoptimized: true,
  },
  // Skip TypeScript errors during build (already validated with tsc)
  typescript: {
    ignoreBuildErrors: false,
  },
  // Skip ESLint errors during build
  eslint: {
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig
