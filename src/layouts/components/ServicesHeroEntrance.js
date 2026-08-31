"use client";

import { memo, useEffect, useRef } from "react";

// Content remains visible without JS. Only this hero opts into the entrance sequence.
function ServicesHeroEntrance({ children }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !window.IntersectionObserver || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = [...root.querySelectorAll("[data-services-reveal]")];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ isIntersecting, target }) => {
        if (!isIntersecting) return;
        target.dataset.servicesVisible = "true";
        observer.unobserve(target);
      });
    }, { threshold: 0.12 });

    root.dataset.servicesMotion = "ready";
    targets.forEach((target) => observer.observe(target));
    const revealFocusedTarget = (event) => {
      const target = event.target.closest("[data-services-reveal]");
      if (!target) return;
      target.dataset.servicesVisible = "true";
      observer.unobserve(target);
    };
    root.addEventListener("focusin", revealFocusedTarget);
    return () => {
      observer.disconnect();
      root.removeEventListener("focusin", revealFocusedTarget);
      delete root.dataset.servicesMotion;
      targets.forEach((target) => delete target.dataset.servicesVisible);
    };
  }, []);

  return <div ref={rootRef} className="sov-launch-layout">{children}</div>;
}

export default memo(ServicesHeroEntrance);
