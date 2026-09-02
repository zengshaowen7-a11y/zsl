"use client";

import { memo, useId, useState } from "react";
import { FiChevronDown, FiClipboard, FiSearch, FiSend, FiShield } from "react-icons/fi";

const icons = [FiSearch, FiSend, FiClipboard, FiShield];

function PreparationChecklist({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const idPrefix = useId();

  return (
    <ul className="hiw-brief-list">
      {items.map(({ title, copy }, index) => {
        const Icon = icons[index] || FiClipboard;
        const isOpen = activeIndex === index;
        const panelId = `${idPrefix}-preparation-${index}`;

        return (
          <li
            className={isOpen ? "is-open" : ""}
            data-preparation-reveal
            key={title}
            style={{ "--preparation-delay": `${index * 90}ms` }}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setActiveIndex(isOpen ? -1 : index)}
            >
              <span className="hiw-brief-number">{String(index + 1).padStart(2, "0")}</span>
              <span className="hiw-brief-icon"><Icon aria-hidden="true" /></span>
              <span className="hiw-brief-title">{title}</span>
              <FiChevronDown className="hiw-brief-chevron" aria-hidden="true" />
            </button>
            <div className="hiw-brief-panel" id={panelId} data-open={isOpen ? "true" : "false"}>
              <p>{copy}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default memo(PreparationChecklist);
