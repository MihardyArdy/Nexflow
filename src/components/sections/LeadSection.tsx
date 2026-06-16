import { Clock, ShieldCheck, Zap } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { LeadForm } from "./LeadForm";

const POINTS = [
  { icon: Zap, text: "Setup cepat — live dalam 1–3 hari kerja." },
  { icon: Clock, text: "Balas chat 24/7, hemat berjam-jam tiap hari." },
  { icon: ShieldCheck, text: "Coba gratis 7 hari, tanpa kartu kredit." },
];

export function LeadSection() {
  return (
    <Section id="demo">
      <Container>
        <SectionHeading
          eyebrow="Minta Demo"
          title={
            <>
              Siap Coba{" "}
              <span className="font-instrument font-normal italic text-gradient">
                Gratis?
              </span>
            </>
          }
          desc="Isi data singkat — tim kami langsung menghubungi via WhatsApp untuk demo & setup."
        />
        <div className="mx-auto grid max-w-4xl items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <Reveal>
            <ul className="flex flex-col gap-4">
              {POINTS.map((p) => {
                const Icon = p.icon;
                return (
                  <li key={p.text} className="flex items-start gap-3">
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
                      <Icon size={16} />
                    </div>
                    <span className="pt-1.5 text-[14px] leading-relaxed text-fg-muted">
                      {p.text}
                    </span>
                  </li>
                );
              })}
            </ul>
          </Reveal>
          <Reveal delay={80}>
            <Card hover={false} className="bg-bg-3/60">
              <LeadForm />
            </Card>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
