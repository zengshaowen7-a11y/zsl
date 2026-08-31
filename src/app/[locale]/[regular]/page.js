import NotFound from "@layouts/404";
import Contact from "@layouts/Contact";
import Default from "@layouts/Default";
import Faq from "@layouts/Faq";
import Pricing from "@layouts/Pricing";
import SeoMeta from "@layouts/SeoMeta";
import { plannedLocales } from "@/i18n/routing";
import { getRegularPage, getSinglePage } from "@lib/contentParser";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

// for all regular pages
const RegularPages = async ({ params }) => {
  const { locale, regular } = await params;
  if (plannedLocales.includes(regular)) notFound();
  setRequestLocale(locale);
  const regularPageData = await getRegularPage(regular);
  const { title, meta_title, description, image, noindex, canonical, layout } =
    regularPageData.frontmatter;
  const { content } = regularPageData;

  return (
    <>
      <SeoMeta
        title={title}
        description={description ? description : content.slice(0, 120)}
        meta_title={meta_title}
        image={image}
        noindex={noindex}
        canonical={canonical}
      />
      {layout === "404" ? (
        <NotFound data={regularPageData} />
      ) : layout === "contact" ? (
        <Contact data={regularPageData} />
      ) : layout === "pricing" ? (
        <Pricing data={regularPageData} />
      ) : layout === "faq" ? (
        <Faq data={regularPageData} />
      ) : (
        <Default data={regularPageData} />
      )}
    </>
  );
};
export default RegularPages;

// for regular page routes
export const generateStaticParams = async () => {
  const allslugs = getSinglePage("src/content");
  const slugs = allslugs
    .map((item) => item.slug)
    .filter((slug) => slug !== "contact");
  const paths = slugs.map((slug) => ({
    regular: slug,
  }));

  return paths;
};
