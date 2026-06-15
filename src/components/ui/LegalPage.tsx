import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Footer } from "@/components/sections/Footer";

export interface LegalSection {
  heading: string;
  body: string[];
}

/** Shared shell for the Privacy & Terms pages — simple, readable, on-brand. */
export function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <header className="border-b border-border bg-bg/80 backdrop-blur">
        <Container className="flex h-[68px] items-center">
          <Link href="/" aria-label="Nexflow beranda">
            <Logo priority />
          </Link>
        </Container>
      </header>

      <main id="top" className="bg-bg">
        <Container className="py-[clamp(3rem,7vw,5.5rem)]">
          <article className="mx-auto max-w-[720px]">
            <Link
              href="/"
              className="text-[13px] text-fg-subtle transition-colors hover:text-fg"
            >
              ← Kembali ke beranda
            </Link>
            <h1 className="mt-6 text-display-3 font-bold text-fg">{title}</h1>
            <p className="mt-2 font-mono text-[12px] text-fg-subtle">
              Terakhir diperbarui: {updated}
            </p>
            <p className="mt-6 text-[15px] leading-relaxed text-fg-muted">
              {intro}
            </p>

            <div className="mt-10 flex flex-col gap-9">
              {sections.map((s, i) => (
                <section key={s.heading}>
                  <h2 className="text-[17px] font-bold text-fg">
                    {i + 1}. {s.heading}
                  </h2>
                  {s.body.map((p, j) => (
                    <p
                      key={j}
                      className="mt-3 text-[14px] leading-relaxed text-fg-muted"
                    >
                      {p}
                    </p>
                  ))}
                </section>
              ))}
            </div>
          </article>
        </Container>
      </main>

      <Footer />
    </>
  );
}
