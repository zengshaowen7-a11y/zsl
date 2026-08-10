"use client";

import Logo from "@components/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { getFulfillmentCopy } from "@config/fulfillment-content";

export default function Header() {
  const pathname = usePathname();
  const isChinese = pathname === "/zh" || pathname.startsWith("/zh/");
  const lang = isChinese ? "zh" : "en";
  const { nav } = getFulfillmentCopy(lang);
  const base = isChinese ? pathname.replace(/^\/zh/, "") || "/" : pathname;
  const homeHref = isChinese ? "/zh" : "/";
  const servicesHref = isChinese ? "/zh/services" : "/services";
  const aboutHref = isChinese ? "/zh/about-us" : "/about-us";
  const quoteHref = `${homeHref}/#quote`.replace("//", "/");
  const languageTarget = isChinese ? base : `/zh${pathname === "/" ? "" : pathname}`;
  const hasOverlayHeader = ["/", "/services", "/about-us"].includes(base);
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navTheme, setNavTheme] = useState("dark");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
      const marker = 92;
      const active = Array.from(document.querySelectorAll("main > section")).find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= marker && rect.bottom > marker;
      });
      setNavTheme(active?.matches(".ff-hero,.ff-inner-hero,.ff-process,.ff-team,.ff-quote,.ff-real-team,.ff-inner-cta") ? "dark" : "light");
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const close = () => setNavOpen(false);
  return (
    <header className={`header ${hasOverlayHeader ? "header-transparent" : "header-solid"} ${scrolled ? "is-scrolled" : ""} nav-on-${navTheme}`}>
      <nav className="navbar container" aria-label="Primary navigation">
        <Logo href={homeHref} />
        <button id="show-button" className="order-2 flex cursor-pointer items-center md:order-1 md:hidden" aria-expanded={navOpen} aria-label={navOpen ? "Close menu" : "Open menu"} onClick={() => setNavOpen(!navOpen)}>
          <span className="ff-menu-icon">{navOpen ? "×" : "☰"}</span>
        </button>
        <div id="nav-menu" className={`order-3 md:order-1 ${navOpen ? "max-h-250 md:max-h-auto" : "hidden md:block"}`}>
          <ul className="navbar-nav block w-full md:flex md:w-auto lg:space-x-2">
            <li className="nav-item"><Link className={`nav-link block ${base === "/" ? "nav-link-active" : ""}`} href={homeHref} onClick={close}>{nav.home}</Link></li>
            <li className="nav-item nav-dropdown group relative">
              <Link className={`nav-link inline-flex items-center gap-1 ${base === "/services" ? "nav-link-active" : ""}`} href={servicesHref} onClick={close}>{nav.services}<FiChevronDown /></Link>
              <ul className="nav-dropdown-list hidden group-hover:block md:invisible md:absolute md:block md:opacity-0 md:group-hover:visible md:group-hover:opacity-100">
                {nav.serviceItems.map(([name, url]) => <li className="nav-dropdown-item" key={name}><Link className="nav-dropdown-link block" href={url} onClick={close}>{name}</Link></li>)}
              </ul>
            </li>
            <li className="nav-item"><Link className={`nav-link block ${base === "/about-us" ? "nav-link-active" : ""}`} href={aboutHref} onClick={close}>{nav.about}</Link></li>
            <li className="nav-item md:hidden"><Link className="ff-btn ff-btn-primary" href={quoteHref} onClick={close}>{nav.quote}</Link></li>
          </ul>
        </div>
        <a className="language-switch order-1 md:order-2" href={languageTarget} aria-label="Switch language">{isChinese ? "EN" : "中文"}</a>
        <div className="order-1 ml-auto hidden items-center justify-end md:order-2 md:ml-0 md:flex"><Link className="ff-btn ff-btn-primary ff-nav-cta" href={quoteHref}>{nav.quote}</Link></div>
      </nav>
    </header>
  );
}
