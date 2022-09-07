/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
}

// module.exports = nextConfig
module.exports = {
  images: {
    domains: ['lh3.googleusercontent.com', 'images.unsplash.com']
  }
}
