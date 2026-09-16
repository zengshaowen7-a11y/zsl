"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "@/i18n/navigation";
import { FiChevronDown, FiMessageSquare, FiSend } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FORMSPREE_ENDPOINT } from "@config/forms";

const WHATSAPP_URL = "https://wa.me/message/3UCZT3GWOQPFI1";
const AUTO_OPEN_KEY = "jw-home-chat-seen";

export default function HomepageChatWidget() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const panelRef = useRef(null);

  useEffect(() => {
    let hasSeenChat = false;
    try {
      hasSeenChat = window.sessionStorage.getItem(AUTO_OPEN_KEY) === "true";
    } catch {
      // The widget can still open manually when storage is unavailable.
    }
    if (hasSeenChat) return undefined;

    const timer = window.setTimeout(() => {
      setIsOpen(true);
      try {
        window.sessionStorage.setItem(AUTO_OPEN_KEY, "true");
      } catch {
        // Ignore storage restrictions.
      }
    }, 900);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const openChat = () => {
    setIsOpen(true);
    try {
      window.sessionStorage.setItem(AUTO_OPEN_KEY, "true");
    } catch {
      // Ignore storage restrictions.
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const whatsapp = String(data.get("whatsapp") || "").trim();
    const productUrl = String(data.get("product-url") || "").trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const urlOk = /^(https?:\/\/)?[^\s]+\.[^\s]+/i.test(productUrl);
    const nextErrors = {
      name: name ? "" : "Please enter your name.",
      email: !email ? "Please enter your email." : emailOk ? "" : "Please enter a valid email.",
      whatsapp: whatsapp ? "" : "Please enter your WhatsApp number.",
      productUrl: !productUrl ? "Please add a product URL." : urlOk ? "" : "Please enter a valid product URL.",
    };

    if (Object.values(nextErrors).some(Boolean)) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!response.ok) throw new Error(`Formspree responded with ${response.status}`);
      router.push("/thank-you");
    } catch {
      setIsSubmitting(false);
      form.submit();
    }
  };

  return (
    <aside className={`jw-chat-dock ${isOpen ? "is-open" : ""}`} aria-label="Contact JW Dropshipping">
      {isOpen ? (
        <section ref={panelRef} className="jw-chat-panel" aria-label="Leave your contact details">
          <header className="jw-chat-panel-header">
            <div>
              <span>QUICK ENQUIRY</span>
              <strong>Leave your info for details</strong>
            </div>
            <button type="button" onClick={() => setIsOpen(false)} aria-label="Minimize chat form">
              <FiChevronDown aria-hidden="true" />
            </button>
          </header>

          <div className="jw-chat-panel-body">
            <p>Thanks for reaching out! Our team will reply shortly. Please leave your details below.</p>
            <form method="POST" action={FORMSPREE_ENDPOINT} onSubmit={handleSubmit} noValidate>
              <input type="hidden" name="form-name" value="homepage-chat-widget" />
              <input type="hidden" name="source" value="homepage-chat-widget" />
              <input type="hidden" name="language" value="en" />
              <p className="jw-chat-honeypot" aria-hidden="true">
                <label>Leave this field empty<input name="company-website" tabIndex={-1} /></label>
              </p>

              <label>
                <span>Name <i>*</i></span>
                <input name="name" autoComplete="name" placeholder="Name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "jw-chat-name-error" : undefined} />
                {errors.name ? <small id="jw-chat-name-error">{errors.name}</small> : null}
              </label>
              <label>
                <span>Email <i>*</i></span>
                <input name="email" type="email" inputMode="email" autoComplete="email" placeholder="Email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "jw-chat-email-error" : undefined} />
                {errors.email ? <small id="jw-chat-email-error">{errors.email}</small> : null}
              </label>
              <label>
                <span>WhatsApp <i>*</i></span>
                <input name="whatsapp" type="tel" inputMode="tel" autoComplete="tel" placeholder="WhatsApp" aria-invalid={Boolean(errors.whatsapp)} aria-describedby={errors.whatsapp ? "jw-chat-whatsapp-error" : undefined} />
                {errors.whatsapp ? <small id="jw-chat-whatsapp-error">{errors.whatsapp}</small> : null}
              </label>
              <label>
                <span>Product URL <i>*</i></span>
                <input name="product-url" type="text" inputMode="url" autoComplete="url" placeholder="Product URL from AliExpress / Amazon / Shopify" aria-invalid={Boolean(errors.productUrl)} aria-describedby={errors.productUrl ? "jw-chat-url-error" : undefined} />
                {errors.productUrl ? <small id="jw-chat-url-error">{errors.productUrl}</small> : null}
              </label>

              <button className="jw-chat-submit" type="submit" disabled={isSubmitting}>
                <span>{isSubmitting ? "Sending..." : "Contact Us"}</span>
                <FiSend aria-hidden="true" />
              </button>
            </form>
          </div>
        </section>
      ) : null}

      <div className="jw-chat-actions">
        <a className="jw-whatsapp-launcher" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Chat with us on WhatsApp">
          <IoLogoWhatsapp aria-hidden="true" />
        </a>
        {!isOpen ? (
          <button className="jw-chat-launcher" type="button" onClick={openChat} aria-expanded="false">
            <FiMessageSquare aria-hidden="true" />
            <span>Chat with us</span>
          </button>
        ) : null}
      </div>
    </aside>
  );
}
