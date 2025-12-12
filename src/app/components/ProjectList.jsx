"use client";

import Card from "@/app/components/Card";
import {useLocale} from "next-intl";

export default function ProjectList({allProjects}) {
    const locale = useLocale();
    const projects = allProjects.filter(p => p.slug.endsWith(`.${locale}`));

    return (
        <ul className={`flex flex-wrap gap-6 p-4 justify-start`}>
            {projects.map((project) => (
                <li key={project.slug} className="min-w-[400px] grow flex-1 max-w-[900px]">
                    <Card post={project.frontmatter} isBlog={false} slug={project.slug.replace(`.${locale}`, '')}/>
                </li>
            ))}
        </ul>
    );
}

