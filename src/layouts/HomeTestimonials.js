import Image from "next/image";
import { useState } from "react";
import {
  FiArrowRight,
  FiStar,
} from "react-icons/fi";

const proofVideos = [
  {
    video: "/videos/packing-boxes-pexels-4277472.mp4",
    poster: "/images/evidence/warehouse-walkthrough-aisle.jpg",
    title: "Warehouse operations",
    label: "Yiwu Warehouse Tour - 3:25",
    copy: "Storage, picking, packing and product checks before orders leave the warehouse.",
  },
  {
    video: "/videos/parcel-sorting-pexels-10472376.mp4",
    poster: "/images/evidence/warehouse-team-corridor.jpg",
    title: "Sorting and dispatch",
    label: "Hangzhou Office Tour - 4:53",
    copy: "Order sorting, checking and shipping handoff work shown in a quick daily clip.",
  },
];

const testimonials = [
  ["Lukas", "Germany", "Working with Katrina", "Order handling", "The team keeps high-volume order work neat, trackable and organized. The difference is clear when details matter every day."],
  ["Daniel", "United Kingdom", "Working with Michael", "Fast support", "Quick replies and reliable follow-through make daily fulfillment feel much easier to manage."],
  ["Mick", "Netherlands", "Working with Iris", "Communication", "Clear communication, fast answers and helpful support make the clothing order flow smoother."],
  ["Sophie", "France", "Working with Mia", "Customization", "The focus is not only on cheaper pricing. Product quality, improvement ideas and brand customization are part of the conversation."],
  ["Yosef", "Israel", "Working with Grey", "Fast quotes", "Quotes come back quickly, messages get answered on time and the service feels dependable."],
  ["Matthias", "Belgium", "Working with Noora and Mia", "Consistency", "Reliable responses, fast quotations and consistent fulfillment support help the business keep moving."],
  ["Tibo", "Belgium", "Working with Julia", "Problem solving", "Questions are handled quickly and kindly, so there is less uncertainty during order processing."],
  ["Sebastian", "Netherlands", "Working with Julia", "Account support", "Friendly communication and professional help make the supplier relationship easier to trust."],
  ["Will", "United Kingdom", "Working with Shea", "Sourcing", "Responsive support and a practical sourcing-to-fulfillment process make the service simple to work with."],
  ["Marco", "Italy", "Working with Alice", "Tracking", "Order handling feels structured, especially when multiple products need clear packing and tracking updates."],
  ["Clara", "Spain", "Working with Coco", "Quality", "The team explains options clearly and helps compare quotations without losing sight of product quality."],
  ["Amir", "Israel", "Working with Mia", "Product checks", "Custom requests and product checks are handled with care, which makes repeat orders easier to scale."],
  ["Noah", "Germany", "Working with Katrina", "Daily updates", "Daily updates are clear enough for our team to answer customer questions without chasing every order."],
  ["Emma", "United States", "Working with Shea", "Fast sourcing", "Sourcing requests come back with practical options, so testing new products feels less risky."],
  ["Adam", "United Kingdom", "Working with Michael", "Communication", "Messages stay organized and the next step is usually clear, even when several SKUs are moving."],
  ["Laura", "Australia", "Working with Iris", "Packaging", "Packaging details are handled carefully, and small brand requests do not get lost during fulfillment."],
  ["Thomas", "Switzerland", "Working with Grey", "Reliability", "The biggest value is consistency. Orders move steadily and updates arrive before problems grow."],
  ["Nina", "Denmark", "Working with Coco", "Quality control", "Quality checks helped us catch product issues earlier and protect the customer experience."],
  ["Hannah", "Sweden", "Working with Mia", "Account support", "The account manager understands our workflow and keeps replies direct, useful and timely."],
  ["Oliver", "Canada", "Working with Julia", "Order flow", "The fulfillment flow feels predictable, which matters a lot once daily order volume increases."],
  ["Priya", "United Kingdom", "Working with Alice", "Product checks", "Photos, checks and notes make it easier to approve products before scaling campaigns."],
  ["David", "United States", "Working with Michael", "Fast quotes", "Quotes arrive quickly and include enough context to compare products without long back-and-forth."],
  ["Mei", "Singapore", "Working with Iris", "Tracking", "Tracking and shipment status are easy to follow, which keeps our support inbox calmer."],
  ["Samir", "United Arab Emirates", "Working with Grey", "Dispatch", "Dispatch support is professional, and the team keeps priority orders visible."],
  ["Victor", "Portugal", "Working with Alice", "Sourcing", "The team helps compare suppliers and gives realistic feedback before we commit to a product."],
  ["Elena", "Italy", "Working with Coco", "Customization", "Custom packaging requests are discussed clearly and the finished result feels aligned with our brand."],
  ["Aaron", "Netherlands", "Working with Julia", "Follow-through", "Follow-through is strong. When something needs checking, it gets checked and reported back."],
  ["Mariam", "Saudi Arabia", "Working with Mia", "Clear process", "The process is easy to understand from sourcing to packing, which makes planning smoother."],
  ["Ben", "France", "Working with Shea", "Inventory notes", "Inventory questions get answered quickly, and the notes help us avoid overselling."],
  ["Rachel", "Ireland", "Working with Katrina", "Support", "Support feels personal without being slow. It is a good fit for a growing store."],
];

