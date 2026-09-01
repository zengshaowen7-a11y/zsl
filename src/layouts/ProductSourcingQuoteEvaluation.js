"use client";

import { useState } from "react";
import {
  FiAlertTriangle,
  FiChevronDown,
  FiDollarSign,
  FiInfo,
  FiPackage,
  FiTruck,
} from "react-icons/fi";

const icons = [FiPackage, FiDollarSign, FiAlertTriangle, FiTruck];
export default function ProductSourcingQuoteEvaluation({ spotlight, ui }) {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="quote-evaluation">
      <header className="quote-evaluation__head">
        <div>
          <span className="ff-kicker">{spotlight.eyebrow}</span>
          <h2>{spotlight.title}</h2>
        </div>
        <aside>
          <FiInfo aria-hidden="true" />
          <p>{spotlight.lead}</p>
        </aside>
      </header>

      <ol className="quote-evaluation__grid" aria-label={ui.aria}>
        {spotlight.items.map(([title, description], index) => {
          const Icon = icons[index];
          const isExpanded = expanded === index;
          return (
            <li key={title} data-depth={index + 1}>
              <article>
                <button
                  type="button"
                  className="quote-evaluation__card"
                  aria-expanded={isExpanded}
                  aria-controls={`quote-dimension-${index}`}
                  onClick={() => setExpanded(isExpanded ? null : index)}
                >
                  <span className="quote-evaluation__badge">0{index + 1}</span>
                  <Icon className="quote-evaluation__icon" aria-hidden="true" />
                  <strong>{title}</strong>
                  <span className="quote-evaluation__description">{description}</span>
                  <FiChevronDown className="quote-evaluation__chevron" aria-hidden="true" />
                </button>
                <div
                  id={`quote-dimension-${index}`}
                  className="quote-evaluation__details"
                  hidden={!isExpanded}
                >
                  <span>{ui.checklist}</span>
                  <ul>
                    {ui.checks[index].map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
