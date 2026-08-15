"use client";

import { useState } from "react";
import { getFulfillmentCopy } from "@config/fulfillment-content";
import { homeMaterialPlan } from "@config/home-materials";
import Image from "next/image";
import Link from "next/link";
import { FaAmazon } from "react-icons/fa";
import {
  FiArrowRight,
  FiCheck,
  FiClipboard,
  FiGlobe,
  FiImage,
  FiPackage,
  FiSearch,
  FiShield,
  FiStar,
  FiUsers,
  FiVideo,
  FiX,
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

const workflowSteps = [
  {
    number: "01",
    title: "Share your product",
    text: "Send the product link, target market and your key requirements.",
    Icon: FiClipboard,
  },
  {
    number: "02",
    title: "Source and quote",
    text: "We compare suitable suppliers, pricing, MOQ and lead times.",
    Icon: FiSearch,
  },
  {
    number: "03",
    title: "Sample and inspect",
    text: "Approve a sample and confirm the agreed quality checkpoints.",
    Icon: FiShield,
  },
  {
    number: "04",
    title: "Store and fulfill",
    text: "Inventory is received, stored, picked and packed by one team.",
    Icon: FiPackage,
  },
  {
    number: "05",
    title: "Ship and sync tracking",
    text: "Orders ship worldwide and tracking is returned to your store.",
    Icon: FiGlobe,
  },
];

const homeServices = [
  {
    title: "Product Sourcing",
    audience: "For stores testing products or replacing suppliers.",
    points: ["Supplier comparison", "Sample coordination", "MOQ and lead-time review"],
    slug: "product-sourcing",
    image: "/images/services/product-sourcing.webp",
  },
  {
    title: "Quality Control",
    audience: "For stores that need fewer product and packing surprises.",
    points: ["Product and variant checks", "Quantity confirmation", "Packaging inspection"],
    slug: "quality-control-inspection",
    image: "/images/services/quality-control-inspection.webp",
  },
  {
    title: "Private Label & Packaging",
    audience: "For brands building a consistent customer experience.",
    points: ["Logo and label coordination", "Custom boxes and inserts", "Packaging sample approval"],
    slug: "private-label",
    image: "/images/services/private-label.webp",
  },
  {
    title: "Dropshipping Fulfillment",
    audience: "For stores shipping individual orders without holding stock locally.",
    points: ["Daily order handling", "Pick and pack", "Worldwide tracked shipping"],
    slug: "dropshipping-supplier",
    image: "/images/services/dropshipping-supplier.webp",
  },
  {
    title: "China 3PL Fulfillment",
    audience: "For growing stores managing inventory and multiple SKUs.",
    points: ["Inventory receiving", "Warehouse storage", "Returns coordination"],
    slug: "3pl-fulfillment-services",
    image: "/images/services/3pl-fulfillment.webp",
  },
  {
    title: "Order Automation",
    audience: "For stores ready to reduce repetitive order handoffs.",
    points: ["Store order sync", "Fulfillment status updates", "Tracking return workflow"],
    slug: "automatic-order-fulfillment",
    image: "/images/services/order-automation.webp",
  },
];

const fulfillmentComparison = [
  ["Multiple supplier conversations", "One dedicated contact"],
  ["Product shipped without clear checks", "QC before dispatch"],
  ["Generic packaging", "Branding and packaging options"],
  ["Separate warehouse and shipping teams", "One operating workflow"],
  ["Unclear tracking handoff", "Structured shipment updates"],
];

const qcCapabilities = [
  "SKU and variant",
  "Quantity",
  "Appearance and finish",
  "Size and weight",
  "Packaging and barcode",
  "Final parcel check",
];

const homeTestimonials = [
  {
    name: "Lukas",
    country: "Germany",
    tag: "Fulfillment",
    quote: "The team keeps high-volume order work neat, trackable and organized. The difference is clear when details matter every day.",
    featured: true,
  },
  {
    name: "Emma",
    country: "United States",
    tag: "Product Sourcing",
    quote: "Sourcing requests come back with practical options, so testing new products feels less risky.",
  },
  {
    name: "Laura",
    country: "Australia",
    tag: "Branding",
    quote: "Packaging details are handled carefully, and small brand requests do not get lost during fulfillment.",
  },
];

const homeFaqs = [
  ["How do I get started?", "Send us a product or store link, your target market and expected daily order volume. We will review the request and recommend a practical next step."],
  ["Is there a minimum order quantity?", "It depends on the product, supplier and customization required. Standard fulfillment can often start small, while custom products and packaging may have supplier MOQs."],
  ["Which eCommerce platforms do you support?", "We support workflows for Shopify, WooCommerce, TikTok Shop, Amazon, Etsy, eBay and custom stores through direct or structured order handoffs."],
  ["Can you inspect products before shipping?", "Yes. The agreed QC scope can cover SKU, variant, quantity, appearance, size, weight, packaging, barcode and final parcel checks."],
  ["How is fulfillment pricing calculated?", "Pricing is based on product handling, storage, packaging, order volume, destination markets and shipping method. We quote after reviewing your workflow."],
];

const quoteHelpOptions = [
  "Product sourcing",
  "Quality issues",
  "Custom packaging",
  "Slow shipping",
  "Order fulfillment",
  "Replacing current supplier",
];

const coreAdvantages = [
  {
    title: "Source with clarity",
    text: "Compare suppliers, samples, MOQ, pricing and production time.",
    Icon: FiSearch,
  },
  {
    title: "Check before shipping",
    text: "Review product, variant, quantity and packaging before dispatch.",
    Icon: FiShield,
  },
  {
    title: "Fulfill with one team",
    text: "Store, pick, pack, ship and return tracking through one workflow.",
    Icon: FiPackage,
  },
];

const platformStats = [
  { value: "6+", label: "Years Experience", labelZh: "年行业经验" },
  { value: "30+", label: "Markets", labelZh: "服务市场" },
  { value: "3", label: "QC Stages", labelZh: "道质检流程" },
  { value: "1-on-1", label: "Support", labelZh: "专属支持" },
];

const quoteDialCountries = [
  { flag: "🇺🇸", name: "United States", code: "+1" },
  { flag: "🇬🇧", name: "United Kingdom", code: "+44" },
  { flag: "🇨🇦", name: "Canada", code: "+1" },
  { flag: "🇦🇺", name: "Australia", code: "+61" },
  { flag: "🇩🇪", name: "Germany", code: "+49" },
  { flag: "🇫🇷", name: "France", code: "+33" },
  { flag: "🇮🇹", name: "Italy", code: "+39" },
  { flag: "🇪🇸", name: "Spain", code: "+34" },
  { flag: "🇳🇱", name: "Netherlands", code: "+31" },
  { flag: "🇦🇪", name: "United Arab Emirates", code: "+971" },
  { flag: "🇸🇦", name: "Saudi Arabia", code: "+966" },
  { flag: "🇯🇵", name: "Japan", code: "+81" },
  { flag: "🇰🇷", name: "South Korea", code: "+82" },
  { flag: "🇸🇬", name: "Singapore", code: "+65" },
  { flag: "🇨🇳", name: "China", code: "+86" },
];

function MaterialSlot({ item, kind = "image", className = "" }) {
  const Icon = kind === "video" ? FiVideo : FiImage;
  if (kind === "video" && item.src) {
    return (
      <div className={`fh-material-slot fh-material-video ${className}`.trim()}>
        <video src={item.src} poster={item.poster || undefined} autoPlay muted loop playsInline preload="metadata" aria-label={item.title} />
        <div className="fh-material-video-shade" />
        <div className="fh-material-video-copy"><span><FiVideo />{item.label}</span><strong>{item.title}</strong><p>{item.brief}</p><small>{item.credit}</small></div>
      </div>
    );
  }
  if (item.src) {
    return (
      <figure className={`fh-material-slot fh-material-image ${className}`.trim()}>
        <Image src={item.src} alt={item.title} fill sizes="(max-width: 767px) 100vw, 42vw" priority={item === homeMaterialPlan.media.heroVideo} loading={item === homeMaterialPlan.media.heroVideo ? "eager" : "lazy"} unoptimized={item.src.includes("/images/generated/")} />
        <figcaption className="fh-material-media-copy">
          <span><Icon aria-hidden="true" />{item.label}</span>
          <strong>{item.title}</strong>
          <p>{item.brief}</p>
          <small>{item.credit || item.spec}</small>
        </figcaption>
      </figure>
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

export default function FulfillmentHome({ lang = "en" }) {
  const { home: c } = getFulfillmentCopy(lang);
  const isZh = lang === "zh";
  const evidenceItems = c.evidenceItems || [["01", "Approved service scope", "Responsibilities are confirmed before launch."], ["02", "Quality-check evidence", "Agreed checkpoints provide context before an order continues."], ["03", "Order handoff visibility", "SKU, packing and tracking details follow the order workflow."]];
  const [openFaq, setOpenFaq] = useState(0);
  return (
    <main className="ff-site fh-home">
      <section className="ff-hero fh-hero-redesign">
        <div className="ff-hero-grid">
          <div className="ff-hero-copy-wrap">
            <span className="ff-kicker ff-kicker-light">
              {isZh ? "中国采购与履约服务" : "CHINA-BASED SOURCING & FULFILLMENT"}
            </span>
            <h1 className="fh-hero-title">
              {isZh ? (
                <>
                  <span>您的中国一站式代发合作伙伴</span>
                  <span>采购、质检与全球履约</span>
                </>
              ) : (
                <>
                  <span>Your China Dropshipping Agent</span>
                  <span>
                    for <em>Sourcing, QC & Fulfillment</em>
                  </span>
                </>
              )}
            </h1>
            <p>
              {isZh
                ? "通过一个中国本地团队完成产品采购、质量检查、品牌包装和全球发货，让订单履约更清晰、更稳定。"
                : "Source products, inspect quality, customize packaging and ship worldwide through one dedicated China-based fulfillment team."}
            </p>
            <div className="ff-actions">
              <a className="ff-btn ff-btn-primary" href="#quote">{isZh ? c.primary : "Get a Free Quote"}<FiArrowRight /></a>
              <a className="ff-btn ff-btn-ghost" href="#process">{isZh ? c.secondary : "See How It Works"}</a>
            </div>
            <div className="ff-proof-list" aria-label={isZh ? "核心服务承诺" : "Core service commitments"}>
              {(isZh
                ? ["发货前质量检查", "专属客户经理", "全球可追踪配送"]
                : ["Quality checks before dispatch", "Dedicated account support", "Tracked worldwide shipping"]
              ).map((item) => <span key={item}><FiCheck />{item}</span>)}
            </div>
          </div>
          <div className="fh-hero-visual-panel">
            <Image
              src="/images/generated/jw-receiving-team-v3.png"
              alt="Warehouse team receiving, scanning and recording incoming cartons"
              fill
              priority
              sizes="(max-width: 767px) 100vw, 52vw"
              unoptimized
            />
          </div>
        </div>
      </section>

      <section id="platforms" className="ff-platforms fh-platform-data-strip">
        <div className="container">
          <div className="fh-platform-row">
            <p className="fh-platform-heading">
              {isZh ? "适配您正在使用的电商平台" : "Works with the platforms you already sell on"}
            </p>
            <div className="fh-platform-marquee" role="region" aria-label="Supported eCommerce platforms">
              <div className="fh-platform-track">
                {[0, 1].map((copyIndex) => (
                  <div className="fh-platform-group" key={copyIndex} aria-hidden={copyIndex === 1 ? "true" : undefined}>
                    {platformLogos.slice(0, 6).map(({ name, Icon, color }) => (
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
          <div className="fh-platform-stats" aria-label="Operating overview">
            {platformStats.map(({ value, label, labelZh }) => (
              <div className="fh-platform-stat" key={label}>
                <strong>{value}</strong>
                <span>{isZh ? labelZh : label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ff-section fh-core-advantages">
        <div className="container">
          <div className="fh-core-heading">
            <span className="ff-kicker">WHY JW DROPSHIPPING</span>
            <h2>One China team behind every order</h2>
          </div>
          <div className="fh-core-grid">
            {coreAdvantages.map(({ title, text, Icon }) => (
              <article className="fh-core-item" key={title}>
                <span className="fh-core-icon"><Icon aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <Link className="fh-core-link" href="/why-us">Why JW Dropshipping<FiArrowRight aria-hidden="true" /></Link>
        </div>
      </section>

      <section id="process" className="ff-section ff-process fh-process-section fh-fixed-process">
        <div className="container">
          <div className="fh-section-heading fh-process-heading">
            <span className="ff-kicker">HOW IT WORKS</span>
            <h2>From product link to tracked delivery</h2>
            <p>Five clear steps, managed by one China-based team.</p>
          </div>
          <div className="fh-fixed-process-grid">
            {workflowSteps.map(({ number, title, text, Icon }) => (
              <article className="fh-fixed-process-step" key={number}>
                <div className="fh-fixed-process-node"><Icon aria-hidden="true" /></div>
                <span className="fh-fixed-process-number">{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="ff-section ff-services fh-core-services">
        <div className="container">
          <div className="fh-section-heading fh-services-heading">
            <span className="ff-kicker">CORE SERVICES</span>
            <h2>What we handle for your store</h2>
            <p>Start with one service or connect them into one managed workflow.</p>
          </div>
          <div className="fh-core-services-grid">
            {homeServices.map((service) => (
              <Link className="fh-core-service-card" href={`/services/${service.slug}`} key={service.slug} aria-label={`Explore ${service.title}`}>
                <div className="fh-core-service-image">
                  <Image src={service.image} alt={service.title} fill sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" />
                </div>
                <div className="fh-core-service-body">
                  <h3>{service.title}</h3>
                  <p>{service.audience}</p>
                  <ul>{service.points.map((point) => <li key={point}><FiCheck aria-hidden="true" />{point}</li>)}</ul>
                  <span>Explore Service<FiArrowRight aria-hidden="true" /></span>
                </div>
              </Link>
            ))}
          </div>
          <div className="fh-core-services-cta"><Link className="ff-btn ff-btn-dark" href="/services#service-comparison">Compare All Services<FiArrowRight /></Link></div>
        </div>
      </section>

      <section className="fh-fulfillment-compare">
        <div className="container fh-fulfillment-compare-heading">
          <span className="ff-kicker">THE JW DIFFERENCE</span>
          <h2>A clearer way to manage fulfillment from China</h2>
        </div>
        <div className="fh-fulfillment-compare-columns">
          <article className="fh-fulfillment-compare-side fh-fulfillment-compare-typical">
            <div className="fh-fulfillment-compare-inner">
              <h3>Typical sourcing agent</h3>
              <ul>
                {fulfillmentComparison.map(([typical]) => (
                  <li key={typical}><FiX aria-hidden="true" /><span>{typical}</span></li>
                ))}
              </ul>
            </div>
          </article>
          <article className="fh-fulfillment-compare-side fh-fulfillment-compare-jw">
            <div className="fh-fulfillment-compare-inner">
              <h3>JW Dropshipping</h3>
              <ul>
                {fulfillmentComparison.map(([, jw]) => (
                  <li key={jw}><FiCheck aria-hidden="true" /><span>{jw}</span></li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="fh-qc-proof">
        <div className="container fh-qc-proof-grid">
          <div className="fh-qc-proof-media" aria-label="Quality control inspection photos">
            <figure className="fh-qc-proof-main">
              <Image src="/images/generated/jw-qc-inspection-v3.png" alt="Quality control specialist inspecting products before dispatch" fill sizes="(max-width: 1023px) 100vw, 50vw" unoptimized />
              <figcaption>Product inspection before dispatch</figcaption>
            </figure>
            <figure className="fh-qc-proof-detail">
              <Image src="/images/quality-gallery/tablet-quality-check.jpg" alt="Inspector recording product quality details" fill sizes="(max-width: 767px) 50vw, 25vw" />
              <figcaption>Inspection record</figcaption>
            </figure>
            <figure className="fh-qc-proof-detail">
              <Image src="/images/quality-gallery/fragile-box-inspection.jpg" alt="Packaging and parcel condition inspection" fill sizes="(max-width: 767px) 50vw, 25vw" />
              <figcaption>Packaging check</figcaption>
            </figure>
          </div>
          <div className="fh-qc-proof-content">
            <span className="ff-kicker">QUALITY CONTROL</span>
            <h2>Quality control before products leave China</h2>
            <ul className="fh-qc-proof-list">
              {qcCapabilities.map((item) => <li key={item}><FiCheck aria-hidden="true" />{item}</li>)}
            </ul>
            <div className="fh-qc-report" aria-label="Example quality control report">
              <div className="fh-qc-report-header"><FiShield aria-hidden="true" /><strong>QC report</strong><span>JW-1024</span></div>
              <dl>
                <div><dt>SKU</dt><dd>JW-1024</dd></div>
                <div><dt>Checked</dt><dd>50 units</dd></div>
                <div><dt>Passed</dt><dd>48</dd></div>
                <div><dt>Issues</dt><dd>2</dd></div>
                <div className="fh-qc-report-status"><dt>Status</dt><dd>Waiting for approval</dd></div>
              </dl>
            </div>
            <Link className="fh-qc-proof-link" href="/services/quality-control-inspection">Explore Quality Control<FiArrowRight aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="fh-home-testimonials" aria-labelledby="home-testimonials-title">
        <div className="container">
          <div className="fh-home-testimonials-heading">
            <span className="ff-kicker">SELLER FEEDBACK</span>
            <h2 id="home-testimonials-title">What sellers say about working with JW</h2>
          </div>
          <div className="fh-home-testimonials-grid">
            {homeTestimonials.map(({ name, country, tag, quote, featured }) => (
              <article className={`fh-home-testimonial${featured ? " is-featured" : ""}`} key={`${name}-${tag}`}>
                <div className="fh-home-testimonial-stars" aria-label="Five star review">
                  {[0, 1, 2, 3, 4].map((star) => <FiStar key={star} aria-hidden="true" />)}
                </div>
                <blockquote>{quote}</blockquote>
                <footer>
                  <div><strong>{name}</strong><span>{country}</span></div>
                  <small>{tag}</small>
                </footer>
              </article>
            ))}
          </div>
          <Link className="fh-home-testimonials-link" href="/testimonials">Read More Seller Stories<FiArrowRight aria-hidden="true" /></Link>
        </div>
      </section>

      <section id="faq" className="fh-home-faq">
        <div className="container fh-home-faq-grid">
          <div className="fh-home-faq-intro">
            <span className="ff-kicker">FREQUENTLY ASKED QUESTIONS</span>
            <h2>What to know before you start</h2>
            <p>Quick answers about sourcing, minimum quantities, quality checks and fulfillment pricing.</p>
          </div>
          <div className="fh-home-faq-list">
            {homeFaqs.map(([question, answer], index) => {
              const isOpen = openFaq === index;
              return (
                <article className={isOpen ? "is-open" : ""} key={question}>
                  <button type="button" aria-expanded={isOpen} aria-controls={`home-faq-answer-${index}`} onClick={() => setOpenFaq(index)}>
                    <span>{question}</span><i aria-hidden="true">+</i>
                  </button>
                  <div id={`home-faq-answer-${index}`} hidden={!isOpen}><p>{answer}</p></div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="quote" className="fh-home-quote">
        <div className="container fh-home-quote-grid">
          <div className="fh-home-quote-copy">
            <span className="ff-kicker ff-kicker-light">GET A FREE QUOTE</span>
            <h2>Start with one product link</h2>
            <p>Tell us what you sell, where you ship and your expected daily volume. Our team will recommend the next step.</p>
          </div>
          <form className="ff-form fh-home-quote-form" name="fulfillment-quote" method="POST" action={isZh ? "/zh/thank-you" : "/thank-you"} data-netlify="true" data-netlify-honeypot="company-website">
            <input type="hidden" name="form-name" value="fulfillment-quote" /><input type="hidden" name="language" value={lang} />
            <p className="fh-honeypot"><label>Do not fill this out<input name="company-website" /></label></p>
            <div className="fh-home-quote-fields">
              <label>Name<input name="name" autoComplete="name" placeholder="Your name" required /></label>
              <label>WhatsApp / Email<input name="contact" autoComplete="email" placeholder="WhatsApp number or email" required /></label>
              <label className="fh-home-quote-wide">Product or Store URL<input name="product-url" type="url" placeholder="https://" required /></label>
              <label>Daily Order Volume<select name="volume" defaultValue="" required><option value="" disabled>Select a range</option><option>0-10</option><option>11-50</option><option>51-200</option><option>201-500</option><option>500+</option></select></label>
              <label>Main Market<input name="main-market" placeholder="e.g. United States" required /></label>
            </div>
            <fieldset className="fh-home-quote-help">
              <legend>What do you need help with?</legend>
              <div>{quoteHelpOptions.map((option) => <label key={option}><input type="checkbox" name="help-with" value={option} /><span>{option}</span></label>)}</div>
            </fieldset>
            <button className="ff-btn ff-btn-primary" type="submit">Get a Free Quote<FiArrowRight /></button>
          </form>
        </div>
      </section>
    </main>
  );
}
