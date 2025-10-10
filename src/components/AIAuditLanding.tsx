import React, { useState } from "react";
import "./AIAuditLandingPage.css";

const AIAuditLandingPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessIntro: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  // 🔗 Replace this with your actual n8n webhook URL
  const WEBHOOK_URL = "https://YOUR-N8N-WEBHOOK-URL-HERE";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", businessIntro: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className="audit-page">
      <div className="audit-container">
        <h1 className="audit-title">Discover where AI fits into your business</h1>
        <p className="audit-subtitle">Book a free AI Audit 🚀</p>

        <form className="audit-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="businessIntro"
            placeholder="Tell us a bit about your business..."
            value={formData.businessIntro}
            onChange={handleChange}
            rows={4}
            required
          />

          <button type="submit">Submit & Schedule Audit</button>
          {status === "success" && (
            <p className="status success">✅ Thank you! We’ll contact you soon.</p>
          )}
          {status === "error" && (
            <p className="status error">❌ Something went wrong. Try again.</p>
          )}
        </form>

        {/* Calendly Embed */}
        <div className="calendly-container">
          <iframe
            src="https://calendly.com/YOUR-CALENDLY-USERNAME/free-ai-audit"
            title="Book your AI Audit"
            frameBorder="0"
            style={{ width: "100%", height: "600px" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AIAuditLandingPage;
