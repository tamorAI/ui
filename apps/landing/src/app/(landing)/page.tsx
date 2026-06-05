import { Hero } from "@/components/landing/hero";
import { EnforcementTerminal } from "@/components/landing/enforcement-terminal";
import { GridDivider } from "@/components/landing/grid-divider";
import { FeaturesSection } from "@/components/landing/features-section";
import { TrajectoryIntelligence } from "@/components/landing/trajectory-intelligence";
import { CtaSection } from "@/components/landing/cta-section";

export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Hero />
      <EnforcementTerminal />
      <GridDivider />
      <FeaturesSection />
      <GridDivider />
      <TrajectoryIntelligence />
      <GridDivider />
      <CtaSection />
    </main>
  );
}
