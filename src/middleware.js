import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
import {NextResponse} from 'next/server';

const middleware = createMiddleware(routing);

export default async function customMiddleware(req, ev) {
    const {pathname} = req.nextUrl;
    const userLocale = req.headers.get('accept-language')?.split(',')[0].split('-')[0];

    req.headers.set('x-request-url', req.url);

    if (pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname.startsWith("/installHook.js") ||
        pathname.startsWith("/sitemap.xml") || pathname.startsWith("/robots.txt")) {
        const res = NextResponse.next()

        if (pathname.startsWith(("/api"))) {
            const origin = req.headers.get("Origin");
            const allowedOrigin = origin && (origin.endsWith(".farmeurimmo.fr") || origin === "https://farmeurimmo.fr") ? origin : "null";

            res.headers.append('Access-Control-Allow-Origin', allowedOrigin);
            res.headers.append('Access-Control-Allow-Methods', 'POST');
            res.headers.append('Access-Control-Allow-Headers', 'Content-Type');
        }
        return res;
    }

    if (!/^\/(fr|en)/.test(pathname)) {
        const locale = routing.locales.includes(userLocale) ? userLocale : routing.defaultLocale;
        return NextResponse.redirect(new URL(`/${locale}${pathname}`, req.url));
    }

    return middleware(req, ev);
}

export const config = {
    matcher: ['/:path*'],
};