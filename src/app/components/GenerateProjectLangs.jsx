"use client";

import {usePathname} from 'next/navigation';
import {routing} from '@/i18n/routing';
import {useLocale} from 'next-intl';

export default function GenerateProjectLangs() {
    const pathname = usePathname();
    const supportedLocales = routing.locales;
    const currentLocale = useLocale();

    let pathWithoutLocale = pathname;
    supportedLocales.forEach(locale => {
        if (pathname.startsWith(`/${locale}`)) {
            pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
        }
    });

    const localeUrls = {};
    supportedLocales.forEach(locale => {
        localeUrls[locale] = `https://farmeurimmo.fr/${locale}${pathWithoutLocale}`;
    });

    const currentUrl = localeUrls[currentLocale];

    return (
        <>
            <link rel="canonical" href={currentUrl}/>

            {supportedLocales.map(locale => (
                <link
                    key={locale}
                    rel="alternate"
                    hrefLang={locale}
                    href={localeUrls[locale]}
                />
            ))}
        </>
    );
}