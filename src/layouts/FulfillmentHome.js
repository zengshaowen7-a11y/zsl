"use client";

import { useEffect, useRef, useState } from "react";
import { getFulfillmentCopy } from "@config/fulfillment-content";
import { homeMaterialPlan } from "@config/home-materials";
import Image from "next/image";
import Link from "next/link";
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

const workflowSteps = [
  {
    number: "01",
    title: "Share your product",
    text: "Send us product links, target-market info and your key requirements.",
    Icon: FiClipboard,
  },
  {
    number: "02",
    title: "Source and quote",
    text: "We source suppliers, then share pricing, MOQ and production lead-times.",
    Icon: FiSearch,
  },
  {
    number: "03",
    title: "Sample and inspect",
    text: "You approve samples, and we lock-in clear quality-control standards.",
    Icon: FiShield,
  },
  {
    number: "04",
    title: "Store and fulfill",
    text: "Our warehouse team receives, stores, picks and packs your inventory.",
    Icon: FiPackage,
  },
  {
    number: "05",
    title: "Ship and sync tracking",
    text: "Orders ship globally, tracking numbers auto-synced back to your store.",
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
  ["Multiple separate supplier conversations", "One single dedicated point-of-contact for everything"],
  ["No guaranteed pre-shipment quality checks", "Full quality-control inspection before every dispatch"],
  ["Limited, generic packaging only", "Custom branding & private-label packaging solutions"],
  ["Warehouse and shipping handled by different teams", "End-to-end workflow managed entirely by our in-house team"],
  ["Confusing tracking hand-offs & delayed updates", "Clear, structured shipment and tracking updates"],
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
    name: "Oliver",
    country: "UK",
    flagSrc: "https://flagcdn.com/gb.svg",
    tag: "ORDER HANDLING",
    quote: "Yuri and the whole JW team are incredibly organised, reliable professionals. When you manage hundreds of orders every month, tracking and consistency are everything. Their clear workflow system keeps every shipment easy-to-follow, cuts down miscommunication and saves me hours of manual work each week. I no longer worry about messy order-handling from China.",
  },
  {
    name: "Mia",
    country: "CA",
    flagSrc: "https://flagcdn.com/ca.svg",
    tag: "DAILY SUPPORT",
    quote: "JW’s support team has been reliable and responsive from day-one. They reply quickly, take time to clarify questions and communicate smoothly in English while we set up our fulfillment workflow.",
  },
  {
    name: "Sophie",
    country: "FR",
    flagSrc: "https://flagcdn.com/fr.svg",
    tag: "PRODUCT SOURCING",
    quote: "JW is an excellent fulfillment partner. Their sourcing team listens closely to our requirements, offers practical solutions and keeps us updated throughout the whole process.",
  },
];

const homeFaqs = [
  ["What fulfillment services do you offer?", "We provide end-to-end e-commerce fulfillment services, including product sourcing from verified Chinese manufacturers, comprehensive quality control, worldwide shipping to 150+ countries, print-on-demand fulfillment, private label, and US warehouse distribution through our Los Angeles facilities. From sourcing to delivery, we handle your complete supply chain."],
  ["Do I need a minimum order volume to work with JW DROPSHIPPING?", "No. Unlike traditional fulfillment companies that require 100+ orders/day, JW DROPSHIPPING works with sellers at every stage - from your first 10 orders to 1,000+ per day. We process up to 30,000 orders daily across our Hangzhou and Dongguan warehouses, so we scale with you instead of locking you out at the start."],
  ["What countries do you ship to?", "We provide international shipping to over 150 countries across six continents, including the United States, Canada, the United Kingdom, Australia, Germany, France, Spain, and markets throughout Europe, Asia, and South America. We handle customs documentation and end-to-end tracking for all international destinations through our trusted logistics partners."],
  ["Can you help with private label and branded packaging?", "Yes. We offer comprehensive private label services, including custom packaging design, branded inserts, product labeling, and white-label manufacturing. Your products ship exclusively under your brand identity, allowing you to build direct customer relationships. We manage the entire private label process from concept through production and fulfillment."],
  ["What e-commerce platforms do you integrate with?", "We integrate with all major e-commerce platforms, including Shopify, WooCommerce, Amazon, and other platforms through API integration. Orders sync automatically from your store to our fulfillment system for seamless processing. For custom platforms or unique requirements, our API enables direct integration with your existing infrastructure."],
];

