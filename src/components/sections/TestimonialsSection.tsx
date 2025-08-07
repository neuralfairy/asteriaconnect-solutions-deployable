import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "VP of Marketing",
      company: "TechFlow Solutions",
      content: "Asteriaconnect transformed our promotional campaigns completely. We saw a 300% increase in qualified leads and our conversion rates doubled within the first quarter.",
      rating: 5,
      industry: "Technology"
    },
    {
      name: "Michael Rodriguez",
      role: "Director of Sales",
      company: "Healthcare Innovations",
      content: "The ROI we've achieved with Asteriaconnect is unprecedented. Their data-driven approach and performance optimization has revolutionized our marketing efforts.",
      rating: 5,
      industry: "Healthcare"
    },
    {
      name: "Emily Watson",
      role: "Chief Marketing Officer",
      company: "Enterprise Systems Inc",
      content: "Working with Asteriaconnect has been game-changing. Their team's expertise in B2B promotional campaigns helped us achieve our annual targets in just 6 months.",
      rating: 5,
      industry: "Enterprise"
    },
    {
      name: "David Kim",
      role: "Marketing Manager",
      company: "FinanceFirst Group",
      content: "The level of detail and optimization Asteriaconnect brings to campaign management is exceptional. Our cost per acquisition dropped by 40% while increasing lead quality.",
      rating: 5,
      industry: "Finance"
    },
    {
      name: "Jennifer Adams",
      role: "Growth Director",
      company: "Manufacturing Plus",
      content: "Asteriaconnect's performance-based approach aligns perfectly with our business goals. We've seen consistent growth and improved ROI across all our marketing channels.",
      rating: 5,
      industry: "Manufacturing"
    },
    {
      name: "Robert Thompson",
      role: "Head of Digital Marketing",
      company: "Retail Dynamics",
      content: "The automation and optimization tools provided by Asteriaconnect have streamlined our entire marketing operation. Highly recommend for any serious B2B company.",
      rating: 5,
      industry: "Retail"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-primary border-primary/20">
            Client Success Stories
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how leading companies have transformed their marketing performance with our 
            promotional campaign solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/20 animate-fade-in-up relative overflow-hidden"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Author Info */}
                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-sm font-medium text-primary">{testimonial.company}</p>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {testimonial.industry}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center animate-fade-in-up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {[
              { metric: "500+", label: "Happy Clients" },
              { metric: "95%", label: "Client Retention" },
              { metric: "300%", label: "Avg ROI Increase" },
              { metric: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.metric}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground mb-6">
            Join hundreds of successful companies achieving exceptional results
          </p>
          
          <a 
            href="https://salescentri.com/resources/case-studies"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-gradient-primary text-white rounded-xl font-semibold shadow-primary hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            View More Case Studies
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;