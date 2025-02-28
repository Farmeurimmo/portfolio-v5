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

    const title = `${post.title} | Next.js Blog Example`;

    return {
        title,
        openGraph: {
            title,
            images: [post.coverImage],
        },
    };
}

export async function generateStaticParams() {
    const posts = getAllPosts();

    return posts.map((post) => ({
        slug: post.slug,
    }));
}