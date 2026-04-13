import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#111111",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "760px",
          background: "#0f0f0f",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "24px",
          padding: "40px 28px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#9ca3af",
            textTransform: "uppercase",
            letterSpacing: "1px",
            marginBottom: "14px",
          }}
        >
          Project Received
        </p>

        <h1
          style={{
            fontSize: "clamp(2.2rem, 6vw, 4rem)",
            fontWeight: 900,
            lineHeight: 1,
            margin: 0,
            letterSpacing: "-1px",
          }}
        >
          Thanks — we’ve received your project details.
        </h1>

        <p
          style={{
            marginTop: "22px",
            color: "#d1d5db",
            fontSize: "1.08rem",
            lineHeight: 1.8,
            maxWidth: "620px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          We’ll review your files, drawings, or message and get back to you as
          soon as possible. If your job is urgent, email us directly at
          {" "}
          <a
            href="mailto:spacificwoodworkcnc@gmail.com"
            style={{ color: "#ffffff" }}
          >
            spacificwoodworkcnc@gmail.com
          </a>
          .
        </p>

        <div
          style={{
            marginTop: "30px",
            display: "flex",
            gap: "14px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link href="/" style={primaryButtonStyle}>
            Back to Home
          </Link>

          <Link href="/#services" style={secondaryButtonStyle}>
            View Services
          </Link>
        </div>
      </div>
    </main>
  );
}

const primaryButtonStyle = {
  background: "#e11d1d",
  padding: "16px 26px",
  borderRadius: "14px",
  color: "#ffffff",
  textDecoration: "none",
  fontWeight: 800,
  display: "inline-block",
};

const secondaryButtonStyle = {
  border: "1px solid rgba(255,255,255,0.24)",
  padding: "16px 26px",
  borderRadius: "14px",
  color: "#ffffff",
  textDecoration: "none",
  fontWeight: 700,
  display: "inline-block",
};