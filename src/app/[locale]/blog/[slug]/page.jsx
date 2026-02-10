import {notFound} from "next/navigation";
import {getAllPosts, getPostBySlug} from "@/lib/blog";
import markdownToHtml from "@/lib/markdownToHtml";
import {PostBody} from "@/app/components/PostBody";

export default async function Post(props) {
    const params = await props.params;
    const post = getPostBySlug(params.slug);

    if (!post) {
        return notFound();
    }

    const content = await markdownToHtml(post.content || "");

    return (
        <main>
            <article>
                <PostBody content={content}/>
            </article>
        </main>
    );
}

export async function generateMetadata(props) {
    const params = await props.params;
    const post = getPostBySlug(params.slug);

    if (!post) {
        return notFound();
    }

    const frUrl = `https://farmeurimmo.fr/fr/blog/${params.slug}`;
    const enUrl = `https://farmeurimmo.fr/en/blog/${params.slug}`;
    const currentUrl = params.locale === 'fr' ? frUrl : enUrl;

    let title = post.title.length > 60 ? post.title.substring(0, 57) + "..." : post.title;
    const description = post.excerpt.length > 160 ? post.excerpt.substring(0, 157) + "..." : post.excerpt;

    const result = {
        title,
        description,
        keywords: post.tags.join(", "),
        openGraph: {
            title,
            description,
            images: [post.coverImage],
            url: currentUrl,
            robots: "follow, index",
        },
        twitter: {
            cardType: "summary_large_image",
            site: "@farmeurimmo",
            images: [post.coverImage],
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
    const posts = getAllPosts();

    return posts.map((post) => ({
        slug: post.slug,
    }));
}