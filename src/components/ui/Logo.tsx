import { cn } from "@/lib/utils";

/** Nexflow wordmark with the emerald chevron glyph. */
export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 font-display text-lg font-extrabold tracking-extra-tight text-fg",
        className
      )}
    >
      <span className="grid h-7 w-7 place-items-center rounded-lg bg-accent shadow-glow">
        <svg width="15" height="12" viewBox="0 0 18 14" fill="none" aria-hidden>
          <path
            d="M1 1L7 7L1 13M9 1L15 7L9 13"
            stroke="#000"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      Nexflow
    </span>
  );
}
