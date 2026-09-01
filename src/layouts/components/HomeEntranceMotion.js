"use client";

import { memo, useEffect, useRef } from "react";

// One choreography per section. Targets are siblings, never nested animated
// wrappers, so carousels, focus rings and the quote form keep their layout.
export const homeEntranceScenes = [
  [".fh-hero-redesign", [
    [".ff-hero-copy-wrap > .ff-kicker", "flash"],
    [".fh-hero-title", "rise", 80],
    [".ff-hero-copy-wrap > p", "rise", 150],
    [".ff-actions", "rise", 220],
    [".ff-proof-list", "flash", 280],
    [".fh-hero-player-shell", "right", 120],
  ]],
  [".fh-platform-data-strip", [[".fh-platform-stat", "rise", 0, 80], [".fh-platform-row", "flash"]]],
  [".fh-core-advantages", [[".fh-core-heading", "flash"], [".fh-core-item", "rise", 80, 120], [".fh-core-link", "flash"]]],
  [".fh-fixed-process", [[".fh-process-heading", "rise"], [".fh-fixed-process-step", "left", 40, 70], [".fh-process-link", "flash"]]],
  [".fh-core-services", [[".fh-services-heading", "flash"], [".fh-core-service-card", "zoom", 40, 100], [".fh-core-services-cta", "rise"]]],
  [".fh-fulfillment-compare", [[".fh-fulfillment-compare-heading", "rise"], [".fh-fulfillment-compare-typical", "left"], [".fh-fulfillment-compare-jw", "left", 140], [".fh-difference-media", "right", 100]]],
  [".fh-qc-proof", [[".fh-qc-proof-heading", "flash"], [".fh-qc-proof-list > li", "left", 0, 55], [".fh-qc-report", "zoom", 120], [".fh-qc-proof-link", "rise"]]],
  [".fh-home-testimonials", [[".fh-home-testimonials-heading", "rise"], [".fh-home-testimonial", "rise", 60, 120], [".fh-home-testimonials-link", "flash"]]],
  [".fh-home-faq", [[".fh-home-faq-intro", "flash"], [".fh-home-faq-list > article", "rise", 0, 65]]],
  [".fh-home-quote", [[".fh-home-quote-copy", "left"], [".fh-home-quote-form", "right", 160]]],
];

function HomeEntranceMotion({ rootRef, locale, paused }) {
  const active = useRef(new Map());

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !window.IntersectionObserver || !Element.prototype.animate) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = active.current;
    const targets = new Map();

    const settle = (element) => {
      animations.get(element)?.cancel();
      animations.delete(element);
      element.dataset.jwEntrance = "done";
    };
    const enter = (element) => {
      const { effect, delay } = targets.get(element);
      const rect = element.getBoundingClientRect();
      const compact = window.innerWidth < 768;
      if (reduce.matches || root.dataset.jwMotion === "paused" ||
          element.contains(document.activeElement) || rect.bottom <= 80) {
        settle(element);
        return;
      }
      const distance = compact ? 22 : 64;
      // Clamp sideways motion to available gutters; never grow page scroll width.
      const left = Math.max(0, Math.min(distance, rect.left - 4));
      const right = Math.max(0, Math.min(distance, document.documentElement.clientWidth - rect.right - 4));
      const from = {
        flash: "scale(.985)",
        rise: `translateY(${distance}px)`,
        left: `translateX(${-left}px)`,
        right: `translateX(${right}px)`,
        zoom: `translateY(${compact ? 18 : 36}px) scale(.94)`,
      }[effect];
      element.dataset.jwEntrance = "entering";
      const animation = element.animate([
        { opacity: 0, transform: from },
        { opacity: 1, transform: "none" },
      ], {
        id: "jw-home-entrance",
        duration: compact ? 520 : effect === "flash" ? 620 : 880,
        delay: compact ? Math.min(delay, 100) : delay,
        easing: "cubic-bezier(.16, 1, .3, 1)",
        fill: "backwards",
      });
      animations.set(element, animation);
      animation.onfinish = () => settle(element);
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return;
        observer.unobserve(target);
        enter(target);
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -32px 0px" });

    homeEntranceScenes.forEach(([sceneSelector, groups]) => {
      const scene = root.querySelector(sceneSelector);
      groups.forEach(([selector, effect, delay = 0, stagger = 0]) => {
        scene?.querySelectorAll(selector).forEach((element, index) => {
          targets.set(element, { effect, delay: Math.min(delay + index * stagger, 320) });
          element.dataset.jwEntranceEffect = effect;
          // Progressive enhancement: SSR/no-JS content is always visible.
          // Already-read content above a restored scroll position never disappears.
          if (element.getBoundingClientRect().bottom <= 80) settle(element);
          else {
            element.dataset.jwEntrance = "waiting";
            observer.observe(element);
          }
        });
      });
    });

    const revealFocused = (event) => {
      for (const element of targets.keys()) {
        if (!element.contains(event.target)) continue;
        observer.unobserve(element);
        settle(element);
      }
    };
    const revealAll = () => {
      observer.disconnect();
      targets.forEach((_, element) => settle(element));
    };
    const onPreference = () => { if (reduce.matches) revealAll(); };
    root.addEventListener("focusin", revealFocused);
    root.addEventListener("pointerdown", revealFocused);
    reduce.addEventListener("change", onPreference);
    window.addEventListener("beforeprint", revealAll);
    if (reduce.matches) revealAll();

    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
      targets.forEach((_, element) => {
        delete element.dataset.jwEntrance;
        delete element.dataset.jwEntranceEffect;
      });
      root.removeEventListener("focusin", revealFocused);
      root.removeEventListener("pointerdown", revealFocused);
      reduce.removeEventListener("change", onPreference);
      window.removeEventListener("beforeprint", revealAll);
    };
  }, [rootRef, locale]);

  useEffect(() => {
    if (!paused) return;
    // Stop entrances at their readable final state, never frozen half-invisible.
    active.current.forEach((animation, element) => {
      animation.cancel();
      element.dataset.jwEntrance = "done";
    });
    active.current.clear();
  }, [paused]);

  return null;
}

export default memo(HomeEntranceMotion);
