import {getAllProjects, getProjectBySlug} from "@/lib/projects";
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

    let title = project.frontmatter.title?.length > 50 ? project.frontmatter.title.substring(0, 57) + "..." : project.frontmatter.title + " | Farmeurimmo";
    const description = project.frontmatter.excerpt?.length > 160 ? project.frontmatter.excerpt.substring(0, 157) + "..." : project.frontmatter.excerpt;

    return {
        title,
        openGraph: {
            title,
            images: [project.frontmatter.coverImage],
            robots: "follow, index",
        },
        twitter: {
            cardType: "summary_large_image",
            site: "@farmeurimmo",
            images: [project.frontmatter.coverImage],
            title: title,
            description: description,
        },
        description: description,
        keywords: (project.frontmatter.tags || []).join(", "),
    };
}

export async function generateStaticParams({params: {locale}}) {
    const projects = getAllProjects(locale);

    return projects.map((project) => ({
        slug: project.slug,
    }));
}
