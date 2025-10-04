import Header from "@/components/montfort/Header";
import HeroSection from "@/components/montfort/HeroSection";
import AboutSection from "@/components/montfort/AboutSection";
import TradingSection from "@/components/montfort/TradingSection";
import InvestmentsSection from "@/components/montfort/InvestmentsSection";
import SustainabilitySection from "@/components/montfort/SustainabilitySection";
import ContactSection from "@/components/montfort/ContactSection";
import Footer from "@/components/montfort/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TradingSection />
        <InvestmentsSection />
        <SustainabilitySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
