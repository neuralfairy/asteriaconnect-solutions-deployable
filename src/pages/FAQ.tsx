import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, MessageSquare, Phone, HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqCategories = [
    {
      title: "Getting Started",
      icon: HelpCircle,
      faqs: [
        {
          question: "How do I get started with Asteriaconnect?",
          answer: "Getting started is easy! Sign up for a free 30-day trial, no credit card required. Our onboarding team will help you set up your first campaign within 24 hours. You can also book a demo to see the platform in action before starting your trial."
        },
        {
          question: "What's included in the free trial?",
          answer: "Your 30-day free trial includes full access to our Professional plan features: unlimited A/B testing, advanced analytics, priority support, up to 25 active campaigns, and weekly strategy consultations with our experts."
        },
        {
          question: "Do I need technical knowledge to use the platform?",
          answer: "No technical knowledge is required. Our platform is designed for marketers of all skill levels. We provide guided onboarding, video tutorials, and dedicated support to ensure your success from day one."
        },
        {
          question: "How quickly can I launch my first campaign?",
          answer: "Most clients launch their first campaign within 48 hours of signing up. Our team provides templates, best practices, and hands-on support to accelerate your time to market."
        }
      ]
    },
    {
      title: "Platform Features",
      icon: MessageSquare,
      faqs: [
        {
          question: "What types of campaigns can I create?",
          answer: "You can create various promotional campaigns including email marketing, social media advertising, search marketing, display advertising, content marketing, and multi-channel integrated campaigns. Our platform supports all major digital marketing channels."
        },
        {
          question: "How does the A/B testing feature work?",
          answer: "Our A/B testing feature allows you to test multiple variants of your campaigns simultaneously. You can test headlines, images, copy, CTAs, landing pages, and targeting parameters. The platform automatically determines statistical significance and recommends winning variants."
        },
        {
          question: "What analytics and reporting are available?",
          answer: "You get comprehensive analytics including real-time performance tracking, conversion attribution, ROI analysis, audience insights, campaign comparison reports, and custom dashboard creation. All data can be exported for further analysis."
        },
        {
          question: "Can I integrate with my existing tools?",
          answer: "Yes! We integrate with 100+ popular tools including Salesforce, HubSpot, Marketo, Google Analytics, Facebook Ads, LinkedIn Ads, Zapier, and many more. Custom integrations are available for Enterprise clients."
        }
      ]
    },
    {
      title: "Pricing & Billing",
      icon: Phone,
      faqs: [
        {
          question: "How does your pricing work?",
          answer: "We offer three transparent pricing tiers: Starter ($299/month), Professional ($799/month), and Enterprise (custom pricing). All plans include our core features with varying levels of campaigns, support, and advanced features. No setup fees or hidden costs."
        },
        {
          question: "Can I change my plan at any time?",
          answer: "Yes, you can upgrade or downgrade your plan at any time. Upgrades take effect immediately, while downgrades take effect at your next billing cycle. Our team will help ensure a smooth transition."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards (Visa, MasterCard, American Express), bank transfers, and purchase orders for Enterprise customers. All payments are processed securely with enterprise-grade encryption."
        },
        {
          question: "Is there a money-back guarantee?",
          answer: "Yes! We offer a 30-day money-back guarantee on all paid plans. If you're not completely satisfied within the first 30 days, we'll provide a full refund, no questions asked."
        }
      ]
    },
    {
      title: "Support & Services",
      icon: MessageSquare,
      faqs: [
        {
          question: "What kind of support do you provide?",
          answer: "Support varies by plan: Starter includes email support and monthly consultations, Professional includes priority support with a dedicated Customer Success Manager and weekly consultations, Enterprise includes 24/7 dedicated support with daily strategy sessions."
        },
        {
          question: "Do you offer training and onboarding?",
          answer: "Yes! All plans include onboarding support. Professional and Enterprise plans include guided onboarding with strategy consultation. We also provide video tutorials, documentation, webinars, and one-on-one training sessions."
        },
        {
          question: "Can you help with campaign strategy and optimization?",
          answer: "Absolutely! Our team of performance marketing experts provides strategic guidance, campaign optimization recommendations, and ongoing consultation based on your plan level. We're here to ensure your success."
        },
        {
          question: "What if I need custom features or integrations?",
          answer: "Enterprise clients can request custom features, integrations, and white-label options. Our development team works closely with enterprise customers to build tailored solutions that meet specific business requirements."
        }
      ]
    },
    {
      title: "Performance & Results",
      icon: HelpCircle,
      faqs: [
        {
          question: "What kind of results can I expect?",
          answer: "Our clients typically see a 300% average ROI increase, 95% campaign success rate, and significant improvements in lead quality and conversion rates. Results vary by industry and campaign complexity, but most clients see meaningful improvements within 30-60 days."
        },
        {
          question: "How do you measure campaign success?",
          answer: "We track comprehensive KPIs including conversion rates, cost per acquisition, return on ad spend (ROAS), lifetime value, lead quality scores, and attribution across all touchpoints. You can customize tracking based on your specific business objectives."
        },
        {
          question: "What industries do you serve?",
          answer: "We serve B2B companies across all industries including Technology, Healthcare, Finance, Manufacturing, Professional Services, and more. Our platform is designed to work for any business that wants to improve their marketing performance."
        },
        {
          question: "How do you ensure data privacy and security?",
          answer: "We maintain enterprise-grade security with SOC 2 compliance, GDPR compliance tools, data encryption at rest and in transit, role-based access controls, and regular security audits. Your data privacy and security are our top priorities."
        }
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
                Frequently Asked Questions
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
                <span className="hero-text bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Common Questions
                </span>
                <br />
                <span className="text-foreground">About Our Platform</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Find answers to the most common questions about Asteriaconnect's promotional campaign 
                platform, features, pricing, and support services.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  asChild
                  className="bg-gradient-primary text-white shadow-primary hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <a href="https://salescentri.com/contact/support-request/live-chat" target="_blank" rel="noopener noreferrer">
                    Live Chat Support
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  asChild
                >
                  <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                    Book Demo
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {faqCategories.map((category, categoryIndex) => (
                <div key={category.title} className="mb-16">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">{category.title}</h2>
                  </div>
                  
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem 
                        key={faqIndex} 
                        value={`${categoryIndex}-${faqIndex}`}
                        className="border border-border/50 rounded-xl px-6 hover:border-primary/20 transition-colors"
                      >
                        <AccordionTrigger className="text-left hover:text-primary transition-colors py-6">
                          <span className="text-lg font-medium">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="pb-6">
                          <p className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Still Have Questions?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our support team is here to help. Get in touch and we'll provide personalized answers to your questions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="p-6 bg-background rounded-xl border border-border/50 hover:border-primary/20 transition-colors">
                  <MessageSquare className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Live Chat</h3>
                  <p className="text-sm text-muted-foreground mb-4">Get instant help from our support team</p>
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <a href="https://salescentri.com/contact/support-request/live-chat" target="_blank" rel="noopener noreferrer">
                      Start Chat
                    </a>
                  </Button>
                </div>
                
                <div className="p-6 bg-background rounded-xl border border-border/50 hover:border-primary/20 transition-colors">
                  <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Phone Support</h3>
                  <p className="text-sm text-muted-foreground mb-4">Speak directly with our experts</p>
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <a href="tel:+1-800-ASTERIA">Call Now</a>
                  </Button>
                </div>
                
                <div className="p-6 bg-background rounded-xl border border-border/50 hover:border-primary/20 transition-colors">
                  <HelpCircle className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Support Ticket</h3>
                  <p className="text-sm text-muted-foreground mb-4">Submit a detailed support request</p>
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <a href="https://salescentri.com/contact/support-request/submit-ticket" target="_blank" rel="noopener noreferrer">
                      Submit Ticket
                    </a>
                  </Button>
                </div>
              </div>
              
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
                >
                  <a href="https://salescentri.com/contact" target="_blank" rel="noopener noreferrer">
                    Contact Sales
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Structured Data for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqCategories.flatMap(category =>
              category.faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            )
          })
        }} />
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;