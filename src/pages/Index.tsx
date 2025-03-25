
import { useEffect } from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  useEffect(() => {
    // Smooth scroll to section when hash link is clicked
    const handleHashLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const closestAnchor = target.closest('a');
      
      if (closestAnchor && closestAnchor.hash && closestAnchor.hash.startsWith('#')) {
        e.preventDefault();
        
        const targetElement = document.querySelector(closestAnchor.hash);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
          
          // Update URL but don't jump
          window.history.pushState(null, '', closestAnchor.hash);
        }
      }
    };
    
    document.addEventListener('click', handleHashLinkClick);
    
    return () => {
      document.removeEventListener('click', handleHashLinkClick);
    };
  }, []);

  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ShowcaseSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
