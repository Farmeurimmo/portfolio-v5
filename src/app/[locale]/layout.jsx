import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {redirect} from 'next/navigation';
import {routing} from '@/i18n/routing';
import React from 'react';
import {Navbar} from "@/components/Navbar";
import Footer from "@/components/Footer";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import ClientThemeProvider from "@/app/[locale]/ClientThemeProvider";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export function generateStaticParams() {
    return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({children, params}) {
    const {locale} = await params;

    if (!routing.locales.includes(locale) && locale.length <= 2) {
        redirect(routing.defaultLocale);
        return null;
    }

    const messages = await getMessages();

    return (
        <html lang={locale}>
        <head>
            <meta name="viewport"
                  content="width=device-width, initial-scale=1.0, minimum-scale=1, min-width=400px"/>
            <link rel="icon" href="https://cdn.farmeurimmo.fr/img/logo.jpg"/>
        </head>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen w-screen min-w-[400px]`}>
        <NextIntlClientProvider messages={messages}>
            <ClientThemeProvider>
                <Navbar/>
                {children}
                <Footer/>
            </ClientThemeProvider>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}