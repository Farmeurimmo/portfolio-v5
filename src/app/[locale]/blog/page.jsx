import {getAllPosts} from '@/lib/blog';
import PostCard from "@/app/components/PostCard";

export default async function BlogHome() {
    const allPosts = getAllPosts();
    const heroPosts = allPosts.slice(0, 3);
    const morePosts = allPosts.slice(3);

    return (
        <section id="blog" className="flex flex-col min-h-screen p-4 lg:p-8 bg-gray-100 dark:bg-gray-900">
            <div className="mx-auto w-full flex flex-col lg:flex-row gap-12 lg:flex-wrap">
                {heroPosts.length > 0 && (
                    <div className={"h-full"}>
                        <h2 className="text-6xl font-bold text-gray-900 dark:text-white mb-4 text-center lg:text-left">Featured
                            Posts</h2>
                        <ul className="flex flex-wrap gap-6 mt-4">
                            {heroPosts.map((post) => (
                                <li key={post.id}>
                                    <PostCard post={post} featured={true}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {morePosts.length > 0 && (
                    <div className={"h-full"}>
                        <h3 className="text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center lg:text-left">More
                            Posts</h3>
                        <ul className="flex flex-wrap gap-6 mt-4">
                            {morePosts.map((post) => (
                                <li key={post.id}>
                                    <PostCard post={post}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </section>
    );
}