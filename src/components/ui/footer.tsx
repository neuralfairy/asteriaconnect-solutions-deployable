import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "Services": [
      { name: "PSA Suite", href: "https://salescentri.com/solutions/psa-suite" },
      { name: "Lead Generation", href: "https://salescentri.com/platforms/lead-management/lead-generation" },
      { name: "Voice AI Agent", href: "https://salescentri.com/platforms/lead-management/voice-ai-agent" },
      { name: "Data Enrichment", href: "https://salescentri.com/services/data-enrichment" },
    ],
    "Solutions": [
      { name: "By Industry - IT", href: "https://salescentri.com/solutions/by-industry/it" },
      { name: "By Industry - Healthcare", href: "https://salescentri.com/solutions/by-industry/healthcare" },
      { name: "SDR Teams", href: "https://salescentri.com/solutions/by-use-case/sdr-teams" },
      { name: "Use Case Navigator", href: "https://salescentri.com/solutions/use-case-navigator" },
    ],
    "Resources": [
      { name: "Case Studies", href: "https://salescentri.com/resources/case-studies" },
      { name: "Whitepapers", href: "https://salescentri.com/resources/whitepapers-ebooks" },
      { name: "Tutorials", href: "https://salescentri.com/resources/tutorials-webinars" },
      { name: "API Reference", href: "https://salescentri.com/docs/api-reference" },
    ],
    "Company": [
      { name: "About Us", href: "https://salescentri.com/company/about-us" },
      { name: "Leadership Team", href: "https://salescentri.com/company/about-us/leadership-team" },
      { name: "Careers", href: "https://salescentri.com/company/careers" },
      { name: "Partners", href: "https://salescentri.com/company/partners-affiliates" },
    ]
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold">Asteriaconnect</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Performance-based promotional campaigns that drive real conversions. 
              We specialize in ROI marketing solutions for B2B companies.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Orlando, FL</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+1-800-ASTERIA" className="hover:text-primary transition-smooth">
                  +1-800-ASTERIA
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:hello@asteriaconnect.com" className="hover:text-primary transition-smooth">
                  hello@asteriaconnect.com
                </a>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 text-foreground">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-muted-foreground">Get the latest insights on performance marketing and promotional campaigns.</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <Button 
                asChild
                className="bg-gradient-primary text-white shadow-primary"
              >
                <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">
                  Start Free Trial
                </a>
              </Button>
              <Button 
                variant="outline" 
                asChild
              >
                <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                  Book Demo
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
              <span>© 2024 Asteriaconnect Solutions. All rights reserved.</span>
              <div className="flex items-center gap-4">
                <Link to="/privacy" className="hover:text-primary transition-smooth">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-primary transition-smooth">Terms of Service</Link>
                <a 
                  href="https://salescentri.com?utm_source=asteriaconnect.com&utm_medium=footer&utm_campaign=partner_network" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-smooth"
                >
                  Powered by Sales Intelligence Platform
                </a>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;