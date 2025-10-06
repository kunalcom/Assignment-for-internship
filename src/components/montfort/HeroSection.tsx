// import { useEffect, useRef } from "react";
// import heroVideo from "@/assets/hero-animation.mp4"; // <-- Add your video file

// const HeroSection = () => {
//   const heroRef = useRef<HTMLVideoElement>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (heroRef.current) {
//         const scrolled = window.scrollY;
//         const parallax = scrolled * 0.5;
//         heroRef.current.style.transform = `translateY(${parallax}px)`;
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section className="relative h-screen overflow-hidden">
//       {/* Background Video with Parallax */}
//       <video
//         ref={heroRef}
//         className="absolute inset-0 w-full h-[120%] object-cover transition-transform duration-75"
//         src={heroVideo}
//         autoPlay
//         muted
//         loop
//         playsInline
//       />
//       <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />

//       {/* Content */}
//       <div className="relative h-full flex items-center justify-center px-4">
//         <div className="text-center max-w-5xl animate-fade-in-up">
//           <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
//             <span className="block text-primary">Global commodity</span>
//             <span className="block text-accent text-shadow-glow">
//               Trading Excellence
//             </span>
//           </h1>
//           <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
//             Connecting markets worldwide through strategic commodity trading and asset investment
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a
//               href="#about"
//               className="px-8 py-4 bg-accent text-accent-foreground font-medium uppercase tracking-wider hover:bg-accent/90 transition-all duration-300 hover:scale-105"
//             >
//               Discover More
//             </a>
//             <a
//               href="#contact"
//               className="px-8 py-4 border border-primary text-primary font-medium uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300"
//             >
//               Get in Touch
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
//         <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
//           <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-fade-in-up" />
//         </div>
//       </div>
//     </section>
//   );
// };


import { useEffect, useRef, useState } from "react";
import heroVideo from "@/assets/hero-animation.mp4";

const HeroSection = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [started, setStarted] = useState(false);

  const handleStart = async () => {
    try {
      await audioRef.current?.play();
      setStarted(true);
    } catch (err) {
      console.error("Audio play blocked:", err);
    }
  };

  return (
    <>
      {!started && (
        <div className="fixed inset-0 bg-black flex flex-col items-center justify-center text-white z-[2000]">
          <h1 className="text-3xl mb-4 font-semibold">Welcome to Global Commodity</h1>
          <button
            onClick={handleStart}
            className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-full text-lg transition-all"
          >
            ▶️ Enter Experience
          </button>
        </div>
      )}

      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3"
      />

      <section className="relative h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-[120%] object-cover"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative h-full flex items-center justify-center px-4">
          <h1 className="text-6xl font-bold text-center text-white">
            Global Commodity <br /> Trading Excellence
          </h1>
        </div>
      </section>
    </>
  );
};

export default HeroSection;


// export default HeroSection;
