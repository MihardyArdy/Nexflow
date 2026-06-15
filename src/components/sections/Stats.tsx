import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { STATS } from "@/lib/content";

/**
 * Capability stat band right under the hero. Pure CSS/no runtime JS beyond the
 * shared Reveal observer — big emerald display numbers with a staggered fade.
 */
export function Stats() {
  return (
    <section aria-label="Kapabilitas" className="border-b border-border bg-bg">
      <Container className="py-10 sm:py-12">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 80}
              className="flex flex-col items-center text-center"
            >
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-[clamp(2rem,5vw,2.75rem)] font-extrabold tracking-tightest tabular-nums text-gradient">
                {s.value}
              </dd>
              <span className="mt-1.5 text-[12.5px] font-medium text-fg-muted">
                {s.label}
              </span>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
