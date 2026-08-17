"use client";

import Logo from "@components/Logo";
import { getFulfillmentCopy } from "@config/fulfillment-content";
import { servicePages } from "@config/service-page-content";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  FiArrowRight,
  FiChevronDown,
  FiGlobe,
  FiMenu,
  FiX,
} from "react-icons/fi";

export default function Header() {
  const pathname = usePathname();
  const isZh = pathname === "/zh" || pathname.startsWith("/zh/");
  const langPrefix = isZh ? "/zh" : "";
  const { nav } = getFulfillmentCopy(isZh ? "zh" : "en");
  const [navOpen, setNavOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navTheme, setNavTheme] = useState("dark");
  const servicesRef = useRef(null);

  const homeHref = isZh ? "/zh" : "/";
  const servicesHref = `${langPrefix}/services`;
  const howItWorksHref = `${langPrefix}/how-it-works`;
  const whyUsHref = `${langPrefix}/why-us`;
  const testimonialsHref = `${langPrefix}/testimonials`;
  const contactHref = `${langPrefix}/contact`;
  const quoteHref = contactHref;
  const comparablePathname = isZh ? pathname.replace(/^\/zh(?=\/|$)/, "") || "/" : pathname;
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
      <nav className="navbar container header-navbar" aria-label="Primary navigation">
        <Logo href={homeHref} onClick={handleNavLinkClick(homeHref)} />

        <button
          id="show-button"
          className="header-menu-toggle order-2 flex cursor-pointer items-center md:order-1 md:hidden"
          aria-expanded={navOpen}
          aria-label={navOpen ? "Close menu" : "Open menu"}
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
                  {nav.services}
                </Link>
                <button
                  className="nav-services-trigger"
                  type="button"
                  aria-label={isZh ? "展开服务菜单" : "Toggle services menu"}
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
                    <Link className="service-menu-link" href={`${langPrefix}/services/${service.slug}`} onClick={handleNavLinkClick(`${langPrefix}/services/${service.slug}`)} role="menuitem">
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
                {isZh ? "合作流程" : "How It Works"}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link block ${comparablePathname === "/why-us" ? "nav-link-active" : ""}`}
                href={whyUsHref}
                onClick={handleNavLinkClick(whyUsHref)}
              >
                {isZh ? "为什么选择我们" : "Why JW Dropshipping"}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link block ${comparablePathname === "/testimonials" ? "nav-link-active" : ""}`}
                href={testimonialsHref}
                onClick={handleNavLinkClick(testimonialsHref)}
              >
                {isZh ? "用户评价" : "Testimonials"}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link block ${comparablePathname === "/contact" ? "nav-link-active" : ""}`}
                href={contactHref}
                onClick={handleNavLinkClick(contactHref)}
              >
                {nav.contact || "Contact"}
              </Link>
            </li>
            <li className="nav-item md:hidden">
              <Link className="ff-btn ff-btn-primary" href={quoteHref} onClick={handleNavLinkClick(quoteHref)}>
                {nav.quote}
              </Link>
            </li>
          </ul>
        </div>

        <div className="language-dropdown order-1 md:order-2">
          <span className="language-trigger language-static" aria-label="English site">
            <FiGlobe aria-hidden="true" />
            <span>EN</span>
          </span>
        </div>

        <div className="order-1 ml-auto hidden items-center justify-end md:order-2 md:ml-0 md:flex">
          <Link className="ff-btn ff-btn-primary ff-nav-cta" href={quoteHref} onClick={handleNavLinkClick(quoteHref)}>
            {nav.quote}
          </Link>
        </div>
      </nav>
    </header>
  );
}
