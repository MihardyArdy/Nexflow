import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PricingPlans } from "./PricingPlans";
import { PricingTable } from "./PricingTable";

export function Pricing() {
  return (
    <Section id="harga">
      <Container>
        <SectionHeading
          eyebrow="Harga Transparan"
          title="Pilih Paket yang Cocok"
          desc="Mulai dari Rp 199rb/bulan — coba gratis 30 hari, tidak perlu kartu kredit."
        />
        <PricingPlans />
        <PricingTable />
        <Reveal className="mt-8">
          <p className="text-center text-[13px] text-fg-subtle">
            Semua harga belum termasuk PPN. Tidak ada kontrak jangka panjang.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
