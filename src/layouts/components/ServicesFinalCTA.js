"use client";

import { memo, useEffect, useRef } from "react";
import { Link } from "@/i18n/navigation";
import { FiArrowRight, FiGlobe, FiLink, FiMessageSquare } from "react-icons/fi";
import { servicesFinalUi } from "@/content/services-final-ui";

const preparationIcons = [FiLink, FiGlobe, FiMessageSquare];

function ServicesFinalCTA({ content, locale }) {
  const rootRef = useRef(null);
  const ui = servicesFinalUi[locale] || servicesFinalUi.en;

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !window.IntersectionObserver || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      root.dataset.entered = "true";
      observer.disconnect();
    }, { threshold: 0.12 });
    const revealOnFocus = () => { root.dataset.focused = "true"; };
    observer.observe(root);
    root.addEventListener("focusin", revealOnFocus);
    return () => {
      observer.disconnect();
      root.removeEventListener("focusin", revealOnFocus);
      delete root.dataset.entered;
      delete root.dataset.focused;
    };
  }, []);

  return (
    <div ref={rootRef} className="sov-container sov-final-inner sov-final-invitation">
      <header className="sov-invitation-heading">
        <p className="sov-invitation-kicker" data-invitation-reveal>{content.kicker}</p>
        <h2 id="services-invitation-title" data-invitation-reveal style={{ "--invitation-delay": "90ms" }}>{content.title}</h2>
        <p className="sov-invitation-lead" data-invitation-reveal style={{ "--invitation-delay": "180ms" }}>{content.lead}</p>
      </header>
      <div className="sov-invitation-handoff">
        <ul className="sov-invitation-preparation" aria-label={ui.label}>
          {ui.items.map((item, index) => {
            const Icon = preparationIcons[index];
            return (
              <li key={item} data-invitation-reveal style={{ "--invitation-delay": `${260 + index * 90}ms` }}>
                <Icon aria-hidden="true" />
                <span>{item}</span>
              </li>
            );
          })}
        </ul>
        <div className="sov-invitation-action" data-invitation-reveal style={{ "--invitation-delay": "520ms" }}>
          <Link className="sov-invitation-button" href="/contact">
            <span>{content.button}</span>
            <span className="sov-invitation-arrow" aria-hidden="true"><FiArrowRight /></span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default memo(ServicesFinalCTA);
