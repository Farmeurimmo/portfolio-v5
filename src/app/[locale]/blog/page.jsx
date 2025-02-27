import {getAllPosts} from "@/lib/blog";

export default async function BlogHome() {
    const allPosts = getAllPosts();

    const heroPost = allPosts[0];

    const morePosts = allPosts.slice(1);

    return (
        <section id="blog" className="flex flex-col items-center min-h-screen p-2 sm:p-4 lg:p-8">
            <ul className="flex flex-col gap-4 w-full">
                {heroPost && (
                    <li className="flex flex-col gap-4">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">{heroPost.title}</h2>
                        <p className="text-lg font-semibold sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-200">{heroPost.excerpt}</p>
                    </li>
                )}
                {morePosts.length > 0 && (
                    <li className="flex flex-col gap-4">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-gray-200">More
                            Posts</h3>
                        <ul className="flex flex-col gap-4">
                            {morePosts.map((post) => (
                                <li key={post.slug} className="flex flex-col gap-2">
                                    <h4 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-200">{post.title}</h4>
                                    <p className="text-lg font-semibold sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-200">{post.excerpt}</p>
                                </li>
                            ))}
                        </ul>
                    </li>
                )}
            </ul>
        </section>
    )
}