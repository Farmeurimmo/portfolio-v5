import {useTranslations} from 'next-intl';

let skills = [
    {
        name: 'JavaScript',
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        category: 'Languages'
    },
    {
        name: 'Python',
        href: 'https://www.python.org/',
        category: 'Languages'
    },
    {
        name: 'Java',
        href: 'https://www.oracle.com/java/',
        category: 'Languages'
    },
    {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        category: 'Languages'
    },
    {
        name: 'HTML',
        href: 'https://html.spec.whatwg.org/',
        category: 'Languages'
    },
    {
        name: 'CSS',
        href: 'https://www.w3.org/Style/CSS/',
        category: 'Languages'
    },
    {
        name: 'C',
        href: 'https://en.cppreference.com/w/c/language',
        category: 'Languages'
    },
    {
        name: 'Markdown',
        href: 'https://www.markdownguide.org/',
        category: 'Languages'
    },
    {
        name: 'Bash',
        href: 'https://www.gnu.org/software/bash/',
        category: 'Languages'
    },
    {
        name: 'React',
        href: 'https://reactjs.org/',
        category: 'Frameworks & Libraries'
    },
    {
        name: 'Nextjs',
        href: 'https://nextjs.org/',
        category: 'Frameworks & Libraries'
    },
    {
        name: 'TailwindCSS',
        href: 'https://tailwindcss.com/',
        category: 'Frameworks & Libraries'
    },
    {
        name: 'Spring',
        href: 'https://spring.io/',
        category: 'Frameworks & Libraries'
    },
    {
        name: 'FastAPI',
        href: 'https://fastapi.tiangolo.com/',
        category: 'Frameworks & Libraries'
    },
    {
        name: 'Svelte',
        href: 'https://svelte.dev/',
        category: 'Frameworks & Libraries'
    },
    {
        name: 'DaisyUI',
        href: 'https://daisyui.com/',
        category: 'Frameworks & Libraries'
    },
    {
        name: 'SDL3',
        href: 'https://libsdl.org/',
        category: 'Frameworks & Libraries'
    },
    {
        name: 'GitHubActions',
        href: 'https://github.com/features/actions',
        category: 'DevOps'
    },
    {
        name: 'junit5',
        href: 'https://junit.org/junit5/',
        category: 'DevOps'
    },
    {
        name: 'Docker',
        href: 'https://www.docker.com/',
        category: 'DevOps'
    },
    {
        name: 'Portainer',
        href: 'https://www.portainer.io/',
        category: 'DevOps'
    },
    {
        name: 'Git',
        href: 'https://git-scm.com/',
        category: 'DevOps'
    },
    {
        name: 'GitHub',
        href: 'https://github.com/',
        category: 'DevOps'
    },
    {
        name: 'Vite',
        href: 'https://vitejs.dev/',
        category: 'DevOps'
    },
    {
        name: 'Pnpm',
        href: 'https://pnpm.io/',
        category: 'DevOps'
    },
    {
        name: 'RabbitMQ',
        href: 'https://www.rabbitmq.com/',
        category: 'DevOps'
    },
    {
        name: 'Cloudflare',
        href: 'https://www.cloudflare.com/',
        category: 'DevOps'
    },
    {
        name: 'Vercel',
        href: 'https://vercel.com/',
        category: 'DevOps'
    },
    {
        name: 'Ubuntu',
        href: 'https://ubuntu.com/',
        category: 'DevOps'
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
        category: 'DevOps'
    },
    {
        name: 'Maven',
        href: 'https://maven.apache.org/',
        category: 'DevOps'
    },
    {
        name: 'Grafana',
        href: 'https://grafana.com/',
        category: 'Monitoring'
    },
    {
        name: 'InfluxDB',
        href: 'https://www.influxdata.com/',
        category: 'Databases'
    },
    {
        name: 'PhpMyAdmin',
        href: 'https://www.phpmyadmin.net/',
        category: 'Databases'
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
    'influxdb': 'https://www.influxdata.com/wp-content/uploads/cubo.svg',
    'phpmyadmin': 'https://www.phpmyadmin.net/static/favicon.ico',
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
                <section id="presentation" className="flex flex-col items-center min-h-screen p-4 sm:p-8 lg:p-16">
                    <div className="hero place-items-start flex flex-col lg:flex-row items-center gap-8 w-full">
                        <div className="text-center lg:text-left gap-4 w-full">
                            <div className="flex items-center gap-4 mb-4">
                                <img loading="lazy"
                                     src="https://cdn.farmeurimmo.fr/img/logo.jpg"
                                     className="rounded-full shadow-2xl w-24 h-24 lg:w-32 lg:h-32" alt="Logo"/>
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">{t('title')}</h1>
                            </div>
                            <p className="text-lg font-semibold sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-200">{t("description.part1")}</p>
                            <p className="text-lg font-semibold sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-200">{t("description.part2")}</p>
                        </div>
                    </div>
                    <div className="hero place-items-start flex flex-col gap-8 mt-12 lg:mt-24 w-full">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">{t('skills.title')}</h2>
                        {Object.keys(groupedSkills).map(category => (
                            <div key={category} className="flex flex-col flex-wrap gap-8">
                                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-gray-200">{t("skills."+ category)}</h3>
                                <div className="flex flex-wrap gap-4">
                                    {groupedSkills[category].map(skill => (
                                        <div key={skill.name} className={`card ${groupedSkills[category].length > 1 ? 'flex-grow' : ''}`}>
                                            <a href={skill.href} target="_blank"
                                               className="flex flex-col items-center gap-2" title={skill.name}>
                                                <img src={getIconUrl(skill.name)}
                                                     className="w-16 h-16 lg:w-20 lg:h-20 rounded-full"
                                                     alt={skill.name} loading={"lazy"}/>
                                                <p className="text-sm sm:text-base lg:text-lg text-gray-800 dark:text-gray-200">{skill.name}</p>
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section id={"contact"} className="flex flex-col items-center min-h-screen p-4 sm:p-8 lg:p-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">{t('contact.title')}</h2>
                    <p className="text-lg font-semibold sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-200">{t('contact.description')}</p>
                    <div className="flex flex-col gap-4 mt-8">
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="text" className="grow" placeholder="Email" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>
                            <input type="text" className="grow" placeholder="Username" />
                        </label>
                    </div>
                </section>
            </main>
        </div>
    );
}