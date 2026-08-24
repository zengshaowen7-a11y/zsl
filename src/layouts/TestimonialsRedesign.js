import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCheck, FiChevronDown, FiMessageCircle, FiStar } from "react-icons/fi";

const reviews = [
  { name: "Lukas", country: "Germany", flagSrc: "https://flagcdn.com/de.svg", avatar: "/images/testimonials/avatars/seller-avatar-03.jpg", service: "Order Handling", manager: "Working with Katrina", quote: "The team keeps high-volume order work neat, trackable and organized. The difference is clear when details matter every day." },
  { name: "Sophie", country: "France", flagSrc: "https://flagcdn.com/fr.svg", avatar: "/images/testimonials/avatars/seller-avatar-04.jpg", service: "Product Sourcing", manager: "Working with Mia", quote: "The focus is not only on cheaper pricing. Product quality, improvement ideas and brand customization are part of the conversation." },
  { name: "Daniel", country: "United Kingdom", flagSrc: "https://flagcdn.com/gb.svg", avatar: "/images/testimonials/avatars/seller-avatar-12.jpg", service: "Account Support", manager: "Working with Michael", quote: "Quick replies and reliable follow-through make daily fulfillment feel much easier to manage." },
  { name: "Mick", country: "Netherlands", flagSrc: "https://flagcdn.com/nl.svg", avatar: "/images/testimonials/avatars/seller-avatar-10.jpg", service: "Fulfillment", manager: "Working with Iris", quote: "Clear communication, fast answers and helpful support make the clothing order flow smoother." },
  { name: "Yosef", country: "Israel", flagSrc: "https://flagcdn.com/il.svg", avatar: "/images/testimonials/avatars/seller-avatar-24.jpg", service: "Fast Quotes", manager: "Working with Grey", quote: "Quotes come back quickly, messages get answered on time and the service feels dependable." },
  { name: "Clara", country: "Spain", flagSrc: "https://flagcdn.com/es.svg", avatar: "/images/testimonials/avatars/seller-avatar-11.jpg", service: "Quality Control", manager: "Working with Coco", quote: "The team explains options clearly and helps compare quotations without losing sight of product quality." },
  { name: "Laura", country: "Australia", flagSrc: "https://flagcdn.com/au.svg", avatar: "/images/testimonials/avatars/seller-avatar-18.jpg", service: "Branding", manager: "Working with Iris", quote: "Packaging details are handled carefully, and small brand requests do not get lost during fulfillment." },
  { name: "Thomas", country: "Switzerland", flagSrc: "https://flagcdn.com/ch.svg", avatar: "/images/testimonials/avatars/seller-avatar-17.jpg", service: "Reliability", manager: "Working with Grey", quote: "The biggest value is consistency. Orders move steadily and updates arrive before problems grow." },
  { name: "Nina", country: "Denmark", flagSrc: "https://flagcdn.com/dk.svg", avatar: "/images/testimonials/avatars/seller-avatar-23.jpg", service: "Quality Control", manager: "Working with Coco", quote: "Quality checks helped us catch product issues earlier and protect the customer experience." },
  { name: "Emma", country: "United States", flagSrc: "https://flagcdn.com/us.svg", avatar: "/images/testimonials/avatars/seller-avatar-16.jpg", service: "Product Sourcing", manager: "Working with Mia", quote: "Sourcing requests come back with practical options, so testing new products feels less risky." },
  { name: "Marco", country: "Italy", flagSrc: "https://flagcdn.com/it.svg", avatar: "/images/testimonials/avatars/seller-avatar-15.jpg", service: "Supplier Search", manager: "Working with Katrina", quote: "Supplier options are easier to compare when pricing, samples and timing are kept in one clear thread." },
  { name: "Olivia", country: "Canada", flagSrc: "https://flagcdn.com/ca.svg", avatar: "/images/testimonials/avatars/seller-avatar-19.jpg", service: "Packing Support", manager: "Working with Iris", quote: "Small packing notes are handled before dispatch, so the final parcel feels closer to our brand." },
  { name: "Noah", country: "New Zealand", flagSrc: "https://flagcdn.com/nz.svg", avatar: "/images/testimonials/avatars/seller-avatar-20.jpg", service: "Inventory Updates", manager: "Working with Michael", quote: "Inventory questions are answered quickly, and that helps us plan promotions with fewer surprises." },
  { name: "Aisha", country: "United Arab Emirates", flagSrc: "https://flagcdn.com/ae.svg", avatar: "/images/testimonials/avatars/seller-avatar-28.jpg", service: "Custom Requests", manager: "Working with Coco", quote: "Custom product details stay visible from sourcing through packing, which makes approvals easier." },
  { name: "Kenji", country: "Japan", flagSrc: "https://flagcdn.com/jp.svg", avatar: "/images/testimonials/avatars/seller-avatar-05.jpg", service: "Shipping Follow-up", manager: "Working with Grey", quote: "Shipment updates arrive with enough context for our team to respond to customers faster." },
  { name: "Hannah", country: "Sweden", flagSrc: "https://flagcdn.com/se.svg", avatar: "/images/testimonials/avatars/seller-avatar-26.jpg", service: "Account Support", manager: "Working with Mia", quote: "The account team understands our workflow and keeps replies direct, useful and timely." },
  { name: "Victor", country: "Portugal", flagSrc: "https://flagcdn.com/pt.svg", avatar: "/images/testimonials/avatars/seller-avatar-27.jpg", service: "Sourcing", manager: "Working with Alice", quote: "The team helps compare suppliers and gives realistic feedback before we commit to a product." },
  { name: "Isabella", country: "Brazil", flagSrc: "https://flagcdn.com/br.svg", avatar: "/images/testimonials/avatars/seller-avatar-14.jpg", service: "Brand Customization", manager: "Working with Iris", quote: "Brand details are discussed clearly, and the final packing direction feels easier to approve." },
  { name: "Amir", country: "Saudi Arabia", flagSrc: "https://flagcdn.com/sa.svg", avatar: "/images/testimonials/avatars/seller-avatar-29.jpg", service: "Dispatch", manager: "Working with Grey", quote: "Dispatch support is professional, and the team keeps priority orders visible when timing matters." },
  { name: "Grace", country: "Ireland", flagSrc: "https://flagcdn.com/ie.svg", avatar: "/images/testimonials/avatars/seller-avatar-30.jpg", service: "Support", manager: "Working with Katrina", quote: "Support feels personal without being slow, which is helpful for a growing store." },
  { name: "Ethan", country: "United States", flagSrc: "https://flagcdn.com/us.svg", avatar: "/images/testimonials/avatars/seller-avatar-25.jpg", service: "Fast Quotes", manager: "Working with Michael", quote: "Quotes arrive quickly and include enough context to compare products without long back-and-forth." },
];

