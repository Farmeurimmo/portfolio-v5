import {useTranslations} from "next-intl";
import Image from "next/image";
import GenerateProjectLangs from "@/app/components/GenerateProjectLangs";

export default function SnortDodgemProject() {
    const t = useTranslations("projects.1pyth-project");

    const images = [
        {
            src: "https://cdn.farmeurimmo.fr/img/projects/1pyth-project-snort.png",
            alt: "Game Snort"
        },
        {
            src: "https://cdn.farmeurimmo.fr/img/projects/1pyth-project-dodgem.png",
            alt: "Game Dodgem"
        }
    ];

    return (
        <main className="max-w-5xl mx-auto px-4 py-10">

            <title>{t('title')}</title>
            <meta name="description" content={t('summary')}/>
            <meta name="keywords" content={"dodgem, snort, python, game, combinatorial, strategy"}/>
            <meta name="robots" content="index, follow"/>
            <meta property="og:title" content={t('title')}/>
            <meta property="og:description" content={t('summary')}/>
            <meta property="og:image" content="https://cdn.farmeurimmo.fr/img/projects/1pyth-project-cover.jpg"/>
            <meta property="og:url" content="https://farmeurimmo.fr/projects/1pyth-project"/>
            <meta property="og:type" content="website"/>
            <meta property="og:site_name" content="Farmeurimmo"/>

            <GenerateProjectLangs/>

            <h1 className="text-3xl font-bold mb-2">{t('title')}</h1>
            <p className="italic mb-4">{t('summary')}</p>
            <p className="mb-4">{t('score')}</p>

            <div className="mb-8 flex gap-4">
                <a
                    href="https://github.com/Farmeurimmo/1pyth-project"
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
                <h2 className="text-2xl font-semibold mb-2">{t('description.title')}</h2>
                <p>{t('description.text')}</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t('snort.title')}</h2>
                <p>{t('snort.rules')}</p>
                <p>{t('snort.functions')}</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t('dodgem.title')}</h2>
                <p>{t('dodgem.rules')}</p>
                <p>{t('dodgem.functions')}</p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-2">{t('notes.title')}</h2>
                <ul className="list-disc list-inside text-sm">
                    {t.raw('notes.items').map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </section>
        </main>
    );
}
