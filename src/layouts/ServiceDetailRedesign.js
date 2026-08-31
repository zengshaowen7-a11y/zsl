import { getServiceDetailContent } from "@/content/service-detail";
import { getServicePages } from "@config/service-page-content";
import { getServiceConversion } from "@config/service-conversion-content";
import ContactForm from "@layouts/ContactForm";
import ProductSourcingDecisionFlow from "@layouts/ProductSourcingDecisionFlow";
import ProductSourcingOfferComparison from "@layouts/ProductSourcingOfferComparison";
import ProductSourcingQuoteEvaluation from "@layouts/ProductSourcingQuoteEvaluation";
import ProductSourcingCaseStory from "@layouts/ProductSourcingCaseStory";
import WarehouseControlZones from "@layouts/WarehouseControlZones";
import QualityControlHero from "@layouts/QualityControlHero";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
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


export default function ServiceDetailRedesign({ service, locale = "en" }) {
  const t = useTranslations("ServiceDetail");
  const {
    qcOutcomeDetails,
    qcProcessOutputs,
    proofContent,
    processIntroBySlug,
    dropshipProcessStageLabels,
    fitIntroBySlug,
    quoteDetailBySlug,
  } = getServiceDetailContent(locale);
  const conversion = getServiceConversion(service.slug, locale);
  const servicePages = getServicePages(locale);
  const proof =
    proofContent[service.slug] || proofContent["dropshipping-supplier"];
  const related = servicePages
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);
    const processIntro = processIntroBySlug[service.slug] || null;
      const fitIntro = fitIntroBySlug[service.slug] || null;
    const quoteDetail = quoteDetailBySlug[service.slug] || {};
  const quoteChecklist = quoteDetail.checklist || [];
  const quoteNote = quoteDetail.note || null;
  const quoteTitleClass = quoteDetail.titleClass || "";

  return (
    <main className={`ff-site sdr-page sdr-page-${service.slug}`}>
      {service.slug === "quality-control-inspection" ? (
        <QualityControlHero service={service} />
      ) : (
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
                {t("getQuote")}
                <FiArrowRight />
              </a>
              <a className="ff-btn ff-btn-ghost" href="#service-process">
                {t("seeHow")}
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
            {service.slug === "china-fulfillment-center" ? (
              <div className="sdr-warehouse-hero-map" aria-hidden="true">
                <div className="sdr-warehouse-hero-map-label">
                  <span>WAREHOUSE FLOW</span>
                  <strong>One visible route</strong>
                </div>
                <div className="sdr-warehouse-hero-route">
                  {["RECEIVE", "CHECK", "STORE", "BUILD", "SHIP"].map((stage, index) => (
                    <span key={stage} style={{ "--hero-route-index": index }}>
                      <i>{String(index + 1).padStart(2, "0")}</i>
                      <b>{stage}</b>
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
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
      )}

      {service.slug !== "automatic-order-fulfillment" ? (
      <section className="sdr-fit">
        <div className="container">
          {service.slug === "dropshipping-supplier" ? (
            <div className="sdr-fit-intro">
              <div>
                <span className="ff-kicker">{t("fitKicker")}</span>
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
                <span className="ff-kicker">{t("fitKicker")}</span>
                <h2>Built for daily stock movement.</h2>
                <p>Use this service when received inventory, packing rules and dispatch updates need one organized warehouse routine.</p>
              </div>
              <aside>
                <span>{t("bestFit")}</span>
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
                {service.slug === "quality-control-inspection" ? (
                  <div className="sdr-qc-fit-proof" aria-hidden="true">
                    <Image
                      src="/images/generated/jw-qc-inspection-v3.png"
                      alt=""
                      width={420}
                      height={210}
                      sizes="(max-width: 767px) 100vw, 420px"
                    />
                    <span><FiCheck /> Reference verified</span>
                  </div>
                ) : null}
              </aside>
            </div>
          ) : (
            <div className="sdr-section-heading">
              <span className="ff-kicker">{t("fitKicker")}</span>
              <h2>
                {service.slug === "product-sourcing"
                  ? "Built for supplier decisions."
                  : service.slug === "automatic-order-fulfillment"
                  ? "Built for clean order flow."
                  : "Built around the operating result you need."}
              </h2>
            </div>
          )}
          <div className={service.slug === "china-fulfillment-center" ? "sdr-fit-timeline" : service.slug === "quality-control-inspection" ? "sdr-fit-grid sdr-qc-fit-stream" : "sdr-fit-grid"}>
            {service.slug === "china-fulfillment-center" ? <span className="sdr-fit-timeline-particle" aria-hidden="true" /> : null}
            {service.outcomes.map(([title, text], index) => {
              const Icon = outcomeIcons[index % outcomeIcons.length];
              return (
              <article key={title} style={service.slug === "china-fulfillment-center" ? { "--fit-step-index": index } : undefined}>
                <div className="sdr-fit-card-top">
                  <small>0{index + 1}</small>
                  {service.slug === "china-fulfillment-center" ? (
                    <span className="sdr-fit-step-icon" aria-hidden="true"><Icon /></span>
                  ) : ["dropshipping-supplier", "3pl-fulfillment-services", "product-sourcing"].includes(service.slug) ? <Icon aria-hidden="true" /> : service.slug === "quality-control-inspection" ? <FiCheck className="sdr-qc-fit-check" aria-hidden="true" /> : null}
                </div>
                {service.slug === "quality-control-inspection" ? (
                  <div className="sdr-qc-fit-visual" aria-hidden="true">
                    <span><Icon /></span>
                    <i />
                    <i />
                    <i />
                  </div>
                ) : null}
                <div className={service.slug === "china-fulfillment-center" ? "sdr-fit-step-copy" : service.slug === "quality-control-inspection" ? "sdr-qc-fit-copy" : undefined}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                {service.slug === "china-fulfillment-center" ? (
                  <div className="sdr-fit-step-aside" aria-hidden="true">
                    <span>ZONE 0{index + 1}</span>
                    <i />
                    <strong>{["RECEIVE", "CHECK", "STORE", "SHIP"][index] || "FLOW"}</strong>
                  </div>
                ) : null}
                {service.slug === "quality-control-inspection" ? (
                  <dl className="sdr-qc-fit-meta">
                    <div>
                      <dt>CHECKS</dt>
                      <dd>{qcOutcomeDetails[index].checks}</dd>
                    </div>
                    <div>
                      <dt>OUTPUT</dt>
                      <dd>{qcOutcomeDetails[index].output}</dd>
                    </div>
                  </dl>
                ) : null}
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
      ) : null}

      {service.slug !== "quality-control-inspection" ? (
      <section id={service.slug === "automatic-order-fulfillment" ? "automation-capability-route" : undefined} className={`sdr-scope${service.slug === "china-fulfillment-center" ? " sdr-warehouse-chain" : ""}`}>
        <div className="container">
          <div className={`sdr-heading-split${service.slug === "china-fulfillment-center" ? " sdr-warehouse-chain-head" : ""}`}>
            <div>
              <span className="ff-kicker">{t("whatWeHandle")}</span>
              <h2 className={serviceTitleClass(service.capabilitiesTitle)}>
                {service.capabilitiesTitle}
              </h2>
              {service.slug === "china-fulfillment-center" ? (
                <div className="sdr-warehouse-zone-visual" aria-hidden="true">
                  <div className="sdr-warehouse-zone-visual-head"><span>ZONE MAP</span><b>ACTIVE FLOW</b></div>
                  <div className="sdr-warehouse-zone-visual-grid">
                    {["INBOUND", "QC", "STORAGE", "DISPATCH"].map((label, index) => (
                      <span key={label} style={{ "--zone-visual-index": index }}><i>{String(index + 1).padStart(2, "0")}</i>{label}</span>
                    ))}
                  </div>
                  <div className="sdr-warehouse-zone-visual-foot"><span>One accountable route</span><strong>04 zones connected</strong></div>
                </div>
              ) : null}
            </div>
            {service.slug === "china-fulfillment-center" ? (
              <aside className="sdr-warehouse-chain-note">
                <FiPackage aria-hidden="true" />
                <p>{service.capabilitiesLead}</p>
                <div className="sdr-warehouse-chain-note-stats" aria-hidden="true">
                  <span><b>04</b><small>zones</small></span>
                  <span><b>01</b><small>route</small></span>
                  <span><b>100%</b><small>traceable</small></span>
                </div>
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
              <svg className="sdr-order-route-pipes" viewBox="0 0 1200 500" preserveAspectRatio="none" aria-hidden="true">
                <path className="sdr-route-pipe-main" d="M70 122 H1130" />
                <path className="sdr-route-pipe-exception" d="M700 122 V302 H785" />
                <path className="sdr-route-pipe-return" d="M1080 122 V430 H160 V122" />
              </svg>
              {service.capabilities.map(([title, text], index) => {
                const Icon = capabilityIcons[index];
                const step = ({ 0: "01", 1: "02", 2: "03", 4: "04" })[index];
                const routeLabel = index === 3 ? "Manual review" : index === 5 ? "Return loop" : `Step ${step}`;
                return <article key={title} data-route-role={index === 3 ? "exception" : index === 5 ? "return" : "primary"} className={`sdr-order-route-node sdr-order-route-node-${index + 1}`}>
                  <span className="sdr-order-route-label">{routeLabel}</span>
                  <span className="sdr-order-route-icon"><Icon aria-hidden="true" /></span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                  {step ? <strong className="sdr-order-route-step" aria-hidden="true">{step}</strong> : null}
                </article>;
              })}
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
                        <div className="sdr-warehouse-chain-meta" aria-hidden="true">
                          <span><small>OWNER</small><b>{["Inbound", "QC", "Inventory", "Dispatch"][index]}</b></span>
                          <span><small>OUTPUT</small><b>{["Receipt", "Release", "Stock", "Tracking"][index]}</b></span>
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
      ) : null}

      <section className="sdr-proof">
        {service.slug === "automatic-order-fulfillment" ? (
          <div className="container sdr-order-control">
            <figure className="sdr-order-control-visual">
              <div className="sdr-order-control-photo sdr-order-control-photo-primary">
                <Image
                  src="/images/generated/jw-dispatch-scan-v3.png"
                  alt="Warehouse operator scanning a parcel before dispatch"
                  fill
                  sizes="(max-width: 900px) 88vw, 34vw"
                />
              </div>
              <div className="sdr-order-control-photo sdr-order-control-photo-secondary">
                <Image
                  src="/images/generated/jw-branded-packing-v3.png"
                  alt="Warehouse team preparing a packed order"
                  fill
                  sizes="(max-width: 560px) 66vw, (max-width: 900px) 46vw, 22vw"
                />
              </div>
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
        ) : service.slug === "china-fulfillment-center" ? (
          <WarehouseControlZones proof={proof} />
        ) : service.slug === "quality-control-inspection" ? (
          <div className="container sdr-qc-release-studio">
            <figure className="sdr-qc-release-visual">
              <Image
                src={proof.image}
                alt="Quality inspection in the warehouse"
                fill
                sizes="(max-width: 900px) 100vw, 46vw"
                unoptimized={proof.image.includes("/generated/")}
              />
              <div className="sdr-qc-visual-meta" aria-label="Inspection batch summary">
                <span><small>BATCH</small><strong>QC-2408-A</strong></span>
                <span><small>SAMPLE</small><strong>50 units</strong></span>
              </div>
              <figcaption>
                <span aria-hidden="true"><FiSearch /></span>
                <div><small>QC STATION</small><strong>Inspection active</strong></div>
              </figcaption>
            </figure>
            <div className="sdr-qc-release-panel">
              <span className="ff-kicker">{proof.eyebrow}</span>
              <h2>{proof.title}</h2>
              <div className="sdr-qc-release-summary" aria-label="Release record summary">
                <span><strong>50</strong><small>Units checked</small></span>
                <span><strong>02</strong><small>Findings open</small></span>
                <span className="is-pending"><FiClock aria-hidden="true" /><small>Decision pending</small></span>
              </div>
              <div className="sdr-qc-release-table" role="table" aria-label="Example quality control release record">
                <div className="sdr-qc-release-row sdr-qc-release-head" role="row">
                  {proof.columns.map((column) => <strong role="columnheader" key={column}>{column}</strong>)}
                </div>
                {proof.rows.map((row, index) => (
                  <div className={`sdr-qc-release-row${row[3] === "Review" ? " is-review" : ""}`} role="row" key={row[0]} style={{ "--qcr-row-index": index }}>
                    {row.map((cell, cellIndex) => (
                      <span role="cell" key={`${cell}-${cellIndex}`}>
                        {cellIndex === 3 ? <em className={`sdr-qc-status sdr-qc-status-${cell.toLowerCase()}`}>{cell}</em> : cell}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
              <div className="sdr-qc-decision-gate">
                <div>
                  <span>RELEASE DECISION</span>
                  <strong>Review required before approval</strong>
                </div>
                <span className="sdr-qc-decision-state"><i aria-hidden="true" />Findings open</span>
              </div>
              <small className="sdr-qc-release-note">{proof.note}</small>
            </div>
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
                <div className="sdr-order-flow-title">
                  <span className="ff-kicker">{service.processEyebrow}</span>
                  <h2>{service.processTitle}</h2>
                  <div className="sdr-order-flow-states" aria-label="Order states">
                    {[
                      ["mapped", "Mapped"],
                      ["held", "Held"],
                      ["synced", "Synced"],
                    ].map(([state, label]) => (
                      <span key={state} className={`sdr-order-state sdr-order-state-${state}`}>
                        <span aria-hidden="true" />
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
                <p>{service.processLead}</p>
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
              {service.slug === "quality-control-inspection" ? (
                <div className="sdr-qc-process-summary" aria-label="Inspection decision path summary">
                  <span><b>05</b><small>Decision gates</small></span>
                  <i aria-hidden="true"><FiArrowRight /></i>
                  <span><b>01</b><small>Release call</small></span>
                </div>
              ) : null}
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
              <div className={service.slug === "quality-control-inspection" ? "sdr-process-grid sdr-qc-pipeline" : "sdr-process-grid"}>
                {service.process.map(([number, title, text], index) => {
                  const ProcessIcon = capabilityIcons[index] || FiCheck;
                  return (
                  <article key={number} style={service.slug === "quality-control-inspection" ? { "--qcp-index": index } : undefined}>
                    <span>{service.slug === "quality-control-inspection" ? <><ProcessIcon aria-hidden="true" /><b>{String(index + 1).padStart(2, "0")}</b></> : number}</span>
                    {service.slug === "quality-control-inspection" ? <small>{number}</small> : null}
                    <h3>{title}</h3>
                    <p>{text}</p>
                    {service.slug === "quality-control-inspection" ? (
                      <strong className="sdr-qc-pipeline-output">
                        <FiCheck aria-hidden="true" />
                        <span>{qcProcessOutputs[index]}</span>
                      </strong>
                    ) : null}
                    {service.slug === "quality-control-inspection" && index < service.process.length - 1 ? <i className="sdr-qc-pipeline-arrow" aria-hidden="true" /> : null}
                  </article>
                  );
                })}
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
          ) : service.slug === "quality-control-inspection" ? (
            <div className="sdr-qc-plan-matrix">
              <aside className="sdr-qc-plan-anchor">
                <span className="ff-kicker">{service.spotlight.eyebrow}</span>
                <h2>{service.spotlight.title}</h2>
                <p>{service.spotlight.lead}</p>
              </aside>
              <div className="sdr-qc-plan-grid" aria-label="Four inspection dimensions">
                {service.spotlight.items.map(([title, text], index) => {
                  const MatrixIcon = [FiSearch, FiShield, FiClock, FiPackage][index];
                  return (
                    <article key={title} style={{ "--qcm-index": index }}>
                      <header>
                        <span>0{index + 1}</span>
                        <i aria-hidden="true"><MatrixIcon /></i>
                      </header>
                      <small>{["PRODUCT ID", "VISIBLE QUALITY", "BASIC FUNCTION", "PACKAGING"][index]}</small>
                      <h3>{title}</h3>
                      <p>{text}</p>
                      <strong className="sdr-qc-plan-state">
                        <FiCheck aria-hidden="true" />
                        <span>Included in plan</span>
                      </strong>
                    </article>
                  );
                })}
              </div>
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
                <div className="sdr-warehouse-case-map" aria-hidden="true">
                  <span className="sdr-warehouse-case-map-line" />
                  {["IN", "QC", "ST", "OUT"].map((label, index) => (
                    <span key={label} className="sdr-warehouse-case-map-node" style={{ "--case-map-index": index }}>
                      <b>0{index + 1}</b><small>{label}</small>
                    </span>
                  ))}
                  <em>LIVE ROUTE</em>
                </div>
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
          ) : service.slug === "quality-control-inspection" ? (
            <div className="container sdr-qc-case-bento">
              <aside className="sdr-qc-case-context">
                <div className="sdr-qc-case-heading">
                  <span className="ff-kicker">{conversion.caseStudy.eyebrow}</span>
                  <h2>{conversion.caseStudy.title}</h2>
                </div>
                <div className="sdr-qc-case-profile">
                  <span aria-hidden="true"><FiPackage /></span>
                  <div>
                    <small>BATCH CONTEXT</small>
                    <p>{conversion.caseStudy.profile}</p>
                  </div>
                </div>
                <div className="sdr-qc-case-challenge">
                  <span aria-hidden="true"><FiInfo /></span>
                  <div>
                    <strong>THE OPERATING CHALLENGE</strong>
                    <p>{conversion.caseStudy.challenge}</p>
                  </div>
                </div>
              </aside>
              <div className="sdr-qc-case-action">
                <strong className="sdr-qc-case-label">STANDARDIZED ACTION STREAM</strong>
                <ol className="sdr-qc-case-steps">
                  {conversion.caseStudy.plan.map((step, index) => {
                    const Icon = [FiClipboard, FiSearch, FiLayers][index];
                    return (
                      <li key={step} style={{ "--qc-case-index": index }}>
                        <span className="sdr-qc-case-step-icon" aria-hidden="true"><Icon /></span>
                        <div className="sdr-qc-case-step-copy">
                          <small>0{index + 1}</small>
                          <h3>{step}</h3>
                          <p>{conversion.caseStudy.evidence[index]}</p>
                        </div>
                        <span className="sdr-qc-case-step-status"><FiCheck aria-hidden="true" /> READY</span>
                      </li>
                    );
                  })}
                </ol>
                <blockquote className="sdr-qc-case-outcome">
                  <span aria-hidden="true"><FiCheck /></span>
                  <div>
                    <strong>OUTCOME</strong>
                    <p>{conversion.caseStudy.outcome}</p>
                  </div>
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
            <h2>{t("relatedServices")}</h2>
            <Link href="/services">
              Compare all services
              <FiArrowRight />
            </Link>
          </div>
          <div className="sdr-related-grid">
            {related.map((item, index) => (
              <Link href={`/services/${item.slug}`} key={item.slug} className={index === 0 ? "is-featured" : undefined}>
                <figure className="sdr-related-media">
                  <Image
                    src={item.image}
                    alt={`${item.menuTitle} service`}
                    fill
                    sizes="(max-width: 767px) 100vw, 34vw"
                    unoptimized={item.image.includes("/generated/")}
                  />
                </figure>
                <div className="sdr-qc-related-copy">
                  <span>{item.eyebrow}</span>
                  <h3>{item.menuTitle}</h3>
                  <p>{item.lead}</p>
                  <strong>
                    Explore Service
                    <FiArrowRight />
                  </strong>
                </div>
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
            {service.slug === "quality-control-inspection" || service.slug === "china-fulfillment-center" || service.slug === "automatic-order-fulfillment" || service.slug === "product-sourcing" || service.slug === "private-label" || service.slug === "pod-fulfillment" || service.slug === "3pl-fulfillment-services" || service.slug === "dropshipping-supplier" ? (
              <div className="sdr-qc-brief-status" aria-label="Inspection brief readiness">
                <span><b>{String(quoteChecklist.length).padStart(2, "0")}</b><small>Required inputs</small></span>
                <strong><FiCheck aria-hidden="true" /> Ready to scope</strong>
              </div>
            ) : null}
            {quoteChecklist.length > 0 && (
              <div
                className="sdr-quote-checklist"
                aria-label="What to include in your request"
              >
                {quoteChecklist.map((item, index) => (
                  <div key={item}>
                    {service.slug === "quality-control-inspection" || service.slug === "china-fulfillment-center" || service.slug === "automatic-order-fulfillment" || service.slug === "product-sourcing" || service.slug === "private-label" || service.slug === "pod-fulfillment" || service.slug === "3pl-fulfillment-services" || service.slug === "dropshipping-supplier" ? <small>0{index + 1}</small> : null}
                    <FiCheck aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}
            {quoteNote && (
              <div className="sdr-quote-note">
                {service.slug === "quality-control-inspection" ? <FiInfo aria-hidden="true" /> : null}
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
