import Link from "next/link";

export default function Home() {
  const services = [
    {
      title: "CNC Routing",
      slug: "cnc-routing",
      description:
        "Precision sheet cutting, cabinetry components, signage, repeat production, and custom routed parts.",
      video: "/videos/service-cnc.mp4",
      poster: "/images/services/service-cnc.jpg",
    },
    {
      title: "CAD / CAM",
      slug: "cad-cam",
      description:
        "From concept to production-ready files with efficient nesting, toolpath setup, and manufacturing workflow support.",
      video: "/videos/service-cad.mp4",
      poster: "/images/services/service-cad.jpg",
    },
    {
      title: "Fabrication",
      slug: "fabrication",
      description:
        "Custom builds, one-offs, assemblies, and small batch manufacturing for real-world applications.",
      video: "/videos/service-fabrication.mp4",
      poster: "/images/services/service-fabrication.jpg",
    },
    {
      title: "CO2 Laser",
      slug: "co2-laser",
      description:
        "Acrylic cutting, engraving, detailed custom pieces, display work, and precision non-metal laser processing.",
      video: "/videos/service-co2.mp4",
      poster: "/images/services/service-co2.jpg",
    },
    {
      title: "Vinyl Cutting",
      slug: "vinyl-cutting",
      description:
        "Decals, branding, signage graphics, labels, heat transfer applications, and custom vinyl solutions.",
      video: "/videos/service-vinyl.mp4",
      poster: "/images/services/service-vinyl.jpg",
    },
    {
      title: "3D Printing",
      slug: "3d-printing",
      description:
        "Rapid prototyping, custom parts, fit checks, and small printed components for product development.",
      video: "/videos/service-3dprint.mp4",
      poster: "/images/services/service-3dprint.jpg",
    },
    {
      title: "Signage & Display",
      slug: "signage-display",
      description:
        "Custom signage, layered acrylic work, event props, and branded display pieces.",
      video: "/videos/service-signage.mp4",
      poster: "/images/services/service-signage.jpg",
    },
    {
      title: "Fiber Laser",
      slug: "fiber-laser",
      description:
        "Expanding into precision metal cutting for faster turnaround and higher-value fabrication work.",
      video: "/videos/service-fiber.mp4",
      poster: "/images/services/service-fiber.png",
    },
  ];

  const recentWork = [
    { type: "image", src: "/images/work/work1.jpg" },
    { type: "image", src: "/images/work/work2.jpg" },
    { type: "image", src: "/images/work/work3.jpg" },
    { type: "image", src: "/images/work/work4.jpg" },
  ];

  return (
    <main
      style={{
        backgroundColor: "#111111",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(10,10,10,0.88)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "16px 24px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
            textAlign: "center",
          }}
        >
          <a
            href="#top"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              textDecoration: "none",
              color: "#ffffff",
              flexWrap: "wrap",
            }}
          >
            <img
              src="/images/logo.png"
              alt="SPACIFIC Woodwork & CNC"
              style={{
                height: "56px",
                width: "auto",
                objectFit: "contain",
                display: "block",
              }}
            />
            <span
              style={{
                fontSize: "1.1rem",
                fontWeight: 800,
                letterSpacing: "0.5px",
              }}
            >
              SPACIFIC Woodwork & CNC
            </span>
          </a>

          <nav
            style={{
              display: "flex",
              gap: "18px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            <a href="#services" style={navLinkStyle}>
              Services
            </a>
            <a href="#work" style={navLinkStyle}>
              Work
            </a>
            <a href="#about" style={navLinkStyle}>
              About
            </a>
            <a href="#contact" style={navLinkStyle}>
              Contact
            </a>

            <a
              href="mailto:spacificwoodworkcnc@gmail.com"
              style={{
                ...ctaNavStyle,
                marginTop: "6px",
              }}
            >
              Get a Quote
            </a>
          </nav>
        </div>
      </header>

      <section
        id="top"
        style={{
          minHeight: "88vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "80px 24px",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/images/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div style={{ maxWidth: "950px" }}>
          <p style={heroTagStyle}>
            CNC Routing • CAD / CAM • CO2 Laser • Vinyl Cutting • 3D Printing •
            Fabrication
          </p>

          <h1 style={heroTitleStyle}>
            Custom parts and fabrication built for real business needs.
          </h1>

          <p style={heroDescStyle}>
            Precision CNC cutting, fabrication, and production-ready workflow
            support for businesses that need clean execution, fast turnaround,
            and repeatable quality.
          </p>

          <div style={heroBtnWrap}>
            <a
              href="mailto:spacificwoodworkcnc@gmail.com"
              style={primaryButtonStyle}
            >
              Send Files for Quote
            </a>

            <a href="#services" style={secondaryButtonStyle}>
              View Services
            </a>
          </div>

          <p
            style={{
              marginTop: "28px",
              fontSize: "1rem",
              color: "#d1d5db",
              lineHeight: 1.6,
            }}
          >
            From concept to finished product — CAD, CAM, machining,
            prototyping, signage, and custom production support.
          </p>
        </div>
      </section>

      <section id="services" style={servicesSectionStyle}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 style={sectionTitleStyle}>
            Everything you need to move from idea to production.
          </h2>

          <p style={sectionDescStyle}>
            Practical in-house capability across CNC routing, CAD/CAM,
            fabrication, CO2 laser work, vinyl cutting, 3D printing, signage,
            and custom production.
          </p>

          <div style={gridStyle}>
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                style={serviceLinkStyle}
              >
                <div style={cardStyle}>
                  <div>
                    <div style={videoWrapStyle}>
                      <video
                        src={service.video}
                        poster={service.poster}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        style={videoStyle}
                      />
                    </div>

                    <h3 style={cardTitleStyle}>{service.title}</h3>
                    <p style={cardDescStyle}>{service.description}</p>
                  </div>

                  <div style={arrowStyle}>View Service →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="work" style={workSectionStyle}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "end",
              gap: "20px",
              flexWrap: "wrap",
              marginBottom: "30px",
            }}
          >
            <div>
              <p
                style={{
                  color: "#9ca3af",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginBottom: "10px",
                }}
              >
                Recent Work
              </p>
              <h2 style={sectionTitleDark}>
                Built to be used, not just looked at.
              </h2>
            </div>

            <a
              href="mailto:spacificwoodworkcnc@gmail.com"
              style={primaryButtonStyle}
            >
              Start Your Project
            </a>
          </div>

          <div style={gridStyle}>
            {recentWork.map((item, i) => (
              <img
                key={i}
                src={item.src}
                alt={`Project ${i + 1}`}
                style={workMediaStyle}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="about" style={aboutSectionStyle}>
        <div style={aboutGridStyle}>
          <div>
            <p style={aboutTagStyle}>Why SPACIFIC</p>
            <h2 style={aboutTitleStyle}>
              A practical fabrication partner for custom work and repeat
              production.
            </h2>
          </div>

          <div>
            <p style={aboutTextStyle}>
              We help customers move from sketch, drawing, or idea to
              production-ready parts with clean workflow, efficient cutting, and
              real manufacturing thinking behind the job. Whether it is custom
              fabrication, signage, cabinetry components, prototyping, or repeat
              production, the goal is simple: do it properly and do it
              efficiently.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" style={contactStyle}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={contactTitleStyle}>Ready to get your project moving?</h2>

          <p style={contactTextStyle}>
            Send through your files, drawings, or idea and we’ll take a look.
          </p>

          <a
            href="mailto:spacificwoodworkcnc@gmail.com"
            style={primaryButtonStyle}
          >
            Email Us Now
          </a>

          <p
            style={{
              marginTop: "20px",
              color: "#9ca3af",
              fontSize: "0.95rem",
            }}
          >
            spacificwoodworkcnc@gmail.com
          </p>
        </div>
      </section>
    </main>
  );
}

const navLinkStyle = {
  color: "#ffffff",
  textDecoration: "none",
  fontWeight: 600,
};

const ctaNavStyle = {
  background: "#e11d1d",
  padding: "12px 18px",
  borderRadius: "12px",
  color: "#ffffff",
  textDecoration: "none",
  fontWeight: 700,
};

const heroTagStyle = {
  color: "#d1d5db",
  marginBottom: "20px",
  textTransform: "uppercase" as const,
  letterSpacing: "1px",
  fontSize: "0.95rem",
};

const heroTitleStyle = {
  fontSize: "clamp(2.7rem, 6vw, 5.5rem)",
  fontWeight: 900,
  lineHeight: 0.95,
  letterSpacing: "-2px",
  margin: 0,
};

const heroDescStyle = {
  marginTop: "24px",
  fontSize: "1.2rem",
  color: "#e5e7eb",
  lineHeight: 1.7,
  maxWidth: "760px",
  marginLeft: "auto",
  marginRight: "auto",
};

const heroBtnWrap = {
  marginTop: "34px",
  display: "flex",
  gap: "15px",
  justifyContent: "center",
  flexWrap: "wrap" as const,
};

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

const servicesSectionStyle = {
  background: "#eeeeee",
  color: "#111111",
  padding: "90px 20px",
};

const sectionTitleStyle = {
  textAlign: "center" as const,
  fontSize: "clamp(2rem, 5vw, 3.8rem)",
  fontWeight: 800,
  marginBottom: "16px",
  letterSpacing: "-1px",
};

const sectionTitleDark = {
  fontSize: "clamp(2rem, 4vw, 3rem)",
  fontWeight: 800,
  margin: 0,
  letterSpacing: "-1px",
};

const sectionDescStyle = {
  textAlign: "center" as const,
  maxWidth: "760px",
  margin: "0 auto 44px",
  fontSize: "1.05rem",
  lineHeight: 1.7,
  color: "#4b5563",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
  gap: "22px",
};

const serviceLinkStyle = {
  textDecoration: "none",
  color: "inherit",
  display: "block",
};

const cardStyle = {
  background: "#dddddd",
  padding: "24px",
  borderRadius: "24px",
  minHeight: "380px",
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "space-between",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
  boxShadow: "0 4px 18px rgba(0,0,0,0.06)",
};

const videoWrapStyle = {
  width: "100%",
  height: "180px",
  overflow: "hidden",
  borderRadius: "18px",
  background: "#cfcfcf",
  marginBottom: "16px",
};

const videoStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover" as const,
  display: "block",
};

const cardTitleStyle = {
  fontSize: "1.55rem",
  marginTop: "10px",
  marginBottom: "12px",
  fontWeight: 800,
  color: "#1f2937",
};

const cardDescStyle = {
  fontSize: "1rem",
  lineHeight: 1.7,
  color: "#374151",
};

const arrowStyle = {
  fontSize: "1rem",
  color: "#2563eb",
  marginTop: "16px",
  fontWeight: 700,
};

const workSectionStyle = {
  padding: "90px 20px",
  background: "#111111",
};

const workMediaStyle = {
  width: "100%",
  height: "280px",
  objectFit: "cover" as const,
  borderRadius: "18px",
  display: "block",
};

const aboutSectionStyle = {
  padding: "90px 20px",
  background: "#161616",
  borderTop: "1px solid rgba(255,255,255,0.08)",
};

const aboutGridStyle = {
  maxWidth: "1100px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "32px",
};

const aboutTagStyle = {
  textTransform: "uppercase" as const,
  letterSpacing: "1px",
  color: "#9ca3af",
  marginBottom: "10px",
};

const aboutTitleStyle = {
  fontSize: "clamp(2rem, 4vw, 3rem)",
  fontWeight: 800,
  lineHeight: 1.1,
  margin: 0,
};

const aboutTextStyle = {
  color: "#d1d5db",
  fontSize: "1.08rem",
  lineHeight: 1.8,
  margin: 0,
};

const contactStyle = {
  padding: "90px 20px 110px",
  textAlign: "center" as const,
  background: "#0f0f0f",
  borderTop: "1px solid rgba(255,255,255,0.08)",
};

const contactTitleStyle = {
  fontSize: "clamp(2rem, 4vw, 3.4rem)",
  fontWeight: 800,
  marginBottom: "16px",
  letterSpacing: "-1px",
};

const contactTextStyle = {
  marginBottom: "30px",
  color: "#d1d5db",
  fontSize: "1.08rem",
  lineHeight: 1.7,
};