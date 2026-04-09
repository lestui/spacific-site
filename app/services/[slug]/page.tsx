import Link from "next/link";
import { notFound } from "next/navigation";

const services: Record<
  string,
  {
    title: string;
    description: string;
    intro: string;
  }
> = {
  "cnc-routing": {
    title: "CNC Routing",
    intro:
      "Precision sheet cutting, cabinetry parts, signage, repeat production, and custom routed components.",
    description:
      "Our CNC routing service is built for customers who need accurate sheet processing, clean machining, repeatable output, and practical support from file to finished part.",
  },
  "cad-cam": {
    title: "CAD / CAM",
    intro:
      "From concept to machine-ready files with efficient nesting, toolpath setup, and production workflow support.",
    description:
      "We support CAD and CAM preparation for customers who need practical manufacturing thinking behind the job, whether it starts from a sketch, existing drawing, or prototype idea.",
  },
  fabrication: {
    title: "Fabrication",
    intro:
      "Custom builds, one-offs, assemblies, and small batch manufacturing for real-world applications.",
    description:
      "Fabrication support for customers who need parts, assemblies, and custom work produced properly, efficiently, and with a focus on function, fit, and repeatability.",
  },
  "co2-laser": {
    title: "CO2 Laser",
    intro:
      "Acrylic cutting, engraving, detailed custom pieces, display work, and precision non-metal laser processing.",
    description:
      "Our CO2 laser service is suited to branding, display, signage, templates, custom pieces, and precise non-metal cutting where detail and finish matter.",
  },
  "vinyl-cutting": {
    title: "Vinyl Cutting",
    intro:
      "Decals, branding, signage graphics, labels, heat transfer applications, and custom vinyl solutions.",
    description:
      "Vinyl cutting for business branding, signage graphics, labels, and custom applications where clean presentation and consistency matter.",
  },
  "3d-printing": {
    title: "3D Printing",
    intro:
      "Rapid prototyping, custom parts, fit checks, and small printed components for product development.",
    description:
      "3D printing is ideal for prototyping, fitment checks, development parts, and practical problem-solving where speed and flexibility matter.",
  },
  "signage-display": {
    title: "Signage & Display",
    intro:
      "Custom signage, layered acrylic work, event props, and branded display pieces.",
    description:
      "We produce signage and display work that helps businesses present clearly, professionally, and with custom detail suited to their brand or event.",
  },
  "fiber-laser": {
    title: "Fiber Laser",
    intro:
      "Expanding into precision metal cutting for faster turnaround and higher-value fabrication work.",
    description:
      "Fiber laser capability supports future metal cutting work for brackets, panels, components, signage, and production-ready fabrication support.",
  },
};

