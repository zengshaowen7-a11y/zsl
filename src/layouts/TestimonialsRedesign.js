"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiArrowRight, FiCheck, FiChevronDown, FiMessageCircle, FiStar } from "react-icons/fi";
import { featuredTestimonials, storyTestimonials } from "../content/testimonials";

const faqs = [
  ["What do these seller stories show?", "They show how sellers experience daily support: sourcing replies, QC updates, packing details, order handling and fulfillment communication."],
  ["Can I ask for support similar to a review?", "Yes. Share the product type, target market and current problem, and the team can suggest a practical workflow for your store."],
  ["Are these only about fulfillment?", "No. The feedback covers sourcing, quotes, branded packing, quality checks, inventory coordination and shipping follow-up."],
  ["Will I work with one dedicated contact?", "JW keeps communication organized through account support, so questions and order details do not get lost between handoffs."],
  ["How should I use these testimonials?", "Use them to compare the kind of support you need, then start with one product or order flow to test the fit."],
];

const heroCarouselReviews = featuredTestimonials.slice(0, 4);

function getInitials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function AvatarBadge({ name, src, eager = false }) {
  return (
    <span className="tst-avatar" aria-hidden="true">
      <span className="tst-avatar-fallback">{getInitials(name)}</span>
      <Image
        className="tst-avatar-image"
        src={src}
        alt=""
        width={56}
        height={56}
        priority={eager}
        loading={eager ? "eager" : "lazy"}
      />
    </span>
  );
}

function Review({ review, featured = false, index }) {
  const { name, country, flagSrc, avatar, service, manager, quote } = review;
  return <article className={`tst-review${featured ? " is-featured" : ""}`}>
    <div className="tst-review-top"><span className="tst-stars" aria-label="Five star review">{[1,2,3,4,5].map(star => <FiStar key={star} />)}</span></div>
    <blockquote>{quote}</blockquote>
    <footer>
      <AvatarBadge name={name} src={avatar} eager={featured || index < 4} />
      <div><strong>{name}</strong><span><img src={flagSrc} alt="" aria-hidden="true" />{country} · {manager}</span></div>
      <small>{service}</small>
    </footer>
  </article>;
}

