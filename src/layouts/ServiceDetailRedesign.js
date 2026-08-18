import { servicePages } from "@config/service-page-content";
import { getServiceConversion } from "@config/service-conversion-content";
import ContactForm from "@layouts/ContactForm";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiCheck,
  FiClipboard,
  FiClock,
  FiGlobe,
  FiPackage,
  FiSearch,
  FiShield,
} from "react-icons/fi";

const capabilityIcons = [
  FiSearch,
  FiShield,
  FiPackage,
  FiClipboard,
  FiGlobe,
  FiClock,
];
const serviceTitleClass = (title) =>
  title.length > 48 ? "sdr-title-long" : undefined;

const proofContent = {
  "product-sourcing": {
    eyebrow: "EXAMPLE SUPPLIER COMPARISON",
    title: "Compare complete offers on the same product brief.",
    image: "/images/generated/product-sourcing-hero.webp",
    columns: ["Supplier", "Unit price", "MOQ", "Lead time"],
    rows: [
      ["Supplier A", "$8.40", "300", "18 days"],
      ["Supplier B", "$7.95", "500", "24 days"],
      ["Supplier C", "$9.10", "100", "14 days"],
    ],
    note: "Illustrative comparison. Actual quotations depend on specification and supplier review.",
  },
  "quality-control-inspection": {
    eyebrow: "EXAMPLE QC RELEASE RECORD",
    title: "Turn inspection findings into a clear release decision.",
    image: "/images/generated/jw-qc-inspection-v3.png",
    columns: ["Checkpoint", "Checked", "Issues", "Status"],
    rows: [
      ["SKU and variant", "50", "0", "Passed"],
      ["Appearance", "50", "2", "Review"],
      ["Packaging", "50", "0", "Passed"],
    ],
    note: "Example interface showing how findings can be organized before approval.",
  },
  "3pl-fulfillment-services": {
    eyebrow: "EXAMPLE INVENTORY VIEW",
    title: "Keep receiving, available stock and exceptions visible.",
    image: "/images/generated/3pl-fulfillment-hero.webp",
    columns: ["SKU", "Received", "Available", "Status"],
    rows: [
      ["JW-BLK-S", "500", "472", "Available"],
      ["JW-BLK-M", "500", "86", "Low stock"],
      ["JW-BLK-L", "300", "0", "Reorder"],
    ],
    note: "Illustrative inventory interface. The final workflow depends on warehouse scope.",
  },
  "pod-fulfillment": {
    eyebrow: "POD APPROVAL GATES",
    title: "Keep artwork, variants and physical approval connected.",
    image: "/images/generated/jw-pod-production-v3.png",
    columns: ["Gate", "Required input", "Owner", "Status"],
    rows: [
      ["Artwork", "Print-ready file", "Brand", "Approved"],
      ["Sample", "Physical reference", "JW QC", "Review"],
      ["Production", "SKU mapping", "Workshop", "Waiting"],
    ],
    note: "Example approval path for a print-on-demand product.",
  },
  "private-label": {
    eyebrow: "BRAND SCOPE PLANNER",
    title: "Choose brand elements by impact, MOQ and timing.",
    image: "/images/generated/private-label-hero.webp",
    columns: ["Brand element", "Typical input", "MOQ impact", "Stage"],
    rows: [
      ["Printed insert", "Artwork", "Low", "Start"],
      ["Custom mailer", "Size + print", "Medium", "Scale"],
      ["Product label", "Product spec", "Varies", "Brand"],
    ],
    note: "MOQ and timing are confirmed after material and supplier review.",
  },
  "automatic-order-fulfillment": {
    eyebrow: "ORDER DATA FLOW",
    title: "Move normal orders forward and keep exceptions visible.",
    image: "/images/generated/automatic-fulfillment-hero.webp",
    columns: ["Event", "Validation", "Warehouse action", "Result"],
    rows: [
      ["New order", "SKU mapped", "Release", "Ready"],
      ["Address issue", "Field missing", "Hold", "Review"],
      ["Dispatched", "Tracking valid", "Sync", "Complete"],
    ],
    note: "Example workflow. Connection methods depend on the store platform.",
  },
  "china-fulfillment-center": {
    eyebrow: "WAREHOUSE CONTROL ZONES",
    title: "Give every physical handoff a clear place and record.",
    image: "/images/evidence/warehouse-walkthrough-aisle.jpg",
    columns: ["Zone", "Activity", "Control", "Output"],
    rows: [
      ["Receiving", "Register goods", "Inbound plan", "Receipt"],
      ["QC", "Inspect batch", "Checklist", "Release"],
      ["Dispatch", "Final scan", "Order rule", "Tracking"],
    ],
    note: "The operating layout is configured around product and warehouse requirements.",
  },
  "dropshipping-supplier": {
    eyebrow: "ORDER-LEVEL CONTROL",
    title: "Keep product, packing and shipment context together.",
    image: "/images/generated/dropshipping-supplier-hero.webp",
    columns: ["Stage", "Team action", "Control", "Update"],
    rows: [
      ["Source", "Confirm supplier", "Product brief", "Quote"],
      ["Fulfill", "Check and pack", "Order rule", "Ready"],
      ["Ship", "Carrier handoff", "Final scan", "Tracking"],
    ],
    summary: [
      [
        "Supplier record",
        "Keep the quote, product reference and contact context in one order view.",
      ],
      [
        "Packing rule",
        "Store labels, inserts and parcel notes beside the SKU details.",
      ],
      [
        "Shipment handoff",
        "Track the final carrier scan and status update together.",
      ],
    ],
    note: "Example operating record for a direct-to-customer order.",
  },
};

