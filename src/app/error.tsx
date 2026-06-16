"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/** Minimal client error boundary — a friendly fallback with a retry. */
export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <main className="grid min-h-screen place-items-center bg-bg">
      <Container className="flex flex-col items-center gap-5 py-20 text-center">
        <h1 className="text-[22px] font-bold text-fg">Ada kendala 🙏</h1>
        <p className="max-w-sm text-pretty text-[14px] leading-relaxed text-fg-muted">
          Maaf, terjadi sesuatu yang tidak terduga. Coba muat ulang halamannya.
        </p>
        <Button variant="primary" size="lg" onClick={reset}>
          Coba Lagi
        </Button>
      </Container>
    </main>
  );
}
