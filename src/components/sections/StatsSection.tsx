import { TrendingUp, Users, Target, Award } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "300%",
      label: "Average ROI Increase",
      description: "Clients see significant returns on investment"
    },
    {
      icon: Users,
      value: "500+",
      label: "B2B Clients Served", 
      description: "Trusted by leading companies worldwide"
    },
    {
      icon: Target,
      value: "95%",
      label: "Campaign Success Rate",
      description: "Consistently deliver performance results"
    },
    {
      icon: Award,
      value: "50M+",
      label: "Leads Generated",
      description: "Qualified leads for our clients annually"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proven Performance Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our data-driven approach delivers measurable results that drive business growth
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-card shadow-card hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-primary group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              
              <div className="mb-2">
                <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {stat.value}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                {stat.label}
              </h3>
              
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <p className="text-muted-foreground mb-6">
            Ready to achieve similar results for your business?
          </p>
          <a 
            href="https://salescentri.com/get-started/book-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-gradient-primary text-white rounded-xl font-semibold shadow-primary hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Book Your Strategy Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;