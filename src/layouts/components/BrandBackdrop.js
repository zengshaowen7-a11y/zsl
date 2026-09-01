"use client";

import { memo, useEffect, useRef } from "react";
import Image from "next/image";
import { FiGlobe, FiLayers, FiMessageCircle, FiPackage, FiSend, FiShield } from "react-icons/fi";

const motifIcons = {
  parcel: FiPackage,
  plane: FiSend,
  globe: FiGlobe,
  layers: FiLayers,
  message: FiMessageCircle,
  shield: FiShield,
};

/** Decorative only. Parent section needs jw-scene; variants work on any page. */
function BrandBackdrop({ variant = "arcs", align = "right", watermark = false, globe = variant === "network", eager = false, motifs = [], tint = "green" }) {
  const backdropRef = useRef(null);

  useEffect(() => {
    const backdrop = backdropRef.current;
    if (!backdrop || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(([entry]) => {
      backdrop.dataset.visible = String(entry.isIntersecting);
    }, { threshold: 0.12 });
    observer.observe(backdrop);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={backdropRef}
      className={`jw-backdrop jw-backdrop--${variant} jw-backdrop--${align} jw-backdrop--${tint}`}
      aria-hidden="true"
      data-visible="false"
    >
      {["arcs", "orbit", "network"].includes(variant) && <>
        <span className="jw-backdrop__disc" />
        <span className="jw-backdrop__arc" />
      </>}
      {["orbit", "network"].includes(variant) && (
        <span className="jw-backdrop__orbit"><span /></span>
      )}
      {["flow", "network"].includes(variant) && (
        <span className="jw-backdrop__flow"><i /><i /><i /></span>
      )}
      {globe && <span className="jw-backdrop__globe"><FiGlobe /></span>}
      {variant === "tiles" && (
        <span className="jw-backdrop__tiles"><i /><i /><i /></span>
      )}
      {variant === "scan" && (
        <span className="jw-backdrop__scan"><i /><i /><b /></span>
      )}
      {variant === "ripple" && (
        <span className="jw-backdrop__ripple"><i /><i /><i /></span>
      )}
      {motifs.map((name, index) => {
        const Icon = motifIcons[name];
        return Icon ? <span className={`jw-backdrop__motif jw-backdrop__motif--${index + 1}`} key={`${name}-${index}`}><Icon /></span> : null;
      })}
      {watermark && (
        <span className="jw-backdrop__watermark">
          <Image
            src="/images/brand/jw-link-fulfill-scale-source.jpg"
            alt=""
            width={1280}
            height={1280}
            sizes="(max-width: 767px) 240px, 460px"
            loading={eager ? "eager" : "lazy"}
            unoptimized
          />
        </span>
      )}
    </div>
  );
}

export default memo(BrandBackdrop);
