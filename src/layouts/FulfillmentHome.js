import { getFulfillmentCopy } from "@config/fulfillment-content";
import { serviceCatalog } from "@config/service-catalog";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiClipboard,
  FiGlobe,
  FiPackage,
  FiPrinter,
  FiRefreshCw,
  FiSearch,
  FiShield,
  FiTag,
  FiUsers,
} from "react-icons/fi";

const serviceIcons = {
  search: FiSearch,
  shield: FiShield,
  box: FiBox,
  package: FiPackage,
  printer: FiPrinter,
  refresh: FiRefreshCw,
  tag: FiTag,
};

export default function FulfillmentHome({ lang = "en" }) {
  const { home: c } = getFulfillmentCopy(lang);
  const isZh = lang === "zh";
  const operatingProofs = c.operatingProofs || [["8", "focused fulfillment services"], ["1", "accountable operating workflow"], ["3", "documented control stages"], ["Order-level", "tracking handoff"]];
  const evidenceItems = c.evidenceItems || [["01", "Approved service scope", "Responsibilities are confirmed before launch."], ["02", "Quality-check evidence", "Agreed checkpoints provide context before an order continues."], ["03", "Order handoff visibility", "SKU, packing and tracking details follow the order workflow."]];

  return (
    <main className="ff-site fh-home">
      <section className="ff-hero">
        <div className="ff-hero-glow" />
        <div className="container ff-hero-grid">
          <div className="ff-hero-copy-wrap">
            <span className="ff-kicker ff-kicker-light">{c.eyebrow}</span>
            <h1>{c.title}</h1>
            <p>{c.lead}</p>
            <div className="ff-actions">
              <Link className="ff-btn ff-btn-primary" href="#quote">{c.primary}<FiArrowRight /></Link>
              <Link className="ff-btn ff-btn-ghost" href="#process">{c.secondary}</Link>
            </div>
            <p className="fh-response-note"><FiUsers /> Human review. No obligation. A practical next step for your store.</p>
            <div className="ff-proof-list">
              {c.proofs.map((item) => <span key={item}><FiCheck />{item}</span>)}
            </div>
          </div>

          <div className="ff-hero-visual">
            <Image src="/images/services/china-fulfillment-center.webp" alt="International fulfillment team preparing customer orders" fill priority sizes="(max-width: 1024px) 100vw, 48vw" />
            <div className="ff-hero-shade" />
            <div className="ff-journey-card">
              <small>{c.visualLabel}</small>
              <div>{c.visualSteps.map((step, index) => <span key={step}><b>{index + 1}</b>{step}</span>)}</div>
            </div>
            <div className="ff-floating-badge"><FiGlobe /><span><strong>Worldwide</strong><small>Tracked delivery</small></span></div>
          </div>
        </div>
      </section>

      <section className="ff-platforms">
        <div className="container">
          <p>{c.platformTitle}</p>
          <div>{c.platforms.map((platform) => <span key={platform}>{platform}</span>)}</div>
        </div>
      </section>

      <section className="fh-proof-band" aria-label="JW Dropshipping operating scope">
        <div className="container fh-proof-band-grid">
          {operatingProofs.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
        </div>
      </section>

      <section className="ff-section ff-problem">
        <div className="container">
          <div className="ff-heading ff-heading-split">
            <div><span className="ff-kicker">{c.problemEyebrow}</span><h2>{c.problemTitle}</h2></div>
            <p>{c.problemLead}</p>
          </div>
          <div className="ff-compare-grid">
            <article className="ff-compare-card ff-compare-muted">
              <small>01</small><h3>{c.without.title}</h3>
              <ul>{c.without.items.map((item) => <li key={item}><span>×</span>{item}</li>)}</ul>
            </article>
            <article className="ff-compare-card ff-compare-accent">
              <small>02</small><h3>{c.with.title}</h3>
              <ul>{c.with.items.map((item) => <li key={item}><FiCheck />{item}</li>)}</ul>
            </article>
          </div>
        </div>
      </section>

      <section id="process" className="ff-section ff-process">
        <div className="container">
          <div className="ff-heading ff-heading-dark">
            <span className="ff-kicker ff-kicker-light">{c.processEyebrow}</span>
            <h2>{c.processTitle}</h2><p>{c.processLead}</p>
          </div>
          <div className="ff-process-list">
            {c.steps.map(([number, title, text]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><FiArrowRight /></article>)}
          </div>
        </div>
      </section>

      <section id="services" className="ff-section ff-services">
        <div className="container">
          <div className="ff-heading ff-heading-centered">
            <span className="ff-kicker">{c.servicesEyebrow}</span><h2>{c.servicesTitle}</h2><p>{c.servicesLead}</p>
          </div>
          <div className="fh-service-grid">
            {serviceCatalog.map((service, index) => {
              const Icon = serviceIcons[service.icon] || FiPackage;
              return (
                <article className="fh-service-card" key={service.slug}>
                  <Link className="fh-service-image" href={`/services/${service.slug}`} aria-label={`Explore ${service.title}`}>
                    <Image src={service.image} alt={`${service.title} service`} fill sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 25vw" />
                    <span><Icon /></span>
                  </Link>
                  <div className="fh-service-body">
                    <small>{String(index + 1).padStart(2, "0")}</small><h3>{service.title}</h3><p>{service.summary}</p>
                    <ul>{service.points.map((point) => <li key={point}><FiCheck />{point}</li>)}</ul>
                    <Link href={`/services/${service.slug}`}>Explore service<FiArrowRight /></Link>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="fh-services-cta"><p>Not sure which scope fits your store?</p><Link className="ff-btn ff-btn-dark" href="/services#service-comparison">Compare all services<FiArrowRight /></Link></div>
        </div>
      </section>

      <section className="ff-section ff-quality">
        <div className="container ff-quality-grid">
          <div className="ff-quality-media">
            <Image src="/images/fulfillment/packing-team.jpg" alt="Warehouse staff preparing packaging" fill sizes="(max-width: 1024px) 100vw, 50vw" />
            <div className="ff-quality-tag"><FiShield /><span>Quality checkpoint</span></div>
          </div>
          <div className="ff-quality-copy">
            <span className="ff-kicker">{c.qcEyebrow}</span><h2>{c.qcTitle}</h2><p>{c.qcLead}</p>
            <ul>{c.qcChecks.map((item) => <li key={item}><FiCheck />{item}</li>)}</ul>
            <Link className="ff-text-link" href="#quote">Discuss your QC requirements<FiArrowRight /></Link>
          </div>
        </div>
      </section>

      <section className="ff-section ff-team fh-evidence">
        <div className="container">
          <div className="ff-heading ff-heading-split ff-heading-dark">
            <div><span className="ff-kicker ff-kicker-light">{c.teamEyebrow}</span><h2>{c.teamTitle}</h2></div><p>{c.teamLead}</p>
          </div>
          <div className="fh-evidence-grid">
            <article className="fh-evidence-media">
              <Image src="/images/services/quality-control-inspection.webp" alt="Fulfillment team documenting a quality inspection" fill sizes="(max-width: 900px) 100vw, 55vw" />
              <span><FiShield /> Documented quality checkpoints</span>
            </article>
            <div className="fh-evidence-list">
              {evidenceItems.map(([number, title, text]) => <article key={number}><small>{number}</small><div><h3>{title}</h3><p>{text}</p></div></article>)}
              <Link className="ff-text-link" href="/services#service-comparison">See the complete service scope<FiArrowRight /></Link>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="ff-section ff-faq">
        <div className="container ff-faq-grid">
          <div className="ff-faq-intro"><span className="ff-kicker">{c.faqEyebrow}</span><h2>{c.faqTitle}</h2><p>The practical questions most independent sellers ask before getting started.</p><Link className="ff-btn ff-btn-dark" href="#quote">{c.primary}<FiArrowRight /></Link></div>
          <div className="ff-faq-list">{c.faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
        </div>
      </section>

      <section id="quote" className="ff-section ff-quote">
        <div className="container ff-quote-grid">
          <div className="ff-quote-copy"><span className="ff-kicker ff-kicker-light">{c.quoteEyebrow}</span><h2>{c.quoteTitle}</h2><p>{c.quoteLead}</p><div><span><FiSearch />Product and supplier review</span><span><FiClipboard />Clear next-step recommendation</span><span><FiUsers />Human follow-up</span></div></div>
          <form className="ff-form" name="fulfillment-quote" method="POST" action={isZh ? "/zh/thank-you" : "/thank-you"} data-netlify="true" data-netlify-honeypot="company-website">
            <input type="hidden" name="form-name" value="fulfillment-quote" /><input type="hidden" name="language" value={lang} />
            <p className="fh-honeypot"><label>Do not fill this out<input name="company-website" /></label></p>
            <div className="ff-form-row"><label>{c.form.name}<input name="name" autoComplete="name" placeholder="Your name" required /></label><label>{c.form.email}<input name="email" type="email" autoComplete="email" placeholder="name@company.com" required /></label></div>
            <div className="ff-form-row"><label>{c.form.phone}<input name="phone" autoComplete="tel" placeholder="WhatsApp or phone number" required /></label><label>{c.form.store}<input name="store" type="url" placeholder="https://" /></label></div>
            <label>{c.form.product}<input name="product-url" type="url" placeholder="https://" /></label>
            <div className="ff-form-row"><label>{c.form.volume}<select name="volume" defaultValue=""><option value="" disabled>Select a range</option><option>0–10</option><option>11–50</option><option>51–200</option><option>201–500</option><option>500+</option></select></label><label>{c.form.market}<select name="market" defaultValue=""><option value="" disabled>Select a market</option><option>United States</option><option>European Union</option><option>United Kingdom</option><option>Australia / New Zealand</option><option>Worldwide</option><option>Other</option></select></label></div>
            <label>{c.form.message}<textarea name="message" rows="4" placeholder="Products, destination markets, current challenges and the support you need." /></label>
            <button className="ff-btn ff-btn-primary" type="submit">{c.form.submit}<FiArrowRight /></button><small>{c.form.consent}</small>
          </form>
        </div>
      </section>
    </main>
  );
}
