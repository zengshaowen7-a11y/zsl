"use client";

import { useEffect, useRef, useState } from "react";
import { getFulfillmentCopy } from "@config/fulfillment-content";
import { homeMaterialPlan } from "@config/home-materials";
import { serviceCatalog } from "@config/service-catalog";
import Image from "next/image";
import Link from "next/link";
import PhoneCountryInput from "./components/PhoneCountryInput";
import { FaAmazon } from "react-icons/fa";
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiChevronLeft,
  FiChevronRight,
  FiClipboard,
  FiGlobe,
  FiImage,
  FiPackage,
  FiPrinter,
  FiRefreshCw,
  FiSearch,
  FiShield,
  FiTag,
  FiUsers,
  FiVideo,
  FiX,
  FiCalendar,
  FiLayers,
  FiMapPin,
  FiTruck,
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

const processVisuals = [
  {
    src: "/images/generated/jw-warehouse-team-v2.png",
    label: "01 / RECEIVE",
    title: "Stock received",
  },
  {
    src: "/images/generated/jw-quality-check-v2.png",
    label: "02 / CHECK",
    title: "Goods checked",
  },
  {
    src: "/images/generated/jw-dispatch-v2.png",
    label: "03 / DISPATCH",
    title: "Parcels shipped",
  },
];

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

const processIcons = [FiClipboard, FiSearch, FiShield, FiPackage, FiGlobe];

const whySlides = [
  {
    src: "/images/generated/jw-warehouse-team-v2.png",
    title: "One operating team",
    caption: "Sourcing, receiving and fulfillment stay in one workflow.",
  },
  {
    src: "/images/generated/jw-quality-check-v2.png",
    title: "Quality before dispatch",
    caption: "Quantity, variants and packaging are checked before shipping.",
  },
  {
    src: "/images/generated/jw-dispatch-v2.png",
    title: "Packed and dispatched",
    caption: "Brand-ready parcels leave with a clear tracking handoff.",
  },
];

const whyWithout = [
  "Scattered supplier chats",
  "Late quality issues",
  "Generic packaging",
  "Unclear handoffs",
];

const whyWith = [
  "One order workflow",
  "Pre-dispatch checks",
  "Brand-ready packing",
  "Tracked delivery",
];

const proofStats = [
  // Draft figures for layout preview. Replace with verified data before launch.
  { value: 6, suffix: "+", label: "Years in fulfillment", note: "Experienced support for repeat daily operations.", Icon: FiCalendar },
  { value: 30, suffix: "+", label: "Delivery markets", note: "Routes planned around your destination countries.", Icon: FiMapPin },
  { value: 3, suffix: "", label: "QC stages", note: "Incoming, product and packing checks before dispatch.", Icon: FiLayers },
  { value: 1, suffix: "-on-1", label: "Support contact", note: "A dedicated person keeps order details clear.", Icon: FiTruck },
];

