import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { buttonClass } from "@/components/ui/Button";
import { waLink, WA_MESSAGES } from "@/lib/constants";

export function FinalCTA() {
  return (
    <Section>
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border-2 bg-bg-2 px-6 py-[clamp(2.5rem,7vw,4.5rem)] text-center shadow-card">
            <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
              <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/3 bg-[radial-gradient(closest-side,rgba(16,185,129,0.28),transparent)]" />
              <div className="absolute inset-0 bg-grid mask-radial opacity-50" />
            </div>
            <div className="mx-auto flex max-w-xl flex-col items-center">
              <Eyebrow>Mulai Sekarang</Eyebrow>
              <h2 className="mt-5 text-display-2">
                Siap Lepas dari Operasional{" "}
                <span className="font-instrument font-normal italic text-gradient">
                  Manual?
                </span>
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-fg-muted">
                Bergabung dengan UMKM yang sudah menghemat waktu dan meningkatkan
                penjualan dengan Nexflow. Konsultasi pertama gratis, tanpa
                komitmen.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={waLink(WA_MESSAGES.consult)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClass({ variant: "primary", size: "lg" })}
                >
                  Konsultasi Gratis
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
                <a
                  href="#harga"
                  className={buttonClass({ variant: "ghost", size: "lg" })}
                >
                  Lihat Paket Harga
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
