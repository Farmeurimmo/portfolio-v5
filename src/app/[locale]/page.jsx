import {useTranslations} from 'next-intl';

export default function HomePage() {
    const t = useTranslations('HomePage');
    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
                <section id={"presentation"} className="flex flex-col gap-4 items-center">
                    <h1 className={"text-6xl font-bold"}>{t('subtitle')}</h1>
                    <p className={"text-4xl"}>{t('description')}</p>
                </section>
            </main>
        </div>
    );
}