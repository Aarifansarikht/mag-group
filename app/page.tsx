export const dynamic = "force-static";
import AboutSection from "@/components/sections/AboutSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import USPSection from "@/components/sections/USPSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import PartnersSection from "@/components/sections/PartnersSection";
import HeroSection from "@/components/sections/HeroSection";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-brand-950 transition-colors">
      <main className="flex-grow pt-20">
        {/* HERO SECTION WITH SLIDER */}
        <HeroSection />
        {/* ABOUT US SECTION */}
        <AboutSection />
        {/* DRAINAGE SOLUTIONS GRID */}
        <SolutionsSection />
        {/* SERVICES SECTION */}
        <ServicesSection />
        {/* USP / DIFFERENTIATOR SECTION */}
        <USPSection />
        {/* FAQ SECTION */}
        <FAQSection />
        {/* CONTACT US FORM SECTION */}
        <ContactSection />
        {/* STRATEGIC PARTNERS SLIDER */}
        <PartnersSection />
      </main>
    </div>
  );
}