const testimonialAvatars = Array.from(
  { length: testimonials.length },
  (_, index) => `/images/testimonials/avatars/seller-avatar-${String(index + 1).padStart(2, "0")}.jpg`,
);

function Stars() {
  return (
    <span className="testimonial-stars" aria-label="Five star review">
      {[0, 1, 2, 3, 4].map((star) => <FiStar key={star} />)}
    </span>
  );
}

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
    <span className="testimonial-review-avatar-shell" aria-hidden="true">
      <span className="testimonial-review-avatar-fallback">{getInitials(name)}</span>
      <img
        className="testimonial-review-avatar"
        src={src}
        alt=""
        loading={eager ? "eager" : "lazy"}
        decoding="async"
      />
    </span>
  );
}

function ProofVideoCard({ video }) {
  const [ready, setReady] = useState(false);

  return (
    <article className="testimonial-video-card">
      <div className="testimonial-video-frame">
        <Image
          className="testimonial-video-poster"
          src={video.poster}
          alt=""
          fill
          priority
          sizes="(max-width: 767px) 100vw, 50vw"
        />
        <video
          className={`testimonial-video-element${ready ? " is-ready" : ""}`}
          controls
          playsInline
          preload="metadata"
          poster={video.poster}
          aria-label={video.title}
          onLoadedData={() => setReady(true)}
          onCanPlay={() => setReady(true)}
        >
          <source src={video.video} type="video/mp4" />
        </video>
      </div>
      <div className="testimonial-video-caption">
        <h3>{video.label}</h3>
        <p>{video.copy}</p>
      </div>
    </article>
  );
}

function TestimonialCard({ testimonial, index, featured = false }) {
  const [name, country, manager, topic, quote] = testimonial;
  const eagerAvatar = featured || index < 6;

  return (
    <article className={`testimonial-review-card ${featured ? "testimonial-review-card-featured" : ""}`}>
      <div className="testimonial-review-top">
        <Stars />
        <span>{topic}</span>
      </div>
      <blockquote>{quote}</blockquote>
      <footer>
        <AvatarBadge name={name} src={testimonialAvatars[index]} eager={eagerAvatar} />
        <span>
          <strong>{name}</strong>
          <small>{country} / {manager}</small>
        </span>
        <b>{String(index + 1).padStart(2, "0")}</b>
      </footer>
    </article>
  );
}

export default function HomeTestimonials({ standalone = false }) {
  const primaryTestimonials = testimonials.slice(0, 3);
  const secondaryTestimonials = testimonials.slice(3, 6);
  const hiddenTestimonials = testimonials.slice(6);

  return (
    <section
      id="testimonials"
      className={`ff-section fh-testimonials ${standalone ? "fh-testimonials-standalone" : ""}`}
      aria-labelledby="testimonials-title"
    >
      <div className="container">
        {standalone && (
          <div className="testimonial-video-proof">
            <div className="testimonial-video-copy">
              <span className="testimonial-video-pill">THE COMPANY BEHIND THE REVIEWS</span>
              <h2>
                Every review on this page is about <span>this team, in these warehouses.</span>
              </h2>
              <p>Before visitors read what sellers say, show them where orders are picked, checked, packed and shipped from, and who is on the other end of the conversation.</p>
            </div>
            <div className="testimonial-video-grid">
              {proofVideos.map((video) => <ProofVideoCard key={video.title} video={video} />)}
            </div>
          </div>
        )}

        <div className="fh-testimonial-heading testimonial-review-heading">
          <div>
            <span className="ff-kicker ff-kicker-light">30 SELLER STORIES</span>
            <h2 id="testimonials-title">
              The details sellers notice <span>in daily work.</span>
            </h2>
          </div>
          <div className="fh-testimonial-heading-copy">
            <p>Feedback from different markets, organized around the themes that matter most: response speed, clear communication, order handling and quality control.</p>
          </div>
        </div>

        <div id="seller-stories" className="testimonial-review-grid">
          {primaryTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial[0]}-${testimonial[1]}`}
              testimonial={testimonial}
              index={index}
              featured
            />
          ))}
          {secondaryTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial[0]}-${testimonial[1]}`}
              testimonial={testimonial}
              index={index + primaryTestimonials.length}
            />
          ))}
        </div>

        <details className="testimonial-review-more">
          <summary>View all 30 stories <FiArrowRight /></summary>
          <div className="testimonial-review-grid testimonial-review-grid-extra">
            {hiddenTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial[0]}-${testimonial[1]}`}
                testimonial={testimonial}
                index={index + primaryTestimonials.length + secondaryTestimonials.length}
              />
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}
