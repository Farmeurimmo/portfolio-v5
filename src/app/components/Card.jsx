"use client";

import Link from "next/link";
import Image from "next/image";
import {useParams} from "next/navigation";

function Card({post, isBlog = true}) {
    const params = useParams();
    const currentLocale = params.locale || "en";

    let postType = isBlog ? "blog" : "projects";
    let slug = post.slug || post.id;

    return (
        <Link
            href={`/${currentLocale}/${postType}/${slug}`}
            className={`flex flex-col justify-between items-center text-center flex-1 min-w-[350px] bg-white 
            dark:bg-gray-800 rounded-2xl shadow-md max-w-[900px] hover:scale-105 hover:shadow-lg transition-transform 
            cursor-pointer active:scale-95 h-full border border-gray-400 focus:border`}
        >
            <Image
                src={post.coverImage}
                alt={post.title}
                width={700}
                height={500}
                className="w-full rounded-t-2xl object-cover max-h-92 h-72"
                loading={"lazy"}
                priority={false}
            />
            <div className="p-4">
                <h2 className="text-xl xl:text-2xl font-bold text-gray-900 dark:text-white mb-4">{post.title}</h2>
                <p className="text-md xl:text-lg text-gray-700 dark:text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 items-center">
                    {post.tags.map(tag => (
                        <div key={tag} className="badge badge-info">{tag}</div>
                    ))}
                </div>
            </div>
        </Link>
    );
}


export default Card;
