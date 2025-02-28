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
                description: "Explore my portfolio as a developer, system administrator, and digital solutions provider. I offer SaaS, system administration, infrastructure management, and more.",
                keywords: "developer, system administrator, SaaS, infrastructure management, programming, automation, cloud solutions, security, digital solutions",
                "og:title": "Farmeurimmo | Portfolio - Developer & System Administrator",
                "og:description": "Discover my expertise in software development, system administration, SaaS solutions, and digital projects.",
                "og:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "twitter:title": "Farmeurimmo | Portfolio - Developer & System Administrator",
                "twitter:description": "Explore my portfolio showcasing expertise in software development, system administration, and digital solutions.",
                "twitter:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "robots": "index, follow"
            },
            blog: {
                title: "Farmeurimmo | Blog - Developer & System Administrator",
                description: "Insights and discussions on technology, software development, system administration, and digital solutions.",
                keywords: "blog, technology, development, system administration, programming, cloud computing, automation, software engineering, cybersecurity, digital solutions",
                "og:title": "Farmeurimmo | Blog - Technology & Development Articles",
                "og:description": "Explore articles on technology, software development, system administration, and digital solutions.",
                "og:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "twitter:title": "Farmeurimmo | Blog - Technology & Development Articles",
                "twitter:description": "Read articles on system administration, software development, emerging technologies, and digital solutions.",
                "twitter:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "robots": "index, follow"
            },
            projects: {
                title: "Farmeurimmo | Projects - Developer & System Administrator",
                description: "A showcase of my completed and ongoing projects in development, system administration, and digital solutions.",
                keywords: "projects, software development, system administration, digital solutions, programming, automation, cloud solutions, infrastructure, DevOps, SaaS",
                "og:title": "Farmeurimmo | Projects - Developer & System Administrator",
                "og:description": "Explore my portfolio of projects, including software development, system administration, and other digital solutions.",
                "og:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "twitter:title": "Farmeurimmo | Projects - Developer & System Administrator",
                "twitter:description": "Take a look at my completed and ongoing projects in software development, system administration, and digital solutions.",
                "twitter:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "robots": "index, follow"
            }
        },
        fr: {
            default: {
                title: "Farmeurimmo | Portfolio - Développeur & Administrateur Système",
                description: "Découvrez mon portfolio en tant que développeur, administrateur système et prestataire de solutions numériques. Je propose des services en SaaS, administration système, gestion des infrastructures et plus encore.",
                keywords: "développeur, administrateur système, SaaS, gestion des infrastructures, programmation, automatisation, solutions cloud, sécurité, solutions numériques",
                "og:title": "Farmeurimmo | Portfolio - Développeur & Administrateur Système",
                "og:description": "Découvrez mon expertise en développement logiciel, administration système, solutions SaaS et projets numériques.",
                "og:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "twitter:title": "Farmeurimmo | Portfolio - Développeur & Administrateur Système",
                "twitter:description": "Explorez mon portfolio mettant en avant mon expertise en développement logiciel, administration système et solutions numériques.",
                "twitter:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "robots": "index, follow"
            },
            blog: {
                title: "Farmeurimmo | Blog - Développeur & Administrateur Système",
                description: "Réflexions et discussions sur la technologie, le développement, l'administration système et les solutions numériques.",
                keywords: "blog, technologie, développement, administration système, programmation, cloud computing, automatisation, ingénierie logicielle, cybersécurité, solutions numériques",
                "og:title": "Farmeurimmo | Blog - Articles sur la Technologie & le Développement",
                "og:description": "Découvrez des articles sur la technologie, le développement logiciel, l'administration système et les solutions numériques.",
                "og:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "twitter:title": "Farmeurimmo | Blog - Articles sur la Technologie & le Développement",
                "twitter:description": "Découvrez des articles sur l'administration système, le développement logiciel, les nouvelles technologies et les solutions numériques.",
                "twitter:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "robots": "index, follow"
            },
            projects: {
                title: "Farmeurimmo | Projets - Développeur & Administrateur Système",
                description: "Une vitrine de mes projets terminés et en cours en développement, administration système et solutions numériques.",
                keywords: "projets, développement logiciel, administration système, solutions numériques, programmation, automatisation, solutions cloud, infrastructure, DevOps, SaaS",
                "og:title": "Farmeurimmo | Projets - Développeur & Administrateur Système",
                "og:description": "Explorez mon portfolio de projets, incluant le développement logiciel, l'administration système et d'autres solutions numériques.",
                "og:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "twitter:title": "Farmeurimmo | Projets - Développeur & Administrateur Système",
                "twitter:description": "Découvrez mes projets terminés et en cours en développement logiciel, administration système et solutions numériques.",
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
