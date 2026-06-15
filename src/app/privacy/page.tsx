import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "Kebijakan Privasi — Nexflow",
  description:
    "Bagaimana Nexflow mengumpulkan, menggunakan, dan melindungi data bisnis kamu.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Kebijakan Privasi"
      updated="15 Juni 2026"
      intro="Privasi data bisnis kamu adalah prioritas kami. Halaman ini menjelaskan data apa yang kami kumpulkan, untuk apa, dan bagaimana kami menjaganya."
      sections={[
        {
          heading: "Data yang Kami Kumpulkan",
          body: [
            "Kami mengumpulkan data yang kamu berikan saat mendaftar dan menggunakan layanan: nama bisnis, nomor WhatsApp, serta pesan dan percakapan yang diproses oleh sistem otomatisasi Nexflow.",
            "Kami tidak mengumpulkan data pribadi sensitif di luar yang dibutuhkan untuk menjalankan layanan.",
          ],
        },
        {
          heading: "Penggunaan Data",
          body: [
            "Data percakapan kamu hanya digunakan untuk menjalankan sistem Nexflow — membalas pesan, menilai prospek, dan menyusun laporan bisnis untukmu.",
            "Kami tidak pernah menjual atau membagikan data kamu ke pihak manapun untuk tujuan pemasaran.",
          ],
        },
        {
          heading: "Penyimpanan & Keamanan",
          body: [
            "Kami menggunakan layanan cloud terpercaya dengan standar keamanan tinggi. Akses ke data dibatasi hanya untuk tim yang menjalankan layanan kamu.",
          ],
        },
        {
          heading: "Hak Kamu",
          body: [
            "Kamu dapat meminta ekspor atau penghapusan data kapan saja. Setelah berhenti berlangganan, data kamu dikembalikan dalam format yang bisa digunakan, lalu dihapus dari sistem kami.",
          ],
        },
        {
          heading: "Kontak",
          body: [
            "Untuk pertanyaan terkait privasi, hubungi kami di nexflow.hq@gmail.com atau via WhatsApp.",
          ],
        },
      ]}
    />
  );
}
