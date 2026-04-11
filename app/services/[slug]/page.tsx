import Link from "next/link";
import { notFound } from "next/navigation";

const serviceData: Record<
  string,
  {
    title: string;
    intro: string;
    heroImage: string;
    portfolio: { type: "image" | "video"; src: string; poster?: string }[];
  }
> = {
  "cnc-routing": {
    title: "CNC Routing",
    intro:
      "Precision sheet cutting, routed components, repeat production, cabinetry parts, signage blanks, and custom one-off work.",
    heroImage: "/images/services/service-cnc.jpg",
    portfolio: [
      { type: "image", src: "/images/work/work1.jpg" },
      {
        type: "video",
        src: "/videos/service-cnc.mp4",
        poster: "/images/services/service-cnc.jpg",
      },
      { type: "image", src: "/images/work/work2.jpg" },
    ],
  },
  "cad-cam": {
    title: "CAD / CAM",
    intro:
      "From concept sketches to production-ready files, toolpaths, nesting, and practical workflow planning.",
    heroImage: "/images/services/service-cad.jpg",
    portfolio: [
      { type: "image", src: "/images/work/work1.jpg" },
      {
        type: "video",
        src: "/videos/service-cad.mp4",
        poster: "/images/services/service-cad.jpg",
      },
      { type: "image", src: "/images/work/work2.jpg" },
    ],
  },
  fabrication: {
    title: "Fabrication",
    intro:
      "Custom builds, real-world parts, assemblies, and production support designed to get jobs done properly.",
    heroImage: "/images/services/service-fabrication.jpg",
    portfolio: [
      { type: "image", src: "/images/work/work2.jpg" },
      {
        type: "video",
        src: "/videos/service-fabrication.mp4",
        poster: "/images/services/service-fabrication.jpg",
      },
      { type: "image", src: "/images/work/work4.jpg" },
    ],
  },
  "co2-laser": {
    title: "CO2 Laser",
    intro:
      "Acrylic cutting, engraving, detailed components, signage elements, and precision laser work for non-metal materials.",
    heroImage: "/images/services/service-co2.jpg",
    portfolio: [
      { type: "image", src: "/images/work/work3.jpg" },
      {
        type: "video",
        src: "/videos/service-co2.mp4",
        poster: "/images/services/service-co2.jpg",
      },
      { type: "image", src: "/images/work/work4.jpg" },
    ],
  },
  "vinyl-cutting": {
    title: "Vinyl Cutting",
    intro:
      "Decals, graphics, lettering, branded applications, heat transfer work, and custom cut vinyl output.",
    heroImage: "/images/services/service-vinyl.jpg",
    portfolio: [
      { type: "image", src: "/images/work/work1.jpg" },
      {
        type: "video",
        src: "/videos/service-vinyl.mp4",
        poster: "/images/services/service-vinyl.jpg",
      },
      { type: "image", src: "/images/work/work2.jpg" },
    ],
  },
  "3d-printing": {
    title: "3D Printing",
    intro:
      "Rapid prototyping, fit-check parts, development support, and custom printed components.",
    heroImage: "/images/services/service-3dprint.jpg",
    portfolio: [
      { type: "image", src: "/images/work/work2.jpg" },
      {
        type: "video",
        src: "/videos/service-3dprint.mp4",
        poster: "/images/services/service-3dprint.jpg",
      },
      { type: "image", src: "/images/work/work3.jpg" },
    ],
  },
  "signage-display": {
    title: "Signage & Display",
    intro:
      "Custom signs, acrylic display work, event pieces, layered builds, and branded presentation work.",
    heroImage: "/images/services/service-signage.jpg",
    portfolio: [
      { type: "image", src: "/images/work/work1.jpg" },
      {
        type: "video",
        src: "/videos/service-signage.mp4",
        poster: "/images/services/service-signage.jpg",
      },
      { type: "image", src: "/images/work/work4.jpg" },
    ],
  },
  "fiber-laser": {
    title: "Fiber Laser",
    intro:
      "Upcoming precision metal cutting capability focused on faster turnaround and higher-value fabrication work.",
    heroImage: "/images/services/service-fiber.png",
    portfolio: [
      { type: "image", src: "/images/work/work3.jpg" },
      {
        type: "video",
        src: "/videos/service-fiber.mp4",
        poster: "/images/services/service-fiber.png",
      },
      { type: "image", src: "/images/work/work4.jpg" },
    ],
  },
};

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = serviceData[slug];

  if (!service) {
    notFound();
  }

  return (
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
            {service.portfolio.map((item, index) => (
              <div
                key={index}
                style={{
                  background: "#1a1a1a",
                  borderRadius: "20px",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.08)",
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
                  <video
                    src={item.src}
                    poster={item.poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    style={{
                      width: "100%",
                      height: "280px",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}