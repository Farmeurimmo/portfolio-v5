import {NextIntlClientProvider} from "next-intl";
import {getMessages} from "next-intl/server";
import {routing} from "@/i18n/routing";
import {redirect} from "next/navigation";
import {Navbar} from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientThemeProvider from "./ClientThemeProvider";
import BaseLayout from "@/app/BaseLayout";

export async function generateStaticParams() {
    return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({children, params}) {
    const {locale} = await params;

    if (!routing.locales.includes(locale)) {
        redirect(`/${routing.defaultLocale}`);
        return null;
    }

    const messages = await getMessages();

    return (
        <BaseLayout locale={locale}>
            <NextIntlClientProvider messages={messages}>
                <ClientThemeProvider>
                    <Navbar locale={locale}/>
                    {children}
                    <Footer/>
                </ClientThemeProvider>
            </NextIntlClientProvider>
        </BaseLayout>
    );
}
