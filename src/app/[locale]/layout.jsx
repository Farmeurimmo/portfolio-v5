import {NextIntlClientProvider, useTranslations} from "next-intl";
import {getMessages, setRequestLocale} from "next-intl/server";
import {routing} from "@/i18n/routing";
import {redirect} from "next/navigation";
import {Navbar} from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ClientThemeProvider from "./ClientThemeProvider";
import BaseLayout from "@/app/BaseLayout";
import { headers } from "next/headers";

export async function generateStaticParams() {
    return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({ params }) {
    const { locale } = await params;
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
                title: "Portfolio | Farmeurimmo - Developer & System Administrator",
                description: "Explore the portfolio of Farmeurimmo, a skilled developer and system administrator passionate about various technologies.",
                keywords: "developer, system administrator, polyglot programmer, technologies, portfolio, Java, Minecraft, IT solutions, software development, system architecture, cloud computing",
                "og:title": "Farmeurimmo - Developer & System Administrator Portfolio",
                "og:description": "Explore the portfolio of Farmeurimmo, showcasing expertise in software development, system administration, and technology solutions.",
                "og:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "twitter:title": "Farmeurimmo - Developer & System Administrator Portfolio",
                "twitter:description": "Explore the portfolio of Farmeurimmo, showcasing expertise in software development and system administration.",
                "twitter:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "robots": "index, follow"
            },
            blog: {
                title: "Farmeurimmo - Blog",
                description: "Stay updated with the latest news, insights, and articles from Farmeurimmo on technology, development, and system administration.",
                keywords: "blog, news, articles, Farmeurimmo, technology blog, development, system administration, IT, programming",
                "og:title": "Farmeurimmo Blog - Latest Technology and Development Articles",
                "og:description": "Read the latest articles on Farmeurimmo’s blog, covering technology, development, and system administration topics.",
                "og:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "twitter:title": "Farmeurimmo Blog - Latest Articles on Tech and Development",
                "twitter:description": "Stay updated with new articles on technology, system administration, and development topics from Farmeurimmo.",
                "twitter:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "robots": "index, follow"
            }
        },
        fr: {
            default: {
                title: "Portfolio | Farmeurimmo - Développeur & Administrateur Système",
                description: "Découvrez le portfolio de Farmeurimmo, un développeur et administrateur système passionné par diverses technologies.",
                keywords: "développeur, administrateur système, programmeur polyglotte, technologies, portfolio, Java, Minecraft, solutions IT, développement logiciel, architecture système, cloud computing",
                "og:title": "Farmeurimmo - Portfolio Développeur & Administrateur Système",
                "og:description": "Découvrez le portfolio de Farmeurimmo, mettant en avant son expertise en développement logiciel, administration système et solutions technologiques.",
                "og:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "twitter:title": "Farmeurimmo - Portfolio Développeur & Administrateur Système",
                "twitter:description": "Découvrez le portfolio de Farmeurimmo, mettant en avant son expertise en développement logiciel et administration système.",
                "twitter:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "robots": "index, follow"
            },
            blog: {
                title: "Farmeurimmo - Blog",
                description: "Restez à jour avec les dernières actualités, idées et articles du blog de Farmeurimmo sur la technologie, le développement et l'administration système.",
                keywords: "blog, actualités, articles, Farmeurimmo, blog technologique, développement, administration système, informatique, programmation",
                "og:title": "Blog Farmeurimmo - Derniers Articles sur la Technologie et le Développement",
                "og:description": "Lisez les derniers articles du blog de Farmeurimmo, traitant de sujets sur la technologie, le développement et l'administration système.",
                "og:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "twitter:title": "Blog Farmeurimmo - Derniers Articles sur la Technologie et le Développement",
                "twitter:description": "Restez à jour avec les nouveaux articles sur la technologie, l'administration système et le développement de Farmeurimmo.",
                "twitter:image": "https://cdn.farmeurimmo.fr/img/logo.png",
                "robots": "index, follow"
            }
        }
    };

    const pageType = pathname.replace("/", "") || "default";
    try {
        const { title, description, keywords, "og:title": ogTitle, "og:description": ogDescription, "og:image": ogImage, "twitter:title": twitterTitle, "twitter:description": twitterDescription, "twitter:image": twitterImage, robots } = metadata[locale][pageType];

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
    } catch (e) {}
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
