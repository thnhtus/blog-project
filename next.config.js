/** @type {import('next').NextConfig} */
const path = require("path");
const removeImports = require("next-remove-imports")();

const nextConfig = removeImports({
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      }
    ],
  }
})

module.exports = nextConfig
