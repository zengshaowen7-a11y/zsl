"use client";

import { useState } from "react";
import { FiArrowRight, FiLock } from "react-icons/fi";
import PhoneCountryInput from "./components/PhoneCountryInput";

export default function ContactForm({ id, className = "", source = "contact-page", service }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <form
      id={id}
      className={`contact-enquiry-form ff-form fh-home-quote-form ${className}`.trim()}
      name="fulfillment-quote"
      method="POST"
      action="/thank-you"
      data-netlify="true"
      netlify-honeypot="company-website"
      onSubmit={() => setIsSubmitting(true)}
    >
      <input type="hidden" name="form-name" value="fulfillment-quote" />
      <input type="hidden" name="source" value={source} />
      {service ? <input type="hidden" name="service" value={service} /> : null}
      <p className="contact-honeypot">
        <label>Leave this field empty <input name="company-website" /></label>
      </p>

      <div className="fh-home-quote-fields">
        <label>Name <span className="fh-home-quote-required">*</span><input name="name" type="text" autoComplete="name" required placeholder="Your name" /></label>
        <label>Email<input name="email" type="email" autoComplete="email" placeholder="you@example.com" /></label>
        <label className="fh-home-quote-wide">Country Code &amp; Phone Number <span className="fh-home-quote-required">*</span><PhoneCountryInput placeholder="Phone number" initialIso={null} /></label>
        <label className="fh-home-quote-wide">Tell us about your business! <span className="fh-home-quote-required">*</span><textarea name="business-details" rows="5" required placeholder="Tell us what you sell, your current fulfillment situation, target markets, and what you need help with." /></label>
        <label className="fh-home-quote-wide">
          Daily Order Volume
          <select name="daily-order-volume" defaultValue="">
            <option value="" disabled>Select a range</option>
            <option>0-10 orders/day</option>
            <option>11-50 orders/day</option>
            <option>51-200 orders/day</option>
            <option>201-500 orders/day</option>
            <option>500+ orders/day</option>
          </select>
        </label>
      </div>

      <button className="ff-btn ff-btn-primary contact-submit" type="submit" disabled={isSubmitting} aria-live="polite">
        <span>{isSubmitting ? "Sending..." : "Get a Free Quote"}</span><FiArrowRight />
      </button>
      <small className="contact-privacy"><FiLock />Your details are only used to respond to this enquiry.</small>
    </form>
  );
}
