/** @type {import('next').NextConfig} */
const nextConfig = {
  // next.config.js
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'botaksign-library.s3.ap-southeast-1.amazonaws.com',
        port: '',
        pathname: '/2020/**'
      }
    ]
  }
};

module.exports = nextConfig;
