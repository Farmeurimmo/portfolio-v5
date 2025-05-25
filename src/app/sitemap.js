import {host} from '@/config';
import {getPathname, routing} from '@/i18n/routing';
import {getAllPosts} from "@/lib/blog";
import {getAllProjectSlugs} from "@/lib/projects";

export default async function sitemap() {
    const urls = [];

    // function getAlternates(href) {
    //     const languages = {};
    //     for (const locale of routing.locales) {
    //         languages[locale] = getUrl(href, locale);
    //     }
    //     return { languages };
    // }

    for (const entry of getEntries('/')) {
        urls.push({
            url: entry.url,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
            //alternates: getAlternates('/'),
        });
    }

    for (const entry of getEntries('/projects')) {
        urls.push({
            url: entry.url,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
            //alternates: getAlternates('/projects'),
        });
    }

    for (const entry of getEntries('/blog')) {
        urls.push({
            url: entry.url,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
            //alternates: getAlternates('/blog'),
        });
    }

    for (const entry of getEntries('/legals')) {
        urls.push({
            url: entry.url,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
            //alternates: getAlternates('/legals'),
        });
    }

    for (const locale of routing.locales) {
        for (const post of await getAllPosts()) {
            const href = `/blog/${post.slug}`;
            urls.push({
                url: getUrl(href, locale),
                lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(),
                changeFrequency: 'monthly',
                priority: 0.7,
                //alternates: getAlternates(href),
            });
        }
    }

    for (const locale of routing.locales) {
        for (const project of await getAllProjectSlugs()) {
            const href = `/projects/${project}`;
            urls.push({
                url: getUrl(href, locale),
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.7,
                //alternates: getAlternates(href),
            });
        }
    }

    return urls;
}

function getEntries(href) {
    return routing.locales.map((locale) => ({
        url: getUrl(href, locale),
    }));
}

function getUrl(href, locale) {
    const pathname = getPathname({locale, href});
    return host + pathname;
}