export default function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const service = services[params.slug];

  if (!service) {
    notFound();
  }

  return (
    <main
      style={{
        backgroundColor: "#111111",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
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
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              textDecoration: "none",
              color: "#ffffff",
            }}
          >
            <img
              src="/logo.png"
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
          </Link>

          <nav
            style={{
              display: "flex",
              gap: "24px",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/" style={navLinkStyle}>
              Home
            </Link>
            <a href="#service-details" style={navLinkStyle}>
              Details
            </a>
            <a href="#contact" style={navLinkStyle}>
              Contact
            </a>
            <a
              href="mailto:spacificwoodworkcnc@gmail.com"
              style={ctaNavStyle}
            >
              Get a Quote
            </a>
          </nav>
        </div>
      </header>

      <section
        style={{
          padding: "90px 24px 70px",
          background:
            "linear-gradient(rgba(0,0,0,0.72), rgba(0,0,0,0.72)), url('/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={serviceTagStyle}>Service</p>
          <h1 style={serviceTitleStyle}>{service.title}</h1>
          <p style={serviceIntroStyle}>{service.intro}</p>

          <div style={heroBtnWrap}>
            <a
              href="mailto:spacificwoodworkcnc@gmail.com"
              style={primaryButtonStyle}
            >
              Send Files for Quote
            </a>
            <Link href="/" style={secondaryButtonStyle}>
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <section id="service-details" style={detailsSectionStyle}>
        <div style={detailsWrapStyle}>
          <div>
            <p style={aboutTagStyle}>Overview</p>
            <h2 style={detailsTitleStyle}>Built for practical business use</h2>
          </div>

          <div>
            <p style={detailsTextStyle}>{service.description}</p>
          </div>
        </div>
      </section>

      <section style={featureSectionStyle}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={featureGridStyle}>
            <div style={featureCardStyle}>
              <h3 style={featureTitleStyle}>Fast quoting</h3>
              <p style={featureTextStyle}>
                Send your drawing, measurements, sketch, or files and we can
                assess the job properly.
              </p>
            </div>

            <div style={featureCardStyle}>
              <h3 style={featureTitleStyle}>Production thinking</h3>
              <p style={featureTextStyle}>
                We focus on clean execution, efficient workflow, and output that
                works in the real world.
              </p>
            </div>

            <div style={featureCardStyle}>
              <h3 style={featureTitleStyle}>Custom to repeat work</h3>
              <p style={featureTextStyle}>
                One-off parts, prototypes, and repeat production support all fit
                within the workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" style={contactStyle}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={contactTitleStyle}>Ready to get your project moving?</h2>

          <p style={contactTextStyle}>
            Send through your files, drawings, or idea and we’ll take a look.
          </p>

          <div style={contactButtonRowStyle}>
            <a
              href="mailto:spacificwoodworkcnc@gmail.com"
              style={primaryButtonStyle}
            >
              Email Us Now
            </a>

            <a
              href="https://www.instagram.com/spacific_woodwork_cnc_nz/"
              target="_blank"
              rel="noreferrer"
              style={socialButtonStyle}
            >
              Instagram
            </a>

            <a
              href="https://www.facebook.com/Spacificwoodworkcnc/"
              target="_blank"
              rel="noreferrer"
              style={socialButtonStyle}
            >
              Facebook
            </a>
          </div>

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

const serviceTagStyle = {
  color: "#d1d5db",
  marginBottom: "18px",
  textTransform: "uppercase" as const,
  letterSpacing: "1px",
  fontSize: "0.95rem",
};

const serviceTitleStyle = {
  fontSize: "clamp(2.7rem, 6vw, 5rem)",
  fontWeight: 900,
  lineHeight: 0.98,
  letterSpacing: "-2px",
  margin: 0,
};

const serviceIntroStyle = {
  marginTop: "24px",
  fontSize: "1.2rem",
  color: "#e5e7eb",
  lineHeight: 1.7,
  maxWidth: "760px",
  marginLeft: "auto",
  marginRight: "auto",
};

const detailsSectionStyle = {
  padding: "90px 20px",
  background: "#161616",
  borderTop: "1px solid rgba(255,255,255,0.08)",
};

const detailsWrapStyle = {
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

const detailsTitleStyle = {
  fontSize: "clamp(2rem, 4vw, 3rem)",
  fontWeight: 800,
  lineHeight: 1.1,
  margin: 0,
};

const detailsTextStyle = {
  color: "#d1d5db",
  fontSize: "1.08rem",
  lineHeight: 1.8,
  margin: 0,
};

const featureSectionStyle = {
  padding: "90px 20px",
  background: "#eeeeee",
  color: "#111111",
};

const featureGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
  gap: "22px",
};

const featureCardStyle = {
  background: "#dddddd",
  padding: "24px",
  borderRadius: "24px",
  boxShadow: "0 4px 18px rgba(0,0,0,0.06)",
};

const featureTitleStyle = {
  fontSize: "1.4rem",
  marginTop: 0,
  marginBottom: "12px",
  fontWeight: 800,
  color: "#1f2937",
};

const featureTextStyle = {
  fontSize: "1rem",
  lineHeight: 1.7,
  color: "#374151",
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

const contactButtonRowStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "14px",
  flexWrap: "wrap" as const,
};

const socialButtonStyle = {
  border: "1px solid rgba(255,255,255,0.18)",
  padding: "16px 26px",
  borderRadius: "14px",
  color: "#ffffff",
  textDecoration: "none",
  fontWeight: 700,
  display: "inline-block",
};