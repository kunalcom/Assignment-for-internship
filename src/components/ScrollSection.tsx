import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollSectionProps {
  title: string;
  description: string;
  index: number;
}

const ScrollSection = ({ title, description, index }: ScrollSectionProps) => {
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

  return (
    <div
      ref={sectionRef}
      className={cn(
        "min-h-screen flex items-center justify-center px-6 transition-all duration-1000",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      )}
    >
      <div className="max-w-4xl w-full">
        <div
          className={cn(
            "backdrop-blur-lg bg-card/30 border border-border/50 rounded-3xl p-12 shadow-2xl",
            "hover:scale-105 transition-transform duration-500"
          )}
          style={{
            boxShadow: "0 0 80px rgba(147, 51, 234, 0.15)",
          }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold"
              style={{
                background: "linear-gradient(135deg, hsl(263 70% 50%), hsl(280 80% 60%))",
              }}
            >
              {index}
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
          </div>
          
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            {title}
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScrollSection;
