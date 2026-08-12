"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight, FiCheck, FiPlay, FiStar } from "react-icons/fi";

const testimonialDrafts = [
  {
    initials: "AR",
    name: "Anna R.",
    country: "United Kingdom",
    flag: "🇬🇧",
    store: "Skincare brand",
    quote:
      "We needed more than a low product price. The team helped us compare samples, define the quality points that mattered and prepare packaging that felt consistent with our store. The biggest improvement was knowing who owned each step and receiving useful updates before an order moved forward.",
  },
  {
    initials: "MT",
    name: "Marcus T.",
    country: "Germany",
    flag: "🇩🇪",
    store: "Home & living store",
    quote:
      "Our previous workflow involved several suppliers and too many separate conversations. JW brought receiving, inspection, inventory and dispatch into one clearer process. When something needs attention, we now get the context early enough to make a decision instead of learning about it from a customer.",
  },
  {
    initials: "SL",
    name: "Sofia L.",
    country: "Spain",
    flag: "🇪🇸",
    store: "Fashion accessories",
    quote:
      "Communication has become much easier. Product questions, packaging details and shipping requirements are collected in one place, so repeat orders no longer feel like starting again. The team also helped us make the unboxing experience more recognisable without making the operation unnecessarily complicated.",
  },
  {
    initials: "EC",
    name: "Ethan C.",
    country: "Australia",
    flag: "🇦🇺",
    store: "Electronics accessories",
    quote:
      "The inspection plan gave us a practical way to control the details customers notice most. Instead of a generic check, we agreed on the product functions, accessories and packing condition to review before dispatch. That structure has made launches calmer and exceptions easier to understand.",
  },
  {
    initials: "CB",
    name: "Claire B.",
    country: "France",
    flag: "🇫🇷",
    store: "Beauty & personal care",
    quote:
      "From supplier follow-up to branded inserts, the team keeps the commercial goal in view while handling the operational details. We appreciate that recommendations are explained clearly, including the trade-offs around minimum quantities, lead times and packaging choices.",
  },
  {
    initials: "NK",
    name: "Noah K.",
    country: "Netherlands",
    flag: "🇳🇱",
    store: "Multi-SKU Shopify store",
    quote:
      "As our catalogue grew, consistency became more important than chasing every small saving. A documented receiving and fulfilment flow now gives our team a clearer picture of inventory, packing rules and tracking handoffs. It feels like an operation we can actually build on.",
  },
];

const proofSteps = [
  ["01", "Client permission", "Publish only after the customer approves their name, profile and final wording."],
  ["02", "Useful context", "Include the store type and the operational challenge so the quote has real meaning."],
  ["03", "Evidence behind the story", "Pair customer feedback with approved workflow, warehouse or delivery evidence."],
];

export default function HomeTestimonials() {
  const [page, setPage] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setPage((current) => (current + 1) % 2), 6500);
    return () => window.clearInterval(timer);
  }, []);

  const showPage = (nextPage) => setPage((nextPage + 2) % 2);

  return (
    <section id="testimonials" className="ff-section fh-testimonials" aria-labelledby="testimonials-title">
      <div className="fh-testimonial-orbit" aria-hidden="true"><i /><i /><i /></div>
      <div className="container">
        <div className="fh-testimonial-heading">
          <div>
            <span className="ff-kicker ff-kicker-light">CLIENT VOICES · DRAFT CONTENT</span>
            <h2 id="testimonials-title">What a dependable fulfilment partnership should feel like.</h2>
          </div>
          <div className="fh-testimonial-heading-copy">
            <p>Six professionally written profile drafts based on common sourcing and fulfilment needs. Replace each one with a client-approved quote before presenting it as verified proof.</p>
            <span><FiCheck /> Honest placeholders — never presented as published customer reviews</span>
          </div>
        </div>

        <div className="fh-testimonial-stage">
          <div className="fh-testimonial-track" style={{ "--testimonial-page": page }}>
            {testimonialDrafts.map((item, index) => (
              <article className="fh-testimonial-card" key={item.name}>
                <div className="fh-testimonial-stars" aria-label="Five star layout placeholder">
                  {[0, 1, 2, 3, 4].map((star) => <FiStar key={star} />)}
                </div>
                <span className="fh-testimonial-quote-mark" aria-hidden="true">“</span>
                <p>{item.quote}</p>
                <footer>
                  <span className={`fh-testimonial-avatar fh-testimonial-avatar-${index + 1}`} aria-hidden="true">{item.initials}</span>
                  <span><strong>{item.name} <b>{item.flag}</b></strong><small>{item.country} · {item.store}</small></span>
                </footer>
                <small className="fh-testimonial-draft-label">Sample profile · client approval required</small>
              </article>
            ))}
          </div>
        </div>

        <div className="fh-testimonial-controls" aria-label="Testimonial pages">
          <button type="button" onClick={() => showPage(page - 1)} aria-label="Previous testimonial page"><FiArrowLeft /></button>
          <span><i className={page === 0 ? "is-active" : ""} /><i className={page === 1 ? "is-active" : ""} /></span>
          <button type="button" onClick={() => showPage(page + 1)} aria-label="Next testimonial page"><FiArrowRight /></button>
        </div>

        <div className="fh-testimonial-video-section">
          <div className="fh-testimonial-video-heading">
            <span className="ff-kicker">THE OPERATION BEHIND THE STORIES</span>
            <h3>Show visitors where their orders will actually be handled.</h3>
            <p>These two empty 16:9 spaces are ready for your future YouTube warehouse and team videos. Add the video IDs when the company footage is approved.</p>
          </div>
          <div className="fh-testimonial-video-grid">
            <article className="fh-youtube-placeholder">
              <div><span><FiPlay /></span><small>YOUTUBE VIDEO 01</small></div>
              <footer><strong>Warehouse & fulfilment walkthrough</strong><p>Receiving, inspection, inventory, packing and parcel dispatch.</p><small>Link needed · 3–6 minute horizontal video</small></footer>
            </article>
            <article className="fh-youtube-placeholder fh-youtube-placeholder-alt">
              <div><span><FiPlay /></span><small>YOUTUBE VIDEO 02</small></div>
              <footer><strong>Meet the people behind each order</strong><p>Introduce the account, sourcing, quality and warehouse teams.</p><small>Link needed · 2–5 minute horizontal video</small></footer>
            </article>
          </div>
        </div>

        <div className="fh-testimonial-proof">
          <div className="fh-testimonial-proof-heading"><span>FROM A QUOTE TO CREDIBLE PROOF</span><h3>Publish customer stories with context, permission and evidence.</h3></div>
          <div className="fh-testimonial-proof-grid">
            {proofSteps.map(([number, title, copy]) => <article key={number}><small>{number}</small><div><strong>{title}</strong><p>{copy}</p></div></article>)}
          </div>
          <Link className="ff-btn ff-btn-primary" href="/contact">Discuss your fulfilment needs<FiArrowRight /></Link>
        </div>
      </div>
    </section>
  );
}
