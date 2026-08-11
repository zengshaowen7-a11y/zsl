import { getFulfillmentCopy } from "@config/fulfillment-content";
import { homeMaterialPlan } from "@config/home-materials";
import { serviceCatalog } from "@config/service-catalog";
import Link from "next/link";
import { FaAmazon } from "react-icons/fa";
import {
  FiArrowRight,
  FiBox,
  FiCalendar,
  FiCheck,
  FiClipboard,
  FiGlobe,
  FiImage,
  FiPackage,
  FiPrinter,
  FiRefreshCw,
  FiSearch,
  FiShoppingBag,
  FiShield,
  FiTag,
  FiUsers,
  FiVideo,
  FiExternalLink,
} from "react-icons/fi";
import {
  SiBigcommerce,
  SiEbay,
  SiEtsy,
  SiShopify,
  SiSquarespace,
  SiTiktok,
  SiWix,
  SiWoocommerce,
} from "react-icons/si";

const serviceIcons = {
  search: FiSearch,
  shield: FiShield,
  box: FiBox,
  package: FiPackage,
  printer: FiPrinter,
  refresh: FiRefreshCw,
  tag: FiTag,
};

const platformLogos = [
  { name: "Shopify", Icon: SiShopify, color: "#75a943" },
  { name: "WooCommerce", Icon: SiWoocommerce, color: "#96588a" },
  { name: "TikTok Shop", Icon: SiTiktok, color: "#111111" },
  { name: "Amazon", Icon: FaAmazon, color: "#ff9900" },
  { name: "Etsy", Icon: SiEtsy, color: "#f1641e" },
  { name: "eBay", Icon: SiEbay, color: "#e53238" },
  { name: "BigCommerce", Icon: SiBigcommerce, color: "#34313f" },
  { name: "Wix", Icon: SiWix, color: "#0c0c0c" },
  { name: "Squarespace", Icon: SiSquarespace, color: "#111111" },
];

const proofIcons = [FiCalendar, FiPackage, FiShoppingBag, FiGlobe];
const processIcons = [FiClipboard, FiSearch, FiShield, FiPackage, FiGlobe];

function MaterialSlot({ item, kind = "image", className = "" }) {
  const Icon = kind === "video" ? FiVideo : FiImage;
  if (kind === "video" && item.src) {
    return (
      <div className={`fh-material-slot fh-material-video ${className}`.trim()}>
        <video src={item.src} poster={item.poster || undefined} autoPlay muted loop playsInline preload="metadata" aria-label={item.title} />
        <div className="fh-material-video-shade" />
        <div className="fh-material-video-copy"><span><FiVideo />{item.label}</span><strong>{item.title}</strong><small>{item.credit}</small></div>
      </div>
    );
  }
  return (
    <div className={`fh-material-slot ${className}`.trim()}>
      <div className="fh-material-slot-icon"><Icon aria-hidden="true" /></div>
      <span>{item.label}</span>
      <strong>{item.title}</strong>
      <p>{item.brief}</p>
      <small>{item.spec}</small>
    </div>
  );
}

function ExternalLinkSlot({ item }) {
  if (item.url) {
    return <a className="fh-external-link" href={item.url} target="_blank" rel="noreferrer">Open link<FiExternalLink /></a>;
  }
  return <span className="fh-link-needed"><FiExternalLink />Link needed: {item.label}</span>;
}

