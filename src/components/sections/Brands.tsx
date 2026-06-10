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
 * Seamless right-to-left marquee of integration partner logos. The list is
 * duplicated and the track translates by -50%, so the loop never jumps. Logos
 * sit directly on the dark background (no card), normalized to a uniform 40px
 * height with transparent backgrounds.
 */
export function Brands() {
  const items = [...BRANDS, ...BRANDS];
  return (
    <section
      aria-label="Integrasi platform"
      className="border-y border-border bg-bg-2 py-9"
    >
      <div className="group relative overflow-hidden mask-fade-x">
        <ul className="flex w-max will-change-transform animate-marquee items-center gap-20 group-hover:[animation-play-state:paused]">
          {items.map((brand, i) => {
            const logo = LOGOS[brand];
            return (
              <li key={i} className="flex shrink-0 items-center">
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
      </div>
    </section>
  );
}
