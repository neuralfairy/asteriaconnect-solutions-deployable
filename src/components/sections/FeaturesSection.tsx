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
  ArrowRight,
  CheckCircle
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Target,
      title: "Conversion Optimization",
      description: "Advanced A/B testing and conversion rate optimization to maximize your campaign performance.",
      benefits: ["Split testing", "Landing page optimization", "Funnel analysis", "Conversion tracking"],
      color: "from-primary to-accent"
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Real-time dashboards and detailed reporting to track ROI and campaign effectiveness.",
      benefits: ["Real-time tracking", "Custom dashboards", "ROI reporting", "Performance insights"],
      color: "from-accent to-primary"
    },
    {
      icon: Users,
      title: "Audience Targeting",
      description: "Precision targeting using advanced segmentation and behavioral data analysis.",
      benefits: ["Behavioral targeting", "Demographic segmentation", "Custom audiences", "Lookalike modeling"],
      color: "from-primary to-accent"
    },
    {
      icon: BarChart3,
      title: "Campaign Management",
      description: "End-to-end campaign management from strategy to execution and optimization.",
      benefits: ["Strategy development", "Creative production", "Campaign execution", "Ongoing optimization"],
      color: "from-accent to-primary"
    },
    {
      icon: Zap,
      title: "Marketing Automation",
      description: "Automated workflows and sequences to nurture leads and drive conversions.",
      benefits: ["Email automation", "Lead nurturing", "Workflow optimization", "Trigger campaigns"],
      color: "from-primary to-accent"
    },
    {
      icon: Shield,
      title: "Compliance & Security",
      description: "Ensure your campaigns meet industry standards and data protection requirements.",
      benefits: ["GDPR compliance", "Data security", "Privacy protection", "Audit trails"],
      color: "from-accent to-primary"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-primary border-primary/20">
            Core Features
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need for
            <span className="hero-text bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">
              Successful Campaigns
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools and expertise needed to create, manage, 
            and optimize high-performing promotional campaigns.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/20 animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
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
                  {feature.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Highlight */}
        <div className="bg-gradient-card rounded-3xl p-8 md:p-12 shadow-card animate-fade-in-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Badge variant="outline" className="mb-4 px-4 py-2 text-primary border-primary/20">
                Advanced Technology
              </Badge>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                AI-Powered Campaign Optimization
              </h3>
              <p className="text-muted-foreground mb-6 text-lg">
                Our proprietary AI algorithms continuously optimize your campaigns in real-time, 
                ensuring maximum performance and ROI across all channels.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Machine learning optimization",
                  "Predictive analytics",
                  "Real-time bidding",
                  "Cross-channel attribution"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Button 
                asChild
                className="bg-gradient-primary text-white shadow-primary hover:shadow-lg transition-all duration-300 hover:scale-105 group"
              >
                <a href="https://salescentri.com/solutions/use-case-navigator/demo" target="_blank" rel="noopener noreferrer">
                  Explore AI Features
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-background rounded-xl border">
                    <span className="text-sm font-medium">Conversion Rate</span>
                    <span className="text-lg font-bold text-primary">+145%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-background rounded-xl border">
                    <span className="text-sm font-medium">Cost per Lead</span>
                    <span className="text-lg font-bold text-primary">-62%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-background rounded-xl border">
                    <span className="text-sm font-medium">ROI</span>
                    <span className="text-lg font-bold text-primary">+280%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;