import { SITE_URL } from "./constants";
import { FAQS } from "./content";

/** Organization rich-result data for Google. */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nexflow",
  url: SITE_URL,
  logo: `${SITE_URL}/nexflow-logo.webp`,
  description:
    "Spesialis AI WhatsApp Assistant untuk UMKM Indonesia. Balas pesan 24/7, follow-up prospek otomatis, dan laporan bisnis harian.",
  email: "nexflow.hq@gmail.com",
  areaServed: "ID",
  sameAs: ["https://instagram.com/nexflow.ai_automation"],
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
