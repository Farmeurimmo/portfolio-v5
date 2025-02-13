"use client";

import {CircleHelp, Cloud, Code, Server, Wrench} from "lucide-react";
import ServiceButton from "@/components/ServiceButton";
import ContactForm from "@/components/ContactForm";
import {useTranslations} from "next-intl";
import {useState} from "react";

export default function ContactSection() {
    const t = useTranslations('HomePage');

    const [selectedService, setSelectedService] = useState("");

    const handleContactClick = (service) => {
        setSelectedService(service);
    };

    return (
        <>
            <section id="services" className="flex flex-col items-start p-2 sm:p-4 lg:p-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                    {t('services.title')}
                </h2>

                <div className="flex flex-wrap gap-6 mt-6 w-full justify-start">
                    <div
                        className="flex flex-col justify-between items-center text-center flex-1 min-w-[250px] p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md max-w-[600px] focus:outline"
                        tabIndex="0" id={"dev"}>
                        <Code className="h-20 w-20 text-blue-600 dark:text-blue-400 mb-3"/>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{t('services.web_dev.title')}</h3>
                        <p className="text-gray-700 dark:text-gray-300">{t('services.web_dev.description')}</p>
                        <ServiceButton service={t('services.web_dev.title')} onClick={handleContactClick}/>
                    </div>

                    <div
                        className="flex flex-col justify-between items-center text-center flex-1 min-w-[250px] p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md max-w-[600px] focus:outline"
                        tabIndex="0" id={"saas"}>
                        <Cloud className="h-20 w-20 text-green-600 dark:text-green-400 mb-3"/>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{t('services.saas.title')}</h3>
                        <p className="text-gray-700 dark:text-gray-300">{t('services.saas.description')}</p>
                        <ServiceButton service={t('services.saas.title')} onClick={handleContactClick}/>
                    </div>

                    <div
                        className="flex flex-col justify-between items-center text-center flex-1 min-w-[250px] p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md max-w-[600px] focus:outline"
                        tabIndex="0" id={"admin"}>
                        <Server className="h-20 w-20 text-purple-600 dark:text-purple-400 mb-3"/>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{t('services.admin.title')}</h3>
                        <p className="text-gray-700 dark:text-gray-300">{t('services.admin.description')}</p>
                        <ServiceButton service={t('services.admin.title')} onClick={handleContactClick}/>
                    </div>

                    <div
                        className="flex flex-col justify-between items-center text-center flex-1 min-w-[250px] p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md max-w-[600px] focus:outline"
                        tabIndex="0" id={"installation"}>
                        <Wrench className="h-20 w-20 text-orange-600 dark:text-orange-400 mb-3"/>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{t('services.installation.title')}</h3>
                        <p className="text-gray-700 dark:text-gray-300">{t('services.installation.description')}</p>
                        <ServiceButton service={t('services.installation.title')} onClick={handleContactClick}/>
                    </div>

                    <div
                        className="flex flex-col justify-between items-center text-center flex-1 min-w-[250px] p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md max-w-[600px] focus:outline"
                        tabIndex="0" id={"help"}>
                        <CircleHelp className="h-20 w-20 text-red-600 dark:text-red-400 mb-3"/>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{t('services.help.title')}</h3>
                        <p className="text-gray-700 dark:text-gray-300">{t('services.help.description')}</p>
                        <ServiceButton service={t('services.help.title')} onClick={handleContactClick}/>
                    </div>
                </div>
            </section>

            <section id={"contact"} className="flex flex-col items-start p-2 sm:p-4 lg:p-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">{t('contact.title')}</h2>
                <p className="text-lg font-semibold sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-200">{t('contact.description')}</p>
                <ContactForm service={selectedService}/>
            </section>
        </>
    )
}