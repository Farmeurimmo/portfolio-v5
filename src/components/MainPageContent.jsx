"use client";

import {ArrowRight, CircleHelp, Cloud, Code, Server, Wrench} from "lucide-react";
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

    const services = [
        {
            id: "dev",
            title: "services.web_dev.title",
            description: "services.web_dev.description",
            icon: <Code className="h-20 w-20 text-blue-600 dark:text-blue-400 mb-3"/>
        },
        {
            id: "saas",
            title: "services.saas.title",
            description: "services.saas.description",
            icon: <Cloud className="h-20 w-20 text-green-600 dark:text-green-400 mb-3"/>
        },
        {
            id: "admin",
            title: "services.admin.title",
            description: "services.admin.description",
            icon: <Server className="h-20 w-20 text-purple-600 dark:text-purple-400 mb-3"/>
        },
        {
            id: "installation",
            title: "services.installation.title",
            description: "services.installation.description",
            icon: <Wrench className="h-20 w-20 text-orange-600 dark:text-orange-400 mb-3"/>
        },
        {
            id: "help",
            title: "services.help.title",
            description: "services.help.description",
            icon: <CircleHelp className="h-20 w-20 text-red-600 dark:text-red-400 mb-3"/>
        },
    ];

    return (
        <>
            <section id="services" className="flex flex-col items-start p-2 gap-2 sm:p-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                    {t('services.title')}
                </h2>

                <div className="flex flex-wrap gap-6 mt-6 w-full justify-start">
                    {services.map(service => (
                        <div
                            key={service.id}
                            id={service.id}
                            tabIndex={0}
                            role="button"
                            className="flex flex-col justify-between items-center text-center flex-1 min-w-[250px] p-6
                            bg-white dark:bg-gray-800 rounded-2xl shadow-md max-w-[600px] hover:scale-105 hover:shadow-lg
                            transition-transform cursor-pointer active:scale-95 border-amber-500 focus:border"
                            onClick={() => handleContactClick(t(service.title))}
                            aria-label={t(service.title)}
                        >
                            {service.icon}
                            <h3 className="text-2xl font-bold text-black dark:text-white flex items-center gap-2">
                                {t(service.title)} <ArrowRight className="h-6 w-6 text-amber-500"/>
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 text-sm italic">
                                {t(service.description)}
                            </p>
                            <span className="mt-2 px-4 py-2 btn btn-info rounded-xl">
                                En savoir plus
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            <Skills/>

            <section id={"contact"} className="flex flex-col items-start p-2 gap-2 sm:p-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">{t('contact.title')}</h2>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-200">{t('contact.description')}</p>
                <ContactForm service={selectedService}/>
            </section>
        </>
    )
}