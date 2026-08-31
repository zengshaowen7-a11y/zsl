import config from "@config/config.json";
import theme from "@config/theme.json";
import ScrollReveal from "@layouts/ScrollReveal";
import Footer from "@layouts/partials/Footer";
import Header from "@layouts/partials/Header";
import Providers from "@layouts/partials/Providers";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../../styles/style.css";
import "../../styles/services-heading-scale.css";
import "../../styles/service-detail-polish.css";
import "../../styles/service-story-layouts.css";
import "../../styles/service-conversion.css";
import "../../styles/home-polish.css";
import "../../styles/brand-refresh.css";
import "../../styles/about-polish.css";
import "../../styles/contact-page.css";
import "../../styles/media-motion.css";
import "../../styles/home-testimonials.css";
import "../../styles/light-green-theme.css";
import "../../styles/site-unified-polish.css";
import "../../styles/header-redesign.css";
import "../../styles/hero-redesign.css";
import "../../styles/platform-data-strip.css";
import "../../styles/core-advantages.css";
import "../../styles/fixed-process.css";
import "../../styles/core-services.css";
import "../../styles/fulfillment-compare.css";
import "../../styles/qc-proof.css";
import "../../styles/home-testimonial-summary.css";
import "../../styles/home-faq-quote.css";
import "../../styles/home-visual-system.css";
import "../../styles/service-detail-redesign.css";
import "../../styles/service-detail-final.css";
import "../../styles/services-overview-redesign.css";
import "../../styles/how-it-works-redesign.css";
import "../../styles/why-jw-redesign.css";
import "../../styles/testimonials-redesign.css";
import "../../styles/contact-redesign.css";
import "../../styles/services-overview-strip-polish.css";
import "../../styles/services-overview-faq-polish.css";
import "../../styles/home-premium-refresh.css";
import "../../styles/home-brief-v1.css";
import "../../styles/home-brief-v2.css";
import "../../styles/home-module-upgrade-v3.css";
import "../../styles/global-heading-scale.css";
import "../../styles/home-stats-responsive.css";
import "../../styles/dropshipping-supplier-hero.css";
import "../../styles/three-pl-fulfillment-hero.css";
import "../../styles/pod-fulfillment-hero.css";
import "../../styles/private-label-hero.css";
import "../../styles/remaining-service-heroes.css";
import "../../styles/services-overview-hero.css";
import "../../styles/services-overview-launch.css";
import "../../styles/services-workflow.css";
import "../../styles/testimonials-hero.css";
import "../../styles/service-detail-module-enhancements.css";
import "../../styles/service-detail-branding-module-enhancements.css";
import "../../styles/service-detail-operations-module-enhancements.css";
import "../../styles/service-detail-proof-boost.css";
import "../../styles/service-detail-case-polish.css";
import "../../styles/why-jw-module-enhancements.css";
import "../../styles/testimonials-module-enhancements.css";
import "../../styles/contact-module-enhancements.css";
import "../../styles/service-form-unification.css";
import "../../styles/green-button-theme.css";
import "../../styles/header-scroll-stability.css";
import "../../styles/product-sourcing-decision-filter.css";
import "../../styles/product-sourcing-scope-matrix.css";
import "../../styles/product-sourcing-decision-flow.css";
import "../../styles/product-sourcing-offer-comparison.css";
import "../../styles/product-sourcing-quote-evaluation.css";
import "../../styles/product-sourcing-case-story.css";
import "../../styles/product-sourcing-form-compact.css";
import "../../styles/product-sourcing-section-rhythm.css";
import "../../styles/automatic-order-hero-refresh.css";
import "../../styles/china-fulfillment-center-heading-scale.css";
import "../../styles/quality-control-hero-workbench.css";
import "../../styles/china-fulfillment-hero-taste.css";
import "../../styles/china-fulfillment-fit-taste.css";
import "../../styles/china-fulfillment-scope-taste.css";
import "../../styles/china-fulfillment-hero-copy-taste.css";
import "../../styles/china-fulfillment-zones-taste.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    metadataBase: new URL("https://zsl111.netlify.app"),
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("openGraphTitle"),
      description: t("openGraphDescription"),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("openGraphDescription"),
    },
  };
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const pf = theme.fonts.font_family.primary;
  const sf = theme.fonts.font_family.secondary;

  return (
    <html suppressHydrationWarning lang={locale}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <link rel="shortcut icon" href={config.site.favicon} />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href={`https://fonts.googleapis.com/css2?family=${pf}${
            sf ? "&family=" + sf : ""
          }&display=swap`}
          rel="stylesheet"
        />
        <meta name="theme-name" content="flowbridge-fulfillment" />
        <meta name="msapplication-TileColor" content="#e8f6ed" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#ffffff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#e8f6ed"
        />
      </head>
      <body className="jw-green-buttons" suppressHydrationWarning>
        <NextIntlClientProvider>
          <Header />
          <ScrollReveal />
          <Providers>{children}</Providers>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
