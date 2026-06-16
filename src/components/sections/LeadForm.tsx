"use client";

import { useActionState, useEffect } from "react";
import { Check } from "lucide-react";
import { submitLead, type LeadState } from "@/lib/actions";
import { buttonClass } from "@/components/ui/Button";
import { waLink, WA_MESSAGES } from "@/lib/constants";
import { track, pixelStandard } from "@/lib/analytics";

const INITIAL: LeadState = { status: "idle" };

const field =
  "w-full rounded-xl border border-border bg-bg-2/70 px-4 py-3 text-[14px] text-fg placeholder:text-fg-subtle outline-none transition-colors duration-200 focus:border-accent/60 focus:bg-bg-2";
const label = "mb-1.5 block text-[12.5px] font-medium text-fg-muted";

export function LeadForm() {
  const [state, formAction, pending] = useActionState(submitLead, INITIAL);

  useEffect(() => {
    if (state.status === "success") {
      track("lead_submit");
      pixelStandard("Lead");
    }
  }, [state.status]);

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 py-6 text-center">
        <div className="grid h-14 w-14 place-items-center rounded-2xl border border-accent/30 bg-accent/10 text-accent">
          <Check size={26} strokeWidth={3} />
        </div>
        <h3 className="text-[20px] font-bold text-fg">
          Terima kasih{state.nama ? `, ${state.nama}` : ""}! 🎉
        </h3>
        <p className="max-w-sm text-[14px] leading-relaxed text-fg-muted">
          Permintaan demo kamu sudah masuk. Tim kami akan menghubungi via
          WhatsApp dalam beberapa jam ke depan.
        </p>
        <a
          href={waLink(WA_MESSAGES.consult)}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClass({ variant: "primary" })}
        >
          Chat WhatsApp Sekarang
        </a>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-4">
      {/* Honeypot — hidden from humans, catches bots. */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="lead-nama" className={label}>
            Nama <span className="text-accent">*</span>
          </label>
          <input
            id="lead-nama"
            name="nama"
            required
            autoComplete="name"
            placeholder="Nama kamu"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="lead-usaha" className={label}>
            Nama Usaha
          </label>
          <input
            id="lead-usaha"
            name="usaha"
            autoComplete="organization"
            placeholder="mis. Toko Maju Jaya"
            className={field}
          />
        </div>
      </div>

      <div>
        <label htmlFor="lead-wa" className={label}>
          Nomor WhatsApp <span className="text-accent">*</span>
        </label>
        <input
          id="lead-wa"
          name="wa"
          required
          inputMode="tel"
          autoComplete="tel"
          placeholder="08xxxxxxxxxx"
          className={field}
        />
      </div>

      <div>
        <label htmlFor="lead-pesan" className={label}>
          Pesan <span className="text-fg-subtle">(opsional)</span>
        </label>
        <textarea
          id="lead-pesan"
          name="pesan"
          rows={3}
          placeholder="Ceritakan singkat kebutuhan bisnismu…"
          className={`${field} resize-none`}
        />
      </div>

      {state.status === "error" && (
        <p
          role="alert"
          className="rounded-lg border border-[#ef4444]/30 bg-[#ef4444]/10 px-3 py-2 text-[13px] text-[#f87171]"
        >
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className={buttonClass({ variant: "primary", size: "lg", full: true })}
      >
        {pending ? "Mengirim…" : "Kirim & Minta Demo Gratis"}
      </button>

      <p className="text-center text-[12px] text-fg-subtle">
        Gratis, tanpa komitmen. Kami balas via WhatsApp.
      </p>
    </form>
  );
}