function AnimatedNumber({ value, prefix = "", suffix = "", active, plain = false, delay = 0 }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) {
      setDisplay(0);
      return;
    }
    let frame;
    let timeout;
    const startRun = () => {
      const start = performance.now();
      const duration = 1200;
      const tick = (now) => {
        const progress = Math.max(0, Math.min((now - start) / duration, 1));
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(value * eased));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };
    timeout = window.setTimeout(startRun, delay);
    return () => {
      window.clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  }, [active, value, delay]);

  return <>
    {prefix ? <span className="fh-stat-prefix">{prefix}</span> : null}
    <span className="fh-stat-number">{plain ? display : display.toLocaleString()}</span>
    {suffix ? <span className="fh-stat-suffix">{suffix}</span> : null}
  </>;
}

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
  const [whySlide, setWhySlide] = useState(0);
  const [processSlide, setProcessSlide] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setWhySlide((current) => (current + 1) % whySlides.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setProcessSlide((current) => (current + 1) % processVisuals.length);
    }, 3600);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const node = statsRef.current;
    if (!node) return;
    const showStats = () => {
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight * 1.15 && rect.bottom > 0) {
        setStatsVisible(true);
        window.removeEventListener("scroll", showStats);
        window.removeEventListener("resize", showStats);
      }
    };
    showStats();
    window.addEventListener("scroll", showStats, { passive: true });
    window.addEventListener("resize", showStats);
    return () => {
      window.removeEventListener("scroll", showStats);
      window.removeEventListener("resize", showStats);
    };
  }, []);

  const moveWhySlide = (direction) => {
    setWhySlide((current) => (current + direction + whySlides.length) % whySlides.length);
  };

  return (
    <main className="ff-site fh-home">
      <section className="ff-hero">
        <div className="ff-hero-glow" />
        <div className="container ff-hero-grid">
          <div className="ff-hero-copy-wrap">
            <span className="ff-kicker ff-kicker-light">
              {isZh ? c.eyebrow : "SOURCING / QC / BRANDING / FULFILLMENT"}
            </span>
            <h1 className="fh-hero-title">
              {isZh ? (
                c.title
              ) : (
                <>
                  <span>Your China Dropshipping Agent</span>
                  <span>
                    for <em>Sourcing, QC & Fulfillment</em>
                  </span>
                </>
              )}
            </h1>
            <p>{c.lead}</p>
            <div className="ff-proof-list">
              {c.proofs.map((item) => <span key={item}><FiCheck />{item}</span>)}
            </div>
            <div className="ff-actions">
              <a className="ff-btn ff-btn-primary" href="#quote">{c.primary}<FiArrowRight /></a>
              <a className="ff-btn ff-btn-ghost" href="#process">{c.secondary}</a>
            </div>
          </div>

          <div className="ff-hero-visual fh-hero-media-slot">
            <MaterialSlot item={homeMaterialPlan.media.heroVideo} className="fh-material-slot-dark" />
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

      <section className="ff-section ff-problem fh-problem-section fh-why-section">
        <div className="container">
          <div className="fh-why-heading">
            <span className="ff-kicker">WHY JW DROPSHIPPING</span>
            <h2>
              Why choose <span>JW Dropshipping</span>
            </h2>
            <p>One China team for sourcing, QC, packing and delivery.</p>
          </div>

          <div className="fh-why-grid">
            <div className="fh-why-carousel" aria-label="JW Dropshipping operating photos">
              <div className="fh-why-green-block" aria-hidden="true" />
              <div className="fh-why-frame">
                {whySlides.map((slide, index) => (
                  <figure className={`fh-why-slide${index === whySlide ? " is-active" : ""}`} key={slide.src} aria-hidden={index === whySlide ? undefined : "true"}>
                    <Image src={slide.src} alt={slide.title} fill sizes="(max-width: 1023px) 100vw, 46vw" unoptimized />
                    <figcaption>
                      <strong>{slide.title}</strong>
                      <span>{slide.caption}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
              <button className="fh-why-nav fh-why-nav-prev" type="button" onClick={() => moveWhySlide(-1)} aria-label="Previous operating photo"><FiChevronLeft /></button>
              <button className="fh-why-nav fh-why-nav-next" type="button" onClick={() => moveWhySlide(1)} aria-label="Next operating photo"><FiChevronRight /></button>
              <div className="fh-why-dots" aria-label="Choose operating photo">
                {whySlides.map((slide, index) => (
                  <button className={index === whySlide ? "is-active" : ""} type="button" key={slide.src} onClick={() => setWhySlide(index)} aria-label={`Show ${slide.title}`} />
                ))}
              </div>
            </div>

            <div className="fh-why-copy">
              <div className="fh-why-compare">
                <article className="fh-why-card fh-why-without">
                  <h3>Without JW Dropshipping</h3>
                  <ul>{whyWithout.map((item) => <li key={item}><span><FiX /></span>{item}</li>)}</ul>
                </article>
                <article className="fh-why-card fh-why-with">
                  <h3>With JW Dropshipping</h3>
                  <ul>{whyWith.map((item) => <li key={item}><span><FiCheck /></span>{item}</li>)}</ul>
                </article>
              </div>
              <Link className="ff-btn ff-btn-dark fh-why-cta" href="#quote">Get a Free Quote<FiArrowRight /></Link>
              <div className="fh-why-footnote">
                <span>No obligation</span>
                <span>Human review</span>
                <span>Reply within 1 business day</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ff-section ff-problem fh-problem-section fh-problem-legacy" hidden aria-hidden="true">
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

      <section className="fh-stat-band" ref={statsRef}>
        <div className="container fh-stat-layout">
          <div className="fh-section-heading fh-stat-heading">
            <span className="ff-kicker">OPERATING SNAPSHOT</span>
            <h2>Built for clear daily fulfillment.</h2>
            <p>Proof points that show how the daily operation is organized around support, quality control and delivery coverage.</p>
          </div>
          <div className="fh-stat-items">
            {proofStats.map(({ value, prefix, suffix, label, note, Icon, plain }, index) => (
              <article className={statsVisible ? "is-counting" : ""} style={{ "--stat-index": index }} key={label}>
                <Icon aria-hidden="true" />
                <strong><AnimatedNumber value={value} prefix={prefix} suffix={suffix} active={statsVisible} plain={plain} delay={index * 160} /></strong>
                <span>{label}</span>
                <p>{note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="ff-section ff-process fh-process-section">
        <div className="container">
          <div className="fh-section-heading fh-process-heading">
            <span className="ff-kicker">{c.processEyebrow}</span>
            <h2>{c.processTitle}</h2>
            <p>{c.processLead}</p>
          </div>
          <div className="fh-process-orbit">
            <div className="fh-process-visual-grid" aria-label="Fulfillment workflow visuals">
            {processVisuals.map((visual, index) => (
              <figure className={`fh-process-visual fh-process-visual-${index + 1}${index === processSlide ? " is-active" : ""}`} key={visual.src}>
                <Image src={visual.src} alt={visual.title} fill sizes="(max-width: 767px) 100vw, 33vw" unoptimized />
                <figcaption>
                  <span>{visual.label}</span>
                  <strong>{visual.title}</strong>
                </figcaption>
              </figure>
            ))}
            </div>
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
          </div>
        </div>
      </section>

      <section id="services" className="ff-section ff-services">
        <div className="container">
          <div className="fh-section-heading fh-services-heading">
            <span className="ff-kicker">{c.servicesEyebrow}</span>
            <h2>{c.servicesTitle}</h2>
            <p>Use each service on its own, or combine them into one sourcing, QC, packing and delivery workflow.</p>
          </div>
          <div className="fh-service-grid">
            {serviceCatalog.slice(0, 4).map((service, index) => {
              const Icon = serviceIcons[service.icon] || FiPackage;
              return (
                <article className="fh-service-card" key={service.slug}>
                  <Link className="fh-service-image" href={`/services/${service.slug}`} aria-label={`Explore ${service.title}`}>
                    <Image src={service.image} alt={service.title} fill sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 25vw" />
                    <span className="fh-service-art-icon"><Icon /></span>
                    <b>{String(index + 1).padStart(2, "0")}</b>
                  </Link>
                  <div className="fh-service-body">
                    <small>{String(index + 1).padStart(2, "0")}</small><h3>{service.title}</h3>
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
        <div className="container">
          <div className="fh-section-heading fh-quality-heading">
            <span className="ff-kicker">{c.qcEyebrow}</span>
            <h2>{c.qcTitle}</h2>
            <p>{c.qcLead}</p>
          </div>
          <div className="ff-quality-grid">
            <div className="ff-quality-media fh-quality-material">
              <MaterialSlot item={homeMaterialPlan.media.qualityPhoto} />
              <div className="fh-quality-gallery" aria-label="Quality inspection photo carousel">
                {homeMaterialPlan.media.qualityGallery.map((image, imageIndex) => (
                  <figure className="fh-quality-gallery-slide" key={image.src} style={{ "--quality-slide": imageIndex }}>
                    <Image src={image.src} alt={image.label} fill sizes="(max-width: 1023px) 100vw, 50vw" unoptimized />
                    <figcaption>
                      <span>{String(imageIndex + 1).padStart(2, "0")}</span>
                      <strong>{image.label}</strong>
                      <small>{image.credit}</small>
                    </figcaption>
                  </figure>
                ))}
              </div>
              <div className="fh-quality-thumbs" aria-hidden="true">
                {homeMaterialPlan.media.qualityGallery.map((image, imageIndex) => (
                  <span key={image.src} style={{ "--quality-thumb": imageIndex }}>
                    <Image src={image.src} alt="" fill sizes="72px" unoptimized />
                  </span>
                ))}
              </div>
              <div className="fh-quality-checks-card">
                <span>01</span>
                <strong>Check quantity, variant, finish</strong>
                <i />
                <span>02</span>
                <strong>Approve pack before dispatch</strong>
              </div>
              <div className="ff-quality-tag"><FiShield /><span>Quality checkpoint</span></div>
            </div>
            <div className="ff-quality-copy fh-quality-check-panel">
              <div>
                <span className="ff-kicker">BEFORE DISPATCH</span>
                <h3>What gets checked before orders leave China</h3>
                <p>Keep visible product, variant and packing issues from becoming customer problems.</p>
              </div>
              <ul>{c.qcChecks.map((item) => <li key={item}><FiCheck />{item}</li>)}</ul>
              <Link className="ff-text-link" href="#quote">Get a Free Quote<FiArrowRight /></Link>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="ff-section ff-faq">
        <div className="container fh-faq-layout">
          <div className="fh-section-heading fh-faq-heading">
            <span className="ff-kicker">{c.faqEyebrow}</span>
            <h2>{c.faqTitle}</h2>
            <p>Clear answers before you start.</p>
          </div>
          <div className="ff-faq-list">{c.faqs.slice(0, 4).map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
          <div className="fh-faq-cta">
            <Link className="ff-btn ff-btn-dark" href="#quote">{c.primary}<FiArrowRight /></Link>
          </div>
        </div>
      </section>

      <section id="quote" className="ff-section ff-quote">
        <div className="container ff-quote-grid">
          <div className="ff-quote-copy"><span className="ff-kicker ff-kicker-light">{c.quoteEyebrow}</span><h2>{c.quoteTitle}</h2><p>{c.quoteLead}</p><div><span><FiSearch />Product review</span><span><FiClipboard />Clear next step</span><span><FiUsers />Human reply</span></div></div>
          <form className="ff-form" name="fulfillment-quote" method="POST" action={isZh ? "/zh/thank-you" : "/thank-you"} data-netlify="true" data-netlify-honeypot="company-website">
            <input type="hidden" name="form-name" value="fulfillment-quote" /><input type="hidden" name="language" value={lang} />
            <p className="fh-honeypot"><label>Do not fill this out<input name="company-website" /></label></p>
            <label>{c.form.name}<input name="name" autoComplete="name" placeholder="Your name" required /></label>
            <label>{c.form.phone}<PhoneCountryInput /></label>
            <label>{c.form.product}<input name="product-url" type="url" placeholder="https://" required /></label>
            <label>{c.form.volume}<select name="volume" defaultValue=""><option value="" disabled>Select a range</option><option>0-10</option><option>11-50</option><option>51-200</option><option>201-500</option><option>500+</option></select></label>
            <button className="ff-btn ff-btn-primary" type="submit">{c.form.submit}<FiArrowRight /></button><small>{c.form.consent}</small>
          </form>
        </div>
      </section>
    </main>
  );
}
