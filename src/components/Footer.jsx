"use client";

import {useEffect, useState} from "react";
import Link from "next/link";
import {useTranslations} from "next-intl";
import ThemeButton from "@/components/ThemeButton";

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

    return (
        <>
            <footer className="footer bg-base-200 dark:bg-gray-800 text-base-content dark:text-gray-200 p-10">
                <nav>
                    <h6 className="footer-title">{t('services')}</h6>
                    <Link className="link link-hover" href="#">{t("servicesList.dev")}</Link>
                    <Link className="link link-hover" href="#">{t("servicesList.sysadmin")}</Link>
                    <Link className="link link-hover" href="#">{t("servicesList.thirdpartyinstall")}</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">{t("legal")}</h6>
                    <Link className="link link-hover" href="#">{t("legalMentions")}</Link>
                    <Link className="link link-hover" href="#">{t("privacy")}</Link>
                    <Link className="link link-hover" href="#">{t("cookies")}</Link>
                </nav>
            </footer>
            <footer
                className="footer bg-base-200 dark:bg-gray-800 text-base-content dark:text-gray-200 border-base-300 dark:border-gray-700 border-t px-10 py-4">
                <aside className="grid-flow-col items-center">
                    <img src="https://cdn.farmeurimmo.fr/img/logo.jpg" loading={"lazy"} alt="Logo"
                         className="h-12 w-12 rounded-full"/>
                    <p className={"font-bold"}>
                        Farmeurimmo
                        <br/>
                        {t("since")}
                    </p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="flex flex-row flex-wrap gap-4">
                        <ThemeButton blackBackground={true}/>
                        <div className={"flex flex-col gap-1"}>
                            <Link href="https://github.com/Farmeurimmo/portfolio-v5"
                                  className="link link-hover">{t("sourcecode")}</Link>
                            <Link href={`https://github.com/Farmeurimmo/portfolio-v5/commit/${commitHash}`}
                                  className="link link-hover text-amber-600">{commitHash}</Link>
                        </div>
                    </div>
                </nav>
            </footer>
        </>
    );
}