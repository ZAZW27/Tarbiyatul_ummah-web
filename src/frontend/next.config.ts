import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    //  allowedDevOrigins:['10.70.166.71', 'http://10.70.166.71:5173']
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ik.imagekit.io',
                port: '',
                pathname: '/**',
            },
        ],
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: `${process.env.BACKEND_URL || 'http://localhost:5000'}/api/:path*`,
            },
        ];
    },
};

export default nextConfig;
