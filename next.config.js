/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  //A->B
  async redirects() {
    return [
      {
        source: '/products/deleted_forever',
        destination: '/products',
        permanent: true, // 308
      },
      {
        source: '/products/deleted_temp',
        destination: '/products',
        permanent: false, // 308
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/jiwon',
        destination: '/about/me/jiwon',
      },
      {
        source: '/items/:slug',
        destination: '/products/:slug',
      },
    ];
  },
};

module.exports = nextConfig;
