"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { PLANS } from "@/lib/content";
import { waLink } from "@/lib/constants";
import { buttonClass } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

/** Monthly/yearly price toggle + the three plan cards (Standard emphasised). */
export function PricingPlans() {
  const [yearly, setYearly] = useState(false);

  return (
    <>
      <Reveal className="mb-12 flex justify-center">
        <div
          role="tablist"
          aria-label="Periode pembayaran"
          className="inline-flex items-center gap-1 rounded-full border border-border bg-bg-2 p-1 shadow-card"
        >
          <button
            type="button"
            role="tab"
            aria-selected={!yearly}
            onClick={() => setYearly(false)}
            className={cn(
              "rounded-full px-4 py-2 text-[13px] font-semibold transition-colors duration-200",
              !yearly ? "bg-bg-4 text-fg shadow-card" : "text-fg-muted hover:text-fg"
            )}
          >
            Bulanan
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={yearly}
            onClick={() => setYearly(true)}
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-semibold transition-colors duration-200",
              yearly ? "bg-bg-4 text-fg shadow-card" : "text-fg-muted hover:text-fg"
            )}
          >
            Tahunan
            <span className="rounded-full bg-accent/15 px-2 py-0.5 font-mono text-[10px] font-bold text-accent">
              Hemat 20%
            </span>
          </button>
        </div>
      </Reveal>

      <div className="grid items-stretch gap-5 lg:grid-cols-3">
        {PLANS.map((plan, i) => (
          <Reveal key={plan.name} delay={i * 90} className="h-full">
            <div
              className={cn(
                "relative flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 ease-premium",
                plan.featured
                  ? "edge-glow border-accent/60 bg-bg-2 shadow-glow-lg lg:z-10 lg:scale-[1.05]"
                  : "border-border bg-bg-2/80 shadow-card will-change-transform hover:-translate-y-1 hover:border-border-2 hover:shadow-card-hover"
              )}
            >
              {plan.featured && (
                <>
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent px-3 py-1 font-mono text-[10.5px] font-bold uppercase tracking-wider text-black shadow-glow">
                    Paling Populer
                  </span>
                  <div
                    className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-accent/5 blur-xl"
                    aria-hidden
                  />
                </>
              )}

              <h3 className="text-[18px] font-bold text-fg">{plan.name}</h3>
              <p className="mt-1 text-[13px] text-fg-muted">{plan.desc}</p>

              <div className="mt-5">
                {yearly && (
                  <span className="block text-[13px] font-medium tabular-nums text-fg-subtle line-through">
                    {plan.priceMonthly}
                  </span>
                )}
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display text-4xl font-extrabold tabular-nums tracking-tightest text-fg">
                    {yearly ? plan.priceYearly : plan.priceMonthly}
                  </span>
                  <span className="text-[13px] text-fg-muted">/ bulan</span>
                </div>
                {yearly && (
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <span className="text-xs text-fg-subtle">
                      dibayar {plan.priceYearlyTotal}/tahun
                    </span>
                    <span className="rounded-full bg-accent/15 px-2 py-0.5 font-mono text-[10px] font-bold text-accent">
                      Hemat {plan.priceYearlySave}/tahun
                    </span>
                  </div>
                )}
              </div>
              <p className="mt-2 border-b border-border pb-5 font-mono text-xs text-fg-subtle">
                {plan.setup}
              </p>

              <ul className="my-6 flex flex-1 flex-col gap-3">
                {plan.features.map((f) => (
                  <li
                    key={f.label}
                    className={cn(
                      "flex items-start gap-2.5 text-[13.5px]",
                      f.included ? "text-fg/85" : "text-fg-subtle"
                    )}
                  >
                    {f.included ? (
                      <Check
                        size={16}
                        strokeWidth={3}
                        className="mt-0.5 shrink-0 text-accent"
                      />
                    ) : (
                      <X
                        size={16}
                        strokeWidth={2.5}
                        className="mt-0.5 shrink-0 text-fg-subtle/60"
                      />
                    )}
                    {f.label}
                  </li>
                ))}
              </ul>

              <a
                href={waLink(plan.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClass({
                  variant: plan.featured ? "primary" : "ghost",
                  full: true,
                })}
              >
                {plan.cta}
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}
