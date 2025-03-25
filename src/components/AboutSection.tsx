
import { useEffect, useRef } from "react";
import { Paintbrush, Layers, Zap, LineChart } from "lucide-react";

const features = [
  {
    icon: Paintbrush,
    title: "Premium Design",
    description: "Carefully crafted with attention to every pixel and detail for a professional look and feel."
  },
  {
    icon: Layers,
    title: "Customizable",
    description: "Easily adapt the template to match your brand's identity and specific requirements."
  },
  {
    icon: Zap,
    title: "Optimized Performance",
    description: "Built with performance in mind to ensure fast loading times and smooth user experience."
  },
  {
    icon: LineChart,
    title: "Conversion Focused",
    description: "Strategically designed to guide visitors toward your business goals and drive conversions."
  }
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
            animatedElements?.forEach((el, index) => {
              (el as HTMLElement).style.animationDelay = `${0.1 + index * 0.1}s`;
              el.classList.add('animate-fade-up');
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="section bg-accent">
      <div className="container-custom" ref={sectionRef}>
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 animate-on-scroll">Features</p>
          <h2 className="text-3xl md:text-4xl font-serif font-medium animate-on-scroll">
            Crafted with excellence
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto animate-on-scroll">
            Our template combines aesthetic appeal with practical functionality to deliver
            an exceptional user experience for your audience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-md animate-on-scroll"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <p className="text-primary font-medium mb-2">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
              Designed for modern businesses
            </h2>
            <p className="text-muted-foreground mb-6">
              Our template isn't just visually stunning – it's built with modern web 
              standards and optimized for performance to give your business the edge 
              it deserves in the digital space.
            </p>
            <ul className="space-y-2">
              {["Responsive across all devices", "SEO optimized", "Fast loading times", "Regular updates"].map((item, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative animate-on-scroll">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Elegant workspace" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg w-40 md:w-64">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Performance</span>
                <span className="text-sm text-primary font-medium">98%</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div className="bg-primary h-2 rounded-full" style={{ width: "98%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
