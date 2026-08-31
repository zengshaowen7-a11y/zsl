import TestimonialsRedesign from "@layouts/TestimonialsRedesign";
import { getPageMetadata } from "@/i18n/metadata";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata(locale, "testimonials");
}

export default async function TestimonialsPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <TestimonialsRedesign />;
}
