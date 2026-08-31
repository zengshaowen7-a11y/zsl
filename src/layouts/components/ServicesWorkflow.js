"use client";

import { memo, useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { FiArrowLeft, FiArrowRight, FiRotateCcw } from "react-icons/fi";
import {
  servicesWorkflowImages,
  servicesWorkflowUi,
  workflowKeyTarget,
} from "@/content/services-workflow-ui";

function ServicesWorkflow({ steps, locale }) {
  const [active, setActive] = useState(0);
  const rootRef = useRef(null);
  const tabsRef = useRef([]);
  const id = useId();
  const ui = servicesWorkflowUi[locale] || servicesWorkflowUi.en;

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !window.IntersectionObserver) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        root.dataset.entered = "true";
        observer.disconnect();
      },
      { threshold: 0.15 },
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  const selectStep = (index, focus = false) => {
    setActive(index);
    if (focus) tabsRef.current[index]?.focus();
  };

  if (!steps.length) return null;

  return (
    <div ref={rootRef} className="sov-workflow">
      <p className="sov-workflow-hint" id={`${id}-hint`}>
        {ui.hint}
      </p>
      <div
        role="tablist"
        aria-labelledby="service-workflow-title"
        aria-describedby={`${id}-hint`}
        className="sov-workflow-tabs"
      >
        {steps.map(([number, title], index) => (
          <button
            key={number}
            ref={(element) => {
              tabsRef.current[index] = element;
            }}
            type="button"
            role="tab"
            id={`${id}-tab-${index}`}
            aria-controls={`${id}-panel-${index}`}
            aria-selected={active === index}
            aria-label={`${number}. ${title}`}
            tabIndex={active === index ? 0 : -1}
            className="sov-workflow-tab"
            style={{ "--workflow-delay": `${index * 85}ms` }}
            onClick={() => selectStep(index)}
            onKeyDown={(event) => {
              const next = workflowKeyTarget(event.key, index, steps.length);
              if (next === null) return;
              event.preventDefault();
              selectStep(next, true);
            }}
          >
            <span className="sov-workflow-node" aria-hidden="true">
              {number}
            </span>
            <span className="sov-workflow-tab-label">
              {ui.labels[index] || title}
            </span>
          </button>
        ))}
      </div>

      <div className="sov-workflow-panels">
        {steps.map(([number, title, copy], index) => (
          <div
            key={number}
            role="tabpanel"
            id={`${id}-panel-${index}`}
            aria-labelledby={`${id}-tab-${index}`}
            aria-hidden={active !== index}
            inert={active !== index}
            tabIndex={0}
            className="sov-workflow-panel"
          >
            <div className="sov-workflow-image">
              <Image
                src={servicesWorkflowImages[index]}
                alt=""
                fill
                sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1200px) 42vw, 500px"
              />
            </div>
            <div className="sov-workflow-story">
              <div className="sov-workflow-story-copy">
                <p className="sov-workflow-stage">
                  {ui.stage} {number}{" "}
                  <span>/ {String(steps.length).padStart(2, "0")}</span>
                </p>
                <h3>{title}</h3>
                <p className="sov-workflow-description">{copy}</p>
              </div>
              <div className="sov-workflow-controls">
                <button
                  type="button"
                  className="sov-workflow-previous"
                  aria-label={ui.previous}
                  disabled={index === 0}
                  onClick={() => selectStep(index - 1, true)}
                >
                  <FiArrowLeft aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="sov-workflow-next"
                  onClick={() => selectStep((index + 1) % steps.length, true)}
                >
                  {index === steps.length - 1 ? ui.restart : ui.next}
                  {index === steps.length - 1 ? (
                    <FiRotateCcw aria-hidden="true" />
                  ) : (
                    <FiArrowRight aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <noscript>
        <style>{`.sov-workflow-tabs,.sov-workflow-hint,.sov-workflow-panels{display:none!important}`}</style>
        <ol className="sov-workflow-static">
          {steps.map(([number, title, copy]) => (
            <li key={number}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </li>
          ))}
        </ol>
      </noscript>
    </div>
  );
}

export default memo(ServicesWorkflow);
