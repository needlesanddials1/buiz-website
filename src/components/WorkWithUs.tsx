import React from "react";
import "./WorkWithUs.css";

const WorkWithUs: React.FC = () => {
  const industries = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10l9-7 9 7v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10z"
          />
        </svg>
      ),
      name: "Real Estate",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      ),
      name: "Healthcare",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h18M3 7h18M5 11h14v10H5V11z"
          />
        </svg>
      ),
      name: "E-Commerce",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 17v-6h13v6M9 5V3h13v2M3 9h4v12H3z"
          />
        </svg>
      ),
      name: "Business Service Agency",
    },
  ];

  return (
    <section className="work-with-us">
      <div className="work-container">
        {/* Heading */}
        <h2 className="work-heading">Want to work with us?</h2>
        <p className="work-subheading">We provide solutions for:</p>

        {/* Tiles */}
        <div className="tiles-grid">
          {industries.map((industry, index) => (
            <div key={index} className="tile">
              <span className="tile-icon">{industry.icon}</span>
              <span className="tile-name">{industry.name}</span>
            </div>
          ))}
        </div>

        {/* Closing Line */}
        <p className="work-more">And much more...</p>
        <p className="work-question">What plan do you have?</p>

        {/* CTA Button */}
        <button className="hero-cta-button">Let’s Talk →</button>
      </div>
    </section>
  );
};

export default WorkWithUs;

