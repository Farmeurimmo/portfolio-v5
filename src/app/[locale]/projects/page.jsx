import {useTranslations} from "next-intl";
import Image from "next/image";
import Link from 'next/link';

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
                        <Link href={`/projects/${project.id}`} passHref>
                            <div className={`flex flex-col justify-between items-center text-center flex-1 min-w-[400px]
                             bg-white dark:bg-gray-800 rounded-2xl shadow-md max-w-[800px] hover:scale-105 
                             hover:shadow-lg transition-transform cursor-pointer active:scale-95 h-full border 
                             border-gray-400 focus:border`}>
                                <Image
                                    src={project.coverImage}
                                    alt={project.title}
                                    width={500}
                                    height={400}
                                    className="w-full h-full rounded-t-2xl object-cover max-h-92"
                                    loading={"lazy"}
                                />
                                <div className="p-4">
                                    <h2 className="text-xl xl:text-3xl font-bold text-gray-900 dark:text-white mb-4">{project.title}</h2>
                                    <p className="text-md xl:text-lg text-gray-700 dark:text-gray-300 mb-4">{project.excerpt}</p>
                                    <div className={"flex flex-wrap gap-2"}>
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="badge badge-info badge-lg">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}