"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCheck, FiImage, FiPlay, FiStar } from "react-icons/fi";

const testimonialProfiles = [
  { name: "Maya Laurent", country: "France", store: "Natural skincare", avatar: "/images/testimonials/portrait-maya.jpg", quote: "The team turned samples, quality notes and packaging decisions into one workflow we could actually follow.", tag: "Clearer product launches" },
  { name: "James Carter", country: "United Kingdom", store: "Home & living", avatar: "/images/testimonials/portrait-james.jpg", quote: "Instead of chasing separate suppliers, we now have one place to review receiving, stock and dispatch updates.", tag: "Fewer handoffs" },
  { name: "Olivia Brooks", country: "United States", store: "Fashion accessories", avatar: "/images/testimonials/portrait-olivia.jpg", quote: "Packaging feels more consistent and exceptions are raised early enough for us to make a useful decision.", tag: "Brand-ready packing" },
  { name: "Daniel Costa", country: "Brazil", store: "Consumer accessories", avatar: "/images/testimonials/portrait-daniel.jpg", quote: "The inspection checklist gives our team a shared definition of what must be checked before an order moves.", tag: "Documented QC" },
  { name: "Noah Williams", country: "Australia", store: "Multi-SKU Shopify store", avatar: "/images/testimonials/portrait-noah.jpg", quote: "Repeat orders no longer feel like starting again because product, packing and shipping rules stay connected.", tag: "Repeatable fulfilment" },
  { name: "Amir Mensah", country: "Ghana", store: "Lifestyle products", avatar: "/images/testimonials/portrait-amir.jpg", quote: "We can see who owns each stage and receive a clear update whenever a product or parcel needs attention.", tag: "Visible ownership" },
];

const storySnapshots = [
  { image: "/images/testimonials/story-owner.jpg", eyebrow: "SMALL-BRAND STORY", title: "From scattered supplier chats to one launch checklist.", person: "Maya · skincare founder", outcomes: ["Sample review", "Packaging approval", "Launch handoff"] },
  { image: "/images/testimonials/story-inventory.jpg", eyebrow: "OPERATIONS STORY", title: "Quality checkpoints made visible before dispatch.", person: "Daniel · accessories store", outcomes: ["SKU check", "Photo evidence", "Exception review"] },
  { image: "/images/testimonials/story-warehouse.jpg", eyebrow: "FULFILMENT STORY", title: "A repeatable path from warehouse shelf to customer.", person: "Noah · multi-SKU retailer", outcomes: ["Stock visibility", "Packing rules", "Tracked delivery"] },
];

const gallery = [
  { image: "/images/testimonials/story-quality.jpg", title: "Quality review", copy: "Agreed checks before goods move forward." },
  { image: "/images/testimonials/story-inventory.jpg", title: "Inventory handling", copy: "Products identified and organised by SKU." },
  { image: "/images/testimonials/story-warehouse.jpg", title: "Warehouse workflow", copy: "Receiving, storage and dispatch in one path." },
  { image: "/images/testimonials/story-owner.jpg", title: "Brand collaboration", copy: "Commercial goals translated into operating rules." },
];

const proofSteps = [
  ["01", "Client permission", "Identity, image and final wording approved."],
  ["02", "Useful context", "Store type and original challenge included."],
  ["03", "Supporting evidence", "Relevant workflow or warehouse proof attached."],
];

