"use client";

import Script from "next/script";
import { useEffect } from "react";
import { track } from "@/lib/analytics";

/**
 * Loads Meta Pixel (lazily, off the critical path) and tracks every WhatsApp
 * click site-wide via one delegated listener — no need to wire each CTA.
 * Fully no-ops when NEXT_PUBLIC_META_PIXEL_ID is unset.
 */
export function Analytics() {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement)?.closest?.(
        'a[href*="wa.me"], a[href*="api.whatsapp.com"]'
      );
      if (link) track("wa_click");
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  if (!pixelId) return null;

  return (
    <Script id="meta-pixel" strategy="lazyOnload">
      {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window,document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${pixelId}');
        fbq('track', 'PageView');
      `}
    </Script>
  );
}
