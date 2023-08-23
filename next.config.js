/** @type {import('next').NextConfig} */
const nextConfig = {
  // next.config.js
  images: {
    domains: [
      'botaksign-library.s3.ap-southeast-1.amazonaws.com',
      'botakdev.printcart.com',
      'botaksign.com'
    ]
  }
};

module.exports = nextConfig;
