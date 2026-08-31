import HowItWorksRedesign from "@layouts/HowItWorksRedesign";
import SeoMeta from "@layouts/SeoMeta";
import { getPageMetadata } from "@/i18n/metadata";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata(locale, "howItWorks");
}

export default async function ProcessPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const metadata = await getPageMetadata(locale, "howItWorks");
  return <><SeoMeta title={metadata.title} /><HowItWorksRedesign /></>;
}
