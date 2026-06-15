import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan — Nexflow",
  description:
    "Syarat penggunaan layanan otomatisasi WhatsApp Nexflow untuk UMKM.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Syarat & Ketentuan"
      updated="15 Juni 2026"
      intro="Dengan menggunakan layanan Nexflow, kamu menyetujui syarat dan ketentuan berikut."
      sections={[
        {
          heading: "Layanan",
          body: [
            "Nexflow menyediakan layanan AI WhatsApp Assistant dan otomatisasi terkait untuk UMKM. Cakupan fitur mengikuti paket yang kamu pilih.",
          ],
        },
        {
          heading: "Langganan & Pembayaran",
          body: [
            "Layanan ditagih bulanan atau tahunan sesuai paket. Biaya setup (jika ada) ditagih sekali di awal.",
            "Harga dapat berubah; pelanggan aktif akan diberi tahu sebelum perubahan berlaku.",
          ],
        },
        {
          heading: "Masa Coba Gratis",
          body: [
            "Semua paket bisa dicoba gratis selama 7 hari tanpa perlu kartu kredit. Kamu bebas berhenti sebelum masa coba berakhir tanpa biaya.",
          ],
        },
        {
          heading: "Pembatalan",
          body: [
            "Tidak ada kontrak jangka panjang. Kamu dapat membatalkan kapan saja dengan pemberitahuan 30 hari sebelumnya.",
          ],
        },
        {
          heading: "Batasan Tanggung Jawab",
          body: [
            "Nexflow berupaya menjaga layanan berjalan andal, namun tidak bertanggung jawab atas kerugian tidak langsung yang timbul dari gangguan layanan pihak ketiga (mis. WhatsApp atau platform marketplace).",
          ],
        },
        {
          heading: "Kontak",
          body: [
            "Pertanyaan tentang syarat ini? Hubungi nexflow.hq@gmail.com atau via WhatsApp.",
          ],
        },
      ]}
    />
  );
}
