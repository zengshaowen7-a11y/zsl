import {
  serviceCatalog,
  serviceFaqs,
  serviceWorkflow,
  supportedPlatforms,
} from "@config/service-catalog";
import { serviceComparison } from "@config/service-conversion-content";
import Image from "next/image";
import Link from "next/link";
import {
  FiAlertCircle,
  FiArrowRight,
  FiBox,
  FiCheck,
  FiClipboard,
  FiGlobe,
  FiLink,
  FiMessageCircle,
  FiPackage,
  FiPrinter,
  FiRefreshCw,
  FiSearch,
  FiShield,
  FiShoppingBag,
  FiTag,
  FiUsers,
} from "react-icons/fi";

const icons = {
  search: FiSearch,
  tag: FiTag,
  shield: FiShield,
  package: FiPackage,
  box: FiBox,
  printer: FiPrinter,
  shopping: FiShoppingBag,
  refresh: FiRefreshCw,
};

const trustProofs = [
  {
    icon: FiClipboard,
    title: "Approved service scope",
    text: "A written checklist clarifies sourcing, inspection, packing and shipping responsibilities before launch.",
    proof: "Scope checklist",
  },
  {
    icon: FiShield,
    title: "Quality-check evidence",
    text: "Agreed checkpoints and issue photos give your team useful context before an affected order continues.",
    proof: "Inspection record",
  },
  {
    icon: FiPackage,
    title: "Packing standard",
    text: "SKU, label, insert and parcel-protection rules create a repeatable reference for daily fulfillment.",
    proof: "Packing instruction",
  },
  {
    icon: FiGlobe,
    title: "Shipping visibility",
    text: "The selected route, carrier handoff and available tracking details remain connected to the customer order.",
    proof: "Tracking handoff",
  },
];