export default function FulfillmentHome({ lang = "en" }) {
  const { home: c } = getFulfillmentCopy(lang);
  const isZh = lang === "zh";
  const operatingProofs = homeMaterialPlan.proofStats;
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
              <a className="ff-btn ff-btn-primary" href="/contact">{c.primary}<FiArrowRight /></a>
              <a className="ff-btn ff-btn-ghost" href="#process">{c.secondary}</a>
            </div>
            <p className="fh-response-note"><FiUsers /> Human review. No obligation. A practical next step for your store.</p>
            <div className="ff-proof-list">
              {c.proofs.map((item) => <span key={item}><FiCheck />{item}</span>)}
            </div>
          </div>

          <div className="ff-hero-visual fh-hero-media-slot">
            <MaterialSlot item={homeMaterialPlan.media.heroVideo} kind="video" className="fh-material-slot-dark" />
            <div className="ff-journey-card">
              <small>{c.visualLabel}</small>
              <div>{c.visualSteps.map((step, index) => <span key={step}><b>{index + 1}</b>{step}</span>)}</div>
            </div>
            <div className="ff-floating-badge"><FiGlobe /><span><strong>Worldwide</strong><small>Tracked delivery</small></span></div>
            <div className="fh-hero-link-slot"><ExternalLinkSlot item={homeMaterialPlan.links.heroVideo} /></div>
          </div>
        </div>
      </section>

      <section className="ff-platforms">
        <div className="container">
          <p className="fh-platform-heading">{c.platformTitle}</p>
          <div className="fh-platform-marquee" role="region" aria-label="Supported eCommerce platforms">
            <div className="fh-platform-track">
              {[0, 1].map((copyIndex) => (
                <div className="fh-platform-group" key={copyIndex} aria-hidden={copyIndex === 1 ? "true" : undefined}>
                  {platformLogos.map(({ name, Icon, color }) => (
                    <span className="fh-platform-logo" style={{ "--platform-color": color }} key={`${copyIndex}-${name}`}>
                      <Icon aria-hidden="true" />
                      <strong>{name}</strong>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="fh-proof-band" aria-label="JW Dropshipping verified business figures">
        <div className="container fh-proof-band-grid">
          {operatingProofs.map(({ value, label, note }, index) => {
            const ProofIcon = proofIcons[index] || FiCheck;
            return <div className="fh-proof-stat" key={label}><ProofIcon className="fh-proof-icon" aria-hidden="true" /><strong>{value}</strong><span>{label}<small>{note}</small></span></div>;
          })}
        </div>
      </section>

      <section className="ff-section ff-problem fh-problem-section">
        <div className="container">
          <div className="ff-heading ff-heading-split">
            <div><span className="ff-kicker">{c.problemEyebrow}</span><h2>{c.problemTitle}</h2></div>
            <p>{c.problemLead}</p>
          </div>
          <div className="ff-compare-grid">
            <div className="fh-compare-bridge" aria-hidden="true">
              <span>Fragmented handoffs</span>
              <i><FiArrowRight /></i>
              <strong>One accountable workflow</strong>
            </div>
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

      <section id="process" className="ff-section ff-process fh-process-section">
        <div className="container">
          <div className="ff-heading ff-heading-dark fh-process-heading">
            <div>
              <span className="ff-kicker ff-kicker-light">{c.processEyebrow}</span>
              <h2>{c.processTitle}</h2>
            </div>
            <p>{c.processLead}</p>
          </div>
          <div className="fh-process-stage">
            <div className="fh-process-rail" aria-hidden="true">
              <span className="fh-process-parcel"><FiPackage /></span>
            </div>
            <div className="ff-process-list fh-process-timeline">
              {c.steps.map(([number, title, text], index) => {
                const ProcessIcon = processIcons[index] || FiCheck;
                return (
                  <article key={number} style={{ "--process-index": index }}>
                    <div className="fh-process-node"><ProcessIcon aria-hidden="true" /></div>
                    <span>{number}</span>
                    <div><h3>{title}</h3><p>{text}</p></div>
                    <FiArrowRight />
                  </article>
                );
              })}
            </div>
            <div className="fh-process-route" aria-hidden="true">
              <span>Product brief</span><i /><strong>Tracked delivery</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="ff-section fh-brand-showcase">
        <div className="container">
          <div className="ff-heading ff-heading-split">
            <div><span className="ff-kicker">BUILD A BRAND, NOT A GREY PARCEL</span><h2>Show customers what makes the unboxing experience yours.</h2></div>
            <div className="fh-heading-support"><p>This section follows the strongest reference sites by showing packaging, private-label details and creative production before asking visitors to enquire.</p><ExternalLinkSlot item={homeMaterialPlan.links.whatsapp} /></div>
          </div>
          <div className="fh-brand-material-grid">
            <MaterialSlot item={homeMaterialPlan.media.packagingPhoto} />
            <MaterialSlot item={homeMaterialPlan.media.privateLabelPhoto} />
            <MaterialSlot item={homeMaterialPlan.media.creativeVideo} kind="video" />
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
                    <div className={`fh-service-art fh-service-art-${index + 1}`} aria-hidden="true">
                      <span className="fh-service-art-icon"><Icon /></span>
                      <i /><i /><i />
                      <b>{String(index + 1).padStart(2, "0")}</b>
                    </div>
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
          <div className="ff-quality-media fh-quality-material">
            <MaterialSlot item={homeMaterialPlan.media.qualityPhoto} />
            <div className="ff-quality-tag"><FiShield /><span>Quality checkpoint</span></div>
          </div>
          <div className="ff-quality-copy">
            <span className="ff-kicker">{c.qcEyebrow}</span><h2>{c.qcTitle}</h2><p>{c.qcLead}</p>
            <ul>{c.qcChecks.map((item) => <li key={item}><FiCheck />{item}</li>)}</ul>
            <Link className="ff-text-link" href="/contact">Discuss your QC requirements<FiArrowRight /></Link>
          </div>
        </div>
      </section>

      <section className="ff-section fh-cases">
        <div className="container">
          <div className="ff-heading ff-heading-split">
            <div><span className="ff-kicker">REAL CUSTOMER STORIES</span><h2>Replace promises with approved results.</h2></div>
            <div className="fh-heading-support"><p>Two focused cases are enough for launch. Each one should explain the problem, what changed operationally and the verified business outcome.</p><ExternalLinkSlot item={homeMaterialPlan.links.caseStudies} /></div>
          </div>
          <div className="fh-case-grid">
            {[homeMaterialPlan.media.caseOne, homeMaterialPlan.media.caseTwo].map((item, index) => (
              <article className="fh-case-card" key={item.label}>
                <MaterialSlot item={item} />
                <div className="fh-case-copy">
                  <small>CUSTOMER STORY {String(index + 1).padStart(2, "0")}</small>
                  <h3>Case title and customer name required</h3>
                  <p>Challenge, solution and a short client-approved testimonial will appear here.</p>
                  <div><span><strong>--</strong>Metric one</span><span><strong>--</strong>Metric two</span></div>
                </div>
              </article>
            ))}
          </div>
          <div className="fh-review-link"><ExternalLinkSlot item={homeMaterialPlan.links.reviews} /></div>
        </div>
      </section>

      <section className="ff-section ff-team fh-evidence">
        <div className="container">
          <div className="ff-heading ff-heading-split ff-heading-dark">
            <div><span className="ff-kicker ff-kicker-light">{c.teamEyebrow}</span><h2>{c.teamTitle}</h2></div><p>{c.teamLead}</p>
          </div>
          <div className="fh-evidence-grid">
            <div className="fh-team-material-grid">
              <MaterialSlot item={homeMaterialPlan.media.teamPhoto} className="fh-material-slot-dark" />
              <MaterialSlot item={homeMaterialPlan.media.warehouseVideo} kind="video" className="fh-material-slot-dark" />
              <ExternalLinkSlot item={homeMaterialPlan.links.warehouseTour} />
            </div>
            <div className="fh-evidence-list">
              {evidenceItems.map(([number, title, text]) => <article key={number}><small>{number}</small><div><h3>{title}</h3><p>{text}</p></div></article>)}
              <Link className="ff-text-link" href="/services#service-comparison">See the complete service scope<FiArrowRight /></Link>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="ff-section ff-faq">
        <div className="container ff-faq-grid">
          <div className="ff-faq-intro"><span className="ff-kicker">{c.faqEyebrow}</span><h2>{c.faqTitle}</h2><p>The practical questions most independent sellers ask before getting started.</p><Link className="ff-btn ff-btn-dark" href="/contact">{c.primary}<FiArrowRight /></Link></div>
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
