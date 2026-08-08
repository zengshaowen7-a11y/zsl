import ChineseTranslator from "@layouts/ChineseTranslator";
import Home from "../../page";
import ServicesPage from "../../services/page";
import ProcessPage from "../../how-it-works/page";
import WhyUsPage from "../../why-us/page";
import HelpPage from "../../help/page";
import { notFound } from "next/navigation";

const pages = { services: ServicesPage, "how-it-works": ProcessPage, "why-us": WhyUsPage, help: HelpPage };

export default async function ChinesePage({ params }) {
  const { slug = [] } = await params;
  const Page = slug.length === 0 ? Home : pages[slug.join("/")];
  if (!Page) notFound();
  return <><ChineseTranslator /><Page /></>;
}
