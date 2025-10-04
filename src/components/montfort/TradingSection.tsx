import { useEffect, useRef, useState } from "react";
import globalTrade from "@/assets/global-trade.jpg";

const TradingSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const tradingCards = [
    {
      title: "Physical Commodities",
      items: ["Agricultural Products", "Metals & Mining", "Energy Resources"],
      color: "from-accent/20 to-accent/5",
    },
    {
      title: "Downstream Oil",
      items: ["Refined Petroleum", "Chemical Products", "Distribution Networks"],
      color: "from-primary/20 to-primary/5",
    },
    {
      title: "Small Commodities",
      items: ["Specialty Goods", "Niche Markets", "Regional Trading"],
      color: "from-accent/20 to-accent/5",
    },
  ];

  return (
    <section id="trading" ref={sectionRef} className="py-24 lg:py-32 relative bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className={isVisible ? "animate-fade-in-up" : "opacity-0"}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-primary">Our Trading</span>
              <br />
              <span className="text-accent">Expertise</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Comprehensive commodity trading solutions across multiple sectors and markets
            </p>
          </div>

          {/* Horizontal Scroll on Mobile, Grid on Desktop */}
          <div
            ref={scrollContainerRef}
            className="flex lg:grid lg:grid-cols-3 gap-6 overflow-x-auto lg:overflow-visible pb-8 lg:pb-0 snap-x snap-mandatory lg:snap-none scrollbar-hide"
          >
            {tradingCards.map((card, index) => (
              <div
                key={index}
                className={`min-w-[300px] lg:min-w-0 snap-center bg-gradient-to-br ${card.color} border border-border p-8 hover:scale-105 transition-transform duration-300`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="text-2xl font-bold text-primary mb-6">{card.title}</h3>
                <ul className="space-y-4">
                  {card.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Full Width Image */}
          <div className="mt-16 relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
            <img
              src={globalTrade}
              alt="Global trading operations"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Global Operations
              </h3>
              <p className="text-muted-foreground max-w-2xl">
                Strategically positioned across three continents to serve markets worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingSection;
