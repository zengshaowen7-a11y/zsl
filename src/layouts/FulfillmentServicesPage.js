import {
  serviceCatalog,
  serviceFaqs,
  serviceWorkflow,
  supportedPlatforms,
} from "@config/service-catalog";
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

export default function FulfillmentServicesPage() {
  return (
    <main className="ff-site fsp-page">
      <section className="fsp-hero">
        <div className="fsp-orbit" />
        <div className="container fsp-hero-grid">
          <div className="fsp-hero-copy">
            <span className="ff-kicker ff-kicker-light">ALL-IN-ONE FULFILLMENT SERVICES</span>
            <h1>Source, brand and ship with one team in China.</h1>
            <p>
              Build the exact operating scope your store needs—from factory search and quality control to branded packing and worldwide delivery.
            </p>
            <div className="ff-actions">
              <Link className="ff-btn ff-btn-primary" href="/#quote">Get a free quote<FiArrowRight /></Link>
              <a className="ff-btn ff-btn-outline" href="#our-services">Explore our services</a>
            </div>
            <div className="fsp-hero-proofs">
              <span><FiUsers />Human support</span>
              <span><FiClipboard />Clear service scope</span>
              <span><FiShield />Agreed QC checkpoints</span>
            </div>
          </div>

          <div className="fsp-hero-visual">
            <Image
              src="/images/fulfillment/packing-team.jpg"
              alt="Fulfillment team preparing customer orders"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 48vw"
            />
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
                    <Image src={service.image} alt="" fill sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 25vw" />
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

      <section className="ff-section fsp-assurance">
        <div className="container fsp-assurance-grid">
          <div>
            <span className="ff-kicker">CLEAR UPDATES · FEWER SURPRISES</span>
            <h2>Catch operational issues before they become customer issues.</h2>
            <p>When a supplier, product or shipment needs attention, the useful response is context, evidence and a clear next decision—not another unexplained delay.</p>
            <Link className="ff-btn ff-btn-dark" href="/#quote">Plan your workflow<FiArrowRight /></Link>
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
            <div className="fsp-feature-media fsp-support-media"><Image src="/images/fulfillment/warehouse.jpg" alt="Warehouse operations" fill sizes="(max-width: 900px) 100vw, 50vw" /><span><FiMessageCircle />Operations support</span></div>
            <div><span className="ff-kicker">HUMAN SUPPORT</span><h2>Work with people who understand the complete order journey.</h2><p>A consistent operating contact helps connect supplier conversations, warehouse actions, packaging requirements and shipping decisions.</p><ul><li><FiCheck />One clear point of coordination</li><li><FiCheck />English communication for overseas teams</li><li><FiCheck />Product and order context kept together</li></ul></div>
          </article>
          <article className="fsp-feature fsp-feature-reverse">
            <div className="fsp-feature-media"><Image src="/images/fulfillment/packing-team.jpg" alt="Quality inspection during fulfillment" fill sizes="(max-width: 900px) 100vw, 50vw" /><span><FiShield />Quality checkpoints</span></div>
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
          <div className="ff-faq-intro"><span className="ff-kicker">SERVICE FAQ</span><h2>Questions before you get started?</h2><p>Share your product and destination details for a service recommendation built around your actual order flow.</p><Link className="ff-btn ff-btn-dark" href="/#quote">Request a free quote<FiArrowRight /></Link></div>
          <div className="ff-faq-list">{serviceFaqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
        </div>
      </section>

      <section className="fsp-final-cta">
        <div className="container"><div><span>READY TO BUILD A CLEARER SUPPLY CHAIN?</span><h2>Tell us what you want to source, pack and ship.</h2></div><Link className="ff-btn ff-btn-primary" href="/#quote">Start with a product link<FiArrowRight /></Link></div>
      </section>
    </main>
  );
}
