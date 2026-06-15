"use client";

import { useEffect, useState } from "react";
import { HERO_CHAT } from "@/lib/content";
import { cn } from "@/lib/utils";

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

/** Animated WhatsApp conversation that plays the sequence then loops. */
export function ChatMockup() {
  const [count, setCount] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(HERO_CHAT.length);
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
          setCount(0);
          setTyping(false);
          after(500, () => step(0));
        });
        return;
      }
      if (HERO_CHAT[i].side === "out") {
        setTyping(true);
        after(1200, () => {
          setTyping(false);
          setCount(i + 1);
          after(750, () => step(i + 1));
        });
      } else {
        setCount(i + 1);
        after(1000, () => step(i + 1));
      }
    };

    after(600, () => step(0));
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="edge-glow relative mx-auto w-full max-w-[360px] overflow-hidden rounded-2xl border border-border-2 bg-bg-2 shadow-card-hover lg:ml-auto lg:mr-0"
    >
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
      <div className="flex min-h-[268px] flex-col gap-2 p-4">
        {HERO_CHAT.slice(0, count).map((m, i) => (
          <Bubble key={i} side={m.side}>
            {m.text}
          </Bubble>
        ))}
        {typing && <TypingBubble />}
      </div>

      {/* footer */}
      <div className="border-t border-border bg-bg-3/80 px-4 py-2.5 font-mono text-[11px] text-fg-subtle">
        Auto-reply aktif · respon &lt;1 detik
      </div>
    </div>
  );
}
