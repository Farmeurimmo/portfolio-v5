import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.farmeurimmo.fr',
            },
            {
                protocol: 'https',
                hostname: 'static.spigotmc.org',
            },
            {
                protocol: 'https',
                hostname: 'skillicons.dev',
            },
            {
                protocol: 'https',
                hostname: 'junit.org',
            },
            {
                protocol: 'https',
                hostname: 'img.daisyui.com',
            },
            {
                protocol: 'https',
                hostname: 'downloads.portainer.io',
            },
            {
                protocol: 'https',
                hostname: 'www.influxdata.com',
            },
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'assets.zabbix.com',
            },
            {
                protocol: 'https',
                hostname: 'github.com',
            },
        ],
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
};

export default withNextIntl(nextConfig);