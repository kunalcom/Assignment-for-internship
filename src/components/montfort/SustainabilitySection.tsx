import { useEffect, useRef, useState } from "react";
import { Leaf, Recycle, Sun } from "lucide-react";

const SustainabilitySection = () => {
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

  const initiatives = [
    {
      icon: Leaf,
      title: "Environmental Stewardship",
      description: "Committed to reducing our carbon footprint and promoting sustainable practices across all operations",
    },
    {
      icon: Recycle,
      title: "Circular Economy",
      description: "Implementing innovative solutions to minimize waste and maximize resource efficiency",
    },
    {
      icon: Sun,
      title: "Clean Energy Investment",
      description: "Strategic focus on renewable energy projects and green technology partnerships",
    },
  ];

  return (
    <section
      id="sustainability"
      ref={sectionRef}
      className="py-24 lg:py-32 relative bg-gradient-to-br from-secondary/50 to-background"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className={isVisible ? "animate-fade-in-up" : "opacity-0"}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-primary">Sustainability &</span>
              <br />
              <span className="text-accent">Responsibility</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Building a sustainable future through responsible trading and investment practices
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                className="text-center p-8 bg-card/30 border border-border hover:bg-card/50 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                  <initiative.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{initiative.title}</h3>
                <p className="text-muted-foreground">{initiative.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-card/50 border border-border p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                Our Commitment to the Future
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We believe that sustainable business practices are not just good for the planet, but essential
                for long-term success. Our ESG framework guides every decision we make, ensuring that we
                create value for all stakeholders while protecting the environment for future generations.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4">
                  <div className="text-3xl font-bold text-accent mb-1">50%</div>
                  <div className="text-sm text-muted-foreground">Carbon Reduction Target</div>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-accent mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Ethical Sourcing</div>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-accent mb-1">25+</div>
                  <div className="text-sm text-muted-foreground">Green Projects</div>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-accent mb-1">2030</div>
                  <div className="text-sm text-muted-foreground">Net Zero Goal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
