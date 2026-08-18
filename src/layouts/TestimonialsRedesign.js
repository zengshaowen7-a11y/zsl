import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCheck, FiMessageCircle, FiPlay, FiStar } from "react-icons/fi";

const reviews = [
  ["Lukas", "Germany", "Order handling", "Working with Katrina", "The team keeps high-volume order work neat, trackable and organized. The difference is clear when details matter every day."],
  ["Sophie", "France", "Product Sourcing", "Working with Mia", "The focus is not only on cheaper pricing. Product quality, improvement ideas and brand customization are part of the conversation."],
  ["Daniel", "United Kingdom", "Account Support", "Working with Michael", "Quick replies and reliable follow-through make daily fulfillment feel much easier to manage."],
  ["Mick", "Netherlands", "Fulfillment", "Working with Iris", "Clear communication, fast answers and helpful support make the clothing order flow smoother."],
  ["Yosef", "Israel", "Fast Quotes", "Working with Grey", "Quotes come back quickly, messages get answered on time and the service feels dependable."],
  ["Clara", "Spain", "Quality Control", "Working with Coco", "The team explains options clearly and helps compare quotations without losing sight of product quality."],
  ["Laura", "Australia", "Branding", "Working with Iris", "Packaging details are handled carefully, and small brand requests do not get lost during fulfillment."],
  ["Thomas", "Switzerland", "Reliability", "Working with Grey", "The biggest value is consistency. Orders move steadily and updates arrive before problems grow."],
  ["Nina", "Denmark", "Quality Control", "Working with Coco", "Quality checks helped us catch product issues earlier and protect the customer experience."],
];

const themes = [
  ["Clear communication", "Useful replies with enough context to make the next decision."],
  ["Reliable follow-through", "Questions stay visible across supplier, warehouse and shipping handoffs."],
  ["Quality awareness", "Product and packaging details remain part of the conversation before dispatch."],
  ["Practical support", "The account team helps sellers move from uncertainty to a defined next action."],
];

function Review({ review, featured = false, index }) {
  const [name, country, service, manager, quote] = review;
  return <article className={`tst-review${featured ? " is-featured" : ""}`}>
    <div className="tst-review-top"><span className="tst-stars" aria-label="Five star review">{[1,2,3,4,5].map(star => <FiStar key={star} />)}</span><span>{service}</span></div>
    <blockquote>{quote}</blockquote>
    <footer><div className="tst-avatar">{name.charAt(0)}</div><div><strong>{name}</strong><span>{country} · {manager}</span></div><b>{String(index + 1).padStart(2,"0")}</b></footer>
  </article>;
}

export default function TestimonialsRedesign() {
  return <main className="tst-page">
    <section className="tst-hero">
      <div className="tst-hero-copy">
        <p className="tst-kicker">SELLER STORIES</p>
        <h1>What sellers notice in the daily work.</h1>
        <p>Feedback about sourcing, product checks, communication, branded packing and fulfillment from sellers working across different markets.</p>
        <div className="tst-actions"><Link href="/contact" className="tst-button tst-button-primary">Get a Free Quote <FiArrowRight /></Link><a href="#seller-stories" className="tst-button tst-button-ghost">Read Seller Stories</a></div>
        <ul><li><FiCheck /> Named seller feedback</li><li><FiCheck /> Service context included</li><li><FiCheck /> Team and warehouse proof</li></ul>
      </div>
      <figure className="tst-hero-voice">
        <div className="tst-hero-stars" aria-label="Five star review">{[1,2,3,4,5].map(star => <FiStar key={star} />)}</div>
        <blockquote>“The team keeps high-volume order work neat, trackable and organized.”</blockquote>
        <figcaption><strong>Lukas</strong><span>Germany · Order handling</span></figcaption>
      </figure>
      <div className="tst-hero-media"><Image src="/images/generated/jw-warehouse-team-v2.png" alt="JW team behind seller sourcing and fulfillment work" fill priority sizes="100vw" /></div>
    </section>

    <section className="tst-facts"><div className="tst-container"><div><strong>6+</strong><span>Years Experience</span></div><div><strong>30+</strong><span>Markets Supported</span></div><div><strong>3</strong><span>QC Stages</span></div><div><strong>One-on-One</strong><span>Expert Support</span></div></div></section>

    <section className="tst-featured" id="seller-stories"><div className="tst-container"><header className="tst-heading"><div><p className="tst-kicker">FEATURED FEEDBACK</p><h2>Three parts of the partnership sellers remember.</h2></div><p>Clear order handling, thoughtful product decisions and a responsive person who keeps the work moving.</p></header><div className="tst-featured-grid">{reviews.slice(0,3).map((review,index)=><Review review={review} featured index={index} key={review[0]} />)}</div></div></section>

    <section className="tst-themes"><div className="tst-container tst-theme-grid"><div><p className="tst-kicker">WHAT THE FEEDBACK POINTS TO</p><h2>Trust is built in small, repeatable moments.</h2><p>Seller feedback is most useful when it describes the operating experience, not only a star rating.</p></div><ol>{themes.map(([title,copy],index)=><li key={title}><span>{String(index+1).padStart(2,"0")}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol></div></section>

    <section className="tst-stories"><div className="tst-container"><header className="tst-heading"><div><p className="tst-kicker">MORE SELLER STORIES</p><h2>Feedback across the order journey.</h2></div><p>Each story includes the service theme and account support context, so visitors can find experiences closer to their own needs.</p></header><div className="tst-review-grid">{reviews.slice(3).map((review,index)=><Review review={review} index={index+3} key={review[0]} />)}</div></div></section>

    <section className="tst-proof"><div className="tst-container"><header className="tst-heading tst-heading-light"><div><p className="tst-kicker">THE TEAM BEHIND THE FEEDBACK</p><h2>See where daily fulfillment work happens.</h2></div><p>The strongest support for a seller story is visible warehouse, packing and dispatch work.</p></header><div className="tst-video-grid">
      <article><div className="tst-video"><video controls playsInline preload="metadata" poster="/images/evidence/warehouse-walkthrough-aisle.jpg"><source src="/videos/packing-boxes-pexels-4277472.mp4" type="video/mp4" /></video><span><FiPlay /></span></div><div><p className="tst-kicker">WAREHOUSE OPERATIONS</p><h3>Receiving, checking and packing</h3><p>See the physical environment behind inventory and customer order preparation.</p></div></article>
      <article><div className="tst-video"><video controls playsInline preload="metadata" poster="/images/evidence/warehouse-team-corridor.jpg"><source src="/videos/parcel-sorting-pexels-10472376.mp4" type="video/mp4" /></video><span><FiPlay /></span></div><div><p className="tst-kicker">SORTING &amp; DISPATCH</p><h3>Orders moving toward delivery</h3><p>See how prepared parcels are sorted and handed into the shipping workflow.</p></div></article>
    </div><Link href="/why-us" className="tst-proof-link">Why sellers choose JW <FiArrowRight /></Link></div></section>

    <section className="tst-final"><div className="tst-container"><div><p className="tst-kicker">YOUR FIRST STEP</p><h2>Start with one product.</h2><p>Tell us what you sell, where you ship and what needs to work better. Our team will recommend the next practical step.</p></div><Link href="/contact" className="tst-button tst-button-light">Talk to Our Team <FiMessageCircle /></Link></div></section>
  </main>;
}
