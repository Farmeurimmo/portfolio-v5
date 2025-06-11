import {useTranslations} from "next-intl";
import Image from "next/image";
import GenerateProjectLangs from "@/app/components/GenerateProjectLangs";

export default function StrategyGameProject() {
    const t = useTranslations("projects.1algo-project");

    const images = [
        {
            src: "https://cdn.farmeurimmo.fr/img/projects/1algo-project-cover.png",
            alt: "Une partie en cours"
        },
        {
            src: "https://cdn.farmeurimmo.fr/img/projects/1algo-project-home.png",
            alt: "Menu principal"
        }
    ];

    return (
        <main className="max-w-5xl mx-auto px-4 py-10">

            <title>{t('title')}</title>
            <meta name="description" content={t('summary')}/>
            <meta name="keywords" content="python, tkinter, stratégie, jeu à deux, objet"/>
            <meta name="robots" content="index, follow"/>
            <meta property="og:title" content={t('title')}/>
            <meta property="og:description" content={t('summary')}/>
            <meta property="og:image" content="https://cdn.farmeurimmo.fr/img/projects/1pyth-project-snort.png"/>
            <meta property="og:url" content="https://farmeurimmo.fr/projects/strategy-game"/>
            <meta property="og:type" content="website"/>
            <meta property="og:site_name" content="Farmeurimmo"/>

            <GenerateProjectLangs />

            <h1 className="text-3xl font-bold mb-2">{t('title')}</h1>
            <p className="italic mb-4">{t('summary')}</p>
            <p className="mb-4">{t('score')}</p>

            <div className="mb-8 flex gap-4">
                <a
                    href="https://github.com/Farmeurimmo/1algo-project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-900 text-white rounded-lg shadow hover:bg-gray-700 transition"
                >
                    GitHub Repository
                </a>
            </div>

            <div className="mb-8 flex flex-col gap-4 md:grid md:grid-cols-2">
                {images.map((img, i) => (
                    <figure key={i} className="flex flex-col items-center">
                        <Image
                            src={img.src}
                            alt={img.alt}
                            loading="lazy"
                            width={600}
                            height={400}
                            priority={false}
                            className="rounded-lg shadow-lg object-cover w-full h-auto"
                        />
                        <figcaption className="mt-2 text-md">{img.alt}</figcaption>
                    </figure>
                ))}
            </div>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">{t('rules.title')}</h2>
                <ul className="list-disc list-inside text-sm">
                    {t.raw('rules.items').map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t('features.title')}</h2>
                <ul className="list-disc list-inside text-sm">
                    {t.raw('features.items').map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t('constraints.title')}</h2>
                <ul className="list-disc list-inside text-sm">
                    {t.raw('constraints.items').map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t('bonus.title')}</h2>
                <ul className="list-disc list-inside text-sm">
                    {t.raw('bonus.items').map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </section>
        </main>
    );
}