"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { FAQS } from "@/lib/content";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" alt>
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Hal yang Sering Ditanyakan"
          desc="Belum menemukan jawaban? Hubungi kami via WhatsApp untuk diskusi langsung."
        />
        <div className="mx-auto flex max-w-[720px] flex-col gap-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 50}>
                <div
                  className={cn(
                    "overflow-hidden rounded-xl border bg-bg-3/50 transition-colors duration-200",
                    isOpen ? "border-border-2" : "border-border"
                  )}
                >
                  <h3>
                    <button
                      type="button"
                      id={`faq-trigger-${i}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[14.5px] font-semibold text-fg transition-colors duration-200 hover:text-accent"
                    >
                      {f.q}
                      <Plus
                        size={18}
                        className={cn(
                          "shrink-0 text-fg-subtle transition-transform duration-300 ease-premium",
                          isOpen && "rotate-45 text-accent"
                        )}
                      />
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${i}`}
                    className={cn(
                      "grid transition-all duration-300 ease-premium",
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-[14px] leading-relaxed text-fg-muted">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
