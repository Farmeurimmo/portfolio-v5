import {useTranslations} from 'next-intl';

let skills = [
    {
        name: 'JavaScript',
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        category: 'Programming Languages'
    },
    {
        name: 'Python',
        href: 'https://www.python.org/',
        category: 'Programming Languages'
    },
    {
        name: 'Java',
        href: 'https://www.oracle.com/java/',
        category: 'Programming Languages'
    },
    {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        category: 'Programming Languages'
    },
    {
        name: 'HTML',
        href: 'https://html.spec.whatwg.org/',
        category: 'Programming Languages'
    },
    {
        name: 'CSS',
        href: 'https://www.w3.org/Style/CSS/',
        category: 'Programming Languages'
    },
    {
        name: 'C',
        href: 'https://en.cppreference.com/w/c/language',
        category: 'Programming Languages'
    },
    {
        name: 'Markdown',
        href: 'https://www.markdownguide.org/',
        category: 'Programming Languages'
    },
    {
        name: 'Bash',
        href: 'https://www.gnu.org/software/bash/',
        category: 'Programming Languages'
    },
    {
        name: 'React',
        href: 'https://reactjs.org/',
        category: 'Frameworks'
    },
    {
        name: 'Nextjs',
        href: 'https://nextjs.org/',
        category: 'Frameworks'
    },
    {
        name: 'TailwindCSS',
        href: 'https://tailwindcss.com/',
        category: 'Frameworks'
    },
    {
        name: 'Spring',
        href: 'https://spring.io/',
        category: 'Frameworks'
    },
    {
        name: 'FastAPI',
        href: 'https://fastapi.tiangolo.com/',
        category: 'Frameworks'
    },
    {
        name: 'Flask',
        href: 'https://flask.palletsprojects.com/',
        category: 'Frameworks'
    },
    {
        name: 'Svelte',
        href: 'https://svelte.dev/',
        category: 'Frameworks'
    },
    {
        name: 'DaisyUI',
        href: 'https://daisyui.com/',
        category: 'Frameworks'
    },
    {
        name: 'SDL3',
        href: 'https://libsdl.org/',
        category: 'Frameworks'
    },
    {
        name: 'GitHubActions',
        href: 'https://github.com/features/actions',
        category: 'CI/CD'
    },
    {
        name: 'junit5',
        href: 'https://junit.org/junit5/',
        category: 'CI/CD'
    },
    {
        name: 'Docker',
        href: 'https://www.docker.com/',
        category: 'Tools'
    },
    {
        name: 'Portainer',
        href: 'https://www.portainer.io/',
        category: 'Tools'
    },
    {
        name: 'Git',
        href: 'https://git-scm.com/',
        category: 'Tools'
    },
    {
        name: 'GitHub',
        href: 'https://github.com/',
        category: 'Tools'
    },
    {
        name: 'Vite',
        href: 'https://vitejs.dev/',
        category: 'Tools'
    },
    {
        name: 'Pnpm',
        href: 'https://pnpm.io/',
        category: 'Tools'
    },
    {
        name: 'RabbitMQ',
        href: 'https://www.rabbitmq.com/',
        category: 'Tools'
    },
    {
        name: 'Cloudflare',
        href: 'https://www.cloudflare.com/',
        category: 'Tools'
    },
    {
        name: 'Vercel',
        href: 'https://vercel.com/',
        category: 'Tools'
    },
    {
        name: 'Ubuntu',
        href: 'https://ubuntu.com/',
        category: 'Tools'
    },
    {
        name: 'Redis',
        href: 'https://redis.io/',
        category: 'Databases'
    },
    {
        name: 'MongoDB',
        href: 'https://www.mongodb.com/',
        category: 'Databases'
    },
    {
        name: 'MYSQL',
        href: 'https://www.mysql.com/',
        category: 'Databases'
    },
    {
        name: 'Gradle',
        href: 'https://gradle.org/',
        category: 'Build Tools'
    },
    {
        name: 'Maven',
        href: 'https://maven.apache.org/',
        category: 'Build Tools'
    }
];

function groupByCategory(skills) {
    return skills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {});
}

const specialIcons = {
    'sdl3': 'https://raw.githubusercontent.com/github/explore/5d5b64a8022a3b815e1128bcb69a5a6a5f545bf7/topics/sdl/sdl.png',
    'junit5': 'https://junit.org/junit5/assets/img/junit5-logo.png',
    'daisyui': 'https://img.daisyui.com/images/daisyui-logo/daisyui-logomark.svg',
    'portainer': 'https://www.portainer.io/hubfs/crane-icon.svg',
};

function getIconUrl(skillName) {
    return specialIcons[skillName.toLowerCase()] || `https://skillicons.dev/icons?i=${skillName.toLowerCase()}`;
}

export default function HomePage() {
    const t = useTranslations('HomePage');
    const groupedSkills = groupByCategory(skills);

    return (
        <div className="flex flex-col items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 w-full">
                <section id="presentation" className="flex flex-col items-center min-h-screen">
                    <div className="hero-content flex flex-col lg:flex-row items-center gap-8">
                        <div className="text-center lg:text-left gap-4">
                            <div className="flex items-center gap-4 mb-4">
                                <img loading="lazy"
                                     src="https://cdn.farmeurimmo.fr/img/logo.jpg"
                                     className="rounded-full shadow-2xl w-24 h-24" alt="Logo"/>
                                <h1 className="text-6xl font-bold text-gray-900 dark:text-white">{t('title')}</h1>
                            </div>
                            <p className="text-2xl text-gray-700 dark:text-gray-300">{t("description.part1")}</p>
                            <p className="text-2xl text-gray-700 dark:text-gray-300">{t("description.part2")}</p>
                        </div>
                    </div>
                    <div className="hero-content flex flex-col items-start gap-8 mt-24">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">{t('skills.title')}</h2>
                        {Object.keys(groupedSkills).map(category => (
                            <div key={category} className="flex flex-col gap-4">
                                <h3 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">{category}</h3>
                                <div className="flex flex-wrap justify-center gap-4">
                                    {groupedSkills[category].map(skill => (
                                        <div key={skill.name} className="card">
                                            <a href={skill.href} target="_blank"
                                               className="flex flex-col items-center gap-2" title={skill.name}>
                                                <img src={getIconUrl(skill.name)} className="w-16 h-16 rounded-full"
                                                     alt={skill.name} loading={"lazy"}/>
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}