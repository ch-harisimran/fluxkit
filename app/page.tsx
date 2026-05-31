import { Hero } from "@/components/landing/hero";
import { StickyCtaBar } from "@/components/landing/sticky-cta-bar";
import { Problem } from "@/components/landing/problem";
import { WhyThisExists } from "@/components/landing/why-this-exists";
import { SolutionPreview } from "@/components/landing/solution-preview";
import { ProofPreview } from "@/components/landing/proof-preview";
import { Features } from "@/components/landing/features";
import { Comparison } from "@/components/landing/comparison";
import { Demo } from "@/components/landing/demo";
import { Pricing } from "@/components/landing/pricing";
import { SocialProof } from "@/components/landing/social-proof";
import { FinalCta } from "@/components/landing/final-cta";
import { Faq } from "@/components/landing/faq";
import { Footer } from "@/components/landing/footer";

export default function Page() {
  return (
    <main id="top" className="relative">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_24%)]" />
      <StickyCtaBar />
      <Hero />
      <Problem />
      <WhyThisExists />
      <SolutionPreview />
      <ProofPreview />
      <Features />
      <Comparison />
      <Demo />
      <Pricing />
      <SocialProof />
      <FinalCta />
      <Faq />
      <Footer />
    </main>
  );
}
