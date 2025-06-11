import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.farmeurimmo.fr', 'skillicons.dev', 'junit.org', 'img.daisyui.com', 'www.portainer.io', 'www.influxdata.com', 'www.phpmyadmin.net', 'raw.githubusercontent.com'],
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
};

export default withNextIntl(nextConfig);