import { useEffect, useRef, useState } from "react";
import { Globe, TrendingUp, Shield } from "lucide-react";
import abstract3d from "@/assets/abstract-3d.jpg";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Operating across UAE, Singapore, and Switzerland with strategic partnerships worldwide",
    },
    {
      icon: TrendingUp,
      title: "Market Excellence",
      description: "Specialized in physical commodities, downstream oil, and strategic asset investments",
    },
    {
      icon: Shield,
      title: "Trust & Integrity",
      description: "Built on decades of experience and unwavering commitment to ethical trading practices",
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className={isVisible ? "animate-slide-in-left" : "opacity-0"}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-primary">Leading the Future</span>
              <br />
              <span className="text-accent">of Commodity Trading</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              MontFort stands at the forefront of global commodity trading, combining traditional market
              expertise with innovative investment strategies. Our presence spans three continents, enabling
              us to deliver exceptional value to our partners and clients.
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 bg-card/50 border border-border hover:bg-card transition-colors duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className={isVisible ? "animate-slide-in-right" : "opacity-0"}>
            <div className="relative">
              <img
                src={abstract3d}
                alt="Abstract 3D representation of global trading"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent mix-blend-overlay" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
