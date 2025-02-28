import {getAllPosts} from '@/lib/blog';
import PostCard from "@/app/components/PostCard";
import {useTranslations} from "next-intl";

export default function BlogHome() {
    const allPosts = getAllPosts();
    const heroPosts = allPosts.slice(0, 3);
    const morePosts = allPosts.slice(3);

    const t = useTranslations('BlogPage');

    return (
        <>
            <section id="blog" className="flex flex-col min-h-screen p-4 lg:p-8">
                <p className="text-2xl font-semibold text-gray-700 dark:text-gray-200 text-center lg:text-left">
                    {t('description')}
                </p>
                <div className="w-fit grid grid-cols-1 gap-8 mt-6">
                    {heroPosts.length > 0 && (
                        <div className="h-full">
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center lg:text-left">
                                {t('heroPosts')}
                            </h2>
                            <div className="w-full">
                                <ul className="flex flex-wrap gap-6 mt-4 p-4 justify-start">
                                    {heroPosts.map((post) => (
                                        <li key={post.id} className="min-w-[300px] flex-grow flex-1 max-w-[600px]">
                                            <PostCard post={post} featured={true}/>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}

                    {morePosts.length > 0 && (
                        <div className="h-full">
                            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center lg:text-left">
                                {t('morePosts')}
                            </h3>
                            <div className="w-full">
                                <ul className="flex flex-wrap gap-6 mt-4 p-4 justify-start">
                                    {morePosts.map((post) => (
                                        <li key={post.id} className="min-w-[300px] flex-grow flex-1 max-w-[600px]">
                                            <PostCard post={post}/>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}