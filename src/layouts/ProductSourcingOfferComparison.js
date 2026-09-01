"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  FiCheck,
  FiChevronDown,
  FiClock,
  FiDollarSign,
  FiHash,
} from "react-icons/fi";

const columnMeta = {
  price: { labelKey: "price", icon: FiDollarSign },
  moq: { labelKey: "moq", icon: FiHash },
  leadTime: { labelKey: "lead", icon: FiClock },
};

const suppliers = [
  { id: "a", name: "Supplier A", price: 8.4, moq: 300, leadTime: 18, best: true },
  { id: "b", name: "Supplier B", price: 7.95, moq: 500, leadTime: 24 },
  { id: "c", name: "Supplier C", price: 9.1, moq: 100, leadTime: 14 },
];

export default function ProductSourcingOfferComparison({ proof, ui }) {
  const [sort, setSort] = useState({ key: null, direction: "asc" });
  const [selected, setSelected] = useState([]);
  const [expanded, setExpanded] = useState(null);

  const rows = useMemo(() => {
    if (!sort.key) return suppliers;
    return [...suppliers].sort((a, b) => {
      const difference = a[sort.key] - b[sort.key];
      return sort.direction === "asc" ? difference : -difference;
    });
  }, [sort]);

  const sortBy = (key) => {
    setSort((current) => ({
      key,
      direction: current.key === key && current.direction === "asc" ? "desc" : "asc",
    }));
  };

  const toggleSelected = (id) => {
    setSelected((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : current.length < 3
          ? [...current, id]
          : current,
    );
  };

  return (
    <div className="sourcing-offers">
      <figure className="sourcing-offers__media">
        <Image
          src={proof.image}
          alt={proof.title}
          fill
          sizes="(max-width: 959px) 100vw, 42vw"
          unoptimized={proof.image.includes("/generated/")}
        />
      </figure>

      <div className="sourcing-offers__panel">
        <header>
          <span className="ff-kicker">{proof.eyebrow}</span>
          <h2>{proof.title}</h2>
        </header>

        <div className="sourcing-offers__table" role="table" aria-label={ui.aria}>
          <div className="sourcing-offers__head" role="row">
            <span role="columnheader">{ui.compare}</span>
            <span role="columnheader">{ui.supplier}</span>
            {Object.entries(columnMeta).map(([key, meta]) => {
              const Icon = meta.icon;
              const active = sort.key === key;
              return (
                <button
                  key={key}
                  type="button"
                  role="columnheader"
                  aria-sort={active ? (sort.direction === "asc" ? "ascending" : "descending") : "none"}
                  onClick={() => sortBy(key)}
                >
                  <Icon aria-hidden="true" />
                  <span>{ui[meta.labelKey]}</span>
                  <small aria-hidden="true">{active ? (sort.direction === "asc" ? "↑" : "↓") : "↕"}</small>
                </button>
              );
            })}
          </div>

          <div className="sourcing-offers__body">
            {rows.map((supplier) => {
              const checked = selected.includes(supplier.id);
              const muted = selected.length >= 2 && !checked;
              const isOpen = expanded === supplier.id;
              return (
                <div
                  className="sourcing-offers__group"
                  data-best={supplier.best || undefined}
                  data-selected={checked || undefined}
                  data-muted={muted || undefined}
                  key={supplier.id}
                >
                  <div className="sourcing-offers__row" role="row">
                    <span role="cell" className="sourcing-offers__select">
                      <input
                        type="checkbox"
                        aria-label={`${ui.compareSupplier} ${ui.supplier} ${supplier.id.toUpperCase()}`}
                        checked={checked}
                        disabled={!checked && selected.length >= 3}
                        onChange={() => toggleSelected(supplier.id)}
                      />
                    </span>
                    <span role="cell" className="sourcing-offers__supplier">
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`supplier-details-${supplier.id}`}
                        onClick={() => setExpanded(isOpen ? null : supplier.id)}
                      >
                        <span>{ui.supplier} {supplier.id.toUpperCase()}</span>
                        {supplier.best ? <small><FiCheck aria-hidden="true" /> {ui.best}</small> : null}
                        <FiChevronDown aria-hidden="true" />
                      </button>
                    </span>
                    <strong role="cell" className="sourcing-offers__price">${supplier.price.toFixed(2)}</strong>
                    <span role="cell">{supplier.moq}</span>
                    <span role="cell">{supplier.leadTime} {ui.days}</span>
                  </div>
                  <div
                    id={`supplier-details-${supplier.id}`}
                    className="sourcing-offers__details"
                    hidden={!isOpen}
                  >
                    {ui.fields.map(([label, value]) => (
                      <div key={label}><span>{label}</span><strong>{value}</strong></div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <footer>
          <p>{proof.note}</p>
          <span>{selected.length >= 2 ? `${selected.length} ${ui.selected}` : ui.select}</span>
        </footer>
      </div>
    </div>
  );
}
