"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const detailByStage = {
  SCAN: {
    rule: "Use the same product brief across every supplier channel.",
    validation: "Source, contact path and initial product match are recorded.",
  },
  SCREEN: {
    rule: "Check specification, MOQ and timing before requesting full terms.",
    validation: "Capability answers are confirmed against the shared brief.",
  },
  QUOTE: {
    rule: "Compare quotations only after assumptions and included work are aligned.",
    validation: "Price, tooling, MOQ and lead time use the same comparison basis.",
  },
  SAMPLE: {
    rule: "Review the physical result against the documented requirement.",
    validation: "Differences, revisions and approval notes stay attached to the sample.",
  },
  LOCK: {
    rule: "Release production only after the final specification and handoff are clear.",
    validation: "Inspection scope, packaging and receiving requirements are confirmed.",
  },
};

export default function ProductSourcingDecisionFlow({ eyebrow, title, lead, steps }) {
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const chooseStep = (index) => {
    if (activeStep === index) {
      setExpanded((value) => !value);
      return;
    }
    setActiveStep(index);
    setExpanded(true);
  };

  const active = steps[activeStep];
  const detail = detailByStage[active[0]];

  return (
    <div className="sourcing-flow" data-active-step={activeStep + 1}>
      <header className="sourcing-flow__head">
        <div className="sourcing-flow__copy">
          <span className="ff-kicker">{eyebrow}</span>
          <h2>{title}</h2>
          <p>{lead}</p>
        </div>
        <nav className="sourcing-flow__overview" aria-label="Supplier filtering progress">
          <div className="sourcing-flow__overview-line" aria-hidden="true" />
          {steps.map(([stage], index) => (
            <button
              type="button"
              key={stage}
              className={index === activeStep ? "is-current" : index < activeStep ? "is-complete" : ""}
              aria-label={`Step ${index + 1}: ${stage}`}
              aria-current={index === activeStep ? "step" : undefined}
              onClick={() => chooseStep(index)}
            >
              <span>{index + 1}</span>
              <small>{stage}</small>
            </button>
          ))}
        </nav>
      </header>

      <ol className="sourcing-flow__steps" aria-label="Supplier filtering steps">
        {steps.map(([stage, stepTitle, text], index) => {
          const phase = index < 2 ? "initial" : index < 4 ? "evaluation" : "confirmation";
          const linked = hoveredStep !== null && Math.abs(hoveredStep - index) <= 1;
          return (
            <li
              key={stage}
              data-phase={phase}
              data-linked={linked || undefined}
              className={index === activeStep ? "is-active" : ""}
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <button
                type="button"
                aria-expanded={index === activeStep && expanded}
                aria-controls="sourcing-flow-details"
                onClick={() => chooseStep(index)}
              >
                <span className="sourcing-flow__node">{stage}</span>
                <span className="sourcing-flow__number">0{index + 1}</span>
                <strong>{stepTitle}</strong>
                <span className="sourcing-flow__description">{text}</span>
                <FiChevronDown aria-hidden="true" />
              </button>
            </li>
          );
        })}
      </ol>

      <div
        id="sourcing-flow-details"
        className="sourcing-flow__details"
        hidden={!expanded}
        aria-live="polite"
      >
        <div>
          <span>ACTIVE FILTER</span>
          <strong>{active[0]} · {active[1]}</strong>
        </div>
        <dl>
          <div><dt>Screening rule</dt><dd>{detail.rule}</dd></div>
          <div><dt>Validation standard</dt><dd>{detail.validation}</dd></div>
          <div><dt>Eliminations</dt><dd>Recorded from the actual sourcing run; no estimate is shown.</dd></div>
        </dl>
      </div>
    </div>
  );
}
