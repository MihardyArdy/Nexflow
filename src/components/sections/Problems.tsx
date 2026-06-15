import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { PROBLEMS } from "@/lib/content";

export function Problems() {
  return (
    <Section id="masalah" alt>
      <Container>
        <SectionHeading
          eyebrow="Masalah Umum"
          title="Kenapa UMKM Masih Stuck?"
          desc="Bukan karena kurang kerja keras — tapi karena terlalu banyak pekerjaan manual yang menguras waktu."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 90} className="h-full">
                <Card as="article" className="h-full bg-bg-3/60">
                  <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl border border-[#ef4444]/30 bg-[#ef4444]/10 text-[#f87171] transition-transform duration-300 ease-premium group-hover:scale-110">
                    <Icon size={20} />
                  </div>
                  <h3 className="mb-2 text-[17px] font-bold text-fg">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-fg-muted">
                    {p.desc}
                  </p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
