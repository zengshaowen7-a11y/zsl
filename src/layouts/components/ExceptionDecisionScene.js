"use client";

import Image from "next/image";
import { memo, useEffect, useRef, useState } from "react";
import { FiCheckCircle, FiChevronDown, FiClipboard, FiShield } from "react-icons/fi";

const icons = [FiShield, FiClipboard, FiCheckCircle];

function ExceptionDecisionScene({ content }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !window.IntersectionObserver || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      root.dataset.visible = "true";
      observer.disconnect();
    }, { threshold: 0.18 });
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  const activeStep = activeIndex >= 0 ? content.steps[activeIndex] : null;

  return (
    <div ref={rootRef} className="hiw-container hiw-exception-grid hiw-exception-stage" data-active={activeIndex + 1}>
      <figure className="hiw-exception-media">
        <Image src="/images/generated/jw-qc-inspection-v3.png" alt={content.imageAlt} fill sizes="(max-width: 850px) 100vw, 48vw" />
        <div className="hiw-exception-scan" aria-hidden="true" />
        <figcaption className="hiw-exception-status">
          <span>{content.statusLabel}</span>
          <strong>{activeStep ? activeStep[0] : content.status}</strong>
        </figcaption>
      </figure>

      <div className="hiw-exception-copy">
        <header className="hiw-exception-heading">
          <p className="hiw-kicker">{content.kicker}</p>
          <h2>{content.title}</h2>
          <p>{content.lead}</p>
        </header>

        <div className="hiw-exception-flow">
          {content.steps.map(([title, copy], index) => {
            const Icon = icons[index];
            const isOpen = index === activeIndex;
            return (
              <article className={isOpen ? "is-active" : ""} key={title} style={{ "--exception-delay": `${index * 110}ms` }}>
                <button type="button" aria-expanded={isOpen} onClick={() => setActiveIndex(isOpen ? -1 : index)}>
                  <span className="hiw-exception-step">{String(index + 1).padStart(2, "0")}</span>
                  <span className="hiw-exception-step-icon"><Icon aria-hidden="true" /></span>
                  <strong>{title}</strong>
                  <FiChevronDown className="hiw-exception-chevron" aria-hidden="true" />
                </button>
                <div className="hiw-exception-panel" data-open={isOpen ? "true" : "false"}><p>{copy}</p></div>
              </article>
            );
          })}
        </div>

        <div className="hiw-exception-note">
          <span>{content.queue}</span>
          <strong>{content.queueStatus}</strong>
        </div>
      </div>
    </div>
  );
}

export default memo(ExceptionDecisionScene);
