/** Single source of truth for the WhatsApp contact + prefilled messages. */
export const WA_NUMBER = "62882001602406";

/** Human-readable phone number used in the footer. */
export const WA_DISPLAY = "+62 882-0016-02406";

/** Prefilled WhatsApp messages (kept verbatim from the original site). */
export const WA_MESSAGES = {
  consult: "Halo Nexflow, saya ingin konsultasi gratis",
  starter: "Saya tertarik paket Starter",
  standard: "Saya tertarik paket Standard",
  premium: "Saya tertarik paket Premium",
} as const;

/** Build a wa.me link, optionally with a prefilled (auto-encoded) message. */
export function waLink(message?: string) {
  const base = `https://wa.me/${WA_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
