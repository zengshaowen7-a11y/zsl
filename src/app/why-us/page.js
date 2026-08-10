import { detailPages } from "@config/detail-pages";
import MarketingDetail from "@layouts/MarketingDetail";
import SeoMeta from "@layouts/SeoMeta";

export default function WhyUsPage() {
  return <><SeoMeta title="Why Choose JW Dropshipping" /><MarketingDetail page={detailPages.whyUs} /></>;
}
