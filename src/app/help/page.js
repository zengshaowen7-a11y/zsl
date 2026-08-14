import { detailPages } from "@config/detail-pages";
import MarketingDetail from "@layouts/MarketingDetail";
import SeoMeta from "@layouts/SeoMeta";

export default function HelpPage() {
  return <><SeoMeta title="Sourcing and Fulfillment Help Centre" /><MarketingDetail page={detailPages.help} /></>;
}