export default function ServiceDetailRedesign({ service }) {
  const conversion = getServiceConversion(service.slug);
  const proof =
    proofContent[service.slug] || proofContent["dropshipping-supplier"];
  const related = servicePages
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);
  const processIntroBySlug = {
    "dropshipping-supplier": {
      title: "What we align before daily orders go live.",
      lead: "We keep the supplier record, packing rule and shipment handoff in one operating view so the workflow stays easy to follow.",
      points: [
        [
          "Supplier record",
          "Quote, product reference and contact details stay together.",
        ],
        ["Packing rule", "Labels, inserts and parcel notes follow the SKU."],
        [
          "Shipment handoff",
          "Final carrier scan and tracking status stay visible.",
        ],
      ],
    },
  };
  const processIntro = processIntroBySlug[service.slug] || null;
  const quoteDetailBySlug = {
    "dropshipping-supplier": {
      checklist: [
        "Product link, supplier or product reference",
        "Target markets and daily order flow",
        "Packing, branding and shipping rules",
      ],
      note: {
        title: "What we review first",
        text: "We use your product and shipping context to shape the sourcing, packing and delivery scope before the quote starts.",
      },
      titleClass: "sdr-dropshipping-quote-title",
    },
    "3pl-fulfillment-services": {
      checklist: [
        "SKU sheet or store catalog",
        "Expected inbound units and supplier sources",
        "Storage, bundle and packing rules",
      ],
      note: {
        title: "What helps us estimate faster",
        text: "If you already have SKU counts, carton totals or supplier schedules, we can scope receiving, storage and dispatch more accurately.",
      },
    },
    "pod-fulfillment": {
      checklist: [
        "Blank product or product reference",
        "Artwork status and print area",
        "Expected volume and destination markets",
      ],
      note: {
        title: "What helps us scope POD faster",
        text: "If artwork is still in progress, we can still review the blank product, sampling path, variant mix and production steps.",
      },
      titleClass: "sdr-pod-quote-title",
      titleStyle: {
        width: "max-content",
        maxWidth: "none",
        fontSize: "22px",
        lineHeight: "1.05",
        whiteSpace: "nowrap",
        textWrap: "nowrap",
        letterSpacing: "-0.02em",
      },
    },
    "private-label": {
      checklist: [
        "Product or sample link",
        "Brand elements to launch first",
        "Expected launch quantity and timing",
      ],
      note: {
        title: "What helps us scope the brand plan",
        text: "Share the product reference, the brand touchpoints that matter most and the first production target so MOQ and packaging decisions stay practical.",
      },
      titleClass: "sdr-compact-quote-title",
    },
    "product-sourcing": {
      checklist: [
        "Product reference or specification",
        "Target unit cost and order quantity",
        "Materials, packaging and must-have details",
      ],
      note: {
        title: "What helps us compare suppliers faster",
        text: "A clear brief makes quotation, sampling and shipping assumptions easier to compare on the same basis.",
      },
      titleClass: "sdr-compact-quote-title",
    },
    "automatic-order-fulfillment": {
      checklist: [
        "Store platform and current order handoff",
        "SKU map or product catalog",
        "Exception rules and shipping logic",
      ],
      note: {
        title: "What helps us map automation faster",
        text: "When the store fields, SKU records and exception handling rules are clear, the fulfillment flow is much easier to configure.",
      },
      titleClass: "sdr-compact-quote-title",
    },
    "china-fulfillment-center": {
      checklist: [
        "Supplier count or inbound sources",
        "SKU count and carton schedule",
        "Storage, QC and dispatch requirements",
      ],
      note: {
        title: "What helps us plan the warehouse layout",
        text: "Inbound flow, product mix and dispatch expectations shape how receiving, inspection and storage should be arranged.",
      },
      titleClass: "sdr-compact-quote-title",
    },
    "quality-control-inspection": {
      checklist: [
        "Product reference or specification",
        "Inspection stage and batch size",
        "Critical defect risks and acceptance standard",
      ],
      note: {
        title: "What helps us scope inspection faster",
        text: "The best QC plan starts with the product standard, the stage you want checked and the defects that matter most to customers.",
      },
      titleClass: "sdr-compact-quote-title",
    },
  };
  const quoteDetail = quoteDetailBySlug[service.slug] || {};
  const quoteChecklist = quoteDetail.checklist || [];
  const quoteNote = quoteDetail.note || null;
  const quoteTitleClass = quoteDetail.titleClass || "";

  return (
    <main className={`ff-site sdr-page sdr-page-${service.slug}`}>
      <section className="sdr-hero">
        <div className="sdr-hero-grid">
          <div className="sdr-hero-copy">
            <span className="ff-kicker">{service.eyebrow}</span>
            <h1 className={serviceTitleClass(service.title)}>
              {service.title}
            </h1>
            <p>{service.lead}</p>
            <div className="sdr-actions">
              <a className="ff-btn ff-btn-primary" href="#service-quote">
                Get a Free Quote
                <FiArrowRight />
              </a>
              <a className="ff-btn ff-btn-ghost" href="#service-process">
                See How It Works
              </a>
            </div>
            <ul>
              {service.heroPoints.map((point) => (
                <li key={point}>
                  <FiCheck />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="sdr-hero-image">
            <Image
              src={service.image}
              alt={`${service.menuTitle} in operation`}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 52vw"
            />
          </div>
        </div>
      </section>

      <section className="sdr-fit">
        <div className="container">
          <div className="sdr-section-heading">
            <span className="ff-kicker">IS THIS SERVICE RIGHT FOR YOU?</span>
            <h2>Built around the operating result you need.</h2>
          </div>
          <div className="sdr-fit-grid">
            {service.outcomes.map(([title, text], index) => (
              <article key={title}>
                <small>0{index + 1}</small>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sdr-scope">
        <div className="container">
          <div className="sdr-heading-split">
            <div>
              <span className="ff-kicker">WHAT WE HANDLE</span>
              <h2 className={serviceTitleClass(service.capabilitiesTitle)}>
                {service.capabilitiesTitle}
              </h2>
            </div>
            <p>{service.capabilitiesLead}</p>
          </div>
          <div className="sdr-scope-grid">
            {service.capabilities.map(([title, text], index) => {
              const Icon = capabilityIcons[index];
              return (
                <article key={title}>
                  <span>
                    <Icon />
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sdr-proof">
        <div className="container sdr-proof-grid">
          <figure>
            <Image
              src={proof.image}
              alt={proof.title}
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              unoptimized={proof.image.includes("/generated/")}
            />
          </figure>
          <div className="sdr-proof-content">
            <span className="ff-kicker">{proof.eyebrow}</span>
            <h2 className={serviceTitleClass(proof.title)}>{proof.title}</h2>
            {proof.summary?.length > 0 && (
              <div className="sdr-proof-summary">
                {proof.summary.map(([title, text]) => (
                  <article key={title}>
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
            )}
            <div className="sdr-proof-table">
              <div className="sdr-proof-row sdr-proof-head">
                {proof.columns.map((column) => (
                  <strong key={column}>{column}</strong>
                ))}
              </div>
              {proof.rows.map((row, index) => (
                <div className="sdr-proof-row" key={index}>
                  {row.map((cell, cellIndex) => (
                    <span key={`${cell}-${cellIndex}`}>{cell}</span>
                  ))}
                </div>
              ))}
            </div>
            <small>{proof.note}</small>
          </div>
        </div>
      </section>

      <section id="service-process" className="sdr-process">
        <div className="container">
          {processIntro ? (
            <div className="sdr-process-intro">
              <div className="sdr-process-intro-copy">
                <span className="ff-kicker">{service.processEyebrow}</span>
                <h2 className={serviceTitleClass(processIntro.title)}>
                  {processIntro.title}
                </h2>
                <p>{processIntro.lead}</p>
              </div>
              <div
                className="sdr-process-intro-panel"
                aria-label="Process context"
              >
                {processIntro.points.map(([title, text]) => (
                  <article key={title}>
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
            </div>
          ) : (
            <div className="sdr-section-heading">
              <span className="ff-kicker">{service.processEyebrow}</span>
              <h2 className={serviceTitleClass(service.processTitle)}>
                {service.processTitle}
              </h2>
              <p>{service.processLead}</p>
            </div>
          )}
          <div className="sdr-process-grid">
            {service.process.map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sdr-planning">
        <div className="container">
          <div className="sdr-heading-split">
            <div>
              <span className="ff-kicker">{service.spotlight.eyebrow}</span>
              <h2 className={serviceTitleClass(service.spotlight.title)}>
                {service.spotlight.title}
              </h2>
            </div>
            <p>{service.spotlight.lead}</p>
          </div>
          <div className="sdr-planning-grid">
            {service.spotlight.items.map(([title, text], index) => (
              <article key={title}>
                <small>0{index + 1}</small>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sdr-case">
        <div className="container sdr-case-grid">
          <div>
            <span className="ff-kicker">{conversion.caseStudy.eyebrow}</span>
            <h2 className={serviceTitleClass(conversion.caseStudy.title)}>
              {conversion.caseStudy.title}
            </h2>
            <p>
              <FiGlobe />
              {conversion.caseStudy.profile}
            </p>
          </div>
          <div className="sdr-case-board">
            <strong>THE OPERATING CHALLENGE</strong>
            <p>{conversion.caseStudy.challenge}</p>
            <ol>
              {conversion.caseStudy.plan.map((step, index) => (
                <li key={step}>
                  <span>0{index + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
            <blockquote>{conversion.caseStudy.outcome}</blockquote>
          </div>
        </div>
      </section>

      <section className="sdr-faq">
        <div className="container sdr-faq-grid">
          <div>
            <span className="ff-kicker">
              {service.slug === "dropshipping-supplier"
                ? "FREQUENTLY ASKED QUESTIONS"
                : "SERVICE FAQ"}
            </span>
            <h2
              className={serviceTitleClass(
                service.slug === "dropshipping-supplier"
                  ? "What to know before you start"
                  : `Questions about ${service.menuTitle}?`,
              )}
            >
              {service.slug === "dropshipping-supplier" ? (
                "What to know before you start"
              ) : (
                <>Questions about {service.menuTitle}?</>
              )}
            </h2>
            <p>
              {service.slug === "dropshipping-supplier"
                ? "Quick answers on sourcing, MOQ, QC and pricing."
                : "The exact scope depends on your product, markets, volume and customer promise."}
            </p>
          </div>
          <div>
            {service.faqs.slice(0, 5).map(([question, answer], index) => (
              <details
                name={`${service.slug}-faq`}
                key={question}
                open={index === 0}
              >
                <summary>
                  {question}
                  <span>+</span>
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="sdr-related">
        <div className="container">
          <div className="sdr-related-heading">
            <h2>Related services</h2>
            <Link href="/services">
              Compare all services
              <FiArrowRight />
            </Link>
          </div>
          <div className="sdr-related-grid">
            {related.map((item) => (
              <Link href={`/services/${item.slug}`} key={item.slug}>
                <span>{item.eyebrow}</span>
                <h3>{item.menuTitle}</h3>
                <p>{item.lead}</p>
                <strong>
                  Explore Service
                  <FiArrowRight />
                </strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sdr-quote">
        <div className="container sdr-quote-grid">
          <div className="sdr-quote-copy">
            <span className="ff-kicker">{conversion.form.eyebrow}</span>
            <h2
              className={`${serviceTitleClass(conversion.form.title) || ""}${quoteTitleClass ? ` ${quoteTitleClass}` : ""}`.trim()}
              style={quoteDetail.titleStyle}
            >
              {conversion.form.title}
            </h2>
            <p>{conversion.form.lead}</p>
            {quoteChecklist.length > 0 && (
              <div
                className="sdr-quote-checklist"
                aria-label="What to include in your request"
              >
                {quoteChecklist.map((item) => (
                  <div key={item}>
                    <FiCheck aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}
            {quoteNote && (
              <div className="sdr-quote-note">
                <strong>{quoteNote.title}</strong>
                <p>{quoteNote.text}</p>
              </div>
            )}
          </div>
          <ContactForm
            id="service-quote"
            className="sdr-form"
            source={`service-page:${service.slug}`}
            service={service.menuTitle}
          />
        </div>
      </section>
    </main>
  );
}
