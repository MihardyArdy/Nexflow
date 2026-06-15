import { Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SERVICES } from "@/lib/content";

export function Services() {
  const [main, ...secondary] = SERVICES;
  const MainIcon = main.icon;

  return (
    <Section id="layanan">
      <Container>
        <SectionHeading
          eyebrow="Layanan Kami"
          title="Spesialis AI WhatsApp untuk UMKM Indonesia"
          desc="Satu platform, tiga fitur yang bekerja 24/7 — dari balas pesan hingga laporan bisnis harian."
        />

        <div className="flex flex-col gap-4">
          {/* Featured: AI WhatsApp */}
          <Reveal>
            <Card
              as="article"
              className="group/card relative overflow-hidden border-accent/20"
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/8 opacity-0 blur-3xl transition-opacity duration-500 group-hover/card:opacity-100"
                aria-hidden
              />
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-accent transition-transform duration-300 ease-premium group-hover:scale-110">
                    <MainIcon size={22} />
                  </div>
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-accent">
                    Layanan Utama
                  </span>
                </div>
                <span className="font-mono text-xs font-semibold tracking-widest text-fg-subtle">
                  {main.num}
                </span>
              </div>

              <h3 className="text-[22px] font-bold text-fg mb-2">{main.title}</h3>
              <p className="text-[15px] leading-relaxed text-fg-muted max-w-[520px] mb-5">
                {main.desc}
              </p>

              <ul className="flex flex-wrap gap-x-6 gap-y-2.5 border-t border-border pt-5">
                {main.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-[13.5px] text-fg-muted"
                  >
                    <Check size={14} strokeWidth={3} className="shrink-0 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>

          {/* Secondary: Lead Grading + Daily Briefing */}
          <div className="grid gap-4 sm:grid-cols-2">
            {secondary.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.num} delay={(i + 1) * 60} className="h-full">
                  <Card
                    as="article"
                    className="group/card relative h-full overflow-hidden"
                  >
                    <div
                      className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover/card:opacity-100"
                      aria-hidden
                    />
                    <div className="mb-4 flex items-start gap-3">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-accent/30 bg-accent/10 text-accent transition-transform duration-300 ease-premium group-hover:scale-110">
                        <Icon size={18} />
                      </div>
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="text-[16px] font-semibold text-fg">
                            {s.title}
                          </h3>
                          <span className="font-mono text-[10px] font-semibold tracking-widest text-fg-subtle">
                            {s.num}
                          </span>
                        </div>
                        <p className="mt-1.5 text-[13px] leading-relaxed text-fg-muted">
                          {s.desc}
                        </p>
                      </div>
                    </div>
                    <ul className="flex flex-col gap-2 border-t border-border pt-4">
                      {s.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2 text-[13px] text-fg-muted"
                        >
                          <Check
                            size={13}
                            strokeWidth={3}
                            className="shrink-0 text-accent"
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
        </div>
      </Container>
    </Section>
  );
}