export default function HomeTestimonials({ standalone = false }) {
  return (
    <section id="testimonials" className={`ff-section fh-testimonials ${standalone ? "fh-testimonials-standalone" : ""}`} aria-labelledby="testimonials-title">
      <div className="fh-testimonial-orbit" aria-hidden="true"><i /><i /><i /></div>
      <div className="container">
        <div className="fh-testimonial-heading">
          <div><span className="ff-kicker ff-kicker-light">CLIENT STORY PROFILES</span><h2 id="testimonials-title">Built to look real. Published only when it is real.</h2></div>
          <div className="fh-testimonial-heading-copy"><p>Natural client-profile layouts ready for approved names, portraits and quotes.</p><span><FiCheck /> The current people and stories are illustrative placeholders—not verified reviews.</span></div>
        </div>

        <div className="fh-profile-grid">
          {testimonialProfiles.map((item) => (
            <article className="fh-profile-card" key={item.name}>
              <div className="fh-profile-photo"><Image src={item.avatar} alt="Representative stock portrait for a future approved customer story" fill sizes="(max-width: 767px) 36vw, 150px" /></div>
              <div className="fh-profile-content">
                <div className="fh-testimonial-stars" aria-label="Five-star visual placeholder">{[0, 1, 2, 3, 4].map((star) => <FiStar key={star} />)}</div>
                <blockquote>“{item.quote}”</blockquote>
                <footer><div><strong>{item.name}</strong><small>{item.country} · {item.store}</small></div><span>{item.tag}</span></footer>
              </div>
            </article>
          ))}
        </div>
        <p className="fh-stock-disclosure"><FiImage /> Representative stock portraits are used for layout preview. Replace with customer-approved photos before publication.</p>

        <section className="fh-story-section" aria-labelledby="story-snapshots-title">
          <div className="fh-story-heading"><span className="ff-kicker">STORY SNAPSHOTS</span><h3 id="story-snapshots-title">Show the change, not just the compliment.</h3><p>Large visual case-study covers keep the copy short and the experience tangible.</p></div>
          <div className="fh-story-grid">
            {storySnapshots.map((story, index) => (
              <article className={`fh-story-card fh-story-card-${index + 1}`} key={story.title}>
                <Image src={story.image} alt="Representative ecommerce and fulfilment scene" fill sizes="(max-width: 900px) 100vw, 50vw" />
                <div className="fh-story-overlay"><small>{story.eyebrow}</small><h4>{story.title}</h4><p>{story.person}</p><ul>{story.outcomes.map((outcome) => <li key={outcome}><FiCheck />{outcome}</li>)}</ul></div>
              </article>
            ))}
          </div>
        </section>

        <section className="fh-video-visual" aria-labelledby="testimonial-video-title">
          <div className="fh-video-copy"><span className="ff-kicker ff-kicker-light">VIDEO TESTIMONIALS</span><h3 id="testimonial-video-title">Let customers speak in their own voice.</h3><p>Two YouTube positions are reserved for approved interviews or warehouse tours.</p><div className="fh-video-facts"><span>16:9</span><span>60–180 sec</span><span>English subtitles</span></div></div>
          <div className="fh-video-slots">
            {[["/images/testimonials/story-warehouse.jpg", "CUSTOMER VIDEO 01"], ["/images/testimonials/story-quality.jpg", "CUSTOMER VIDEO 02"]].map(([image, label]) => (
              <article className="fh-video-slot" key={label}><Image src={image} alt="Video thumbnail placeholder" fill sizes="(max-width: 767px) 100vw, 32vw" /><div><span><FiPlay /></span><strong>{label}</strong><small>YouTube link needed</small></div></article>
            ))}
          </div>
        </section>

        <section className="fh-gallery-section" aria-labelledby="operation-gallery-title">
          <div className="fh-gallery-heading"><span className="ff-kicker">VISIBLE OPERATIONS</span><h3 id="operation-gallery-title">The work behind every customer story.</h3></div>
          <div className="fh-gallery-grid">{gallery.map((item, index) => <figure className={`fh-gallery-item fh-gallery-item-${index + 1}`} key={item.title}><Image src={item.image} alt={item.title} fill sizes="(max-width: 767px) 100vw, 50vw" /><figcaption><strong>{item.title}</strong><span>{item.copy}</span></figcaption></figure>)}</div>
        </section>

        <div className="fh-testimonial-proof">
          <div className="fh-testimonial-proof-heading"><span>FROM A QUOTE TO CREDIBLE PROOF</span><h3>A simple approval path for future real reviews.</h3></div>
          <div className="fh-testimonial-proof-grid">{proofSteps.map(([number, title, copy]) => <article key={number}><small>{number}</small><div><strong>{title}</strong><p>{copy}</p></div></article>)}</div>
          <Link className="ff-btn ff-btn-primary" href="/contact">Discuss your fulfilment needs<FiArrowRight /></Link>
        </div>
      </div>
    </section>
  );
}
