import React, { useState } from "react";
import "./AIAuditLanding.css";

type Props = {
  calendlyUrl?: string;
  apiEndpoint?: string;
  // if you prefer inline Calendly instead of popup set inlineEmbed to true
  inlineEmbed?: boolean;
};

const DEFAULT_CALENDLY_URL = "https://calendly.com/your-username/30min"; // <- replace
const DEFAULT_API = "/api/leads"; // <- replace with your lead-capture endpoint

type CalendlyWindow = Window & { Calendly?: any };
const win = window as CalendlyWindow;

const AIAuditLanding: React.FC<Props> = ({
  calendlyUrl = DEFAULT_CALENDLY_URL,
  apiEndpoint = DEFAULT_API,
  inlineEmbed = false,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [intro, setIntro] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; intro?: string }>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showInline, setShowInline] = useState(false);

  const emailIsValid = (e: string) => /^\S+@\S+\.\S+$/.test(e);

  const validate = () => {
    const err: typeof errors = {};
    if (!name.trim()) err.name = "Please enter your name";
    if (!email.trim()) err.email = "Please enter your email";
    else if (!emailIsValid(email)) err.email = "Enter a valid email";
    if (!intro.trim()) err.intro = "Tell us a bit about your business";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const loadCalendlyScript = (): Promise<void> => {
    if (win.Calendly) return Promise.resolve();
    return new Promise((res, rej) => {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => res();
      script.onerror = () => rej(new Error("Calendly script failed to load"));
      document.head.appendChild(script);
    });
  };

  const openCalendlyPopup = async (url: string) => {
    try {
      await loadCalendlyScript();
      if (win.Calendly && typeof win.Calendly.initPopupWidget === "function") {
        win.Calendly.initPopupWidget({ url });
      } else {
        window.open(url, "_blank", "noopener,noreferrer");
      }
    } catch (e) {
      // fallback: open direct URL
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const initInlineCalendly = async (url: string) => {
    try {
      await loadCalendlyScript();
      const container = document.getElementById("calendly-inline-container");
      if (container && win.Calendly && typeof win.Calendly.initInlineWidget === "function") {
        container.innerHTML = ""; // reset
        win.Calendly.initInlineWidget({ url, parentElement: container });
      } else {
        container!.innerHTML = `<a href="${url}" target="_blank" rel="noopener noreferrer">Book on Calendly</a>`;
      }
    } catch (e) {
      const container = document.getElementById("calendly-inline-container");
      if (container) container.innerHTML = `<a href="${url}" target="_blank" rel="noopener noreferrer">Book on Calendly</a>`;
    }
  };

  const sendLead = async () => {
    try {
      // Basic POST — adapt headers/auth as required by your backend
      const res = await fetch(apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          intro: intro.trim(),
          source: "AI Audit Landing",
          timestamp: new Date().toISOString(),
        }),
      });
      if (!res.ok) {
        // not fatal for UX — log for debugging
        console.warn("Lead capture returned non-OK:", res.status);
      }
    } catch (err) {
      console.error("Failed to send lead:", err);
    }
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    await sendLead();
    setSuccess(true);
    // if user prefers inline embed, show it; otherwise open popup
    if (inlineEmbed) {
      setShowInline(true);
      initInlineCalendly(calendlyUrl);
      // scroll to inline container for better UX
      const el = document.getElementById("calendly-inline-container");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      await openCalendlyPopup(calendlyUrl);
    }
    setSubmitting(false);
  };

  return (
    <section className="ai-audit-landing" aria-labelledby="ai-audit-heading">
      <div className="ai-audit-card">
        <div className="ai-audit-left">
          <h1 id="ai-audit-heading" className="ai-audit-title">
            Discover where AI fits into your business
          </h1>
          <p className="ai-audit-sub">
            Book a free AI audit — we'll review use-cases, data readiness, and quick wins tailored to your operation.
          </p>
          <ul className="ai-benefits">
            <li>🔎 Rapid diagnostics of AI opportunities</li>
            <li>⚙️ Practical roadmap and MVP suggestions</li>
            <li>💬 30-minute free consultation</li>
          </ul>
        </div>

        <form className="ai-audit-form" onSubmit={handleSubmit} noValidate>
          <label className="label">
            <span className="label-text">Name</span>
            <input
              className={`input ${errors.name ? "input-error" : ""}`}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "err-name" : undefined}
              placeholder="Your full name"
              required
            />
            {errors.name && (
              <div id="err-name" className="input-error-text">
                {errors.name}
              </div>
            )}
          </label>

          <label className="label">
            <span className="label-text">Email</span>
            <input
              className={`input ${errors.email ? "input-error" : ""}`}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "err-email" : undefined}
              placeholder="you@company.com"
              required
            />
            {errors.email && (
              <div id="err-email" className="input-error-text">
                {errors.email}
              </div>
            )}
          </label>

          <label className="label">
            <span className="label-text">A bit about your business</span>
            <textarea
              className={`textarea ${errors.intro ? "input-error" : ""}`}
              value={intro}
              onChange={(e) => setIntro(e.target.value)}
              aria-invalid={!!errors.intro}
              aria-describedby={errors.intro ? "err-intro" : undefined}
              placeholder="This would help us prepare for the meeting — product, team, main pain points..."
              rows={5}
              required
            />
            {errors.intro && (
              <div id="err-intro" className="input-error-text">
                {errors.intro}
              </div>
            )}
          </label>

          <div className="form-ctas">
            <button type="submit" className="btn btn-primary" disabled={submitting}>
              {submitting ? "Preparing booking..." : "Book a free AI Audit"}
            </button>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                // quick open Calendly without submitting form (optional)
                openCalendlyPopup(calendlyUrl);
              }}
            >
              Schedule now (skip form)
            </button>
          </div>

          {success && !inlineEmbed && (
            <div className="success-text" role="status">
              Thanks — lead captured. Booking popup should be open; you can also reschedule from your Calendly page.
            </div>
          )}
        </form>
      </div>

      {/* Inline container (hidden unless inlineEmbed true and showInline true) */}
      {inlineEmbed && (
        <div className={`calendly-inline-wrapper ${showInline ? "show" : ""}`}>
          <div id="calendly-inline-container" className="calendly-inline" />
        </div>
      )}
    </section>
  );
};

export default AIAuditLanding;
