import { cn } from "@/lib/utils";

/** Emerald gradient clipped text accent. */
export function GradientText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={cn("text-gradient", className)}>{children}</span>;
}
