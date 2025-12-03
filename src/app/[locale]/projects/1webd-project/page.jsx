import {useTranslations} from "next-intl";
import Image from "next/image";
import GenerateProjectLangs from "@/app/components/GenerateProjectLangs";

export default function CinemaProject() {
    const t = useTranslations("projects.1webd-project");

    const images = [
        {
            src: "https://cdn.farmeurimmo.fr/img/projects/1webd-project-home.png",
            alt: t('images.indexAlt')
        },
        {
            src: "https://cdn.farmeurimmo.fr/img/projects/1webd-project-cover.png",
            alt: t('images.searchAlt')
        }
    ];

    return (
        <main className="max-w-5xl mx-auto px-4 py-10">

            <title>{t('title')}</title>
            <meta name="description" content={t('summary')}/>
            <meta name="keywords" content="cinema, movies, API, JavaScript, web app"/>
            <meta name="robots" content="index, follow"/>
            <meta property="og:title" content={t('title')}/>
            <meta property="og:description" content={t('summary')}/>
            <meta property="og:image" content={images[0].src}/>
            <meta property="og:url" content="https://farmeurimmo.fr/projects/cinema"/>
            <meta property="og:type" content="website"/>
            <meta property="og:site_name" content="Farmeurimmo"/>

            <GenerateProjectLangs/>

            <h1 className="text-3xl font-bold mb-2">{t('title')}</h1>
            <p className="italic mb-4">{t('summary')}</p>
            <p className="mb-4">{t('score')}</p>

            <div className="mb-8 flex gap-4">
                <a
                    href="https://github.com/Farmeurimmo/1WEBD-Project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-900 text-white rounded-lg shadow hover:bg-gray-700 transition"
                >
                    GitHub Repository
                </a>
            </div>

            <div className="mb-8 flex flex-col gap-4 md:grid md:grid-cols-3">
                {images.map((img, i) => (
                    <figure key={i} className="flex flex-col items-center">
                        <Image
                            src={img.src}
                            alt={img.alt}
                            loading="lazy"
                            width={400}
                            height={250}
                            priority={false}
                            className="rounded-lg shadow-lg object-cover w-full h-auto"
                        />
                        <figcaption className="mt-2 text-md">{img.alt}</figcaption>
                    </figure>
                ))}
            </div>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">{t('requirements.title')}</h2>
                <p>{t('requirements.text')}</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t('deliverables.title')}</h2>
                <ul className="list-disc list-inside text-sm">
                    {t.raw('deliverables.items').map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t('grading.title')}</h2>
                <ul className="list-disc list-inside text-sm">
                    {t.raw('grading.items').map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </section>
        </main>
    );
}