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
            <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1, min-width=400px"/>
            <link rel="icon" href="https://cdn.farmeurimmo.fr/img/logo.jpg"/>
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen w-screen min-w-[400px]`}>
        {children}
        </body>
        </html>
    );
}

