import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    scrollRestoration: false,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.figma.com' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
    ],
  },
}

export default await withPayload(nextConfig)
