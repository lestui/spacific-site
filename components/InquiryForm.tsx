"use client";

import { FormEvent } from "react";

type InquiryFormProps = {
  projectType?: string;
  compact?: boolean;
};

const formAction = "https://formspree.io/f/maqawlng";

export default function InquiryForm({
  projectType = "",
  compact = false,
}: InquiryFormProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    const fileInput = form.querySelector(
      'input[type="file"][name="attachment"]'
    ) as HTMLInputElement | null;

    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const totalBytes = Array.from(fileInput.files).reduce(
        (sum, file) => sum + file.size,
        0
      );

      const maxBytes = 10 * 1024 * 1024;

      if (totalBytes > maxBytes) {
        event.preventDefault();
        alert("Please keep total file upload size under 10MB.");
      }
    }
  };

  return (
    <form
      action={formAction}
      method="POST"
      encType="multipart/form-data"
      onSubmit={handleSubmit}
      style={{
        display: "grid",
        gap: compact ? "14px" : "16px",
      }}
    >
      <input type="hidden" name="_subject" value="New website project enquiry" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="source" value="website" />

      <div style={fieldGridStyle}>
        <label style={labelWrapStyle}>
          <span style={labelStyle}>First Name</span>
          <input
            type="text"
            name="firstName"
            required
            placeholder="Your first name"
            style={inputStyle}
          />
        </label>

        <label style={labelWrapStyle}>
          <span style={labelStyle}>Email</span>
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            style={inputStyle}
          />
        </label>
      </div>

      <div style={fieldGridStyle}>
        <label style={labelWrapStyle}>
          <span style={labelStyle}>Phone</span>
          <input
            type="tel"
            name="phone"
            placeholder="021..."
            style={inputStyle}
          />
        </label>

        <label style={labelWrapStyle}>
          <span style={labelStyle}>Project Type</span>
          <select
            name="projectType"
            defaultValue={projectType}
            style={inputStyle}
          >
            <option value="">Select a service</option>
            <option value="CNC Routing">CNC Routing</option>
            <option value="CAD / CAM">CAD / CAM</option>
            <option value="Fabrication">Fabrication</option>
            <option value="CO2 Laser">CO2 Laser</option>
            <option value="Vinyl Cutting">Vinyl Cutting</option>
            <option value="3D Printing">3D Printing</option>
            <option value="Signage & Display">Signage & Display</option>
            <option value="Fiber Laser">Fiber Laser</option>
            <option value="Not Sure">Not Sure</option>
          </select>
        </label>
      </div>

      <label style={labelWrapStyle}>
        <span style={labelStyle}>Project Details</span>
        <textarea
          name="message"
          required
          rows={compact ? 5 : 6}
          placeholder="Tell us what you need made, sizes, quantities, materials, deadline, and anything else that helps."
          style={textareaStyle}
        />
      </label>

      <label style={labelWrapStyle}>
        <span style={labelStyle}>Upload Files</span>
        <input
          type="file"
          name="attachment"
          multiple
          accept=".pdf,.dxf,.svg,.ai,.eps,.jpg,.jpeg,.png,.webp,.zip"
          style={fileInputStyle}
        />
        <span style={helperTextStyle}>
          Optional. Drawings, photos, vectors, or reference files. Keep total
          upload size under 10MB.
        </span>
      </label>

      <button type="submit" style={submitButtonStyle}>
        Start Your Project
      </button>
    </form>
  );
}

const fieldGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "16px",
};

const labelWrapStyle = {
  display: "grid",
  gap: "8px",
};

const labelStyle = {
  fontSize: "0.95rem",
  fontWeight: 700,
  color: "#ffffff",
};

const inputStyle = {
  width: "100%",
  background: "#151515",
  color: "#ffffff",
  border: "1px solid rgba(255,255,255,0.14)",
  borderRadius: "14px",
  padding: "14px 16px",
  fontSize: "1rem",
  outline: "none",
};

const textareaStyle = {
  width: "100%",
  background: "#151515",
  color: "#ffffff",
  border: "1px solid rgba(255,255,255,0.14)",
  borderRadius: "14px",
  padding: "14px 16px",
  fontSize: "1rem",
  outline: "none",
  resize: "vertical" as const,
  fontFamily: "Arial, sans-serif",
};

const fileInputStyle = {
  width: "100%",
  background: "#151515",
  color: "#d1d5db",
  border: "1px solid rgba(255,255,255,0.14)",
  borderRadius: "14px",
  padding: "12px 16px",
  fontSize: "0.96rem",
};

const helperTextStyle = {
  fontSize: "0.88rem",
  color: "#9ca3af",
  lineHeight: 1.5,
};

const submitButtonStyle = {
  background: "#e11d1d",
  padding: "16px 26px",
  borderRadius: "14px",
  color: "#ffffff",
  border: "none",
  fontWeight: 800,
  fontSize: "1rem",
  cursor: "pointer",
  display: "inline-block",
};