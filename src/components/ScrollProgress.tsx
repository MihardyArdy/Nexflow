"use client";

import { useEffect, useState } from "react";

/** Thin emerald reading-progress bar pinned to the very top. */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = document.documentElement;
        const total = el.scrollHeight - el.clientHeight;
        setProgress(total > 0 ? (el.scrollTop / total) * 100 : 0);
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[70] h-0.5" aria-hidden>
      <div
        className="h-full bg-gradient-to-r from-accent to-accent-2 shadow-glow"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
