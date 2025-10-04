import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleScroll = () => {
      if (!video) return;

      // Play video when scrolling
      if (video.paused) {
        video.play().catch(() => {
          // Handle autoplay restrictions
        });
      }

      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Pause video after scrolling stops (300ms delay)
      scrollTimeoutRef.current = setTimeout(() => {
        video.pause();
      }, 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden">
      <div 
        className="absolute inset-0" 
        style={{ background: "linear-gradient(180deg, #0f0f19 0%, #1a0f2e 100%)" }}
      />
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen"
        loop
        muted
        playsInline
      >
        <source src="/animation-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default AnimatedBackground;
