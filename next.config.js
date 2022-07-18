const path = require('path');

const nextConfig = {
  // basePath: '/isr',
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/contact',
        destination: '/isr',
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return {
      afterFiles: [
        {
          source: '/api/movies',
          destination: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`,
        },
      ],
      fallback: [
        {
          source: '/:path*',
          destination: `https://custom-routes-proxying-endpoint.vercel.app/:path*`,
        },
      ],
    };
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "main.scss";`,
  },
};

module.exports = nextConfig;
