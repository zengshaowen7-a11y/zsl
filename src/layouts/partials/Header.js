"use client";

import Logo from "@components/Logo";
import { getServicePages } from "@config/service-page-content";
import { Link, usePathname } from "@/i18n/navigation";
import { plannedLocales, routing } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import {
  FiArrowRight,
  FiCheck,
  FiChevronDown,
  FiGlobe,
  FiMenu,
  FiX,
} from "react-icons/fi";

const languageNames = {
  en: "English",
  fr: "Français",
  de: "Deutsch",
  nl: "Nederlands",
  pl: "Polski",
  es: "Español",
};

export default function Header() {
  const locale = useLocale();
  const t = useTranslations("Navigation");
  const pathname = usePathname();
  const servicePages = getServicePages(locale);
  const [navOpen, setNavOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navTheme, setNavTheme] = useState("dark");
  const servicesRef = useRef(null);
  const languageRef = useRef(null);

  const homeHref = "/";
  const servicesHref = "/services";
  const howItWorksHref = "/how-it-works";
  const whyUsHref = "/why-us";
  const testimonialsHref = "/testimonials";
  const contactHref = "/contact";
  const quoteHref = contactHref;
  const comparablePathname = pathname;
  const hasOverlayHeader = ["/", "/services", "/about-us", "/testimonials", "/contact"].includes(comparablePathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
      const marker = 92;
      const active = Array.from(document.querySelectorAll("main > section")).find(
        (section) => {
          const rect = section.getBoundingClientRect();
          return rect.top <= marker && rect.bottom > marker;
        },
      );
      setNavTheme(
        active?.matches(
          ".ff-hero,.ff-inner-hero,.ff-process,.ff-team,.ff-quote,.ff-real-team,.ff-inner-cta",
        )
          ? "dark"
          : "light",
      );
    };

    const closeHeaderMenus = (event) => {
      if (!servicesRef.current?.contains(event.target)) setServicesOpen(false);
      if (!languageRef.current?.contains(event.target)) setLanguageOpen(false);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("pointerdown", closeHeaderMenus);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("pointerdown", closeHeaderMenus);
    };
  }, [pathname]);

  const closeNav = () => {
    setNavOpen(false);
    setServicesOpen(false);
    setLanguageOpen(false);
  };

  const handleNavLinkClick = (href) => (event) => {
    closeNav();
    if (href === pathname) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleServicesTriggerClick = () => {
    setServicesOpen((open) => !open);
  };

  const handleServicesMouseEnter = () => {
    if (window.matchMedia("(min-width: 768px)").matches) setServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    if (window.matchMedia("(min-width: 768px)").matches) setServicesOpen(false);
  };

  return (
    <header
      className={`header ${hasOverlayHeader ? "header-transparent" : "header-solid"} ${scrolled ? "is-scrolled" : ""} nav-on-${navTheme}`}
    >
      <nav className="navbar container header-navbar" aria-label={t("primaryLabel")}>
        <Logo href={homeHref} onClick={handleNavLinkClick(homeHref)} />

        <button
          id="show-button"
          className="header-menu-toggle order-2 flex cursor-pointer items-center md:order-1 md:hidden"
          aria-expanded={navOpen}
          aria-label={navOpen ? t("closeMenu") : t("openMenu")}
          onClick={() => setNavOpen((open) => !open)}
        >
          {navOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>

        <div
          id="nav-menu"
          className={`order-3 md:order-1 ${navOpen ? "max-h-250 md:max-h-auto" : "hidden md:block"}`}
        >
          <ul className="navbar-nav block w-full md:flex md:w-auto lg:space-x-2">
            <li
              className="nav-item nav-dropdown relative"
              ref={servicesRef}
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setServicesOpen(false);
              }}
            >
              <div className="nav-services-control">
                <Link
                  className={`nav-link nav-services-link ${comparablePathname.startsWith("/services") ? "nav-link-active" : ""}`}
                  href={servicesHref}
                  onClick={handleNavLinkClick(servicesHref)}
                >
                  {t("services")}
                </Link>
                <button
                  className="nav-services-trigger"
                  type="button"
                  aria-label={t("toggleServices")}
                  aria-haspopup="menu"
                  aria-expanded={servicesOpen}
                  onClick={handleServicesTriggerClick}
                >
                  <FiChevronDown className={servicesOpen ? "is-open" : ""} aria-hidden="true" />
                </button>
              </div>
              <div className={`service-mega-menu ${servicesOpen ? "is-open" : ""}`} role="menu">
                <ul className="service-menu-grid">
                {servicePages.map((service, index) => (
                  <li className="nav-dropdown-item" key={service.slug}>
                    <Link className="service-menu-link" href={`/services/${service.slug}`} onClick={handleNavLinkClick(`/services/${service.slug}`)} role="menuitem">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <strong>{service.menuTitle}</strong>
                      <FiArrowRight />
                    </Link>
                  </li>
                ))}
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link block ${comparablePathname === "/how-it-works" ? "nav-link-active" : ""}`}
                href={howItWorksHref}
                onClick={handleNavLinkClick(howItWorksHref)}
              >
                {t("howItWorks")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link block ${comparablePathname === "/why-us" ? "nav-link-active" : ""}`}
                href={whyUsHref}
                onClick={handleNavLinkClick(whyUsHref)}
              >
                {t("whyUs")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link block ${comparablePathname === "/testimonials" ? "nav-link-active" : ""}`}
                href={testimonialsHref}
                onClick={handleNavLinkClick(testimonialsHref)}
              >
                {t("testimonials")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link block ${comparablePathname === "/contact" ? "nav-link-active" : ""}`}
                href={contactHref}
                onClick={handleNavLinkClick(contactHref)}
              >
                {t("contact")}
              </Link>
            </li>
            <li className="nav-item md:hidden">
              <Link className="ff-btn ff-btn-primary" href={quoteHref} onClick={handleNavLinkClick(quoteHref)}>
                {t("getQuote")}
              </Link>
            </li>
          </ul>
        </div>

        <div className="language-dropdown order-1 md:order-2" ref={languageRef}>
          <button
            type="button"
            className="language-trigger"
            aria-label={t("selectLanguage")}
            aria-haspopup="menu"
            aria-expanded={languageOpen}
            onClick={() => setLanguageOpen((open) => !open)}
          >
            <FiGlobe aria-hidden="true" />
            <span>{t("currentLanguageCode")}</span>
            <FiChevronDown className={languageOpen ? "is-open" : ""} aria-hidden="true" />
          </button>
          {languageOpen ? (
            <div className="language-menu" role="menu">
              {routing.locales.map((code) => (
                <Link
                  className={`language-option ${code === locale ? "is-selected" : ""}`}
                  href={pathname}
                  locale={code}
                  key={code}
                  onClick={() => setLanguageOpen(false)}
                  role="menuitem"
                >
                  <span><strong>{languageNames[code]}</strong><small>{code.toUpperCase()}</small></span>
                  {code === locale ? <FiCheck aria-hidden="true" /> : null}
                </Link>
              ))}
              {plannedLocales.map((code) => (
                <span className="language-option language-option-disabled" aria-disabled="true" key={code}>
                  <span><strong>{languageNames[code]}</strong><small>{t("comingSoon")}</small></span>
                </span>
              ))}
            </div>
          ) : null}
        </div>

        <div className="order-1 ml-auto hidden items-center justify-end md:order-2 md:ml-0 md:flex">
          <Link className="ff-btn ff-btn-primary ff-nav-cta" href={quoteHref} onClick={handleNavLinkClick(quoteHref)}>
            {t("getQuote")}
          </Link>
        </div>
      </nav>
    </header>
  );
}
