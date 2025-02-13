import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
import {NextResponse} from 'next/server';

const middleware = createMiddleware(routing);

export default async function customMiddleware(req, ev) {
    const {pathname} = req.nextUrl;
    const userLocale = req.headers.get('accept-language')?.split(',')[0].split('-')[0];

    if (pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname.startsWith("/installHook.js")) {
        return NextResponse.next();
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