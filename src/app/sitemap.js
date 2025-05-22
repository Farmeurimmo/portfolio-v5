import {host} from '@/config';
import {getPathname, routing} from '@/i18n/routing';
import {getAllPosts} from "@/lib/blog";

function getAllProjectSlugs() {
    const locale = routing.locales[0];
    const projectsDir = join(process.cwd(), "src/app", locale, "projects");
    return fs.readdirSync(projectsDir).filter((name) =>
        fs.statSync(join(projectsDir, name)).isDirectory()
    );
}

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

    const projectsSlugs = getAllProjectSlugs().flatMap((slug) =>
        routing.locales.map((locale) => ({
            url: getUrl(`/projects/${slug}`, locale),
            alternates: {
                languages: Object.fromEntries(
                    routing.locales.map((cur) => [cur, getUrl(`/projects/${slug}`, cur)])
                ),
            },
        }))
    );

    return [...getEntries('/'), ...getEntries('/blog'), ...getEntries('/projects'),
        ...getEntries('/legals'), ...blogSlugs, ...projectsSlugs];
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
