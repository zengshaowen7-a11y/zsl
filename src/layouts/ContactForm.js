"use client";

import { useEffect, useRef, useState } from "react";
import { FiArrowRight, FiLock } from "react-icons/fi";
import PhoneCountryInput from "./components/PhoneCountryInput";

const countryCodeOptions = [
  { label: "United States", flagSrc: "https://flagcdn.com/us.svg", code: "+1" },
  { label: "United Kingdom", flagSrc: "https://flagcdn.com/gb.svg", code: "+44" },
  { label: "Canada", flagSrc: "https://flagcdn.com/ca.svg", code: "+1" },
  { label: "Australia", flagSrc: "https://flagcdn.com/au.svg", code: "+61" },
  { label: "Germany", flagSrc: "https://flagcdn.com/de.svg", code: "+49" },
  { label: "France", flagSrc: "https://flagcdn.com/fr.svg", code: "+33" },
  { label: "Italy", flagSrc: "https://flagcdn.com/it.svg", code: "+39" },
  { label: "Spain", flagSrc: "https://flagcdn.com/es.svg", code: "+34" },
  { label: "Netherlands", flagSrc: "https://flagcdn.com/nl.svg", code: "+31" },
  { label: "Sweden", flagSrc: "https://flagcdn.com/se.svg", code: "+46" },
  { label: "Norway", flagSrc: "https://flagcdn.com/no.svg", code: "+47" },
  { label: "Denmark", flagSrc: "https://flagcdn.com/dk.svg", code: "+45" },
  { label: "Poland", flagSrc: "https://flagcdn.com/pl.svg", code: "+48" },
  { label: "Singapore", flagSrc: "https://flagcdn.com/sg.svg", code: "+65" },
  { label: "Malaysia", flagSrc: "https://flagcdn.com/my.svg", code: "+60" },
  { label: "Philippines", flagSrc: "https://flagcdn.com/ph.svg", code: "+63" },
  { label: "Thailand", flagSrc: "https://flagcdn.com/th.svg", code: "+66" },
  { label: "Indonesia", flagSrc: "https://flagcdn.com/id.svg", code: "+62" },
  { label: "Vietnam", flagSrc: "https://flagcdn.com/vn.svg", code: "+84" },
  { label: "Japan", flagSrc: "https://flagcdn.com/jp.svg", code: "+81" },
  { label: "South Korea", flagSrc: "https://flagcdn.com/kr.svg", code: "+82" },
  { label: "United Arab Emirates", flagSrc: "https://flagcdn.com/ae.svg", code: "+971" },
  { label: "Saudi Arabia", flagSrc: "https://flagcdn.com/sa.svg", code: "+966" },
  { label: "Israel", flagSrc: "https://flagcdn.com/il.svg", code: "+972" },
  { label: "Mexico", flagSrc: "https://flagcdn.com/mx.svg", code: "+52" },
  { label: "Brazil", flagSrc: "https://flagcdn.com/br.svg", code: "+55" },
  { label: "Chile", flagSrc: "https://flagcdn.com/cl.svg", code: "+56" },
  { label: "South Africa", flagSrc: "https://flagcdn.com/za.svg", code: "+27" },
  { label: "New Zealand", flagSrc: "https://flagcdn.com/nz.svg", code: "+64" },
];

