import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { FOOTER_COLUMNS } from "@/lib/content";
import { waLink, WA_DISPLAY } from "@/lib/constants";

const SOCIALS = [
  { label: "WhatsApp", short: "WA", href: waLink(), external: true },
  { label: "Instagram", short: "IG", href: "https://instagram.com/nexflow.ai_automation", external: true },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" aria-label="Nexflow beranda">
              <Logo />
            </a>
            <p className="mt-4 max-w-[280px] text-[13px] leading-relaxed text-fg-muted">
              Spesialis AI WhatsApp Assistant untuk UMKM Indonesia. Dari balas
              pesan, follow-up prospek, hingga laporan bisnis harian.
            </p>
            <div className="mt-5 flex gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.short}
                  href={s.href}
                  aria-label={s.label}
                  {...(s.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-border font-mono text-[11px] font-bold text-fg-subtle transition-colors duration-200 hover:border-border-2 hover:text-fg"
                >
                  {s.short}
                </a>
              ))}
            </div>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-[13px] font-bold text-fg">{col.title}</h4>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[13px] text-fg-muted transition-colors duration-200 hover:text-fg"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-[13px] font-bold text-fg">Kontak</h4>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-fg-muted transition-colors duration-200 hover:text-fg"
                >
                  {WA_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href="mailto:nexflow.hq@gmail.com"
                  className="text-[13px] text-fg-muted transition-colors duration-200 hover:text-fg"
                >
                  nexflow.hq@gmail.com
                </a>
              </li>
              <li>
                <span className="text-[13px] text-fg-muted">
                  Jakarta, Indonesia
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-fg-subtle sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Nexflow. Semua hak dilindungi.</span>
          <div className="flex gap-5">
            <a
              href="/privacy"
              className="transition-colors duration-200 hover:text-fg"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="transition-colors duration-200 hover:text-fg"
            >
              Terms
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
