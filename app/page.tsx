"use client";

import Link from "next/link";
import { useState } from "react";
import InquiryForm from "@/components/InquiryForm";

export default function Home() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const services = [
    {
      title: "CNC Routing",
      slug: "cnc-routing",
      description:
        "Precision sheet cutting, cabinetry components, signage, repeat production, and custom routed parts.",
      video: "/videos/service-cnc.mp4",
      poster: "/images/services/cnc-1.jpg",
    },
    {
      title: "CAD / CAM",
      slug: "cad-cam",
      description:
        "From concept to production-ready files with efficient nesting, toolpath setup, and manufacturing workflow support.",
      video: "/videos/service-cad.mp4",
      poster: "/images/services/cad-1.jpg",
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
      poster: "/images/services/co2-1.jpg",
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
      poster: "/images/services/cad-1.jpg",
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
    { type: "image", src: "/images/services/co2-1.jpg" },
    { type: "image", src: "/images/services/service-signage.jpg" },
    { type: "image", src: "/images/services/vinyl-1.jpg" },
    { type: "image", src: "/images/services/cnc-2.jpg" },
  ];

  return (
    <>
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
            background: "rgba(10,10,10,0.9)",
            backdropFilter: "blur(10px)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div
            style={{
              maxWidth: "1440px",
              margin: "0 auto",
              padding: "14px 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "18px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "22px",
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
                  src="/images/logo.png"
                  alt="SPACIFIC Woodwork & CNC"
                  style={{
                    height: "44px",
                    width: "auto",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
                <span
                  style={{
                    fontWeight: 800,
                    fontSize: "1rem",
                    letterSpacing: "0.4px",
                    whiteSpace: "nowrap",
                  }}
                >
                  SPACIFIC WOODWORK
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
                <a href="#services" style={navLinkStyle}>
                  SERVICES
                </a>
                <a href="#work" style={navLinkStyle}>
                  WORK
                </a>
                <a href="#about" style={navLinkStyle}>
                  ABOUT
                </a>
                <a href="#contact" style={navLinkStyle}>
                  CONTACT
                </a>
              </nav>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                flexWrap: "wrap",
                justifyContent: "flex-end",
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: "#d1d5db",
                  fontSize: "0.9rem",
                  whiteSpace: "nowrap",
                }}
              >
                Auckland based custom fabrication
              </p>

              <div style={searchWrapStyle}>
                <input
                  type="text"
                  placeholder="Search..."
                  style={searchInputStyle}
                />
              </div>

              <button
                type="button"
                onClick={() => setIsInquiryOpen(true)}
                style={headerCtaStyle}
              >
                GET STARTED
              </button>
            </div>
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
            padding: "80px 24px 100px",
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.68), rgba(0,0,0,0.68)), url('/images/hero-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div style={{ maxWidth: "980px" }}>
            <h1 style={heroTitleStyle}>
              Custom parts and fabrication delivered fast.
            </h1>

            <p style={heroDescStyle}>
              CNC routing, CAD/CAM, CO2 laser, vinyl cutting, signage, 3D
              printing, and fabrication support for customers who need practical
              results and clean execution.
            </p>

            <div style={heroBtnWrap}>
              <button
                type="button"
                onClick={() => setIsInquiryOpen(true)}
                style={heroPrimaryButtonStyle}
              >
                GET STARTED
              </button>
            </div>

            <p style={heroSubLinkStyle}>
              Send your files, drawings, or idea and we’ll take a look.
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

              <button
                type="button"
                onClick={() => setIsInquiryOpen(true)}
                style={heroPrimaryButtonStyle}
              >
                GET STARTED
              </button>
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
                Custom builds. Scalable solutions.
              </h2>
            </div>

            <div>
              <p style={aboutTextStyle}>
                We help customers move from sketch, drawing, or idea to
                production-ready parts with clean workflow, efficient cutting,
                and real manufacturing thinking behind the job. Whether it is
                custom fabrication, signage, cabinetry components, prototyping,
                or repeat production, the goal is simple: do it properly and do
                it efficiently.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" style={contactStyle}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <h2 style={contactTitleStyle}>Ready to get your project moving?</h2>

            <p style={contactTextStyle}>
              Send through your files, drawings, or idea and we’ll take a look.
            </p>

            <div style={contactButtonWrapStyle}>
              <button
                type="button"
                onClick={() => setIsInquiryOpen(true)}
                style={heroPrimaryButtonStyle}
              >
                GET STARTED
              </button>

              <a
                href="mailto:spacificwoodworkcnc@gmail.com"
                style={secondaryButtonStyle}
              >
                Email Us Directly
              </a>
            </div>

            <div style={embeddedFormWrapStyle}>
              <InquiryForm />
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

            <div
              style={{
                marginTop: "24px",
                display: "flex",
                gap: "18px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a
                href="https://www.instagram.com/spacific_woodwork_cnc_nz/"
                target="_blank"
                rel="noopener noreferrer"
                style={socialIconStyle}
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  width="22"
                  height="22"
                >
                  <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5C18.55 4 20 5.45 20 7.75v8.5c0 2.3-1.45 3.75-3.75 3.75h-8.5C5.45 20 4 18.55 4 16.25v-8.5C4 5.45 5.45 4 7.75 4zm8.75 1.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/Spacificwoodworkcnc/"
                target="_blank"
                rel="noopener noreferrer"
                style={socialIconStyle}
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  width="22"
                  height="22"
                >
                  <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.2c0-.9.3-1.5 1.6-1.5h1.7V5.1c-.3 0-1.4-.1-2.7-.1-2.6 0-4.3 1.6-4.3 4.5V11H7v3h2.8v8h3.7z" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      {isInquiryOpen && (
        <div
          onClick={() => setIsInquiryOpen(false)}
          style={modalOverlayStyle}
        >
          <div onClick={(e) => e.stopPropagation()} style={modalCardStyle}>
            <button
              type="button"
              onClick={() => setIsInquiryOpen(false)}
              style={modalCloseStyle}
            >
              Close ✕
            </button>

            <div
              style={{
                marginBottom: "24px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h2 style={modalTitleStyle}>Start Your Project</h2>
              <p style={modalTextStyle}>
                Send your files, drawings, or idea and we’ll take a look.
              </p>
              <p style={modalSubTextStyle}>
                We review practical job details fast so you can move forward
                sooner.
              </p>
            </div>

            <InquiryForm compact />
          </div>
        </div>
      )}
    </>
  );
}

const navLinkStyle = {
  color: "#ffffff",
  textDecoration: "none",
  fontWeight: 700,
  fontSize: "0.9rem",
  letterSpacing: "0.4px",
};

const headerCtaStyle = {
  background: "#e11d1d",
  padding: "12px 20px",
  borderRadius: "12px",
  color: "#ffffff",
  textDecoration: "none",
  fontWeight: 800,
  border: "none",
  cursor: "pointer",
  fontSize: "0.95rem",
};

const searchWrapStyle = {
  background: "#f3f4f6",
  borderRadius: "12px",
  padding: "0 14px",
  height: "42px",
  display: "flex",
  alignItems: "center",
  minWidth: "190px",
};

const searchInputStyle = {
  border: "none",
  outline: "none",
  background: "transparent",
  width: "100%",
  fontSize: "0.95rem",
  color: "#111111",
};

const heroTitleStyle = {
  fontSize: "clamp(3rem, 7vw, 6.2rem)",
  fontWeight: 900,
  lineHeight: 0.95,
  letterSpacing: "-2px",
  margin: 0,
  maxWidth: "900px",
  marginLeft: "auto",
  marginRight: "auto",
};

const heroDescStyle = {
  marginTop: "24px",
  fontSize: "1.25rem",
  color: "#f3f4f6",
  lineHeight: 1.7,
  maxWidth: "820px",
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

const heroPrimaryButtonStyle = {
  background: "#e11d1d",
  padding: "18px 34px",
  borderRadius: "14px",
  color: "#ffffff",
  textDecoration: "none",
  fontWeight: 800,
  display: "inline-block",
  border: "none",
  cursor: "pointer",
  fontSize: "1rem",
};

const heroSubLinkStyle = {
  marginTop: "28px",
  fontSize: "1rem",
  color: "#ffffff",
  lineHeight: 1.6,
};

const secondaryButtonStyle = {
  border: "1px solid rgba(255,255,255,0.24)",
  padding: "16px 26px",
  borderRadius: "14px",
  color: "#ffffff",
  textDecoration: "none",
  fontWeight: 700,
  display: "inline-block",
  background: "transparent",
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

const contactButtonWrapStyle = {
  display: "flex",
  gap: "14px",
  justifyContent: "center",
  flexWrap: "wrap" as const,
  marginBottom: "32px",
};

const embeddedFormWrapStyle = {
  marginTop: "22px",
  background: "#111111",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "24px",
  padding: "24px",
  textAlign: "left" as const,
};

const socialIconStyle = {
  width: "46px",
  height: "46px",
  borderRadius: "50%",
  border: "1px solid rgba(255,255,255,0.2)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
  transition: "all 0.2s ease",
};

const modalOverlayStyle = {
  position: "fixed" as const,
  inset: 0,
  background: "rgba(0,0,0,0.92)",
  zIndex: 9999,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "24px",
};

const modalCardStyle = {
  width: "100%",
  maxWidth: "760px",
  background: "#0f0f0f",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "24px",
  padding: "24px",
  position: "relative" as const,
  maxHeight: "92vh",
  overflowY: "auto" as const,
};

const modalCloseStyle = {
  position: "absolute" as const,
  top: "18px",
  right: "18px",
  background: "transparent",
  color: "#ffffff",
  border: "1px solid rgba(255,255,255,0.2)",
  borderRadius: "12px",
  padding: "10px 14px",
  cursor: "pointer",
  fontWeight: 700,
};

const modalTitleStyle = {
  fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
  fontWeight: 800,
  margin: 0,
  textAlign: "center" as const,
};

const modalTextStyle = {
  marginTop: "12px",
  color: "#d1d5db",
  fontSize: "1rem",
  lineHeight: 1.7,
  textAlign: "center" as const,
  maxWidth: "560px",
};

const modalSubTextStyle = {
  marginTop: "8px",
  color: "#ffffff",
  fontSize: "0.95rem",
  lineHeight: 1.6,
  fontWeight: 700,
  textAlign: "center" as const,
  maxWidth: "560px",
};