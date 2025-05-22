import {useTranslations} from "next-intl";

export default function Legals() {
    const t = useTranslations('Legals');

    return (
        <div className="flex flex-col items-center min-h-screen p-8 gap-8 sm:p-10 sm:p-4">
            <main className="flex flex-col gap-8 w-full">
                <section id="presentation"
                         className="flex flex-col p-6 sm:p-8 lg:p-10 w-full text-left gap-8 rounded-lg">
                    <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">{t('title')}</h1>

                    <div className="flex flex-col flex-wrap gap-8 md:flex-row">
                        <div
                            className="flex flex-col gap-2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-96 w-full">
                            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">{t('editor_title')}</h2>
                            <p className="text-lg text-gray-700 dark:text-gray-300">{t('editor_name')}</p>
                            <p className="text-lg text-gray-700 dark:text-gray-300">{t('editor_email')}</p>
                            <p className="text-lg text-gray-700 dark:text-gray-300">{t('editor_address')}</p>
                            <p className="text-lg text-gray-700 dark:text-gray-300">{t('editor_status')}</p>
                            <p className="text-lg text-gray-700 dark:text-gray-300">{t('editor_siret')}</p>
                            <p className="text-lg text-gray-700 dark:text-gray-300">{t('editor_ape')}</p>
                            <p className="text-lg text-gray-700 dark:text-gray-300">{t('editor_tva')}</p>
                        </div>

                        <div
                            className="flex flex-col gap-2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-96 w-full">
                            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">{t('host_title')}</h2>
                            <p className="text-lg text-gray-700 dark:text-gray-300">{t('host_name')}</p>
                            <p className="text-lg text-gray-700 dark:text-gray-300">{t('host_address')}</p>
                            <p className="text-lg text-gray-700 dark:text-gray-300">{t('host_city')}</p>
                            <p className="text-lg text-gray-700 dark:text-gray-300">{t('host_country')}</p>
                            <a href={"mailto:" + t('host_email')} className="text-lg link dark:text-blue-400 hover:underline">{t('host_email')}</a>
                            <a href="https://vercel.com"
                               className="text-lg link dark:text-blue-400 hover:underline">{t('host_website')}</a>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full">
                        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">{t('privacy.title')}</h2>

                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-6 mb-4">{t('privacy.section_1_title')}</h3>
                        <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">{t('privacy.section_1_text')}</p>
                        <ul className="list-inside list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                            <li>{t('privacy.section_1_item_1')}</li>
                            <li>{t('privacy.section_1_item_2')}</li>
                            <li>{t('privacy.section_1_item_3')}</li>
                            <li>{t('privacy.section_1_item_4')}</li>
                        </ul>

                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-6 mb-4">{t('privacy.section_2_title')}</h3>
                        <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">{t('privacy.section_2_text')}</p>
                        <ul className="list-inside list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                            <li>{t('privacy.section_2_item_1')}</li>
                            <li>{t('privacy.section_2_item_2')}</li>
                        </ul>

                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-6 mb-4">{t('privacy.section_3_title')}</h3>
                        <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">{t('privacy.section_3_text')}</p>

                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-6 mb-4">{t('privacy.section_4_title')}</h3>
                        <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">{t('privacy.section_4_text')}</p>
                        <ul className="list-inside list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                            <li>{t('privacy.email_label')}</li>
                            <li>{t('privacy.contact_form_label')}</li>
                        </ul>

                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-6 mb-4">{t('privacy.third_party_services_title')}</h3>
                        <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">{t('privacy.third_party_services_text')}</p>
                        <ul className="list-inside list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                            <li>{t('privacy.third_party_v1')}</li>
                            <li>{t('privacy.third_party_v2')}</li>
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    )
}