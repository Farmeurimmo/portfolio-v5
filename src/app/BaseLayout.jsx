import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function BaseLayout({children, locale = "en"}) {
    return (
        <html lang={locale}>
        <head>
            <meta name={"favicon"} content="https://cdn.farmeurimmo.fr/img/logo.png"/>
            <link rel={"canonical"} href={"https://farmeurimmo.fr"}/>
            <link rel="icon" href="https://cdn.farmeurimmo.fr/img/logo.jpg"/>
            <link rel={"shortcut icon"} href={"https://cdn.farmeurimmo.fr/img/logo.jpg"} type={"image/x-icon"} />

            <link rel={"alternate"} hrefLang={"fr"} href={"https://farmeurimmo.fr/fr"}/>
            <link rel={"alternate"} hrefLang={"en"} href={"https://farmeurimmo.fr/en"}/>
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen w-screen min-w-[400px]`}>
        {children}
        </body>
        </html>
    );
}

