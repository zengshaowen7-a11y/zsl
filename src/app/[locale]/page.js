import SeoMeta from "@layouts/SeoMeta";
import FulfillmentHome from "@layouts/FulfillmentHome";
import { getPageMetadata } from "@/i18n/metadata";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata(locale, "home");
}

export default async function Home({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const metadata = await getPageMetadata(locale, "home");
  return <><SeoMeta title={metadata.title} /><FulfillmentHome lang={locale} /></>;
}
