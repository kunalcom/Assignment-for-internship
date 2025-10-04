import { useEffect, useRef, useState } from "react";
import { BarChart3, PieChart, Target } from "lucide-react";
import corporateBuilding from "@/assets/corporate-building.jpg";

const InvestmentsSection = () => {
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

  const stats = [
    { icon: BarChart3, value: "25+", label: "Years Experience" },
    { icon: PieChart, value: "3", label: "Continents" },
    { icon: Target, value: "100+", label: "Global Partners" },
  ];

  return (
    <section id="investments" ref={sectionRef} className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Image */}
          <div className={isVisible ? "animate-slide-in-left" : "opacity-0"}>
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
              <img
                src={corporateBuilding}
                alt="Corporate headquarters"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
            </div>
          </div>

          {/* Right Content */}
          <div className={isVisible ? "animate-slide-in-right" : "opacity-0"}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-primary">Strategic Asset</span>
              <br />
              <span className="text-accent">Investment</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Beyond trading, we identify and invest in high-value assets that align with our vision for
              sustainable growth and long-term value creation. Our investment strategy focuses on sectors
              with strong fundamentals and growth potential.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-card/50 border border-border hover:bg-card transition-colors duration-300"
                >
                  <stat.icon className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="border-l-2 border-accent pl-4">
                <h3 className="font-semibold text-primary mb-2">Diversified Portfolio</h3>
                <p className="text-sm text-muted-foreground">
                  Strategic investments across energy, infrastructure, and emerging technologies
                </p>
              </div>
              <div className="border-l-2 border-accent pl-4">
                <h3 className="font-semibold text-primary mb-2">Risk Management</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced analytics and market intelligence driving informed investment decisions
                </p>
              </div>
              <div className="border-l-2 border-accent pl-4">
                <h3 className="font-semibold text-primary mb-2">Long-term Value</h3>
                <p className="text-sm text-muted-foreground">
                  Focus on sustainable growth and partnerships that create lasting impact
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentsSection;
