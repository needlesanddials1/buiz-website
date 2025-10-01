import React, { useState } from "react";
import "./FAQ.css"; // <-- Make sure you have a CSS file

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "How quickly can AI solutions be implemented in my business?",
      answer:
        "Most of our AI solutions can be deployed within 30 days. We follow a structured process: Discovery (1 week), Planning & Strategy (1 week), Design (2 weeks), Testing (1 week), and Deployment. Complex integrations may take up to 60 days, but you'll see immediate benefits once live.",
    },
    {
      question: "What's the typical ROI and payback period for AI automation?",
      answer:
        "Our clients typically see 300-500% ROI within the first year. The average payback period is 3-6 months, depending on the complexity of implementation. Most businesses save $100K-$500K annually through reduced labor costs, increased efficiency, and fewer errors.",
    },
    {
      question: "Will AI replace my existing employees?",
      answer:
        "No, our AI solutions are designed to augment your workforce, not replace it. AI handles repetitive, time-consuming tasks, allowing your employees to focus on higher-value activities like strategy, creativity, and customer relationships. Most clients redeploy staff to more meaningful roles.",
    },
    {
      question: "How secure is my business data with AI systems?",
      answer:
        "Security is our top priority. We use enterprise-grade encryption, comply with GDPR and SOC 2 standards, and implement zero-trust architecture. Your data never leaves your secure environment, and all AI processing happens within your infrastructure or approved cloud environments.",
    },
    {
      question: "What level of technical expertise does my team need?",
      answer:
        "None! Our AI solutions are designed for business users, not technical experts. We provide intuitive interfaces, comprehensive training, and ongoing support. Your team will be able to manage and optimize the AI systems without any coding or technical background.",
    },
    {
      question: "Can AI solutions integrate with our existing software?",
      answer:
        "Yes, our AI solutions are built for seamless integration. We work with popular platforms like Salesforce, HubSpot, Microsoft Office, Google Workspace, and hundreds of other business tools through APIs and custom connectors. If it has an API, we can integrate it.",
    },
    {
      question: "What happens if the AI makes a mistake?",
      answer:
        "Our AI systems include built-in error detection, human oversight protocols, and rollback capabilities. We implement confidence thresholds and escalation rules to ensure critical decisions are reviewed. You maintain full control and can override any AI decision at any time.",
    },
    {
      question: "How do you measure success and track performance?",
      answer:
        "We provide detailed analytics dashboards showing key metrics like cost savings, time efficiency, accuracy rates, and ROI. You'll get real-time insights into AI performance, automated reports, and monthly reviews with our team to optimize results continuously.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="faq-container">
        {/* Section Header */}
        <div className="faq-header">
          <h2 className="faq-title">
            Frequently Asked <span className="title-accent">Questions</span>
          </h2>
          <p className="faq-subtitle">
            Everything you need to know about AI automation for your business.
            Can't find what you're looking for? Book a demo and ask us directly.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="faq-accordion">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
              >
                <span className="question-text">{faq.question}</span>
                <span className="question-icon">
                  <svg
                    className="plus-icon"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M10 4V16M4 10H16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>

              <div
                className="faq-answer"
                style={{
                  maxHeight: activeIndex === index ? "none" : "0",
                  opacity: activeIndex === index ? "1" : "0",
                }}
              >
                <div className="answer-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="faq-bg">
        <div className="bg-questions">
          <span className="floating-q q1">?</span>
          <span className="floating-q q2">?</span>
          <span className="floating-q q3">?</span>
          <span className="floating-q q4">?</span>
          <span className="floating-q q5">?</span>
        </div>
        <div className="bg-gradient-1"></div>
        <div className="bg-gradient-2"></div>
      </div>
    </section>
  );
};

export default FAQ;
