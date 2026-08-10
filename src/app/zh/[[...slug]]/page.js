import ChineseTranslator from "@layouts/ChineseTranslator";
import FulfillmentHome from "@layouts/FulfillmentHome";
import { FulfillmentAbout, FulfillmentServices } from "@layouts/FulfillmentInnerPage";
import { getFulfillmentCopy } from "@config/fulfillment-content";
import Link from "next/link";
import { notFound } from "next/navigation";

function ChineseThanks() {
  const c = getFulfillmentCopy("zh").thanks;
  return <main className="ff-thanks"><div><span>✓</span><h1>{c.title}</h1><p>{c.text}</p><Link className="ff-btn ff-btn-primary" href="/zh">{c.button}</Link></div></main>;
}

const pages = {
  services: () => <FulfillmentServices lang="zh" />,
  "about-us": () => <FulfillmentAbout lang="zh" />,
  "thank-you": ChineseThanks,
};

export default async function ChinesePage({ params }) {
  const { slug = [] } = await params;
  const Page = slug.length === 0 ? () => <FulfillmentHome lang="zh" /> : pages[slug.join("/")];
  if (!Page) notFound();
  return <><ChineseTranslator /><Page /></>;
}
