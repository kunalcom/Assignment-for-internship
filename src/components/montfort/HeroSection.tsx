import { useEffect, useRef } from "react";
import heroImage from "@/assets/hero-commodities.jpg";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        const parallax = scrolled * 0.5;
        heroRef.current.style.transform = `translateY(${parallax}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        ref={heroRef}
        className="absolute inset-0 w-full h-[120%] bg-cover bg-center transition-transform duration-75"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4">
        <div className="text-center max-w-5xl animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            <span className="block text-primary">Global Commodity</span>
            <span className="block text-accent text-shadow-glow">Trading Excellence</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Connecting markets worldwide through strategic commodity trading and asset investment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#about"
              className="px-8 py-4 bg-accent text-accent-foreground font-medium uppercase tracking-wider hover:bg-accent/90 transition-all duration-300 hover:scale-105"
            >
              Discover More
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-primary text-primary font-medium uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-fade-in-up" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
