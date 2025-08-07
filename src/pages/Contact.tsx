import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Calendar,
  MessageSquare,
  Users,
  HeadphonesIcon,
  ArrowRight
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Calendar,
      title: "Book a Demo",
      description: "Schedule a personalized demo to see how our platform can transform your marketing",
      action: "Schedule Demo",
      link: "https://salescentri.com/get-started/book-demo",
      primary: true
    },
    {
      icon: MessageSquare,
      title: "Start Free Trial",
      description: "Get instant access to our platform with a 30-day free trial - no credit card required",
      action: "Start Trial",
      link: "https://salescentri.com/get-started/free-trial",
      primary: true
    },
    {
      icon: HeadphonesIcon,
      title: "Live Chat Support",
      description: "Get immediate assistance from our support team during business hours",
      action: "Start Chat",
      link: "https://salescentri.com/contact/support-request/live-chat",
      primary: false
    },
    {
      icon: Users,
      title: "Partner Inquiry",
      description: "Interested in becoming a partner? Let's discuss collaboration opportunities",
      action: "Partner With Us",
      link: "https://salescentri.com/contact/partnerships/partner-inquiry",
      primary: false
    }
  ];

  const officeInfo = [
    {
      icon: MapPin,
      title: "Orlando Office",
      details: ["123 Performance Drive", "Orlando, FL 32801", "United States"]
    },
    {
      icon: Phone,
      title: "Phone Support",
      details: ["+1-800-ASTERIA", "(+1-800-278-3742)", "Available 24/7"]
    },
    {
      icon: Mail,
      title: "Email Contact",
      details: ["hello@asteriaconnect.com", "support@asteriaconnect.com", "partners@asteriaconnect.com"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 8AM - 8PM EST", "Saturday: 9AM - 5PM EST", "Sunday: Closed"]
    }
  ];

  const supportOptions = [
    {
      title: "Sales Inquiry",
      description: "Questions about pricing, plans, or custom solutions",
      link: "https://salescentri.com/contact/sales-inquiry",
      urgent: false
    },
    {
      title: "Technical Support",
      description: "Platform issues, integrations, or technical questions",
      link: "https://salescentri.com/contact/support-request",
      urgent: true
    },
    {
      title: "Request a Quote",
      description: "Custom enterprise pricing and implementation quotes",
      link: "https://salescentri.com/contact/sales-inquiry/request-quote",
      urgent: false
    },
    {
      title: "Submit a Ticket",
      description: "Detailed support requests and bug reports",
      link: "https://salescentri.com/contact/support-request/submit-ticket",
      urgent: false
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
                Get in Touch
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
                <span className="hero-text bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Let's Start
                </span>
                <br />
                <span className="text-foreground">Your Success Journey</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Ready to transform your marketing performance? Our team of experts is here to help you 
                achieve exceptional results with promotional campaigns that drive real conversions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  asChild
                  className="bg-gradient-primary text-white shadow-primary hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                    Book Strategy Call
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  asChild
                >
                  <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">
                    Start Free Trial
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose How to Connect</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Multiple ways to get started or get support - whatever works best for you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <Card 
                  key={method.title}
                  className={`group hover:shadow-card transition-all duration-300 hover:-translate-y-2 ${
                    method.primary ? 'border-primary/20 bg-gradient-card' : 'border-border/50'
                  }`}
                >
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${
                      method.primary ? 'bg-gradient-primary' : 'bg-muted'
                    }`}>
                      <method.icon className={`h-6 w-6 ${method.primary ? 'text-white' : 'text-primary'}`} />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {method.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {method.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      asChild
                      className={method.primary 
                        ? "bg-gradient-primary text-white shadow-primary hover:shadow-lg w-full" 
                        : "w-full"
                      }
                    >
                      <a href={method.link} target="_blank" rel="noopener noreferrer">
                        {method.action}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Office Information */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Office Information</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Based in Orlando, FL, serving clients worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {officeInfo.map((info, index) => (
                <Card 
                  key={info.title}
                  className="text-center p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-4 text-foreground">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Support & Assistance</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get the help you need, when you need it
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {supportOptions.map((option, index) => (
                <Card 
                  key={option.title}
                  className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/20"
                >
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {option.title}
                    </CardTitle>
                    {option.urgent && (
                      <Badge variant="secondary" className="text-xs bg-primary/10 text-primary">
                        Priority
                      </Badge>
                    )}
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 text-muted-foreground">
                      {option.description}
                    </CardDescription>
                    <Button 
                      variant="outline" 
                      asChild
                      className="w-full group-hover:border-primary/20 group-hover:text-primary"
                    >
                      <a href={option.link} target="_blank" rel="noopener noreferrer">
                        Get Help
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Quick Answers</h2>
                <p className="text-xl text-muted-foreground">
                  Common questions about our services and platform
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    question: "How quickly can I get started?",
                    answer: "You can start your free trial immediately - no credit card required. Our onboarding process takes just minutes."
                  },
                  {
                    question: "Do you offer custom solutions for enterprise clients?",
                    answer: "Yes, we provide fully customized solutions including white-label options, custom integrations, and dedicated support."
                  },
                  {
                    question: "What kind of support do you provide?",
                    answer: "We offer 24/7 technical support, dedicated account management, and strategic consulting based on your plan."
                  },
                  {
                    question: "Can you help with campaign strategy and optimization?",
                    answer: "Absolutely! Our team of experts provides strategic guidance, campaign optimization, and performance analysis."
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

              <div className="text-center mt-12">
                <Button asChild className="bg-gradient-primary text-white shadow-primary">
                  <a href="/faq">
                    View All FAQs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-secondary via-secondary to-secondary/80 text-secondary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join hundreds of successful companies using our platform to drive exceptional marketing results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  asChild
                  className="bg-gradient-primary text-white shadow-primary hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                >
                  <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">
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
                  <a href="https://salescentri.com/get-started/calendly" target="_blank" rel="noopener noreferrer">
                    Schedule Call
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

export default Contact;