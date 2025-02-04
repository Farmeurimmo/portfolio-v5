import Link from "next/link";
import {useTranslations} from "next-intl";
import LocaleSwitcher from "@/components/LocaleSwitcher";

export function Navbar() {
    const t = useTranslations('Navbar');

    return (
        <>
            <nav
                className="flex flex-col gap-2 sm:flex-row justify-evenly items-start sm:items-center w-full p-2 border-b-gray-50 border-b-[1px]">
                <div className="flex flex-row items-center gap-4">
                    <img src="https://cdn.farmeurimmo.fr/img/logo.jpg" loading={"lazy"} alt="Logo"
                         className="h-8 w-8 rounded-full"/>
                    <Link className="text-2xl font-bold hover:text-orange-500" href={"/"}>Farmeurimmo</Link>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <Link href={"#"} className="text-base font-semibold hover:text-orange-500">{t('home')}</Link>
                    <Link href={"#"} className="text-base font-semibold hover:text-orange-500">{t('projects')}</Link>
                    <Link href={"#"} className="text-base font-semibold hover:text-orange-500">{t('blog')}</Link>
                    <Link href={"#"} className={"text-base font-semibold hover:text-orange-500"}>{t('contact')}</Link>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <LocaleSwitcher/>
                </div>
            </nav>
        </>
    )
}