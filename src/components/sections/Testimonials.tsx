import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { buttonClass } from "@/components/ui/Button";
import { FOUNDING_PERKS } from "@/lib/content";
import { waLink } from "@/lib/constants";

/**
 * Honest pre-launch reframe: instead of empty/fake testimonials, present a
 * confident "founding client" offer. Reads as exclusive early-access, not
 * "we have no customers".
 */
export function Testimonials() {
  return (
    <Section id="testi" alt>
      <Container>
        <SectionHeading
          eyebrow="Program Klien Pertama"
          title={
            <>
              Jadi UMKM Pertama yang{" "}
              <span className="font-instrument font-normal italic text-gradient">
                Auto-Pilot
              </span>
            </>
          }
          desc="Kami baru — dan kami transparan soal itu. Posisi klien pertama masih terbuka, lengkap dengan keistimewaan yang tidak akan ada lagi setelah ini."
        />

        <Reveal className="mx-auto max-w-4xl">
          <div className="edge-glow relative overflow-hidden rounded-3xl border border-accent/25 bg-bg-3/60 p-6 shadow-card sm:p-9">
            {/* ambient corner glow */}
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/10 blur-3xl"
              aria-hidden
            />
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
              {/* pitch */}
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[11.5px] font-semibold text-accent">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>
                  Kuota terbatas · slot pertama
                </span>
                <h3 className="mt-4 text-[clamp(1.35rem,3vw,1.75rem)] font-bold leading-tight text-fg">
                  Testimoni nyata segera hadir.
                  <br />
                  <span className="text-fg-muted">Dan bisa jadi punyamu.</span>
                </h3>
                <p className="mt-4 max-w-md text-[14px] leading-relaxed text-fg-muted">
                  Coba gratis 7 hari, tanpa kartu kredit. Kalau cocok, kamu masuk
                  sebagai klien pertama dengan harga & akses khusus di bawah ini.
                </p>
                <a
                  href={waLink(
                    "Halo Nexflow, saya mau coba gratis 7 hari dan jadi klien pertama"
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClass({
                    variant: "primary",
                    size: "lg",
                    className: "mt-7",
                  })}
                >
                  Ambil Slot Klien Pertama
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
              </div>

              {/* perks */}
              <ul className="flex flex-col gap-3">
                {FOUNDING_PERKS.map((perk) => {
                  const Icon = perk.icon;
                  return (
                    <li
                      key={perk.title}
                      className="flex items-start gap-3.5 rounded-2xl border border-border bg-bg-2/70 p-4 transition-colors duration-200 hover:border-border-2"
                    >
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                        <Icon size={18} />
                      </div>
                      <div>
                        <h4 className="text-[14px] font-bold text-fg">
                          {perk.title}
                        </h4>
                        <p className="mt-1 text-[12.5px] leading-relaxed text-fg-muted">
                          {perk.desc}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
