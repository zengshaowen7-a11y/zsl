import { detailPages } from "@config/detail-pages";
import MarketingDetail from "@layouts/MarketingDetail";
import SeoMeta from "@layouts/SeoMeta";
import { getPageMetadata } from "@/i18n/metadata";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata(locale, "help");
}

export default async function HelpPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const metadata = await getPageMetadata(locale, "help");
  return <><SeoMeta title={metadata.title} /><MarketingDetail page={detailPages.help} /></>;
}
