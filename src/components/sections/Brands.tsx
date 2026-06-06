import { BRANDS } from "@/lib/content";

/** Infinite logo-text marquee of integration partners. */
export function Brands() {
  const items = [...BRANDS, ...BRANDS];
  return (
    <section
      aria-label="Integrasi platform"
      className="border-y border-border bg-bg-2 py-7"
    >
      <div className="group relative overflow-hidden mask-fade-x">
        <ul className="flex w-max animate-marquee items-center group-hover:[animation-play-state:paused]">
          {items.map((brand, i) => (
            <li
              key={i}
              className="flex shrink-0 items-center gap-2.5 whitespace-nowrap pr-12 font-display text-[15px] font-semibold text-fg-muted/70 transition-colors duration-200 hover:text-fg"
            >
              <span
                className="h-1.5 w-1.5 rounded-full bg-accent/40"
                aria-hidden
              />
              {brand}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
