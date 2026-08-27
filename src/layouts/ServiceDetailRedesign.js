import { servicePages } from "@config/service-page-content";
import { getServiceConversion } from "@config/service-conversion-content";
import ContactForm from "@layouts/ContactForm";
import ProductSourcingDecisionFlow from "@layouts/ProductSourcingDecisionFlow";
import ProductSourcingOfferComparison from "@layouts/ProductSourcingOfferComparison";
import ProductSourcingQuoteEvaluation from "@layouts/ProductSourcingQuoteEvaluation";
import ProductSourcingCaseStory from "@layouts/ProductSourcingCaseStory";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiCheck,
  FiClipboard,
  FiClock,
  FiGlobe,
  FiInfo,
  FiLayers,
  FiPackage,
  FiSearch,
  FiShield,
  FiTruck,
  FiUserCheck,
} from "react-icons/fi";

const capabilityIcons = [
  FiSearch,
  FiShield,
  FiPackage,
  FiClipboard,
  FiGlobe,
  FiClock,
];
const outcomeIcons = [FiUserCheck, FiLayers, FiPackage, FiTruck];
const warehouseFlowIcons = [FiPackage, FiSearch, FiLayers, FiTruck];
const warehouseZoneProcessIcons = [FiPackage, FiSearch];
const warehouseProofIcons = [FiPackage, FiSearch, FiTruck];
const exceptionLaneIcons = [FiClipboard, FiLayers, FiUserCheck, FiTruck];
const serviceTitleClass = (title) =>
  title.length > 48 ? "sdr-title-long" : undefined;

