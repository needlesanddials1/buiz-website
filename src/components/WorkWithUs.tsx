import React from "react";
import "./WorkWithUs.css";

const WorkWithUs: React.FC = () => {
  const services = [
    {
      name: "Voice Agents",
      desc: "AI-powered voice agents that streamline customer service, reduce effort, and boost satisfaction.",
    },
    {
      name: "ChatBots",
      desc: "Build intelligent chatbots that engage customers 24/7, boost sales, and cut support costs.",
    },
    {
      name: "Custom AI Solutions",
      desc: "Transforming work with AI — tailored solutions that automate, optimize, and deliver results.",
    },
  ];

  return (
    <section className="work-with-us">
      <div className="work-container">
        {/* Heading */}
        <h2 className="work-heading">Our Services</h2>

        {/* Subheading */}
        <p className="work-subheading">
          We create advanced AI solutions that automate, optimize, and transform
          the way you work. From predictive analytics to intelligent automation,
          our custom systems deliver measurable business results.
        </p>

        {/* Service Tiles */}
        <div className="tiles-grid">
          {services.map((service, index) => (
            <div key={index} className="tile">
              <span className="tile-name">{service.name}</span>
              <p className="tile-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
