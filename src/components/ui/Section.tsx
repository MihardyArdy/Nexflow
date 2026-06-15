import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Use the slightly raised background shade for alternating rhythm. */
  alt?: boolean;
}

/** Semantic <section> with a consistent fluid vertical rhythm. */
export function Section({ alt, className, children, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "cv-auto relative py-[clamp(5rem,12vw,8.75rem)]",
        alt && "bg-bg-2",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
