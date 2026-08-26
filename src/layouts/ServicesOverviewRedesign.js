import {
  serviceCatalog,
  serviceFaqs,
  serviceWorkflow,
} from "@config/service-catalog";
import { serviceComparison } from "@config/service-conversion-content";
import Image from "next/image";
import Link from "next/link";
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

const startingPoints = [
  ["SOURCE", "Find products & suppliers", "Find, compare and validate products before committing to inventory.", "/services/product-sourcing", FiSearch],
  ["FULFILL", "Ship orders reliably", "Connect order handling, packing and global delivery in one workflow.", "/services/dropshipping-supplier", FiTruck],
  ["SCALE", "Scale your inventory", "Receive bulk stock, organize SKUs and fulfill from a China warehouse.", "/services/3pl-fulfillment-services", FiPackage],
  ["BRAND", "Build your brand", "Coordinate labels, packaging, inserts and repeat production.", "/services/private-label", FiClipboard],
];

const proofItems = [
  ["Receiving records", "Inbound quantities and visible discrepancies are recorded before stock is accepted."],
  ["Agreed QC checkpoints", "Products, variants, labels and packaging are checked against the approved scope."],
  ["Order-level handling", "Picking, packing and dispatch follow one documented workflow for each store."],
  ["Tracked handoff", "Shipment status and tracking are returned through the agreed operating routine."],
];

export default function ServicesOverviewRedesign() {
  return (
    <main className="sov-page">
      <section className="sov-hero">
        <div className="sov-hero-copy">
          <p className="sov-kicker">CHINA SOURCING &amp; FULFILLMENT SERVICES</p>
          <h1>One China team for sourcing, QC and global fulfillment.</h1>
          <p className="sov-hero-lead">
            Choose the support your store needs today, then connect sourcing, inspection, packaging,
            warehousing and worldwide shipping as your operation grows.
          </p>
          <div className="sov-actions">
            <Link className="sov-button sov-button-primary" href="/contact">
              Get a Free Quote <FiArrowRight aria-hidden="true" />
            </Link>
            <a className="sov-button sov-button-secondary" href="#service-catalog">
              Explore Services
            </a>
          </div>
          <ul className="sov-hero-points" aria-label="Service benefits">
            <li><FiCheck aria-hidden="true" /> Human account support</li>
            <li><FiCheck aria-hidden="true" /> Clear service scope</li>
            <li><FiCheck aria-hidden="true" /> QC before dispatch</li>
          </ul>
        </div>
        <div className="sov-hero-media">
          <Image
            src="/images/generated/jw-receiving-team-v3.png"
            alt="JW fulfillment team receiving inventory in a China warehouse"
            fill
            priority
            sizes="(max-width: 767px) 100vw, 52vw"
          />
        </div>
        <nav className="sov-quick-nav" aria-label="Choose a service by business goal">
          <div className="sov-quick-layout">
            <div className="sov-quick-grid">
              {startingPoints.map(([label, title, copy, href, Icon], index) => (
                <Link href={href} key={label}>
                  <div className="sov-quick-meta">
                    <span>{String(index + 1).padStart(2, "0")} / {label}</span>
                    <Icon aria-hidden="true" />
                  </div>
                  <strong>{title}</strong>
                  <p>{copy}</p>
                  <FiArrowRight className="sov-quick-arrow" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </section>

      <section className="sov-section sov-catalog" id="service-catalog">
        <div className="sov-container">
          <div className="sov-heading">
            <div>
              <p className="sov-kicker">SERVICES BUILT TO WORK TOGETHER</p>
              <h2>Start with the bottleneck in your operation.</h2>
            </div>
            <p>Use one focused service or combine them into a connected China fulfillment workflow.</p>
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
                    <div className="sov-card-label"><Icon aria-hidden="true" /> SERVICE {String(index + 1).padStart(2, "0")}</div>
                    <h3>{service.title}</h3>
                    <p>{service.summary}</p>
                    <ul>
                      {service.points.map((point) => <li key={point}><FiCheck aria-hidden="true" />{point}</li>)}
                    </ul>
                    <span className="sov-card-link">Explore service <FiArrowRight aria-hidden="true" /></span>
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
            <div><p className="sov-kicker">CHOOSE THE RIGHT STARTING POINT</p><h2>Compare service scope at a glance.</h2></div>
            <p>Each service solves a different operating need. Your quote can combine more than one.</p>
          </div>
          <div className="sov-table-wrap">
            <table>
              <thead><tr><th>Service</th><th>Best for</th><th>Inventory</th><th>Branding</th><th>What to prepare</th></tr></thead>
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
            <div><p className="sov-kicker">ONE OPERATING WORKFLOW</p><h2>How our services connect.</h2></div>
            <p>Every project starts with a defined scope and moves through five visible stages.</p>
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
            <Image src="/images/generated/jw-qc-inspection-v3.png" alt="JW team inspecting products before fulfillment" fill sizes="(max-width: 900px) 100vw, 50vw" />
            <div className="sov-proof-badge"><strong>04</strong><span>visible operational<br />checkpoints</span></div>
          </div>
          <div className="sov-proof-copy">
            <p className="sov-kicker">PROOF BEFORE PROMISES</p>
            <h2>Operational checks you can build into the service.</h2>
            <p className="sov-proof-lead">A dependable workflow is defined by its checkpoints, records and handoffs, not decorative claims.</p>
            <div className="sov-proof-list">
              {proofItems.map(([title, copy], index) => {
                const Icon = proofIcons[index];
                return <div key={title}><div className="sov-proof-item-top"><span>{String(index + 1).padStart(2, "0")}</span><Icon aria-hidden="true" /></div><div><h3>{title}</h3><p>{copy}</p></div></div>;
              })}
            </div>
            <Link className="sov-text-link" href="/services/quality-control-inspection">Explore Quality Control <FiArrowRight aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="sov-section sov-faq">
        <div className="sov-container sov-faq-grid">
          <div><p className="sov-kicker">FREQUENTLY ASKED QUESTIONS</p><h2>What to know before you start</h2><p>Quick answers about service scope, suppliers, order volume, quality checks and branded packaging.</p></div>
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
          <div><p className="sov-kicker">START WITH YOUR CURRENT BOTTLENECK</p><h2>See whether JW fits your operation.</h2><p>Share a product link, destination markets and what is slowing your team down. We will recommend a practical next step.</p></div>
          <Link className="sov-button sov-button-light" href="/contact">Get a Free Quote <FiArrowRight aria-hidden="true" /></Link>
        </div>
      </section>
    </main>
  );
}
