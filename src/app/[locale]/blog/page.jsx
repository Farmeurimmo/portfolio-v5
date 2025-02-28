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
            <section id="blog" className="flex flex-col min-h-screen p-4 lg:p-8 bg-gray-100 dark:bg-gray-900">
                <p className={"text-2xl font-semibold text-gray-700 dark:text-gray-200 text-center lg:text-left"}>
                    {t('description')}</p>
                <div className="mx-auto w-full flex flex-col lg:flex-row gap-12 lg:flex-wrap mt-6">
                    {heroPosts.length > 0 && (
                        <div className={"h-full"}>
                            <h2 className="text-6xl font-bold text-gray-900 dark:text-white mb-4 text-center lg:text-left">
                                {t('heroPosts')}</h2>
                            <ul className="flex flex-wrap gap-6 mt-4 p-4">
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
                            <h3 className="text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center lg:text-left">
                                {t('morePosts')}</h3>
                            <ul className="flex flex-wrap gap-6 mt-4 p-4">
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
        </>
    );
}