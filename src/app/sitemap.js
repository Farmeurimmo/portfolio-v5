import {host} from '@/config';
import {getPathname, routing} from '@/i18n/routing';

export default function sitemap() {
    return [...getEntries('/'), ...getEntries('/blog'), ...getEntries('/projects'),
        ...getEntries('/legals'), ...getEntries('/privacy')];
}

function getEntries(href) {
    return routing.locales.map((locale) => ({
        url: getUrl(href, locale),
        alternates: {
            languages: Object.fromEntries(
                routing.locales.map((cur) => [cur, getUrl(href, cur)])
            ),
        },
    }));
}

function getUrl(href, locale) {
    const pathname = getPathname({locale, href});
    return host + pathname;
}
