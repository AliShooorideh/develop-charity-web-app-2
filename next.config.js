/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false,
  env: {
    AUTH0_DOMAIN: 'minireactproject.us.auth0.com',
    AUTH0_CLIENT_ID: 'lh0CETO0CVB6gs04PWeoRuwXAXNeRPj2',
    AUTH0_CLIENT_SECRET: 'b3dqwZ0zyUBzZqKAuTWkGCSqGbtaHNMuFkcrq_Y4WQM6OdvL7Oq2WJgf7DIzg39Z',
  },
}


module.exports = nextConfig

