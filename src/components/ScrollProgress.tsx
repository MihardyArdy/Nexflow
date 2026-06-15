/**
 * Thin emerald reading-progress bar — pure CSS scroll-driven via
 * `animation-timeline: scroll()` (see `.scroll-progress` in globals.css).
 * Zero JS: no scroll listener, no React re-renders, runs on the compositor.
 * Falls back to hidden where scroll-timeline is unsupported (decorative only).
 */
export function ScrollProgress() {
  return (
    <div
      aria-hidden
      className="scroll-progress fixed inset-x-0 top-0 z-[70] h-0.5 origin-left scale-x-0 bg-gradient-to-r from-accent to-accent-2 shadow-glow"
    />
  );
}
