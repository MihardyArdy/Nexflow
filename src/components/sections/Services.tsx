import { Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SERVICES } from "@/lib/content";

export function Services() {
  return (
    <Section id="layanan">
      <Container>
        <SectionHeading
          eyebrow="Layanan Kami"
          title="Solusi Otomatis untuk Tiga Pekerjaan Utama"
          desc="Tiga layanan inti yang dirancang khusus untuk kebutuhan operasional UMKM Indonesia."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.num} delay={i * 90} className="h-full">
                <Card as="article" className="group/card h-full overflow-hidden">
                  <div
                    className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover/card:opacity-100"
                    aria-hidden
                  />
                  <div className="flex items-start justify-between">
                    <div className="grid h-11 w-11 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                      <Icon size={20} />
                    </div>
                    <span className="font-mono text-xs font-semibold tracking-widest text-fg-subtle">
                      {s.num}
                    </span>
                  </div>
                  <h3 className="mb-2 mt-4 text-[17px] font-bold text-fg">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-fg-muted">
                    {s.desc}
                  </p>
                  <ul className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
                    {s.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-[13px] text-fg-muted"
                      >
                        <Check
                          size={14}
                          strokeWidth={3}
                          className="mt-0.5 shrink-0 text-accent"
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
