import Link from "next/link";
import Image from "next/image";

function PostCard({post}) {
    return (
        <Link
            href={`/blog/${post.slug}`}
            className="flex flex-col justify-between items-center text-center flex-1 min-w-[250px] p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md max-w-[500px] hover:scale-105 hover:shadow-lg transition-transform cursor-pointer active:scale-95 border-amber-500 focus:border"
        >
            <Image
                src={post.coverImage}
                alt={post.title}
                width={300}
                height={150}
                className="w-full h-auto rounded-t-2xl object-cover"
            />
            <div className="p-4">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{post.title}</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">{post.excerpt}</p>
                <span className="mt-2 px-4 py-2 btn btn-info rounded-xl">Read more</span>
            </div>
        </Link>
    );
}

export default PostCard;
