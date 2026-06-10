import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { buttonClass } from "@/components/ui/Button";
import { waLink } from "@/lib/constants";

export function Testimonials() {
  return (
    <Section id="testi" alt>
      <Container>
        <SectionHeading
          eyebrow="Testimoni"
          title="Cerita Sukses Segera Hadir"
          desc="Posisi klien pertama kami masih kosong — dan bisa jadi punyamu."
        />
        <Reveal className="mx-auto max-w-xl">
          <Card
            as="article"
            className="flex flex-col items-center gap-4 bg-bg-3/60 py-10 text-center"
          >
            <h3 className="text-[20px] font-bold text-fg">
              Jadilah Klien Pertama Kami
            </h3>
            <p className="max-w-md text-pretty text-[14.5px] leading-relaxed text-fg-muted">
              Kami sedang mencari UMKM pertama yang mau coba gratis 7 hari.
              Testimoni nyata segera hadir.
            </p>
            <a
              href={waLink(
                "Halo Nexflow, saya mau coba gratis 7 hari dan jadi klien pertama"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass({ variant: "primary", size: "lg" })}
            >
              Daftar Sekarang
            </a>
          </Card>
        </Reveal>
      </Container>
    </Section>
  );
}
