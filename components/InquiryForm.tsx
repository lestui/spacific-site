"use client";

import { useState, FormEvent } from "react";

type Props = {
  projectType?: string;
  compact?: boolean;
};

export default function InquiryForm({ projectType = "", compact = false }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    setSending(true);

    try {
      const response = await fetch("https://formspree.io/f/maqawlng", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert("Something went wrong. Try again or call or email us directly.");
      }
    } catch {
      alert("Something went wrong. Try again or call or email us directly.");
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <div style={successWrap}>
        <h3 style={successTitle}>Project received — we’re onto it</h3>

        <p style={successText}>Thanks — we’ve got your project.</p>

        <p style={successText}>
          We’ll review your project and get back to you within{" "}
          <strong style={successStrong}>24 hours</strong>.
        </p>

        <p style={successSub}>
          Most jobs are quoted same-day — we’ll confirm availability in our reply.
        </p>

        <p style={trustText}>
          Trusted for CNC, fabrication, and production-ready work across Auckland.
        </p>

        <div style={ctaBlock}>
          <p style={urgentText}>Need it urgent?</p>

          <a href="tel:0212487664" style={callButton}>
            Call or Text Now
          </a>

          <p style={phoneText}>021 248 7664</p>

          <p style={emailText}>
            or email <strong style={successStrong}>spacificwoodworkcnc@gmail.com</strong>
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: "16px" }}>
      <input type="hidden" name="projectType" value={projectType} />

      <input name="name" placeholder="Your name" required style={input} />
      <input name="email" type="email" placeholder="Email" required style={input} />
      <input name="phone" placeholder="Phone (optional)" style={input} />

      <select name="service" defaultValue="" style={input}>
        <option value="" disabled>
          Select service
        </option>
        <option>CNC Routing</option>
        <option>CAD / CAM</option>
        <option>Fabrication</option>
        <option>CO2 Laser</option>
        <option>Vinyl Cutting</option>
        <option>3D Printing</option>
        <option>Signage</option>
        <option>Fiber Laser</option>
      </select>

      <textarea
        name="message"
        placeholder="Tell us about your project..."
        required
        rows={compact ? 4 : 6}
        style={textarea}
      />

      <button type="submit" style={button} disabled={sending}>
        {sending ? "Sending..." : "Start Your Project"}
      </button>
    </form>
  );
}

const input = {
  padding: "14px",
  borderRadius: "10px",
  border: "1px solid #333",
  background: "#111",
  color: "#fff",
  width: "100%",
  boxSizing: "border-box" as const,
};

const textarea = {
  ...input,
};

const button = {
  padding: "16px",
  borderRadius: "12px",
  border: "none",
  background: "#e11d1d",
  color: "#fff",
  fontWeight: "bold" as const,
  cursor: "pointer",
  width: "100%",
};

const successWrap = {
  textAlign: "center" as const,
  padding: "30px",
  borderRadius: "20px",
  background: "#0f0f0f",
  border: "1px solid rgba(255,255,255,0.1)",
};

const successTitle = {
  fontSize: "1.9rem",
  fontWeight: "800",
  marginBottom: "12px",
  color: "#fff",
  lineHeight: "1.2",
};

const successText = {
  color: "#d1d5db",
  marginBottom: "10px",
  lineHeight: "1.6",
};

const successSub = {
  fontSize: "0.95rem",
  color: "#b3b3b3",
  lineHeight: "1.6",
  marginBottom: "10px",
};

const trustText = {
  fontSize: "0.9rem",
  color: "#8f8f8f",
  marginBottom: "18px",
  lineHeight: "1.5",
};

const successStrong = {
  color: "#fff",
};

const ctaBlock = {
  marginTop: "10px",
};

const urgentText = {
  color: "#fff",
  fontWeight: "700",
  marginBottom: "12px",
};

const callButton = {
  display: "inline-block",
  padding: "14px 22px",
  borderRadius: "12px",
  background: "#e11d1d",
  color: "#fff",
  textDecoration: "none",
  fontWeight: "700",
  marginBottom: "10px",
};

const phoneText = {
  fontSize: "0.95rem",
  color: "#d1d5db",
  marginBottom: "8px",
};

const emailText = {
  fontSize: "0.9rem",
  color: "#9ca3af",
  lineHeight: "1.5",
};