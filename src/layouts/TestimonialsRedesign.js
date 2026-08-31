"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { FiArrowRight, FiCheck, FiChevronDown, FiMessageCircle, FiStar } from "react-icons/fi";
import { featuredTestimonials, storyTestimonials } from "../content/testimonials";

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
  const t = useTranslations("Testimonials");
  const { name, country, flagSrc, avatar, service, manager, quote } = review;
  return <article className={`tst-review${featured ? " is-featured" : ""}`}>
    <div className="tst-review-top"><span className="tst-stars" aria-label={t("fiveStars")}>{[1,2,3,4,5].map(star => <FiStar key={star} />)}</span></div>
    <blockquote>{quote}</blockquote>
    <footer>
      <AvatarBadge name={name} src={avatar} eager={featured || index < 4} />
      <div><strong>{name}</strong><span><img src={flagSrc} alt="" aria-hidden="true" />{country} · {manager}</span></div>
      <small>{service}</small>
    </footer>
  </article>;
}

export default function TestimonialsRedesign() {
  const t = useTranslations("Testimonials");
  const faqs = t.raw("faqs");
  const hero = t.raw("hero");
  const featured = t.raw("featured");
  const stories = t.raw("stories");
  const proof = t.raw("proof");
  const faq = t.raw("faq");
  const final = t.raw("final");
  const [activeHeroReview, setActiveHeroReview] = useState(0);

  return <main className="tst-page">
    <section className="tst-hero">
      <div className="tst-hero-copy">
        <p className="tst-kicker">{hero.kicker}</p>
        <h1>{hero.title}</h1>
        <p>{hero.lead}</p>
        <div className="tst-hero-proofline">
          {hero.proofs.map((item) => <span key={item}><FiCheck /> {item}</span>)}
        </div>
        <div className="tst-actions"><Link href="/contact" className="tst-button tst-button-primary">{hero.primary} <FiArrowRight /></Link><a href="#seller-stories" className="tst-button tst-button-ghost">{hero.secondary}</a></div>
        <div className="tst-hero-balance" aria-label={hero.balanceLabel}>
          <div className="tst-hero-balance-copy">
            <span>{hero.mentioned}</span>
            <strong>{hero.balanceTitle}</strong>
          </div>
          <div className="tst-hero-balance-grid">
            {hero.items.map(([title, copy]) => <article key={title}><strong>{title}</strong><p>{copy}</p></article>)}
          </div>
        </div>
      </div>
      <div className="tst-hero-side">
        <div className="tst-hero-board">
          <div className="tst-hero-carousel" aria-label={hero.featuredLabel}>
            <div
              className="tst-hero-carousel-track"
              style={{ transform: `translateX(-${activeHeroReview * 100}%)` }}
            >
              {heroCarouselReviews.map((review) => (
                <article className="tst-hero-slide" key={review.name}>
                  <div className="tst-hero-stars" aria-label={t("fiveStars")}>{[1,2,3,4,5].map(star => <FiStar key={star} />)}</div>
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
            <div className="tst-hero-carousel-dots" role="tablist" aria-label={hero.switchLabel}>
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
          <article><small>{hero.mentioned}</small><strong>{hero.items[0][0]}</strong></article>
          <article><small>{hero.usefulFor}</small><strong>{hero.firstWorkflow}</strong></article>
        </div>
        </div>
      </div>
    </section>

    <section className="tst-featured" id="seller-stories">
      <div className="tst-container">
        <header className="tst-heading">
          <div>
            <p className="tst-kicker">{featured.kicker}</p>
            <h2>{featured.title}</h2>
          </div>
          <p>{featured.lead}</p>
        </header>
        <div className="tst-featured-grid">
          {featuredTestimonials.slice(0, 3).map((review, index) => <Review review={review} featured index={index} key={review.name} />)}
        </div>
        <details className="tst-featured-more">
          <summary>{featured.viewAll} <FiChevronDown aria-hidden="true" /></summary>
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
            <p className="tst-kicker">{stories.kicker}</p>
            <h2>{stories.title}</h2>
          </div>
          <p>{stories.lead}</p>
        </header>
        <div className="tst-review-grid">
          {storyTestimonials.slice(0, 2).map((review, index) => <Review review={review} index={index} key={review.name} />)}
        </div>
        <details className="tst-stories-more">
          <summary>{stories.viewAll} <FiChevronDown aria-hidden="true" /></summary>
          <div className="tst-stories-more-grid">
            {storyTestimonials.slice(2).map((review, index) => <Review review={review} index={index + 2} key={review.name} />)}
          </div>
        </details>
      </div>
    </section>

    <section className="tst-proof"><div className="tst-container"><header className="tst-heading tst-heading-light"><div><p className="tst-kicker">{proof.kicker}</p><h2>{proof.title}</h2></div><p>{proof.lead}</p></header><div className="tst-video-grid">
      <article><div className="tst-video"><video controls playsInline preload="metadata" poster="/images/evidence/warehouse-walkthrough-aisle.jpg"><source src="/videos/packing-boxes-pexels-4277472.mp4" type="video/mp4" /></video></div><div><p className="tst-kicker">{proof.videos[0][0]}</p><h3>{proof.videos[0][1]}</h3><p>{proof.videos[0][2]}</p></div></article>
      <article><div className="tst-video"><video controls playsInline preload="metadata" poster="/images/evidence/warehouse-team-corridor.jpg"><source src="/videos/parcel-sorting-pexels-10472376.mp4" type="video/mp4" /></video></div><div><p className="tst-kicker">{proof.videos[1][0]}</p><h3>{proof.videos[1][1]}</h3><p>{proof.videos[1][2]}</p></div></article>
    </div></div></section>

    <section className="tst-faq">
      <div className="tst-container">
        <header className="tst-faq-heading">
          <p className="tst-kicker">{faq.kicker}</p>
          <h2>{faq.title}</h2>
          <p>{faq.lead}</p>
        </header>
        <div className="tst-accordion">
          {faqs.map(([question, answer], index) => <details name="tst-faq" key={question} open={index === 0}>
            <summary>{question}<span aria-hidden="true"><FiChevronDown /></span></summary>
            <p>{answer}</p>
          </details>)}
        </div>
      </div>
    </section>

    <section className="tst-final"><div className="tst-container"><div><p className="tst-kicker">{final.kicker}</p><h2>{final.title}</h2><p>{final.lead}</p></div><Link href="/contact" className="tst-button tst-button-light">{final.button} <FiMessageCircle /></Link></div></section>
  </main>;
}