function HomeStyleQuoteForm({ id, className = "", source = "contact-page", service }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState(null);
  const [isCountryCodeOpen, setIsCountryCodeOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const countryCodeRef = useRef(null);
  const countryCodeValidationRef = useRef(null);

  useEffect(() => {
    if (!isCountryCodeOpen) return undefined;
    const handlePointerDown = (event) => {
      if (!countryCodeRef.current?.contains(event.target)) setIsCountryCodeOpen(false);
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsCountryCodeOpen(false);
    };
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isCountryCodeOpen]);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    setIsCountryCodeOpen(false);
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phoneNumber = String(data.get("phone-number") || "").trim();
    const businessDetails = String(data.get("business-details") || "").trim();
    const dailyOrderVolume = String(data.get("daily-order-volume") || "").trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const nextErrors = {
      name: !name ? "Name is required" : "",
      email: !email ? "Email is required" : !emailOk ? "Enter a valid email address" : "",
      countryCode: !selectedCountryCode ? "Country code is required" : "",
      phone: !phoneNumber ? "Phone number is required" : "",
      businessDetails: !businessDetails ? "Business details are required" : "",
      dailyOrderVolume: !dailyOrderVolume ? "Daily order volume is required" : "",
    };
    const hasErrors = Object.values(nextErrors).some(Boolean);

    countryCodeValidationRef.current?.setCustomValidity(nextErrors.countryCode || "");

    if (hasErrors || !form.checkValidity()) {
      event.preventDefault();
      setErrors(nextErrors);
      countryCodeValidationRef.current?.setCustomValidity(nextErrors.countryCode || "");
      return;
    }

    setErrors({});
    setIsSubmitting(true);
  };

  return (
    <form
      id={id}
      className={`contact-enquiry-form ff-form fh-home-quote-form ${className}`.trim()}
      name="fulfillment-quote"
      method="POST"
      action="/thank-you"
      noValidate
      data-netlify="true"
      data-netlify-honeypot="company-website"
      onSubmit={handleSubmit}
      onInvalid={(event) => event.preventDefault()}
    >
      <input type="hidden" name="form-name" value="fulfillment-quote" />
      <input type="hidden" name="source" value={source} />
      {service ? <input type="hidden" name="service" value={service} /> : null}
      <p className="contact-honeypot">
        <label>Leave this field empty <input name="company-website" /></label>
      </p>

      <div className="fh-home-quote-fields">
        <label>
          Name<input name="name" autoComplete="name" placeholder="Your name" />
          {errors.name ? <small className="fh-form-error">{errors.name}</small> : null}
        </label>
        <label>
          Email<input name="email" type="text" inputMode="email" autoComplete="email" placeholder="you@example.com" />
          {errors.email ? <small className="fh-form-error">{errors.email}</small> : null}
        </label>
        <div
          className="fh-phone-split"
          ref={countryCodeRef}
          onClick={(event) => {
            if (event.target === event.currentTarget) setIsCountryCodeOpen(true);
          }}
        >
          <span className="fh-home-quote-label fh-phone-split-label">Country Code &amp; Phone Number</span>
          <div className="fh-country-code-field">
            <input type="hidden" name="country-code" value={selectedCountryCode ? `${selectedCountryCode.code} ${selectedCountryCode.label}` : ""} />
            <input
              ref={countryCodeValidationRef}
              type="text"
              className="fh-country-code-required-proxy"
              value={selectedCountryCode ? `${selectedCountryCode.code} ${selectedCountryCode.label}` : ""}
              onChange={() => {}}
              readOnly
              tabIndex={-1}
              aria-hidden="true"
            />
            <button type="button" className="fh-country-code-trigger" aria-haspopup="listbox" aria-expanded={isCountryCodeOpen} aria-required="true" onClick={() => setIsCountryCodeOpen((open) => !open)}>
              {selectedCountryCode ? (
                <>
                  <img src={selectedCountryCode.flagSrc} alt="" aria-hidden="true" />
                  <span className="fh-country-code-value">{selectedCountryCode.code}</span>
                  <small>{selectedCountryCode.label}</small>
                </>
              ) : (
                <span className="fh-country-code-placeholder">Country Code</span>
              )}
              <i aria-hidden="true">⌄</i>
            </button>
            {isCountryCodeOpen && (
              <div className="fh-country-code-menu" role="listbox" onClick={(event) => event.stopPropagation()}>
                {countryCodeOptions.map((option) => (
                  <button
                    type="button"
                    role="option"
                    aria-selected={selectedCountryCode?.label === option.label}
                    key={`${option.code}-${option.label}`}
                    onClick={() => {
                      setSelectedCountryCode(option);
                      countryCodeValidationRef.current?.setCustomValidity("");
                      setIsCountryCodeOpen(false);
                    }}
                  >
                    <img src={option.flagSrc} alt="" aria-hidden="true" />
                    <span>{option.code}</span>
                    <small>{option.label}</small>
                  </button>
                ))}
              </div>
            )}
            {errors.countryCode ? <small className="fh-form-error">{errors.countryCode}</small> : null}
          </div>
          <div className="fh-phone-number-field">
            <input
              className="fh-phone-number-input"
              name="phone-number"
              autoComplete="tel-national"
              placeholder="Phone Number"
              aria-label="Phone Number"
              onClick={(event) => event.stopPropagation()}
            />
            {errors.phone ? <small className="fh-form-error fh-phone-error">{errors.phone}</small> : null}
          </div>
        </div>
        <label className="fh-home-quote-wide">
          Tell us about your business!<textarea name="business-details" placeholder="Tell us what you sell, your current fulfillment situation, target markets, and what you need help with." rows={5} />
          {errors.businessDetails ? <small className="fh-form-error">{errors.businessDetails}</small> : null}
        </label>
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
          {errors.dailyOrderVolume ? <small className="fh-form-error">{errors.dailyOrderVolume}</small> : null}
        </label>
      </div>

      <button className="ff-btn ff-btn-primary contact-submit" type="submit" disabled={isSubmitting} aria-live="polite">
        <span>{isSubmitting ? "Sending..." : "Get a Free Quote"}</span>
        <FiArrowRight />
      </button>
      <small className="contact-privacy"><FiLock />Your details are only used to respond to this enquiry.</small>
    </form>
  );
}

