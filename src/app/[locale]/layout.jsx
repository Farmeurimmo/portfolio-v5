import {NextIntlClientProvider} from "next-intl";
import {getMessages, setRequestLocale} from "next-intl/server";
import {routing} from "@/i18n/routing";
import {redirect} from "next/navigation";
import {Navbar} from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ClientThemeProvider from "./ClientThemeProvider";
import BaseLayout from "@/app/BaseLayout";
import {headers} from "next/headers";

export async function generateStaticParams() {
    return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({params}) {
    const {locale} = await params;
    const headersList = await headers();
    let pathname = headersList.get("x-request-url").replace("https://farmeurimmo.fr", "")
        .replace("https://v5.farmeurimmo.fr", "").replace("http://localhost:3000", "")
        .replace(`/${locale}`, "");

    if (/^\/blog\/.*/.test(pathname)) {
        return;
    }

    if (/^\/projects\/.*/.test(pathname)) {
        return;
    }

    const metadata = {
        en: {
            default: {
                title: "Farmeurimmo | Portfolio - Developer & System Administrator",
                description: "Explore my portfolio as a developer and system administrator. I offer SaaS, system administration, and software development services.",
                keywords: "developer, system administrator, software development, system administration, SaaS, infrastructure management, programming, automation, cloud solutions, security",
                "og:title": "Farmeurimmo | Portfolio - Developer & System Administrator",
                "og:description": "Discover my expertise in software development, system administration, SaaS solutions, and more.",
                "og:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "twitter:title": "Farmeurimmo | Portfolio - Developer & System Administrator",
                "twitter:description": "Explore my portfolio showcasing expertise in software development, system administration, and digital solutions.",
                "twitter:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "robots": "index, follow"
            },
            blog: {
                title: "Farmeurimmo | Blog - Developer & System Administrator",
                description: "Articles on technology, development, and system administration, covering various topics and practical insights.",
                keywords: "blog, technology, development, system administration, programming, cloud computing, automation, software engineering, cybersecurity",
                "og:title": "Farmeurimmo | Blog - Technology & Development Articles",
                "og:description": "Explore articles on technology, software development, and system administration.",
                "og:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "twitter:title": "Farmeurimmo | Blog - Technology & Development Articles",
                "twitter:description": "Read articles on system administration, software development, and emerging technologies.",
                "twitter:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "robots": "index, follow"
            }
        },
        fr: {
            default: {
                title: "Farmeurimmo | Portfolio - Développeur & Administrateur Système",
                description: "Découvrez mon portfolio en tant que développeur et administrateur système. Je propose des services en SaaS, administration système et développement logiciel.",
                keywords: "développeur, administrateur système, développement logiciel, administration système, SaaS, gestion des infrastructures, programmation, automatisation, solutions cloud, sécurité",
                "og:title": "Farmeurimmo | Portfolio - Développeur & Administrateur Système",
                "og:description": "Découvrez mon expertise en développement logiciel, administration système, solutions SaaS et bien plus encore.",
                "og:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "twitter:title": "Farmeurimmo | Portfolio - Développeur & Administrateur Système",
                "twitter:description": "Explorez mon portfolio mettant en avant mon expertise en développement logiciel, administration système et solutions numériques.",
                "twitter:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "robots": "index, follow"
            },
            blog: {
                title: "Farmeurimmo | Blog - Développeur & Administrateur Système",
                description: "Articles sur la technologie, le développement et l'administration système, abordant divers sujets et retours d'expérience.",
                keywords: "blog, technologie, développement, administration système, programmation, cloud computing, automatisation, ingénierie logicielle, cybersécurité",
                "og:title": "Farmeurimmo | Blog - Articles sur la Technologie & le Développement",
                "og:description": "Découvrez des articles sur la technologie, le développement logiciel et l'administration système.",
                "og:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "twitter:title": "Farmeurimmo | Blog - Articles sur la Technologie & le Développement",
                "twitter:description": "Découvrez des articles sur l'administration système, le développement logiciel et les nouvelles technologies.",
                "twitter:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "robots": "index, follow"
            }
        }
    };


    const pageType = pathname.replace("/", "") || "default";
    try {
        const {
            title,
            description,
            keywords,
            "og:title": ogTitle,
            "og:description": ogDescription,
            "og:image": ogImage,
            "twitter:title": twitterTitle,
            "twitter:description": twitterDescription,
            "twitter:image": twitterImage,
            robots
        } = metadata[locale][pageType];

        return {
            title,
            description,
            keywords,
            "og:title": ogTitle,
            "og:description": ogDescription,
            "og:image": ogImage,
            "twitter:title": twitterTitle,
            "twitter:description": twitterDescription,
            "twitter:image": twitterImage,
            robots
        };
    } catch (e) {
    }
}

export default async function LocaleLayout({children, params}) {
    const {locale} = await params;

    if (!routing.locales.includes(locale)) {
        redirect(`/${routing.defaultLocale}`);
        return null;
    }

    setRequestLocale(locale);

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
