import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, TrendingUp, Target, Users, BarChart3 } from "lucide-react";

const Blog = () => {
  const featuredPost = {
    title: "The Future of Performance Marketing: AI-Driven Campaign Optimization",
    excerpt: "Discover how artificial intelligence is revolutionizing promotional campaigns and driving unprecedented ROI for B2B companies.",
    date: "Dec 15, 2024",
    author: "Sarah Johnson",
    category: "Strategy",
    readTime: "8 min read",
    image: "/blog/featured.jpg"
  };

  const blogPosts = [
    {
      title: "10 Proven Strategies for B2B Lead Generation",
      excerpt: "Learn the most effective tactics for generating high-quality leads that convert into paying customers.",
      date: "Dec 12, 2024",
      author: "Michael Chen",
      category: "Lead Generation",
      readTime: "6 min read",
      icon: Users
    },
    {
      title: "Conversion Rate Optimization: A Complete Guide",
      excerpt: "Step-by-step guide to optimizing your conversion rates and maximizing campaign performance.",
      date: "Dec 10, 2024",
      author: "Emily Rodriguez",
      category: "Optimization",
      readTime: "12 min read",
      icon: Target
    },
    {
      title: "ROI Marketing: Measuring What Matters",
      excerpt: "Essential metrics and KPIs every performance marketer should track to ensure campaign success.",
      date: "Dec 8, 2024",
      author: "David Kim",
      category: "Analytics",
      readTime: "7 min read",
      icon: TrendingUp
    },
    {
      title: "Multi-Channel Campaign Management Best Practices",
      excerpt: "How to coordinate campaigns across multiple channels for maximum impact and efficiency.",
      date: "Dec 5, 2024",
      author: "Sarah Johnson",
      category: "Strategy",
      readTime: "9 min read",
      icon: BarChart3
    },
    {
      title: "The Psychology of B2B Buyer Behavior",
      excerpt: "Understanding the decision-making process of B2B buyers to create more effective campaigns.",
      date: "Dec 3, 2024",
      author: "Emily Rodriguez",
      category: "Psychology",
      readTime: "5 min read",
      icon: Users
    },
    {
      title: "Marketing Automation: Beyond Email Sequences",
      excerpt: "Advanced automation strategies that go beyond basic email marketing to drive engagement.",
      date: "Dec 1, 2024",
      author: "Michael Chen",
      category: "Automation",
      readTime: "10 min read",
      icon: Target
    }
  ];

  const categories = [
    { name: "Strategy", count: 12, color: "bg-primary/10 text-primary" },
    { name: "Lead Generation", count: 8, color: "bg-accent/10 text-accent" },
    { name: "Optimization", count: 15, color: "bg-primary/10 text-primary" },
    { name: "Analytics", count: 6, color: "bg-accent/10 text-accent" },
    { name: "Automation", count: 9, color: "bg-primary/10 text-primary" },
    { name: "Psychology", count: 4, color: "bg-accent/10 text-accent" }
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
                Thought Leadership
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
                <span className="hero-text bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Performance Marketing
                </span>
                <br />
                <span className="text-foreground">Insights & Strategies</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Stay ahead of the curve with expert insights, proven strategies, and industry trends 
                that drive exceptional marketing performance.
              </p>
              
              <Button 
                size="lg" 
                asChild
                className="bg-gradient-primary text-white shadow-primary hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <a href="https://salescentri.com/resources/whitepapers-ebooks" target="_blank" rel="noopener noreferrer">
                  Download Free Resources
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Card className="overflow-hidden hover:shadow-card transition-all duration-300 border-primary/20 bg-gradient-card">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 flex items-center justify-center">
                    <div className="w-full h-64 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <span className="text-white text-6xl font-bold">AI</span>
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col justify-center">
                    <Badge className="mb-4 w-fit bg-gradient-primary text-white">
                      Featured Article
                    </Badge>
                    
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h2>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {featuredPost.readTime}
                      </Badge>
                    </div>
                    
                    <Button 
                      asChild
                      className="bg-gradient-primary text-white shadow-primary hover:shadow-lg w-fit group"
                    >
                      <a href="https://salescentri.com/resources/tutorials-webinars" target="_blank" rel="noopener noreferrer">
                        Read Full Article
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-12">
                {/* Main Content */}
                <div className="lg:w-2/3">
                  <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Articles</h2>
                    <p className="text-xl text-muted-foreground">
                      Expert insights to elevate your marketing performance
                    </p>
                  </div>

                  <div className="space-y-8">
                    {blogPosts.map((post, index) => (
                      <Card 
                        key={post.title}
                        className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/20"
                      >
                        <CardHeader>
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <post.icon className="h-6 w-6 text-white" />
                            </div>
                            
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <Badge variant="secondary" className="text-xs">
                                  {post.category}
                                </Badge>
                                <span className="text-xs text-muted-foreground">{post.readTime}</span>
                              </div>
                              
                              <CardTitle className="text-xl group-hover:text-primary transition-colors mb-2">
                                {post.title}
                              </CardTitle>
                              
                              <CardDescription className="text-muted-foreground">
                                {post.excerpt}
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        
                        <CardContent>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <User className="h-4 w-4" />
                                <span>{post.author}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span>{post.date}</span>
                              </div>
                            </div>
                            
                            <Button 
                              variant="ghost" 
                              asChild
                              className="text-primary hover:text-primary group/btn"
                            >
                              <a href="https://salescentri.com/resources/tutorials-webinars" target="_blank" rel="noopener noreferrer">
                                Read More
                                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                              </a>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Sidebar */}
                <div className="lg:w-1/3">
                  <div className="sticky top-24 space-y-8">
                    {/* Categories */}
                    <Card className="p-6">
                      <h3 className="text-lg font-semibold mb-4">Categories</h3>
                      <div className="space-y-3">
                        {categories.map((category) => (
                          <div key={category.name} className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                              {category.name}
                            </span>
                            <Badge variant="secondary" className={`text-xs ${category.color}`}>
                              {category.count}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </Card>

                    {/* Newsletter Signup */}
                    <Card className="p-6 bg-gradient-card border-primary/20">
                      <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Get the latest performance marketing insights delivered to your inbox weekly.
                      </p>
                      <Button 
                        asChild
                        className="bg-gradient-primary text-white shadow-primary w-full"
                      >
                        <a href="https://salescentri.com/resources/whitepapers-ebooks" target="_blank" rel="noopener noreferrer">
                          Subscribe Now
                        </a>
                      </Button>
                    </Card>

                    {/* Resources */}
                    <Card className="p-6">
                      <h3 className="text-lg font-semibold mb-4">Free Resources</h3>
                      <div className="space-y-3">
                        <a href="https://salescentri.com/resources/case-studies" target="_blank" rel="noopener noreferrer" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                          → Case Studies Library
                        </a>
                        <a href="https://salescentri.com/resources/whitepapers-ebooks" target="_blank" rel="noopener noreferrer" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                          → Marketing Whitepapers
                        </a>
                        <a href="https://salescentri.com/resources/tutorials-webinars" target="_blank" rel="noopener noreferrer" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                          → Video Tutorials
                        </a>
                        <a href="https://salescentri.com/docs/user-guide" target="_blank" rel="noopener noreferrer" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                          → Platform Documentation
                        </a>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-secondary via-secondary to-secondary/80 text-secondary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Apply These Strategies?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Put these insights into action with our performance marketing platform. 
                Start your free trial and see the results for yourself.
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
                  <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                    Book Demo
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

export default Blog;