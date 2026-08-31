import SeoMeta from "@layouts/SeoMeta";
import ServicesOverviewRedesign from "@layouts/ServicesOverviewRedesign";
import { getPageMetadata } from "@/i18n/metadata";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata(locale, "services");
}

export default async function ServicesPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const metadata = await getPageMetadata(locale, "services");
  return <><SeoMeta title={metadata.title} /><ServicesOverviewRedesign /></>;
}
