/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '',
    // The rewrites here should be removed as they're now handled by Caddy
    async rewrites() {
        return [
            // {
            //     source: '/activepieces',
            //     destination: '/activepieces/index.html',
            // }
        ];
    },
    // Add redirects for proper handling of activepieces and flowise paths
    async redirects() {
        return [
            {
                source: '/activepieces',
                destination: '/activepieces/',
                permanent: true,
            },
            {
                source: '/flowise',
                destination: '/flowise/',
                permanent: true,
            }
        ];
    },
    // Explicitly tell Next.js not to handle certain paths
    async headers() {
        return [
            {
                source: "/flowise/api/:path*",
                headers: [
                    { key: "x-nextjs-skip", value: "true" },
                ],
            },
            {
                source: '/assets/:path*',
                headers: [
                    {
                        key: 'x-nextjs-skip',
                        value: 'true',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;