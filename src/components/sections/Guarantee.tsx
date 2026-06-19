import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { GUARANTEES } from "@/lib/content";

/** Slim risk-reversal band — lowers the barrier right after pricing. */
export function Guarantee() {
  return (
    <section aria-label="Jaminan" className="border-y border-border bg-bg-2">
      <Container className="py-7">
        <Reveal>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {GUARANTEES.map((g) => {
              const Icon = g.icon;
              return (
                <li
                  key={g.label}
                  className="flex items-center gap-2.5 text-[13.5px] font-medium text-fg-muted"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
                    <Icon size={15} />
                  </span>
                  {g.label}
                </li>
              );
            })}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
