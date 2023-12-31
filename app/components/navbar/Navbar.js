"use client";

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link as ScrollLink } from "react-scroll";
import LanguagesMenu from "../LanguagesMenu/LanguagesMenu";
import "./Navbar.scss";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 70;

      if (isElementInViewport("AboutPage", scrollPosition)) {
        setActiveLink("AboutPage");
      } else if (isElementInViewport("CurriculumPage", scrollPosition)) {
        setActiveLink("CurriculumPage");
      } else if (isElementInViewport("PortfolioPage", scrollPosition)) {
        setActiveLink("PortfolioPage");
      } else if (isElementInViewport("TestimonialsPage", scrollPosition)) {
        setActiveLink("TestimonialsPage");
      } else if (isElementInViewport("ContactPage", scrollPosition)) {
        setActiveLink("ContactPage");
      } else {
        setActiveLink("");
      }
    };

    const isElementInViewport = (id, scrollPosition) => {
      const element = document.getElementById(id);
      if (!element) return false;

      const rect = element.getBoundingClientRect();
      const topOffset = rect.top + window.pageYOffset;
      const bottomOffset = topOffset + rect.height;

      return scrollPosition >= topOffset && scrollPosition < bottomOffset;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <div className="navbar-container">
        <input type="checkbox" checked={menuOpen} onChange={handleMenuToggle} id="menu-toggle" />
        <label htmlFor="menu-toggle" className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </label>
        <div className="menu-items">
          <ScrollLink
            to="/"
            smooth={true}
            duration={500}
            className={`nav-item ${activeLink === "home" ? "active" : ""}`}
            onClick={() => {
              setMenuOpen(false);
              setActiveLink("home");
            }}
          >
            {t("Home")}
          </ScrollLink>
          <ScrollLink
            to="/about"
            smooth={true}
            duration={500}
            className={`nav-item ${activeLink === "about" ? "active" : ""}`}
            onClick={() => {
              setMenuOpen(false);
              setActiveLink("about");
            }}
          >
            {t("About")}
          </ScrollLink>
          <ScrollLink
            to="/services"
            smooth={true}
            duration={500}
            className={`nav-item ${activeLink === "services" ? "active" : ""}`}
            onClick={() => {
              setMenuOpen(false);
              setActiveLink("services");
            }}
          >
            {t("Services")}
          </ScrollLink>
          <ScrollLink
            to="/contact"
            smooth={true}
            duration={500}
            className={`nav-item ${activeLink === "contact" ? "active" : ""}`}
            onClick={() => {
              setMenuOpen(false);
              setActiveLink("contact");
            }}
          >
            {t("Contact")}
          </ScrollLink>
          <div className={`nav-item no-hover-effect`}>
            <LanguagesMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
