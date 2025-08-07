import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, ArrowRight, Zap } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses getting started with performance marketing",
      price: "$299",
      period: "/month",
      popular: false,
      features: [
        "Up to 5 active campaigns",
        "Basic analytics dashboard",
        "Email support",
        "Standard integrations",
        "Monthly strategy consultation",
        "A/B testing (2 variants)",
        "Lead tracking",
        "Basic automation"
      ],
      cta: "Start Free Trial",
      ctaLink: "https://salescentri.com/pricing/free-trial"
    },
    {
      name: "Professional",
      description: "Advanced features for growing marketing teams and agencies",
      price: "$799",
      period: "/month",
      popular: true,
      features: [
        "Up to 25 active campaigns",
        "Advanced analytics & reporting",
        "Priority support + dedicated CSM",
        "All integrations included",
        "Weekly strategy consultations",
        "Unlimited A/B testing",
        "Advanced lead scoring",
        "Marketing automation suite",
        "Custom dashboard creation",
        "ROI optimization tools",
        "Multi-channel attribution"
      ],
      cta: "Start Free Trial",
      ctaLink: "https://salescentri.com/pricing/free-trial"
    },
    {
      name: "Enterprise",
      description: "Custom solutions for large organizations with complex requirements",
      price: "Custom",
      period: "pricing",
      popular: false,
      features: [
        "Unlimited campaigns",
        "Enterprise analytics suite",
        "24/7 dedicated support",
        "Custom integrations",
        "Daily strategy sessions",
        "White-label options",
        "Advanced security features",
        "Custom automation workflows",
        "API access",
        "On-premise deployment",
        "SLA guarantees",
        "Training & onboarding"
      ],
      cta: "Contact Sales",
      ctaLink: "https://salescentri.com/contact/sales-inquiry"
    }
  ];

  const features = [
    {
      category: "Campaign Management",
      items: [
        { name: "Active Campaigns", starter: "5", professional: "25", enterprise: "Unlimited" },
        { name: "A/B Testing", starter: "2 variants", professional: "Unlimited", enterprise: "Unlimited" },
        { name: "Campaign Templates", starter: "Basic", professional: "Advanced", enterprise: "Custom" },
        { name: "Multi-channel Support", starter: "✓", professional: "✓", enterprise: "✓" }
      ]
    },
    {
      category: "Analytics & Reporting", 
      items: [
        { name: "Dashboard Access", starter: "Basic", professional: "Advanced", enterprise: "Enterprise" },
        { name: "Custom Reports", starter: "✗", professional: "✓", enterprise: "✓" },
        { name: "Real-time Analytics", starter: "✓", professional: "✓", enterprise: "✓" },
        { name: "Attribution Modeling", starter: "✗", professional: "✓", enterprise: "Advanced" }
      ]
    },
    {
      category: "Support & Services",
      items: [
        { name: "Support Level", starter: "Email", professional: "Priority", enterprise: "24/7 Dedicated" },
        { name: "Strategy Consultations", starter: "Monthly", professional: "Weekly", enterprise: "Daily" },
        { name: "Onboarding", starter: "Self-service", professional: "Guided", enterprise: "White-glove" },
        { name: "Account Management", starter: "✗", professional: "Dedicated CSM", enterprise: "Dedicated Team" }
      ]
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
                Transparent Pricing
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
                <span className="hero-text bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Simple, Transparent
                </span>
                <br />
                <span className="text-foreground">Pricing Plans</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Choose the perfect plan for your business needs. All plans include our core features 
                with 30-day money-back guarantee.
              </p>
              
              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>30-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {plans.map((plan, index) => (
                <Card 
                  key={plan.name}
                  className={`relative group hover:shadow-card transition-all duration-300 hover:-translate-y-2 ${
                    plan.popular ? 'border-primary shadow-primary/20 scale-105' : 'border-border/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-primary text-white px-4 py-1 shadow-primary">
                        <Star className="w-3 h-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                    <CardDescription className="text-muted-foreground mb-6">
                      {plan.description}
                    </CardDescription>
                    
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                    
                    <Button 
                      asChild
                      className={plan.popular 
                        ? "bg-gradient-primary text-white shadow-primary hover:shadow-lg w-full" 
                        : "w-full"
                      }
                    >
                      <a href={plan.ctaLink} target="_blank" rel="noopener noreferrer">
                        {plan.cta}
                      </a>
                    </Button>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Detailed Feature Comparison</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Compare all features across our pricing plans to find the perfect fit
              </p>
            </div>

            <div className="max-w-6xl mx-auto space-y-8">
              {features.map((section) => (
                <Card key={section.category} className="overflow-hidden">
                  <CardHeader className="bg-muted/50">
                    <CardTitle className="text-lg">{section.category}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-muted/30">
                          <tr>
                            <th className="text-left p-4 font-medium">Feature</th>
                            <th className="text-center p-4 font-medium">Starter</th>
                            <th className="text-center p-4 font-medium">Professional</th>
                            <th className="text-center p-4 font-medium">Enterprise</th>
                          </tr>
                        </thead>
                        <tbody>
                          {section.items.map((item, index) => (
                            <tr key={item.name} className={index % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                              <td className="p-4 text-sm text-muted-foreground">{item.name}</td>
                              <td className="p-4 text-sm text-center">{item.starter}</td>
                              <td className="p-4 text-sm text-center">{item.professional}</td>
                              <td className="p-4 text-sm text-center">{item.enterprise}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing FAQ</h2>
                <p className="text-xl text-muted-foreground">
                  Common questions about our pricing and plans
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    question: "Can I change plans at any time?",
                    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle."
                  },
                  {
                    question: "Is there a free trial?",
                    answer: "Yes, all plans come with a 30-day free trial. No credit card required to start."
                  },
                  {
                    question: "What payment methods do you accept?",
                    answer: "We accept all major credit cards, bank transfers, and purchase orders for Enterprise customers."
                  },
                  {
                    question: "Are there any setup fees?",
                    answer: "No, there are no setup fees for any of our plans. You only pay the monthly subscription fee."
                  },
                  {
                    question: "What happens if I exceed my campaign limits?",
                    answer: "We'll notify you when approaching limits and help you upgrade to accommodate your needs."
                  }
                ].map((faq, index) => (
                  <Card key={index} className="hover:shadow-card transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-secondary via-secondary to-secondary/80 text-secondary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Zap className="h-16 w-16 mx-auto mb-6 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Marketing?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Start your free trial today and see the difference performance-based campaigns can make.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  asChild
                  className="bg-gradient-primary text-white shadow-primary hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                >
                  <a href="https://salescentri.com/pricing/free-trial" target="_blank" rel="noopener noreferrer">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  asChild
                  className="border-primary/20 text-primary hover:bg-primary/10"
                >
                  <a href="https://salescentri.com/contact/sales-inquiry" target="_blank" rel="noopener noreferrer">
                    Contact Sales
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

export default Pricing;