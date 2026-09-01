"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function ProductSourcingCaseStory({ caseStudy, ui }) {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="sourcing-case-story">
      <aside className="sourcing-case-story__intro">
        <span className="ff-kicker">{caseStudy.eyebrow}</span>
        <h2><span className="sourcing-case-story__title-text">{caseStudy.title}</span></h2>
        <p>{caseStudy.profile}</p>
      </aside>

      <div className="sourcing-case-story__body">
        <header>
          <span>{ui.challenge}</span>
          <p>{caseStudy.challenge}</p>
        </header>

        <ol className="sourcing-case-story__timeline">
          {caseStudy.plan.map((step, index) => {
            const isOpen = expanded === index;
            return (
              <li key={step}>
                <span className="sourcing-case-story__node">0{index + 1}</span>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`sourcing-case-detail-${index}`}
                  onClick={() => setExpanded(isOpen ? null : index)}
                >
                  <strong>{step}</strong>
                  <FiChevronDown aria-hidden="true" />
                </button>
                <div
                  id={`sourcing-case-detail-${index}`}
                  className="sourcing-case-story__detail"
                  hidden={!isOpen}
                >
                  <span>{ui.evidence}</span>
                  <strong>{caseStudy.evidence[index]}</strong>
                </div>
              </li>
            );
          })}
        </ol>

        <blockquote>{caseStudy.outcome}</blockquote>
      </div>
    </div>
  );
}
