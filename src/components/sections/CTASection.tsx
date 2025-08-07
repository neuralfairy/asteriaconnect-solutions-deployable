import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Shield, TrendingUp } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary via-secondary to-secondary/80 text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-in mb-6">
            <Badge variant="outline" className="px-4 py-2 text-primary border-primary/20 bg-primary/10">
              Limited Time Offer
            </Badge>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in-up">
            Ready to Transform Your
            <span className="hero-text bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">
              Marketing Performance?
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Join 500+ successful companies using our performance-based promotional campaigns 
            to drive real conversions and measurable ROI.
          </p>

          {/* Value Props */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="flex flex-col items-center p-4 rounded-xl bg-background/10 backdrop-blur-sm border border-primary/10">
              <Clock className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Quick Setup</h3>
              <p className="text-sm text-muted-foreground text-center">Get started in minutes with our streamlined onboarding process</p>
            </div>
            <div className="flex flex-col items-center p-4 rounded-xl bg-background/10 backdrop-blur-sm border border-primary/10">
              <Shield className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Risk-Free Trial</h3>
              <p className="text-sm text-muted-foreground text-center">30-day money-back guarantee with no setup fees</p>
            </div>
            <div className="flex flex-col items-center p-4 rounded-xl bg-background/10 backdrop-blur-sm border border-primary/10">
              <TrendingUp className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Proven Results</h3>
              <p className="text-sm text-muted-foreground text-center">Average 300% ROI increase within first 90 days</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-scale-in" style={{animationDelay: '0.6s'}}>
            <Button 
              size="lg" 
              asChild
              className="bg-gradient-primary text-white shadow-primary hover:shadow-lg transition-all duration-300 hover:scale-105 group px-8 py-6 text-lg"
            >
              <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className="border-primary/20 text-primary hover:bg-primary/10 px-8 py-6 text-lg"
            >
              <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                Book Strategy Call
              </a>
            </Button>
          </div>

          {/* Trust Elements */}
          <div className="text-center animate-fade-in" style={{animationDelay: '0.8s'}}>
            <p className="text-sm text-muted-foreground mb-4">
              ✓ No setup fees • ✓ Cancel anytime • ✓ 30-day money-back guarantee
            </p>
            <p className="text-xs text-muted-foreground">
              Join companies like TechFlow, Healthcare Innovations, and Enterprise Systems Inc
            </p>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default CTASection;