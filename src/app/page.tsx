import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProblemsSection from "@/components/sections/ProblemsSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import DashboardPreviewSection from "@/components/sections/DashboardPreviewSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PricingSection from "@/components/sections/PricingSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProblemsSection />
        <FeaturesSection />
        <DashboardPreviewSection />
        <BenefitsSection />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
