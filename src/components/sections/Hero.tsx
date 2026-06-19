import { Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { FlowLines } from "@/components/ui/FlowLines";
import { buttonClass } from "@/components/ui/Button";
import { ChatMockup } from "./ChatMockup";
import { waLink, WA_MESSAGES } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-[clamp(4rem,9vw,7rem)] pt-[clamp(3rem,8vw,5.5rem)]">
      {/* ambient background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden
      >
        <div className="aurora absolute inset-0" />
        <div className="absolute inset-0 mask-radial opacity-70">
          <FlowLines />
        </div>
      </div>

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* copy */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-[12.5px] font-semibold text-accent">
                <Zap size={13} className="fill-accent" />
                Otomatisasi UMKM Modern
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-5 text-display-1">
                Bisnis Kamu
                <br />
                Masih{" "}
                <span className="font-instrument font-normal italic text-gradient">
                  Manual?
                </span>
              </h1>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-5 max-w-[480px] text-pretty text-[15px] leading-relaxed text-fg-muted sm:text-[17px]">
                Tinggalkan rutinitas balas chat manual. AI WhatsApp Assistant
                Nexflow bekerja 24/7 — dari balas pesan & follow-up prospek,
                hingga laporan bisnis harian.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
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
                  href="#demo"
                  className={buttonClass({ variant: "ghost", size: "lg" })}
                >
                  Minta Demo Gratis
                </a>
              </div>
            </Reveal>
          </div>

          {/* chat mockup */}
          <Reveal delay={200} className="relative">
            <ChatMockup />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
