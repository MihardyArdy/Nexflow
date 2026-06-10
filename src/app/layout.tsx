import type { Metadata, Viewport } from "next";
import {
  Bricolage_Grotesque,
  Plus_Jakarta_Sans,
  Instrument_Serif,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
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
  style: ["normal", "italic"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Nexflow — Otomatisasi UMKM",
  description:
    "Spesialis AI WhatsApp Assistant untuk UMKM Indonesia. Balas pesan 24/7, lead follow-up otomatis, dan laporan bisnis harian.",
  icons: {
    icon: "/nexflow-logo.webp",
    apple: "/nexflow-logo.webp",
  },
  openGraph: {
    title: "Nexflow — Otomatisasi UMKM",
    description:
      "Spesialis AI WhatsApp Assistant untuk UMKM Indonesia. Balas pesan 24/7, lead follow-up otomatis, dan laporan bisnis harian.",
    type: "website",
    locale: "id_ID",
    siteName: "Nexflow",
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
        {children}
      </body>
    </html>
  );
}
