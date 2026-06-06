import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  desc?: string;
  align?: "center" | "left";
  className?: string;
}

/** Eyebrow + headline + lead, with built-in reveal. */
export function SectionHeading({
  eyebrow,
  title,
  desc,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "mb-[clamp(2.5rem,5vw,3.75rem)] flex flex-col gap-4",
        align === "center"
          ? "mx-auto max-w-prose items-center text-center"
          : "items-start text-left",
        className
      )}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-display-2">{title}</h2>
      {desc && (
        <p className="max-w-prose text-pretty text-[15px] leading-relaxed text-fg-muted sm:text-base">
          {desc}
        </p>
      )}
    </Reveal>
  );
}
