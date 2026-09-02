"use client";

import { memo, useEffect, useId, useRef, useState } from "react";
import { FiArrowRight, FiCheck, FiClipboard, FiMessageCircle, FiPackage, FiShield } from "react-icons/fi";

const icons = [FiMessageCircle, FiShield, FiClipboard, FiPackage];

function WhyJWFactsRail({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const componentId = useId();
  const buttonRefs = useRef([]);
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

  const [activeTitle, activeCopy, activeDetails = []] = items[activeIndex];
  const ActiveIcon = icons[activeIndex];

  const selectStep = (index, moveFocus = false) => {
    const nextIndex = (index + items.length) % items.length;
    setActiveIndex(nextIndex);
    if (moveFocus) buttonRefs.current[nextIndex]?.focus();
  };

  const handleKeyDown = (event) => {
    const keyActions = {
      ArrowDown: activeIndex + 1,
      ArrowRight: activeIndex + 1,
      ArrowUp: activeIndex - 1,
      ArrowLeft: activeIndex - 1,
      Home: 0,
      End: items.length - 1,
    };

    if (!(event.key in keyActions)) return;
    event.preventDefault();
    selectStep(keyActions[event.key], true);
  };

  return (
    <div
      ref={rootRef}
      className="wjw-container wjw-operating-rail"
      style={{ "--active-step": activeIndex }}
    >
      <article
        className="wjw-operating-focus"
        id={`${componentId}-panel`}
        role="tabpanel"
        aria-labelledby={`${componentId}-tab-${activeIndex}`}
        key={activeTitle}
      >
        <div className="wjw-operating-focus-meta">
          <span>{String(activeIndex + 1).padStart(2, "0")}</span>
        </div>
        <div className="wjw-operating-focus-copy">
          <span className="wjw-operating-focus-icon"><ActiveIcon aria-hidden="true" /></span>
          <div><h3>{activeTitle}</h3><p>{activeCopy}</p></div>
        </div>
        {activeDetails.length > 0 ? (
          <dl className="wjw-operating-details">
            {activeDetails.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
            <span className="wjw-operating-details-check" aria-hidden="true"><FiCheck /></span>
          </dl>
        ) : (
          <div className="wjw-operating-handoff" aria-hidden="true">
            <span><ActiveIcon /></span>
            <i />
            <span><FiCheck /></span>
          </div>
        )}
      </article>

      <div className="wjw-operating-steps" role="tablist" aria-label={activeTitle} onKeyDown={handleKeyDown}>
        <span className="wjw-operating-path" aria-hidden="true"><i /></span>
        {items.map(([title], index) => {
          const Icon = icons[index];
          const isActive = activeIndex === index;
          return (
            <button
              ref={(node) => { buttonRefs.current[index] = node; }}
              type="button"
              role="tab"
              id={`${componentId}-tab-${index}`}
              aria-controls={`${componentId}-panel`}
              aria-selected={isActive}
              aria-current={isActive ? "step" : undefined}
              tabIndex={isActive ? 0 : -1}
              className={isActive ? "is-active" : ""}
              onClick={() => selectStep(index)}
              key={title}
            >
              <span className="wjw-operating-number">{String(index + 1).padStart(2, "0")}</span>
              <span className="wjw-operating-step-icon"><Icon aria-hidden="true" /></span>
              <strong>{title}</strong>
              <FiArrowRight aria-hidden="true" />
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default memo(WhyJWFactsRail);
