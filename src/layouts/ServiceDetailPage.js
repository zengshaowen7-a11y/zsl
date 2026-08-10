import { servicePages } from "@config/service-page-content";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiCheck,
  FiClipboard,
  FiGlobe,
  FiMessageCircle,
  FiPackage,
  FiSearch,
  FiShield,
} from "react-icons/fi";

const capabilityIcons = [FiSearch, FiShield, FiPackage, FiClipboard, FiGlobe, FiMessageCircle];

function ServiceQuoteForm({ service }) {
  return (
    <form
      className="sdp-form"
      name="fulfillment-quote"
      method="POST"
      action="/thank-you"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="fulfillment-quote" />
      <input type="hidden" name="service" value={service.menuTitle} />
      <h2>Request a Free Quote</h2>
      <p>Tell us about your product and current order flow.</p>
      <div className="sdp-form-row">
        <label>Full name *<input name="name" type="text" required /></label>
        <label>Work email *<input name="email" type="email" required /></label>
      </div>
      <div className="sdp-form-row">
        <label>WhatsApp / Phone *<input name="phone" type="text" required /></label>
        <label>Store URL<input name="store" type="url" /></label>
      </div>
      <label>Daily order volume
        <select name="volume" defaultValue="">
          <option value="" disabled>Select a range</option>
          <option>Testing / pre-launch</option>
          <option>1–10 orders</option>
          <option>11–50 orders</option>
          <option>51–200 orders</option>
          <option>200+ orders</option>
        </select>
      </label>
      <label>Tell us about your business *
        <textarea name="message" rows="4" required placeholder="Products, destination markets, current challenges and what you need help with." />
      </label>
      <button className="ff-btn ff-btn-primary" type="submit">Submit enquiry<FiArrowRight /></button>
      <small>We will use these details only to respond to your enquiry.</small>
    </form>
  );
}

export default function ServiceDetailPage({ service }) {
  const related = servicePages.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <main className="ff-site sdp-page">
      <section className="sdp-hero">
        <Image src={service.image} alt="" fill priority sizes="100vw" />
        <div className="sdp-hero-overlay" />
        <div className="container sdp-hero-grid">
          <article className="sdp-hero-card">
            <span className="ff-kicker">{service.eyebrow}</span>
            <h1>{service.title}</h1>
            <p>{service.lead}</p>
            <ul>{service.heroPoints.map((point) => <li key={point}><FiCheck />{point}</li>)}</ul>
          </article>
          <ServiceQuoteForm service={service} />
        </div>
      </section>

      <section className="sdp-outcomes">
        <div className="container">{service.outcomes.map(([title, text], index) => <article key={title}><small>0{index + 1}</small><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="ff-section sdp-problem">
        <div className="container sdp-problem-grid">
          <div><span className="ff-kicker">A CLEARER OPERATING MODEL</span><h2>{service.problemTitle}</h2><p>{service.problemLead}</p><Link className="ff-btn ff-btn-dark" href="/#quote">Discuss your requirements<FiArrowRight /></Link></div>
          <div className="sdp-problem-visual"><Image src="/images/fulfillment/shipping.jpg" alt="International fulfillment and shipping" fill sizes="(max-width: 900px) 100vw, 50vw" /><div><FiPackage /><span><strong>Factory</strong><small>Product ready</small></span><FiArrowRight /><span><strong>FlowBridge</strong><small>Check and fulfill</small></span><FiArrowRight /><span><strong>Customer</strong><small>Tracked delivery</small></span></div></div>
        </div>
      </section>

      <section className="ff-section sdp-capabilities">
        <div className="container">
          <div className="ff-heading ff-heading-split ff-heading-dark"><div><span className="ff-kicker ff-kicker-light">WHAT WE HANDLE</span><h2>{service.capabilitiesTitle}</h2></div><p>Build a focused scope or combine these capabilities into an end-to-end service.</p></div>
          <div className="sdp-capability-grid">{service.capabilities.map(([title, text], index) => { const Icon = capabilityIcons[index]; return <article key={title}><span><Icon /></span><h3>{title}</h3><p>{text}</p></article>; })}</div>
        </div>
      </section>

      <section className="ff-section sdp-process">
        <div className="container">
          <div className="ff-heading ff-heading-centered"><span className="ff-kicker">HOW IT WORKS</span><h2>A practical four-step path to launch the service.</h2></div>
          <div className="sdp-process-grid">{service.process.map(([number, title, text]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
        </div>
      </section>

      <section className={`ff-section sdp-spotlight sdp-spotlight-${service.spotlight.style}`}>
        <div className="container">
          <div className="ff-heading ff-heading-split">
            <div><span className="ff-kicker">{service.spotlight.eyebrow}</span><h2>{service.spotlight.title}</h2></div>
            <p>{service.spotlight.lead}</p>
          </div>
          <div className="sdp-spotlight-grid">
            {service.spotlight.items.map(([title, text], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ff-section sdp-feature">
        <div className="container sdp-feature-grid">
          <div className="sdp-feature-image"><Image src="/images/fulfillment/packing-team.jpg" alt="Fulfillment quality check" fill sizes="(max-width: 900px) 100vw, 50vw" /><span><FiShield />Human-led quality checkpoints</span></div>
          <div><span className="ff-kicker">BUILT FOR DAILY OPERATIONS</span><h2>{service.featureTitle}</h2><p>{service.featureLead}</p><ul>{service.featurePoints.map((point) => <li key={point}><FiCheck />{point}</li>)}</ul><Link className="ff-btn ff-btn-dark" href="/#quote">Build your service plan<FiArrowRight /></Link></div>
        </div>
      </section>

      <section className="sdp-platforms">
        <div className="container"><span><FiGlobe />WORKS WITH YOUR ECOMMERCE WORKFLOW</span><div>{service.platforms.map((platform) => <strong key={platform}>{platform}</strong>)}</div></div>
      </section>

      <section className="ff-section sdp-faq">
        <div className="container ff-faq-grid">
          <div className="ff-faq-intro"><span className="ff-kicker">SERVICE FAQ</span><h2>Questions about {service.menuTitle}?</h2><p>The exact operating scope depends on your product, markets, volume and customer promise.</p><Link className="ff-btn ff-btn-dark" href="/#quote">Ask our team<FiArrowRight /></Link></div>
          <div className="ff-faq-list">{service.faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
        </div>
      </section>

      <section className="ff-section sdp-related">
        <div className="container"><div className="ff-heading ff-heading-split"><div><span className="ff-kicker">RELATED SERVICES</span><h2>Connect the rest of the order journey.</h2></div><Link href="/services">View all services<FiArrowRight /></Link></div><div className="sdp-related-grid">{related.map((item) => <Link href={`/services/${item.slug}`} key={item.slug}><span>{item.eyebrow}</span><h3>{item.menuTitle}</h3><p>{item.lead}</p><strong>Explore service<FiArrowRight /></strong></Link>)}</div></div>
      </section>

      <section className="sdp-final-cta"><div className="container"><div><span>START WITH YOUR CURRENT PRODUCT OR STORE</span><h2>Build a service scope around the way you actually sell.</h2></div><Link className="ff-btn ff-btn-primary" href="/#quote">Get a free quote<FiArrowRight /></Link></div></section>
    </main>
  );
}
