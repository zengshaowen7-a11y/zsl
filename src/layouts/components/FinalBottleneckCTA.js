"use client";

import { memo, useState } from "react";
import { FiArrowRight, FiCheckCircle, FiClipboard, FiMessageCircle, FiPackage } from "react-icons/fi";
import { Link } from "@/i18n/navigation";

const icons = [FiMessageCircle, FiCheckCircle, FiClipboard, FiPackage];

function FinalBottleneckCTA({ content, options }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTitle, activeDetail] = options[activeIndex];
  const ActiveIcon = icons[activeIndex];

  return (
    <div className="wjw-container wjw-final-diagnostic">
      <div className="wjw-final-intro">
        <p className="wjw-kicker">{content.kicker}</p>
        <h2>{content.title}</h2>
        <p>{content.lead}</p>
      </div>

      <div className="wjw-final-options" role="tablist" aria-label={content.title}>
        {options.map(([title], index) => {
          const Icon = icons[index];
          const isActive = activeIndex === index;
          return (
            <button
              type="button"
              role="tab"
              aria-selected={isActive}
              className={isActive ? "is-active" : ""}
              onClick={() => setActiveIndex(index)}
              key={title}
            >
              <Icon aria-hidden="true" />
              <span>{title}</span>
            </button>
          );
        })}
      </div>

      <aside className="wjw-final-answer" aria-live="polite">
        <div className="wjw-final-answer-copy" key={activeTitle}>
          <span><ActiveIcon aria-hidden="true" /></span>
          <div><strong>{activeTitle}</strong><p>{activeDetail}</p></div>
        </div>
        <Link href="/contact" className="wjw-button wjw-button-light">
          {content.button} <FiArrowRight aria-hidden="true" />
        </Link>
      </aside>
    </div>
  );
}

export default memo(FinalBottleneckCTA);
