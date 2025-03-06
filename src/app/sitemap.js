import {host} from '@/config';
import {getPathname, routing} from '@/i18n/routing';
import {getAllPosts} from "@/lib/blog";

export default function sitemap() {
    const blogSlugs = routing.locales.flatMap((locale) =>
        getAllPosts().map((post) => ({
            url: getUrl(`/blog/${post.slug}`, locale),
            alternates: {
                languages: Object.fromEntries(
                    routing.locales.map((cur) => [cur, getUrl(`/blog/${post.slug}`, cur)])
                ),
            },
        }))
    );

    return [...getEntries('/'), ...getEntries('/blog'), ...getEntries('/projects'),
        ...getEntries('/legals'), ...getEntries('/privacy'), ...blogSlugs]
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
