"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useParams } from "next/navigation";

type PortfolioItem = {
  type: "image" | "video";
  src: string;
  poster?: string;
};

type ServiceEntry = {
  title: string;
  intro: string;
  heroImage: string;
  portfolio: PortfolioItem[];
};

const serviceData: Record<string, ServiceEntry> = {
  "cnc-routing": {
    title: "CNC Routing",
    intro:
      "Precision sheet cutting, routed components, repeat production, cabinetry parts, signage blanks, and custom one-off work.",
    heroImage: "/images/services/cnc-1.jpg",
    portfolio: [
      {
        type: "video",
        src: "/videos/service-cnc.mp4",
      },
      {
        type: "video",
        src: "/videos/service-cnc-2.mp4",
      },
      { type: "image", src: "/images/services/cnc-1.jpg" },
      { type: "image", src: "/images/services/cnc-2.jpg" },
    ],
  },

  "cad-cam": {
    title: "CAD / CAM",
    intro:
      "From concept sketches to production-ready files, toolpaths, nesting, and practical workflow planning.",
    heroImage: "/images/services/cad-1.jpg",
    portfolio: [
      { type: "image", src: "/images/services/cad-1.jpg" },
      {
        type: "video",
        src: "/videos/service-cad.mp4",
      },
      {
        type: "video",
        src: "/videos/service-cad-2.mp4",
      },
    ],
  },

  fabrication: {
    title: "Fabrication",
    intro:
      "Custom builds, real-world parts, assemblies, and production support designed to get jobs done properly.",
    heroImage: "/images/services/service-fabrication.jpg",
    portfolio: [
      { type: "image", src: "/images/services/fabrication-1.jpg" },
      {
        type: "video",
        src: "/videos/fabrication-1.mp4",
      },
      { type: "image", src: "/images/services/fabrication-2.jpg" },
      {
        type: "video",
        src: "/videos/fabrication-2.mp4",
      },
      {
        type: "video",
        src: "/videos/fabrication-3.mp4",
      },
      {
        type: "video",
        src: "/videos/fabrication-4.mp4",
      },
      {
        type: "video",
        src: "/videos/fabrication-5.mp4",
      },
      {
        type: "video",
        src: "/videos/fabrication-6.mp4",
      },
      {
        type: "video",
        src: "/videos/fabrication-7.mp4",
      },
      {
        type: "video",
        src: "/videos/fabrication-8.mp4",
      },
      {
        type: "video",
        src: "/videos/fabrication-9.mp4",
      },
      {
        type: "video",
        src: "/videos/service-fabrication.mp4",
      },
      {
        type: "video",
        src: "/videos/service-fabrication-2.mp4",
      },
      {
        type: "video",
        src: "/videos/service-fabrication-3.mp4",
      },
    ],
  },

  "co2-laser": {
    title: "CO2 Laser",
    intro:
      "Acrylic cutting, engraving, detailed components, signage elements, and precision laser work for non-metal materials.",
    heroImage: "/images/services/co2-1.jpg",
    portfolio: [
      { type: "image", src: "/images/services/co2-1.jpg" },
      {
        type: "video",
        src: "/videos/service-co2.mp4",
      },
      {
        type: "video",
        src: "/videos/co2-2.mp4",
      },
      {
        type: "video",
        src: "/videos/co2-3.mp4",
      },
    ],
  },

  "vinyl-cutting": {
    title: "Vinyl Cutting",
    intro:
      "Decals, graphics, lettering, branded applications, heat transfer work, and custom cut vinyl output.",
    heroImage: "/images/services/service-vinyl.jpg",
    portfolio: [
      { type: "image", src: "/images/services/service-vinyl.jpg" },
      { type: "image", src: "/images/services/vinyl-1.jpg" },
    ],
  },

  "3d-printing": {
    title: "3D Printing",
    intro:
      "Rapid prototyping, fit-check parts, development support, and custom printed components.",
    heroImage: "/images/services/3dprint.jpg",
    portfolio: [
      {
        type: "video",
        src: "/videos/service-3dprint.mp4",
      },
      {
        type: "video",
        src: "/videos/3dprint-1.mp4",
      },
      {
        type: "video",
        src: "/videos/3dprint-2.mp4",
      },
      {
        type: "video",
        src: "/videos/3dprint-4.mp4",
      },
      {
        type: "video",
        src: "/videos/3dprint-5.mp4",
      },
      {
        type: "video",
        src: "/videos/3dprint-7.mp4",
      },
    ],
  },

  "signage-display": {
    title: "Signage & Display",
    intro:
      "Custom signs, acrylic display work, event pieces, layered builds, and branded presentation work.",
    heroImage: "/images/services/service-signage.jpg",
    portfolio: [
      { type: "image", src: "/images/services/service-signage.jpg" },
      { type: "image", src: "/images/services/signage-2.jpg" },
      {
        type: "video",
        src: "/videos/signage-2.mp4",
      },
    ],
  },

  "fiber-laser": {
    title: "Fiber Laser",
    intro:
      "Upcoming precision metal cutting capability focused on faster turnaround and higher-value fabrication work.",
    heroImage: "/images/services/service-fiber.jpg",
    portfolio: [{ type: "image", src: "/images/services/service-fiber.jpg" }],
  },
};

