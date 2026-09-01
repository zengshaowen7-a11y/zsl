"use client";

import { useEffect, useRef, useState } from "react";
import { homeMaterialPlan } from "@config/home-materials";
import ContactForm from "@layouts/ContactForm";
import BrandBackdrop from "@layouts/components/BrandBackdrop";
import HomeEntranceMotion from "@layouts/components/HomeEntranceMotion";
import "@/styles/home-entrance.css";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { FaAmazon } from "react-icons/fa";
import {
  FiArrowRight,
  FiCheck,
  FiChevronLeft,
  FiChevronRight,
  FiClipboard,
  FiExternalLink,
  FiGlobe,
  FiImage,
  FiPackage,
  FiPlay,
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

function AnimatedStat({ value, number, suffix = "" }) {
  const statRef = useRef(null);
  const [displayValue, setDisplayValue] = useState(number === undefined ? value : `0${suffix}`);

  useEffect(() => {
    if (number === undefined || !statRef.current) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = requestAnimationFrame(() => setDisplayValue(`${number}${suffix}`));
      return () => cancelAnimationFrame(frame);
    }
    const target = statRef.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const startedAt = performance.now();
      const update = (time) => {
        const progress = Math.min((time - startedAt) / 1000, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(`${Math.round(number * eased)}${suffix}`);
        if (progress < 1) requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
      observer.disconnect();
    }, { threshold: 0.4 });
    observer.observe(target);
    return () => observer.disconnect();
  }, [number, suffix]);

  return <strong ref={statRef}>{displayValue}</strong>;
}

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
  const t = useTranslations("Home");
  const workflowStepsCopy = t.raw("workflowSteps");
  const homeServicesCopy = t.raw("services");
  const fulfillmentComparisonCopy = t.raw("comparisonItems");
  const qcCapabilitiesCopy = t.raw("qcCapabilities");
  const coreAdvantagesCopy = t.raw("advantages");
  const homeTestimonialsCopy = t.raw("testimonials");
  const homeFaqsCopy = t.raw("faqs");
  const platformStatsCopy = t.raw("stats");
  const section = t.raw("sections");
  const workflowIcons = [FiClipboard, FiSearch, FiShield, FiPackage, FiGlobe];
  const c = {};
  const isZh = lang === "zh";
  const evidenceItems = t.raw("evidenceItems");
  const [openFaq, setOpenFaq] = useState(0);
  const [isHeroVideoPlaying, setIsHeroVideoPlaying] = useState(false);
  const [advantageSlideIndexes, setAdvantageSlideIndexes] = useState([0, 0, 0]);
  const heroVideoRef = useRef(null);
  const homeRef = useRef(null);
  const advantageGalleryRefs = useRef([]);

  const showAdvantageSlide = (galleryIndex, slideIndex) => {
    const gallery = advantageGalleryRefs.current[galleryIndex];
    const imageCount = coreAdvantagesCopy[galleryIndex].images.length;
    const nextIndex = (slideIndex + imageCount) % imageCount;
    if (gallery) gallery.scrollLeft = gallery.clientWidth * nextIndex;
    setAdvantageSlideIndexes((current) => current.map((value, index) => index === galleryIndex ? nextIndex : value));
  };

  const syncAdvantageSlide = (galleryIndex, gallery) => {
    if (!gallery.clientWidth) return;
    const nextIndex = Math.round(gallery.scrollLeft / gallery.clientWidth);
    setAdvantageSlideIndexes((current) => current[galleryIndex] === nextIndex
      ? current
      : current.map((value, index) => index === galleryIndex ? nextIndex : value));
  };

  return (
    <main ref={homeRef} className="ff-site fh-home" data-jw-motion="playing">
      <HomeEntranceMotion rootRef={homeRef} locale={lang} paused={false} />
      <section className="ff-hero fh-hero-redesign jw-scene">
        <BrandBackdrop variant="orbit" watermark eager motifs={["plane"]} />
        <div className="ff-hero-grid">
          <div className="ff-hero-copy-wrap">
            <span className="ff-kicker ff-kicker-light">
              {isZh ? "值得信赖的中国代发合作伙伴" : section.heroKicker}
            </span>
            <h1 className="fh-hero-title">
              {isZh ? (
                <>
                  <span>您的中国一站式代发合作伙伴</span>
                  <span>采购、质检与全球履约</span>
                </>
              ) : (
                <>
                  {section.heroTitleLines.map((line) => <span key={line}>{line}</span>)}
                </>
              )}
            </h1>
            <p>
              {isZh
                ? "通过一个中国本地团队完成产品采购、质量检查、品牌包装和全球发货，让订单履约更清晰、更稳定。"
                : section.heroLead}
            </p>
            <div className="ff-actions">
              <a className="ff-btn ff-btn-primary" href="#quote">{isZh ? c.primary : section.heroPrimary}<FiArrowRight /></a>
              <a className="ff-btn ff-btn-ghost" href="#process">{isZh ? c.secondary : section.heroSecondary}</a>
            </div>
            <div className="ff-proof-list" aria-label={isZh ? "核心服务承诺" : section.heroProofLabel}>
              {(isZh
                ? ["发货前质量检查", "专属客户经理", "全球可追踪配送"]
                : [
                    "24/7 English-speaking\nSupport",
                    "Multi-warehouse, Faster &\nLower-cost Shipping",
                    "QC-guaranteed Sourcing +\nCustom Branding",
                  ]
              ).map((item) => (
                <span key={item}>
                  <FiCheck />
                  <strong className="ff-proof-copy">{item}</strong>
                </span>
              ))}
            </div>
          </div>
            <div className="fh-hero-player-shell" aria-label={section.videoLabel}>
              <div className="fh-hero-visual-panel">
                <div className="fh-hero-player-top">
                  <span><i />{section.workflowLabel}</span>
                  <a href="/videos/packing-boxes-pexels-4277472.mp4" target="_blank" rel="noreferrer" aria-label={section.watchVideoLabel}>{section.watchVideo}<FiExternalLink /></a>
                </div>
                <div className="fh-hero-player-screen">
                  <video
                    ref={heroVideoRef}
                    muted
                    loop
                    playsInline
                    controls={isHeroVideoPlaying}
                    preload="metadata"
                    poster="/images/generated/jw-branded-packing-v3.png"
                    aria-label={section.videoLabel}
                    onPlay={() => setIsHeroVideoPlaying(true)}
                  >
                    <source src="/videos/packing-boxes-pexels-4277472.mp4" type="video/mp4" />
                  </video>
                  {!isHeroVideoPlaying && (
                    <button
                      type="button"
                      className="fh-hero-video-play"
                      aria-label={section.playLabel}
                      title={section.playTitle}
                      onClick={() => heroVideoRef.current?.play()}
                    >
                      <FiPlay aria-hidden="true" />
                    </button>
                  )}
                </div>
            </div>
          </div>
        </div>
      </section>

      <section id="platforms" className="ff-platforms fh-platform-data-strip jw-scene">
        <BrandBackdrop variant="flow" tint="teal" />
        <div className="container">
          <div className="fh-platform-stats" aria-label={section.operatingOverview}>
            {platformStatsCopy.map(({ value, number, suffix, label }) => (
              <div className="fh-platform-stat" key={label}>
                <AnimatedStat value={value} number={number} suffix={suffix} />
                <span>{label}</span>
              </div>
            ))}
          </div>
          <div className="fh-platform-row">
            <p className="fh-platform-heading">
              {isZh ? "适配您正在使用的电商平台" : section.platforms}
            </p>
            <div className="fh-platform-marquee" role="region" aria-label={section.platformLabel}>
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
        </div>
      </section>

      <section className="ff-section fh-core-advantages jw-scene">
        <BrandBackdrop variant="tiles" align="left" motifs={["parcel", "globe"]} tint="sand" />
        <div className="container">
          <div className="fh-core-heading">
            <span className="ff-kicker">{section.advantagesKicker}</span>
            <h2>{section.advantagesTitle}</h2>
            <p>{section.advantagesLead}</p>
          </div>
          <div className="fh-core-grid">
            {coreAdvantagesCopy.map(({ title, text, images }, galleryIndex) => { const Icon = [FiSearch, FiShield, FiPackage][galleryIndex]; return (
              <article className="fh-core-item" key={title}>
                <span className="fh-core-icon"><Icon aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{text}</p>
                <div className="fh-advantage-gallery-wrap">
                  <div
                    className="fh-advantage-gallery"
                    ref={(node) => { advantageGalleryRefs.current[galleryIndex] = node; }}
                    onScroll={(event) => syncAdvantageSlide(galleryIndex, event.currentTarget)}
                    aria-label={`${title} image gallery`}
                  >
                    {images.map(([src, alt]) => (
                      <figure className="fh-advantage-slide" key={src}>
                        <Image src={src} alt={alt} fill sizes="(max-width: 767px) 100vw, 33vw" unoptimized />
                      </figure>
                    ))}
                  </div>
                  <div className="fh-advantage-gallery-controls">
                    <button type="button" onClick={() => showAdvantageSlide(galleryIndex, advantageSlideIndexes[galleryIndex] - 1)} aria-label={`${section.previousImage}: ${title}`} title={section.previousImage}><FiChevronLeft /></button>
                    <div className="fh-advantage-gallery-dots" aria-label={`${advantageSlideIndexes[galleryIndex] + 1} of ${images.length}`}>
                      {images.map(([, alt], slideIndex) => (
                        <button
                          type="button"
                          className={advantageSlideIndexes[galleryIndex] === slideIndex ? "is-active" : ""}
                          onClick={() => showAdvantageSlide(galleryIndex, slideIndex)}
                          aria-label={`Show image ${slideIndex + 1}: ${alt}`}
                          key={alt}
                        />
                      ))}
                    </div>
                    <button type="button" onClick={() => showAdvantageSlide(galleryIndex, advantageSlideIndexes[galleryIndex] + 1)} aria-label={`${section.nextImage}: ${title}`} title={section.nextImage}><FiChevronRight /></button>
                  </div>
                </div>
              </article>
            );})}
          </div>
          <Link className="fh-core-link" href="/why-us">{section.whyLink}<FiArrowRight aria-hidden="true" /></Link>
        </div>
      </section>

      <section id="process" className="ff-section ff-process fh-process-section fh-fixed-process jw-scene">
        <BrandBackdrop motifs={["parcel", "plane"]} />
        <div className="container">
          <div className="fh-section-heading fh-process-heading">
            <span className="ff-kicker">{section.processKicker}</span>
            <h2>{section.processTitle}</h2>
            <p>{section.processLead}</p>
          </div>
          <div className="fh-fixed-process-grid">
            {workflowStepsCopy.map(({ number, title, text }, index) => { const Icon = workflowIcons[index]; return (
              <article className="fh-fixed-process-step" key={number}>
                <div className="fh-fixed-process-node"><Icon aria-hidden="true" /></div>
                <span className="fh-fixed-process-number">{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            );})}
          </div>
          <Link className="fh-process-link" href="/how-it-works">{section.processLink}<FiArrowRight aria-hidden="true" /></Link>
        </div>
      </section>

      <section id="services" className="ff-section ff-services fh-core-services jw-scene">
        <BrandBackdrop variant="tiles" motifs={["layers", "parcel"]} tint="teal" />
        <div className="container">
          <div className="fh-section-heading fh-services-heading">
            <span className="ff-kicker">{section.servicesKicker}</span>
            <h2>{section.servicesTitle}</h2>
            <p>{section.servicesLead}</p>
          </div>
          <div className="fh-core-services-grid">
            {homeServicesCopy.map((service) => (
              <Link className="fh-core-service-card" href={`/services/${service.slug}`} key={service.slug} aria-label={`Explore ${service.title}`}>
                <div className="fh-core-service-image">
                  <Image src={service.image} alt={service.title} fill sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" />
                </div>
                <div className="fh-core-service-body">
                  <h3>{service.title}</h3>
                  <p className="fh-core-service-audience"><span>{section.bestFor}</span>{service.audience}</p>
                  <ul>{service.points.map((point) => <li key={point}><FiCheck aria-hidden="true" />{point}</li>)}</ul>
                  <span>{section.exploreService}<FiArrowRight aria-hidden="true" /></span>
                </div>
              </Link>
            ))}
          </div>
          <div className="fh-core-services-cta"><Link className="fh-core-link" href="/services#service-comparison">{section.compareServices}<FiArrowRight /></Link></div>
        </div>
      </section>

      <section className="fh-fulfillment-compare jw-scene">
        <BrandBackdrop variant="orbit" motifs={["globe"]} />
        <div className="container fh-fulfillment-compare-heading">
          <span className="ff-kicker">{section.differenceKicker}</span>
          <h2>{section.differenceTitle}</h2>
          <p>{section.differenceLead}</p>
        </div>
        <div className="container fh-difference-layout">
          <div className="fh-fulfillment-compare-columns">
            <article className="fh-fulfillment-compare-side fh-fulfillment-compare-typical">
              <div className="fh-fulfillment-compare-inner"><span className="fh-compare-label">{section.fragmented}</span><h3>{section.typical}</h3><ul>{fulfillmentComparisonCopy.map(([typical]) => <li key={typical}><FiX aria-hidden="true" /><span>{typical}</span></li>)}</ul></div>
            </article>
            <article className="fh-fulfillment-compare-side fh-fulfillment-compare-jw">
              <div className="fh-fulfillment-compare-inner"><span className="fh-compare-label">{section.managed}</span><h3>{section.jw}</h3><ul>{fulfillmentComparisonCopy.map(([, jw]) => <li key={jw}><FiCheck aria-hidden="true" /><span>{jw}</span></li>)}</ul></div>
            </article>
          </div>
          <div className="fh-difference-media" aria-label={section.differenceMediaLabel}>
            <figure className="fh-difference-main"><Image src="/images/generated/jw-qc-inspection-v3.png" alt={section.differenceMedia[0][0]} fill sizes="(max-width: 900px) 100vw, 42vw" unoptimized /><figcaption>{section.differenceMedia[0][1]}</figcaption></figure>
            <figure><Image src="/images/quality-gallery/tablet-quality-check.jpg" alt={section.differenceMedia[1][0]} fill sizes="(max-width: 767px) 50vw, 18vw" /><figcaption>{section.differenceMedia[1][1]}</figcaption></figure>
            <figure><Image src="/images/quality-gallery/fragile-box-inspection.jpg" alt={section.differenceMedia[2][0]} fill sizes="(max-width: 767px) 50vw, 18vw" /><figcaption>{section.differenceMedia[2][1]}</figcaption></figure>
          </div>
        </div>
      </section>

      <section className="fh-qc-proof jw-scene">
        <BrandBackdrop variant="scan" motifs={["shield", "parcel"]} tint="blue" />
        <div className="container fh-qc-proof-heading">
          <span className="ff-kicker">{section.qualityKicker}</span>
          <h2>{section.qualityTitle}</h2>
          <p>{section.qualityLead}</p>
        </div>
        <div className="container fh-qc-proof-grid">
          <div className="fh-qc-proof-content">
            <ul className="fh-qc-proof-list">
              {qcCapabilitiesCopy.map((item) => <li key={item}><FiCheck aria-hidden="true" />{item}</li>)}
            </ul>
            <div className="fh-qc-report" aria-label={section.report.label}>
              <div className="fh-qc-report-header"><FiShield aria-hidden="true" /><div><small>{section.report.eyebrow}</small><strong>{section.report.title}</strong><em>{section.report.summary}</em></div><span>JW-1024</span></div>
              <dl>
                <div><dt>SKU</dt><dd>JW-1024</dd></div>
                <div><dt>{section.report.checked}</dt><dd>50 units</dd></div>
                <div><dt>{section.report.sampling}</dt><dd>100%</dd></div>
                <div><dt>{section.report.issues}</dt><dd>0</dd></div>
                <div><dt>{section.report.passed}</dt><dd>50</dd></div>
                <div><dt>{section.report.photos}</dt><dd>12 files</dd></div>
                <div><dt>{section.report.packaging}</dt><dd>{section.report.verified}</dd></div>
                <div><dt>{section.report.barcode}</dt><dd>{section.report.matched}</dd></div>
                <div className="fh-qc-report-status"><dt>{section.report.status}</dt><dd>{section.report.approved}</dd></div>
              </dl>
              <div className="fh-qc-report-checks" aria-label={section.report.checkpoints}>
                {section.report.items.map((item) => (
                  <span key={item}><FiCheck aria-hidden="true" />{item}</span>
                ))}
              </div>
              <div className="fh-qc-report-progress"><span><i />{section.report.passedCount}</span><span>{section.report.issueCount}</span></div>
            </div>
            <Link className="fh-qc-proof-link" href="/services/quality-control-inspection">{section.qualityLink}<FiArrowRight aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="fh-home-testimonials jw-scene" aria-labelledby="home-testimonials-title">
        <BrandBackdrop variant="ripple" align="left" motifs={["message"]} tint="teal" />
        <div className="container">
          <div className="fh-home-testimonials-heading">
            <span className="ff-kicker">{section.feedbackKicker}</span>
            <h2 id="home-testimonials-title">{section.feedbackTitle}</h2>
            <p>{section.feedbackLead}</p>
          </div>
          <div className="fh-home-testimonials-grid">
            {homeTestimonialsCopy.map(({ name, country, flagSrc, tag, quote }) => (
              <article className="fh-home-testimonial" key={`${name}-${tag}`}>
                <div className="fh-home-testimonial-stars" aria-label={section.fiveStars}>
                  {[0, 1, 2, 3, 4].map((star) => <FiStar key={star} aria-hidden="true" />)}
                </div>
                <blockquote>{quote}</blockquote>
                <footer>
                  <div><strong>{name}</strong><span><img src={flagSrc} alt="" aria-hidden="true" />{country}</span></div>
                  <small>{tag}</small>
                </footer>
              </article>
            ))}
          </div>
          <Link className="fh-home-testimonials-link" href="/testimonials">{section.feedbackLink}<FiArrowRight aria-hidden="true" /></Link>
        </div>
      </section>

      <section id="faq" className="fh-home-faq jw-scene">
        <BrandBackdrop variant="ripple" motifs={["message", "plane"]} tint="blue" />
        <div className="container fh-home-faq-grid">
          <div className="fh-home-faq-intro">
            <span className="ff-kicker">{section.faqKicker}</span>
            <h2>{section.faqTitle}</h2>
            <p>{section.faqLead}</p>
          </div>
          <div className="fh-home-faq-list">
            {homeFaqsCopy.map(([question, answer], index) => {
              const isOpen = openFaq === index;
              return (
                <article className={isOpen ? "is-open" : ""} key={question}>
                  <button type="button" aria-expanded={isOpen} aria-controls={`home-faq-answer-${index}`} onClick={() => setOpenFaq((current) => current === index ? null : index)}>
                    <span>{question}</span><i aria-hidden="true">+</i>
                  </button>
                  <div id={`home-faq-answer-${index}`} hidden={!isOpen}><p>{answer}</p></div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="quote" className="fh-home-quote jw-scene">
        <BrandBackdrop align="left" globe motifs={["plane"]} />
        <div className="container fh-home-quote-grid">
          <div className="fh-home-quote-copy">
            <span className="ff-kicker ff-kicker-light">{section.quoteKicker}</span>
            <h2 className="fh-home-quote-title">{section.quoteTitle}</h2>
            <p>{section.quoteLead}</p>
            <ul className="fh-home-quote-promises" aria-label={section.quoteLabel}>
              <li><FiCheck aria-hidden="true" /><span><strong>{section.quotePromises[0][0]}</strong>{section.quotePromises[0][1]}</span></li>
              <li><FiUsers aria-hidden="true" /><span><strong>{section.quotePromises[1][0]}</strong>{section.quotePromises[1][1]}</span></li>
              <li><FiArrowRight aria-hidden="true" /><span><strong>{section.quotePromises[2][0]}</strong>{section.quotePromises[2][1]}</span></li>
            </ul>
          </div>
          <ContactForm source="home-page" />
        </div>
      </section>
    </main>
  );
}
