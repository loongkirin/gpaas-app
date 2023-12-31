/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
        return [
        {
            source: '/v1/:path*',
            destination: 'http://localhost:8081/v1/:path*',
        },
        ]
    },
}

module.exports = nextConfig
