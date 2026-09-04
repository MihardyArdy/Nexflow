import { ScrollProgress } from "@/components/ScrollProgress";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema, serviceSchema } from "@/lib/jsonld";
import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Brands } from "@/components/sections/Brands";
import { Problems } from "@/components/sections/Problems";
import { Services } from "@/components/sections/Services";
import { Pipeline } from "@/components/sections/Pipeline";
import { Advantages } from "@/components/sections/Advantages";
import { Comparison } from "@/components/sections/Comparison";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { RoiCalculator } from "@/components/sections/RoiCalculator";
import { Pricing } from "@/components/sections/Pricing";
import { Guarantee } from "@/components/sections/Guarantee";
import { FAQ } from "@/components/sections/FAQ";
import { LeadSection } from "@/components/sections/LeadSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={serviceSchema} />
      <ScrollProgress />
      <Nav />
      <main id="top">
        <Hero />
        <Stats />
        <Brands />
        <Problems />
        <Services />
        <Pipeline />
        <Advantages />
        <Comparison />
        <HowItWorks />
        <Testimonials />
        <RoiCalculator />
        <Pricing />
        <Guarantee />
        <FAQ />
        <LeadSection />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
