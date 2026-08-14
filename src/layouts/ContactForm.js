"use client";

import { FiArrowRight, FiLock } from "react-icons/fi";
import PhoneCountryInput from "./components/PhoneCountryInput";

export default function ContactForm() {
  return (
    <form
      className="contact-enquiry-form"
      name="contact-enquiry"
      method="POST"
      action="/thank-you"
      data-netlify="true"
      netlify-honeypot="company-website"
    >
      <input type="hidden" name="form-name" value="contact-enquiry" />
      <p className="contact-honeypot">
        <label>Leave this field empty <input name="company-website" /></label>
      </p>

      <div className="contact-form-heading">
        <span>FREE FULFILLMENT REVIEW</span>
        <h2>Tell us what you need.</h2>
        <p>Share the basics. Our team will reply with a practical next step.</p>
      </div>

      <div className="contact-form-row">
        <label>Full name *<input name="name" type="text" autoComplete="name" required placeholder="Your name" /></label>
        <label>Work email *<input name="email" type="email" autoComplete="email" required placeholder="you@company.com" /></label>
      </div>

      <div className="contact-form-row">
        <label>WhatsApp / Phone *<PhoneCountryInput /></label>
        <label>Product or store URL<input name="product-url" type="url" placeholder="https://" /></label>
      </div>

      <div className="contact-form-row">
        <label>
          Daily orders *
          <select name="daily-orders" required defaultValue="">
            <option value="" disabled>Select a range</option>
            <option>Pre-launch</option>
            <option>1-10 orders</option>
            <option>11-50 orders</option>
            <option>51-200 orders</option>
            <option>201-500 orders</option>
            <option>500+ orders</option>
          </select>
        </label>
        <label>
          Main need *
          <select name="main-need" required defaultValue="">
            <option value="" disabled>Select one</option>
            <option>Product sourcing</option>
            <option>Quality control</option>
            <option>Warehousing and fulfillment</option>
            <option>Brand packaging</option>
            <option>Global delivery</option>
            <option>Not sure yet</option>
          </select>
        </label>
      </div>

      <label className="contact-field-full">
        Anything we should know?
        <textarea name="message" rows="4" placeholder="Product, destination market or current challenge." />
      </label>

      <label className="contact-consent">
        <input type="checkbox" name="contact-consent" required />
        <span>I agree to be contacted about this enquiry. *</span>
      </label>
      <button className="ff-btn ff-btn-primary contact-submit" type="submit">
        Request my review <FiArrowRight />
      </button>
      <small className="contact-privacy"><FiLock />Your details are only used to respond to this enquiry.</small>
    </form>
  );
}
