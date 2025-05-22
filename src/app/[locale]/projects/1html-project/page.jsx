import {useTranslations} from "next-intl";
import Image from "next/image";

export default function OneHtmlProject() {
    const t = useTranslations("projects.1html-project");

    const images = [
        {
            src: "https://cdn.farmeurimmo.fr/img/projects/1html-project-cover.jpg",
            alt: "Experience page of a pastry shop"
        },
        {
            src: "https://cdn.farmeurimmo.fr/img/projects/1html-project-home.png",
            alt: "Homepage of the project"
        },
        {
            src: "https://cdn.farmeurimmo.fr/img/projects/1html-project-contact.jpg",
            alt: "Contact page of the project"
        }
    ];

    return (
        <main className="max-w-5xl mx-auto px-4 py-10">

            <title>{t('title')}</title>
            <meta name="description" content={t('summary')}/>
            <meta name="keywords" content={"HTML, CSS, Responsive Design, Accessibility"}/>
            <meta name="robots" content="index, follow"/>
            <meta property="og:title" content={t('title')}/>
            <meta property="og:description" content={t('summary')}/>
            <meta property="og:image" content="https://cdn.farmeurimmo.fr/img/projects/1html-project-cover.jpg"/>
            <meta property="og:url" content="https://farmeurimmo.fr/projects/1html-project"/>
            <meta property="og:type" content="website"/>
            <meta property="og:site_name" content="Farmeurimmo"/>

            <h1 className="text-3xl font-bold mb-2">{t('title')}</h1>
            <p className="mb-1 italic">{t('summary')}</p>
            <p className="mb-4 font-semibold">{t('score')}</p>
            <p className="mb-8">{t('intro')}</p>

            <div className="mb-8 flex gap-4">
                <a
                    href="https://github.com/Farmeurimmo/1HTML-Project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-900 text-white rounded-lg shadow hover:bg-gray-700 transition"
                >
                    GitHub Repository
                </a>
                <a
                    href="https://farmeurimmo.github.io/1HTML-Project/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500 transition"
                >
                    Live Web Page
                </a>
            </div>

            <div className="mb-8 flex flex-col gap-4 md:grid md:grid-cols-2">
                {images.map((img, i) => (
                    <figure key={i} className="flex flex-col items-center">
                        <Image
                            src={img.src}
                            alt={img.alt}
                            loading="lazy"
                            width={800}
                            height={800}
                            className="rounded-lg shadow-lg object-cover w-full h-auto"
                        />
                        <figcaption className="mt-2 text-md">{img.alt}</figcaption>
                    </figure>
                ))}
            </div>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">{t('presentation.title')}</h2>
                <p>{t('presentation.text')}</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t('features.title')}</h2>
                {['home', 'categories', 'descriptions', 'support'].map((key, i) => (
                    <div key={i} className="mb-4">
                        <h3 className="text-xl font-medium">{t(`features.${key}.title`)}</h3>
                        <ul className="list-disc list-inside text-sm">
                            {t.raw(`features.${key}.items`).map((item, j) => (
                                <li key={j}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-2">{t('constraints.title')}</h2>
                <ul className="list-disc list-inside text-sm">
                    {t.raw('constraints.items').map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </section>
        </main>
    );
}