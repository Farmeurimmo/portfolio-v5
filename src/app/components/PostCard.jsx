"use client";

import Link from "next/link";
import Image from "next/image";
import {useParams} from "next/navigation";

function PostCard({post}) {
    const params = useParams();
    const currentLocale = params.locale || "en";

    return (
        <Link
            href={`/${currentLocale}/blog/${post.slug}`}
            className={`flex flex-col justify-between items-center text-center flex-1 min-w-[250px] p-6 bg-white 
            dark:bg-gray-800 rounded-2xl shadow-md max-w-[500px] hover:scale-105 hover:shadow-lg transition-transform 
            cursor-pointer active:scale-95 h-full border border-gray-400 focus:border`}
        >
            <Image
                src={post.coverImage}
                alt={post.title}
                width={500}
                height={250}
                className="w-full h-auto rounded-t-2xl object-cover"
                loading={"lazy"}
            />
            <div className="p-4">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{post.title}</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">{post.excerpt}</p>
            </div>
        </Link>
    );
}


export default PostCard;
