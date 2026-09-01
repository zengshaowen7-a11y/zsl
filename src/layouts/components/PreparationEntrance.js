"use client";

import { memo, useEffect, useRef } from "react";

function PreparationEntrance({ children }) {
  const rootRef = useRef(null);
  useEffect(() => {
    const root = rootRef.current;
    if (!root || !window.IntersectionObserver || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return;
        target.dataset.preparationVisible = "true";
        observer.unobserve(target);
      });
    }, { threshold: 0.15 });
    const targets = [...root.querySelectorAll("[data-preparation-reveal]")];
    targets.forEach((target) => observer.observe(target));
    return () => {
      observer.disconnect();
      targets.forEach((target) => delete target.dataset.preparationVisible);
    };
  }, []);
  return <div ref={rootRef} className="hiw-container hiw-start-grid hiw-brief-grid">{children}</div>;
}

export default memo(PreparationEntrance);
