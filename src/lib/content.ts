import type { LucideIcon } from "lucide-react";
import {
  MessageSquare,
  UserX,
  EyeOff,
  Bot,
  Target,
  Sunrise,
  ShieldCheck,
  Zap,
  Headset,
  TrendingUp,
  Lock,
  Rocket,
  Handshake,
  Brain,
  Send,
  BellRing,
  FileText,
  Sparkles,
  CreditCard,
  Wrench,
  LogOut,
} from "lucide-react";
import { WA_MESSAGES } from "./constants";

/* ------------------------------- Stats -------------------------------- */
/** Capability numbers — factually true (what the system can do), not
 *  customer-result claims. Safe to show pre-launch. */
export interface Stat {
  value: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: "24/7", label: "Operasi nonstop" },
  { value: "<3 dtk", label: "Waktu respons bot" },
  { value: "8+", label: "Platform terintegrasi" },
  { value: "7 hari", label: "Coba gratis" },
];

/* --------------------------- Founding client -------------------------- */
/** Perks for the honest "be our first client" reframe of the proof section. */
export interface FoundingPerk {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const FOUNDING_PERKS: FoundingPerk[] = [
  {
    icon: Lock,
    title: "Harga early-bird terkunci",
    desc: "Tarif khusus klien pertama, terkunci selamanya — tidak ikut naik saat harga publik naik.",
  },
  {
    icon: Rocket,
    title: "Prioritas setup & onboarding",
    desc: "Antrian setup paling depan. Sistem kamu kami bangun dan live duluan.",
  },
  {
    icon: Handshake,
    title: "Akses langsung ke founder",
    desc: "Bukan tiket support. Kamu ngobrol langsung dengan tim yang membangun Nexflow.",
  },
];

/* ----------------------------- Navigation ----------------------------- */
// Order must match the on-page section order (Testimoni renders before Harga),
// so scroll-spy highlights and anchor jumps stay in sequence.
export const NAV_LINKS = [
  { label: "Masalah", href: "#masalah" },
  { label: "Layanan", href: "#layanan" },
  { label: "Cara Kerja", href: "#cara" },
  { label: "Testimoni", href: "#testi" },
  { label: "Harga", href: "#harga" },
  { label: "FAQ", href: "#faq" },
  { label: "Demo", href: "#demo" },
] as const;

/* ------------------------------- Hero --------------------------------- */
export interface ChatMessage {
  side: "in" | "out";
  text: string;
}

export const HERO_CHAT: ChatMessage[] = [
  { side: "in", text: "Halo! Saya mau order 2 kaos polos putih size M 🙏" },
  { side: "out", text: "Halo kak! Barangnya ready ✅ Total: Rp120.000. Lanjut bayar?" },
  { side: "in", text: "Iya lanjut, transfer BCA ya" },
  { side: "out", text: "Siap, pembayaran dikonfirmasi 🎉 BCA 1234567890 a/n Toko Nexflow." },
];

/* ------------------------------ Brands -------------------------------- */
export const BRANDS = [
  "WhatsApp",
  "Tokopedia",
  "Shopee",
  "TikTok Shop",
  "Xendit",
  "Google Sheets",
  "Moka POS",
  "Jurnal",
] as const;

/* ------------------------------ Problems ------------------------------ */
export interface Problem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const PROBLEMS: Problem[] = [
  {
    icon: MessageSquare,
    title: "Balas Chat Manual Seharian",
    desc: "Ratusan pesan dari WhatsApp, Shopee, Tokopedia dibalas satu per satu. Waktu habis, pelanggan menunggu.",
  },
  {
    icon: UserX,
    title: "Prospek Masuk Tapi Hilang",
    desc: "Calon pembeli tanya-tanya lalu menghilang. Tak ada yang menilai mana lead serius dan menindaklanjutinya — closing pun bocor.",
  },
  {
    icon: EyeOff,
    title: "Buta Performa Bisnis Harian",
    desc: "Berapa order hari ini? Berapa lead baru? Tanpa rekap manual yang melelahkan, kamu tak pernah benar-benar tahu.",
  },
];

/* ------------------------------ Services ------------------------------ */
export interface Service {
  num: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  features: string[];
}

export const SERVICES: Service[] = [
  {
    num: "01",
    icon: Bot,
    title: "AI WhatsApp Assistant",
    desc: "Bot AI yang membalas pesan pelanggan 24/7 dengan respons natural, memproses order, mengecek ketersediaan, dan mengirim konfirmasi — semua tanpa kamu harus online.",
    features: [
      "Balas pesan dalam <3 detik, 24/7",
      "Proses order & konfirmasi otomatis",
      "Deteksi intent pelanggan (beli, tanya, komplain)",
      "Eskalasi otomatis ke owner untuk kasus kompleks",
    ],
  },
  {
    num: "02",
    icon: Target,
    title: "Lead Grading & Follow-up",
    desc: "Bot otomatis menilai setiap prospek yang masuk — mana yang serius beli, mana yang masih ragu. Follow-up terjadwal dikirim otomatis sampai deal closed.",
    features: [
      "Auto-grade leads berdasarkan respons",
      "Notifikasi lead panas langsung ke owner",
      "Follow-up terjadwal otomatis sampai closing",
      "Tidak ada lead panas yang terlewat",
    ],
  },
  {
    num: "03",
    icon: Sunrise,
    title: "Daily Business Briefing",
    desc: "Setiap pagi, laporan bisnis langsung masuk ke WhatsApp kamu — ringkasan order, lead baru, follow-up pending, dan performa bot kemarin.",
    features: [
      "Laporan order harian otomatis",
      "Alert lead baru & follow-up pending",
      "Performa bot real-time",
      "Dikirim langsung ke WhatsApp owner",
    ],
  },
];

/* ----------------------------- Advantages ----------------------------- */
export interface Advantage {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const ADVANTAGES: Advantage[] = [
  {
    icon: ShieldCheck,
    title: "Dibuat untuk UMKM Indonesia",
    desc: "Dirancang khusus untuk UMKM Indonesia — terhubung langsung dengan WhatsApp, Tokopedia, dan Shopee yang sudah kamu pakai.",
  },
  {
    icon: Zap,
    title: "Setup Cepat, Tanpa Ribet",
    desc: "Live dalam 1-3 hari kerja. Tidak perlu tim IT — kami yang setup semuanya dari awal sampai jalan.",
  },
  {
    icon: Headset,
    title: "Support Responsif via WhatsApp",
    desc: "Chat langsung tim support kami. Respons dalam menit, bukan hari.",
  },
  {
    icon: TrendingUp,
    title: "Harga Terjangkau, ROI Jelas",
    desc: "Mulai Rp199.000/bulan — hemat 6+ jam kerja per hari. Coba gratis 7 hari, tidak perlu kartu kredit.",
  },
];

/* ----------------------------- How it works --------------------------- */
export interface Step {
  num: string;
  day: string;
  title: string;
  desc: string;
}

export const STEPS: Step[] = [
  {
    num: "01",
    day: "Hari 1",
    title: "Konsultasi Gratis",
    desc: "Ceritakan kebutuhan bisnis kamu. Tim kami merancang solusi otomatisasi yang tepat sasaran.",
  },
  {
    num: "02",
    day: "Hari 2–3",
    title: "Setup & Integrasi",
    desc: "Kami setup sistem, integrasi platform, dan konfigurasi bot. Kamu tidak perlu menyentuh kode.",
  },
  {
    num: "03",
    day: "Hari 4+",
    title: "Live & Pantau",
    desc: "Sistem berjalan otomatis 24/7. Kamu cukup pantau laporan di WhatsApp dan fokus mengembangkan bisnis.",
  },
];


/* ------------------------------ Pricing ------------------------------- */
export interface PlanFeature {
  label: string;
  included: boolean;
}

export interface Plan {
  name: string;
  desc: string;
  priceMonthly: string;
  priceYearly: string;
  /** Total billed once per year in yearly mode, e.g. "Rp 1.908.000". */
  priceYearlyTotal: string;
  /** Annual saving vs paying monthly, e.g. "Rp 480.000". */
  priceYearlySave: string;
  setup: string;
  features: PlanFeature[];
  cta: string;
  waMessage: string;
  featured: boolean;
}

export const PLANS: Plan[] = [
  {
    name: "Starter",
    desc: "Untuk UMKM yang baru mulai otomatisasi.",
    priceMonthly: "Rp 199rb",
    priceYearly: "Rp 159rb",
    priceYearlyTotal: "Rp 1.908.000",
    priceYearlySave: "Rp 480.000",
    setup: "Setup Gratis",
    features: [
      { label: "AI WhatsApp Assistant (dasar)", included: true },
      { label: "Unlimited auto-reply 24/7", included: true },
      { label: "1 nomor WhatsApp Business", included: true },
      { label: "Support WA prioritas", included: true },
      { label: "Coba gratis 7 hari", included: true },
      { label: "Deteksi & notif lead panas", included: false },
      { label: "Daily business briefing", included: false },
      { label: "Custom workflow", included: false },
    ],
    cta: "Mulai Starter →",
    waMessage: WA_MESSAGES.starter,
    featured: false,
  },
  {
    name: "Standard",
    desc: "Pilihan tepat untuk bisnis yang ingin scaling.",
    priceMonthly: "Rp 499rb",
    priceYearly: "Rp 399rb",
    priceYearlyTotal: "Rp 4.788.000",
    priceYearlySave: "Rp 1.200.000",
    setup: "Setup Rp 299.000",
    features: [
      { label: "AI WhatsApp Assistant (full)", included: true },
      { label: "Unlimited percakapan", included: true },
      { label: "Deteksi & notif lead panas ke owner", included: true },
      { label: "Daily business briefing ke owner", included: true },
      { label: "1 nomor WhatsApp Business", included: true },
      { label: "Support WA prioritas", included: true },
      { label: "Coba gratis 7 hari", included: true },
      { label: "Custom workflow", included: false },
    ],
    cta: "Mulai Standard →",
    waMessage: WA_MESSAGES.standard,
    featured: true,
  },
  {
    name: "Premium",
    desc: "Solusi lengkap untuk operasional kompleks.",
    priceMonthly: "Rp 999rb",
    priceYearly: "Rp 799rb",
    priceYearlyTotal: "Rp 9.588.000",
    priceYearlySave: "Rp 2.400.000",
    setup: "Setup Rp 699.000",
    features: [
      { label: "Semua fitur Standard", included: true },
      { label: "Deteksi intent & eskalasi lanjutan", included: true },
      { label: "Multi-nomor WhatsApp Business", included: true },
      { label: "Custom workflow & integrasi", included: true },
      { label: "Dedicated account manager", included: true },
      { label: "Laporan mingguan lengkap", included: true },
      { label: "Monitoring komplain otomatis", included: true },
      { label: "Coba gratis 7 hari", included: true },
    ],
    cta: "Mulai Premium →",
    waMessage: WA_MESSAGES.premium,
    featured: false,
  },
];

/** Feature comparison matrix (derived from the tier data above). */
export interface ComparisonRow {
  feature: string;
  /** value per tier: string label, or boolean for check/cross */
  values: [string | boolean, string | boolean, string | boolean];
}

export const COMPARISON_TIERS = ["Starter", "Standard", "Premium"] as const;

export const COMPARISON_ROWS: ComparisonRow[] = [
  { feature: "AI WhatsApp Assistant", values: ["Dasar", "Full", "Full"] },
  { feature: "Percakapan / bulan", values: ["Unlimited", "Unlimited", "Unlimited"] },
  { feature: "Deteksi & notif lead panas", values: [false, true, true] },
  { feature: "Daily business briefing", values: [false, true, true] },
  { feature: "Nomor WhatsApp Business", values: ["1", "1", "Multi"] },
  { feature: "Deteksi intent & eskalasi", values: ["Dasar", "Standar", "Lanjutan"] },
  { feature: "Custom workflow", values: [false, false, true] },
  { feature: "Support", values: ["WA prioritas", "WA prioritas", "WA prioritas 24 jam"] },
  { feature: "Dedicated account manager", values: [false, false, true] },
  { feature: "Monitoring komplain otomatis", values: [false, false, true] },
  { feature: "Biaya setup", values: ["Gratis", "Rp 299.000", "Rp 699.000"] },
];

/* -------------------------------- FAQ --------------------------------- */
export interface Faq {
  q: string;
  a: string;
}

export const FAQS: Faq[] = [
  {
    q: "Apakah saya perlu paham teknologi untuk pakai Nexflow?",
    a: "Tidak. Tim kami yang setup, training, dan handle integrasi. Kamu hanya perlu cerita kebutuhan bisnis.",
  },
  {
    q: "Berapa lama proses setup hingga sistem aktif?",
    a: "Starter selesai dalam 1 hari kerja. Standard 2-3 hari kerja. Premium 5-7 hari kerja tergantung kompleksitas custom workflow yang diminta.",
  },
  {
    q: "Platform apa saja yang bisa diintegrasikan?",
    a: "WhatsApp Business, Tokopedia, Shopee, TikTok Shop, dan Google Sheets. Integrasi lainnya tersedia untuk paket Premium sesuai kebutuhan bisnis.",
  },
  {
    q: "Apakah bot WhatsApp terlihat seperti manusia?",
    a: "Ya, AI dilatih dengan gaya bahasa bisnis kamu. Untuk pertanyaan kompleks, bot bisa otomatis eskalasi ke kamu.",
  },
  {
    q: "Bagaimana jika saya ingin berhenti berlangganan?",
    a: "Tidak ada kontrak jangka panjang. Cancel kapan saja dengan pemberitahuan 30 hari. Data kamu dikembalikan dalam format yang bisa digunakan.",
  },
  {
    q: "Apakah data bisnis saya aman?",
    a: "Data percakapan kamu hanya digunakan untuk menjalankan sistem Nexflow dan tidak pernah dijual atau dibagikan ke pihak manapun. Kami menggunakan layanan cloud terpercaya dengan standar keamanan tinggi.",
  },
  {
    q: "Apakah ada masa percobaan gratis?",
    a: "Ya, semua paket bisa dicoba gratis selama 7 hari tanpa perlu bayar apapun. Hubungi kami via WhatsApp untuk mulai trial sekarang.",
  },
];

/* ------------------------------ Footer -------------------------------- */
export const FOOTER_COLUMNS = [
  {
    title: "Layanan",
    links: [
      { label: "AI WhatsApp Assistant", href: "#layanan" },
      { label: "Lead Grading & Follow-up", href: "#layanan" },
      { label: "Daily Business Briefing", href: "#layanan" },
    ],
  },
  {
    title: "Perusahaan",
    links: [
      { label: "Testimoni", href: "#testi" },
      { label: "Cara Kerja", href: "#cara" },
      { label: "FAQ", href: "#faq" },
    ],
  },
] as const;

/* --------------------------- Automation pipeline ---------------------- */
/** The message lifecycle, visualized as a scroll-told flow. */
export interface PipelineStage {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const PIPELINE_STAGES: PipelineStage[] = [
  {
    icon: MessageSquare,
    title: "Pesan masuk",
    desc: "Chat dari WhatsApp, Shopee, dan Tokopedia mengalir ke satu sistem.",
  },
  {
    icon: Brain,
    title: "AI paham maksudnya",
    desc: "Bot mengenali intent pelanggan: mau beli, sekadar tanya, atau komplain.",
  },
  {
    icon: Send,
    title: "Balas dalam <3 detik",
    desc: "Jawaban natural & relevan terkirim otomatis — 24 jam, tanpa libur.",
  },
  {
    icon: Target,
    title: "Lead dinilai otomatis",
    desc: "Prospek panas ter-grade dan diprioritaskan, yang dingin tetap di-follow up.",
  },
  {
    icon: BellRing,
    title: "Owner langsung dinotif",
    desc: "Lead panas dikabarkan ke kamu seketika supaya peluang closing tidak bocor.",
  },
  {
    icon: FileText,
    title: "Laporan tiap pagi",
    desc: "Ringkasan order, lead baru, dan performa bot masuk ke WhatsApp kamu.",
  },
];

/* ------------------------------ Comparison ---------------------------- */
export const COMPARE_COLS = ["Nexflow", "CS Manual", "Bot Biasa"] as const;

export interface CompareRow {
  feature: string;
  /** value per column: boolean = check/cross, string = label */
  values: [string | boolean, string | boolean, string | boolean];
}

export const COMPARE_ROWS: CompareRow[] = [
  { feature: "Balas 24/7 tanpa libur", values: [true, false, true] },
  { feature: "Respons di bawah 3 detik", values: [true, "Lambat", true] },
  { feature: "Paham bahasa natural", values: [true, true, false] },
  { feature: "Nilai & prioritas lead otomatis", values: [true, false, false] },
  { feature: "Laporan bisnis harian", values: [true, false, false] },
  { feature: "Tidak capek, sakit, atau resign", values: [true, false, true] },
  { feature: "Biaya per bulan", values: ["Mulai Rp199rb", "Rp 1–2 jt+", "Murah tapi kaku"] },
  { feature: "Disetup oleh tim untukmu", values: [true, "—", false] },
];

/* ------------------------------ Guarantee ----------------------------- */
export interface Guarantee {
  icon: LucideIcon;
  label: string;
}

export const GUARANTEES: Guarantee[] = [
  { icon: Sparkles, label: "Coba gratis 7 hari" },
  { icon: CreditCard, label: "Tanpa kartu kredit" },
  { icon: Wrench, label: "Setup oleh tim kami" },
  { icon: LogOut, label: "Berhenti kapan saja" },
];

/* ------------------------------- Founder ------------------------------ */
export const FOUNDER = {
  eyebrow: "Cerita Saya",
  title: "Kenapa Saya Bangun Nexflow",
  body: [
    "Nexflow saya bangun sendirian.",
    "Saya sering lihat usaha kecil kayak klinik, salon, catering, atau petshop kehilangan calon pelanggan cuma karena telat balas chat WhatsApp. Padahal orangnya udah niat beli, cuma nanya-nanya duluan.",
    "Saya bikin sistem yang jawab chat itu otomatis 24 jam, dengan bahasa yang gak kaku kayak chatbot kebanyakan.",
    "Karena masih saya kerjain sendiri, tiap klien saya setup dan pegang langsung sampai jalan.",
  ],
  signoff: "— Ard, founder Nexflow",
} as const;