const countryCodeOptions = [
  { label: "United States", flagSrc: "https://flagcdn.com/us.svg", code: "+1" },
  { label: "United Kingdom", flagSrc: "https://flagcdn.com/gb.svg", code: "+44" },
  { label: "Canada", flagSrc: "https://flagcdn.com/ca.svg", code: "+1" },
  { label: "Australia", flagSrc: "https://flagcdn.com/au.svg", code: "+61" },
  { label: "Germany", flagSrc: "https://flagcdn.com/de.svg", code: "+49" },
  { label: "France", flagSrc: "https://flagcdn.com/fr.svg", code: "+33" },
  { label: "Italy", flagSrc: "https://flagcdn.com/it.svg", code: "+39" },
  { label: "Spain", flagSrc: "https://flagcdn.com/es.svg", code: "+34" },
  { label: "Netherlands", flagSrc: "https://flagcdn.com/nl.svg", code: "+31" },
  { label: "Sweden", flagSrc: "https://flagcdn.com/se.svg", code: "+46" },
  { label: "Norway", flagSrc: "https://flagcdn.com/no.svg", code: "+47" },
  { label: "Denmark", flagSrc: "https://flagcdn.com/dk.svg", code: "+45" },
  { label: "Poland", flagSrc: "https://flagcdn.com/pl.svg", code: "+48" },
  { label: "Singapore", flagSrc: "https://flagcdn.com/sg.svg", code: "+65" },
  { label: "Malaysia", flagSrc: "https://flagcdn.com/my.svg", code: "+60" },
  { label: "Philippines", flagSrc: "https://flagcdn.com/ph.svg", code: "+63" },
  { label: "Thailand", flagSrc: "https://flagcdn.com/th.svg", code: "+66" },
  { label: "Indonesia", flagSrc: "https://flagcdn.com/id.svg", code: "+62" },
  { label: "Vietnam", flagSrc: "https://flagcdn.com/vn.svg", code: "+84" },
  { label: "Japan", flagSrc: "https://flagcdn.com/jp.svg", code: "+81" },
  { label: "South Korea", flagSrc: "https://flagcdn.com/kr.svg", code: "+82" },
  { label: "United Arab Emirates", flagSrc: "https://flagcdn.com/ae.svg", code: "+971" },
  { label: "Saudi Arabia", flagSrc: "https://flagcdn.com/sa.svg", code: "+966" },
  { label: "Israel", flagSrc: "https://flagcdn.com/il.svg", code: "+972" },
  { label: "Mexico", flagSrc: "https://flagcdn.com/mx.svg", code: "+52" },
  { label: "Brazil", flagSrc: "https://flagcdn.com/br.svg", code: "+55" },
  { label: "Chile", flagSrc: "https://flagcdn.com/cl.svg", code: "+56" },
  { label: "South Africa", flagSrc: "https://flagcdn.com/za.svg", code: "+27" },
  { label: "New Zealand", flagSrc: "https://flagcdn.com/nz.svg", code: "+64" },
];

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mnpaknaj";
const THANK_YOU_PATH = "/thank-you";

const coreAdvantages = [
  {
    title: "Source with clarity",
    text: "Compare suppliers, samples, MOQs & lead times",
    Icon: FiSearch,
    images: [
      ["/images/services/product-sourcing.webp", "Product sourcing specialist comparing supplier options"],
      ["/images/services/dropshipping-supplier.webp", "Supplier products prepared for sourcing review"],
      ["/images/generated/product-sourcing-hero.webp", "China sourcing team coordinating product samples"],
    ],
  },
  {
    title: "Check before shipping",
    text: "Full‑item quality inspection before dispatch",
    Icon: FiShield,
    images: [
      ["/images/services/quality-control-inspection.webp", "Quality inspector checking products before shipping"],
      ["/images/quality-gallery/warehouse-package-check.jpg", "Warehouse team checking product packaging"],
      ["/images/generated/jw-quality-check-v2.png", "JW quality control specialist reviewing an item"],
    ],
  },
  {
    title: "Fulfill with one team",
    text: "Storage, packing, shipping & tracking under one workflow",
    Icon: FiPackage,
    images: [
      ["/images/services/3pl-fulfillment.webp", "China warehouse fulfillment operation"],
      ["/images/process/warehouse-picking-overhead.jpg", "Warehouse staff picking products for orders"],
      ["/images/generated/jw-dispatch-v2.png", "JW team preparing parcels for dispatch"],
    ],
  },
];

