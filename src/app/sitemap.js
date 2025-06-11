import {host} from '@/config';
import {getPathname, routing} from '@/i18n/routing';
import {getAllPosts} from "@/lib/blog";
import {getAllProjectSlugs} from "@/lib/projects";

export default async function sitemap() {
    const urls = [];

    function getAlternates(href) {
        const languages = {};
        for (const locale of routing.locales) {
            languages[locale] = getUrl(href, locale);
        }
        return {languages};
    }

    urls.push({
        url: getUrl('/', 'en'),
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1.0,
        alternates: getAlternates('/')
    });

    urls.push({
        url: getUrl('/projects', 'en'),
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
        alternates: getAlternates('/projects')
    });

    urls.push({
        url: getUrl('/blog', 'en'),
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
        alternates: getAlternates('/blog')
    });

    urls.push({
        url: getUrl('/legals', 'en'),
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.5,
        alternates: getAlternates('/legals')
    });

    for (const post of await getAllPosts()) {
        const href = `/blog/${post.slug}`;
        urls.push({
            url: getUrl(href, 'en'),
            lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
            alternates: getAlternates(href)
        });
    }

    for (const project of await getAllProjectSlugs()) {
        const href = `/projects/${project}`;
        urls.push({
            url: getUrl(href, 'en'),
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
            alternates: getAlternates(href)
        });
    }

    return urls;
}

function getUrl(href, locale) {
    const pathname = getPathname({locale, href});
    return host + pathname;
}