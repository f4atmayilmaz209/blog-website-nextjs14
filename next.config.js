/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'img.dummyapi.io',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'randomuser.me',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'firebasestorage.googleapis.com',
            pathname: '**',
          },
        ],
      },
}

module.exports = nextConfig