const faqs = [
  ["What do these seller stories show?", "They show how sellers experience daily support: sourcing replies, QC updates, packing details, order handling and fulfillment communication."],
  ["Can I ask for support similar to a review?", "Yes. Share the product type, target market and current problem, and the team can suggest a practical workflow for your store."],
  ["Are these only about fulfillment?", "No. The feedback covers sourcing, quotes, branded packing, quality checks, inventory coordination and shipping follow-up."],
  ["Will I work with one dedicated contact?", "JW keeps communication organized through account support, so questions and order details do not get lost between handoffs."],
  ["How should I use these testimonials?", "Use them to compare the kind of support you need, then start with one product or order flow to test the fit."],
];

const heroCarouselReviews = reviews.slice(0, 4);

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
            <div className="tst-hero-carousel-track">
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
            <div className="tst-hero-carousel-dots" aria-hidden="true">
              {heroCarouselReviews.map((review) => <span key={review.name} />)}
            </div>
          </div>
          <div className="tst-hero-board-row">
            <article><small>Most mentioned</small><strong>Clear communication</strong></article>
            <article><small>Useful for</small><strong>Choosing your first workflow</strong></article>
          </div>
        </div>
      </div>
    </section>

    <section className="tst-featured" id="seller-stories"><div className="tst-container"><header className="tst-heading"><div><p className="tst-kicker">FEATURED FEEDBACK</p><h2>Three parts of the partnership sellers remember.</h2></div><p>Clear order handling, thoughtful product decisions and a responsive person who keeps the work moving.</p></header><div className="tst-featured-grid">{reviews.slice(0,3).map((review,index)=><Review review={review} featured index={index} key={review.name} />)}</div><details className="tst-featured-more"><summary>More Seller Stories <FiChevronDown aria-hidden="true" /></summary><div className="tst-featured-more-grid">{reviews.slice(3,9).map((review,index)=><Review review={review} index={index+3} key={review.name} />)}</div></details></div></section>

    <section className="tst-stories"><div className="tst-container"><header className="tst-heading"><div><p className="tst-kicker">MORE SELLER STORIES</p><h2>Feedback across the order journey.</h2></div><p>Each story includes the service theme and account support context, so visitors can find experiences closer to their own needs.</p></header><div className="tst-review-grid">{reviews.slice(9,13).map((review,index)=><Review review={review} index={index+9} key={review.name} />)}</div><details className="tst-stories-more"><summary>More Seller Stories <FiChevronDown aria-hidden="true" /></summary><div className="tst-stories-more-grid">{reviews.slice(13).map((review,index)=><Review review={review} index={index+13} key={review.name} />)}</div></details></div></section>

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
