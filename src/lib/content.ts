import type { LucideIcon } from "lucide-react";
import {
  MessageSquare,
  FileText,
  Boxes,
  Bot,
  ReceiptText,
  RefreshCcw,
  ShieldCheck,
  Zap,
  Headset,
  TrendingUp,
} from "lucide-react";
import { WA_MESSAGES } from "./constants";

/* ----------------------------- Navigation ----------------------------- */
export const NAV_LINKS = [
  { label: "Masalah", href: "#masalah" },
  { label: "Layanan", href: "#layanan" },
  { label: "Cara Kerja", href: "#cara" },
  { label: "Harga", href: "#harga" },
  { label: "Testimoni", href: "#testi" },
  { label: "FAQ", href: "#faq" },
] as const;

/* ------------------------------- Hero --------------------------------- */
export interface ChatMessage {
  side: "in" | "out";
  text: string;
}

export const HERO_CHAT: ChatMessage[] = [
  { side: "in", text: "Halo! Saya mau order 2 kaos polos putih size M 🙏" },
  { side: "out", text: "Halo kak! Stok tersedia ✅ Total: Rp120.000. Lanjut bayar?" },
  { side: "in", text: "Iya lanjut, transfer BCA ya" },
  { side: "out", text: "Invoice sudah dikirim 🧾 BCA 1234567890 a/n Toko Nexflow." },
];

/* ------------------------------ Brands -------------------------------- */
export const BRANDS = [
  "WhatsApp",
  "Tokopedia",
  "Shopee",
  "TikTok Shop",
  "Midtrans",
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
    icon: FileText,
    title: "Invoice & Pembukuan Berantakan",
    desc: "Invoice manual di Word, catat di buku, rekap di Excel. Salah hitung, lupa tagih, arus kas tak terpantau.",
  },
  {
    icon: Boxes,
    title: "Stok Tidak Sinkron",
    desc: "Jual di 3 marketplace tapi stok diupdate manual. Overselling terjadi, pelanggan kecewa, reputasi turun.",
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
    desc: "Bot cerdas yang membalas pesan pelanggan 24/7, memproses order, dan mengirim konfirmasi otomatis.",
    features: [
      "Balas pesan dalam <3 detik",
      "Proses order & konfirmasi otomatis",
      "Integrasi multi-platform",
    ],
  },
  {
    num: "02",
    icon: ReceiptText,
    title: "Auto Billing & Invoice",
    desc: "Sistem penagihan otomatis yang membuat invoice profesional dan memantau pembayaran.",
    features: [
      "Invoice PDF otomatis terkirim",
      "Reminder pembayaran terjadwal",
      "Integrasi Midtrans & Xendit",
    ],
  },
  {
    num: "03",
    icon: RefreshCcw,
    title: "Smart Inventory Sync",
    desc: "Sinkronisasi stok real-time di semua platform jualan. Stok selalu akurat, tidak ada overselling.",
    features: [
      "Sync Tokopedia, Shopee, TikTok",
      "Alert stok menipis otomatis",
      "Update stok dalam <30 detik",
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
    desc: "Ekosistem lokal — Tokopedia, Shopee, WhatsApp, Midtrans sudah terintegrasi.",
  },
  {
    icon: Zap,
    title: "Setup Cepat, Tanpa Ribet",
    desc: "Live dalam 30 hari. Tidak perlu tim IT, tim Nexflow yang handle.",
  },
  {
    icon: Headset,
    title: "Support Responsif via WhatsApp",
    desc: "Chat langsung tim support kami. Respons dalam menit, bukan hari.",
  },
  {
    icon: TrendingUp,
    title: "Harga Terjangkau, ROI Jelas",
    desc: "Mulai Rp250.000/bulan — hemat 6+ jam kerja per hari.",
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
    desc: "Ceritakan kebutuhan bisnis Anda. Tim kami merancang solusi otomatisasi yang tepat sasaran.",
  },
  {
    num: "02",
    day: "Hari 2–14",
    title: "Setup & Integrasi",
    desc: "Kami setup sistem, integrasi platform, dan konfigurasi bot. Anda tidak perlu menyentuh kode.",
  },
  {
    num: "03",
    day: "Hari 15+",
    title: "Live & Pantau",
    desc: "Sistem berjalan otomatis 24/7. Anda cukup pantau dashboard dan fokus mengembangkan bisnis.",
  },
];

