"use client";

import { memo, useEffect, useRef, useState } from "react";
import { FiArrowRight, FiCheck, FiX } from "react-icons/fi";

function WhyJWCompareBoard({ comparisons, details = [], typicalLabel, jwLabel }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    if (isPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActiveIndex((index) => (index + 1) % comparisons.length), 3200);
    return () => window.clearInterval(timer);
  }, [comparisons.length, isPaused]);

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

  const [typical, jw] = comparisons[activeIndex];
  const [typicalDetail, jwDetail] = details[activeIndex] || [];

  return (
    <div
      ref={rootRef}
      className="wjw-compare-board"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
      }}
    >
      <div className="wjw-compare-stage" key={activeIndex}>
        <article className="wjw-compare-before">
          <span><FiX aria-hidden="true" />{typicalLabel}</span>
          <div><strong>{typical}</strong>{typicalDetail && <p>{typicalDetail}</p>}</div>
        </article>
        <div className="wjw-compare-transfer" aria-hidden="true"><i /><FiArrowRight /></div>
        <article className="wjw-compare-after">
          <span><FiCheck aria-hidden="true" />{jwLabel}</span>
          <div><strong>{jw}</strong>{jwDetail && <p>{jwDetail}</p>}</div>
        </article>
      </div>

      <div className="wjw-compare-nav" role="tablist" aria-label={jwLabel}>
        {comparisons.map(([before], index) => (
          <button
            type="button"
            role="tab"
            aria-selected={activeIndex === index}
            className={activeIndex === index ? "is-active" : ""}
            key={before}
            onClick={() => setActiveIndex(index)}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{before}</strong>
            <i aria-hidden="true" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default memo(WhyJWCompareBoard);
