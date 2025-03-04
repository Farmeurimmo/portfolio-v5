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

export const viewport = {
    width: "device-width",
    initialScale: 1,
    minimumScale: 0.8,
    maximumScale: 2,
    userScalable: true,
}

export async function generateMetadata({params}) {
    const { locale } = await params;
    const headersList = await headers();
    let pathname = headersList.get("x-request-url")
        .replace("https://farmeurimmo.fr", "")
        .replace("https://v5.farmeurimmo.fr", "")
        .replace("http://localhost:3000", "")
        .replace(`/${locale}`, "");

    if (/^\/(blog|projects)\//.test(pathname)) {
        return;
    }

    const metadata = {
        en: {
            default: {
                title: "Farmeurimmo | Portfolio - Developer & System Administrator",
                description: "Discover my portfolio as a developer and system administrator. SaaS services, infrastructure management, and digital solutions.",
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
            },
            legals: {
                title: "Farmeurimmo | Legal Mentions",
                description: "Legal information and terms of use for my portfolio website. (https://farmeurimmo.fr)",
                keywords: "legal mentions, terms of use, privacy policy, data protection, cookies, website terms",
                "og:title": "Farmeurimmo | Legal Mentions",
                "og:description": "Read the legal information and terms of use for my portfolio website.",
                "og:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "twitter:title": "Farmeurimmo | Legal Mentions",
                "twitter:description": "Discover the legal information and terms of use for my portfolio website.",
                "twitter:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "robots": "index, nofollow"
            }
        },
        fr: {
            default: {
                title: "Farmeurimmo | Portfolio - Développeur & Administrateur Système",
                description: "Découvrez mon portfolio de développeur et administrateur système. Services en SaaS, gestion d’infrastructure et solutions numériques.",
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
            },
            legals: {
                title: "Farmeurimmo | Mentions Légales",
                description: "Informations légales et conditions d'utilisation pour mon site web portfolio. (https://farmeurimmo.fr)",
                keywords: "mentions légales, conditions d'utilisation, politique de confidentialité, protection des données, cookies, conditions du site web",
                "og:title": "Farmeurimmo | Mentions Légales",
                "og:description": "Consultez les informations légales et conditions d'utilisation pour mon site web portfolio.",
                "og:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "twitter:title": "Farmeurimmo | Mentions Légales",
                "twitter:description": "Découvrez les informations légales et conditions d'utilisation pour mon site web portfolio.",
                "twitter:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "robots": "index, nofollow"
            }
        }
    };

    const pageType = pathname.replace("/", "") || "default";

    try {
        const meta = metadata[locale]?.[pageType];

        if (!meta) {
            console.error(`Metadata introuvable pour locale="${locale}" et pageType="${pageType}"`);
            return;
        }

        return {
            title: meta.title,
            description: meta.description,
            keywords: meta.keywords,
            robots: meta.robots,
            openGraph: {
                title: meta["og:title"],
                description: meta["og:description"],
                images: [{ url: meta["og:image"] }],
                url: `https://farmeurimmo.fr/${locale}${pathname}`,
                siteName: meta["og:title"],
            },
            twitter: {
                title: meta["twitter:title"],
                description: meta["twitter:description"],
                images: [{ url: meta["twitter:image"] }],
            },
        };
    } catch (e) {
        console.error("Erreur dans la récupération des métadonnées:", e);
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
