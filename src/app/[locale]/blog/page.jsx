import {getAllPosts} from '@/lib/blog';
import PostCard from "@/app/components/PostCard";

export default async function BlogHome() {
    const allPosts = getAllPosts();
    const heroPost = allPosts[0];
    const morePosts = allPosts.slice(1);

    return (
        <section id="blog" className="flex flex-col items-center min-h-screen p-4 lg:p-8 bg-gray-100 dark:bg-gray-900">
            <div className="w-full">
                {heroPost && (
                    <PostCard post={heroPost}/>
                )}
                {morePosts.length > 0 && (
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">
                        <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">More Posts</h3>
                        <ul className="space-y-4">
                            {morePosts.map((post) => (
                                <PostCard post={post} key={post.id}/>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </section>
    );
}