export default function TestimonialsRedesign() {
  const [activeHeroReview, setActiveHeroReview] = useState(0);

  return <main className="tst-page">
    <section className="tst-hero">
      <div className="tst-hero-copy">
        <p className="tst-kicker">SELLER STORIES</p>
        <h1>Seller stories, made clear.</h1>
        <p>Clear support, steady order handling and quick follow-up from a team sellers can actually use.</p>
        <div className="tst-hero-proofline">
          <span><FiCheck /> Sourcing support</span>
          <span><FiCheck /> QC updates</span>
          <span><FiCheck /> Fulfillment follow-up</span>
        </div>
        <div className="tst-actions"><Link href="/contact" className="tst-button tst-button-primary">Get a Free Quote <FiArrowRight /></Link><a href="#seller-stories" className="tst-button tst-button-ghost">Read Seller Stories</a></div>
        <div className="tst-hero-balance" aria-label="What sellers most often mention">
          <div className="tst-hero-balance-copy">
            <span>Most mentioned</span>
            <strong>What keeps the workflow calm.</strong>
          </div>
          <div className="tst-hero-balance-grid">
            <article><strong>Clear communication</strong><p>Replies stay visible across sourcing, QC and dispatch.</p></article>
            <article><strong>Fast answers</strong><p>Questions move forward without long back-and-forth.</p></article>
            <article><strong>QC visibility</strong><p>Notes and photos keep review decisions grounded.</p></article>
            <article><strong>Order ownership</strong><p>One contact keeps each handoff connected.</p></article>
          </div>
        </div>
      </div>
      <div className="tst-hero-side">
        <div className="tst-hero-board">
          <div className="tst-hero-carousel" aria-label="Featured seller feedback">
            <div
              className="tst-hero-carousel-track"
              style={{ transform: `translateX(-${activeHeroReview * 100}%)` }}
            >
              {heroCarouselReviews.map((review) => (
                <article className="tst-hero-slide" key={review.name}>
                  <div className="tst-hero-stars" aria-label="Five star review">{[1,2,3,4,5].map(star => <FiStar key={star} />)}</div>
                  <blockquote>{review.quote}</blockquote>
                  <footer>
                    <AvatarBadge name={review.name} src={review.avatar} eager />
                    <div>
                      <strong>{review.name}</strong>
                      <span><img src={review.flagSrc} alt="" aria-hidden="true" />{review.country} · {review.manager}</span>
                    </div>
                    <small>{review.service}</small>
                  </footer>
                </article>
              ))}
            </div>
            <div className="tst-hero-carousel-dots" role="tablist" aria-label="Switch seller stories">
              {heroCarouselReviews.map((review, index) => (
                <button
                  key={review.name}
                  type="button"
                  className={index === activeHeroReview ? "is-active" : ""}
                  aria-label={`Show story ${index + 1} from ${review.name}`}
                  aria-pressed={index === activeHeroReview}
                  onClick={() => setActiveHeroReview(index)}
                />
              ))}
            </div>
          </div>
        <div className="tst-hero-board-row">
          <article><small>Most mentioned</small><strong>Clear communication</strong></article>
          <article><small>Useful for</small><strong>First workflow</strong></article>
        </div>
        </div>
      </div>
    </section>

    <section className="tst-featured" id="seller-stories">
      <div className="tst-container">
        <header className="tst-heading">
          <div>
            <p className="tst-kicker">FEATURED FEEDBACK</p>
            <h2>Three parts of the partnership sellers remember.</h2>
          </div>
          <p>Clear order handling, thoughtful product decisions and a responsive person who keeps the work moving.</p>
        </header>
        <div className="tst-featured-grid">
          {featuredTestimonials.slice(0, 3).map((review, index) => <Review review={review} featured index={index} key={review.name} />)}
        </div>
        <details className="tst-featured-more">
          <summary>View all 13 stories <FiChevronDown aria-hidden="true" /></summary>
          <div className="tst-featured-more-grid">
            {featuredTestimonials.slice(3).map((review, index) => <Review review={review} index={index + 3} key={review.name} />)}
          </div>
        </details>
      </div>
    </section>

    <section className="tst-stories">
      <div className="tst-container">
        <header className="tst-heading">
          <div>
            <p className="tst-kicker">MORE SELLER STORIES</p>
            <h2>Feedback across the order journey.</h2>
          </div>
          <p>Each story includes the service theme and account support context, so visitors can find experiences closer to their own needs.</p>
        </header>
        <div className="tst-review-grid">
          {storyTestimonials.slice(0, 2).map((review, index) => <Review review={review} index={index} key={review.name} />)}
        </div>
        <details className="tst-stories-more">
          <summary>View all 12 stories <FiChevronDown aria-hidden="true" /></summary>
          <div className="tst-stories-more-grid">
            {storyTestimonials.slice(2).map((review, index) => <Review review={review} index={index + 2} key={review.name} />)}
          </div>
        </details>
      </div>
    </section>

    <section className="tst-proof"><div className="tst-container"><header className="tst-heading tst-heading-light"><div><p className="tst-kicker">THE TEAM BEHIND THE FEEDBACK</p><h2>See where daily fulfillment work happens.</h2></div><p>The strongest support for a seller story is visible warehouse, packing and dispatch work.</p></header><div className="tst-video-grid">
      <article><div className="tst-video"><video controls playsInline preload="metadata" poster="/images/evidence/warehouse-walkthrough-aisle.jpg"><source src="/videos/packing-boxes-pexels-4277472.mp4" type="video/mp4" /></video></div><div><p className="tst-kicker">WAREHOUSE OPERATIONS</p><h3>Receiving, checking and packing</h3><p>See the physical environment behind inventory and customer order preparation.</p></div></article>
      <article><div className="tst-video"><video controls playsInline preload="metadata" poster="/images/evidence/warehouse-team-corridor.jpg"><source src="/videos/parcel-sorting-pexels-10472376.mp4" type="video/mp4" /></video></div><div><p className="tst-kicker">SORTING &amp; DISPATCH</p><h3>Orders moving toward delivery</h3><p>See how prepared parcels are sorted and handed into the shipping workflow.</p></div></article>
    </div></div></section>

    <section className="tst-faq">
      <div className="tst-container">
        <header className="tst-faq-heading">
          <p className="tst-kicker">BEFORE YOU DECIDE</p>
          <h2>Questions about seller stories.</h2>
          <p>Use these answers to understand what the feedback means for your own store.</p>
        </header>
        <div className="tst-accordion">
          {faqs.map(([question, answer], index) => <details name="tst-faq" key={question} open={index === 0}>
            <summary>{question}<span aria-hidden="true"><FiChevronDown /></span></summary>
            <p>{answer}</p>
          </details>)}
        </div>
      </div>
    </section>

    <section className="tst-final"><div className="tst-container"><div><p className="tst-kicker">YOUR FIRST STEP</p><h2>Start with one product.</h2><p>Tell us what you sell, where you ship and what needs to work better. Our team will recommend the next practical step.</p></div><Link href="/contact" className="tst-button tst-button-light">Talk to Our Team <FiMessageCircle /></Link></div></section>
  </main>;
}
