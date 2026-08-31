"use client";

import Image from "next/image";
import { useState } from "react";
import { FiArrowRight, FiCamera, FiCheck, FiClipboard, FiPlay, FiShield } from "react-icons/fi";

const evidenceViews = [
  {
    title: "Batch-specific inspection checklist",
    label: "CHECKLIST VIEW",
    image: "/images/generated/jw-qc-inspection-v3.png",
    alt: "JW team inspecting a product batch",
    Icon: FiClipboard,
  },
  {
    title: "Photos and notes in one record",
    label: "EVIDENCE VIEW",
    image: "/images/quality-gallery/warehouse-package-check.jpg",
    alt: "Warehouse package inspection evidence",
    Icon: FiCamera,
  },
  {
    title: "Pass, rework or hold",
    label: "DECISION VIEW",
    image: "/images/quality-gallery/clipboard-package-check.jpg",
    alt: "Inspection record used for a release decision",
    Icon: FiShield,
  },
];

const inspectionItems = ["Quantity and variant", "Appearance and finish", "Packaging and label"];

export default function QualityControlHero({ service }) {
  const [activeView, setActiveView] = useState(0);
  const view = evidenceViews[activeView];

  return (
    <section className="sdr-hero qch-hero">
      <div className="qch-shell">
        <div className="qch-copy">
          <span className="qch-kicker"><FiCheck aria-hidden="true" />{service.eyebrow}</span>
          <h1>{service.title}</h1>
          <p>{service.lead}</p>

          <div className="qch-actions">
            <a className="qch-primary" href="#service-quote">Get a Free Quote <FiArrowRight /></a>
            <a className="qch-secondary" href="#service-process"><span><FiPlay /></span>See How It Works</a>
          </div>

          <div className="qch-tabs" aria-label="Inspection evidence views">
            {evidenceViews.map((item, index) => {
              const Icon = item.Icon;
              const isActive = activeView === index;
              return (
                <button
                  type="button"
                  key={item.title}
                  className={isActive ? "is-active" : ""}
                  aria-pressed={isActive}
                  onClick={() => setActiveView(index)}
                  onFocus={() => setActiveView(index)}
                  onMouseEnter={() => setActiveView(index)}
                >
                  <small>{String(index + 1).padStart(2, "0")}</small>
                  <span><Icon aria-hidden="true" /></span>
                  <strong>{item.title}<em>{item.label.replace(" VIEW", "")}</em></strong>
                </button>
              );
            })}
          </div>
        </div>

        <div className="qch-workbench">
          <header>
            <div><span className="qch-status-dot" aria-hidden="true" /><div><small>EXAMPLE INSPECTION RECORD</small><strong>{view.label}</strong></div></div>
            <span className="qch-ready"><FiShield aria-hidden="true" />Decision ready</span>
          </header>

          <div className="qch-workbench-body">
            <figure>
              {evidenceViews.map((item, index) => (
                <Image
                  key={item.image}
                  className={index === activeView ? "is-active" : ""}
                  src={item.image}
                  alt={index === activeView ? item.alt : ""}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 1023px) 100vw, 48vw"
                  aria-hidden={index !== activeView}
                />
              ))}
              <figcaption><FiCamera aria-hidden="true" />{view.title}</figcaption>
            </figure>

            <div className="qch-checks">
              <small>INSPECTION POINTS</small>
              {inspectionItems.map((item, index) => (
                <div key={item} style={{ "--check-index": index }}><small>{String(index + 1).padStart(2, "0")}</small><span><FiCheck /></span><strong>{item}</strong><em>Recorded</em></div>
              ))}
              <footer>
                <div><small>AVAILABLE DECISIONS</small><strong>Pass · Rework · Hold</strong></div>
                <span><FiCheck />REVIEWED</span>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
