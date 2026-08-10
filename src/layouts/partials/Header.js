"use client";

import Logo from "@components/Logo";
import { getFulfillmentCopy } from "@config/fulfillment-content";
import { serviceCatalog } from "@config/service-catalog";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FiCheck, FiChevronDown, FiGlobe } from "react-icons/fi";

export default function Header() {
  const pathname = usePathname();
  const { nav } = getFulfillmentCopy("en");
  const [navOpen, setNavOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navTheme, setNavTheme] = useState("dark");
  const languageRef = useRef(null);

  const homeHref = "/";
  const servicesHref = "/services";
  const aboutHref = "/about-us";
  const quoteHref = "/#quote";
  const hasOverlayHeader = ["/", "/services", "/about-us"].includes(pathname);

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

    const closeLanguageMenu = (event) => {
      if (!languageRef.current?.contains(event.target)) setLanguageOpen(false);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("pointerdown", closeLanguageMenu);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("pointerdown", closeLanguageMenu);
    };
  }, [pathname]);

  const closeNav = () => setNavOpen(false);

  return (
    <header
      className={`header ${hasOverlayHeader ? "header-transparent" : "header-solid"} ${scrolled ? "is-scrolled" : ""} nav-on-${navTheme}`}
    >
      <nav className="navbar container" aria-label="Primary navigation">
        <Logo href={homeHref} />

        <button
          id="show-button"
          className="order-2 flex cursor-pointer items-center md:order-1 md:hidden"
          aria-expanded={navOpen}
          aria-label={navOpen ? "Close menu" : "Open menu"}
          onClick={() => setNavOpen((open) => !open)}
        >
          <span className="ff-menu-icon" aria-hidden="true">
            {navOpen ? "×" : "☰"}
          </span>
        </button>

        <div
          id="nav-menu"
          className={`order-3 md:order-1 ${navOpen ? "max-h-250 md:max-h-auto" : "hidden md:block"}`}
        >
          <ul className="navbar-nav block w-full md:flex md:w-auto lg:space-x-2">
            <li className="nav-item">
              <Link
                className={`nav-link block ${pathname === "/" ? "nav-link-active" : ""}`}
                href={homeHref}
                onClick={closeNav}
              >
                {nav.home}
              </Link>
            </li>
            <li className="nav-item nav-dropdown group relative">
              <Link
                className={`nav-link inline-flex items-center gap-1 ${pathname === "/services" ? "nav-link-active" : ""}`}
                href={servicesHref}
                onClick={closeNav}
              >
                {nav.services}
                <FiChevronDown aria-hidden="true" />
              </Link>
              <ul className="nav-dropdown-list hidden group-hover:block md:invisible md:absolute md:block md:opacity-0 md:group-hover:visible md:group-hover:opacity-100">
                {serviceCatalog.map((service) => (
                  <li className="nav-dropdown-item" key={service.id}>
                    <Link className="nav-dropdown-link block" href={`/services#${service.id}`} onClick={closeNav}>
                      {service.menuTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link block ${pathname === "/about-us" ? "nav-link-active" : ""}`}
                href={aboutHref}
                onClick={closeNav}
              >
                {nav.about}
              </Link>
            </li>
            <li className="nav-item md:hidden">
              <Link className="ff-btn ff-btn-primary" href={quoteHref} onClick={closeNav}>
                {nav.quote}
              </Link>
            </li>
          </ul>
        </div>

        <div className="language-dropdown order-1 md:order-2" ref={languageRef}>
          <button
            className="language-trigger"
            type="button"
            aria-haspopup="listbox"
            aria-expanded={languageOpen}
            onClick={() => setLanguageOpen((open) => !open)}
          >
            <FiGlobe aria-hidden="true" />
            <span>English</span>
            <FiChevronDown className={languageOpen ? "is-open" : ""} aria-hidden="true" />
          </button>
          {languageOpen && (
            <div className="language-menu" role="listbox" aria-label="Choose language">
              <button className="language-option is-selected" type="button" role="option" aria-selected="true">
                <span><strong>English</strong><small>Current language</small></span>
                <FiCheck aria-hidden="true" />
              </button>
              <div className="language-coming-soon">More languages coming soon</div>
            </div>
          )}
        </div>

        <div className="order-1 ml-auto hidden items-center justify-end md:order-2 md:ml-0 md:flex">
          <Link className="ff-btn ff-btn-primary ff-nav-cta" href={quoteHref}>
            {nav.quote}
          </Link>
        </div>
      </nav>
    </header>
  );
}