const platformStats = [
  { value: "7", number: 7, suffix: "", label: "Years Experience", labelZh: "年行业经验" },
  { value: "30%", number: 30, suffix: "%", label: "Reduction on Cost", labelZh: "成本降低" },
  { value: "100+", number: 100, suffix: "+", label: "Shipping Line", labelZh: "运输线路" },
  { value: "1500+", number: 1500, suffix: "+", label: "DTC brand’s Choice", labelZh: "DTC品牌之选" },
];

function AnimatedStat({ value, number, suffix = "" }) {
  const statRef = useRef(null);
  const [displayValue, setDisplayValue] = useState(number === undefined ? value : `0${suffix}`);

  useEffect(() => {
    if (number === undefined || !statRef.current) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayValue(`${number}${suffix}`);
      return undefined;
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [quoteErrors, setQuoteErrors] = useState({});
  const [isHeroVideoPlaying, setIsHeroVideoPlaying] = useState(false);
  const [advantageSlideIndexes, setAdvantageSlideIndexes] = useState([0, 0, 0]);
  const [selectedCountryCode, setSelectedCountryCode] = useState(null);
  const [isCountryCodeOpen, setIsCountryCodeOpen] = useState(false);
  const heroVideoRef = useRef(null);
  const advantageGalleryRefs = useRef([]);
  const countryCodeRef = useRef(null);

  useEffect(() => {
    if (!isCountryCodeOpen) return undefined;
    const handlePointerDown = (event) => {
      if (!countryCodeRef.current?.contains(event.target)) setIsCountryCodeOpen(false);
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsCountryCodeOpen(false);
    };
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isCountryCodeOpen]);

  const showAdvantageSlide = (galleryIndex, slideIndex) => {
    const gallery = advantageGalleryRefs.current[galleryIndex];
    const imageCount = coreAdvantages[galleryIndex].images.length;
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

  const handleQuoteSubmit = async (event) => {
    const form = event.currentTarget;
    setIsCountryCodeOpen(false);
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phoneCountry = String(data.get("country-code") || "").trim();
    const phone = String(data.get("phone-number") || "").trim();
    const businessDetails = String(data.get("business-details") || "").trim();
    const dailyOrderVolume = String(data.get("daily-order-volume") || "").trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const nextErrors = {
      name: !name ? "Name is required" : "",
      email: !email ? "Email is required" : !emailOk ? "Enter a valid email address" : "",
      countryCode: !phoneCountry ? "Country code is required" : "",
      phone: !phone ? "Phone number is required" : "",
      businessDetails: !businessDetails ? "Business details are required" : "",
      dailyOrderVolume: !dailyOrderVolume ? "Daily order volume is required" : "",
    };
    const hasErrors = Object.values(nextErrors).some(Boolean);

    if (hasErrors) {
      event.preventDefault();
      setQuoteErrors(nextErrors);
      return;
    }

    event.preventDefault();
    setQuoteErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: data,
      });

      if (!response.ok) {
        throw new Error(`Formspree responded with ${response.status}`);
      }

      window.location.assign(THANK_YOU_PATH);
    } catch {
      setIsSubmitting(false);
      form.submit();
    }
  };

  return (
    <main className="ff-site fh-home">
      <section className="ff-hero fh-hero-redesign">
        <div className="ff-hero-grid">
          <div className="ff-hero-copy-wrap">
            <span className="ff-kicker ff-kicker-light">
              {isZh ? "值得信赖的中国代发合作伙伴" : "TRUSTED CHINA DROPSHIPPING PARTNER"}
            </span>
            <h1 className="fh-hero-title">
              {isZh ? (
                <>
                  <span>您的中国一站式代发合作伙伴</span>
                  <span>采购、质检与全球履约</span>
                </>
              ) : (
                <>
                  <span>China‑Based Sourcing, QC &amp; Fulfillment</span>
                  <span>That Cut Your Logistics Costs</span>
                </>
              )}
            </h1>
            <p>
              {isZh
                ? "通过一个中国本地团队完成产品采购、质量检查、品牌包装和全球发货，让订单履约更清晰、更稳定。"
                : "We source products, inspect every order and ship directly to your buyers. No inventory, no warehouse hassle."}
            </p>
            <div className="ff-actions">
              <a className="ff-btn ff-btn-primary" href="#quote">{isZh ? c.primary : "Get a Free Quote"}<FiArrowRight /></a>
              <a className="ff-btn ff-btn-ghost" href="#process">{isZh ? c.secondary : "See How It Works"}</a>
            </div>
            <div className="ff-proof-list" aria-label={isZh ? "核心服务承诺" : "Core service commitments"}>
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
            <div className="fh-hero-player-shell" aria-label="Warehouse packing and fulfillment workflow preview">
              <div className="fh-hero-visual-panel">
                <div className="fh-hero-player-top">
                  <span><i />JW WORKFLOW</span>
                  <a href="/videos/packing-boxes-pexels-4277472.mp4" target="_blank" rel="noreferrer" aria-label="Watch the packing workflow video in a new tab">WATCH VIDEO<FiExternalLink /></a>
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
                    aria-label="Warehouse packing workflow video"
                    onPlay={() => setIsHeroVideoPlaying(true)}
                  >
                    <source src="/videos/packing-boxes-pexels-4277472.mp4" type="video/mp4" />
                  </video>
                  {!isHeroVideoPlaying && (
                    <button
                      type="button"
                      className="fh-hero-video-play"
                      aria-label="Play warehouse packing workflow video"
                      title="Play workflow video"
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

      <section id="platforms" className="ff-platforms fh-platform-data-strip">
        <div className="container">
          <div className="fh-platform-stats" aria-label="Operating overview">
            {platformStats.map(({ value, number, suffix, label, labelZh }) => (
              <div className="fh-platform-stat" key={label}>
                <AnimatedStat value={value} number={number} suffix={suffix} />
                <span>{isZh ? labelZh : label}</span>
              </div>
            ))}
          </div>
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
        </div>
      </section>

      <section className="ff-section fh-core-advantages">
        <div className="container">
          <div className="fh-core-heading">
            <span className="ff-kicker">Why choose JW Dropshipping?</span>
            <h2>End‑to‑End Control: No Third‑Party Middlemen</h2>
            <p>Source, inspect, pack and ship, fully managed by our own China warehouse team</p>
          </div>
          <div className="fh-core-grid">
            {coreAdvantages.map(({ title, text, Icon, images }, galleryIndex) => (
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
                    <button type="button" onClick={() => showAdvantageSlide(galleryIndex, advantageSlideIndexes[galleryIndex] - 1)} aria-label={`Previous ${title} image`} title="Previous image"><FiChevronLeft /></button>
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
                    <button type="button" onClick={() => showAdvantageSlide(galleryIndex, advantageSlideIndexes[galleryIndex] + 1)} aria-label={`Next ${title} image`} title="Next image"><FiChevronRight /></button>
                  </div>
                </div>
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
            <h2>From Product Link to Tracked Final Delivery</h2>
            <p>5 Simple Steps, Handled Fully By Our In-House China Team</p>
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
          <Link className="fh-process-link" href="/how-it-works">How It Works<FiArrowRight aria-hidden="true" /></Link>
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
                  <p className="fh-core-service-audience"><span>Best for</span>{service.audience}</p>
                  <ul>{service.points.map((point) => <li key={point}><FiCheck aria-hidden="true" />{point}</li>)}</ul>
                  <span>Explore Service<FiArrowRight aria-hidden="true" /></span>
                </div>
              </Link>
            ))}
          </div>
          <div className="fh-core-services-cta"><Link className="fh-core-link" href="/services#service-comparison">Compare All Services<FiArrowRight /></Link></div>
        </div>
      </section>

      <section className="fh-fulfillment-compare">
        <div className="container fh-fulfillment-compare-heading">
          <span className="ff-kicker">THE JW DIFFERENCE</span>
          <h2>A simpler, unified way to manage fulfillment from China</h2>
          <p>Skip fragmented hand-offs between separate suppliers, inspectors, warehouses and shipping teams. Work with one single, coordinated team.</p>
        </div>
        <div className="container fh-difference-layout">
          <div className="fh-fulfillment-compare-columns">
            <article className="fh-fulfillment-compare-side fh-fulfillment-compare-typical">
              <div className="fh-fulfillment-compare-inner"><span className="fh-compare-label">Fragmented Handoffs</span><h3>Typical Sourcing Agent</h3><ul>{fulfillmentComparison.map(([typical]) => <li key={typical}><FiX aria-hidden="true" /><span>{typical}</span></li>)}</ul></div>
            </article>
            <article className="fh-fulfillment-compare-side fh-fulfillment-compare-jw">
              <div className="fh-fulfillment-compare-inner"><span className="fh-compare-label">One Managed Workflow</span><h3>JW Dropshipping</h3><ul>{fulfillmentComparison.map(([, jw]) => <li key={jw}><FiCheck aria-hidden="true" /><span>{jw}</span></li>)}</ul></div>
            </article>
          </div>
          <div className="fh-difference-media" aria-label="Quality control inspection photos">
            <figure className="fh-difference-main"><Image src="/images/generated/jw-qc-inspection-v3.png" alt="Quality control specialist inspecting products before dispatch" fill sizes="(max-width: 900px) 100vw, 42vw" unoptimized /><figcaption>Product inspection before dispatch</figcaption></figure>
            <figure><Image src="/images/quality-gallery/tablet-quality-check.jpg" alt="Inspector recording product quality details" fill sizes="(max-width: 767px) 50vw, 18vw" /><figcaption>Inspection record</figcaption></figure>
            <figure><Image src="/images/quality-gallery/fragile-box-inspection.jpg" alt="Packaging and parcel condition inspection" fill sizes="(max-width: 767px) 50vw, 18vw" /><figcaption>Packaging check</figcaption></figure>
          </div>
        </div>
      </section>

      <section className="fh-qc-proof">
        <div className="container fh-qc-proof-heading">
          <span className="ff-kicker">QUALITY CONTROL</span>
          <h2>Quality control before products leave China</h2>
          <p>Inspect products, variants, packaging and parcel details before dispatch from China.</p>
        </div>
        <div className="container fh-qc-proof-grid">
          <div className="fh-qc-proof-content">
            <ul className="fh-qc-proof-list">
              {qcCapabilities.map((item) => <li key={item}><FiCheck aria-hidden="true" />{item}</li>)}
            </ul>
            <div className="fh-qc-report" aria-label="Example quality control report">
              <div className="fh-qc-report-header"><FiShield aria-hidden="true" /><div><small>EXAMPLE REPORT</small><strong>Quality control</strong><em>Pre-dispatch inspection summary</em></div><span>JW-1024</span></div>
              <dl>
                <div><dt>SKU</dt><dd>JW-1024</dd></div>
                <div><dt>Checked</dt><dd>50 units</dd></div>
                <div><dt>Sampling</dt><dd>100%</dd></div>
                <div><dt>Issues</dt><dd>0</dd></div>
                <div><dt>Passed</dt><dd>50</dd></div>
                <div><dt>Photos</dt><dd>12 files</dd></div>
                <div><dt>Packaging</dt><dd>Verified</dd></div>
                <div><dt>Barcode</dt><dd>Matched</dd></div>
                <div className="fh-qc-report-status"><dt>Status</dt><dd>Approved for dispatch</dd></div>
              </dl>
              <div className="fh-qc-report-checks" aria-label="Inspection checkpoints">
                {["Variant match", "Quantity count", "Finish check", "Size & weight", "Carton label", "Final parcel"].map((item) => (
                  <span key={item}><FiCheck aria-hidden="true" />{item}</span>
                ))}
              </div>
              <div className="fh-qc-report-progress"><span><i />50 passed</span><span>0 issues</span></div>
            </div>
            <Link className="fh-qc-proof-link" href="/services/quality-control-inspection">Explore Quality Control<FiArrowRight aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="fh-home-testimonials" aria-labelledby="home-testimonials-title">
        <div className="container">
          <div className="fh-home-testimonials-heading">
            <span className="ff-kicker">SELLER FEEDBACK</span>
            <h2 id="home-testimonials-title">What Sellers Say About Working With JW</h2>
            <p>Real feedback from sellers using JW for sourcing, fulfillment and branding support.</p>
          </div>
          <div className="fh-home-testimonials-grid">
            {homeTestimonials.map(({ name, country, flagSrc, tag, quote }) => (
              <article className="fh-home-testimonial" key={`${name}-${tag}`}>
                <div className="fh-home-testimonial-stars" aria-label="Five star review">
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
            <h2 className="fh-home-quote-title">Start With Your Business Details</h2>
            <p>Tell us about your products, your store and your fulfillment goals. Our team will review your requirements and send you a clear, tailored next step plan.</p>
            <ul className="fh-home-quote-promises" aria-label="What happens next">
              <li><FiCheck aria-hidden="true" /><span><strong>Share the basics</strong>One product link or store URL is enough to get started.</span></li>
              <li><FiUsers aria-hidden="true" /><span><strong>Reviewed by our in-house team</strong>Your enquiry will be handled directly by our China-based fulfillment specialists.</span></li>
              <li><FiArrowRight aria-hidden="true" /><span><strong>Receive clear next steps</strong>We will reply with actionable information and pricing guidance to move your project forward.</span></li>
            </ul>
          </div>
          <form className="ff-form fh-home-quote-form" name="fulfillment-quote" method="POST" action={FORMSPREE_ENDPOINT} noValidate onSubmit={handleQuoteSubmit} onInvalid={(event) => event.preventDefault()}>
            <input type="hidden" name="form-name" value="fulfillment-quote" /><input type="hidden" name="language" value={lang} />
            <p className="fh-honeypot"><label>Do not fill this out<input name="company-website" /></label></p>
            <div className="fh-home-quote-fields">
              <label>Name<input name="name" autoComplete="name" placeholder="Your name" />{quoteErrors.name ? <small className="fh-form-error">{quoteErrors.name}</small> : null}</label>
              <label>Email<input name="email" type="text" inputMode="email" autoComplete="email" placeholder="you@example.com" />{quoteErrors.email ? <small className="fh-form-error">{quoteErrors.email}</small> : null}</label>
              <div className="fh-phone-split" ref={countryCodeRef}>
                <span className="fh-home-quote-label fh-phone-split-label">Country Code &amp; Phone Number</span>
                <div className="fh-country-code-field">
                <input type="hidden" name="country-code" value={selectedCountryCode ? `${selectedCountryCode.code} ${selectedCountryCode.label}` : ""} />
                <button type="button" className="fh-country-code-trigger" aria-haspopup="listbox" aria-expanded={isCountryCodeOpen} onClick={() => setIsCountryCodeOpen((open) => !open)}>
                  {selectedCountryCode ? (
                    <>
                      <img src={selectedCountryCode.flagSrc} alt="" aria-hidden="true" />
                      <span className="fh-country-code-value">{selectedCountryCode.code}</span>
                      <small>{selectedCountryCode.label}</small>
                    </>
                  ) : (
                    <span className="fh-country-code-placeholder">Country Code</span>
                  )}
                  <i aria-hidden="true">⌄</i>
                </button>
                {isCountryCodeOpen && (
                  <div className="fh-country-code-menu" role="listbox" onClick={(event) => event.stopPropagation()}>
                    {countryCodeOptions.map((option) => (
                      <button type="button" role="option" aria-selected={selectedCountryCode?.label === option.label} key={`${option.code}-${option.label}`} onClick={() => { setSelectedCountryCode(option); setIsCountryCodeOpen(false); }}>
                        <img src={option.flagSrc} alt="" aria-hidden="true" />
                        <span>{option.code}</span>
                        <small>{option.label}</small>
                      </button>
                  ))}
                  </div>
                )}
                {quoteErrors.countryCode ? <small className="fh-form-error">{quoteErrors.countryCode}</small> : null}
                </div>
                <div className="fh-phone-number-field">
                  <input
                    className="fh-phone-number-input"
                    name="phone-number"
                    autoComplete="tel-national"
                    placeholder="Phone Number"
                    aria-label="Phone Number"
                    onClick={(event) => event.stopPropagation()}
                  />
                  {quoteErrors.phone ? <small className="fh-form-error fh-phone-error">{quoteErrors.phone}</small> : null}
                </div>
              </div>
              <label className="fh-home-quote-wide">Tell us about your business!<textarea name="business-details" placeholder="Briefly describe your products, current fulfillment setup, target markets and the services you are looking for." rows={5} />{quoteErrors.businessDetails ? <small className="fh-form-error">{quoteErrors.businessDetails}</small> : null}</label>
              <label className="fh-home-quote-wide">Daily Order Volume<select name="daily-order-volume" defaultValue=""><option value="" disabled>Select a range</option><option>0-10 orders/day</option><option>11-50 orders/day</option><option>51-200 orders/day</option><option>201-500 orders/day</option><option>500+ orders/day</option></select>{quoteErrors.dailyOrderVolume ? <small className="fh-form-error">{quoteErrors.dailyOrderVolume}</small> : null}</label>
            </div>
            <button className="ff-btn ff-btn-primary" type="submit" disabled={isSubmitting} aria-live="polite"><span>{isSubmitting ? "Sending..." : "Get a Free Quote"}</span><FiArrowRight /></button>
          </form>
        </div>
      </section>
    </main>
  );
}
