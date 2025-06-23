import "./globals.css";

export default function BaseLayout({children, locale = "en"}) {
    return (
        <html lang={locale}>
        <head>
            <meta name={"favicon"} content="https://cdn.farmeurimmo.fr/img/logo.png"/>
            <link rel="icon" href="https://cdn.farmeurimmo.fr/img/logo.jpg"/>
            <link rel={"shortcut icon"} href={"https://cdn.farmeurimmo.fr/img/logo.jpg"} type={"image/x-icon"}/>

            <meta lang={locale}/>

            <script defer={true} async={true} src={"/ParticleCanvas.js"}/>

            <script defer data-domain="farmeurimmo.fr"
                    src="https://plausible.farmeurimmo.fr/js/script.file-downloads.hash.outbound-links.pageview-props.tagged-events.js"/>
        </head>
        <body className={`antialiased min-h-screen w-screen min-w-[450px]`}>
        {children}
        </body>
        </html>
    );
}

