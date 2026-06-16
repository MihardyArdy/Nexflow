import { NAYA_SYSTEM_PROMPT } from "@/lib/naya-prompt";

/**
 * Naya demo chat → Groq (Llama 3.3 70B). The API key stays server-side. This is
 * a public endpoint, so we cap input length and history depth to bound token
 * cost per request. On any failure it returns { reply: null } so the client can
 * fall back to a scripted reply (never breaks the demo).
 */
export const runtime = "nodejs";

interface Msg {
  role: "user" | "assistant";
  content: string;
}

export async function POST(req: Request) {
  const key = process.env.GROQ_API_KEY;
  if (!key) return Response.json({ reply: null, error: "unconfigured" });

  let body: { messages?: Msg[] };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "bad request" }, { status: 400 });
  }

  const messages = (Array.isArray(body.messages) ? body.messages : [])
    .slice(-8) // cap history depth
    .map((m) => ({
      role: m.role === "assistant" ? "assistant" : "user",
      content: String(m?.content ?? "").slice(0, 400), // cap message length
    }))
    .filter((m) => m.content);

  if (!messages.length) return Response.json({ error: "empty" }, { status: 400 });

  try {
    const res = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${key}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          temperature: 0.6,
          max_tokens: 320,
          messages: [
            { role: "system", content: NAYA_SYSTEM_PROMPT },
            ...messages,
          ],
        }),
        cache: "no-store",
      }
    );

    if (!res.ok) {
      console.error("[chat] Groq error:", res.status, await res.text());
      return Response.json({ reply: null });
    }
    const data = await res.json();
    const reply = data?.choices?.[0]?.message?.content?.trim() || null;
    return Response.json({ reply });
  } catch (err) {
    console.error("[chat] Groq request failed:", err);
    return Response.json({ reply: null });
  }
}
