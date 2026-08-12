import HomeTestimonials from "@layouts/HomeTestimonials";
import Link from "next/link";
import { FiArrowRight, FiCheck, FiMessageCircle, FiShield } from "react-icons/fi";

export const metadata = {
  title: "Client Testimonials | JW Dropshipping",
  description: "Explore visual customer-story layouts and the evidence framework JW Dropshipping uses for transparent sourcing, quality control and fulfilment testimonials.",
};

export default function TestimonialsPage() {
  return (
    <main className="ff-site testimonial-page">
      <section className="testimonial-page-hero">
        <div className="testimonial-page-orbit" aria-hidden="true"><i /><i /><i /></div>
        <div className="container testimonial-page-hero-grid">
          <div>
            <span className="ff-kicker ff-kicker-light">CUSTOMER STORIES · BUILT ON OPERATING EVIDENCE</span>
            <h1>Real faces. Clear context. Visible fulfilment work.</h1>
            <p>A visual home for future client-approved reviews, short case stories and video interviews.</p>
            <div className="ff-actions"><a className="ff-btn ff-btn-primary" href="#testimonials">Explore the stories<FiArrowRight /></a><Link className="ff-btn ff-btn-ghost" href="/contact">Share your requirements</Link></div>
          </div>
          <aside className="testimonial-page-principles">
            <span><FiShield /></span><small>HOW REAL REVIEWS WILL BE PUBLISHED</small><h2>Permission first. Context included. Evidence attached.</h2>
            <ul><li><FiCheck />Customer-approved identity and wording</li><li><FiCheck />Store type and operational challenge</li><li><FiCheck />Relevant warehouse or workflow evidence</li></ul>
          </aside>
        </div>
      </section>

      <HomeTestimonials standalone />

      <section className="testimonial-page-cta"><div className="container"><div><span>READY TO BUILD YOUR OWN OPERATING STORY?</span><h2>Start with the workflow your store needs today.</h2></div><Link className="ff-btn ff-btn-primary" href="/contact">Talk to our fulfilment team<FiMessageCircle /></Link></div></section>
    </main>
  );
}
