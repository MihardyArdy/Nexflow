import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { COMPARE_COLS, COMPARE_ROWS } from "@/lib/content";

/** Honest "why us" matrix vs the real alternatives — builds trust pre-clients. */
export function Comparison() {
  return (
    <Section id="banding" alt>
      <Container>
        <SectionHeading
          eyebrow="Perbandingan"
          title={
            <>
              Kenapa Nexflow, Bukan{" "}
              <span className="font-instrument font-normal italic text-gradient">
                yang Lain?
              </span>
            </>
          }
          desc="Bandingkan jujur dengan cara lama (CS manual) dan bot kaku biasa."
        />
        <Reveal className="mx-auto max-w-3xl">
          <div className="overflow-hidden rounded-2xl border border-border bg-bg-2/60 shadow-card">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left tabular-nums">
                <caption className="sr-only">
                  Perbandingan Nexflow vs CS Manual vs Bot Biasa
                </caption>
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-5 py-4 text-[13px] font-semibold text-fg-muted">
                      Kemampuan
                    </th>
                    {COMPARE_COLS.map((col, ci) => (
                      <th
                        key={col}
                        scope="col"
                        className={cn(
                          "px-5 py-4 text-center text-[13px] font-bold",
                          ci === 0 ? "bg-accent/[0.06] text-accent" : "text-fg"
                        )}
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARE_ROWS.map((row, ri) => (
                    <tr
                      key={row.feature}
                      className={cn(
                        "border-b border-border/60 last:border-0",
                        ri % 2 === 1 && "bg-white/[0.015]"
                      )}
                    >
                      <th
                        scope="row"
                        className="px-5 py-3.5 text-[13px] font-medium text-fg/90"
                      >
                        {row.feature}
                      </th>
                      {row.values.map((v, ci) => (
                        <td
                          key={ci}
                          className={cn(
                            "px-5 py-3.5 text-center text-[13px]",
                            ci === 0 && "bg-accent/[0.04]"
                          )}
                        >
                          {typeof v === "boolean" ? (
                            v ? (
                              <Check
                                size={16}
                                strokeWidth={3}
                                className={cn(
                                  "mx-auto",
                                  ci === 0 ? "text-accent" : "text-fg-muted"
                                )}
                                aria-label="Ya"
                              />
                            ) : (
                              <X
                                size={15}
                                className="mx-auto text-fg-subtle/50"
                                aria-label="Tidak"
                              />
                            )
                          ) : (
                            <span
                              className={cn(
                                ci === 0
                                  ? "font-semibold text-accent"
                                  : "text-fg-muted"
                              )}
                            >
                              {v}
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
