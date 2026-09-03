"use client";

import { useEffect, useRef, useState } from "react";
import { FiArrowRight, FiLock } from "react-icons/fi";
import PhoneCountryInput from "./components/PhoneCountryInput";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { FORMSPREE_ENDPOINT } from "@config/forms";

const countryCodeOptions = [
  ["US", "+1"], ["GB", "+44"], ["CA", "+1"], ["AU", "+61"],
  ["DE", "+49"], ["FR", "+33"], ["IT", "+39"], ["ES", "+34"],
  ["NL", "+31"], ["SE", "+46"], ["NO", "+47"], ["DK", "+45"],
  ["PL", "+48"], ["SG", "+65"], ["MY", "+60"], ["PH", "+63"],
  ["TH", "+66"], ["ID", "+62"], ["VN", "+84"], ["JP", "+81"],
  ["KR", "+82"], ["AE", "+971"], ["SA", "+966"], ["IL", "+972"],
  ["MX", "+52"], ["BR", "+55"], ["CL", "+56"], ["ZA", "+27"],
  ["NZ", "+64"],
];

function getLocalizedCountryOptions(locale) {
  const names = new Intl.DisplayNames([locale], { type: "region" });
  return countryCodeOptions.map(([iso, code]) => ({
    iso,
    code,
    label: names.of(iso),
    flagSrc: `https://flagcdn.com/${iso.toLowerCase()}.svg`,
  }));
}

