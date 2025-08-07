import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Zap, 
  Shield,
  CheckCircle,
  ArrowRight,
  Settings,
  Globe,
  Smartphone,
  Mail
} from "lucide-react";

const Features = () => {
  const coreFeatures = [
    {
      icon: Target,
      title: "Advanced Conversion Optimization",
      description: "Maximize your campaign performance with cutting-edge A/B testing and conversion rate optimization tools.",
      features: [
        "Multi-variant split testing",
        "Landing page optimization",
        "Conversion funnel analysis",
        "Real-time performance tracking",
        "Heatmap analytics",
        "User behavior insights"
      ]
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics Dashboard",
      description: "Comprehensive analytics and reporting to track ROI, campaign effectiveness, and business growth.",
      features: [
        "Real-time campaign monitoring",
        "Custom dashboard creation",
        "ROI and ROAS reporting",
        "Attribution modeling",
        "Predictive analytics",
        "Export capabilities"
      ]
    },
    {
      icon: Users,
      title: "Precision Audience Targeting",
      description: "Reach the right audience with advanced segmentation and behavioral targeting capabilities.",
      features: [
        "Behavioral targeting",
        "Demographic segmentation",
        "Custom audience creation",
        "Lookalike modeling",
        "Interest-based targeting",
        "Geographic targeting"
      ]
    },
    {
      icon: BarChart3,
      title: "End-to-End Campaign Management",
      description: "Complete campaign lifecycle management from strategy development to optimization.",
      features: [
        "Campaign strategy planning",
        "Creative asset management",
        "Multi-channel execution",
        "Budget optimization",
        "Performance monitoring",
        "Automated optimization"
      ]
    },
    {
      icon: Zap,
      title: "Marketing Automation Suite",
      description: "Streamline your marketing operations with powerful automation workflows and sequences.",
      features: [
        "Email marketing automation",
        "Lead nurturing workflows",
        "Trigger-based campaigns",
        "Behavioral automations",
        "CRM integrations",
        "Custom workflow builder"
      ]
    },
    {
      icon: Shield,
      title: "Enterprise Security & Compliance",
      description: "Ensure data protection and regulatory compliance with enterprise-grade security features.",
      features: [
        "GDPR compliance tools",
        "Data encryption",
        "Privacy management",
        "Audit trail logging",
        "Role-based access control",
        "Security monitoring"
      ]
    }
  ];

  const additionalFeatures = [
    {
      icon: Settings,
      title: "API & Integrations",
      description: "Connect with your existing tools and platforms",
      features: ["REST API access", "CRM integrations", "Analytics tools", "Third-party platforms"]
    },
    {
      icon: Globe,
      title: "Multi-Channel Campaigns",
      description: "Reach your audience across all digital channels",
      features: ["Social media advertising", "Search marketing", "Display advertising", "Content marketing"]
    },
    {
      icon: Smartphone,
      title: "Mobile Optimization",
      description: "Optimized for mobile performance and engagement",
      features: ["Responsive design", "Mobile-first approach", "App integration", "Push notifications"]
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Powerful email marketing and automation tools",
      features: ["Template builder", "A/B testing", "Segmentation", "Deliverability optimization"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 px-4 py-2 text-primary border-primary/20">
                Platform Features
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
                <span className="hero-text bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Powerful Features
                </span>
                <br />
                <span className="text-foreground">for Performance Marketing</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Everything you need to create, manage, and optimize high-performing promotional campaigns 
                that drive real conversions and measurable ROI.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  asChild
                  className="bg-gradient-primary text-white shadow-primary hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">
                    Start Free Trial
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  asChild
                >
                  <a href="https://salescentri.com/solutions/use-case-navigator/demo" target="_blank" rel="noopener noreferrer">
                    Watch Demo
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Platform Features</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive tools designed for modern performance marketing teams
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {coreFeatures.map((feature, index) => (
                <Card 
                  key={feature.title}
                  className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/20"
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.features.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant="ghost" 
                      asChild
                      className="mt-4 text-primary hover:text-primary group/btn"
                    >
                      <a href="https://salescentri.com/solutions/use-case-navigator" target="_blank" rel="noopener noreferrer">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Features */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Additional Capabilities</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Extended features to enhance your marketing operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalFeatures.map((feature, index) => (
                <Card 
                  key={feature.title}
                  className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/20"
                >
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1">
                      {feature.features.map((item) => (
                        <li key={item} className="text-xs text-muted-foreground text-center">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-secondary via-secondary to-secondary/80 text-secondary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Experience These Features?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Start your free trial today and see how our platform can transform your marketing performance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  asChild
                  className="bg-gradient-primary text-white shadow-primary hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">
                    Start Free Trial
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  asChild
                  className="border-primary/20 text-primary hover:bg-primary/10"
                >
                  <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                    Schedule Demo
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Features;