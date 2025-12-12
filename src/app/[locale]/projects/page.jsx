import {getAllProjects} from "@/lib/projects";
import {getTranslations} from "next-intl/server";
import ProjectList from "@/app/components/ProjectList";

export default async function ProjectsHome({params}) {
    const {locale} = await params;
    const t = await getTranslations({locale, namespace: 'projects'});
    const allProjects = getAllProjects(locale);

    return (
        <section id="projects" className="flex flex-col min-h-screen p-4 lg:p-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">{t('title')}</h1>
            <p className="text-xl font-bold text-gray-900 dark:text-gray-200 mb-8">{t('description')}</p>
            <ProjectList allProjects={allProjects}/>
        </section>
    );
}