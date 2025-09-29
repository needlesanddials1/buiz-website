import React from "react";
import "./Process.css";

const Process: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We analyze your workflows and identify the best AI opportunities.",
    },
    {
      number: "02",
      title: "Strategy & Design",
      description:
        "Our team creates a tailored AI roadmap aligned with your goals.",
    },
    {
      number: "03",
      title: "Implementation",
      description:
        "We integrate AI agents into your existing systems seamlessly.",
    },
    {
      number: "04",
      title: "Optimization",
      description:
        "Continuous monitoring, support, and scaling for maximum ROI.",
    },
  ];

  return (
    <section className="process">
      <div className="process-container">
        {/* Header - Centered */}
        <div className="process-header">
          <h2 className="process-title">
            Our <span className="title-accent">Process</span>
          </h2>
          <p className="process-subtitle">
            A proven 4-step journey to bring AI automation into your business
          </p>
        </div>

        {/* Steps Grid - 2x2 Layout */}
        <div className="process-steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">{step.number}</div>
              <div className="step-text">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;