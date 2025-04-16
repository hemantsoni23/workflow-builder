/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /node_modules\/sequelize\/lib\/dialects\/.*\/connection-manager\.js$/,
      parser: { requireEnsure: false },
    });
    return config;
  },

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
    // Add redirects for proper handling of pipeline and agentbuilder paths
    async redirects() {
        return [
            {
                source: '/pipeline',
                destination: '/pipeline/',
                permanent: true,
            },
            {
                source: '/agentbuilder',
                destination: '/agentbuilder/',
                permanent: true,
            },
            {
                source: '/featured',
                destination: 'https://www.ai.noyco.com/featured',
                permanent: true,
            },
            {
                source: 'contact-us',
                destination: 'https://www.ai.noyco.com/contact-us',
                permanent: true
            }
        ];
    },
    // Explicitly tell Next.js not to handle certain paths
    async headers() {
        return [
            {
                source: "/agentbuilder/api/:path*",
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
