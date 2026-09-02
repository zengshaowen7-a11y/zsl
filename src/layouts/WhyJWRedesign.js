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
            preload="metadata"
            poster="/images/generated/why-jw-operations-video-poster.png"
            aria-label={hero.videoLabel}
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
          <div className="wjw-compare-head"><span>{compare.typical}</span><span>{compare.jw}</span></div>
          <div className="wjw-compare-list">{comparisons.map(([typical, jw]) => <div key={typical}><p><FiX />{typical}</p><p><FiCheck />{jw}</p></div>)}</div>
        </div>
      </section>

      <section className="wjw-principles">
        <div className="wjw-container">
          <header className="wjw-heading wjw-heading-centered"><div><p className="wjw-kicker">{principlesSection.kicker}</p><h2>{principlesSection.title}</h2></div><p>{principlesSection.lead}</p></header>
          <div className="wjw-principle-grid">{principles.map(([title, copy], index) => { const Icon = principleIcons[index]; return <article key={title}><div><span>{String(index + 1).padStart(2, "0")}</span><Icon /></div><h3>{title}</h3><p>{copy}</p></article>; })}</div>
        </div>
      </section>

      <section className="wjw-evidence">
        <div className="wjw-container wjw-evidence-grid">
          <div className="wjw-evidence-media">
            <div className="wjw-evidence-shot">
              <Image src="/images/generated/jw-qc-inspection-v3.png" alt={evidence.imageAltOne} fill sizes="(max-width: 850px) 100vw, 50vw" />
            </div>
            <div className="wjw-evidence-shot">
              <Image src="/images/generated/jw-quality-check-v2.png" alt={evidence.imageAltTwo} fill sizes="(max-width: 850px) 100vw, 50vw" />
            </div>
          </div>
          <div className="wjw-evidence-copy"><p className="wjw-kicker">{evidence.kicker}</p><h2>{evidence.title}</h2><p>{evidence.lead}</p>
            <div className="wjw-report">
              <div><span>{evidence.review}</span><strong>SKU: JW-1024</strong></div>
              <dl>
                <div><dt>{evidence.checked}</dt><dd>50 units</dd></div>
                <div><dt>{evidence.sampling}</dt><dd>100%</dd></div>
                <div><dt>{evidence.passed}</dt><dd>50</dd></div>
                <div><dt>{evidence.issues}</dt><dd>0</dd></div>
                <div><dt>{evidence.packaging}</dt><dd>{evidence.verified}</dd></div>
                <div><dt>{evidence.barcode}</dt><dd>{evidence.matched}</dd></div>
                <div className="wjw-report-status"><dt>{evidence.status}</dt><dd>{evidence.approved}</dd></div>
              </dl>
              <ul className="wjw-report-checks">
                {evidence.checks.map((item) => <li key={item}><FiCheck /> {item}</li>)}
              </ul>
              <div className="wjw-report-progress"><span></span></div>
              <p><strong>{evidence.passedCount}</strong><span>{evidence.issueCount}</span></p>
            </div>
            <Link href="/services/quality-control-inspection" className="wjw-text-link">{evidence.link} <FiArrowRight /></Link>
          </div>
        </div>
      </section>

      <section className="wjw-support">
        <div className="wjw-container wjw-support-grid">
          <div><p className="wjw-kicker">{support.kicker}</p><h2>{support.title}</h2><p>{support.lead}</p><ul><li><FiMessageCircle /> {support.points[0]}</li><li><FiClipboard /> {support.points[1]}</li><li><FiCheckCircle /> {support.points[2]}</li></ul></div>
          <div className="wjw-support-media"><Image src="/images/generated/jw-warehouse-team-v2.png" alt={support.imageAlt} fill sizes="(max-width: 850px) 100vw, 48vw" /></div>
        </div>
      </section>

      <section className="wjw-fit">
        <div className="wjw-container">
          <header className="wjw-heading"><div><p className="wjw-kicker">{fit.kicker}</p><h2>{fit.title}</h2></div><p>{fit.lead}</p></header>
          <div className="wjw-fit-grid"><div><h3>{fit.good}</h3><ul>{fitItems.map(item => <li key={item}><FiCheck />{item}</li>)}</ul></div><div><h3>{fit.bad}</h3><ul>{notFitItems.map(item => <li key={item}><FiX />{item}</li>)}</ul></div></div>
        </div>
      </section>

      <section className="wjw-faq"><div className="wjw-container wjw-faq-grid"><div><p className="wjw-kicker">{faq.kicker}</p><h2>{faq.title}</h2><p>{faq.lead}</p></div><div className="wjw-accordion">{faqs.map(([q,a],index)=><details name="wjw-faq" key={q} open={index===0}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>

      <section className="wjw-final"><div className="wjw-container"><div><p className="wjw-kicker">{final.kicker}</p><h2>{final.title}</h2><p>{final.lead}</p></div><Link href="/contact" className="wjw-button wjw-button-light">{final.button} <FiArrowRight /></Link></div></section>
    </main>
  );
}
