import React from "react";
import "./Footer.css";

interface FooterProps {
  currentPage?: 'home' | 'about';
  setCurrentPage?: (page: 'home' | 'about') => void;
}

const Footer: React.FC<FooterProps> = ({ currentPage = 'home', setCurrentPage }) => {
  const currentYear = new Date().getFullYear();

  // Function to handle navigation (both pages and sections)
  const handleNavigation = (target: string) => {
    if (target === 'about') {
      // Navigate to About page
      if (setCurrentPage) {
        setCurrentPage('about');
        window.scrollTo(0, 0);
      }
    } else if (target === 'home' || target === 'contact') {
      // Navigate to home page and scroll to Hero
      if (currentPage !== 'home' && setCurrentPage) {
        setCurrentPage('home');
        // Small delay to ensure page renders before scrolling
        setTimeout(() => {
          const element = document.getElementById('hero');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else {
        // Already on home page, just scroll to Hero
        const element = document.getElementById('hero');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    } else {
      // Navigate to sections on home page
      if (currentPage !== 'home' && setCurrentPage) {
        setCurrentPage('home');
        // Small delay to ensure page renders before scrolling
        setTimeout(() => {
          const element = document.getElementById(target);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else {
        // Already on home page, just scroll to section
        const element = document.getElementById(target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
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
        </div>

        {/* Quick Links Section - Updated */}
        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li>
              <button 
                onClick={() => handleNavigation('home')} 
                className="footer-link"
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavigation('contact')} 
                className="footer-link"
              >
                Contact
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavigation('about')} 
                className="footer-link"
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavigation('faq')} 
                className="footer-link"
              >
                FAQ
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavigation('process')} 
                className="footer-link"
              >
                How we work
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavigation('work-with-us')} 
                className="footer-link"
              >
                AI Solutions for
              </button>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="footer-section">
          <h4 className="footer-heading">Our Services</h4>
          <ul className="footer-links">
            <li><a href="/services/automation" className="footer-link">AI Automation</a></li>
            <li><a href="/services/consulting" className="footer-link">AI Consulting</a></li>
            <li><a href="/services/integration" className="footer-link">System Integration</a></li>
            <li><a href="/services/support" className="footer-link">Ongoing Support</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom - Copyright */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="copyright">
            © {currentYear} Buiz AI. All rights reserved.
          </p>
          <div className="legal-links">
            <a href="/privacy" className="footer-link legal-link">Privacy Policy</a>
            <span className="separator">|</span>
            <a href="/terms" className="footer-link legal-link">Terms of Service</a>
            <span className="separator">|</span>
            <a href="/cookies" className="footer-link legal-link">Cookie Policy</a>
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