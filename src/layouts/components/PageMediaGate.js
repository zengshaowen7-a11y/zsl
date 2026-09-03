"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "@/i18n/navigation";

const MAX_WAIT_MS = 5000;
const MIN_VISIBLE_MS = 260;
const loadingCopy = {
  de: "Inhalte werden vorbereitet",
  en: "Preparing your experience",
  es: "Preparando tu experiencia",
  fr: "Préparation de votre expérience",
  nl: "Je ervaring wordt voorbereid",
  pl: "Przygotowujemy stronę",
};

function waitForImage(image) {
  if (image.complete) return Promise.resolve();
  return new Promise((resolve) => {
    const settle = () => resolve();
    image.addEventListener("load", settle, { once: true });
    image.addEventListener("error", settle, { once: true });
  });
}

function waitForVideo(video) {
  if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) return Promise.resolve();

  const videoReady = new Promise((resolve) => {
    const settle = () => resolve();
    video.addEventListener("loadeddata", settle, { once: true });
    video.addEventListener("canplay", settle, { once: true });
    video.addEventListener("error", settle, { once: true });
  });

  const poster = video.getAttribute("poster");
  if (!poster) return videoReady;

  const posterReady = new Promise((resolve) => {
    const image = new window.Image();
    image.onload = resolve;
    image.onerror = resolve;
    image.src = poster;
  });

  return Promise.race([videoReady, posterReady]);
}

function watchMediaState(root) {
  const cleanups = [];
  root.querySelectorAll("img, video").forEach((media) => {
    const markReady = () => { media.dataset.mediaReady = "true"; };
    const markError = () => { media.dataset.mediaReady = "error"; };
    const ready = media.tagName === "IMG"
      ? media.complete
      : media.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA;

    if (ready) markReady();
    media.addEventListener(media.tagName === "IMG" ? "load" : "loadeddata", markReady);
    media.addEventListener("error", markError);
    cleanups.push(() => {
      media.removeEventListener(media.tagName === "IMG" ? "load" : "loadeddata", markReady);
      media.removeEventListener("error", markError);
    });
  });
  return () => cleanups.forEach((cleanup) => cleanup());
}

export default function PageMediaGate({ children, locale = "en" }) {
  const pathname = usePathname();
  const contentRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const root = contentRef.current;
    if (!root) return undefined;

    let cancelled = false;
    setReady(false);
    const startedAt = performance.now();
    const stopWatching = watchMediaState(root);

    const explicitlyCritical = Array.from(root.querySelectorAll("[data-critical-media]"));
    const firstSection = root.querySelector("main > section:first-of-type");
    const inferredCritical = firstSection
      ? Array.from(firstSection.querySelectorAll("img, video"))
      : [];
    const criticalMedia = [...new Set([...explicitlyCritical, ...inferredCritical])]
      .filter((element) => element.tagName === "IMG" || element.tagName === "VIDEO");

    const mediaReady = Promise.all(criticalMedia.map((media) => (
      media.tagName === "VIDEO" ? waitForVideo(media) : waitForImage(media)
    )));
    const fontsReady = document.fonts?.ready?.catch(() => undefined) || Promise.resolve();
    const timeout = new Promise((resolve) => window.setTimeout(resolve, MAX_WAIT_MS));

    Promise.race([Promise.all([mediaReady, fontsReady]), timeout]).then(() => {
      const remaining = Math.max(0, MIN_VISIBLE_MS - (performance.now() - startedAt));
      window.setTimeout(() => {
        if (!cancelled) setReady(true);
      }, remaining);
    });

    return () => {
      cancelled = true;
      stopWatching();
    };
  }, [pathname]);

  return (
    <div className={`jw-page-gate ${ready ? "is-ready" : "is-loading"}`}>
      <div className="jw-page-loader" role="status" aria-live="polite" aria-label={loadingCopy[locale] || loadingCopy.en}>
        <div className="jw-page-loader-mark" aria-hidden="true">JW</div>
        <div className="jw-page-loader-track" aria-hidden="true"><span /></div>
        <p>{loadingCopy[locale] || loadingCopy.en}</p>
      </div>
      <div ref={contentRef} className="jw-page-content" aria-busy={!ready}>
        {children}
      </div>
    </div>
  );
}
