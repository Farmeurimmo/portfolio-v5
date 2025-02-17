"use client";

import {CircleHelp, Cloud, Code, Server, Wrench} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import {useTranslations} from "next-intl";
import {useState} from "react";
import Skills from "@/components/Skills";

export default function MainPageContent() {
    const t = useTranslations('HomePage');

    const [selectedService, setSelectedService] = useState("");

    const handleContactClick = (service) => {
        setSelectedService(service);

        document.getElementById("contact").scrollIntoView({behavior: "smooth"});
    };

    return (
        <>
            <section id="services" className="flex flex-col items-start p-8 gap-2 sm:p-10">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                    {t('services.title')}
                </h2>

                <div className="flex flex-wrap gap-6 mt-6 w-full justify-start">
                    <button
                        className="flex flex-col justify-between items-center text-center flex-1 min-w-[250px] p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md max-w-[600px] hover:outline hover:outline-amber-500"
                        id={"dev"} tabIndex={0} onClick={() => handleContactClick(t('services.web_dev.title'))}>
                        <Code className="h-20 w-20 text-blue-600 dark:text-blue-400 mb-3"/>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{t('services.web_dev.title')}</h3>
                        <p className="text-gray-700 dark:text-gray-300">{t('services.web_dev.description')}</p>
                    </button>

                    <button
                        className="flex flex-col justify-between items-center text-center flex-1 min-w-[250px] p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md max-w-[600px] hover:outline hover:outline-amber-500"
                        id={"saas"} tabIndex={0} onClick={() => handleContactClick(t('services.saas.title'))}>
                        <Cloud className="h-20 w-20 text-green-600 dark:text-green-400 mb-3"/>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{t('services.saas.title')}</h3>
                        <p className="text-gray-700 dark:text-gray-300">{t('services.saas.description')}</p>
                    </button>

                    <button
                        className="flex flex-col justify-between items-center text-center flex-1 min-w-[250px] p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md max-w-[600px] hover:outline hover:outline-amber-500"
                        id={"admin"} tabIndex={0} onClick={() => handleContactClick(t('services.admin.title'))}>
                        <Server className="h-20 w-20 text-purple-600 dark:text-purple-400 mb-3"/>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{t('services.admin.title')}</h3>
                        <p className="text-gray-700 dark:text-gray-300">{t('services.admin.description')}</p>
                    </button>

                    <button
                        className="flex flex-col justify-between items-center text-center flex-1 min-w-[250px] p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md max-w-[600px] hover:outline hover:outline-amber-500"
                        id={"installation"} tabIndex={0}
                        onClick={() => handleContactClick(t('services.installation.title'))}>
                        <Wrench className="h-20 w-20 text-orange-600 dark:text-orange-400 mb-3"/>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{t('services.installation.title')}</h3>
                        <p className="text-gray-700 dark:text-gray-300">{t('services.installation.description')}</p>
                    </button>

                    <button
                        className="flex flex-col justify-between items-center text-center flex-1 min-w-[250px] p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md max-w-[600px] hover:outline hover:outline-amber-500"
                        id={"help"} tabIndex={0} onClick={() => handleContactClick(t('services.help.title'))}>
                        <CircleHelp className="h-20 w-20 text-red-600 dark:text-red-400 mb-3"/>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{t('services.help.title')}</h3>
                        <p className="text-gray-700 dark:text-gray-300">{t('services.help.description')}</p>
                    </button>
                </div>
            </section>

            <Skills/>

            <section id={"contact"} className="flex flex-col items-start p-8 gap-4 sm:p-10">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">{t('contact.title')}</h2>
                <p className="text-lg font-semibold sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-200">{t('contact.description')}</p>
                <ContactForm service={selectedService}/>
            </section>
        </>
    )
}