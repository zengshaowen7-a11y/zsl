import { getServicePage, servicePages } from "@config/service-page-content";
import ServiceDetailRedesign from "@layouts/ServiceDetailRedesign";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return servicePages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const service = getServicePage(slug, locale);
  if (!service) return {};
  return {
    title: `${service.menuTitle} | JW Dropshipping`,
    description: service.lead,
  };
}

export default async function ServicePage({ params }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const service = getServicePage(slug, locale);
  if (!service) notFound();
  return <ServiceDetailRedesign service={service} locale={locale} />;
}
