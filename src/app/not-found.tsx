import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { buttonClass } from "@/components/ui/Button";
import { waLink, WA_MESSAGES } from "@/lib/constants";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-bg">
      <Container className="flex flex-col items-center gap-5 py-20 text-center">
        <Link href="/" aria-label="Nexflow beranda">
          <Logo priority />
        </Link>
        <p className="font-display text-[clamp(4rem,14vw,7rem)] font-extrabold leading-none tracking-tightest text-gradient">
          404
        </p>
        <h1 className="text-[22px] font-bold text-fg">
          Halaman tidak ditemukan
        </h1>
        <p className="max-w-sm text-pretty text-[14px] leading-relaxed text-fg-muted">
          Sepertinya halaman yang kamu cari sudah pindah atau tidak ada. Yuk
          kembali ke beranda.
        </p>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className={buttonClass({ variant: "primary", size: "lg" })}
          >
            Kembali ke Beranda
          </Link>
          <a
            href={waLink(WA_MESSAGES.consult)}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass({ variant: "ghost", size: "lg" })}
          >
            Chat WhatsApp
          </a>
        </div>
      </Container>
    </main>
  );
}