export default function FulfillmentServicesPage() {
  return (
    <main className="ff-site fsp-page">
      <section className="fsp-hero">
        <div className="fsp-orbit" />
        <div className="container fsp-hero-grid">
          <div className="fsp-hero-copy">
            <span className="ff-kicker ff-kicker-light">ALL-IN-ONE FULFILLMENT SERVICES</span>
            <h1>
              <span>From product sourcing to</span>
              <span>worldwide delivery, one team</span>
              <span>keeps every order moving.</span>
            </h1>
            <p>
              Build a flexible fulfillment operation around the needs of your store. We coordinate supplier communication, product inspection, inventory, branded packing, order processing, and tracked delivery—giving your team a clearer path from purchase order to customer doorstep.
            </p>
            <div className="ff-actions">
              <Link className="ff-btn ff-btn-primary" href="/contact">Get a free quote<FiArrowRight /></Link>
              <a className="ff-btn ff-btn-outline" href="#our-services">Explore our services</a>
            </div>
            <div className="fsp-hero-proofs">
              <span><FiUsers />Human support</span>
              <span><FiClipboard />Clear service scope</span>
              <span><FiShield />Agreed QC checkpoints</span>
            </div>
          </div>

          <div className="fsp-hero-visual">
            <div className="fsp-ops-map" aria-hidden="true">
              <span className="fsp-ops-hub"><FiPackage /></span>
              <span className="fsp-ops-node fsp-ops-node-source"><FiSearch /><small>Source</small></span>
              <span className="fsp-ops-node fsp-ops-node-qc"><FiShield /><small>Inspect</small></span>
              <span className="fsp-ops-node fsp-ops-node-pack"><FiBox /><small>Pack</small></span>
              <span className="fsp-ops-node fsp-ops-node-ship"><FiGlobe /><small>Deliver</small></span>
              <i className="fsp-ops-route fsp-ops-route-one" /><i className="fsp-ops-route fsp-ops-route-two" /><i className="fsp-ops-route fsp-ops-route-three" />
            </div>
            <div className="fsp-visual-label"><FiGlobe /><span><strong>Worldwide delivery</strong><small>Route selected per order</small></span></div>
            <div className="fsp-flow-card">
              <small>ONE PARTNER · COMPLETE ORDER JOURNEY</small>
              <div><span>Source</span><FiArrowRight /><span>Inspect</span><FiArrowRight /><span>Pack</span><FiArrowRight /><span>Deliver</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="fsp-promise-bar">
        <div className="container">
          <span><FiCheck />Flexible starting scope</span>
          <span><FiCheck />Factory and warehouse coordination</span>
          <span><FiCheck />Brand-ready packing options</span>
          <span><FiCheck />Tracking workflow planning</span>
        </div>
      </section>

      <section className="ff-section fsp-catalog" id="our-services">
        <div className="container">
          <div className="ff-heading ff-heading-split ff-heading-dark">
            <div><span className="ff-kicker ff-kicker-light">OUR SERVICES</span><h2>Scale with fewer handoffs and a clearer workflow.</h2></div>
            <p>Choose a focused service or combine the full journey under one accountable operating team.</p>
          </div>
          <div className="fsp-service-grid">
            {serviceCatalog.map((service, index) => {
              const Icon = icons[service.icon];
              return (
                <article className="fsp-service-card" id={service.id} key={service.id}>
                  <div className="fsp-card-media">
                    <Image src={service.image} alt={`${service.title} workflow illustration`} fill sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 25vw" />
                    <span><Icon /></span>
                  </div>
                  <div className="fsp-card-body">
                    <small>0{index + 1}</small>
                    <h3>{service.title}</h3>
                    <p>{service.summary}</p>
                    <ul>{service.points.map((point) => <li key={point}><FiCheck />{point}</li>)}</ul>
                    <Link href={`/services/${service.slug}`}>Explore service<FiArrowRight /></Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="ff-section fsp-comparison" id="service-comparison">
        <div className="container">
          <div className="ff-heading ff-heading-split">
            <div><span className="ff-kicker">SERVICE COMPARISON</span><h2>Choose the service that matches your current operating gap.</h2></div>
            <p>Start with one focused service or combine several into an end-to-end sourcing and fulfillment workflow.</p>
          </div>
          <div className="fsp-comparison-wrap">
            <table>
              <thead><tr><th>Service</th><th>Best suited for</th><th>Inventory model</th><th>Branding</th><th>Best starting information</th><th><span className="sr-only">Explore</span></th></tr></thead>
              <tbody>
                {serviceComparison.map(([slug, title, bestFor, inventory, branding, startingPoint]) => (
                  <tr key={slug}>
                    <th scope="row"><Link href={`/services/${slug}`}>{title}</Link></th>
                    <td>{bestFor}</td>
                    <td><span className="fsp-comparison-chip">{inventory}</span></td>
                    <td>{branding}</td>
                    <td>{startingPoint}</td>
                    <td><Link className="fsp-comparison-arrow" aria-label={`Explore ${title}`} href={`/services/${slug}`}><FiArrowRight /></Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="fsp-comparison-help"><FiMessageCircle /><div><strong>Not sure where to start?</strong><p>Send a product link, your current order volume and the problem you want to solve. We will recommend the smallest practical starting scope.</p></div><Link href="/contact">Ask for a recommendation<FiArrowRight /></Link></div>
        </div>
      </section>

      <section className="ff-section fsp-trust">
        <div className="container">
          <div className="ff-heading ff-heading-split">
            <div><span className="ff-kicker">PROOF BEFORE PROMISES</span><h2>Trust should come from visible operating evidence.</h2></div>
            <p>Before order volume grows, your team should know what will be checked, how exceptions are reported and which records can support each handoff.</p>
          </div>
          <div className="fsp-trust-grid">
            <div className="fsp-trust-visual">
              <div className="fsp-proof-visual" aria-hidden="true"><span><FiClipboard /></span><i /><i /><i /><b><FiCheck /></b></div>
              <div>
                <small>WHAT YOUR TEAM CAN VERIFY</small>
                <strong>Clear scope, documented checks and order-level visibility.</strong>
                <span><FiCheck />Workflow imagery shown for service illustration</span>
              </div>
            </div>
            <div className="fsp-proof-grid">
              {trustProofs.map(({ icon: Icon, title, text, proof }, index) => (
                <article key={title}>
                  <div><span><Icon /></span><small>0{index + 1}</small></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <strong><FiCheck />{proof}</strong>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ff-section fsp-assurance">
        <div className="container fsp-assurance-grid">
          <div>
            <span className="ff-kicker">CLEAR UPDATES · FEWER SURPRISES</span>
            <h2>Catch operational issues before they become customer issues.</h2>
            <p>When a supplier, product or shipment needs attention, the useful response is context, evidence and a clear next decision—not another unexplained delay.</p>
            <Link className="ff-btn ff-btn-dark" href="/contact">Plan your workflow<FiArrowRight /></Link>
          </div>
          <div className="fsp-issue-panel">
            <div><FiAlertCircle /><span><small>ISSUE DETECTED</small><strong>Packaging does not match the approved sample</strong></span></div>
            <ol>
              <li><span>1</span>Pause the affected batch</li>
              <li><span>2</span>Share photos and product context</li>
              <li><span>3</span>Confirm rework, replacement or approval</li>
            </ol>
            <p><FiCheck />Action recorded before fulfillment continues</p>
          </div>
        </div>
      </section>

      <section className="ff-section fsp-features">
        <div className="container">
          <article className="fsp-feature">
            <div className="fsp-feature-media fsp-support-media fsp-feature-art"><div aria-hidden="true"><FiUsers /><span /><span /><span /></div><span><FiMessageCircle />Operations support</span></div>
            <div><span className="ff-kicker">HUMAN SUPPORT</span><h2>Work with people who understand the complete order journey.</h2><p>A consistent operating contact helps connect supplier conversations, warehouse actions, packaging requirements and shipping decisions.</p><ul><li><FiCheck />One clear point of coordination</li><li><FiCheck />English communication for overseas teams</li><li><FiCheck />Product and order context kept together</li></ul></div>
          </article>
          <article className="fsp-feature fsp-feature-reverse">
            <div className="fsp-feature-media fsp-feature-art fsp-feature-art-qc"><div aria-hidden="true"><FiShield /><span /><span /><span /></div><span><FiShield />Quality checkpoints</span></div>
            <div><span className="ff-kicker">QUALITY CONTROL</span><h2>Define what must be checked before products leave China.</h2><p>Inspection is most useful when the scope is specific. We agree the relevant checks for your product, packaging and customer promise before daily operations begin.</p><ul><li><FiCheck />Quantity, variant and appearance review</li><li><FiCheck />Packaging and order accuracy checks</li><li><FiCheck />Photo evidence when an issue needs a decision</li></ul></div>
          </article>
        </div>
      </section>

      <section className="fsp-platforms">
        <div className="container">
          <span><FiLink />WORKS WITH YOUR ECOMMERCE WORKFLOW</span>
          <div>{supportedPlatforms.map((platform) => <strong key={platform}>{platform}</strong>)}</div>
        </div>
      </section>

      <section className="ff-section fsp-workflow">
        <div className="container">
          <div className="ff-heading ff-heading-centered"><span className="ff-kicker">HOW WE WORK</span><h2>From the first product link to repeatable daily fulfillment.</h2><p>Each stage has a clear decision, owner and handoff.</p></div>
          <div className="fsp-workflow-grid">{serviceWorkflow.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="ff-section fsp-faq">
        <div className="container ff-faq-grid">
          <div className="ff-faq-intro"><span className="ff-kicker">SERVICE FAQ</span><h2>Questions before you get started?</h2><p>Share your product and destination details for a service recommendation built around your actual order flow.</p><Link className="ff-btn ff-btn-dark" href="/contact">Request a free quote<FiArrowRight /></Link></div>
          <div className="ff-faq-list">{serviceFaqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
        </div>
      </section>

      <section className="fsp-final-cta">
        <div className="container"><div><span>READY TO BUILD A CLEARER SUPPLY CHAIN?</span><h2>Tell us what you want to source, pack and ship.</h2></div><Link className="ff-btn ff-btn-primary" href="/contact">Start with a product link<FiArrowRight /></Link></div>
      </section>
    </main>
  );
}
