import FulfillmentAboutPage from "@layouts/FulfillmentAboutPage";
import { getPageMetadata } from "@/i18n/metadata";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata(locale, "about");
}

export default async function AboutPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <FulfillmentAboutPage />;
}
