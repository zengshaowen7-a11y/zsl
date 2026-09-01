"use client";

import Image from "next/image";
import { useState } from "react";
import { FiArrowRight, FiCamera, FiCheck, FiClipboard, FiPlay, FiShield } from "react-icons/fi";

const evidenceImages = [
  ["/images/generated/jw-qc-inspection-v3.png", FiClipboard],
  ["/images/quality-gallery/warehouse-package-check.jpg", FiCamera],
  ["/images/quality-gallery/clipboard-package-check.jpg", FiShield],
];

export default function QualityControlHero({ service, ui }) {
  const [activeView, setActiveView] = useState(0);
  const evidenceViews = ui.views.map(([title, label, alt], index) => ({
    title,
    label,
    alt,
    image: evidenceImages[index][0],
    Icon: evidenceImages[index][1],
  }));
  const view = evidenceViews[activeView];

  return (
    <section className="sdr-hero qch-hero">
      <div className="qch-shell">
        <div className="qch-copy">
          <span className="qch-kicker"><FiCheck aria-hidden="true" />{service.eyebrow}</span>
          <h1>{service.title}</h1>
          <p>{service.lead}</p>

          <div className="qch-actions">
            <a className="qch-primary" href="#service-quote">{ui.getQuote} <FiArrowRight /></a>
            <a className="qch-secondary" href="#service-process"><span><FiPlay /></span>{ui.seeHow}</a>
          </div>

          <div className="qch-tabs" aria-label={ui.tabsLabel}>
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
            <div><span className="qch-status-dot" aria-hidden="true" /><div><small>{ui.exampleRecord}</small><strong>{view.label}</strong></div></div>
            <span className="qch-ready"><FiShield aria-hidden="true" />{ui.decisionReady}</span>
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
              <small>{ui.points}</small>
              {ui.inspectionItems.map((item, index) => (
                <div key={item} style={{ "--check-index": index }}><small>{String(index + 1).padStart(2, "0")}</small><span><FiCheck /></span><strong>{item}</strong><em>{ui.recorded}</em></div>
              ))}
              <footer>
                <div><small>{ui.available}</small><strong>{ui.decisions}</strong></div>
                <span><FiCheck />{ui.reviewed}</span>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
