import dynamic from "next/dynamic";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SiteFooter } from "@/components/sections/SiteFooter";

const PainPointsSection = dynamic(() => import("@/components/sections/PainPointsSection").then((m) => m.PainPointsSection));
const DifferentiatorsSection = dynamic(() => import("@/components/sections/DifferentiatorsSection").then((m) => m.DifferentiatorsSection));
const ProofSection = dynamic(() => import("@/components/sections/ProofSection").then((m) => m.ProofSection));
const CasesSection = dynamic(() => import("@/components/sections/CasesSection").then((m) => m.CasesSection));
const ProcessSection = dynamic(() => import("@/components/sections/ProcessSection").then((m) => m.ProcessSection));
const FinalCtaSection = dynamic(() => import("@/components/sections/FinalCtaSection").then((m) => m.FinalCtaSection));

export default function Page() {
  return (
    <main>
      <HeroSection />
      <PainPointsSection />
      <DifferentiatorsSection />
      <ServicesSection />
      <ProofSection />
      <CasesSection />
      <ProcessSection />
      <FinalCtaSection />
      <SiteFooter />
    </main>
  );
}
