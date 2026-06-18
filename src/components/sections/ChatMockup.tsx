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
          : "self-end rounded-br-sm bg-gradient-to-br from-[#0d5f47] to-accent text-white"
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

/** Keyword-based auto-reply — instant, zero network, fully client-side. */
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
  return "Noted kak! 🙏 Tim kami siap bantu 24/7. Boleh dijelaskan sedikit lagi kebutuhannya?";
}

/**
 * WhatsApp demo: auto-plays a scripted conversation, then becomes a try-it
 * chat — type a message and get an instant keyword reply. Fully client-side
 * (no network, no AI), so it stays light and snappy. Auto-play stops on the
 * first visitor message.
 */
export function ChatMockup() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [typing, setTyping] = useState(false);
  const [live, setLive] = useState(false); // visitor has taken over
  const [input, setInput] = useState("");
  const bodyRef = useRef<HTMLDivElement>(null);
  const replyTimer = useRef<number | undefined>(undefined);

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

  useEffect(() => () => clearTimeout(replyTimer.current), []);

  function handleSend(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || typing) return;
    if (!live) track("demo_used");

    const base = live ? messages : [];
    setLive(true);
    setMessages([...base, { side: "in", text }]);
    setInput("");
    setTyping(true);
    replyTimer.current = window.setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { side: "out", text: botReply(text) }]);
    }, 800);
  }

  return (
    <div className="relative mx-auto w-full max-w-[360px] overflow-hidden rounded-2xl border border-border-2 bg-bg-2 shadow-card-hover lg:ml-auto lg:mr-0">
      {/* header */}
      <div className="flex items-center gap-3 border-b border-border bg-bg-3/80 px-4 py-3">
        <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-accent to-indigo text-sm font-bold text-black">
          N
        </div>
        <div>
          <div className="text-[13.5px] font-semibold text-fg">Nexflow Bot</div>
          <div className="mt-0.5 flex items-center gap-1.5 text-[11px] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Online
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
          placeholder="Ketik pesan untuk coba sendiri…"
          aria-label="Ketik pesan demo ke bot"
          maxLength={120}
          className="flex-1 bg-transparent px-2 text-[12.5px] text-fg placeholder:text-fg-subtle outline-none"
        />
        <button
          type="submit"
          disabled={typing}
          aria-label="Kirim pesan"
          className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent text-black transition-transform duration-200 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
        >
          <Send size={15} />
        </button>
      </form>
    </div>
  );
}
