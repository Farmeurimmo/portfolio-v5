import {getAllPosts} from '@/lib/blog';
import PostCard from "@/app/components/PostCard";

export default async function BlogHome() {
    const allPosts = getAllPosts();
    const heroPosts = allPosts.slice(0, 3);
    const morePosts = allPosts.slice(3);

    return (
        <section id="blog" className="flex flex-col min-h-screen p-4 lg:p-8 bg-gray-100 dark:bg-gray-900">
            <div className="mx-auto w-full flex flex-col lg:flex-row lg:flex-wrap">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Posts</h2>

                {heroPosts.length > 0 && (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {heroPosts.map((post) => (
                            <li key={post.id} className="flex justify-center">
                                <PostCard post={post} featured={true}/>
                            </li>
                        ))}
                    </ul>
                )}

                {morePosts.length > 0 && (
                    <div className="mt-12">
                        <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">More Posts</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {morePosts.map((post) => (
                                <li key={post.id} className="flex justify-center">
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