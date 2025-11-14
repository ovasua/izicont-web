/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/izicont-web',
  assetPrefix: '/izicont-web',
}

export default nextConfig
