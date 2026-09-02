"use client";

import Image from "next/image";
import { memo, useEffect, useRef, useState } from "react";
import { FiArrowRight, FiCheck, FiChevronRight } from "react-icons/fi";
import { Link } from "@/i18n/navigation";

const images = [
  "/images/generated/jw-qc-inspection-v3.png",
  "/images/quality-gallery/shelf-parcel-inspection.jpg",
  "/images/generated/jw-quality-check-v2.png",
  "/images/quality-gallery/clipboard-package-check.jpg",
];

function QCEvidenceWorkbench({ content }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    if (isPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActiveIndex((index) => (index + 1) % content.checks.length), 3000);
    return () => window.clearInterval(timer);
  }, [content.checks.length, isPaused]);

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

  return (
    <div
      ref={rootRef}
      className="wjw-container wjw-qc-workbench"
      data-scene={activeIndex + 1}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
      }}
    >
      <div className="wjw-qc-visual">
        {images.map((src, index) => (
          <Image
            className={index === activeIndex ? "is-active" : ""}
            src={src}
            alt={`${content.checks[index]}: ${index < 2 ? content.imageAltOne : content.imageAltTwo}`}
            fill
            sizes="(max-width: 850px) 100vw, 48vw"
            key={src}
          />
        ))}
        <div className="wjw-qc-focus" aria-hidden="true"><i /></div>
        <div className="wjw-qc-visual-status">
          <span>{content.review}</span>
          <strong>{content.checks[activeIndex]}</strong>
        </div>
      </div>

      <div className="wjw-qc-console">
        <header>
          <p className="wjw-kicker">{content.kicker}</p>
          <h2>{content.title}</h2>
          <p>{content.lead}</p>
        </header>

        <div className="wjw-qc-report-head"><span>{content.review}</span><strong>SKU: JW-1024</strong></div>

        <dl className="wjw-qc-metrics">
          <div><dt>{content.checked}</dt><dd>50</dd></div>
          <div><dt>{content.sampling}</dt><dd>100%</dd></div>
          <div><dt>{content.issues}</dt><dd>0</dd></div>
        </dl>

        <div className="wjw-qc-checks" role="tablist" aria-label={content.review}>
          {content.checks.map((item, index) => (
            <button
              type="button"
              role="tab"
              aria-selected={activeIndex === index}
              className={activeIndex === index ? "is-active" : ""}
              onClick={() => setActiveIndex(index)}
              key={item}
            >
              <span><FiCheck aria-hidden="true" /></span>
              <strong>{item}</strong>
              <FiChevronRight aria-hidden="true" />
            </button>
          ))}
        </div>

        <div className="wjw-qc-decision">
          <span><i />{content.status}</span>
          <strong>{content.approved}</strong>
        </div>

        <Link href="/services/quality-control-inspection" className="wjw-text-link">{content.link} <FiArrowRight /></Link>
      </div>
    </div>
  );
}

export default memo(QCEvidenceWorkbench);
