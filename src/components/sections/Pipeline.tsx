import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PIPELINE_STAGES } from "@/lib/content";

/**
 * Signature "automation pipeline" — the message lifecycle told as a vertical
 * flow whose connecting line draws itself on scroll (reuses `.flow-line`).
 * Bespoke SVG/CSS, no images: doubles as the product illustration.
 */
export function Pipeline() {
  return (
    <Section id="alur" alt>
      <Container>
        <SectionHeading
          eyebrow="Di Balik Layar"
          title={
            <>
              Apa yang Terjadi di{" "}
              <span className="font-instrument font-normal italic text-gradient">
                Setiap Chat
              </span>
            </>
          }
          desc="Dari pelanggan menekan kirim sampai laporan masuk ke kamu — semua berjalan otomatis dalam hitungan detik."
        />

        <div className="relative mx-auto max-w-2xl">
          {/* vertical connector that draws on scroll */}
          <svg
            className="pointer-events-none absolute left-6 top-0 h-full w-0.5 -translate-x-1/2"
            viewBox="0 0 2 1000"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <linearGradient id="pipe-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#10b981" stopOpacity="0" />
                <stop offset="0.08" stopColor="#10b981" stopOpacity="0.55" />
                <stop offset="0.92" stopColor="#10b981" stopOpacity="0.55" />
                <stop offset="1" stopColor="#10b981" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              className="flow-line"
              pathLength={1}
              d="M1 0 V1000"
              stroke="url(#pipe-grad)"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <div className="flex flex-col gap-7">
            {PIPELINE_STAGES.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal
                  key={s.title}
                  delay={i * 70}
                  className="relative flex items-start gap-5"
                >
                  <div className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-accent/30 bg-bg-3 text-accent shadow-card">
                    <Icon size={20} />
                  </div>
                  <div className="pt-1">
                    <h3 className="text-[16px] font-bold text-fg">{s.title}</h3>
                    <p className="mt-1 max-w-md text-[13.5px] leading-relaxed text-fg-muted">
                      {s.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
