import { getServiceCatalog } from "@config/service-catalog";
import { getServiceComparison } from "@config/service-conversion-content";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import {
  FiArrowRight,
  FiCheck,
  FiCheckCircle,
  FiClipboard,
  FiChevronDown,
  FiPackage,
  FiSearch,
  FiShield,
  FiTruck,
} from "react-icons/fi";

const serviceIcons = [FiPackage, FiTruck, FiClipboard, FiPackage, FiSearch, FiArrowRight, FiTruck, FiShield];
const workflowIcons = [FiSearch, FiClipboard, FiCheckCircle, FiPackage, FiTruck];
const proofIcons = [FiClipboard, FiShield, FiPackage, FiTruck];

export default function ServicesOverviewRedesign() {
  const locale = useLocale();
  const t = useTranslations("ServicesOverview");
  const serviceCatalog = getServiceCatalog(locale);
  const serviceComparison = getServiceComparison(locale);
  const serviceWorkflow = t.raw("workflowSteps");
  const serviceFaqs = t.raw("faqs");
  const startingPoints = t.raw("startingPoints");
  const proofItems = t.raw("proofItems");
  const hero = t.raw("hero");
  const catalog = t.raw("catalog");
  const comparison = t.raw("comparison");
  const process = t.raw("process");
  const proof = t.raw("proof");
  const faq = t.raw("faq");
  const final = t.raw("final");
  const startingIcons = [FiSearch, FiTruck, FiPackage, FiClipboard];
  return (
    <main className="sov-page">
      <section className="sov-hero">
        <div className="sov-hero-copy">
          <p className="sov-kicker">{hero.kicker}</p>
          <h1>{hero.title}</h1>
          <p className="sov-hero-lead">
            {hero.lead}
          </p>
          <div className="sov-actions">
            <Link className="sov-button sov-button-primary" href="/contact">
              {hero.primary} <FiArrowRight aria-hidden="true" />
            </Link>
            <a className="sov-button sov-button-secondary" href="#service-catalog">
              {hero.secondary}
            </a>
          </div>
          <ul className="sov-hero-points" aria-label={hero.benefitsLabel}>{hero.benefits.map((item) => <li key={item}><FiCheck aria-hidden="true" /> {item}</li>)}</ul>
        </div>
        <div className="sov-hero-media">
          <Image
            src="/images/generated/jw-receiving-team-v3.png"
            alt={hero.imageAlt}
            fill
            priority
            sizes="(max-width: 767px) 100vw, 52vw"
          />
        </div>
        <nav className="sov-quick-nav" aria-label={hero.quickNavLabel}>
          <div className="sov-quick-layout">
            <div className="sov-quick-grid">
              {startingPoints.map(([label, title, copy, href], index) => { const Icon = startingIcons[index]; return (
                <Link href={href} key={label}>
                  <div className="sov-quick-meta">
                    <span>{String(index + 1).padStart(2, "0")} / {label}</span>
                    <Icon aria-hidden="true" />
                  </div>
                  <strong>{title}</strong>
                  <p>{copy}</p>
                  <FiArrowRight className="sov-quick-arrow" aria-hidden="true" />
                </Link>
              );})}
            </div>
          </div>
        </nav>
      </section>

      <section className="sov-section sov-catalog" id="service-catalog">
        <div className="sov-container">
          <div className="sov-heading">
            <div>
              <p className="sov-kicker">{catalog.kicker}</p>
              <h2>{catalog.title}</h2>
            </div>
            <p>{catalog.lead}</p>
          </div>
          <div className="sov-card-grid">
            {serviceCatalog.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <Link className="sov-service-card" href={`/services/${service.slug}`} key={service.slug}>
                  <div className="sov-card-image">
                    <Image src={service.image} alt="" fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw" />
                  </div>
                  <div className="sov-card-body">
                    <div className="sov-card-label"><Icon aria-hidden="true" /> {catalog.service.replace("{number}", String(index + 1).padStart(2, "0"))}</div>
                    <h3>{service.title}</h3>
                    <p>{service.summary}</p>
                    <ul>
                      {service.points.map((point) => <li key={point}><FiCheck aria-hidden="true" />{point}</li>)}
                    </ul>
                    <span className="sov-card-link">{catalog.explore} <FiArrowRight aria-hidden="true" /></span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sov-section sov-compare">
        <div className="sov-container">
          <div className="sov-heading">
            <div><p className="sov-kicker">{comparison.kicker}</p><h2>{comparison.title}</h2></div>
            <p>{comparison.lead}</p>
          </div>
          <div className="sov-table-wrap">
            <table>
              <thead><tr>{comparison.headers.map((header) => <th key={header}>{header}</th>)}</tr></thead>
              <tbody>
                {serviceComparison.map(([slug, title, bestFor, inventory, branding, prepare], index) => {
                  const Icon = serviceIcons[index];
                  return (
                    <tr key={slug}>
                      <th>
                        <Link className="sov-table-service" href={`/services/${slug}`}>
                          <span className="sov-table-icon"><Icon aria-hidden="true" /></span>
                          <span><small>{String(index + 1).padStart(2, "0")}</small><strong>{title}</strong></span>
                          <FiArrowRight aria-hidden="true" />
                        </Link>
                      </th>
                      <td className="sov-table-best">{bestFor}</td>
                      <td><span className="sov-table-chip sov-table-chip-inventory">{inventory}</span></td>
                      <td><span className="sov-table-chip sov-table-chip-branding">{branding}</span></td>
                      <td><span className="sov-table-prepare"><FiClipboard aria-hidden="true" />{prepare}</span></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="sov-section sov-process">
        <div className="sov-container">
          <div className="sov-heading sov-heading-centered">
            <div><p className="sov-kicker">{process.kicker}</p><h2>{process.title}</h2></div>
            <p>{process.lead}</p>
          </div>
          <ol className="sov-process-grid">
            {serviceWorkflow.map(([number, title, copy], index) => {
              const Icon = workflowIcons[index];
              return <li key={number}><div className="sov-step-top"><span>{number}</span><Icon aria-hidden="true" /></div><h3>{title}</h3><p>{copy}</p></li>;
            })}
          </ol>
        </div>
      </section>

      <section className="sov-section sov-proof">
        <div className="sov-container sov-proof-grid">
          <div className="sov-proof-media">
            <Image src="/images/generated/jw-qc-inspection-v3.png" alt={proof.imageAlt} fill sizes="(max-width: 900px) 100vw, 50vw" />
            <div className="sov-proof-badge"><strong>04</strong><span>{proof.badge}</span></div>
          </div>
          <div className="sov-proof-copy">
            <p className="sov-kicker">{proof.kicker}</p>
            <h2>{proof.title}</h2>
            <p className="sov-proof-lead">{proof.lead}</p>
            <div className="sov-proof-list">
              {proofItems.map(([title, copy], index) => {
                const Icon = proofIcons[index];
                return <div key={title}><div className="sov-proof-item-top"><span>{String(index + 1).padStart(2, "0")}</span><Icon aria-hidden="true" /></div><div><h3>{title}</h3><p>{copy}</p></div></div>;
              })}
            </div>
            <Link className="sov-text-link" href="/services/quality-control-inspection">{proof.link} <FiArrowRight aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="sov-section sov-faq">
        <div className="sov-container sov-faq-grid">
          <div><p className="sov-kicker">{faq.kicker}</p><h2>{faq.title}</h2><p>{faq.lead}</p></div>
          <div className="sov-accordion">
            {serviceFaqs.slice(0, 5).map(([question, answer], index) => (
              <details key={question} name="services-overview-faq" open={index === 0}>
                <summary>{question}<span aria-hidden="true"><FiChevronDown /></span></summary><p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="sov-final">
        <div className="sov-container sov-final-inner">
          <div><p className="sov-kicker">{final.kicker}</p><h2>{final.title}</h2><p>{final.lead}</p></div>
          <Link className="sov-button sov-button-light" href="/contact">{final.button} <FiArrowRight aria-hidden="true" /></Link>
        </div>
      </section>
    </main>
  );
}
