import { detailPages } from "@config/detail-pages";
import MarketingDetail from "@layouts/MarketingDetail";
import SeoMeta from "@layouts/SeoMeta";

export default function ProcessPage() {
  return <><SeoMeta title="How Our Integration Process Works" /><MarketingDetail page={detailPages.process} /></>;
}
