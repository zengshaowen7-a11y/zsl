"use client";

import { memo, useEffect, useRef, useState } from "react";
import { FiArrowRight, FiCheck, FiLink } from "react-icons/fi";
import { Link } from "@/i18n/navigation";

function FinalQuoteLauncher({ content }) {
  const [isReady, setIsReady] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !window.IntersectionObserver || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      root.dataset.visible = "true";
      observer.disconnect();
    }, { threshold: 0.2 });
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} className={`hiw-container hiw-final-launcher${isReady ? " is-ready" : ""}`}>
      <div className="hiw-final-copy">
        <p className="hiw-kicker">{content.kicker}</p>
        <h2>{content.title}</h2>
        <p>{content.lead}</p>
      </div>

      <div className="hiw-final-route" aria-label={`${content.product}, ${content.quote}`}>
        <button type="button" aria-pressed={isReady} onClick={() => setIsReady((ready) => !ready)}>
          <span className="hiw-final-node-icon">{isReady ? <FiCheck aria-hidden="true" /> : <FiLink aria-hidden="true" />}</span>
          <span><small>01</small><strong>{content.product}</strong></span>
        </button>
        <span className="hiw-final-route-line" aria-hidden="true"><i /></span>
        <div className="hiw-final-route-end">
          <span className="hiw-final-node-icon"><FiArrowRight aria-hidden="true" /></span>
          <span><small>02</small><strong>{content.quote}</strong></span>
        </div>
      </div>

      <Link href="/contact" className="hiw-button hiw-button-light">{content.button} <FiArrowRight /></Link>
    </div>
  );
}

export default memo(FinalQuoteLauncher);
