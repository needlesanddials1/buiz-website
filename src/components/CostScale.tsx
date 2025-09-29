import React from "react";
import "./CostScale.css";

const CostScale: React.FC = () => {
  const benefits = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m-6-6h12M4.5 12a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z"
          />
        </svg>
      ),
      title: "Cut Operational Costs",
      description: "Reduce labor costs by up to 60% with AI automation",
      stats: "60% Cost Reduction",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Increase Efficiency",
      description: "Process 10x more tasks in the same timeframe",
      stats: "10x Faster Processing",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3v18h18V3H3zm3 12h3v3H6v-3zm6-6h3v3h-3v-3zm6 6h3v3h-3v-3z"
          />
        </svg>
      ),
      title: "Scale Without Limits",
      description: "Handle unlimited volume without hiring more staff",
      stats: "Unlimited Scale",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6a6 6 0 100 12 6 6 0 000-12z"
          />
        </svg>
      ),
      title: "Eliminate Human Error",
      description: "Achieve 99.9% accuracy in repetitive tasks",
      stats: "99.9% Accuracy",
    },
  ];

  return (
    <section className="cost-scale">
      <div className="cost-scale-container">
        {/* Main Header */}
        <div className="cost-scale-header">
          <h2 className="main-title">
            <span className="title-scale">Cut Costs – Scale Your Business</span>
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="benefits-section">
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <div className="benefit-content">
                  <h3 className="benefit-title">{benefit.title}</h3>
                  <p className="benefit-description">{benefit.description}</p>
                  <div className="benefit-stats">{benefit.stats}</div>
                </div>
                <div className="card-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="cost-scale-bg">
        <div className="bg-shape bg-shape-1"></div>
        <div className="bg-shape bg-shape-2"></div>
        <div className="bg-pattern"></div>
      </div>
    </section>
  );
};

export default CostScale;

