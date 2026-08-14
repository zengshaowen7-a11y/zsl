import HomeTestimonials from "@layouts/HomeTestimonials";
import Link from "next/link";
import {
  FiArrowRight,
  FiCheck,
  FiClock,
  FiGlobe,
  FiMessageCircle,
  FiPackage,
  FiShield,
  FiUsers,
} from "react-icons/fi";

export const metadata = {
  title: "Testimonials | JW Dropshipping",
  description:
    "Read seller stories about JW Dropshipping support, quotations, fulfillment, product quality and daily communication.",
};

export default function TestimonialsPage() {
  return (
    <main className="ff-site testimonial-page">
      <section className="testimonial-page-hero">
        <div className="container testimonial-page-hero-content">
          <div className="testimonial-page-hero-grid">
            <div className="testimonial-page-hero-copy">
              <span className="ff-kicker ff-kicker-light">
                REAL REVIEWS / REAL SELLERS
              </span>
              <h1>Real seller reviews, built on daily fulfillment work.</h1>
              <p>
                See how sellers describe our quoting speed, communication,
                product checks and order handling as their stores grow.
              </p>
              <div className="ff-actions">
                <Link className="ff-btn ff-btn-primary" href="/contact">
                  Get a Free Quote <FiArrowRight />
                </Link>
                <a className="ff-btn ff-btn-ghost" href="#seller-stories">
                  Read 30 stories
                </a>
              </div>
              <div className="testimonial-page-hero-proof" aria-label="Service qualities">
                <span><FiCheck />Real seller feedback</span>
                <span><FiCheck />Account manager support</span>
                <span><FiCheck />QC + fulfillment covered</span>
              </div>
            </div>

            <aside className="testimonial-page-metrics" aria-label="JW Dropshipping operating scale">
              <div className="testimonial-page-metrics-heading">
                <span>TRUSTED WORLDWIDE</span>
                <p>Current operating scale across stores, orders and destination markets.</p>
              </div>
              <article className="testimonial-page-metric-primary">
                <FiPackage />
                <div>
                  <strong>20,000+</strong>
                  <span>Orders per day</span>
                  <p>Picked, packed and prepared for dispatch.</p>
                </div>
              </article>
              <div className="testimonial-page-metric-grid">
                <article><FiUsers /><strong>6,000+</strong><span>Active stores</span><p>Stores supported across markets.</p></article>
                <article><FiGlobe /><strong>50+</strong><span>Countries reached</span><p>Global delivery coverage.</p></article>
                <article><FiShield /><strong>9</strong><span>Industries served</span><p>From fashion to electronics.</p></article>
                <article><FiClock /><strong>&lt; 2h</strong><span>Average response</span><p>From dedicated account managers.</p></article>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <HomeTestimonials standalone />

      <section className="testimonial-page-cta" aria-label="Start a fulfillment conversation">
        <div className="container">
          <div className="testimonial-page-cta-copy">
            <span>YOUR TURN</span>
            <h2>Ready to see what better fulfillment could look like?</h2>
            <p>
              Tell us what you sell, where you ship and what is slowing your
              operation down. Our team will come back with a practical next step.
            </p>
          </div>
          <div className="testimonial-page-cta-actions">
            <Link className="ff-btn ff-btn-primary" href="/contact">
              Talk to our team <FiMessageCircle />
            </Link>
            <Link className="testimonial-page-team-link" href="/about-us">
              Meet the team <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
