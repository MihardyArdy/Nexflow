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
          {/* drawn flow connector (desktop) — draws itself on scroll */}
          <svg
            className="pointer-events-none absolute inset-x-8 top-8 hidden h-4 w-[calc(100%-4rem)] -translate-y-1/2 sm:block"
            viewBox="0 0 1000 20"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <linearGradient id="flow-connector" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#10b981" stopOpacity="0" />
                <stop offset="0.5" stopColor="#10b981" stopOpacity="0.5" />
                <stop offset="1" stopColor="#10b981" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              className="flow-line"
              pathLength={1}
              d="M0 10 C 180 2, 320 18, 500 10 S 820 2, 1000 10"
              stroke="url(#flow-connector)"
              strokeWidth="2"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          {STEPS.map((s, i) => (
            <Reveal
              key={s.num}
              delay={i * 120}
              className="relative flex flex-col items-center text-center sm:items-start sm:text-left"
            >
              <div className="relative z-10 grid h-16 w-16 place-items-center rounded-2xl border border-border-2 bg-bg-3 shadow-card">
                <span className="font-display text-2xl font-extrabold text-gradient">
                  {s.num}
                </span>
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
