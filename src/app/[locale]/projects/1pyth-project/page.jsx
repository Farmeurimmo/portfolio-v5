import {useTranslations} from "next-intl";
import Image from "next/image";

export default function SnortDodgemProject() {
    const t = useTranslations("projects.snort-dodgem");

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
            <h1 className="text-3xl font-bold mb-2">{t('title')}</h1>
            <p className="mb-4">{t('summary')}</p>

            <div className="mb-8 flex gap-4">
                <a
                    href="https://github.com/Farmeurimmo/snort-dodgem"
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
