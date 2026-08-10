import { getServicePage, servicePages } from "@config/service-page-content";
import ServiceDetailPage from "@layouts/ServiceDetailPage";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return servicePages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) return {};
  return {
    title: `${service.menuTitle} | JW Dropshipping`,
    description: service.lead,
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) notFound();
  return <ServiceDetailPage service={service} />;
}
