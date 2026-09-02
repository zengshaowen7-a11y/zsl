"use client";

import Image from "next/image";
import { memo, useEffect, useId, useRef, useState } from "react";
import { FiArrowRight, FiClipboard, FiSearch, FiTruck } from "react-icons/fi";
import { Link } from "@/i18n/navigation";
import { howItWorksTrackImages } from "@/content/how-it-works-track-ui";

const trackIcons = [FiSearch, FiClipboard, FiTruck];

function HowItWorksTrackSelector({ content }) {
  const [active, setActive] = useState(0);
  const rootRef = useRef(null);
  const tabRefs = useRef([]);
  const id = useId();
  const activeItem = content.items[active];

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !window.IntersectionObserver || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      root.dataset.entered = "true";
      observer.disconnect();
    }, { threshold: 0.14 });
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  const moveFocus = (event, index) => {
    if (!['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    let next = index;
    if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = content.items.length - 1;
    else if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (index + 1) % content.items.length;
    else next = (index - 1 + content.items.length) % content.items.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div ref={rootRef} className="hiw-container hiw-track-selector">
      <header className="hiw-track-selector-heading" data-track-reveal>
        <p className="hiw-kicker">{content.kicker}</p>
        <h2 id="current-stage-title">{content.title}</h2>
        <p>{content.lead}</p>
      </header>

      <div className="hiw-track-workbench">
        <div className="hiw-track-tabs" role="tablist" aria-label={content.title}>
          {content.items.map((item, index) => {
            const Icon = trackIcons[index];
            const selected = active === index;
            return (
              <button
                key={item.title}
                ref={(node) => { tabRefs.current[index] = node; }}
                id={`${id}-track-tab-${index}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`${id}-track-panel`}
                tabIndex={selected ? 0 : -1}
                data-track-reveal
                style={{ "--track-delay": `${100 + index * 100}ms` }}
                onClick={() => setActive(index)}
                onKeyDown={(event) => moveFocus(event, index)}
              >
                <span className="hiw-track-tab-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="hiw-track-tab-icon"><Icon aria-hidden="true" /></span>
                <span className="hiw-track-tab-copy">
                  <small>{item.kicker}</small>
                  <strong>{item.title}</strong>
                  <span>{item.copy}</span>
                </span>
                <FiArrowRight className="hiw-track-tab-arrow" aria-hidden="true" />
              </button>
            );
          })}
        </div>

        <div
          id={`${id}-track-panel`}
          className="hiw-track-panel"
          role="tabpanel"
          aria-labelledby={`${id}-track-tab-${active}`}
          data-track-reveal
        >
          <Image
            key={howItWorksTrackImages[active]}
            src={howItWorksTrackImages[active]}
            alt=""
            fill
            sizes="(max-width: 850px) 100vw, 60vw"
          />
          <div className="hiw-track-panel-shade" aria-hidden="true" />
          <div className="hiw-track-panel-status" aria-hidden="true">
            <span>{String(active + 1).padStart(2, "0")}</span>
            <i />
            <strong>{activeItem.kicker}</strong>
          </div>
          <div className="hiw-track-panel-copy">
            <p>{activeItem.copy}</p>
            <Link href={activeItem.href}>{activeItem.link} <FiArrowRight aria-hidden="true" /></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(HowItWorksTrackSelector);
