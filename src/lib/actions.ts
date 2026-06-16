"use server";

/**
 * Lead-capture server action. Runs only on the server (zero client JS), so the
 * Telegram bot token never reaches the browser. Delivers each lead to Telegram
 * via a single fetch. Degrades gracefully: if the env vars aren't set yet, it
 * logs server-side and still reports success to the visitor.
 */

export interface LeadState {
  status: "idle" | "success" | "error";
  message?: string;
  /** Echoed back so the success screen can greet the visitor by name. */
  nama?: string;
}

const onlyDigits = (s: string) => s.replace(/\D/g, "");

export async function submitLead(
  _prev: LeadState,
  formData: FormData
): Promise<LeadState> {
  // Honeypot: real users never fill this hidden field. Pretend success for bots.
  if (((formData.get("company_website") as string) || "").trim()) {
    return { status: "success" };
  }

  const nama = ((formData.get("nama") as string) || "").trim();
  const usaha = ((formData.get("usaha") as string) || "").trim();
  const wa = ((formData.get("wa") as string) || "").trim();
  const pesan = ((formData.get("pesan") as string) || "").trim();

  if (!nama || !wa) {
    return { status: "error", message: "Nama dan nomor WhatsApp wajib diisi." };
  }
  if (onlyDigits(wa).length < 8) {
    return { status: "error", message: "Nomor WhatsApp belum valid." };
  }

  const text = [
    "🔔 Lead Baru — Nexflow",
    `👤 Nama: ${nama}`,
    usaha ? `🏪 Usaha: ${usaha}` : null,
    `📱 WhatsApp: ${wa}`,
    pesan ? `💬 Pesan: ${pesan}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (token && chatId) {
    try {
      const res = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: chatId, text }),
          cache: "no-store",
        }
      );
      if (!res.ok) {
        console.error("[lead] Telegram send failed:", res.status, await res.text());
      }
    } catch (err) {
      console.error("[lead] Telegram request error:", err);
    }
  } else {
    // Not configured yet — keep the UX working locally.
    console.warn("[lead] TELEGRAM_BOT_TOKEN/CHAT_ID not set; lead not delivered:\n" + text);
  }

  // Never expose delivery errors to the visitor.
  return { status: "success", nama };
}
