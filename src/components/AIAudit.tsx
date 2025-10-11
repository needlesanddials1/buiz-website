import React from 'react';
import './About.css';

interface AboutProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<'home' | 'about'>>;
}

const About: React.FC<AboutProps> = ({ setCurrentPage }) => {
  const handleBackToHome = () => {
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  return (
    <div className="about-page">
      <div className="about-container">
        {/* Back Button */}
        <button className="back-button" onClick={handleBackToHome}>
          <span className="back-arrow">←</span>
          Back to Home
        </button>

        <div className="about-hero">
          <h1 className="about-title">About Buiz AI</h1>
          <p className="about-subtitle">
            Transforming businesses through intelligent AI solutions
          </p>
        </div>

        <div className="about-content">
          <section className="about-section">
            <h2>Our Story</h2>
            <p>
              Founded with a vision to democratize AI for businesses of all sizes, 
              Buiz AI has been at the forefront of intelligent automation solutions. 
              We believe that every business should have access to cutting-edge AI 
              technology to streamline operations and boost productivity.
            </p>
          </section>

          <section className="about-section">
            <h2>Our Mission</h2>
            <p>
              To empower businesses with intelligent AI solutions that transform 
              workflows, enhance productivity, and drive sustainable growth. We're 
              committed to making AI accessible, practical, and impactful for 
              organizations across all industries.
            </p>
          </section>

          <section className="about-section">
            <h2>What We Do</h2>
            <div className="services-grid">
              <div className="service-item">
                <h3>AI Automation</h3>
                <p>Streamline repetitive tasks and optimize workflows with intelligent automation.</p>
              </div>
              <div className="service-item">
                <h3>AI Consulting</h3>
                <p>Strategic guidance to help you identify and implement AI opportunities.</p>
              </div>
              <div className="service-item">
                <h3>System Integration</h3>
                <p>Seamlessly integrate AI solutions into your existing business infrastructure.</p>
              </div>
              <div className="service-item">
                <h3>Ongoing Support</h3>
                <p>Continuous support and optimization to ensure your AI solutions deliver value.</p>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>Why Choose Us</h2>
            <ul className="benefits-list">
              <li>Expert team with deep AI and business experience</li>
              <li>Customized solutions tailored to your specific needs</li>
              <li>Proven track record of successful implementations</li>
              <li>Ongoing support and continuous optimization</li>
              <li>Commitment to staying ahead of AI innovations</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
