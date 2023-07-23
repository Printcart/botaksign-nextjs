/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'botaksign.com',
        port: '',
        pathname: '/wp-content/**'
      }
    ]
  }
};

module.exports = nextConfig;
