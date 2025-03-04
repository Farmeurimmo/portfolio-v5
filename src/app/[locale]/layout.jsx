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
                title: "Farmeurimmo | Dev & SysAdmin Portfolio",
                description: "Discover my portfolio as a developer and system administrator. SaaS services, infrastructure management, and digital solutions.",
                keywords: "developer, system administrator, SaaS, infrastructure management, programming, automation, cloud solutions, security, digital solutions",
                "og:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "twitter:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "robots": "index, follow"
            },
            blog: {
                title: "Farmeurimmo | Blog - Tech & Development",
                description: "Insights and discussions on technology, software development, system administration, and digital solutions.",
                keywords: "blog, technology, development, system administration, programming, cloud computing, automation, software engineering, cybersecurity, digital solutions",
                "og:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "twitter:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "robots": "index, follow"
            },
            projects: {
                title: "Farmeurimmo | Dev & SysAdmin Projects",
                description: "A showcase of my completed and ongoing projects in development, system administration, and digital solutions.",
                keywords: "projects, software development, system administration, digital solutions, programming, automation, cloud solutions, infrastructure, DevOps, SaaS",
                "og:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "twitter:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "robots": "index, follow"
            },
            legals: {
                title: "Farmeurimmo | Legal Information",
                description: "Legal information and terms of use for my portfolio website. (https://farmeurimmo.fr)",
                keywords: "legal mentions, terms of use, privacy policy, data protection, cookies, website terms",
                "og:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "twitter:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "robots": "index, nofollow"
            }
        },
        fr: {
            default: {
                title: "Farmeurimmo | Portfolio Dev & Admin Sys",
                description: "Découvrez mon portfolio de développeur et administrateur système. Services en SaaS, gestion d’infrastructure et solutions numériques.",
                keywords: "développeur, administrateur système, SaaS, gestion des infrastructures, programmation, automatisation, solutions cloud, sécurité, solutions numériques",
                "og:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "twitter:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "robots": "index, follow"
            },
            blog: {
                title: "Farmeurimmo | Blog - Tech & Développement",
                description: "Réflexions et discussions sur la technologie, le développement, l'administration système et les solutions numériques.",
                keywords: "blog, technologie, développement, administration système, programmation, cloud computing, automatisation, ingénierie logicielle, cybersécurité, solutions numériques",
                "og:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "twitter:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "robots": "index, follow"
            },
            projects: {
                title: "Farmeurimmo | Projets Dev & Admin Sys",
                description: "Une vitrine de mes projets terminés et en cours en développement, administration système et solutions numériques.",
                keywords: "projets, développement logiciel, administration système, solutions numériques, programmation, automatisation, solutions cloud, infrastructure, DevOps, SaaS",
                "og:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "twitter:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "robots": "index, follow"
            },
            legals: {
                title: "Farmeurimmo | Mentions Légales",
                description: "Informations légales et conditions d'utilisation pour mon site web portfolio. (https://farmeurimmo.fr)",
                keywords: "mentions légales, conditions d'utilisation, politique de confidentialité, protection des données, cookies, conditions du site web",
                "og:image": "https://cdn.farmeurimmo.fr/img/logo.png",
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
                title: meta.title,
                description: meta.description,
                images: [{ url: meta["og:image"] }],
                url: `https://farmeurimmo.fr/${locale}${pathname}`,
                siteName: "Farmeurimmo",
            },
            twitter: {
                title: meta.title,
                description: meta.description,
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
