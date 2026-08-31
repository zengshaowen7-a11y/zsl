import { getServiceCatalog } from "@config/service-catalog";
import { getServiceComparison } from "@config/service-conversion-content";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import ServicesHeroEntrance from "./components/ServicesHeroEntrance";
import ServicesWorkflow from "./components/ServicesWorkflow";
import {
  FiArrowRight,
  FiCheck,
  FiClipboard,
  FiChevronDown,
  FiPackage,
  FiSearch,
  FiShield,
  FiTruck,
} from "react-icons/fi";

const serviceIcons = [FiPackage, FiTruck, FiClipboard, FiPackage, FiSearch, FiArrowRight, FiTruck, FiShield];
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
      <section
        className="sov-hero sov-launch"
        aria-labelledby="services-hero-title"
      >
        <ServicesHeroEntrance key={locale}>
          <div className="sov-launch-copy">
            <p className="sov-launch-kicker" data-services-reveal="up">
              {hero.kicker}
            </p>
            <h1
              id="services-hero-title"
              data-services-reveal="up"
              style={{ "--services-delay": "80ms" }}
            >
              {hero.title}
            </h1>
            <p
              className="sov-launch-lead"
              data-services-reveal="up"
              style={{ "--services-delay": "160ms" }}
            >
              {hero.lead}
            </p>
            <div
              className="sov-launch-actions"
              data-services-reveal="up"
              style={{ "--services-delay": "240ms" }}
            >
              <Link className="sov-launch-primary" href="/contact">
                <span>{hero.primary}</span> <FiArrowRight aria-hidden="true" />
              </Link>
              <a className="sov-launch-secondary" href="#service-catalog">
                {hero.secondary} <FiArrowRight aria-hidden="true" />
              </a>
            </div>
            <ul
              className="sov-launch-benefits"
              aria-label={hero.benefitsLabel}
              data-services-reveal="up"
              style={{ "--services-delay": "320ms" }}
            >
              {hero.benefits.map((item) => (
                <li key={item}>
                  <FiCheck aria-hidden="true" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <nav
            className="sov-launch-board"
            aria-labelledby="services-goal-label"
          >
            <p
              id="services-goal-label"
              className="sov-launch-board-label"
              data-services-reveal="right"
            >
              {hero.quickNavLabel}
            </p>
            <ul className="sov-launch-options">
              {startingPoints.map(([label, title, copy, href], index) => {
                const Icon = startingIcons[index];
                return (
                  <li
                    key={href}
                    data-services-reveal="right"
                    style={{ "--services-delay": `${120 + index * 110}ms` }}
                  >
                    <Link href={href} className="sov-launch-option">
                      <span className="sov-launch-icon">
                        <Icon aria-hidden="true" />
                      </span>
                      <span className="sov-launch-option-copy">
                        <span className="sov-launch-category">{label}</span>
                        <strong>{title}</strong>
                        <span className="sov-launch-description">{copy}</span>
                      </span>
                      <span className="sov-launch-arrow">
                        <FiArrowRight aria-hidden="true" />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </ServicesHeroEntrance>
        <div className="sov-hero-media">
          <Image
            src="/images/generated/jw-receiving-team-v3.png"
            alt={hero.imageAlt}
            fill
            priority
            sizes="100vw"
          />
        </div>
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

      <section className="sov-section sov-process sov-workflow-section" id="service-workflow" aria-labelledby="service-workflow-title">
        <div className="sov-container">
          <div className="sov-workflow-heading">
            <p className="sov-workflow-kicker">{process.kicker}</p>
            <h2 id="service-workflow-title">{process.title}</h2>
            <p>{process.lead}</p>
          </div>
          <ServicesWorkflow key={locale} steps={serviceWorkflow} locale={locale} />
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
