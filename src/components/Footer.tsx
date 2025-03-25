
import { Link } from "react-router-dom";
import { Github, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Company",
      links: [
        { label: "About", href: "#about" },
        { label: "Features", href: "#features" },
        { label: "Works", href: "#showcase" },
        { label: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "#" },
        { label: "Support", href: "#" },
        { label: "Documentation", href: "#" },
        { label: "Privacy Policy", href: "#" }
      ]
    },
    {
      title: "Follow Us",
      links: [
        { label: "Twitter", href: "#", icon: Twitter },
        { label: "Instagram", href: "#", icon: Instagram },
        { label: "LinkedIn", href: "#", icon: Linkedin },
        { label: "GitHub", href: "#", icon: Github }
      ]
    }
  ];
  
  return (
    <footer className="pt-16 pb-8 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="text-2xl font-serif font-semibold mb-4 inline-block">
              Minimal
            </Link>
            <p className="text-muted-foreground mb-6 max-w-xs">
              Premium minimalist template designed for modern businesses and creative professionals.
            </p>
            <div className="flex space-x-4">
              {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                <a 
                  key={i}
                  href="#" 
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground transition-colors hover:bg-primary hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          {footerLinks.map((column, i) => (
            <div key={i}>
              <h3 className="font-medium text-lg mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, j) => (
                  <li key={j}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                    >
                      {link.icon && <link.icon size={16} className="mr-2" />}
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Minimal. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
