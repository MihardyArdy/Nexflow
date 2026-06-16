/**
 * Ultra-light analytics shim. Forwards events to Meta Pixel (fbq) and GA (gtag)
 * if they're present; otherwise it's a silent no-op. No dependency, no weight.
 */
type Props = Record<string, string | number | boolean>;

interface AnalyticsWindow {
  fbq?: (...args: unknown[]) => void;
  gtag?: (...args: unknown[]) => void;
}

export function track(event: string, props?: Props) {
  if (typeof window === "undefined") return;
  const w = window as unknown as AnalyticsWindow;
  try {
    w.fbq?.("trackCustom", event, props);
    w.gtag?.("event", event, props);
  } catch {
    /* analytics must never break the app */
  }
}

/** Fire a Meta Pixel standard event (e.g. "Lead", "Contact"). */
export function pixelStandard(event: string, props?: Props) {
  if (typeof window === "undefined") return;
  const w = window as unknown as AnalyticsWindow;
  try {
    w.fbq?.("track", event, props);
  } catch {
    /* noop */
  }
}
