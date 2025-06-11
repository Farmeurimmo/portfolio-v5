import {useTranslations} from "next-intl";
import Image from "next/image";
import Link from 'next/link';
import PostCard from "@/app/components/PostCard";

export default function ProjectsHome() {
    const t = useTranslations('projects');

    let projects = t.raw('projects');

    return (
        <section id="blog" className="flex flex-col min-h-screen p-4 lg:p-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">{t('title')}</h1>
            <p className="text-xl font-bold text-gray-900 dark:text-gray-200 mb-8">{t('description')}</p>
            <ul className={`flex flex-wrap gap-6 p-4 justify-start`}>
                {projects.map((project) => (
                    <li key={project.id} className="min-w-[400px] grow flex-1 max-w-[800px]">
                        <PostCard post={project}/>
                    </li>
                ))}
            </ul>
        </section>
    )
}