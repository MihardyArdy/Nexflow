"use client";

import { useEffect, useRef, useState } from "react";
import { Send } from "lucide-react";
import { HERO_CHAT, type ChatMessage } from "@/lib/content";
import { cn } from "@/lib/utils";
import { track } from "@/lib/analytics";

function Bubble({
  side,
  children,
}: {
  side: "in" | "out";
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "max-w-[82%] animate-bubble-in rounded-2xl px-3.5 py-2.5 text-[12.5px] leading-relaxed",
        side === "in"
          ? "self-start rounded-bl-sm border border-border bg-bg-3 text-fg"
          : "self-end rounded-br-sm bg-gradient-to-br from-[#0d5f47] to-accent text-white shadow-glow"
      )}
    >
      {children}
    </div>
  );
}

function TypingBubble() {
  return (
    <div className="flex animate-bubble-in items-center gap-1 self-start rounded-2xl rounded-bl-sm border border-border bg-bg-3 px-4 py-3.5">
      <span className="h-1.5 w-1.5 rounded-full bg-fg-muted animate-typing-1" />
      <span className="h-1.5 w-1.5 rounded-full bg-fg-muted animate-typing-2" />
      <span className="h-1.5 w-1.5 rounded-full bg-fg-muted animate-typing-3" />
    </div>
  );
}

/** Keyword-based auto-reply — a believable demo with zero backend. */
function botReply(text: string): string {
  const t = text.toLowerCase();
  if (/(halo|hai|hi|pagi|siang|sore|malam|assalam)/.test(t))
    return "Halo kak! 👋 Ada yang bisa dibantu? Mau tanya produk, harga, atau cara order?";
  if (/(harga|berapa|price|biaya|tarif)/.test(t))
    return "Paket mulai Rp199rb/bulan kak 😊 Mau saya kirimkan detail tiap paketnya?";
  if (/(stok|ready|tersedia|warna|ukuran|size)/.test(t))
    return "Barangnya ready kak ✅ Mau langsung saya buatkan pesanannya?";
  if (/(order|beli|pesan|checkout|mau ambil)/.test(t))
    return "Siap kak! 🙏 Boleh sebutkan produk & jumlahnya? Nanti saya proses + kirim total & cara bayar.";
  if (/(kirim|ongkir|alamat|pengiriman|ekspedisi)/.test(t))
    return "Untuk ongkir, boleh share kota tujuannya kak? Saya cek estimasinya 🚚";
  if (/(bayar|transfer|cod|qris|ewallet|e-wallet)/.test(t))
    return "Bisa transfer bank, QRIS, atau e-wallet kak. Begitu lunas, langsung kami proses 🎉";
  return "Noted kak! 🙏 Tim AI kami siap bantu 24/7. Boleh dijelaskan sedikit lagi kebutuhannya?";
}

/** Max visitor messages per session — caps cost on the public AI endpoint. */
const MAX_USER_MSGS = 6;

/**
 * WhatsApp demo that auto-plays a scripted conversation, then becomes a real
 * AI chat (Naya via /api/chat → Groq). Auto-play stops on first send. Every
 * visitor message hits the AI; on any failure it falls back to a scripted
 * reply, and the session is capped to keep the public endpoint cheap.
 */
export function ChatMockup() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [typing, setTyping] = useState(false);
  const [live, setLive] = useState(false); // visitor has taken over
  const [capped, setCapped] = useState(false);
  const [input, setInput] = useState("");
  const bodyRef = useRef<HTMLDivElement>(null);
  const sentRef = useRef(0);

  // Auto-play the scripted preview until the visitor interacts.
  useEffect(() => {
    if (live) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setMessages(HERO_CHAT);
      return;
    }
    let cancelled = false;
    let timer: number;
    const after = (ms: number, fn: () => void) => {
      timer = window.setTimeout(() => !cancelled && fn(), ms);
    };
    const step = (i: number) => {
      if (cancelled) return;
      if (i >= HERO_CHAT.length) {
        after(3200, () => {
          setMessages([]);
          setTyping(false);
          after(500, () => step(0));
        });
        return;
      }
      if (HERO_CHAT[i].side === "out") {
        setTyping(true);
        after(1200, () => {
          setTyping(false);
          setMessages(HERO_CHAT.slice(0, i + 1));
          after(750, () => step(i + 1));
        });
      } else {
        setMessages(HERO_CHAT.slice(0, i + 1));
        after(1000, () => step(i + 1));
      }
    };
    after(600, () => step(0));
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [live]);

  // Keep the latest message in view.
  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [messages, typing]);

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || typing || capped) return;
    if (!live) track("demo_used");

    const history: ChatMessage[] = (live ? messages : []).concat({
      side: "in",
      text,
    });
    setLive(true);
    setMessages(history);
    setInput("");
    setTyping(true);

    const next = sentRef.current + 1;
    sentRef.current = next;

    let reply = "";
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: history.map((m) => ({
            role: m.side === "in" ? "user" : "assistant",
            content: m.text,
          })),
        }),
      });
      const data = await res.json();
      reply = data?.reply || "";
    } catch {
      reply = "";
    }
    if (!reply) reply = botReply(text); // graceful fallback

    const limitReached = next >= MAX_USER_MSGS;
    setTyping(false);
    setMessages((m) => {
      const out: ChatMessage[] = [...m, { side: "out", text: reply }];
      if (limitReached) {
        out.push({
          side: "out",
          text: "Seru ngobrolnya kak! 😊 Untuk lanjut & coba versi lengkapnya, yuk chat tim kami langsung via WhatsApp 🙏",
        });
      }
      return out;
    });
    if (limitReached) setCapped(true);
  }

  return (
    <div className="edge-glow relative mx-auto w-full max-w-[360px] overflow-hidden rounded-2xl border border-border-2 bg-bg-2 shadow-card-hover lg:ml-auto lg:mr-0">
      {/* header */}
      <div className="flex items-center gap-3 border-b border-border bg-bg-3/80 px-4 py-3">
        <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-accent to-indigo text-sm font-bold text-black">
          N
        </div>
        <div>
          <div className="text-[13.5px] font-semibold text-fg">
            Naya · Nexflow
          </div>
          <div className="mt-0.5 flex items-center gap-1.5 text-[11px] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            AI Assistant · Online
          </div>
        </div>
      </div>

      {/* body */}
      <div
        ref={bodyRef}
        aria-hidden
        className="flex max-h-[268px] min-h-[268px] flex-col gap-2 overflow-y-auto p-4"
      >
        {messages.map((m, i) => (
          <Bubble key={i} side={m.side}>
            {m.text}
          </Bubble>
        ))}
        {typing && <TypingBubble />}
      </div>

      {/* interactive input */}
      <form
        onSubmit={handleSend}
        className="flex items-center gap-2 border-t border-border bg-bg-3/80 p-2"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={capped}
          placeholder={
            capped
              ? "Lanjut ngobrol via WhatsApp 🙏"
              : "Ketik pesan untuk coba Naya…"
          }
          aria-label="Ketik pesan demo ke Naya"
          maxLength={120}
          className="flex-1 bg-transparent px-2 text-[12.5px] text-fg placeholder:text-fg-subtle outline-none disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={typing || capped}
          aria-label="Kirim pesan"
          className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent text-black transition-transform duration-200 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
        >
          <Send size={15} />
        </button>
      </form>
    </div>
  );
}
