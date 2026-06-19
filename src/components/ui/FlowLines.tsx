import { cn } from "@/lib/utils";

/**
 * Signature "flow" motif — soft weaving connector lines with nodes, evoking
 * Nexflow's automation flow. Pure inline SVG (zero weight), decorative only.
 * Color/opacity controlled via the wrapping element's className.
 */
export function FlowLines({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-full w-full", className)}
      viewBox="0 0 1200 600"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id="flow-stroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#10b981" stopOpacity="0" />
          <stop offset="0.5" stopColor="#10b981" stopOpacity="0.55" />
          <stop offset="1" stopColor="#10b981" stopOpacity="0" />
        </linearGradient>
      </defs>

      <g stroke="url(#flow-stroke)" strokeWidth="1.5" strokeLinecap="round">
        <path d="M-40 160 C 240 100, 420 240, 660 180 S 1060 110, 1240 200" />
        <path d="M-40 340 C 220 400, 470 280, 700 360 S 1080 450, 1240 330" />
        <path d="M-40 500 C 280 450, 540 560, 800 490 S 1110 430, 1240 510" />
      </g>

      {/* glowing data dots that flow along the lines (animated in globals.css) */}
      <g
        className="flow-energy"
        stroke="#34d399"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="0.01 22"
      >
        <path d="M-40 160 C 240 100, 420 240, 660 180 S 1060 110, 1240 200" />
        <path d="M-40 340 C 220 400, 470 280, 700 360 S 1080 450, 1240 330" />
        <path d="M-40 500 C 280 450, 540 560, 800 490 S 1110 430, 1240 510" />
      </g>

      <g fill="#34d399">
        <circle cx="660" cy="180" r="3.5" opacity="0.7" />
        <circle cx="700" cy="360" r="3.5" opacity="0.7" />
        <circle cx="800" cy="490" r="3.5" opacity="0.7" />
        <circle cx="300" cy="150" r="2" opacity="0.45" />
        <circle cx="980" cy="250" r="2" opacity="0.45" />
        <circle cx="420" cy="410" r="2" opacity="0.45" />
        <circle cx="1040" cy="380" r="2" opacity="0.45" />
      </g>
    </svg>
  );
}
