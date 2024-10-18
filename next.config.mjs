/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'w0.peakpx.com' },
            { protocol: 'https', hostname: 'res.cloudinary.com' },
        ]
    }
};

export default nextConfig;
