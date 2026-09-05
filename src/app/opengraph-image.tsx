import { ImageResponse } from "next/og";

export const alt = "Nexflow — AI WhatsApp Assistant untuk UMKM Indonesia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Social share card (auto-wired by Next's file convention into og:image &
 * twitter:image). Rendered at build time — no runtime cost. Satori-safe:
 * flexbox only, no blur/filter.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#050505",
          backgroundImage:
            "radial-gradient(900px 500px at 80% -10%, rgba(16,185,129,0.35), transparent 60%), linear-gradient(180deg, #070707, #050505)",
          color: "#ededed",
          fontFamily: "sans-serif",
        }}
      >
        {/* brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 16,
              backgroundColor: "#10b981",
              color: "#04130d",
              fontSize: 40,
              fontWeight: 800,
            }}
          >
            N
          </div>
          <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: -1 }}>
            Nexflow
          </div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            <div style={{ display: "flex" }}>AI WhatsApp Assistant</div>
            <div style={{ display: "flex" }}>
              <span>untuk&nbsp;</span>
              <span style={{ color: "#34d399" }}>UMKM Indonesia</span>
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#a3a3a3", maxWidth: 880 }}>
            Balas pesan 24/7, follow-up prospek otomatis, dan laporan bisnis
            harian — langsung di WhatsApp.
          </div>
        </div>

        {/* footer tags */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {["Balas <3 detik", "24/7 nonstop", "Coba gratis 30 hari"].map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px 22px",
                borderRadius: 999,
                border: "1px solid rgba(16,185,129,0.4)",
                backgroundColor: "rgba(16,185,129,0.1)",
                color: "#34d399",
                fontSize: 24,
                fontWeight: 600,
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
