import React, { useState } from "react";
import "./Hero.css";

interface FormData {
  name: string;
  email: string;
  description: string;
}

const Hero: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    description: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // 🔗 Replace with your actual PRODUCTION n8n webhook URL
      const webhookUrl = "https://n8n.buizai.com/webhook/b988f5b2-e601-4213-9bd1-0453b890f21b";

      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Reset form after submission
      setFormData({ name: "", email: "", description: "" });

      // Redirect to Calendly
      window.location.href =
        "https://calendly.com/mariaqibtiya-buizai/new-meeting";
    } catch (error) {
      console.error("Webhook submission failed:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <h1 className="hero-headline">
            <span className="hero-line">AI Solutions That Scale Your</span>
            <span className="hero-line">Business</span>
            <span className="hero-line headline-accent">Automatically</span>
          </h1>

          <p className="hero-subheading">
            Stop wasting money on repetitive tasks. Boost your revenue with AI.
          </p>

          {/* Scrolls to form when clicked */}
          <button
            className="hero-cta-button"
            onClick={() =>
              document
                .querySelector<HTMLFormElement>(".hero-form")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Book Demo →
          </button>
        </div>

        {/* Right Form */}
        <div className="hero-form-container">
          <form className="hero-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
              className="form-input"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-input"
              required
            />
            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleInputChange}
              className="form-input"
              rows={4}
            />
            <button type="submit" className="form-submit-button">
              Book Demo Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;

