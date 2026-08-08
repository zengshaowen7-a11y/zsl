"use client";

import Logo from "@components/Logo";
import menu from "@config/menu.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import config from "../../config/config.json";

const Header = () => {
  const pathname = usePathname();
  const isChinese = pathname === "/zh" || pathname.startsWith("/zh/");
  const basePathname = isChinese ? pathname.replace(/^\/zh/, "") || "/" : pathname;
  const languageTarget = isChinese ? basePathname : `/zh${pathname === "/" ? "" : pathname}`;
  const hasOverlayHeader = ["/", "/services", "/how-it-works", "/why-us", "/help"].includes(basePathname);

  // distructuring the main menu from menu object
  const { main } = menu;

  // states declaration
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navTheme, setNavTheme] = useState("dark");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
      const marker = 96;
      const activeSection = Array.from(
        document.querySelectorAll("main > section")
      ).find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= marker && rect.bottom > marker;
      });
      const usesDarkNav = activeSection?.matches(
        ".smt-hero, .smt-process, .smt-quote, .detail-hero, .detail-dark"
      );
      setNavTheme(usesDarkNav ? "dark" : "light");
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // logo source
  const { logo } = config.site;
  const { enable, label, link } = config.nav_button;

  return (
    <header className={`header ${hasOverlayHeader ? "header-transparent" : "header-solid"} ${scrolled ? "is-scrolled" : ""} nav-on-${navTheme}`}>
      <nav className="navbar container">
        {/* logo */}
        <div className="order-0">
          <Logo src={logo} />
        </div>

        {/* navbar toggler */}
        <button
          id="show-button"
          className="order-2 flex cursor-pointer items-center md:order-1 md:hidden"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? (
            <svg className="h-6 fill-current" viewBox="0 0 20 20">
              <title>Menu Open</title>
              <polygon
                points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                transform="rotate(45 10 10)"
              />
            </svg>
          ) : (
            <svg className="h-6 fill-current" viewBox="0 0 20 20">
              <title>Menu Close</title>
              <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z" />
            </svg>
          )}
        </button>

        {/* Menu */}
        <div
          id="nav-menu"
          className={`order-3 md:order-1 ${navOpen ? "max-h-250 md:max-h-auto" : "hidden md:block"}`}
        >
          <ul className="navbar-nav block w-full md:flex md:w-auto lg:space-x-2">
            {main.map((menu, i) => (
              <React.Fragment key={`menu-${i}`}>
                {menu.hasChildren ? (
                  <li className="nav-item nav-dropdown group relative">
                    <span className="nav-link inline-flex items-center">
                      {menu.name}
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                    <ul className="nav-dropdown-list hidden group-hover:block md:invisible md:absolute md:block md:opacity-0 md:group-hover:visible md:group-hover:opacity-100">
                      {menu.children.map((child, i) => (
                        <li className="nav-dropdown-item" key={`children-${i}`}>
                          <Link
                            href={isChinese ? `/zh${child.url}` : child.url}
                            className="nav-dropdown-link block"
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link
                      href={isChinese ? `/zh${menu.url === "/" ? "" : menu.url}` : menu.url}
                      onClick={() => setNavOpen(false)}
                      className={`nav-link block ${
                        basePathname === menu.url ? "nav-link-active" : ""
                      }`}
                    >
                      {menu.name}
                    </Link>
                  </li>
                )}
              </React.Fragment>
            ))}
            {enable && (
              <li className="md:hidden">
                <Link
                  className="btn btn-primary z-0 py-[14px]"
                  href={link}
                  rel=""
                >
                  {label}
                </Link>
              </li>
            )}
          </ul>
        </div>
        <a className="language-switch order-1 md:order-2" href={languageTarget} aria-label="Switch language">
          {isChinese ? "EN" : "中文"}
        </a>
        {enable && (
          <div className="d-flex order-1 ml-auto hidden min-w-[200px] items-center justify-end md:order-2 md:ml-0 md:flex">
            <Link className="btn btn-primary z-0 py-[14px]" href={isChinese ? "/zh#quote" : link} rel="">
              {label}
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
