"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function ProductSourcingDecisionFlow({ eyebrow, title, lead, steps, ui }) {
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

  return (
    <div className="sourcing-flow" data-active-step={activeStep + 1}>
      <header className="sourcing-flow__head">
        <div className="sourcing-flow__copy">
          <span className="ff-kicker">{eyebrow}</span>
          <h2>{title}</h2>
          <p>{lead}</p>
        </div>
        <nav className="sourcing-flow__overview" aria-label={ui.progress}>
          <div className="sourcing-flow__overview-line" aria-hidden="true" />
          {steps.map(([stage], index) => (
            <button
              type="button"
              key={stage}
              className={index === activeStep ? "is-current" : index < activeStep ? "is-complete" : ""}
              aria-label={`${ui.step} ${index + 1}: ${stage}`}
              aria-current={index === activeStep ? "step" : undefined}
              onClick={() => chooseStep(index)}
            >
              <span>{index + 1}</span>
              <small>{stage}</small>
            </button>
          ))}
        </nav>
      </header>

      <ol className="sourcing-flow__steps" aria-label={ui.steps}>
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
          <span>{ui.active}</span>
          <strong>{active[0]} · {active[1]}</strong>
        </div>
        <dl>
          <div><dt>{ui.rule}</dt><dd>{active[2]}</dd></div>
          <div><dt>{ui.validation}</dt><dd>{ui.validationText}</dd></div>
          <div><dt>{ui.eliminations}</dt><dd>{ui.eliminationText}</dd></div>
        </dl>
      </div>
    </div>
  );
}
