import "./globals.css";

export default function BaseLayout({children, locale = "en"}) {
    return (
        <html lang={locale}>
        <head>
            <meta name={"favicon"} content="https://cdn.farmeurimmo.fr/img/logo.png"/>
            <link rel="icon" href="https://cdn.farmeurimmo.fr/img/logo.jpg"/>
            <link rel={"shortcut icon"} href={"https://cdn.farmeurimmo.fr/img/logo.jpg"} type={"image/x-icon"}/>

            <link rel={"alternate"} hrefLang={"fr"} href={"https://farmeurimmo.fr/fr"}/>
            <link rel={"alternate"} hrefLang={"en"} href={"https://farmeurimmo.fr/en"}/>

            <link rel={"canonical"} href={"https://farmeurimmo.fr/" + locale}/>

            <meta lang={locale}/>

            <script defer={true} async={true} src={"/ParticleCanvas.js"}/>
        </head>
        <body className={`antialiased min-h-screen w-screen min-w-[400px]`}>
        {children}
        </body>
        </html>
    );
}

