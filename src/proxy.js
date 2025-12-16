import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
import {NextResponse} from 'next/server';

const proxy = createMiddleware(routing);

export default async function customMiddleware(req, ev) {
    const {pathname} = req.nextUrl;
    const userLocale = req.headers.get('accept-language')?.split(',')[0].split('-')[0];

    req.headers.set('x-request-url', req.url);

    if (pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname.startsWith("/installHook.js") ||
        pathname.startsWith("/sitemap.xml") || pathname.startsWith("/robots.txt") || pathname.startsWith("/ai.txt")
        || pathname.startsWith("/ParticleCanvas.js")) {
        return NextResponse.next();
    }

    if (!/^\/(fr|en)/.test(pathname)) {
        const locale = routing.locales.includes(userLocale) ? userLocale : routing.defaultLocale;
        return NextResponse.redirect(new URL(`/${locale}${pathname}`, req.url));
    }

    return proxy(req, ev);
}

export const config = {
    matcher: ['/:path*'],
};