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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Demo booking request submitted!");
    setFormData({ name: "", email: "", description: "" });
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

          <button className="hero-cta-button">Book Demo →</button>
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
            <input
              type="text"
              name="text"
              placeholder="Description"
              value={formData.description}
              onChange={handleInputChange}
              className="form-input"
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
