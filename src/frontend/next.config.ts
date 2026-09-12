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
            }
        ]
    }
};

export default nextConfig;
