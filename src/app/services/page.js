import { detailPages } from "@config/detail-pages";
import MarketingDetail from "@layouts/MarketingDetail";
import SeoMeta from "@layouts/SeoMeta";

export default function ServicesPage() {
  return <><SeoMeta title="Shopify to Mabang ERP Services" /><MarketingDetail page={detailPages.services} /></>;
}
