import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Users, 
  TrendingUp, 
  Award,
  ArrowRight,
  Linkedin,
  MapPin,
  Calendar
} from "lucide-react";

const About = () => {
  const stats = [
    { value: "500+", label: "Clients Served", icon: Users },
    { value: "300%", label: "Average ROI Increase", icon: TrendingUp },
    { value: "50M+", label: "Leads Generated", icon: Target },
    { value: "95%", label: "Client Retention Rate", icon: Award }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "15+ years in performance marketing with expertise in B2B campaign optimization and growth strategies.",
      image: "/team/sarah.jpg"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Former tech lead at major marketing platforms, specializing in marketing automation and AI-driven optimization.",
      image: "/team/michael.jpg"
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Strategy",
      bio: "Data scientist turned marketing strategist with a track record of scaling B2B campaigns across industries.",
      image: "/team/emily.jpg"
    },
    {
      name: "David Kim",
      role: "Director of Client Success",
      bio: "Dedicated to ensuring client success with over 10 years in account management and strategic consulting.",
      image: "/team/david.jpg"
    }
  ];

  const values = [
    {
      title: "Performance-Driven",
      description: "We measure success by the tangible results we deliver for our clients - higher conversions, better ROI, and sustainable growth.",
      icon: TrendingUp
    },
    {
      title: "Data-Centric",
      description: "Every decision is backed by data. We leverage advanced analytics to optimize campaigns and drive continuous improvement.",
      icon: Target
    },
    {
      title: "Client Partnership",
      description: "We work as an extension of your team, providing strategic guidance and dedicated support throughout your journey.",
      icon: Users
    },
    {
      title: "Innovation Focus",
      description: "We stay ahead of industry trends and continuously innovate our platform to deliver cutting-edge marketing solutions.",
      icon: Award
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
                About Asteriaconnect
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
                <span className="hero-text bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Driving Performance
                </span>
                <br />
                <span className="text-foreground">Through Innovation</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Founded in Orlando, FL, Asteriaconnect Solutions specializes in performance-based promotional 
                campaigns that deliver measurable results for B2B companies worldwide.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  asChild
                  className="bg-gradient-primary text-white shadow-primary hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                    Schedule a Call
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  asChild
                >
                  <a href="https://salescentri.com/company/careers" target="_blank" rel="noopener noreferrer">
                    Join Our Team
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    We believe that every business deserves access to world-class marketing technology 
                    and expertise. Our mission is to democratize performance marketing by providing 
                    powerful, easy-to-use tools that drive real business results.
                  </p>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Since our founding, we've helped over 500 companies transform their marketing 
                    performance, generating millions of qualified leads and driving unprecedented 
                    ROI growth across diverse industries.
                  </p>
                  <Button asChild className="bg-gradient-primary text-white shadow-primary">
                    <a href="https://salescentri.com/company/about-us" target="_blank" rel="noopener noreferrer">
                      Learn More About Our Story
                    </a>
                  </Button>
                </div>
                
                <div className="space-y-6">
                  <Card className="p-6 hover:shadow-card transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                        <Calendar className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Founded 2018</h3>
                        <p className="text-sm text-muted-foreground">Orlando, Florida</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      Started with a vision to make performance marketing accessible to all businesses
                    </p>
                  </Card>
                  
                  <Card className="p-6 hover:shadow-card transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Global Reach</h3>
                        <p className="text-sm text-muted-foreground">Serving clients worldwide</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      From startups to Fortune 500 companies across 50+ countries
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The numbers speak for themselves - we deliver results that matter
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card 
                  key={stat.label}
                  className="text-center p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-2xl flex items-center justify-center">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <Card 
                  key={value.title}
                  className="p-8 hover:shadow-card transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-12 h-12 mb-6 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Leadership Team</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Industry experts passionate about driving your success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card 
                  key={member.name}
                  className="text-center p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{member.name}</h3>
                  <Badge variant="secondary" className="mb-4">{member.role}</Badge>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{member.bio}</p>
                  <Button variant="ghost" size="sm" className="text-primary">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild className="bg-gradient-primary text-white shadow-primary">
                <a href="https://salescentri.com/company/about-us/leadership-team" target="_blank" rel="noopener noreferrer">
                  View Full Leadership Team
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-secondary via-secondary to-secondary/80 text-secondary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Partner with Us?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join hundreds of successful companies who trust Asteriaconnect to drive their marketing performance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  asChild
                  className="bg-gradient-primary text-white shadow-primary hover:shadow-lg transition-all duration-300 hover:scale-105 group"
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
                  className="border-primary/20 text-primary hover:bg-primary/10"
                >
                  <a href="https://salescentri.com/contact" target="_blank" rel="noopener noreferrer">
                    Contact Us
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

export default About;