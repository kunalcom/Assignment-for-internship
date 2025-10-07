import heroVideo from "@/assets/hero-animation.mp4";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;


// export default HeroSection;
