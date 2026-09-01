"use client";

import Image from "next/image";
import { useState } from "react";
import { FiBox, FiSearch, FiTruck } from "react-icons/fi";

const zoneAssets = [
  ["/images/generated/jw-receiving-team-v3.png", FiBox],
  ["/images/quality-gallery/warehouse-package-check.jpg", FiSearch],
  ["/images/generated/jw-dispatch-scan-v3.png", FiTruck],
];

export default function WarehouseControlZones({ proof, ui }) {
  const [activeZone, setActiveZone] = useState(1);
  const zoneMedia = ui.media.map(([alt, label], index) => ({
    alt,
    label,
    image: zoneAssets[index][0],
    Icon: zoneAssets[index][1],
  }));
  const activeMedia = zoneMedia[activeZone];
  const ActiveIcon = activeMedia.Icon;

  return (
    <div className="container sdr-warehouse-zones">
      <header className="sdr-warehouse-zones-head">
        <div>
          <span className="ff-kicker">{proof.eyebrow}</span>
          <h2>{proof.title}</h2>
        </div>
        <p>{proof.note}</p>
      </header>

      <div className="sdr-warehouse-zones-body">
        <figure className="sdr-warehouse-zones-visual">
          <div className="sdr-warehouse-zones-media" aria-live="polite">
            {zoneMedia.map((media, index) => (
              <Image
                className={index === activeZone ? "is-active" : ""}
                key={media.image}
                src={media.image}
                alt={index === activeZone ? media.alt : ""}
                fill
                sizes="(max-width: 900px) 100vw, 42vw"
                aria-hidden={index !== activeZone}
              />
            ))}
          </div>
          <figcaption key={activeMedia.label}>
            <span aria-hidden="true"><ActiveIcon /></span>
            <div><small>{ui.controlPoint}</small><strong>{activeMedia.label}</strong></div>
          </figcaption>
        </figure>

        <div className="sdr-warehouse-zones-flow">
          <span className="sdr-warehouse-zones-line" aria-hidden="true" />
          {proof.rows.map((row, index) => {
            const ZoneIcon = zoneMedia[index]?.Icon || FiBox;
            const isActive = activeZone === index;

            return (
              <button
                type="button"
                className={`sdr-warehouse-zone${isActive ? " is-active" : ""}`}
                key={row[0]}
                aria-pressed={isActive}
                onClick={() => setActiveZone(index)}
                onFocus={() => setActiveZone(index)}
                onMouseEnter={() => setActiveZone(index)}
              >
                <span className="sdr-warehouse-zone-index"><ZoneIcon aria-hidden="true" /></span>
                <span className="sdr-warehouse-zone-copy">
                  <strong>{row[0]}</strong>
                  <em className="sdr-warehouse-zone-state" aria-hidden="true">{isActive ? ui.active : ui.viewZone}</em>
                  <span><small>{proof.columns[0]}</small><span>{row[0]}</span></span>
                </span>
                <span className="sdr-warehouse-zone-data">
                  <span><small>{proof.columns[1]}</small><strong>{row[1]}</strong></span>
                  <span><small>{proof.columns[2]}</small><strong>{row[2]}</strong></span>
                  <span className="sdr-warehouse-zone-output"><small>{proof.columns[3]}</small><strong>{row[3]}</strong></span>
                </span>
                <span className="sdr-warehouse-zone-number" aria-hidden="true">0{index + 1}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