function HomeStyleQuoteForm({ id, className = "", source = "contact-page", service }) {
  const locale = useLocale();
  const t = useTranslations("ContactForm");
  const router = useRouter();
  const localizedCountryOptions = getLocalizedCountryOptions(locale);
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

  const handleSubmit = async (event) => {
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
      name: !name ? t("errors.nameRequired") : "",
      email: !email ? t("errors.emailRequired") : !emailOk ? t("errors.emailInvalid") : "",
      countryCode: !selectedCountryCode ? t("errors.countryCodeRequired") : "",
      phone: !phoneNumber ? t("errors.phoneRequired") : "",
      businessDetails: !businessDetails ? t("errors.businessRequired") : "",
      dailyOrderVolume: !dailyOrderVolume ? t("errors.volumeRequired") : "",
    };
    const hasErrors = Object.values(nextErrors).some(Boolean);

    countryCodeValidationRef.current?.setCustomValidity(nextErrors.countryCode || "");

    if (hasErrors || !form.checkValidity()) {
      event.preventDefault();
      setErrors(nextErrors);
      countryCodeValidationRef.current?.setCustomValidity(nextErrors.countryCode || "");
      return;
    }

    event.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: data,
      });

      if (!response.ok) {
        throw new Error(`Formspree responded with ${response.status}`);
      }

      router.push("/thank-you");
    } catch {
      setIsSubmitting(false);
      form.submit();
    }
  };

  return (
    <form
      id={id}
      className={`contact-enquiry-form ff-form fh-home-quote-form ${className}`.trim()}
      name="fulfillment-quote"
      method="POST"
      action={FORMSPREE_ENDPOINT}
      noValidate
      onSubmit={handleSubmit}
      onInvalid={(event) => event.preventDefault()}
    >
      <input type="hidden" name="form-name" value="fulfillment-quote" />
      <input type="hidden" name="source" value={source} />
      <input type="hidden" name="language" value={locale} />
      {service ? <input type="hidden" name="service" value={service} /> : null}
      <p className="contact-honeypot">
        <label>{t("honeypot")} <input name="company-website" /></label>
      </p>

      <div className="fh-home-quote-fields">
        <label>
          {t("name")}<input name="name" autoComplete="name" placeholder={t("namePlaceholder")} />
          {errors.name ? <small className="fh-form-error">{errors.name}</small> : null}
        </label>
        <label>
          {t("email")}<input name="email" type="text" inputMode="email" autoComplete="email" placeholder={t("emailPlaceholder")} />
          {errors.email ? <small className="fh-form-error">{errors.email}</small> : null}
        </label>
        <div
          className="fh-phone-split"
          ref={countryCodeRef}
          onClick={(event) => {
            if (event.target === event.currentTarget) setIsCountryCodeOpen(true);
          }}
        >
          <span className="fh-home-quote-label fh-phone-split-label">{t("countryAndPhone")}</span>
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
            <button type="button" className="fh-country-code-trigger" aria-haspopup="listbox" aria-expanded={isCountryCodeOpen} onClick={() => setIsCountryCodeOpen((open) => !open)}>
              {selectedCountryCode ? (
                <>
                  <img src={selectedCountryCode.flagSrc} alt="" aria-hidden="true" />
                  <span className="fh-country-code-value">{selectedCountryCode.code}</span>
                  <small>{selectedCountryCode.label}</small>
                </>
              ) : (
                <span className="fh-country-code-placeholder">{t("countryCode")}</span>
              )}
              <i aria-hidden="true">⌄</i>
            </button>
            {isCountryCodeOpen && (
              <div className="fh-country-code-menu" role="listbox" onClick={(event) => event.stopPropagation()}>
                {localizedCountryOptions.map((option) => (
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
              placeholder={t("phoneNumber")}
              aria-label={t("phoneNumber")}
              onClick={(event) => event.stopPropagation()}
            />
            {errors.phone ? <small className="fh-form-error fh-phone-error">{errors.phone}</small> : null}
          </div>
        </div>
        <label className="fh-home-quote-wide">
          {t("businessDetails")}<textarea name="business-details" placeholder={t("businessPlaceholder")} rows={5} />
          {errors.businessDetails ? <small className="fh-form-error">{errors.businessDetails}</small> : null}
        </label>
        <label className="fh-home-quote-wide">
          {t("dailyOrderVolume")}
          <select name="daily-order-volume" defaultValue="">
            <option value="" disabled>{t("selectRange")}</option>
            {t.raw("volumeOptions").map((option) => <option key={option}>{option}</option>)}
          </select>
          {errors.dailyOrderVolume ? <small className="fh-form-error">{errors.dailyOrderVolume}</small> : null}
        </label>
      </div>

      <button className="ff-btn ff-btn-primary contact-submit" type="submit" disabled={isSubmitting} aria-live="polite">
        <span>{isSubmitting ? t("sending") : t("submit")}</span>
        <FiArrowRight />
      </button>
      <small className="contact-privacy"><FiLock />{t("privacy")}</small>
    </form>
  );
}

function LegacyContactForm({ id, className = "", source = "contact-page", service }) {
  const locale = useLocale();
  const t = useTranslations("ContactForm");
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
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
      name: !name ? t("errors.nameRequired") : "",
      email: !email ? t("errors.emailRequired") : !emailOk ? t("errors.emailInvalid") : "",
      phoneCountry: !phoneCountry ? t("errors.countryCodeRequired") : "",
      phone: !phone ? t("errors.phoneRequired") : "",
      businessDetails: !businessDetails ? t("errors.businessRequired") : "",
      dailyOrderVolume: !dailyOrderVolume ? t("errors.volumeRequired") : "",
    };
    const hasErrors = Object.values(nextErrors).some(Boolean);

    if (hasErrors || !form.checkValidity()) {
      event.preventDefault();
      setErrors(nextErrors);
      return;
    }

    event.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: data,
      });

      if (!response.ok) {
        throw new Error(`Formspree responded with ${response.status}`);
      }

      router.push("/thank-you");
    } catch {
      setIsSubmitting(false);
      form.submit();
    }
  };

  return (
    <form
      id={id}
      className={`contact-enquiry-form ff-form fh-home-quote-form ${className}`.trim()}
      name="fulfillment-quote"
      method="POST"
      action={FORMSPREE_ENDPOINT}
      noValidate
      onSubmit={handleSubmit}
      onInvalid={(event) => event.preventDefault()}
    >
      <input type="hidden" name="form-name" value="fulfillment-quote" />
      <input type="hidden" name="source" value={source} />
      <input type="hidden" name="language" value={locale} />
      {service ? <input type="hidden" name="service" value={service} /> : null}
      <p className="contact-honeypot">
        <label>{t("honeypot")} <input name="company-website" /></label>
      </p>

      <div className="fh-home-quote-fields">
        <label>{t("name")} <span className="fh-home-quote-required">*</span><input name="name" type="text" autoComplete="name" placeholder={t("namePlaceholder")} />{errors.name ? <small className="fh-form-error">{errors.name}</small> : null}</label>
        <label>{t("email")} <span className="fh-home-quote-required">*</span><input name="email" type="text" inputMode="email" autoComplete="email" placeholder={t("emailPlaceholder")} />{errors.email ? <small className="fh-form-error">{errors.email}</small> : null}</label>
        <label className="fh-home-quote-wide">{t("countryAndPhone")} <span className="fh-home-quote-required">*</span><PhoneCountryInput placeholder={t("phoneNumber")} initialIso={null} />{errors.phoneCountry ? <small className="fh-form-error">{errors.phoneCountry}</small> : null}{errors.phone ? <small className="fh-form-error">{errors.phone}</small> : null}</label>
        <label className="fh-home-quote-wide">{t("businessDetails")} <span className="fh-home-quote-required">*</span><textarea name="business-details" rows="5" placeholder={t("businessPlaceholder")} />{errors.businessDetails ? <small className="fh-form-error">{errors.businessDetails}</small> : null}</label>
        <label className="fh-home-quote-wide">
          {t("dailyOrderVolume")} <span className="fh-home-quote-required">*</span>
          <select name="daily-order-volume" defaultValue="">
            <option value="" disabled>{t("selectRange")}</option>
            {t.raw("volumeOptions").map((option) => <option key={option}>{option}</option>)}
          </select>
          {errors.dailyOrderVolume ? <small className="fh-form-error">{errors.dailyOrderVolume}</small> : null}
        </label>
      </div>

      <button className="ff-btn ff-btn-primary contact-submit" type="submit" disabled={isSubmitting} aria-live="polite">
        <span>{isSubmitting ? t("sending") : t("submit")}</span>
        <FiArrowRight />
      </button>
      <small className="contact-privacy"><FiLock />{t("privacy")}</small>
    </form>
  );
}

export default function ContactForm({ id, className = "", source = "contact-page", service }) {
  const useHomeStyle = source === "contact-page" || Boolean(service) || className.includes("sdr-form");
  return useHomeStyle
    ? <HomeStyleQuoteForm id={id} className={className} source={source} service={service} />
    : <LegacyContactForm id={id} className={className} source={source} service={service} />;
}
