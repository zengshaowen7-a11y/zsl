"use client";

import Image from "next/image";
import { memo, useEffect, useRef, useState } from "react";
import { FiCheckCircle, FiClipboard, FiMessageCircle, FiPackage } from "react-icons/fi";

const icons = [FiMessageCircle, FiCheckCircle, FiClipboard, FiPackage];
const images = [
  "/images/generated/account-support/one-clear-contact.png",
  "/images/generated/account-support/risk-checked-early.png",
  "/images/generated/account-support/shared-order-notes.png",
  "/images/generated/account-support/ready-to-fulfill.png",
];

function AccountSupportScene({ content, cards }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const rootRef = useRef(null);
  const relayItems = cards?.length ? cards : content.points.map((point) => [point, content.lead]);

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
      className="wjw-container wjw-account-scene"
      data-active={activeIndex + 1}
    >
      <header className="wjw-account-heading">
        <p className="wjw-kicker">{content.kicker}</p>
        <h2>{content.title}</h2>
        <p>{content.lead}</p>
      </header>

      <div className="wjw-account-stage">
        <figure className="wjw-account-media">
          {images.map((src, index) => (
            <Image
              className={activeIndex === index ? "is-active" : ""}
              src={src}
              alt={`${relayItems[index][0]}: ${content.imageAlt}`}
              fill
              sizes="(max-width: 850px) 100vw, 55vw"
              key={src}
            />
          ))}
        </figure>

        <div className="wjw-account-relay" role="tablist" aria-label={content.title}>
          {relayItems.map(([point, detail], index) => {
            const Icon = icons[index];
            const isActive = activeIndex === index;
            return (
              <button
                type="button"
                role="tab"
                aria-selected={isActive}
                className={isActive ? "is-active" : ""}
                onClick={() => setActiveIndex(index)}
                key={point}
              >
                <span className="wjw-account-icon"><Icon aria-hidden="true" /></span>
                <span className="wjw-account-tab-copy"><strong>{point}</strong><small>{detail}</small></span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default memo(AccountSupportScene);
