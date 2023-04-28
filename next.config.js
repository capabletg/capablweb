/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/join-now',
        destination: 'https://rzp.io/l/join-now',
        permanent: true
      },
      {
        source: '/confirmtopay',
        destination: 'https://rzp.io/l/confirmtopay',
        permanent: true
      }
    ];
  }
}

module.exports = nextConfig
