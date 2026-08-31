import ContactForm from "@layouts/ContactForm";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { FiArrowRight, FiCheck, FiChevronDown, FiClipboard, FiClock, FiMessageCircle, FiPackage, FiShield } from "react-icons/fi";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PageMetadata.contact" });
  return { title: t("title"), description: t("description") };
}

const contactTitleStyle = {
  fontSize: "clamp(30px, 2.05vw, 36px)",
  lineHeight: "1.08",
  fontWeight: 760,
  letterSpacing: 0,
};

export default async function ContactPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ContactPage");
  const heroProofs = t.raw("heroProofs");
  const steps = t.raw("steps");
  const faqs = t.raw("faqs");
  const stepIcons = [FiClipboard, FiShield, FiPackage];

  return <main className="ctw-page" id="top">
    <section className="ctw-hero">
      <div className="ctw-intro"><div className="ctw-intro-copy"><p className="ctw-kicker">{t("heroKicker")}</p><h1 style={contactTitleStyle}>{t("heroTitle")}</h1><p>{t("heroLead")}</p><ul>{heroProofs.map((item) => <li key={item}><FiCheck /> {item}</li>)}</ul><div className="ctw-response"><FiClock /><div><strong>{t("responseTarget")}</strong><span>{t("responseTime")}</span></div></div></div><div className="ctw-intro-media"><Image src="/images/generated/jw-account-support-v3.png" alt={t("heroImageAlt")} fill priority sizes="(max-width: 900px) 100vw, 48vw" /></div></div>
      <div className="ctw-form-side"><ContactForm /></div>
    </section>

    <section className="ctw-next"><div className="ctw-container"><header className="ctw-heading"><div><p className="ctw-kicker">{t("afterSubmitKicker")}</p><h2 style={contactTitleStyle}>{t("afterSubmitTitle")}</h2></div><p>{t("afterSubmitLead")}</p></header><div className="ctw-next-grid">{steps.map((step, index) => { const Icon = stepIcons[index]; return <article key={step.title}><div><span>{String(index + 1).padStart(2, "0")}</span><Icon /></div><h3>{step.title}</h3><p>{step.copy}</p></article>; })}</div></div></section>

    <section className="ctw-faq"><div className="ctw-container ctw-faq-grid"><div><p className="ctw-kicker">{t("faqKicker")}</p><h2>{t("faqTitle")}</h2><p>{t("faqLead")}</p><Link href="/services">{t("exploreServices")} <FiArrowRight /></Link></div><div className="ctw-accordion">{faqs.map(([q,a],index)=><details name="contact-faq" key={q} open={index===0}><summary>{q}<span aria-hidden="true"><FiChevronDown /></span></summary><p>{a}</p></details>)}</div></div></section>

    <section className="ctw-direct"><div className="ctw-container"><FiMessageCircle /><div><p className="ctw-kicker">{t("firstStepKicker")}</p><h2>{t("firstStepTitle")}</h2><p>{t("firstStepLead")}</p></div><a href="#top">{t("talkToTeam")} <FiMessageCircle /></a></div></section>
  </main>;
}
