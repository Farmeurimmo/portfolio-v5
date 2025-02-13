"use client";

import {useTranslations} from "next-intl";

export default function ServiceButton({service, onClick}) {
    const handleClick = () => {
        onClick(service);

        const contact = document.getElementById('contact');
        contact.scrollIntoView({behavior: 'smooth'});
        contact.focus();
    };

    const t = useTranslations('HomePage');

    return (
        <button
            onClick={handleClick}
            className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
        >
            {t('services.contactButton')}
        </button>
    );
}
