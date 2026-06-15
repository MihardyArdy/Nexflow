import type { Metadata, Viewport } from "next";
import {
  Bricolage_Grotesque,
  Plus_Jakarta_Sans,
  Instrument_Serif,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/jsonld";
import { SITE_URL } from "@/lib/constants";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  // Display/headings only use 600 (one card title), 700 (default), 800.
  weight: ["600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
  weight: "400",
  // Only ever used italic (the headline accent word).
  style: ["italic"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  // 400 (plain), 600 (labels), 700 (bold numbers — was faux-bold before).
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Nexflow — Otomatisasi UMKM",
  description:
    "Spesialis AI WhatsApp Assistant untuk UMKM Indonesia. Balas pesan 24/7, lead follow-up otomatis, dan laporan bisnis harian.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nexflow — Otomatisasi UMKM",
    description:
      "Spesialis AI WhatsApp Assistant untuk UMKM Indonesia. Balas pesan 24/7, lead follow-up otomatis, dan laporan bisnis harian.",
    type: "website",
    locale: "id_ID",
    siteName: "Nexflow",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexflow — Otomatisasi UMKM",
    description:
      "Spesialis AI WhatsApp Assistant untuk UMKM Indonesia. Balas pesan 24/7, lead follow-up otomatis, dan laporan bisnis harian.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body
        className={`${bricolage.variable} ${jakarta.variable} ${instrument.variable} ${mono.variable} font-body`}
      >
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-black focus:shadow-glow"
        >
          Lewati ke konten
        </a>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        {children}
      </body>
    </html>
  );
}
