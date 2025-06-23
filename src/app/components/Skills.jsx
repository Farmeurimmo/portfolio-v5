import {useTranslations} from "next-intl";
import Image from "next/image";

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

export default function Skills() {
    const t = useTranslations('HomePage');
    const groupedSkills = groupByCategory(skills);

    return (
        <section id={"skills"} className="hero place-items-start flex flex-col gap-4 sm:p-8 w-full">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">{t('skills.title')}</h2>
            {Object.keys(groupedSkills).map(category => (
                <div key={category} className="flex flex-col flex-wrap gap-8">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-gray-200">{t("skills." + category)}</h3>
                    <div className="flex flex-wrap gap-4">
                        {groupedSkills[category].map(skill => (
                            <div key={skill.name}
                                 className={`card ${groupedSkills[category].length > 1 ? 'grow' : ''}`}>
                                <a href={skill.href} target="_blank"
                                   className="flex flex-col items-center gap-2" title={skill.name}>
                                    <Image src={getIconUrl(skill.name)}
                                           className="w-16 h-16 lg:w-20 lg:h-20 rounded-full"
                                           alt={`Logo de ${skill.name}`} loading="lazy"
                                           priority={false} width={112} height={112}/>
                                    <p className="text-sm sm:text-base lg:text-lg text-gray-800 dark:text-gray-200">{skill.name}</p>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    )
}