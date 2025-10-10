import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Footer.css";

interface FooterProps {
  currentPage?: "home" | "about";
  setCurrentPage?: (page: "home" | "about") => void;
}

const Footer: React.FC<FooterProps> = ({
  currentPage = "home",
  setCurrentPage,
}) => {
  const currentYear = new Date().getFullYear();
  const location = useLocation(); // To detect current route

  // Smooth scroll to section on Home page
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNavigation = (target: string) => {
    if (target === "about") {
      if (setCurrentPage) setCurrentPage("about");
    } else if (location.pathname === "/" && target !== "about") {
      scrollToSection(target);
    } else {
      // Navigate to Home first, then scroll
      if (setCurrentPage) setCurrentPage("home");
      setTimeout(() => scrollToSection(target), 100);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info Section */}
        <div className="footer-section">
          <h3 className="footer-logo">Buiz AI</h3>
          <p className="footer-description">
            Empowering businesses with intelligent AI solutions. Transform your
            workflow and boost productivity with our cutting-edge technology.
          </p>

          {/* ✅ Free AI Audit using React Router */}
          <Link to="/ai-audit" className="footer-cta-link">
            🚀 Free AI Audit
          </Link>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li>
              <button onClick={() => handleNavigation("home")} className="footer-link">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigation("contact")} className="footer-link">
