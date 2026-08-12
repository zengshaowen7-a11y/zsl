"use client";

import { servicePages } from "@config/service-page-content";
import { useState } from "react";
import { FiArrowRight, FiCheck, FiLock } from "react-icons/fi";
import PhoneCountryInput from "./components/PhoneCountryInput";

export default function ContactForm() {
  const [platform, setPlatform] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);

  const toggleService = (value) => {
    setSelectedServices((current) =>
      current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value],
    );
  };

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
        <span>REQUEST A FREE REVIEW</span>
        <h2>Tell us about your store and order flow.</h2>
        <p>Required fields help us route your enquiry to the right service scope.</p>
      </div>

      <div className="contact-form-row">
        <label>Full name *<input name="name" type="text" autoComplete="name" required placeholder="Your name" /></label>
        <label>Work email *<input name="email" type="email" autoComplete="email" required placeholder="you@company.com" /></label>
      </div>
      <div className="contact-form-row">
        <label>WhatsApp / Phone *<PhoneCountryInput /></label>
        <label>Store URL<input name="store" type="url" placeholder="https://yourstore.com" /></label>
      </div>
      <div className="contact-form-row">
        <label>
          E-commerce platform *
          <select name="platform" required value={platform} onChange={(event) => setPlatform(event.target.value)}>
            <option value="">Select a platform</option>
            <option>Shopify</option>
            <option>WooCommerce</option>
            <option>TikTok Shop</option>
            <option>Amazon</option>
            <option>Etsy</option>
            <option value="Other">Other / Custom</option>
          </select>
        </label>
        <label>
          Average daily orders *
          <select name="daily-orders" required defaultValue="">
            <option value="" disabled>Select a range</option>
            <option>Pre-launch / testing</option>
            <option>1–10 orders</option>
            <option>11–50 orders</option>
            <option>51–200 orders</option>
            <option>201–500 orders</option>
            <option>500+ orders</option>
          </select>
        </label>
      </div>
      {platform === "Other" && (
        <label className="contact-field-full contact-field-reveal">
          Tell us which platform you use *
          <input name="other-platform" type="text" required placeholder="Platform or order handoff method" />
        </label>
      )}
      <div className="contact-form-row">
        <label>
          Main destination market *
          <select name="market" required defaultValue="">
            <option value="" disabled>Select a market</option>
            <option>United States & Canada</option>
            <option>United Kingdom</option>
            <option>European Union</option>
            <option>Australia & New Zealand</option>
            <option>Middle East</option>
            <option>Worldwide / Multiple markets</option>
          </select>
        </label>
        <label>Product or supplier URL<input name="product-url" type="url" placeholder="Product, 1688 or supplier link" /></label>
      </div>

      <fieldset className="contact-service-fieldset">
        <legend>Which services are you interested in?</legend>
        <p>Select one or more. We can help define the final scope.</p>
        <div className="contact-service-options">
          {servicePages.map((service) => {
            const checked = selectedServices.includes(service.menuTitle);
            return (
              <label className={checked ? "is-selected" : ""} key={service.slug}>
                <input
                  type="checkbox"
                  name="services"
                  value={service.menuTitle}
                  checked={checked}
                  onChange={() => toggleService(service.menuTitle)}
                />
                <span>{checked && <FiCheck />}</span>
                {service.menuTitle}
              </label>
            );
          })}
        </div>
      </fieldset>

      <label className="contact-field-full">
        What is the main challenge right now? *
        <select name="challenge" required defaultValue="">
          <option value="" disabled>Select the closest option</option>
          <option>Finding a suitable supplier</option>
          <option>Product quality or supplier mistakes</option>
          <option>Slow or inconsistent delivery</option>
          <option>Inventory and daily order handling</option>
          <option>Custom branding and packaging</option>
          <option>Replacing a current sourcing or fulfillment partner</option>
          <option>Planning for higher order volume</option>
        </select>
      </label>
      <label className="contact-field-full">
        Anything else we should know?
        <textarea name="message" rows="5" placeholder="Products, destination countries, current workflow and the result you want to achieve." />
      </label>

      <label className="contact-consent">
        <input type="checkbox" name="contact-consent" required />
        <span>I agree to be contacted about this enquiry. *</span>
      </label>
      <button className="ff-btn ff-btn-primary contact-submit" type="submit">
        Request my fulfillment review <FiArrowRight />
      </button>
      <small className="contact-privacy"><FiLock />Your details are used only to review and respond to this enquiry.</small>
    </form>
  );
}
