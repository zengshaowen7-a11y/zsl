import ContactForm from "@layouts/ContactForm";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCheck, FiClipboard, FiClock, FiMessageCircle, FiPackage, FiShield } from "react-icons/fi";

export const metadata = { title: "Get a Free Quote | JW Dropshipping", description: "Share your product, market and order requirements with JW Dropshipping for a focused sourcing and fulfillment review." };

const faqs = [
  ["What information should I prepare?", "A product or store URL, destination markets, approximate daily order volume and your main sourcing or fulfillment challenge are enough for an initial review."],
  ["Do I need a minimum daily order volume?", "Not every service starts at the same volume. Sourcing, samples and quality checks can begin before daily fulfillment, while warehouse scope depends on the expected order flow."],
  ["Can JW work with my existing supplier?", "Yes. We can receive goods from an existing supplier and focus on inspection, inventory, packing and delivery, subject to a clear handoff process."],
  ["Can you support branded packaging?", "Labels, inserts, mailers, boxes and other packaging options can be reviewed according to product size, minimum quantities and production lead time."],
  ["What happens after I submit?", "Our team reviews the context, identifies missing information and contacts you with a focused recommendation for quotation, samples or workflow setup."],
];

export default function ContactPage() {
  return <main className="ctw-page" id="top">
    <section className="ctw-hero">
      <div className="ctw-intro"><div className="ctw-intro-copy"><p className="ctw-kicker">GET A FREE FULFILLMENT REVIEW</p><h1>Start with one product link.</h1><p>Tell us what you sell, where you ship and what is slowing your operation down. We will recommend the next practical step.</p><ul><li><FiCheck /> Product-specific review</li><li><FiCheck /> No obligation</li><li><FiCheck /> One dedicated contact</li></ul><div className="ctw-response"><FiClock /><div><strong>Response target</strong><span>Within one business day after reviewing your enquiry.</span></div></div></div><div className="ctw-intro-media"><Image src="/images/generated/jw-account-support-v3.png" alt="JW team reviewing a sourcing and fulfillment enquiry" fill priority sizes="(max-width: 900px) 100vw, 48vw" /></div></div>
      <div className="ctw-form-side"><ContactForm /></div>
    </section>

    <section className="ctw-prepare"><div className="ctw-container"><div><p className="ctw-kicker">WHAT HELPS US REVIEW FASTER</p><h2>Four details make the first reply more useful.</h2></div><ol>{["Product or supplier link","Main destination markets","Expected daily order range","Packaging or QC requirements"].map((item,index)=><li key={item}><span>{String(index+1).padStart(2,"0")}</span>{item}</li>)}</ol></div></section>

    <section className="ctw-next"><div className="ctw-container"><header className="ctw-heading"><div><p className="ctw-kicker">AFTER YOU SUBMIT</p><h2>A visible next step, not a generic sales call.</h2></div><p>Your answers help us focus on the operational decision that matters first.</p></header><div className="ctw-next-grid"><article><div><span>01</span><FiClipboard /></div><h3>Context review</h3><p>We review your product, market, volume and current operating gap.</p></article><article><div><span>02</span><FiShield /></div><h3>Scope clarification</h3><p>We confirm relevant services, quality checkpoints and missing information.</p></article><article><div><span>03</span><FiPackage /></div><h3>Practical recommendation</h3><p>You receive a focused next step for quotation, samples or workflow setup.</p></article></div></div></section>

    <section className="ctw-faq"><div className="ctw-container ctw-faq-grid"><div><p className="ctw-kicker">BEFORE YOU ENQUIRE</p><h2>Common questions about getting started.</h2><p>Submit what you already know. The first review can help define the missing pieces.</p><Link href="/services">Explore All Services <FiArrowRight /></Link></div><div className="ctw-accordion">{faqs.map(([q,a],index)=><details name="contact-faq" key={q} open={index===0}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>

    <section className="ctw-direct"><div className="ctw-container"><FiMessageCircle /><div><p className="ctw-kicker">NOT SURE WHICH SERVICE TO CHOOSE?</p><h2>Describe the problem in your own words.</h2></div><a href="#top">Return to the Form <FiArrowRight /></a></div></section>
  </main>;
}
