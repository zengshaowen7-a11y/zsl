import Image from "next/image";
import { useState } from "react";
import {
  FiArrowRight,
  FiStar,
} from "react-icons/fi";
import { homeTestimonials } from "../content/testimonials";

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
  const { name, country, manager, service, quote, avatar } = testimonial;
  const eagerAvatar = featured || index < 6;

  return (
    <article className={`testimonial-review-card ${featured ? "testimonial-review-card-featured" : ""}`}>
      <div className="testimonial-review-top">
        <Stars />
        <span>{service}</span>
      </div>
      <blockquote>{quote}</blockquote>
      <footer>
        <AvatarBadge name={name} src={avatar} eager={eagerAvatar} />
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
  const primaryTestimonials = homeTestimonials.slice(0, 2);
  const secondaryTestimonials = homeTestimonials.slice(2, 4);
  const hiddenTestimonials = homeTestimonials.slice(4);

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
            <span className="ff-kicker ff-kicker-light">8 REAL SELLER STORIES</span>
            <h2 id="testimonials-title">
              Real details sellers notice <span>in daily work.</span>
            </h2>
          </div>
          <div className="fh-testimonial-heading-copy">
            <p>Short, specific feedback from real operating moments: response speed, clear communication, order handling, sourcing and quality control.</p>
          </div>
        </div>

        <div id="seller-stories" className="testimonial-review-grid">
          {primaryTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.name}-${testimonial.country}`}
              testimonial={testimonial}
              index={index}
              featured
            />
          ))}
          {secondaryTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.name}-${testimonial.country}`}
              testimonial={testimonial}
              index={index + primaryTestimonials.length}
            />
          ))}
        </div>

        {hiddenTestimonials.length > 0 && (
          <details className="testimonial-review-more">
            <summary>View all seller stories <FiArrowRight /></summary>
            <div className="testimonial-review-grid testimonial-review-grid-extra">
              {hiddenTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`${testimonial.name}-${testimonial.country}`}
                  testimonial={testimonial}
                  index={index + primaryTestimonials.length + secondaryTestimonials.length}
                />
              ))}
            </div>
          </details>
        )}
      </div>
    </section>
  );
}
