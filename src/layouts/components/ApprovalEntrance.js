"use client";

import { memo, useEffect, useRef } from "react";

function ApprovalEntrance({ children }) {
  const rootRef = useRef(null);
  useEffect(() => {
    const root = rootRef.current;
    if (!root || !window.IntersectionObserver || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const targets = [...root.querySelectorAll("[data-gate-reveal]")];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return;
        target.dataset.gateVisible = "true";
        observer.unobserve(target);
      });
    }, { threshold: 0.18 });
    targets.forEach((target) => observer.observe(target));
    return () => {
      observer.disconnect();
      targets.forEach((target) => delete target.dataset.gateVisible);
    };
  }, []);
  return <div ref={rootRef} className="hiw-container hiw-approval-grid hiw-gates-layout">{children}</div>;
}

export default memo(ApprovalEntrance);
