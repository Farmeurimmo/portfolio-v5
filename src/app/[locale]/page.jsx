import {useTranslations} from 'next-intl';
import MainPageContent from "@/app/components/MainPageContent";
import Image from "next/image";

export default function HomePage() {
    const t = useTranslations('HomePage');

    return (
        <div className="flex flex-col items-center min-h-screen p-8 gap-4 sm:p-10">
            <main className="flex flex-col gap-8 w-full">
                <section id="presentation" className="flex flex-col items-center p-2 sm:p-4 lg:p-8">
                    <div className="hero place-items-start flex flex-col lg:flex-row items-center gap-8 w-full">
                        <div className="flex flex-col text-center lg:text-left gap-4 w-full">
                            <div className="flex items-center gap-4 mb-4">
                                <Image loading={"lazy"} priority={false} width={250} height={250}
                                     src="https://cdn.farmeurimmo.fr/img/logo.jpg"
                                     className="rounded-full shadow-2xl w-24 h-24 lg:w-32 lg:h-32" alt="Logo"/>
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">{t('title')}</h1>
                            </div>
                            <p className="text-lg font-semibold sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-200">{t("description.part1")}</p>
                            <p className="text-lg font-semibold sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-200">{t("description.part2")}</p>
                        </div>
                    </div>
                </section>
                <MainPageContent/>
            </main>
        </div>
    );
}