import { HeroSection } from "@/components/sections/HeroSection";
import { AuthoritySection } from "@/components/sections/AuthoritySection";
import { ProblemsSection } from "@/components/sections/ProblemsSection";
import { MethodSection } from "@/components/sections/MethodSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AuthoritySection />
      <ProblemsSection />
      <MethodSection />
      <ServicesSection />
      <SocialProofSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
