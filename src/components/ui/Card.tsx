import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: "div" | "article";
  /** Lift + border glow on hover. */
  hover?: boolean;
}

/** Premium surface: layered bg, hairline border, inner-top highlight. */
export function Card({
  as: Tag = "div",
  hover = true,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <Tag
      className={cn(
        "group relative rounded-2xl border border-border bg-bg-2/80 p-6 shadow-card transition-all duration-300 ease-premium",
        hover &&
          "will-change-transform hover:-translate-y-1 hover:border-border-2 hover:shadow-card-hover",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
