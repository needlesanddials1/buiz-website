import React from "react";
import { Link } from "react-router-dom"; // Import Link
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

  const handleNavigation = (target: string) => {
    if (target === "about") {
      if (setCurrentPage) {
        setCurrentPage("about");
        window.scrollTo(0, 0);
      }
    } else if (target === "home" || target === "contact") {
      if (currentPage !== "home" && setCurrentPage) {
        setCurrentPage("home");
        setTimeout(() => {
          const element = document.getElementById("hero");
          element?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      } else {
        const element = document.getElementById("hero");
        element?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      if (currentPage !== "home" && setCurrentPage) {
        setCurrentPage("home");
        setTimeout(() => {
          const element = document.getElementById(target);
          element?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      } else {
        const element = document.getElementById(target);
        element?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
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
                Contact
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigation("about")} className="footer-link">
                About
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigation("faq")} className="footer-link">
                FAQ
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigation("process")} className="footer-link">
                How we work
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigation("work-with-us")} className="footer-link">
                AI Solutions for
              </button>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="footer-section">
          <h4 className="footer-heading">Our Services</h4>
          <ul className="footer-links">
            <li>
              <Link to="/services/automation" className="footer-link">
                AI Automation
              </Link>
            </li>
            <li>
              <Link to="/services/consulting" className="footer-link">
                AI Consulting
              </Link>
            </li>
            <li>
              <Link to="/services/integration" className="footer-link">
                System Integration
              </Link>
            </li>
            <li>
              <Link to="/services/support" className="footer-link">
                Ongoing Support
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="copyright">
            © {currentYear} Buiz AI. All rights reserved.
          </p>
          <div className="legal-links">
            <Link to="/privacy" className="footer-link legal-link">
              Privacy Policy
            </Link>
            <span className="separator">|</span>
            <Link to="/terms" className="footer-link legal-link">
              Terms of Service
            </Link>
            <span className="separator">|</span>
            <Link to="/cookies" className="footer-link legal-link">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="footer-bg">
        <div className="footer-pattern"></div>
        <div className="footer-glow"></div>
      </div>
    </footer>
  );
};

export default Footer;
