import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import {
  FiArrowRight,
  FiCheck,
  FiClipboard,
  FiPackage,
  FiShield,
  FiUsers,
  FiX,
} from "react-icons/fi";
import WhyJWFactsRail from "./components/WhyJWFactsRail";
import WhyJWCompareBoard from "./components/WhyJWCompareBoard";
import QCEvidenceWorkbench from "./components/QCEvidenceWorkbench";
import AccountSupportScene from "./components/AccountSupportScene";
import FinalBottleneckCTA from "./components/FinalBottleneckCTA";

export default function WhyJWRedesign() {
  const t = useTranslations("WhyUs");
  const comparisons = t.raw("comparisons");
  const principles = t.raw("principles");
  const heroSupportCards = t.raw("supportCards");
  const fitItems = t.raw("fitItems");
  const notFitItems = t.raw("notFitItems");
  const faqs = t.raw("faqs");
  const hero = t.raw("hero");
  const compare = t.raw("compare");
  const principlesSection = t.raw("principlesSection");
  const evidence = t.raw("evidence");
  const support = t.raw("support");
  const fit = t.raw("fit");
  const faq = t.raw("faq");
  const final = t.raw("final");
  const principleIcons = [FiUsers, FiShield, FiClipboard, FiPackage];
  return (
    <main className="wjw-page">
      <section className="wjw-hero">
        <div className="wjw-hero-copy">
          <p className="wjw-kicker">{hero.kicker}</p>
          <h1 className="wjw-hero-title">{hero.title}</h1>
          <p>{hero.lead}</p>
          <div className="wjw-actions"><Link href="/contact" className="wjw-button wjw-button-primary">{hero.primary} <FiArrowRight /></Link><a href="#jw-difference" className="wjw-button wjw-button-ghost">{hero.secondary}</a></div>
          <ul>{hero.proofs.map((item) => <li key={item}><FiCheck /> {item}</li>)}</ul>
        </div>
        <div className="wjw-hero-media">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/generated/why-jw-operations-video-poster.png"
            aria-label={hero.videoLabel}
            data-critical-media
          >
            <source src="/videos/why-jw-team-operations.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="wjw-facts">
        <WhyJWFactsRail items={heroSupportCards} />
      </section>

      <section className="wjw-compare" id="jw-difference">
        <div className="wjw-container">
          <header className="wjw-heading"><div><p className="wjw-kicker">{compare.kicker}</p><h2>{compare.title}</h2></div><p>{compare.lead}</p></header>
          <WhyJWCompareBoard comparisons={comparisons} details={compare.details} typicalLabel={compare.typical} jwLabel={compare.jw} />
        </div>
      </section>

      <section className="wjw-principles">
        <div className="wjw-container">
          <header className="wjw-heading wjw-heading-centered"><div><p className="wjw-kicker">{principlesSection.kicker}</p><h2>{principlesSection.title}</h2></div><p>{principlesSection.lead}</p></header>
          <div className="wjw-principle-grid">{principles.map(([title, copy], index) => { const Icon = principleIcons[index]; return <article key={title}><div><span>{String(index + 1).padStart(2, "0")}</span><Icon /></div><h3>{title}</h3><p>{copy}</p></article>; })}</div>
        </div>
      </section>

      <section className="wjw-evidence">
        <QCEvidenceWorkbench content={evidence} />
      </section>

      <section className="wjw-support">
        <AccountSupportScene content={support} cards={heroSupportCards} />
      </section>

      <section className="wjw-fit">
        <div className="wjw-container">
          <header className="wjw-heading"><div><p className="wjw-kicker">{fit.kicker}</p><h2>{fit.title}</h2></div><p>{fit.lead}</p></header>
          <div className="wjw-fit-grid"><div><h3>{fit.good}</h3><ul>{fitItems.map(item => <li key={item}><FiCheck />{item}</li>)}</ul></div><div><h3>{fit.bad}</h3><ul>{notFitItems.map(item => <li key={item}><FiX />{item}</li>)}</ul></div></div>
        </div>
      </section>

      <section className="wjw-faq"><div className="wjw-container wjw-faq-grid"><div><p className="wjw-kicker">{faq.kicker}</p><h2>{faq.title}</h2><p>{faq.lead}</p></div><div className="wjw-accordion">{faqs.map(([q,a],index)=><details name="wjw-faq" key={q} open={index===0}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>

      <section className="wjw-final"><FinalBottleneckCTA content={final} options={heroSupportCards} /></section>
    </main>
  );
}
