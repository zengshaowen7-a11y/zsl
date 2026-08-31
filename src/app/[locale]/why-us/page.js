import WhyJWRedesign from "@layouts/WhyJWRedesign";
import SeoMeta from "@layouts/SeoMeta";
import { getPageMetadata } from "@/i18n/metadata";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata(locale, "whyUs");
}

export default async function WhyUsPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const metadata = await getPageMetadata(locale, "whyUs");
  return <><SeoMeta title={metadata.title} /><WhyJWRedesign /></>;
}
