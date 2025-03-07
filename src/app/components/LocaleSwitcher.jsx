'use client';

import {useParams} from 'next/navigation';
import {useState, useTransition} from 'react';
import {routing, usePathname, useRouter} from '@/i18n/routing';
import {useTranslations} from "next-intl";

export default function LocaleSwitcher({defaultValue}) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();
    const params = useParams();
    const t = useTranslations('LocaleSwitcher');
    const currentLocale = params.locale || defaultValue;
    const [isOpen, setIsOpen] = useState(false);

    function onSelectChange(event) {
        const nextLocale = event.target.value;
        startTransition(() => {
            router.replace(
                {pathname, params},
                {locale: nextLocale}
            );
        });
    }

    return (
        <div className="dropdown dropdown-hover"
             onMouseEnter={() => setIsOpen(true)}
             onMouseLeave={() => setIsOpen(false)}>
            <button tabIndex={0} className="btn flex flex-row items-center bg-white dark:bg-gray-800 text-black
            dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 border-transparent" aria-label="Locale Switcher">
                {t('locale', {locale: currentLocale})}
                <span className={`font-bold ${isOpen ? 'rotate-0' : 'rotate-90'}`}>▽</span>
            </button>
            <ul tabIndex={0}
                className="dropdown-content menu bg-white dark:bg-gray-800 rounded-box z-1 w-36 p-2 border border-gray-700 dark:border-gray-300">
                {routing.locales.map((cur) => (
                    <li key={cur} className="menu-item">
                        <button
                            value={cur}
                            onClick={onSelectChange}
                            className="w-full text-left text-black dark:text-white p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                            {t('locale', {locale: cur})}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}