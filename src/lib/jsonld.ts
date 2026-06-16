import { SITE_URL, WA_NUMBER } from "./constants";
import { FAQS, PLANS } from "./content";

/** Organization rich-result data for Google. */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nexflow",
  url: SITE_URL,
  logo: `${SITE_URL}/nexflow-logo.webp`,
  slogan: "Spesialis AI WhatsApp Assistant untuk UMKM Indonesia",
  description:
    "Spesialis AI WhatsApp Assistant untuk UMKM Indonesia. Balas pesan 24/7, follow-up prospek otomatis, dan laporan bisnis harian.",
  email: "nexflow.hq@gmail.com",
  areaServed: "Indonesia",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: `+${WA_NUMBER}`,
    availableLanguage: ["id"],
  },
  sameAs: ["https://instagram.com/nexflow.ai_automation"],
};

/** Numeric monthly price (IDR) per plan, in PLANS order. */
const PLAN_PRICES_IDR = [199000, 499000, 999000];

/** Service + offer catalog so Google can surface the packages and prices. */
export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI WhatsApp Assistant untuk UMKM",
  serviceType: "Otomatisasi WhatsApp & customer service AI",
  description:
    "Bot AI WhatsApp 24/7, follow-up prospek otomatis, dan laporan bisnis harian untuk UMKM Indonesia.",
  provider: { "@type": "Organization", name: "Nexflow", url: SITE_URL },
  areaServed: { "@type": "Country", name: "Indonesia" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Paket Nexflow",
    itemListElement: PLANS.map((p, i) => ({
      "@type": "Offer",
      name: `Paket ${p.name}`,
      price: PLAN_PRICES_IDR[i],
      priceCurrency: "IDR",
      url: `${SITE_URL}/#harga`,
    })),
  },
};

/** Sitelinks search/site identity. */
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Nexflow",
  url: SITE_URL,
  inLanguage: "id-ID",
};

/** FAQ rich result — built straight from the on-page FAQ content. */
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};
