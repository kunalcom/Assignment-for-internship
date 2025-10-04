import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollY = useRef(0);
  const animationFrameRef = useRef<number>();
  const scrollSpeed = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      hue: number;
      opacity: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 1,
        speedX: (Math.random() - 0.5) * 0.8,
        speedY: (Math.random() - 0.5) * 0.8,
        hue: Math.random() * 60 + 240, // Purple to blue range
        opacity: Math.random() * 0.5 + 0.3,
      });
    }

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      scrollSpeed.current = Math.abs(currentScroll - scrollY.current);
      scrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    const animate = () => {
      // Fade effect
      ctx.fillStyle = "rgba(15, 15, 25, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Parallax and scroll-based speed
      const parallaxOffset = scrollY.current * 0.3;
      const speedMultiplier = 1 + scrollSpeed.current * 0.05;
      scrollSpeed.current *= 0.95; // Decay

      particles.forEach((particle, index) => {
        // Update position with enhanced scroll effects
        particle.x += particle.speedX * speedMultiplier;
        particle.y += particle.speedY * speedMultiplier - parallaxOffset * 0.002;

        // Wrap around screen
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;

        // Draw particle with enhanced glow
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 4
        );
        gradient.addColorStop(0, `hsla(${particle.hue}, 80%, 60%, ${particle.opacity})`);
        gradient.addColorStop(0.5, `hsla(${particle.hue}, 80%, 60%, ${particle.opacity * 0.5})`);
        gradient.addColorStop(1, `hsla(${particle.hue}, 80%, 60%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 4, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby particles with glow
        particles.forEach((otherParticle, otherIndex) => {
          if (index === otherIndex) return;
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const alpha = 0.3 * (1 - distance / 120);
            ctx.strokeStyle = `hsla(${particle.hue}, 80%, 60%, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ background: "linear-gradient(180deg, #0f0f19 0%, #1a0f2e 100%)" }}
    />
  );
};

export default AnimatedBackground;