function LegacyContactForm({ id, className = "", source = "contact-page", service }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phoneCountry = String(data.get("phone-country") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const businessDetails = String(data.get("business-details") || "").trim();
    const dailyOrderVolume = String(data.get("daily-order-volume") || "").trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const nextErrors = {
      name: !name ? "Name is required" : "",
      email: !email ? "Email is required" : !emailOk ? "Enter a valid email address" : "",
      phoneCountry: !phoneCountry ? "Country code is required" : "",
      phone: !phone ? "Phone number is required" : "",
      businessDetails: !businessDetails ? "Business details are required" : "",
      dailyOrderVolume: !dailyOrderVolume ? "Daily order volume is required" : "",
    };
    const hasErrors = Object.values(nextErrors).some(Boolean);

    if (hasErrors || !form.checkValidity()) {
      event.preventDefault();
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
  };

  return (
    <form
      id={id}
      className={`contact-enquiry-form ff-form fh-home-quote-form ${className}`.trim()}
      name="fulfillment-quote"
      method="POST"
      action="/thank-you"
      noValidate
      data-netlify="true"
      netlify-honeypot="company-website"
      onSubmit={handleSubmit}
      onInvalid={(event) => event.preventDefault()}
    >
      <input type="hidden" name="form-name" value="fulfillment-quote" />
      <input type="hidden" name="source" value={source} />
      {service ? <input type="hidden" name="service" value={service} /> : null}
      <p className="contact-honeypot">
        <label>Leave this field empty <input name="company-website" /></label>
      </p>

      <div className="fh-home-quote-fields">
        <label>Name <span className="fh-home-quote-required">*</span><input name="name" type="text" autoComplete="name" placeholder="Your name" />{errors.name ? <small className="fh-form-error">{errors.name}</small> : null}</label>
        <label>Email <span className="fh-home-quote-required">*</span><input name="email" type="text" inputMode="email" autoComplete="email" placeholder="you@example.com" />{errors.email ? <small className="fh-form-error">{errors.email}</small> : null}</label>
        <label className="fh-home-quote-wide">Country Code &amp; Phone Number <span className="fh-home-quote-required">*</span><PhoneCountryInput placeholder="Phone number" initialIso={null} />{errors.phoneCountry ? <small className="fh-form-error">{errors.phoneCountry}</small> : null}{errors.phone ? <small className="fh-form-error">{errors.phone}</small> : null}</label>
        <label className="fh-home-quote-wide">Tell us about your business! <span className="fh-home-quote-required">*</span><textarea name="business-details" rows="5" placeholder="Tell us what you sell, your current fulfillment situation, target markets, and what you need help with." />{errors.businessDetails ? <small className="fh-form-error">{errors.businessDetails}</small> : null}</label>
        <label className="fh-home-quote-wide">
          Daily Order Volume <span className="fh-home-quote-required">*</span>
          <select name="daily-order-volume" defaultValue="">
            <option value="" disabled>Select a range</option>
            <option>0-10 orders/day</option>
            <option>11-50 orders/day</option>
            <option>51-200 orders/day</option>
            <option>201-500 orders/day</option>
            <option>500+ orders/day</option>
          </select>
          {errors.dailyOrderVolume ? <small className="fh-form-error">{errors.dailyOrderVolume}</small> : null}
        </label>
      </div>

      <button className="ff-btn ff-btn-primary contact-submit" type="submit" disabled={isSubmitting} aria-live="polite">
        <span>{isSubmitting ? "Sending..." : "Get a Free Quote"}</span>
        <FiArrowRight />
      </button>
      <small className="contact-privacy"><FiLock />Your details are only used to respond to this enquiry.</small>
    </form>
  );
}

export default function ContactForm({ id, className = "", source = "contact-page", service }) {
  const useHomeStyle = source === "contact-page" || Boolean(service) || className.includes("sdr-form");
  return useHomeStyle
    ? <HomeStyleQuoteForm id={id} className={className} source={source} service={service} />
    : <LegacyContactForm id={id} className={className} source={source} service={service} />;
}
