import { Star } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { TESTIMONIALS } from "@/lib/content";

export function Testimonials() {
  return (
    <Section id="testi" alt>
      <Container>
        <SectionHeading
          eyebrow="Testimoni"
          title="Suara Klien yang Sudah Bermigrasi"
          desc="Pengalaman nyata dari pemilik UMKM yang sudah merasakan manfaatnya."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 80} className="h-full">
              <Card
                as="article"
                className="flex h-full flex-col gap-4 bg-bg-3/60"
              >
                <div
                  className="flex gap-0.5 text-[#fbbf24]"
                  aria-label="Rating 5 dari 5 bintang"
                >
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star
                      key={k}
                      size={15}
                      strokeWidth={0}
                      className="fill-[#fbbf24]"
                    />
                  ))}
                </div>
                <blockquote className="flex-1 text-pretty text-[14.5px] italic leading-relaxed text-fg/90">
                  “{t.quote}”
                </blockquote>
                <div className="flex items-center gap-3 border-t border-border pt-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-accent to-indigo text-xs font-bold text-black">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-[13.5px] font-semibold text-fg">
                      {t.name}
                    </div>
                    <div className="mt-0.5 text-xs text-fg-subtle">{t.meta}</div>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
