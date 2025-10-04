import { useEffect, useRef, useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
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

  const offices = [
    {
      icon: MapPin,
      city: "Dubai, UAE",
      address: "Business Bay, Dubai",
      email: "dubai@montfort.com",
    },
    {
      icon: MapPin,
      city: "Singapore",
      address: "Marina Bay Financial Centre",
      email: "singapore@montfort.com",
    },
    {
      icon: MapPin,
      city: "Zurich, Switzerland",
      address: "Bahnhofstrasse District",
      email: "zurich@montfort.com",
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className={isVisible ? "animate-fade-in-up" : "opacity-0"}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-primary">Get in</span>{" "}
              <span className="text-accent">Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Connect with our global team to explore partnership opportunities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="space-y-6">
              <Input placeholder="Your Name" className="bg-card border-border" />
              <Input placeholder="Email Address" type="email" className="bg-card border-border" />
              <Input placeholder="Company" className="bg-card border-border" />
              <Textarea
                placeholder="Your Message"
                className="bg-card border-border min-h-[150px]"
              />
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Send Message
              </Button>
            </div>

            {/* Office Locations */}
            <div className="space-y-6">
              {offices.map((office, index) => (
                <div
                  key={index}
                  className="p-6 bg-card/50 border border-border hover:bg-card transition-colors duration-300"
                >
                  <div className="flex items-start gap-4">
                    <office.icon className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-primary text-lg mb-2">{office.city}</h3>
                      <p className="text-muted-foreground text-sm mb-1">{office.address}</p>
                      <a
                        href={`mailto:${office.email}`}
                        className="text-accent text-sm hover:underline"
                      >
                        {office.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
