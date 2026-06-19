import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { ADVANTAGES } from "@/lib/content";

export function Advantages() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Keunggulan"
          title="Kenapa Pilih Nexflow?"
          desc="Bukan sekadar tools — kami adalah mitra pertumbuhan bisnis kamu."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {ADVANTAGES.map((a, i) => {
            const Icon = a.icon;
            return (
              <Reveal key={a.title} delay={i * 80} className="h-full">
                <Card className="flex h-full items-start gap-4 bg-bg-3/60">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-accent transition-transform duration-300 ease-premium group-hover:scale-110">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="mb-1.5 text-[15px] font-bold text-fg">
                      {a.title}
                    </h3>
                    <p className="text-[13.5px] leading-relaxed text-fg-muted">
                      {a.desc}
                    </p>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
