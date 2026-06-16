import type { MetadataRoute } from "next";

/** Web App Manifest — makes the site installable ("Add to Home Screen") with
 *  an app-like standalone display, themed splash, and proper icons. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nexflow — Otomatisasi UMKM",
    short_name: "Nexflow",
    description:
      "Spesialis AI WhatsApp Assistant untuk UMKM Indonesia. Balas pesan 24/7, follow-up prospek otomatis, dan laporan bisnis harian.",
    start_url: "/",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#10b981",
    lang: "id",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
