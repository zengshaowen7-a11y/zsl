"use client";

import { memo, useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { FiArrowRight, FiChevronDown, FiClipboard, FiPackage, FiShield, FiTruck } from "react-icons/fi";
import { servicesProofImages } from "@/content/services-proof-ui";

const proofIcons = [FiClipboard, FiShield, FiPackage, FiTruck];

function ServicesProofScene({ content, items }) {
  const [active, setActive] = useState(0);
  const [shownIndex, setShownIndex] = useState(0);
  const rootRef = useRef(null);
  const id = useId();

  const toggleItem = (index) => {
    if (active === index) {
      setActive(null);
      return;
    }
    setActive(index);
    setShownIndex(index);
  };

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !window.IntersectionObserver || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      root.dataset.entered = "true";
      observer.disconnect();
    }, { threshold: 0.14 });
    observer.observe(root);
    return () => {
      observer.disconnect();
      delete root.dataset.entered;
    };
  }, []);

  return (
    <div ref={rootRef} className="sov-container sov-proof-stage">
      <header className="sov-proof-stage-heading">
        <p className="sov-kicker">{content.kicker}</p>
        <h2 id="services-proof-title">{content.title}</h2>
        <p>{content.lead}</p>
      </header>
      <div className="sov-proof-scene">
        <figure className="sov-proof-scene-media">
          <Image
            key={servicesProofImages[shownIndex]}
            src={servicesProofImages[shownIndex]}
            alt=""
            fill
            sizes="(max-width: 900px) 100vw, 48vw"
          />
          <figcaption aria-live="polite">
            <span>{String(shownIndex + 1).padStart(2, "0")}</span>
            <strong>{items[shownIndex][0]}</strong>
          </figcaption>
        </figure>
        <div className="sov-proof-checklist">
          {items.map(([title, copy], index) => {
            const Icon = proofIcons[index];
            const isOpen = active === index;
            const panelId = `${id}-proof-${index}`;
            return (
              <article key={title} data-proof-item style={{ "--proof-delay": `${120 + index * 90}ms` }}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleItem(index)}
                >
                  <span className="sov-proof-check-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="sov-proof-check-icon"><Icon aria-hidden="true" /></span>
                  <span className="sov-proof-check-title">{title}</span>
                  <FiChevronDown className="sov-proof-check-chevron" aria-hidden="true" />
                </button>
                <div id={panelId} className="sov-proof-check-panel" data-open={isOpen ? "true" : "false"}>
                  <div><p>{copy}</p></div>
                </div>
              </article>
            );
          })}
          <Link className="sov-proof-stage-link" href="/services/quality-control-inspection">
            {content.link} <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default memo(ServicesProofScene);
