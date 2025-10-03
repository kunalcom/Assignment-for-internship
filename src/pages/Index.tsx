import AnimatedBackground from "@/components/AnimatedBackground";
import ScrollSection from "@/components/ScrollSection";

const Index = () => {
  const sections = [
    {
      title: "Welcome to the Future",
      description:
        "Experience a new dimension of web design where animations respond to your every scroll. Watch as particles dance and flow with your movements.",
    },
    {
      title: "Smooth Parallax Effects",
      description:
        "The background moves at different speeds creating depth and immersion. Each scroll reveals new layers of visual storytelling.",
    },
    {
      title: "Dynamic Interactions",
      description:
        "Every element responds to your presence. Hover, scroll, and explore to discover subtle animations that bring the page to life.",
    },
    {
      title: "Infinite Possibilities",
      description:
        "This is just the beginning. The combination of modern web technologies opens doors to limitless creative expressions.",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center max-w-5xl animate-fade-in-up">
            <h1 className="text-7xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
              Scroll & Discover
            </h1>
            <p className="text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              An immersive journey through animated backgrounds that dance with your scroll
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
                className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl"
                style={{
                  background: "linear-gradient(135deg, hsl(263 70% 50%), hsl(280 80% 60%))",
                  boxShadow: "0 10px 40px rgba(147, 51, 234, 0.4)",
                }}
              >
                Begin Journey
              </button>
            </div>
          </div>
        </section>

        {/* Scroll Sections */}
        {sections.map((section, index) => (
          <ScrollSection
            key={index}
            title={section.title}
            description={section.description}
            index={index + 1}
          />
        ))}

        {/* Footer */}
        <footer className="relative z-10 py-16 text-center border-t border-border/30">
          <p className="text-muted-foreground">
            Created with modern web technologies • Scroll for more
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
