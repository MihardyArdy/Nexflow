import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { FOUNDER } from "@/lib/content";

/** Honest founder/brand note — authentic trust while pre-launch (no photo). */
export function Founder() {
  return (
    <Section id="cerita">
      <Container>
        <Reveal className="mx-auto flex max-w-2xl flex-col items-start gap-5">
          <Eyebrow>{FOUNDER.eyebrow}</Eyebrow>
          <h2 className="text-display-3 font-bold text-fg">{FOUNDER.title}</h2>
          <div className="flex flex-col gap-4">
            {FOUNDER.body.map((p, i) => (
              <p key={i} className="text-pretty text-[15px] leading-relaxed text-fg-muted">
                {p}
              </p>
            ))}
          </div>
          <p className="mt-2 font-instrument text-[18px] italic text-fg">
            {FOUNDER.signoff}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
