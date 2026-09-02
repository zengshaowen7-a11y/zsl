"use client";

import { usePathname } from "@/i18n/navigation";
import { useEffect } from "react";

const patterns = ["orbit", "flow", "tiles", "ripple"];
const tints = ["green", "teal", "sand", "blue"];
const surfaces = ["mint", "white", "whisper", "soft"];
const keySectionPattern = /hero|proof|evidence|case|final|cta|invitation|quote/i;

function makeElement(className, tag = "span") {
  const element = document.createElement(tag);
  element.className = className;
  element.setAttribute("aria-hidden", "true");
  return element;
}

function createAtmosphereLayer({ pattern, align, tint, watermark }) {
  const layer = makeElement(`jw-global-backdrop jw-global-backdrop--${pattern} jw-global-backdrop--${align} jw-global-backdrop--${tint}`, "div");
  layer.dataset.jwGlobalBackdrop = "true";
  layer.dataset.visible = "false";

  layer.append(makeElement("jw-global-backdrop__disc"));
  layer.append(makeElement("jw-global-backdrop__arc"));
  const orbit = makeElement("jw-global-backdrop__orbit");
  orbit.append(makeElement("jw-global-backdrop__orbit-inner", "i"));
  layer.append(orbit);

  const flow = makeElement("jw-global-backdrop__flow");
  flow.append(makeElement("", "i"), makeElement("", "i"), makeElement("", "i"));
  layer.append(flow);

  const tiles = makeElement("jw-global-backdrop__tiles");
  tiles.append(makeElement("", "i"), makeElement("", "i"), makeElement("", "i"));
  layer.append(tiles);

  const ripple = makeElement("jw-global-backdrop__ripple");
  ripple.append(makeElement("", "i"), makeElement("", "i"), makeElement("", "i"));
  layer.append(ripple);

  if (watermark) layer.append(makeElement("jw-global-backdrop__watermark"));
  return layer;
}

function getPageSections() {
  const main = document.querySelector("main");
  if (main?.classList.contains("fh-home")) return [];
  if (main) {
    const sections = [...main.children].filter((element) => element.tagName === "SECTION");
    return sections.length ? sections : [main];
  }
  return [...document.querySelectorAll("body > section")].filter((section) => !section.closest("header, footer"));
}

function isDarkSection(section) {
  const color = window.getComputedStyle(section).backgroundColor;
  const channels = color.match(/[\d.]+/g)?.map(Number) || [];
  if (channels.length >= 3 && (channels.length < 4 || channels[3] > 0)) {
    const luminance = channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
    return luminance < 130;
  }
  return /dark|final|approval/i.test(`${section.className || ""}`);
}

export default function GlobalPageAtmosphere() {
  const pathname = usePathname();

  useEffect(() => {
    const sections = getPageSections();
    if (!sections.length) return;
    const observers = [];

    sections.forEach((section, index) => {
      const pattern = patterns[index % patterns.length];
      const align = index % 2 === 0 ? "right" : "left";
      const tint = tints[index % tints.length];
      const surface = surfaces[index % surfaces.length];
      const identity = `${section.className || ""} ${section.id || ""}`;
      const watermark = index === 0 || index === sections.length - 1 || keySectionPattern.test(identity);
      const layer = createAtmosphereLayer({ pattern, align, tint, watermark });
      const dark = isDarkSection(section);
      if (dark) layer.classList.add("jw-global-backdrop--dark");

      section.classList.add("jw-global-scene");
      section.dataset.jwAtmospherePattern = pattern;
      section.dataset.jwAtmosphereAlign = align;
      section.dataset.jwAtmosphereSurface = dark ? "protected" : surface;
      section.prepend(layer);

      if (!("IntersectionObserver" in window)) {
        layer.dataset.visible = "true";
        return;
      }
      const observer = new IntersectionObserver(([entry]) => {
        layer.dataset.visible = String(entry.isIntersecting);
      }, { threshold: 0.06, rootMargin: "120px 0px" });
      observer.observe(section);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
      sections.forEach((section) => {
        section.querySelectorAll(":scope > [data-jw-global-backdrop]").forEach((layer) => layer.remove());
        section.classList.remove("jw-global-scene");
        delete section.dataset.jwAtmospherePattern;
        delete section.dataset.jwAtmosphereAlign;
        delete section.dataset.jwAtmosphereSurface;
      });
    };
  }, [pathname]);

  return null;
}
