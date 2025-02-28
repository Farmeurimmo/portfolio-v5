import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'cdn.farmeurimmo.fr',
            },
            {
                hostname: 'static.spigotmc.org',
            }
        ],
    },
};

export default withNextIntl(nextConfig);