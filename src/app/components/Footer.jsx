"use client";

import {useEffect, useState} from "react";
import Link from "next/link";
import {useTranslations} from "next-intl";
import ThemeButton from "@/app/components/ThemeButton";
import {useParams} from "next/navigation";

export default function Footer() {
    const [commitHash, setCommitHash] = useState('');

    useEffect(() => {
        const fetchCommitHash = async () => {
            const response = await fetch("https://api.github.com/repos/Farmeurimmo/portfolio-v5/commits/master");
            const data = await response.json();
            setCommitHash(data.sha.slice(0, 7));
        };

        fetchCommitHash();
    }, []);

    const t = useTranslations('Footer');

    const params = useParams();
    const currentLocale = params.locale || "en";

    return (
        <>
            <footer className="footer bg-gray-900 dark:bg-gray-900 text-white dark:text-white p-10">
                <nav>
                    <h2 className="footer-title">{t('services')}</h2>
                    <Link className="link link-hover text-amber-400"
                          href={`/${currentLocale}/#dev`}>{t("servicesList.dev")}</Link>
                    <Link className="link link-hover text-amber-400"
                          href={`/${currentLocale}/#saas`}>{t("servicesList.saas")}</Link>
                    <Link className="link link-hover text-amber-400"
                          href={`/${currentLocale}/#admin`}>{t("servicesList.sysadmin")}</Link>
                    <Link className="link link-hover text-amber-400"
                          href={`/${currentLocale}/#installation`}>{t("servicesList.thirdpartyinstall")}</Link>
                    <Link className="link link-hover text-amber-400"
                          href={`/${currentLocale}/#help`}>{t("servicesList.ondemand")}</Link>
                </nav>
                <nav>
                    <h2 className="footer-title">{t("legal")}</h2>
                    <Link className="link link-hover text-amber-400"
                          href={`/${currentLocale}/legals`}>{t("legalMentions")}</Link>
                </nav>
                <nav>
                    <h2 className="footer-title">{t("others")}</h2>
                    <Link className="link link-hover text-amber-400" href="https://status.farmeurimmo.fr">
                        {t("status")}</Link>
                    <Link className="link link-hover text-amber-400"
                          href="https://www.linkedin.com/in/farmeurimmo/">{t("linkedin")}</Link>
                    <Link className="link link-hover text-amber-400"
                          href="https://github.com/Farmeurimmo">{t("github")}</Link>
                    <p className={"text-amber-400"}>{t("discord")}</p>
                </nav>
            </footer>
            <footer
                className="footer bg-gray-900 dark:bg-gray-900 text-white dark:text-white border-gray-700 dark:border-gray-700 border-t px-10 py-4">
                <aside className="grid-flow-col items-center">
                    <img src="https://cdn.farmeurimmo.fr/img/logo.jpg" loading="lazy" alt="Logo"
                         className="h-12 w-12 rounded-full"/>
                    <p className="font-bold">
                        Farmeurimmo © 2018 - {new Date().getFullYear()}. Tous droits réservés.
                        <br/>
                        {t("since")}
                    </p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="flex flex-row flex-wrap gap-4">
                        <ThemeButton/>
                        <div className="flex flex-col gap-1">
                            <Link href="https://github.com/Farmeurimmo/portfolio-v5"
                                  className="link link-hover text-amber-400">{t("sourcecode")}</Link>
                            <Link href={`https://github.com/Farmeurimmo/portfolio-v5/commit/${commitHash}`}
                                  className="link link-hover text-amber-600">{commitHash}</Link>
                        </div>
                    </div>
                </nav>
            </footer>
        </>
    );
}