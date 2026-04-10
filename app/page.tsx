export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#111111",
        color: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "700px" }}>
        {/* BIG CENTERED LOGO */}
        <img
          src="/logo.png"
          alt="SPACIFIC Woodwork & CNC"
          style={{
            width: "100%",
            maxWidth: "420px",
            margin: "0 auto 40px",
            display: "block",
          }}
        />

        <h1
          style={{
            fontSize: "2.6rem",
            fontWeight: 800,
            marginBottom: "18px",
          }}
        >
          Website Under Construction
        </h1>

        <p
          style={{
            fontSize: "1.15rem",
            color: "#d1d5db",
            lineHeight: 1.7,
            marginBottom: "30px",
          }}
        >
          We are currently building a new website.
          <br />
          For enquiries, quotes, or project work — get in touch below.
        </p>

        <div
          style={{
            display: "flex",
            gap: "14px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="mailto:spacificwoodworkcnc@gmail.com"
            style={{
              background: "#e11d1d",
              padding: "14px 22px",
              borderRadius: "12px",
              color: "#ffffff",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Email for Quote
          </a>

          <a
            href="https://www.instagram.com/spacific_woodwork_cnc_nz/"
            target="_blank"
            rel="noreferrer"
            style={secondaryBtn}
          >
            Instagram
          </a>

          <a
            href="https://www.facebook.com/Spacificwoodworkcnc/"
            target="_blank"
            rel="noreferrer"
            style={secondaryBtn}
          >
            Facebook
          </a>
        </div>

        <p
          style={{
            marginTop: "30px",
            fontSize: "0.9rem",
            color: "#9ca3af",
          }}
        >
          Auckland • CNC Routing • CAD/CAM • Fabrication • Laser • Signage
        </p>
      </div>
    </main>
  );
}

const secondaryBtn = {
  border: "1px solid rgba(255,255,255,0.2)",
  padding: "14px 22px",
  borderRadius: "12px",
  color: "#ffffff",
  textDecoration: "none",
  fontWeight: 600,
};