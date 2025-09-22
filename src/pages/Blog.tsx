import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, Clock, ArrowRight, BookOpen, Wrench, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import bikeServiceImage from "@/assets/gallery/bike-service-2024.webp";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Essential Maintenance Tips for Your Royal Enfield",
      category: "Maintenance",
      author: "Arjun Singh",
      date: "March 15, 2024",
      readTime: "5 min read",
      summary: "Keep your Royal Enfield running smoothly with these expert maintenance tips from our experienced mechanics.",
      image: "/api/placeholder/400/250",
      tags: ["Maintenance", "Tips", "Royal Enfield"]
    },
    {
      id: 2,
      title: "Conquering the Leh-Ladakh Highway: A Rider's Guide",
      category: "Travel",
      author: "Priya Sharma",
      date: "March 10, 2024", 
      readTime: "8 min read",
      summary: "Everything you need to know before embarking on the ultimate high-altitude motorcycle adventure to Leh-Ladakh.",
      image: "/api/placeholder/400/250",
      tags: ["Travel", "Leh-Ladakh", "Adventure"]
    },
    {
      id: 3,
      title: "Safety Gear Essentials: Protecting the Royal Rider",
      category: "Safety",
      author: "Rajesh Kumar", 
      date: "March 5, 2024",
      readTime: "6 min read",
      summary: "A comprehensive guide to choosing the right safety gear for long-distance rides and adventure touring.",
      image: "/api/placeholder/400/250",
      tags: ["Safety", "Gear", "Protection"]
    },
    {
      id: 4,
      title: "The Heritage of Royal Enfield: From Britain to India",
      category: "Heritage",
      author: "Vikram Patel",
      date: "February 28, 2024",
      readTime: "10 min read", 
      summary: "Explore the rich history and evolution of Royal Enfield motorcycles from their British origins to Indian renaissance.",
      image: "/api/placeholder/400/250",
      tags: ["Heritage", "History", "Royal Enfield"]
    },
    {
      id: 5,
      title: "Best Camping Spots for Motorcycle Tours in India",
      category: "Travel",
      author: "Anjali Reddy",
      date: "February 20, 2024",
      readTime: "7 min read",
      summary: "Discover the most scenic and biker-friendly camping destinations across India for your next adventure.",
      image: "/api/placeholder/400/250", 
      tags: ["Travel", "Camping", "India"]
    },
    {
      id: 6,
      title: "Winter Riding: Staying Warm and Safe on the Road",
      category: "Safety",
      author: "Karan Malhotra",
      date: "February 15, 2024",
      readTime: "4 min read",
      summary: "Essential tips and gear recommendations for comfortable and safe winter motorcycle riding.",
      image: "/api/placeholder/400/250",
      tags: ["Safety", "Winter", "Riding Tips"]
    }
  ];

  const categories = [
    { name: "All Posts", count: 18, icon: <BookOpen className="w-4 h-4" /> },
    { name: "Travel", count: 8, icon: <MapPin className="w-4 h-4" /> },
    { name: "Maintenance", count: 5, icon: <Wrench className="w-4 h-4" /> },
    { name: "Safety", count: 3, icon: <Badge className="w-4 h-4" /> },
    { name: "Heritage", count: 2, icon: <Badge className="w-4 h-4" /> }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Travel": return "bg-royal-blue/10 text-royal-blue border-royal-blue/20";
      case "Maintenance": return "bg-adventure-copper/10 text-adventure-copper border-adventure-copper/20";
      case "Safety": return "bg-royal-burgundy/10 text-royal-burgundy border-royal-burgundy/20";
      case "Heritage": return "bg-royal-gold/10 text-royal-gold border-royal-gold/20";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section 
        className="py-20 bg-gradient-to-b from-royal-cream to-background relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${bikeServiceImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <Badge className="mb-6 bg-royal-blue/10 text-royal-blue border-royal-blue/20">
            <BookOpen className="w-4 h-4 mr-2" />
            Knowledge Hub
          </Badge>
          <h1 className="text-5xl font-bold text-foreground mb-6">Blog & Updates</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest riding tips, travel guides, maintenance advice, 
            and stories from the Taj Royals community. Knowledge that enhances every ride.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="p-6 shadow-adventure sticky top-24">
                <h3 className="text-lg font-bold text-foreground mb-6">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-muted cursor-pointer transition-smooth"
                    >
                      <div className="flex items-center">
                        {category.icon}
                        <span className="ml-2 font-medium">{category.name}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <h4 className="font-bold text-foreground mb-4">Popular Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">Royal Enfield</Badge>
                    <Badge variant="outline" className="text-xs">Adventure</Badge>
                    <Badge variant="outline" className="text-xs">Leh-Ladakh</Badge>
                    <Badge variant="outline" className="text-xs">Maintenance</Badge>
                    <Badge variant="outline" className="text-xs">Safety</Badge>
                    <Badge variant="outline" className="text-xs">Travel</Badge>
                  </div>
                </div>
              </Card>
            </div>

            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden shadow-adventure hover:shadow-royal transition-smooth group cursor-pointer">
                    <div className="relative overflow-hidden">
                      <div className="w-full h-48 bg-gradient-to-br from-royal-blue/20 to-adventure-copper/20 flex items-center justify-center">
                        <BookOpen className="w-12 h-12 text-muted-foreground" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-royal-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                      <Badge className={`absolute top-4 left-4 ${getCategoryColor(post.category)}`}>
                        {post.category}
                      </Badge>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-royal-blue transition-smooth">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {post.summary}
                      </p>
                      
                      <div className="flex items-center text-xs text-muted-foreground mb-4">
                        <User className="w-3 h-3 mr-1" />
                        <span className="mr-4">{post.author}</span>
                        <Calendar className="w-3 h-3 mr-1" />
                        <span className="mr-4">{post.date}</span>
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 3).map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <Button variant="ghost" className="p-0 h-auto font-medium text-royal-blue hover:text-royal-blue/80">
                        Read More <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-12">
                <Button className="bg-gradient-royal shadow-royal">
                  Load More Articles
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-adventure-copper/10 text-adventure-copper border-adventure-copper/20">
              Featured Content
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">Popular This Month</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Most-read articles and guides that have been helping our community members enhance their riding experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 shadow-adventure hover:shadow-royal transition-smooth">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-royal-gold rounded-full flex items-center justify-center text-royal-blue font-bold">
                  1
                </div>
                <div className="ml-3">
                  <h4 className="font-bold text-foreground">Himalayan Prep Guide</h4>
                  <p className="text-sm text-muted-foreground">Complete preparation checklist</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Everything you need to know before heading to high-altitude adventures.
              </p>
              <Button variant="ghost" className="p-0 h-auto text-royal-blue">
                Read Article <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </Card>

            <Card className="p-6 shadow-adventure hover:shadow-royal transition-smooth">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-adventure-copper rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div className="ml-3">
                  <h4 className="font-bold text-foreground">Engine Tuning Basics</h4>
                  <p className="text-sm text-muted-foreground">DIY maintenance tips</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Learn to tune and maintain your Royal Enfield for optimal performance.
              </p>
              <Button variant="ghost" className="p-0 h-auto text-royal-blue">
                Read Article <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </Card>

            <Card className="p-6 shadow-adventure hover:shadow-royal transition-smooth">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-royal-burgundy rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div className="ml-3">
                  <h4 className="font-bold text-foreground">Monsoon Riding Safety</h4>
                  <p className="text-sm text-muted-foreground">Rainy season precautions</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Essential safety tips for riding during India's monsoon season.
              </p>
              <Button variant="ghost" className="p-0 h-auto text-royal-blue">
                Read Article <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-royal">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-royal-cream mb-6">
            Stay Updated with Taj Royals
          </h2>
          <p className="text-royal-cream/90 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss the latest riding tips, 
            adventure stories, and community updates from the royal brotherhood.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-royal-gold"
            />
            <Button 
              size="lg" 
              className="bg-royal-gold text-royal-blue hover:bg-royal-gold/90 shadow-adventure"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;