export default function ServicePage() {
  const params = useParams();
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;
  const service = slug ? serviceData[String(slug)] : undefined;
  const [activeVideo, setActiveVideo] = useState<PortfolioItem | null>(null);

  const uniquePortfolio = useMemo(() => {
    if (!service) return [];
    return service.portfolio.filter(
      (item, index, array) =>
        index === array.findIndex((entry) => entry.src === item.src)
    );
  }, [service]);

  if (!service) {
    return (
      <main
        style={{
          background: "#111111",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 24px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "2rem", marginBottom: "12px" }}>
            Service not found
          </h1>
          <Link
            href="/"
            style={{
              color: "#ffffff",
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.18)",
              padding: "12px 18px",
              borderRadius: "12px",
              display: "inline-block",
              fontWeight: 700,
            }}
          >
            ← Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <>
      <main
        style={{
          background: "#111111",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
          minHeight: "100vh",
        }}
      >
        <header
          style={{
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            background: "#0f0f0f",
          }}
        >
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "18px 24px",
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
                color: "#ffffff",
                textDecoration: "none",
              }}
            >
              <img
                src="/images/logo.png"
                alt="SPACIFIC Woodwork & CNC"
                style={{ height: "52px", width: "auto" }}
              />
              <span style={{ fontWeight: 800 }}>SPACIFIC Woodwork & CNC</span>
            </Link>

            <Link
              href="/"
              style={{
                color: "#ffffff",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.18)",
                padding: "10px 16px",
                borderRadius: "12px",
                fontWeight: 700,
              }}
            >
              ← Back to Home
            </Link>
          </div>
        </header>

        <section
          style={{
            padding: "80px 24px 50px",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${service.heroImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <p
              style={{
                color: "#d1d5db",
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: "14px",
              }}
            >
              Service Portfolio
            </p>

            <h1
              style={{
                fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
                fontWeight: 900,
                lineHeight: 0.95,
                margin: 0,
              }}
            >
              {service.title}
            </h1>

            <p
              style={{
                marginTop: "22px",
                maxWidth: "760px",
                fontSize: "1.15rem",
                lineHeight: 1.8,
                color: "#e5e7eb",
              }}
            >
              {service.intro}
            </p>

            <div style={{ marginTop: "28px" }}>
              <a
                href="mailto:spacificwoodworkcnc@gmail.com"
                style={{
                  background: "#e11d1d",
                  color: "#ffffff",
                  textDecoration: "none",
                  padding: "16px 26px",
                  borderRadius: "14px",
                  fontWeight: 800,
                  display: "inline-block",
                }}
              >
                Ask About This Service
              </a>
            </div>
          </div>
        </section>

        <section
          style={{
            padding: "70px 24px 100px",
            background: "#111111",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                fontWeight: 800,
                marginBottom: "28px",
              }}
            >
              Example Work
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "22px",
              }}
            >
              {uniquePortfolio.map((item, index) => (
                <div
                  key={`${item.src}-${index}`}
                  style={{
                    background: "#1a1a1a",
                    borderRadius: "20px",
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.08)",
                    position: "relative",
                  }}
                >
                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      alt={`${service.title} example ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "280px",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => setActiveVideo(item)}
                      style={{
                        width: "100%",
                        height: "280px",
                        padding: 0,
                        border: "none",
                        background: "transparent",
                        cursor: "pointer",
                        position: "relative",
                        display: "block",
                      }}
                    >
                      <video
                        src={item.src}
                        muted
                        playsInline
                        preload="metadata"
                        style={{
                          width: "100%",
                          height: "280px",
                          objectFit: "cover",
                          display: "block",
                          pointerEvents: "none",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "rgba(0,0,0,0.18)",
                        }}
                      >
                        <div
                          style={{
                            width: "68px",
                            height: "68px",
                            borderRadius: "999px",
                            background: "rgba(0,0,0,0.7)",
                            border: "1px solid rgba(255,255,255,0.18)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "28px",
                            color: "#ffffff",
                          }}
                        >
                          ▶
                        </div>
                      </div>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {activeVideo && (
        <div
          onClick={() => setActiveVideo(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.92)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: "1200px",
              position: "relative",
            }}
          >
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              style={{
                position: "absolute",
                top: "-52px",
                right: 0,
                background: "transparent",
                color: "#ffffff",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "12px",
                padding: "10px 14px",
                cursor: "pointer",
                fontWeight: 700,
              }}
            >
              Close ✕
            </button>

            <video
              src={activeVideo.src}
              controls
              autoPlay
              playsInline
              style={{
                width: "100%",
                maxHeight: "85vh",
                borderRadius: "20px",
                background: "#000000",
                display: "block",
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}