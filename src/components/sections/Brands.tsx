import Image from "next/image";
import { BRANDS } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Real, icon-only platform logos. `mono` logos are dark/monochrome (e.g.
 * TikTok's black glyph) and get whitened with a brightness/invert filter so
 * they read on the dark section; full-color logos are left untouched.
 * `w` is the display width at the uniform 28px row height (logos are square
 * except Xendit), so next/image gets exact dimensions and skips layout work.
 */
const LOGOS: Record<string, { src: string; w: number; mono?: boolean }> = {
  WhatsApp: { src: "/logos/whatsapp.svg", w: 28 },
  Tokopedia: { src: "/logos/tokopedia.png", w: 28 },
  Shopee: { src: "/logos/shopee.svg", w: 28 },
  "TikTok Shop": { src: "/logos/tiktok.svg", w: 28, mono: true },
  Xendit: { src: "/logos/xendit.svg", w: 26 },
  "Google Sheets": { src: "/logos/google-sheets.svg", w: 28 },
  "Moka POS": { src: "/logos/moka.png", w: 28 },
  Jurnal: { src: "/logos/jurnal.svg", w: 28 },
};

/**
 * Integration partner logos — a static, centered row that wraps on small
 * screens. No marquee: nothing animates, so the section is free to render and
 * never costs anything during scroll. Logos sit directly on the dark
 * background, normalized to a uniform 28px height.
 */
export function Brands() {
  return (
    <section
      aria-label="Integrasi platform"
      className="border-y border-border bg-bg-2 py-9"
    >
      <p className="mb-7 px-5 text-center font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-fg-subtle">
        Terhubung dengan platform yang sudah kamu pakai
      </p>
      <ul className="mx-auto flex max-w-content flex-wrap items-center justify-center gap-x-10 gap-y-6 px-5 sm:gap-x-14">
        {BRANDS.map((brand) => {
          const logo = LOGOS[brand];
          return (
            <li key={brand} className="flex shrink-0 items-center">
              <Image
                src={logo.src}
                alt={`Logo ${brand}`}
                width={logo.w}
                height={28}
                quality={85}
                loading="lazy"
                /* Next's optimizer rejects SVG by default; serve those as-is. */
                unoptimized={logo.src.endsWith(".svg")}
                style={{ height: 28, width: logo.w }}
                className={cn(
                  "object-contain opacity-75 transition-opacity duration-200 hover:opacity-100",
                  logo.mono && "brightness-0 invert"
                )}
                draggable={false}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
