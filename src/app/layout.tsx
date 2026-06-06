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

const ICON =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%2310b981'/%3E%3Cpath d='M6 8L14 16L6 24M16 8L24 16L16 24' stroke='%23000' stroke-width='3.5' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E";

export const metadata: Metadata = {
  title: "Nexflow — Otomatisasi UMKM",
  description:
    "Otomatiskan WhatsApp bot, invoice, dan sinkronisasi stok UMKM Anda. Setup cepat, harga terjangkau.",
  icons: { icon: ICON },
  openGraph: {
    title: "Nexflow — Otomatisasi UMKM",
    description:
      "Otomatiskan WhatsApp bot, invoice, dan sinkronisasi stok UMKM Anda. Setup cepat, harga terjangkau.",
    type: "website",
    locale: "id_ID",
    siteName: "Nexflow",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexflow — Otomatisasi UMKM",
    description:
      "Otomatiskan WhatsApp bot, invoice, dan sinkronisasi stok UMKM Anda. Setup cepat, harga terjangkau.",
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
