import {getProjectsSlugs, getProjectBySlug} from "@/lib/projects";
import {PostBody} from "@/app/components/PostBody";
import {notFound} from "next/navigation";
import markdownToHtml from "@/lib/markdownToHtml";

export default async function ProjectPage(props) {
    const params = await props.params;
    try {
        const project = getProjectBySlug(params.slug, params.locale);
        const content = await markdownToHtml(project.content || "");

        return (
            <main>
                <article>
                    <PostBody content={content}/>
                </article>
            </main>
        );
    } catch (error) {
        notFound();
    }
}

export async function generateMetadata(props) {
    const params = await props.params;
    const project = getProjectBySlug(params.slug, params.locale);

    if (!project) {
        return notFound();
    }

    const frUrl = `https://farmeurimmo.fr/fr/projects/${params.slug}`;
    const enUrl = `https://farmeurimmo.fr/en/projects/${params.slug}`;
    const currentUrl = params.locale === 'fr' ? frUrl : enUrl;

    let title = project.frontmatter.title?.length > 50 ? project.frontmatter.title.substring(0, 57) + "..." : project.frontmatter.title + " | Farmeurimmo";
    const description = project.frontmatter.excerpt?.length > 160 ? project.frontmatter.excerpt.substring(0, 157) + "..." : project.frontmatter.excerpt;

    const result = {
        title,
        description,
        keywords: (project.frontmatter.tags || []).join(", "),
        openGraph: {
            title,
            description,
            images: [project.frontmatter.coverImage],
            url: currentUrl,
            robots: "follow, index",
        },
        twitter: {
            cardType: "summary_large_image",
            site: "@farmeurimmo",
            images: [project.frontmatter.coverImage],
            title: title,
            description: description,
        }
    };

    if (process.env.NODE_ENV === 'production') {
        result.alternates = {
            canonical: currentUrl,
            languages: {
                'en': enUrl,
                'fr': frUrl
            }
        };
    }

    return result;
}

export async function generateStaticParams() {
    const slugs = getProjectsSlugs();

    return slugs.map((item) => ({
        slug: item.slug,
        locale: item.locale
    }));
}
