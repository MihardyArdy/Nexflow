"use client";

import { useEffect, useId, useRef, useState } from "react";
import { track } from "@/lib/analytics";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { buttonClass } from "@/components/ui/Button";
import { waLink, WA_MESSAGES } from "@/lib/constants";

const rupiah = (n: number) =>
  "Rp " + Math.round(n).toLocaleString("id-ID");

function Slider({
  label,
  value,
  min,
  max,
  step,
  suffix,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  suffix: string;
  onChange: (v: number) => void;
}) {
  const id = useId();
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between">
        <label htmlFor={id} className="text-[13px] font-medium text-fg-muted">
          {label}
        </label>
        <span className="font-mono text-[13px] font-semibold tabular-nums text-fg">
          {value.toLocaleString("id-ID")}
          <span className="ml-1 text-fg-subtle">{suffix}</span>
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-bg-4 accent-accent"
      />
    </div>
  );
}

export function RoiCalculator() {
  const [chats, setChats] = useState(40); // chats masuk / hari
  const [mins, setMins] = useState(4); // menit / balasan
  const [order, setOrder] = useState(120000); // rata-rata nilai order

  // Fire a single conversion event the first time the visitor adjusts a slider
  // (skip the initial mount so it only counts real interaction).
  const mounted = useRef(false);
  const fired = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    if (fired.current) return;
    fired.current = true;
    track("roi_used");
  }, [chats, mins, order]);

  // Hours saved/month: bot handles replies. ~26 working days.
  const hoursSaved = (chats * mins * 26) / 60;
  // Extra closing: assume bot recovers ~15% of leads that would've been missed,
  // and ~20% of those convert. Conservative, illustrative.
  const extraOrders = chats * 26 * 0.15 * 0.2;
  const extraRevenue = extraOrders * order;

  return (
    <Section id="roi">
      <Container>
        <SectionHeading
          eyebrow="Kalkulator ROI"
          title={
            <>
              Berapa yang Bisa Kamu{" "}
              <span className="font-instrument font-normal italic text-gradient">
                Hemat?
              </span>
            </>
          }
          desc="Geser sesuai kondisi bisnismu — lihat estimasi waktu & potensi tambahan penjualan dengan AI WhatsApp Assistant."
        />

        <div className="mx-auto grid max-w-4xl items-stretch gap-6 lg:grid-cols-2">
          <Reveal>
            <Card hover={false} className="flex h-full flex-col justify-center gap-6 bg-bg-3/60">
              <Slider
                label="Chat masuk per hari"
                value={chats}
                min={5}
                max={300}
                step={5}
                suffix="chat"
                onChange={setChats}
              />
              <Slider
                label="Menit per balasan (rata-rata)"
                value={mins}
                min={1}
                max={15}
                step={1}
                suffix="menit"
                onChange={setMins}
              />
              <Slider
                label="Rata-rata nilai order"
                value={order}
                min={20000}
                max={1000000}
                step={10000}
                suffix="Rp"
                onChange={setOrder}
              />
            </Card>
          </Reveal>

          <Reveal delay={80}>
            <Card
              hover={false}
              className="flex h-full flex-col justify-center gap-6 border-accent/25 bg-bg-2 text-center"
            >
              <div>
                <div className="font-display text-[clamp(2.4rem,7vw,3.4rem)] font-extrabold tabular-nums leading-none text-gradient">
                  ≈ {Math.round(hoursSaved).toLocaleString("id-ID")} jam
                </div>
                <p className="mt-2 text-[13px] text-fg-muted">
                  waktu hemat per bulan
                </p>
              </div>
              <div className="h-px bg-border" />
              <div>
                <div className="font-display text-[clamp(1.8rem,5vw,2.6rem)] font-extrabold tabular-nums leading-none text-fg">
                  + {rupiah(extraRevenue)}
                </div>
                <p className="mt-2 text-[13px] text-fg-muted">
                  potensi tambahan penjualan / bulan
                </p>
              </div>
              <a
                href={waLink(WA_MESSAGES.consult)}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClass({ variant: "primary", full: true })}
              >
                Wujudkan dengan Nexflow →
              </a>
              <p className="text-[11px] leading-relaxed text-fg-subtle">
                *Estimasi ilustratif berdasarkan input kamu, bukan jaminan hasil.
              </p>
            </Card>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