/* ---------------------------- Testimonials ---------------------------- */
export interface Testimonial {
  quote: string;
  initials: string;
  name: string;
  meta: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Dulu saya habiskan 5–6 jam sehari cuma buat balas WA dan buat invoice. Sekarang semua otomatis, saya bisa fokus ke produksi.",
    initials: "AR",
    name: "Arini Rahayu",
    meta: "Owner Toko Baju Arini · Bandung",
  },
  {
    quote:
      "Bot WhatsApp-nya luar biasa. Pelanggan kira masih dibalas manusia. Penjualan naik 40% dalam 2 bulan pertama!",
    initials: "BW",
    name: "Budi Wijaya",
    meta: "Owner Toko Elektronik BW · Jakarta",
  },
  {
    quote:
      "Stok dulu sering overselling karena jual di 3 marketplace. Sekarang sinkron real-time, tidak ada lagi komplain.",
    initials: "CS",
    name: "Citra Sari",
    meta: "Owner CS Beauty · Surabaya",
  },
  {
    quote:
      "Tim Nexflow sangat responsif dan profesional. Setup cepat, sistem berjalan mulus sejak hari pertama. Worth it.",
    initials: "DP",
    name: "Dian Pratama",
    meta: "CEO Warung Digital · Yogyakarta",
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
    priceMonthly: "Rp 250rb",
    priceYearly: "Rp 200rb",
    setup: "Setup Gratis",
    features: [
      { label: "Bot WhatsApp dasar", included: true },
      { label: "500 auto-reply / bulan", included: true },
      { label: "50 invoice / bulan", included: true },
      { label: "1 platform marketplace", included: true },
      { label: "Support email", included: true },
      { label: "Sinkronisasi stok", included: false },
      { label: "Custom workflow", included: false },
    ],
    cta: "Mulai Starter →",
    waMessage: WA_MESSAGES.starter,
    featured: false,
  },
  {
    name: "Standard",
    desc: "Pilihan tepat untuk bisnis yang ingin scaling.",
    priceMonthly: "Rp 600rb",
    priceYearly: "Rp 480rb",
    setup: "Setup Rp 500.000",
    features: [
      { label: "WhatsApp + AI Assistant", included: true },
      { label: "Unlimited auto-reply", included: true },
      { label: "500 invoice / bulan", included: true },
      { label: "2 channel marketplace", included: true },
      { label: "Support WA prioritas", included: true },
      { label: "Sinkronisasi stok real-time", included: true },
      { label: "Custom workflow", included: false },
    ],
    cta: "Mulai Standard →",
    waMessage: WA_MESSAGES.standard,
    featured: true,
  },
  {
    name: "Premium",
    desc: "Solusi lengkap untuk operasional kompleks.",
    priceMonthly: "Rp 1,2jt",
    priceYearly: "Rp 960rb",
    setup: "Setup Rp 1.000.000",
    features: [
      { label: "Semua fitur Standard", included: true },
      { label: "Unlimited invoice", included: true },
      { label: "Multi-marketplace", included: true },
      { label: "Custom workflow", included: true },
      { label: "Dedicated account manager", included: true },
      { label: "SLA respons 1 jam", included: true },
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
  { feature: "Bot WhatsApp", values: ["Dasar", "AI Assistant", "AI Assistant"] },
  { feature: "Auto-reply", values: ["500 / bulan", "Unlimited", "Unlimited"] },
  { feature: "Invoice", values: ["50 / bulan", "500 / bulan", "Unlimited"] },
  { feature: "Marketplace", values: ["1 platform", "2 channel", "Multi-marketplace"] },
  { feature: "Sinkronisasi stok real-time", values: [false, true, true] },
  { feature: "Custom workflow", values: [false, false, true] },
  { feature: "Support", values: ["Email", "WA prioritas", "WA prioritas"] },
  { feature: "Dedicated account manager", values: [false, false, true] },
  { feature: "SLA respons 1 jam", values: [false, false, true] },
  { feature: "Biaya setup", values: ["Gratis", "Rp 500.000", "Rp 1.000.000"] },
];

/* -------------------------------- FAQ --------------------------------- */
export interface Faq {
  q: string;
  a: string;
}

export const FAQS: Faq[] = [
  {
    q: "Apakah saya perlu paham teknologi untuk pakai Nexflow?",
    a: "Tidak. Tim kami yang setup, training, dan handle integrasi. Anda hanya perlu cerita kebutuhan bisnis.",
  },
  {
    q: "Berapa lama proses setup hingga sistem aktif?",
    a: "Rata-rata 14 hari kerja, tergantung kompleksitas integrasi. Paket Premium dengan custom workflow bisa sampai 30 hari.",
  },
  {
    q: "Platform apa saja yang bisa diintegrasikan?",
    a: "WhatsApp Business, Tokopedia, Shopee, TikTok Shop, Midtrans, Xendit, Google Sheets, Moka POS, Jurnal, dan banyak lainnya.",
  },
  {
    q: "Apakah bot WhatsApp terlihat seperti manusia?",
    a: "Ya, AI dilatih dengan gaya bahasa bisnis Anda. Untuk pertanyaan kompleks, bot bisa otomatis eskalasi ke Anda.",
  },
  {
    q: "Bagaimana jika saya ingin berhenti berlangganan?",
    a: "Tidak ada kontrak jangka panjang. Cancel kapan saja dengan pemberitahuan 30 hari. Data Anda dikembalikan dalam format yang bisa digunakan.",
  },
  {
    q: "Apakah data bisnis saya aman?",
    a: "Data dienkripsi standar AES-256, server di Indonesia, tidak pernah dijual atau dibagikan ke pihak ketiga.",
  },
  {
    q: "Apakah ada masa percobaan gratis?",
    a: "Konsultasi gratis dan demo sistem 14 hari untuk semua paket. Hubungi via WhatsApp untuk mulai.",
  },
];

/* ------------------------------ Footer -------------------------------- */
export const FOOTER_COLUMNS = [
  {
    title: "Layanan",
    links: [
      { label: "AI WhatsApp Bot", href: "#layanan" },
      { label: "Auto Invoice", href: "#layanan" },
      { label: "Inventory Sync", href: "#layanan" },
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
