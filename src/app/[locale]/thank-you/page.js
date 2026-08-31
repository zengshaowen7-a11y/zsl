import { Link } from "@/i18n/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function ThankYouPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "ThankYou" });
  return <main className="ff-thanks"><div><span>✓</span><h1>{t("title")}</h1><p>{t("text")}</p><Link className="ff-btn ff-btn-primary" href="/">{t("button")}</Link></div></main>;
}
