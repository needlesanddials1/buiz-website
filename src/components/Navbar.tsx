import React, { useState } from "react";
import "./Navbar.css";

interface NavbarProps {
  currentPage: 'home' | 'about';
  setCurrentPage: React.Dispatch<React.SetStateAction<'home' | 'about'>>;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to handle navigation (both pages and sections)
  const handleNavigation = (target: string) => {
    // Close mobile menu if open
    setIsMobileMenuOpen(false);

    if (target === 'about') {
      // Navigate to About page
      setCurrentPage('about');
      window.scrollTo(0, 0);
    } else if (target === 'home') {
      // Navigate to home page and scroll to Hero
      if (currentPage !== 'home') {
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
      if (currentPage !== 'home') {
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Brand Name - Left Side */}
        <div className="navbar-brand">
          Buiz AI
        </div>

        {/* Navigation Links - Right Side */}
        <div className={`navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <button 
            onClick={() => handleNavigation('home')}
            className="nav-link"
          >
            Home
          </button>
          <button 
            onClick={() => handleNavigation('work-with-us')}
            className="nav-link"
          >
            Get AI Solutions
          </button>
          <button 
            onClick={() => handleNavigation('process')}
            className="nav-link"
          >
            How we work
          </button>
          <button 
            onClick={() => handleNavigation('faq')}
            className="nav-link"
          >
            FAQ
          </button>
          <button 
            onClick={() => handleNavigation('about')}
            className="nav-link"
          >
            About
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;