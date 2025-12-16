"use client";

import {ArrowRight, CircleHelp, Code, Server} from "lucide-react";
import ContactForm from "@/app/components/ContactForm";
import {useTranslations} from "next-intl";
import {useState} from "react";
import Skills from "@/app/components/Skills";

export default function MainPageContent() {
    const t = useTranslations('HomePage');

    const [selectedService, setSelectedService] = useState("");

    const handleContactClick = (service) => {
        setSelectedService(service);

        document.getElementById("contact").scrollIntoView({behavior: "smooth"});
    };

    const services = [
        {
            id: "java_dev",
            title: "services.java_dev.title",
            description: "services.java_dev.description",
            icon: <Code className="h-16 w-16 text-orange-600 dark:text-orange-400 mb-3"/>
        },
        {
            id: "web_dev",
            title: "services.web_dev.title",
            description: "services.web_dev.description",
            icon: <Code className="h-16 w-16 text-blue-600 dark:text-blue-400 mb-3"/>
        },
        {
            id: "admin",
            title: "services.admin.title",
            description: "services.admin.description",
            icon: <Server className="h-16 w-16 text-purple-600 dark:text-purple-400 mb-3"/>
        },
        {
            id: "support",
            title: "services.support.title",
            description: "services.support.description",
            icon: <CircleHelp className="h-16 w-16 text-green-600 dark:text-green-400 mb-3"/>
        },
    ];

    return (
        <>
            <section id="services" className="flex flex-col items-start gap-2 sm:p-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                    {t('services.title')}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 w-full">
                    {services.map(service => (
                        <article
                            key={service.id}
                            id={service.id}
                            tabIndex={0}
                            role="button"
                            className="flex flex-col justify-between items-center text-center p-6
                            bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:scale-105 hover:shadow-lg
                            transition-transform cursor-pointer active:scale-95 border-amber-500 focus:border"
                            onClick={() => handleContactClick(t(service.title))}
                            aria-label={t(service.title)}
                        >
                            {service.icon}
                            <h3 className="text-2xl font-bold text-black dark:text-white flex items-center gap-2">
                                {t(service.title)}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 text-sm italic mt-2">
                                {t(service.description)}
                            </p>
                            <span className="mt-4 px-4 py-2 btn btn-soft btn-info rounded-xl flex items-center gap-2">
                                {t('services.contactButton')} <ArrowRight className="h-5 w-5"/>
                            </span>
                        </article>
                    ))}
                </div>
            </section>

            <section id="about-me" className="flex flex-col items-start gap-2 sm:p-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                    {t('about.title')}
                </h2>
                <div className="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-200 flex flex-col gap-4">
                    <p>
                        {t('about.content.part1')}
                    </p>
                    <p>
                        {t('about.content.part2')}
                    </p>
                </div>
            </section>

            <Skills/>

            <section id={"contact"} className="flex flex-col items-start gap-2 sm:p-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">{t('contact.title')}</h2>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-200">{t('contact.description')}</p>
                <ContactForm service={selectedService}/>
            </section>
        </>
    )
}