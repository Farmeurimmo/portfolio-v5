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
    const {locale} = await params;
    const headersList = await headers();

    if (headersList.get("x-request-url") === null) {
        return;
    }

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
                title: "Developer and System Administrator | Farmeurimmo",
                description: "Explore my portfolio as a web and Java developer, system administrator, infrastructure management specialist, and digital solutions provider.",
                keywords: "developer, system administrator, web, Java, infrastructure management, programming, automation, cloud solutions, security, digital solutions",
                "og:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "twitter:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                robots: "index, follow"
            },
            blog: {
                title: "Personal blog | Farmeurimmo",
                description: "Articles focused on technology, development, system administration, and digital solutions.",
                keywords: "blog, technology, development, system administration, programming, cloud computing, automation, software engineering, cybersecurity, digital solutions, articles",
                "og:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "twitter:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                robots: "index, follow"
            },
            projects: {
                title: "Developed and Ongoing Projects | Farmeurimmo",
                description: "A showcase of my completed and ongoing projects in development, system administration, and digital solutions.",
                keywords: "projects, software development, system administration, digital solutions, programming, automation, cloud solutions, infrastructure, DevOps, web, java",
                "og:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "twitter:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                robots: "index, follow"
            },
            legals: {
                title: "Terms & Legal Notices | Farmeurimmo",
                description: "Find all legal notices, terms of use, and privacy policies related to my portfolio website.",
                keywords: "legal notices, terms of use, privacy policy, data protection, cookies, website terms",
                "og:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "twitter:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                robots: "noindex, follow"
            }
        },
        fr: {
            default: {
                title: "Développeur et Administrateur Système | Farmeurimmo",
                description: "Découvrez mon portfolio de développeur web et java, administrateur système, gestion d’infrastructure et solutions numériques.",
                keywords: "développeur, administrateur système, web, java, gestion des infrastructures, programmation, automatisation, solutions cloud, sécurité, solutions numériques",
                "og:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "twitter:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "robots": "index, follow"
            },
            blog: {
                title: "Blog Personnel | Farmeurimmo",
                description: "Articles orienté sur la technique, le développement, l'administration système et les solutions numériques.",
                keywords: "blog, technologie, développement, administration système, programmation, cloud computing, automatisation, ingénierie logicielle, cybersécurité, solutions numériques, articles",
                "og:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "twitter:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "robots": "index, follow"
            },
            projects: {
                title: "Projets développés et en cours | Farmeurimmo",
                description: "Une vitrine de mes projets terminés et en cours en développement, administration système et solutions numériques.",
                keywords: "projets, développement logiciel, administration système, solutions numériques, programmation, automatisation, solutions cloud, infrastructure, DevOps, web, java",
                "og:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "twitter:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "robots": "index, follow"
            },
            legals: {
                title: "Conditions & Mentions Légales | Farmeurimmo",
                description: "Retrouvez toutes les mentions légales, conditions d’utilisation et politiques de confidentialité liées à mon site portfolio.",
                keywords: "mentions légales, conditions d'utilisation, politique de confidentialité, protection des données, cookies, conditions du site web",
                "og:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "twitter:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "robots": "noindex, follow"
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

        const truncate = (text, maxLength) => text.length > maxLength ? text.slice(0, maxLength - 3) + "..." : text;

        const frUrl = `https://farmeurimmo.fr/fr${pathname}`;
        const enUrl = `https://farmeurimmo.fr/en${pathname}`;

        const currentUrl = locale === 'fr' ? frUrl : enUrl;

        const result = {
            title: truncate(meta.title, 60),
            description: truncate(meta.description, 160),
            keywords: meta.keywords,
            robots: meta.robots,
            openGraph: {
                title: truncate(meta.title, 60),
                description: truncate(meta.description, 160),
                images: [{url: meta["og:image"]}],
                url: `https://farmeurimmo.fr/${locale}${pathname}`,
                siteName: "Farmeurimmo",
            },
            twitter: {
                title: truncate(meta.title, 60),
                description: truncate(meta.description, 160),
                images: [{url: meta["twitter:image"]}],
            }
        };

        // Only add canonical and hreflang in production
        if (process.env.NODE_ENV === 'production') {
            result.alternates = {
                canonical: currentUrl,
                languages: {
                    'en': enUrl,
                    'fr': frUrl
                }
            };
        }

        return result;
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
