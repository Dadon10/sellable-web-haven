
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const textRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          if (target.classList.contains("reveal-text")) {
            const spans = target.querySelectorAll("span");
            spans.forEach((span, i) => {
              span.style.animationDelay = `${0.1 + i * 0.05}s`;
            });
          } else {
            target.classList.add("animate-fade-up");
            target.style.animationDelay = "0.3s";
            target.style.animationFillMode = "backwards";
          }
        }
      });
    }, { threshold: 0.1 });

    const heroElements = document.querySelectorAll(".hero-animate");
    heroElements.forEach((el) => observer.observe(el));

    return () => {
      heroElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-4 mb-8">
            <p className="text-primary font-medium hero-animate">Premium Template</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight">
              <div className="reveal-text hero-animate mb-2">
                <span>Modern & Minimalist</span>
              </div>
              <div className="reveal-text hero-animate">
                <span>Design for Your Business</span>
              </div>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mt-6 hero-animate">
              A premium website template with stunning animations and pixel-perfect design 
              for professionals who value simplicity and elegance.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 hero-animate">
            <Button className="rounded-full px-8 py-6 text-base">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="rounded-full px-8 py-6 text-base">
              Learn More
            </Button>
          </div>
          
          <div className="mt-16 md:mt-24 relative hero-animate">
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent h-16 bottom-0 z-10"></div>
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1631624217902-d14c634ab17c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Minimalist dashboard" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 border border-white/10 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
