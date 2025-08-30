import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'cdn.farmeurimmo.fr',
            'static.spigotmc.org',
            'skillicons.dev',
            'junit.org',
            'img.daisyui.com',
            'www.portainer.io',
            'www.influxdata.com',
            'raw.githubusercontent.com',
            'assets.zabbix.com',
            'github.com',
        ],
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
};

export default withNextIntl(nextConfig);