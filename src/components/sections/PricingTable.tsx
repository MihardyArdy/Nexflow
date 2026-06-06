import { Check, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { COMPARISON_ROWS, COMPARISON_TIERS } from "@/lib/content";

/** Full feature comparison matrix. Scrolls horizontally on small screens. */
export function PricingTable() {
  return (
    <Reveal className="mt-14">
      <div className="overflow-hidden rounded-2xl border border-border bg-bg-2/60 shadow-card">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left">
            <caption className="sr-only">Perbandingan fitur tiap paket</caption>
            <thead>
              <tr className="border-b border-border">
                <th
                  scope="col"
                  className="px-5 py-4 text-[13px] font-semibold text-fg-muted"
                >
                  Fitur
                </th>
                {COMPARISON_TIERS.map((tier) => (
                  <th
                    key={tier}
                    scope="col"
                    className={cn(
                      "px-5 py-4 text-center text-[13px] font-bold",
                      tier === "Standard"
                        ? "bg-accent/[0.05] text-accent"
                        : "text-fg"
                    )}
                  >
                    {tier}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, ri) => (
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
                        COMPARISON_TIERS[ci] === "Standard" && "bg-accent/[0.04]"
                      )}
                    >
                      {typeof v === "boolean" ? (
                        v ? (
                          <Check
                            size={16}
                            strokeWidth={3}
                            className="mx-auto text-accent"
                            aria-label="Termasuk"
                          />
                        ) : (
                          <Minus
                            size={15}
                            className="mx-auto text-fg-subtle/50"
                            aria-label="Tidak termasuk"
                          />
                        )
                      ) : (
                        <span className="text-fg-muted">{v}</span>
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
  );
}
