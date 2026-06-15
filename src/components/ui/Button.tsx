import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "ghost";
type ButtonSize = "md" | "lg";

interface ButtonStyleOptions {
  variant?: ButtonVariant;
  size?: ButtonSize;
  full?: boolean;
  className?: string;
}

/**
 * Shared button styling. Exposed as a function so it can be applied to both
 * <button> and <a> (most CTAs are WhatsApp links).
 */
export function buttonClass({
  variant = "primary",
  size = "md",
  full = false,
  className,
}: ButtonStyleOptions = {}) {
  return cn(
    "group inline-flex items-center justify-center gap-2 rounded-full font-semibold leading-none whitespace-nowrap transition-all duration-200 ease-premium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-60",
    size === "lg" ? "px-7 py-3.5 text-[15px]" : "px-5 py-2.5 text-sm",
    full && "w-full",
    variant === "primary" &&
      "relative overflow-hidden bg-gradient-to-b from-accent-2 to-accent text-black shadow-glow hover:-translate-y-0.5 hover:from-accent-2 hover:to-accent-2 hover:shadow-glow-lg active:translate-y-0 after:pointer-events-none after:absolute after:inset-0 after:-translate-x-full after:skew-x-[-20deg] after:bg-gradient-to-r after:from-transparent after:via-white/35 after:to-transparent after:transition-transform after:duration-700 after:ease-out after:content-[''] hover:after:translate-x-full",
    variant === "ghost" &&
      "border border-border-2 text-fg hover:-translate-y-0.5 hover:border-[#3a3a3a] hover:bg-white/[0.04] active:translate-y-0",
    className
  );
}

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonStyleOptions {}

export function Button({
  variant,
  size,
  full,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonClass({ variant, size, full, className })}
      {...props}
    />
  );
}
