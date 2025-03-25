
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

type ShowcaseItem = {
  id: number;
  image: string;
  title: string;
  category: string;
  description: string;
};

const showcaseItems: ShowcaseItem[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1613909207039-6b173b755cc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    title: "Business Website",
    category: "Web Design",
    description: "Clean and professional website design for corporate clients.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    title: "E-commerce Platform",
    category: "Development",
    description: "Modern shopping experience with intuitive navigation.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    title: "Mobile Application",
    category: "UI/UX Design",
    description: "User-friendly interface designed for optimal mobile experience.",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    title: "Brand Identity",
    category: "Branding",
    description: "Comprehensive brand identity system for emerging startups.",
  },
];

const categories = ["All", "Web Design", "Development", "UI/UX Design", "Branding"];

const ShowcaseSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredItems, setFilteredItems] = useState(showcaseItems);
  const [selectedItem, setSelectedItem] = useState<ShowcaseItem | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredItems(showcaseItems);
    } else {
      setFilteredItems(
        showcaseItems.filter((item) => item.category === activeCategory)
      );
    }
  }, [activeCategory]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = sectionRef.current?.querySelectorAll('.showcase-animate');
            animatedElements?.forEach((el, index) => {
              (el as HTMLElement).style.animationDelay = `${0.1 + index * 0.1}s`;
              el.classList.add('animate-fade-up');
              (el as HTMLElement).style.animationFillMode = "backwards";
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

  const openDetails = (item: ShowcaseItem) => {
    setSelectedItem(item);
    document.body.style.overflow = "hidden";
  };

  const closeDetails = () => {
    setSelectedItem(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="showcase" className="section" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 showcase-animate">Our Work</p>
          <h2 className="text-3xl md:text-4xl font-serif font-medium showcase-animate">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto showcase-animate">
            Explore our collection of premium work that demonstrates our attention to
            detail and commitment to excellence.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12 showcase-animate">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-xl group cursor-pointer showcase-animate transition-all duration-300 hover:shadow-xl"
              onClick={() => openDetails(item)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-all duration-300 flex items-center justify-center">
                  <Button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
                    View Project
                  </Button>
                </div>
              </div>
              <div className="p-6 bg-white">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-medium">{item.title}</h3>
                  <span className="text-xs bg-accent px-2 py-1 rounded-full text-primary-foreground">
                    {item.category}
                  </span>
                </div>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedItem && (
          <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto animate-blur-in shadow-2xl">
              <div className="relative">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-[40vh] object-cover"
                />
                <button
                  onClick={closeDetails}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 opacity-80 hover:opacity-100 transition-opacity"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-medium">{selectedItem.title}</h3>
                  <span className="text-sm bg-accent px-3 py-1 rounded-full">
                    {selectedItem.category}
                  </span>
                </div>
                <p className="text-muted-foreground mb-6">
                  {selectedItem.description}
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-medium mb-2">Project Details</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>
                        <span className="font-medium text-foreground">Client:</span> Company Inc.
                      </li>
                      <li>
                        <span className="font-medium text-foreground">Date:</span> January 2023
                      </li>
                      <li>
                        <span className="font-medium text-foreground">Services:</span> {selectedItem.category}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Project Overview</h4>
                    <p className="text-sm text-muted-foreground">
                      This project showcases our ability to deliver exceptional results
                      while meeting the specific requirements and goals of our clients.
                    </p>
                  </div>
                </div>
                <Button className="rounded-full px-6">View Live Project</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Ensure we import the X icon at the top
import { X } from "lucide-react";

export default ShowcaseSection;
