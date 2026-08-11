import ContactForm from "@layouts/ContactForm";
import Link from "next/link";
import {
  FiArrowRight,
  FiCheck,
  FiClock,
  FiFileText,
  FiMail,
  FiMessageCircle,
  FiPackage,
  FiShield,
} from "react-icons/fi";

export const metadata = {
  title: "Contact JW Dropshipping | Request a Fulfillment Review",
  description:
    "Tell JW Dropshipping about your products, destination markets and current order flow. Request a sourcing and fulfillment review for your eCommerce store.",
};

const faqs = [
  [
    "What information should I prepare before contacting you?",
    "A store or product URL, destination markets, approximate daily order volume and your main sourcing or fulfillment challenge are enough for an initial review.",
  ],
  [
    "Do I need a minimum daily order volume?",
    "Not every service starts at the same volume. Product sourcing, samples and quality checks can begin before daily fulfillment, while inventory and fulfillment plans are matched to the order flow you expect.",
  ],
  [
    "Can you work with my existing supplier?",
    "Yes. We can coordinate receiving, inspection, inventory, packing and delivery around an approved supplier, or help compare alternative supplier options when requested.",
  ],
  [
    "Can you support branded packaging?",
    "Yes. Labels, inserts, mailers, boxes and other packaging options can be reviewed according to product size, order volume, minimum quantities and production lead time.",
  ],
  [
    "Which eCommerce platforms can you support?",
    "We can review workflows for Shopify, WooCommerce, TikTok Shop, Amazon, Etsy and stores using manual exports or custom order handoffs.",
  ],
  [
    "What happens after I submit the form?",
    "Our team reviews the details, identifies the missing operational information and contacts you to clarify scope, suitable services and the next practical step.",
  ],
];

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-orbit contact-orbit-one" aria-hidden="true" />
        <div className="contact-orbit contact-orbit-two" aria-hidden="true" />
        <div className="container contact-hero-heading">
          <span>START WITH YOUR CURRENT STORE OR PRODUCT</span>
          <h1>Let&apos;s build a clearer path from supplier to customer.</h1>
          <p>
            Share the essentials. We&apos;ll review your product, markets and order flow before recommending a practical service scope.
          </p>
        </div>
      </section>

      <section className="contact-enquiry-section">
        <div className="container contact-enquiry-grid">
          <aside className="contact-intro-card">
            <span className="contact-kicker">GET IN TOUCH</span>
            <h2>A useful first conversation, not a generic sales call.</h2>
            <p>
              Tell us where your current workflow slows down. We&apos;ll use the context to focus the discussion on sourcing, quality, inventory, packaging or delivery.
            </p>

            <div className="contact-response-card">
              <FiClock aria-hidden="true" />
              <div>
                <strong>Response target</strong>
                <span>Within one business day after reviewing your enquiry.</span>
              </div>
            </div>

            <div className="contact-channel-list">
              <div>
                <FiMessageCircle aria-hidden="true" />
                <div>
                  <small>WHATSAPP</small>
                  <strong>Business number to be added</strong>
                </div>
              </div>
              <div>
                <FiMail aria-hidden="true" />
                <div>
                  <small>EMAIL</small>
                  <strong>Customer-service email to be added</strong>
                </div>
              </div>
            </div>

            <div className="contact-ready-list">
              <h3>What helps us review faster</h3>
              <ul>
                <li><FiCheck />Product or supplier link</li>
                <li><FiCheck />Main destination countries</li>
                <li><FiCheck />Expected daily order range</li>
                <li><FiCheck />Packaging or quality requirements</li>
              </ul>
            </div>
          </aside>

          <ContactForm />
        </div>
      </section>

      <section className="contact-next-section">
        <div className="container">
          <div className="contact-section-heading">
            <div>
              <span className="contact-kicker">AFTER YOU SUBMIT</span>
              <h2>Every enquiry moves through a visible next step.</h2>
            </div>
            <p>We use your answers to avoid a vague proposal and focus on the operational decisions that matter first.</p>
          </div>
          <div className="contact-next-grid">
            <article>
              <span><FiFileText /></span>
              <small>01</small>
              <h3>Context review</h3>
              <p>We check your product, market, order volume and current operating gaps.</p>
            </article>
            <article>
              <span><FiShield /></span>
              <small>02</small>
              <h3>Scope clarification</h3>
              <p>We confirm the services, quality checkpoints and information still required.</p>
            </article>
            <article>
              <span><FiPackage /></span>
              <small>03</small>
              <h3>Practical next step</h3>
              <p>You receive a focused recommendation for samples, quotation or workflow setup.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="contact-faq-section">
        <div className="container contact-faq-grid">
          <div className="contact-faq-intro">
            <span className="contact-kicker">BEFORE YOU ENQUIRE</span>
            <h2>Common questions about getting started.</h2>
            <p>Still unsure which service fits? Submit what you already know and we&apos;ll help define the missing pieces.</p>
            <Link className="ff-btn ff-btn-dark" href="/services">
              Explore all services <FiArrowRight />
            </Link>
          </div>
          <div className="contact-faq-list">
            {faqs.map(([question, answer], index) => (
              <details key={question} open={index === 0}>
                <summary><span>{question}</span><b aria-hidden="true">+</b></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
