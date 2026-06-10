import Image from "next/image";
import { cn } from "@/lib/utils";

/** Nexflow wordmark with the emerald chevron glyph. */
export function Logo({
  className,
  priority = false,
}: {
  className?: string;
  /** Set true only for the above-the-fold instance (navbar). */
  priority?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 font-display text-lg font-extrabold tracking-extra-tight text-fg",
        className
      )}
    >
      <Image
        src="/nexflow-logo.webp"
        alt="Nexflow Logo"
        width={32}
        height={32}
        quality={85}
        priority={priority}
        className="h-8 w-8"
      />
      Nexflow
    </span>
  );
}
