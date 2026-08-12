"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const groups = [
      [
        "main section:not(:first-child) h2, main section:not(:first-child) .smt-kicker, main section:not(:first-child) .ff-eyebrow",
        "reveal-up",
      ],
      [
        ".smt-service-card, .detail-card-grid article, .detail-result-grid article, .ff-service-card, .ff-compare-card, .ff-stage-card, .ff-value-card, .fsp-service-card, .fsp-proof-grid article, .fsp-workflow-grid article, .fsp-ops-node, .sdp-outcomes article, .sdp-capability-grid article, .sdp-process-grid article, .sdp-spotlight-grid article, .sdp-related-grid > a, .sdp-feature-system-flow article, .fh-service-card, .fh-service-art-icon, .fh-testimonial-card, .fh-profile-card, .fh-story-card, .fh-video-slot, .fh-gallery-item, .fh-youtube-placeholder, .fh-testimonial-proof-grid article, .fh-brand-material-grid > .fh-material-slot, .fh-proof-band-grid > div, .about-proof-grid article, .about-department-grid article, .about-principle-grid article, .about-role-grid article, .about-link-grid article, .about-material-visual > span",
        "reveal-scale",
      ],
      [
        ".smt-step, .detail-list > div, .detail-guide-panel > div, .ff-process-list article, .ff-scope-list article, .ff-expectation-list article, .fh-evidence-list article, .about-facility-grid .about-media-card",
        "reveal-right",
      ],
      [
        ".smt-adv-main, .detail-guide-panel:first-child, .ff-quality-copy, .ff-inner-section:nth-of-type(even) .ff-inner-copy, .fsp-assurance-grid > div:first-child, .fsp-feature > div:last-child",
        "reveal-left",
      ],
      [
        ".smt-adv-stack, .detail-guide-panel:last-child, .ff-quality-media, .ff-inner-section:nth-of-type(odd) .ff-inner-copy, .fsp-issue-panel, .fsp-feature-media",
        "reveal-right",
      ],
      [
        ".smt-form, .detail-hero-card, .ff-quote-panel, .ff-media-placeholder, .ff-inner-media, .about-story-visual, .about-team-photo, .about-company-card",
        "reveal-scale",
      ],
      [
        ".smt-faq details, .detail-mini-faq details, .ff-faq details, .fh-services-cta, .fh-review-link, .fh-platform-heading",
        "reveal-up",
      ],
    ];

    const elements = [];
    groups.forEach(([selector, effect]) => {
      document.querySelectorAll(selector).forEach((element, index) => {
        element.classList.add("scroll-reveal", effect);
        element.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 90}ms`);
        elements.push(element);
      });
    });

    const heroItems = document.querySelectorAll(
      ".smt-hero-grid > *, .detail-hero-grid > *, .ff-hero-grid > *, .ff-inner-hero-grid > *, .fsp-hero-grid > *, .sdp-hero-grid > *, .about-hero-grid > *, .testimonial-page-hero-grid > *",
    );
    heroItems.forEach((element, index) => {
      element.classList.add("scroll-reveal", index % 2 ? "reveal-right" : "reveal-left");
      element.style.setProperty("--reveal-delay", `${180 + index * 120}ms`);
      requestAnimationFrame(() => element.classList.add("is-visible"));
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -7% 0px" });

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
