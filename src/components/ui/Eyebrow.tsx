import { cn } from "@/lib/utils";

/** Small uppercase mono label with a glowing dot — section kicker. */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border-2 bg-bg-3/70 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent shadow-card",
        className
      )}
    >
      <span
        className="h-1.5 w-1.5 rounded-full bg-accent shadow-glow"
        aria-hidden
      />
      {children}
    </span>
  );
}
