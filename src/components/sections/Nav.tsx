"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/content";
import { waLink, WA_MESSAGES } from "@/lib/constants";
import { buttonClass } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300 ease-premium",
        scrolled
          ? "border-border bg-bg/80 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-content items-center justify-between gap-4 px-5 transition-all duration-300 ease-premium sm:px-6 lg:px-8",
          scrolled ? "h-[60px]" : "h-[68px]"
        )}
      >
        <a href="#top" aria-label="Nexflow beranda">
          <Logo />
        </a>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Navigasi utama"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-[13.5px] text-fg-muted transition-colors duration-200 hover:bg-bg-3 hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <a
            href={waLink(WA_MESSAGES.consult)}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass({ variant: "primary" })}
          >
            Konsultasi Gratis
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Buka menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="grid h-10 w-10 place-items-center rounded-lg border border-border text-fg-muted transition-colors hover:border-border-2 hover:text-fg lg:hidden"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Mobile slide-in menu */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-[60] lg:hidden",
          open ? "" : "pointer-events-none"
        )}
        aria-hidden={!open}
      >
        <div
          className={cn(
            "absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setOpen(false)}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu navigasi"
          className={cn(
            "absolute inset-y-0 right-0 flex w-[min(82vw,320px)] flex-col gap-1 border-l border-border bg-bg-2 p-5 shadow-card-hover transition-transform duration-300 ease-premium",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Tutup menu"
            className="mb-2 grid h-10 w-10 place-items-center self-end rounded-lg text-fg-muted transition-colors hover:bg-bg-3 hover:text-fg"
          >
            <X size={20} />
          </button>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 font-medium text-fg-muted transition-colors hover:bg-bg-3 hover:text-fg"
            >
              {link.label}
            </a>
          ))}
          <a
            href={waLink(WA_MESSAGES.consult)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className={buttonClass({ variant: "primary", full: true, className: "mt-auto" })}
          >
            Konsultasi Gratis
          </a>
        </div>
      </div>
    </header>
  );
}
