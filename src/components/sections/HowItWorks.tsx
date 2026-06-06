import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { STEPS } from "@/lib/content";

export function HowItWorks() {
  return (
    <Section id="cara">
      <Container>
        <SectionHeading
          eyebrow="Cara Kerja"
          title={
            <>
              Tiga Langkah, Bisnis{" "}
              <span className="font-instrument font-normal italic text-gradient">
                Auto-Pilot
              </span>
            </>
          }
          desc="Tidak perlu keahlian teknis. Tim kami yang handle semuanya dari awal hingga live."
        />
        <div className="relative grid gap-10 sm:grid-cols-3 sm:gap-6">
          {/* connector line (desktop) */}
          <div
            className="absolute inset-x-8 top-8 hidden h-px bg-gradient-to-r from-transparent via-border-2 to-transparent sm:block"
            aria-hidden
          />
          {STEPS.map((s, i) => (
            <Reveal
              key={s.num}
              delay={i * 120}
              className="relative flex flex-col items-center text-center sm:items-start sm:text-left"
            >
              <div className="relative z-10 grid h-16 w-16 place-items-center rounded-2xl border border-border-2 bg-bg-3 font-mono text-xl font-bold text-accent shadow-card">
                {s.num}
              </div>
              <span className="mt-5 font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-accent">
                {s.day}
              </span>
              <h3 className="mt-2 text-[18px] font-bold text-fg">{s.title}</h3>
              <p className="mt-2 max-w-[260px] text-[13.5px] leading-relaxed text-fg-muted">
                {s.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