const proofContent = {
  "product-sourcing": {
    eyebrow: "EXAMPLE SUPPLIER COMPARISON",
    title: "Compare supplier offers.",
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
    title: "Turn findings into a release call.",
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
    title: "Inventory stays visible.",
    image: "/images/generated/3pl-fulfillment-hero.webp",
    columns: ["SKU", "Received", "Available", "Status"],
    rows: [
      ["JW-BLK-S", "500", "472", "Available"],
      ["JW-BLK-M", "500", "86", "Low stock"],
      ["JW-BLK-L", "300", "0", "Reorder"],
    ],
    note: "Illustrative inventory view — final workflow depends on warehouse scope.",
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
    image: "/images/brand-showcase/paper-packaging-detail.jpg",
    columns: ["Brand element", "Typical input", "MOQ impact", "Stage"],
    rows: [
      ["Printed insert", "Artwork", "Low", "Start"],
      ["Custom mailer", "Size + print", "Medium", "Scale"],
      ["Product label", "Product spec", "Varies", "Brand"],
    ],
    note: "MOQ and timing are confirmed after material and supplier review.",
  },
  "automatic-order-fulfillment": {
    eyebrow: "ORDER CONTROL LOG",
    title: "See which orders can move.",
    image: "/images/generated/automatic-fulfillment-hero.webp",
    columns: ["Signal", "Status", "Action", "Output"],
    rows: [
      ["New order", "Mapped", "Release", "Ready"],
      ["Address", "Missing", "Hold", "Review"],
      ["Shipped", "Valid", "Sync", "Tracking"],
    ],
    summary: [
      ["Fast lane", "Orders with mapped SKUs and complete fields can move without manual chasing."],
      ["Hold lane", "Orders with missing details stay visible before they reach packing."],
      ["Sync lane", "Released orders keep tracking and store status aligned after handoff."],
    ],
    note: "Example control log. Connection methods depend on the store platform.",
  },
  "china-fulfillment-center": {
    eyebrow: "WAREHOUSE CONTROL ZONES",
    title: "Map each handoff before it ships.",
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
    "automatic-order-fulfillment": {
      leftEyebrow: "AUTOMATION CASE",
      leftTitle: "Normal orders need a lane.",
      leftLead: "Shopify store replacing spreadsheet warehouse handoffs",
      title: "Map your order lane.",
      lead: "Tell us where orders start, what data is missing today and how tracking should return after dispatch.",
      points: [
        ["01", "Map SKUs to warehouse records"],
        ["02", "Split exception reasons early"],
        ["03", "Return tracking through one handoff"],
      ],
      noteTitle: "What helps us map the lane",
      noteLead:
        "Store fields, SKU records and hold rules make the automatic route easier to test before launch.",
    },
  };
  const processIntro = processIntroBySlug[service.slug] || null;
  const dropshipProcessStageLabels = ["Audit", "Supplier", "Rules", "Test", "Live"];
  const fitIntroBySlug = {
    "china-fulfillment-center": {
      title: "Built for inbound stock and outbound export.",
      lead: "Use this service when factory goods, brand materials and customer orders all need one warehouse flow.",
      tag: "WAREHOUSE FIT",
      asideTitle: "BEST FIT",
      asideLead: "When every handoff needs a place, a lane and a clear owner.",
    },
    "product-sourcing": {
      title: "Built for supplier decisions.",
      lead: "Each pass removes suppliers that cannot match the product brief, commercial terms or fulfillment requirements.",
      noteTitle: "WHAT CHANGES THE QUOTE",
      noteLead:
        "Use one product brief so price, MOQ, sample notes and lead time stay on the same basis.",
    },
    "automatic-order-fulfillment": {
      title: "Clean orders take the fast lane.",
      lead: "Normal orders move in one direction. Exceptions split out early so they do not block or corrupt the daily flow.",
      laneTags: ["Mapped", "Held", "Synced"],
    },
    "quality-control-inspection": {
      title: "Built for batches that need proof before release.",
      lead: "Use this service when the warehouse needs a documented pass, review or hold decision before inventory moves on.",
      tag: "INSPECTION FIT",
      asideTitle: "BEST FIT",
      asideLead: "When product risk needs a visible standard and a clear next step.",
    },
  };
  const fitIntro = fitIntroBySlug[service.slug] || null;
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
        "Store platform and order source",
        "SKU map or product catalog",
        "Hold reasons and tracking method",
      ],
      note: {
        title: "What helps us map the lane",
        text: "Store fields, SKU records and hold rules make the automatic route easier to test before launch.",
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
      <section
        id={service.slug === "automatic-order-fulfillment" ? "automation-order-hero" : undefined}
        className={`sdr-hero${service.slug === "china-fulfillment-center" ? " sdr-warehouse-hero" : ""}`}
      >
        <div className={`sdr-hero-grid${service.slug === "china-fulfillment-center" ? " sdr-warehouse-hero-grid" : ""}`}>
          <div className="sdr-hero-copy">
            <span className="ff-kicker">{service.eyebrow}</span>
            <h1 className={serviceTitleClass(service.title)}>
              {service.slug === "product-sourcing" ? (
                <>
                  Compare <span>suppliers</span> first.
                </>
              ) : (
                service.title
              )}
            </h1>
            <p>{service.lead}</p>
            <div className="sdr-actions">
              <a className="ff-btn ff-btn-primary" href="#service-quote">
                Get a Free Quote
                <FiArrowRight />
              </a>
              <a className="ff-btn ff-btn-ghost" href="#service-process">
                See How It Works
                {service.slug === "product-sourcing" ? <FiArrowRight /> : null}
              </a>
            </div>
            {service.slug === "dropshipping-supplier" ? (
              <div className="sdr-dropship-flow" aria-label="Dropshipping order workflow">
                {[
                  ["01", "Source", "supplier + product"],
                  ["02", "Check", "QC before dispatch"],
                  ["03", "Pack", "rules by SKU"],
                  ["04", "Ship", "tracking returned"],
                ].map(([number, title, text]) => (
                  <span key={title}>
                    <b>{number}</b>
                    <strong>{title}</strong>
                    <small>{text}</small>
                  </span>
                ))}
              </div>
            ) : null}
            <ul className={service.slug === "automatic-order-fulfillment" ? "sdr-automation-loop" : undefined}>
              {service.heroPoints.map((point) => (
                <li key={point}>
                  <FiCheck />
                  {service.slug === "automatic-order-fulfillment" ? <span>{point}</span> : point}
                </li>
              ))}
            </ul>
          </div>
          <div className={`sdr-hero-image${service.slug === "china-fulfillment-center" ? " sdr-warehouse-hero-image" : ""}`}>
            <Image
              src={service.image}
              alt={`${service.menuTitle} in operation`}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 52vw"
            />
            {service.slug === "dropshipping-supplier" ? (
              <div className="sdr-dropship-record" aria-hidden="true">
                <div>
                  <span>ORDER FLOW</span>
                  <strong>Product link received</strong>
                </div>
                <ol>
                  <li><b>Supplier</b><span>confirmed</span></li>
                  <li><b>QC</b><span>before dispatch</span></li>
                  <li><b>Tracking</b><span>returned</span></li>
                </ol>
              </div>
            ) : service.slug === "product-sourcing" ? (
              <div className="sdr-sourcing-proof-card" aria-hidden="true">
                <span>SHORTLIST BASIS</span>
                <strong>4 supplier offers</strong>
                <small>Compared by cost, MOQ, lead time and sample notes.</small>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="sdr-fit">
        <div className="container">
          {service.slug === "dropshipping-supplier" ? (
            <div className="sdr-fit-intro">
              <div>
                <span className="ff-kicker">IS THIS SERVICE RIGHT FOR YOU?</span>
                <h2>Built around the operating result you need.</h2>
              </div>
              <aside>
                <span>BEST STARTING POINT</span>
                <strong>When supplier, QC, packing and shipping need one owner.</strong>
                <p>Use this service when your store needs a practical operating partner behind daily direct-to-customer orders.</p>
              </aside>
            </div>
          ) : service.slug === "3pl-fulfillment-services" ? (
            <div className="sdr-fit-intro sdr-3pl-fit-intro">
              <div>
                <span className="ff-kicker">IS THIS SERVICE RIGHT FOR YOU?</span>
                <h2>Built for daily stock movement.</h2>
                <p>Use this service when received inventory, packing rules and dispatch updates need one organized warehouse routine.</p>
              </div>
              <aside>
                <span>BEST FIT</span>
                <strong>Inventory held in China, orders shipped one by one.</strong>
              </aside>
            </div>
          ) : service.slug === "product-sourcing" ? (
            <div className="sdr-fit-intro sdr-product-fit-intro">
              <div className="sdr-product-progress" aria-label="Four-step supplier decision process">
                {[1, 2, 3, 4].map((step) => (
                  <span key={step} aria-hidden="true" />
                ))}
              </div>
              <div className="sdr-product-fit-copy">
                <span className="ff-kicker">DECISION FILTER</span>
                <h2>{fitIntroBySlug["product-sourcing"].title}</h2>
                <p>{fitIntroBySlug["product-sourcing"].lead}</p>
              </div>
              <aside>
                <div className="sdr-product-note-title">
                  <FiInfo aria-hidden="true" />
                  <span>{fitIntroBySlug["product-sourcing"].noteTitle}</span>
                </div>
                <strong>{fitIntroBySlug["product-sourcing"].noteLead}</strong>
              </aside>
            </div>
          ) : service.slug === "automatic-order-fulfillment" ? (
            <div className="sdr-fit-intro sdr-auto-fit-intro">
              <div className="sdr-auto-fit-copy">
                <span className="ff-kicker">ORDER DATA FLOW</span>
                <p>{fitIntroBySlug["automatic-order-fulfillment"].lead}</p>
              </div>
              <div className="sdr-auto-fit-panel">
                <h2>{fitIntroBySlug["automatic-order-fulfillment"].title}</h2>
                <div className="sdr-auto-fit-tags" aria-hidden="true">
                  {fitIntroBySlug["automatic-order-fulfillment"].laneTags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ) : fitIntro ? (
            <div
              className={`sdr-fit-intro ${
                service.slug === "quality-control-inspection"
                  ? "sdr-qc-fit-intro"
                  : "sdr-china-fit-intro"
              }`}
            >
              <div>
                <span className="ff-kicker">{fitIntro.tag}</span>
                <h2>{fitIntro.title}</h2>
                <p>{fitIntro.lead}</p>
              </div>
              <aside>
                <div className="sdr-china-fit-note-title">
                  {service.slug === "china-fulfillment-center" ? <FiInfo aria-hidden="true" /> : null}
                  <span>{fitIntro.asideTitle}</span>
                </div>
                <strong>{fitIntro.asideLead}</strong>
              </aside>
            </div>
          ) : (
            <div className="sdr-section-heading">
              <span className="ff-kicker">IS THIS SERVICE RIGHT FOR YOU?</span>
              <h2>
                {service.slug === "product-sourcing"
                  ? "Built for supplier decisions."
                  : service.slug === "automatic-order-fulfillment"
                  ? "Built for clean order flow."
                  : "Built around the operating result you need."}
              </h2>
            </div>
          )}
          <div className={service.slug === "china-fulfillment-center" ? "sdr-fit-timeline" : "sdr-fit-grid"}>
            {service.slug === "china-fulfillment-center" ? <span className="sdr-fit-timeline-particle" aria-hidden="true" /> : null}
            {service.outcomes.map(([title, text], index) => {
              const Icon = outcomeIcons[index % outcomeIcons.length];
              return (
              <article key={title} style={service.slug === "china-fulfillment-center" ? { "--fit-step-index": index } : undefined}>
                <div className="sdr-fit-card-top">
                  <small>0{index + 1}</small>
                  {service.slug === "china-fulfillment-center" ? (
                    <span className="sdr-fit-step-icon" aria-hidden="true"><Icon /></span>
                  ) : ["dropshipping-supplier", "3pl-fulfillment-services", "product-sourcing"].includes(service.slug) ? <Icon aria-hidden="true" /> : null}
                </div>
                <div className={service.slug === "china-fulfillment-center" ? "sdr-fit-step-copy" : undefined}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                {service.slug === "dropshipping-supplier" ? (
                  <strong>{["Ownership", "Rules", "Branding", "Tracking"][index]}</strong>
                ) : service.slug === "3pl-fulfillment-services" ? (
                  <strong>{["Inbound", "Stock", "Packing", "Dispatch"][index]}</strong>
                ) : null}
              </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id={service.slug === "automatic-order-fulfillment" ? "automation-capability-route" : undefined} className={`sdr-scope${service.slug === "china-fulfillment-center" ? " sdr-warehouse-chain" : ""}`}>
        <div className="container">
          <div className={`sdr-heading-split${service.slug === "china-fulfillment-center" ? " sdr-warehouse-chain-head" : ""}`}>
            <div>
              <span className="ff-kicker">WHAT WE HANDLE</span>
              <h2 className={serviceTitleClass(service.capabilitiesTitle)}>
                {service.capabilitiesTitle}
              </h2>
            </div>
            {service.slug === "china-fulfillment-center" ? (
              <aside className="sdr-warehouse-chain-note">
                <FiPackage aria-hidden="true" />
                <p>{service.capabilitiesLead}</p>
              </aside>
            ) : <p>{service.capabilitiesLead}</p>}
          </div>
          {service.slug === "dropshipping-supplier" ? (
            <div className="sdr-scope-hub" aria-hidden="true">
              <span>ONE OPERATING WORKFLOW</span>
              <strong>Source, check, pack and ship with one accountable handoff.</strong>
            </div>
          ) : null}
          {service.slug === "automatic-order-fulfillment" ? (
            <div className="sdr-order-route" aria-label="Order route capabilities">
              <svg className="sdr-order-route-pipes" viewBox="0 0 1200 560" preserveAspectRatio="none" aria-hidden="true">
                <path className="sdr-route-pipe-main" d="M0 155 H920 C980 155 980 155 1040 155 H1200" />
                <path className="sdr-route-pipe-return" d="M0 400 H315 C360 400 365 365 365 330 V155" />
                <path className="sdr-route-pipe-feedback" d="M0 470 H440 C495 470 510 430 510 380 V155" />
                <path className="sdr-route-pipe-exception" d="M650 155 C700 155 710 188 710 230 V560" />
              </svg>
              <span className="sdr-order-route-dots sdr-order-route-dots-left" aria-hidden="true" />
              <span className="sdr-order-route-dots sdr-order-route-dots-right" aria-hidden="true" />
              {service.capabilities.map(([title, text], index) => {
                const Icon = capabilityIcons[index];
                return <article key={title} className={`sdr-order-route-node sdr-order-route-node-${index + 1}`}>
                  <span className="sdr-order-route-icon"><Icon aria-hidden="true" /></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <span className="sdr-order-route-visual" aria-hidden="true">
                    <Icon /><Icon /><Icon />
                  </span>
                </article>;
              })}
              <span className="sdr-order-route-particle" aria-hidden="true" />
              <span className="sdr-order-route-particle sdr-order-route-particle-two" aria-hidden="true" />
              <span className="sdr-order-route-status sdr-route-status-secure" aria-hidden="true"><FiShield /></span>
              <span className="sdr-order-route-status sdr-route-status-alert" aria-hidden="true"><FiInfo /></span>
            </div>
          ) : service.slug === "china-fulfillment-center" ? (
            <div className="sdr-warehouse-chain-flow" aria-label="Warehouse zones A to F">
              <span className="sdr-warehouse-chain-particle" aria-hidden="true" />
              {service.capabilities.map(([title, text], index) => {
                const Icon = capabilityIcons[index];
                const zone = String.fromCharCode(65 + index);
                return (
                  <article
                    key={title}
                    className="sdr-warehouse-chain-node"
                    style={{ "--warehouse-zone-index": index }}
                  >
                    <span className="sdr-warehouse-chain-anchor" aria-hidden="true">{zone}</span>
                    <div className="sdr-warehouse-chain-card">
                      <span className="sdr-warehouse-chain-icon" aria-hidden="true"><Icon /></span>
                      <div>
                        <h3>{title}</h3>
                        <p>{text}</p>
                      </div>
                      <small>ZONE {zone}</small>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : <div className="sdr-scope-grid">
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
          </div>}
        </div>
      </section>

      <section className="sdr-proof">
        {service.slug === "automatic-order-fulfillment" ? (
          <div className="container sdr-order-control">
            <figure className="sdr-order-control-visual">
              <Image src={proof.image} alt={proof.title} fill sizes="(max-width: 900px) 100vw, 45vw" unoptimized={proof.image.includes("/generated/")} />
              <figcaption><span>{proof.eyebrow}</span><strong>Order control log</strong></figcaption>
            </figure>
            <div className="sdr-order-control-panel">
              <span className="ff-kicker">{proof.eyebrow}</span>
              <h2>{proof.title}</h2>
              <div className="sdr-order-lanes">
                {proof.summary.map(([title, text], index) => {
                  const Icon = outcomeIcons[index];
                  return <article className={`sdr-order-lane sdr-order-lane-${index + 1}`} key={title}>
                    <span><Icon aria-hidden="true" /></span><div><h3>{title}</h3><p>{text}</p></div>
                  </article>;
                })}
              </div>
              <div className="sdr-order-control-table-wrap">
                <table className="sdr-order-control-table">
                  <thead><tr>{proof.columns.map((column) => <th key={column}>{column}</th>)}</tr></thead>
                  <tbody>{proof.rows.map((row, index) => <tr className={`sdr-order-status-row sdr-order-status-row-${index + 1}`} key={index}>{row.map((cell, cellIndex) => <td key={`${cell}-${cellIndex}`}>{cellIndex === 1 ? <span>{cell}</span> : cell}</td>)}</tr>)}</tbody>
                </table>
              </div>
              <small className="sdr-order-control-note">{proof.note}</small>
            </div>
          </div>
        ) : service.slug === "product-sourcing" ? (
          <div className="container">
            <ProductSourcingOfferComparison proof={proof} />
          </div>
        ) : (
        <div className={`container sdr-proof-grid${service.slug === "china-fulfillment-center" ? " sdr-warehouse-control" : ""}`}>
          <figure className={service.slug === "china-fulfillment-center" ? "sdr-warehouse-control-visual" : undefined}>
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
              {proof.rows.map((row, index) => {
                const ZoneIcon = warehouseProofIcons[index] || FiPackage;
                return (
                <div className="sdr-proof-row" key={index} style={{ "--row-index": index }}>
                  {row.map((cell, cellIndex) => (
                    <span key={`${cell}-${cellIndex}`}>
                      {service.slug === "china-fulfillment-center" && cellIndex === 0 ? (
                        <span className="sdr-proof-zone-label">
                          <ZoneIcon aria-hidden="true" />
                          {cell}
                        </span>
                      ) : (
                        cell
                      )}
                    </span>
                  ))}
                </div>
                );
              })}
            </div>
            <small>{proof.note}</small>
          </div>
        </div>
        )}
      </section>

      {service.slug !== "china-fulfillment-center" ? (
      <section id="service-process" className="sdr-process">
        <div className="container">
          {service.slug === "automatic-order-fulfillment" ? (
            <div id="automation-order-flow" className="sdr-order-flow" aria-label="Order data flow">
              <header className="sdr-order-flow-head">
                <div>
                  <span className="ff-kicker">{service.processEyebrow}</span>
                  <p>{service.processLead}</p>
                </div>
                <div>
                  <h2>{service.processTitle}</h2>
                  <div className="sdr-order-flow-states" aria-label="Order states">
                    {[
                      ["mapped", "Mapped"],
                      ["held", "Held"],
                      ["synced", "Synced"],
                    ].map(([state, label]) => (
                      <button key={state} type="button" className={`sdr-order-state sdr-order-state-${state}`}>
                        <span aria-hidden="true" />
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
              </header>
              <div className="sdr-order-flow-track">
                {[0, 1, 2, 3].map((index) => {
                  const [title, text] = service.outcomes[index];
                  const state = index === 0 ? "mapped" : index === 2 ? "held" : index === 3 ? "synced" : "validation";
                  const Icon = exceptionLaneIcons[index];
                  return (
                  <article key={title} data-flow-state={state} className={`sdr-order-flow-node sdr-order-flow-node-${index + 1}`}>
                    <span className="sdr-order-flow-index">0{index + 1}</span>
                    <span className="sdr-order-flow-icon" aria-hidden="true"><Icon /></span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                  );
                })}
                <span className="sdr-order-flow-particle sdr-order-flow-particle-a" aria-hidden="true" />
                <span className="sdr-order-flow-particle sdr-order-flow-particle-b" aria-hidden="true" />
                <span className="sdr-order-flow-particle sdr-order-flow-particle-c" aria-hidden="true" />
                <span className="sdr-order-branch-particle" aria-hidden="true" />
                <svg className="sdr-order-flow-tail" viewBox="0 0 300 190" aria-hidden="true">
                  <path d="M0 82 C72 82 77 22 170 22 H296" />
                  <path d="M0 92 H296" />
                  <path d="M0 102 C72 102 77 166 170 166 H296" />
                  <g className="sdr-order-tail-parcels">
                    <rect x="72" y="69" width="26" height="20" rx="3" />
                    <rect x="142" y="26" width="26" height="20" rx="3" />
                    <rect x="174" y="111" width="26" height="20" rx="3" />
                    <rect x="244" y="78" width="26" height="20" rx="3" />
                  </g>
                </svg>
              </div>
            </div>
          ) : service.slug === "product-sourcing" ? (
            <ProductSourcingDecisionFlow
              eyebrow={service.processEyebrow}
              title={service.processTitle}
              lead={service.processLead}
              steps={service.process}
            />
          ) : service.slug === "dropshipping-supplier" && processIntro ? (
            <div className="sdr-dropship-launch" aria-label="Partnership launch process">
              <aside className="sdr-dropship-launch-copy">
                <div className="sdr-dropship-launch-icon" aria-hidden="true">
                  <FiGlobe />
                </div>
                <span className="ff-kicker">{service.processEyebrow}</span>
                <h2>
                  Move from a product brief to a{" "}
                  <span>daily order routine.</span>
                </h2>
                <p>{service.processLead}</p>
                <ul className="sdr-dropship-launch-points" aria-label="Core alignment points">
                  {processIntro.points.map(([title, text]) => (
                    <li key={title}>
                      <FiCheck aria-hidden="true" />
                      <span>
                        <strong>{title}</strong>
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
              </aside>
              <div className="sdr-dropship-launch-steps" aria-label="Launch stages">
                {service.process.map(([number, title, text], index) => {
                  const statusClass =
                    index < 3 ? "is-complete" : index === 3 ? "is-active" : "is-pending";
                  return (
                    <article
                      className={`sdr-dropship-launch-step ${statusClass}`}
                      key={number}
                    >
                      <span className="sdr-dropship-step-badge">
                        <b>{number}</b>
                        <small aria-hidden="true">
                          {index < 3 ? <FiCheck /> : null}
                        </small>
                      </span>
                      <h3>{title}</h3>
                      <p>{text}</p>
                      <em>{dropshipProcessStageLabels[index]}</em>
                    </article>
                  );
                })}
              </div>
            </div>
          ) : processIntro ? (
            <div className="sdr-process-intro sdr-auto-process-intro">
              <article className="sdr-auto-process-card" aria-label="Automation case">
                <span className="ff-kicker">{processIntro.leftEyebrow}</span>
                <h2>{processIntro.leftTitle}</h2>
                <div className="sdr-auto-process-card-foot">
                  <p>{processIntro.leftLead}</p>
                </div>
              </article>
              <div className="sdr-auto-process-copy">
                <span className="ff-kicker">{service.processEyebrow}</span>
                <h2 className={serviceTitleClass(processIntro.title)}>
                  {processIntro.title}
                </h2>
                <p>{processIntro.lead}</p>
                <ol className="sdr-auto-process-list" aria-label="Order lane steps">
                  {processIntro.points.map(([number, text]) => (
                    <li key={number}>
                      <span>{number}</span>
                      <p>{text}</p>
                    </li>
                  ))}
                </ol>
                <div className="sdr-auto-process-note">
                  <strong>{processIntro.noteTitle}</strong>
                  <p>{processIntro.noteLead}</p>
                </div>
              </div>
            </div>
          ) : service.slug === "china-fulfillment-center" ? (
            <div className="sdr-zone-process-head">
              <div>
                <span className="ff-kicker">{service.processEyebrow}</span>
                <p>{service.processLead}</p>
              </div>
              <h2 className={serviceTitleClass(service.processTitle)}>
                {service.processTitle}
              </h2>
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
          {!["product-sourcing", "dropshipping-supplier", "automatic-order-fulfillment"].includes(service.slug) ? (
            service.slug === "china-fulfillment-center" ? (
              <div className="sdr-process-grid sdr-zone-process-flow" aria-label="Warehouse zone flow">
                {service.process.slice(0, 2).map(([number, title, text], index) => {
                  const Icon = warehouseZoneProcessIcons[index] || FiPackage;
                  return (
                    <article key={number} style={{ "--zone-index": index }}>
                      <span className="sdr-zone-process-node">{number.replace("ZONE ", "")}</span>
                      <div className="sdr-zone-process-card">
                        <span className="sdr-zone-process-icon" aria-hidden="true">
                          <Icon />
                        </span>
                        <div>
                          <h3>{title}</h3>
                          <p>{text}</p>
                        </div>
                        <small>{number}</small>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="sdr-process-grid">
                {service.process.map(([number, title, text]) => (
                  <article key={number}>
                    <span>{number}</span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
            )
          ) : null}
        </div>
      </section>
      ) : null}

      <section className="sdr-planning">
        <div className="container">
          {service.slug === "product-sourcing" ? (
            <ProductSourcingQuoteEvaluation spotlight={service.spotlight} />
          ) : service.slug === "automatic-order-fulfillment" ? (
            <div id="automation-exception-lane" className="sdr-exception-lane">
              <div className="sdr-exception-copy">
                <span className="ff-kicker">{service.spotlight.eyebrow}</span>
                <h2>{service.spotlight.title}</h2>
                <p>{service.spotlight.lead}</p>
              </div>
              <ol className="sdr-exception-track" aria-label="Exception resolution lane">
                {service.spotlight.items.map(([title, text], index) => {
                  const Icon = exceptionLaneIcons[index];
                  return (
                    <li key={title} className={`sdr-exception-step sdr-exception-step-${index + 1}`}>
                      <span className="sdr-exception-number">0{index + 1}</span>
                      <span className="sdr-exception-icon" aria-hidden="true"><Icon /></span>
                      <div>
                        <h3>{title}</h3>
                        <p>{text}</p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          ) : (
          <>
          <div className={service.slug === "china-fulfillment-center" ? "sdr-zone-story" : "sdr-heading-split"}>
            <div>
              <span className="ff-kicker">{service.spotlight.eyebrow}</span>
              <h2 className={serviceTitleClass(service.spotlight.title)}>
                {service.spotlight.title}
              </h2>
            </div>
            <p>{service.spotlight.lead}</p>
          </div>
          <div className={service.slug === "china-fulfillment-center" ? "sdr-planning-grid sdr-zone-timeline" : "sdr-planning-grid"}>
            {service.spotlight.items.map(([title, text], index) => (
              <article key={title} style={{ "--zone-index": index }}>
                {service.slug === "china-fulfillment-center" ? (
                  <>
                    <small>0{index + 1}</small>
                    <span className="sdr-zone-icon" aria-hidden="true">
                      {(() => { const Icon = warehouseFlowIcons[index]; return <Icon />; })()}
                    </span>
                    <div><h3>{title}</h3><p>{text}</p></div>
                  </>
                ) : (
                  <><small>0{index + 1}</small><h3>{title}</h3><p>{text}</p></>
                )}
              </article>
            ))}
          </div>
          </>
          )}
        </div>
      </section>

      {service.slug !== "pod-fulfillment" ? (
        <section className={`sdr-case${service.slug === "china-fulfillment-center" ? " sdr-warehouse-case" : ""}`}>
          {service.slug === "china-fulfillment-center" ? (
            <div className="container sdr-warehouse-case-grid">
              <aside className="sdr-warehouse-case-story">
                <span className="ff-kicker">{conversion.caseStudy.eyebrow}</span>
                <h2>{conversion.caseStudy.title}</h2>
                <p>{conversion.caseStudy.profile}</p>
              </aside>
              <div className="sdr-warehouse-case-content">
                <header className="sdr-warehouse-case-challenge">
                  <strong>THE OPERATING CHALLENGE</strong>
                  <p>{conversion.caseStudy.challenge}</p>
                </header>
                <div className="sdr-warehouse-case-resolution">
                  <ol className="sdr-warehouse-case-timeline">
                    {conversion.caseStudy.plan.map((step, index) => (
                      <li key={step} style={{ "--case-step-index": index }}>
                        <span>0{index + 1}</span>
                        <div>
                          <h3>{step}</h3>
                          <p>{conversion.caseStudy.evidence[index]}</p>
                        </div>
                      </li>
                    ))}
                    <span className="sdr-warehouse-case-particle" aria-hidden="true" />
                  </ol>
                  <blockquote className="sdr-warehouse-case-outcome">
                    {conversion.caseStudy.outcome}
                  </blockquote>
                </div>
              </div>
            </div>
          ) : service.slug === "product-sourcing" ? (
            <div className="container">
              <ProductSourcingCaseStory caseStudy={conversion.caseStudy} />
            </div>
          ) : service.slug === "automatic-order-fulfillment" ? (
            <div id="automation-case-route" className="container sdr-automation-case">
              <aside className="sdr-automation-case-story">
                <span className="ff-kicker">{conversion.caseStudy.eyebrow}</span>
                <h2>{conversion.caseStudy.title}</h2>
                <p>{conversion.caseStudy.profile}</p>
                <div className="sdr-automation-route-map" aria-label="Store orders follow a clean route to the warehouse while exceptions branch for review">
                  <span className="sdr-automation-route-node sdr-route-store"><FiGlobe aria-hidden="true" /><small>STORE</small></span>
                  <span className="sdr-automation-route-node sdr-route-record"><FiClipboard aria-hidden="true" /><small>ORDER DATA</small></span>
                  <span className="sdr-automation-route-node sdr-route-hold"><FiInfo aria-hidden="true" /><small>REVIEW</small></span>
                  <span className="sdr-automation-route-node sdr-route-warehouse"><FiPackage aria-hidden="true" /><small>WAREHOUSE</small></span>
                  <span className="sdr-automation-route-line sdr-route-line-main" aria-hidden="true" />
                  <span className="sdr-automation-route-line sdr-route-line-branch" aria-hidden="true" />
                </div>
              </aside>
              <div className="sdr-automation-case-content">
                <header>
                  <strong>THE OPERATING CHALLENGE</strong>
                  <p>{conversion.caseStudy.challenge}</p>
                </header>
                <ol className="sdr-automation-case-steps">
                  {conversion.caseStudy.plan.map((step, index) => {
                    const Icon = [FiClipboard, FiLayers, FiTruck][index];
                    return (
                      <li key={step}>
                        <span className="sdr-automation-case-icon"><Icon aria-hidden="true" /></span>
                        <small>0{index + 1}</small>
                        <h3>{step}</h3>
                        <p>{conversion.caseStudy.evidence[index]}</p>
                      </li>
                    );
                  })}
                </ol>
                <blockquote>
                  <strong>THE EXCEPTION-SAFE ROUTE</strong>
                  <p>{conversion.caseStudy.outcome}</p>
                  <FiArrowRight aria-hidden="true" />
                </blockquote>
              </div>
            </div>
          ) : (
          <div className="container sdr-case-grid">
            <div>
              <span className="ff-kicker">{conversion.caseStudy.eyebrow}</span>
              <h2 className={serviceTitleClass(conversion.caseStudy.title)}>
                {conversion.caseStudy.title}
              </h2>
              <p>
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
          )}
        </section>
      ) : null}

      <section className="sdr-faq">
        <div className="container sdr-faq-grid">
          <div>
            <span className="ff-kicker">
              {["dropshipping-supplier", "3pl-fulfillment-services", "pod-fulfillment", "private-label", "automatic-order-fulfillment"].includes(service.slug)
                ? "FREQUENTLY ASKED QUESTIONS"
                : service.slug === "product-sourcing"
                ? "PRODUCT SOURCING"
                : "SERVICE FAQ"}
            </span>
            <h2
              className={serviceTitleClass(
                service.slug === "product-sourcing"
                  ? "SERVICE FAQ"
                  :
                service.slug === "automatic-order-fulfillment"
                  ? "Automation questions"
                  :
                ["dropshipping-supplier", "3pl-fulfillment-services", "pod-fulfillment", "private-label"].includes(service.slug)
                  ? "What to know before you start"
                  : `Questions about ${service.menuTitle}?`,
              )}
            >
              {service.slug === "product-sourcing" ? (
                "SERVICE FAQ"
              ) : service.slug === "automatic-order-fulfillment" ? (
                "Automation questions"
              ) : ["dropshipping-supplier", "3pl-fulfillment-services", "pod-fulfillment", "private-label"].includes(service.slug) ? (
                "What to know before you start"
              ) : (
                <>Questions about {service.menuTitle}?</>
              )}
            </h2>
            <p>
              {service.slug === "product-sourcing"
                ? "The scope depends on product detail, supplier depth and sample decisions."
                : service.slug === "automatic-order-fulfillment"
                ? "The setup depends on platform access, SKU records and exception rules."
                : ["dropshipping-supplier", "3pl-fulfillment-services", "pod-fulfillment", "private-label"].includes(service.slug)
                ? "Quick answers about service scope, suppliers, order volume, quality checks and branded packaging."
                : "The exact scope depends on your product, markets, volume and customer promise."}
            </p>
          </div>
          <div>
            {service.faqs.slice(0, 5).map(([question, answer], index) => (
              <details
                name={`${service.slug}-faq`}
                key={question}
                open={index === 0 && !["pod-fulfillment", "private-label", "product-sourcing"].includes(service.slug)}
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
            {related.map((item, index) => (
              <Link href={`/services/${item.slug}`} key={item.slug}>
                <small>0{index + 1}</small>
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
