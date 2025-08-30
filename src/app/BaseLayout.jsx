import "./globals.css";
import Script from "next/script";

export default function BaseLayout({children, locale = "en"}) {
    return (
        <html lang={locale}>
        <head>
            <meta name={"favicon"} content="https://cdn.farmeurimmo.fr/img/logo.png"/>
            <link rel="icon" href="https://cdn.farmeurimmo.fr/img/logo.jpg"/>
            <link rel={"shortcut icon"} href={"https://cdn.farmeurimmo.fr/img/logo.jpg"} type={"image/x-icon"}/>

            <meta lang={locale}/>

            <script defer={true} async={true} src={"/ParticleCanvas.js"}/>

            <Script
                src="https://app.rybbit.io/api/script.js"
                data-site-id="1"
                strategy="afterInteractive"
                data-session-replay="true"
            />
        </head>
        <body className={`antialiased min-h-screen w-screen min-w-[450px]`}>
        {children}
        </body>
        </html>
    );
}

