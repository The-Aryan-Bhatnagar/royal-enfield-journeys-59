import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Calendar, Trophy, Crown, Bike, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/taj-royals-group.webp";
import fleetImage from "@/assets/fleet-image.jpg";
import membersImage from "@/assets/members-image.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-royal-blue/30 to-adventure-copper/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_30%,_rgba(0,0,0,0.3)_100%)]" />
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <Badge className="mb-8 bg-royal-gold/20 text-royal-gold border-royal-gold/50 backdrop-blur-sm px-6 py-2 text-lg shadow-glow">
            <Crown className="w-5 h-5 mr-3" />
            Royal Enfield Adventure Club
          </Badge>
          
          <h1 className="text-6xl md:text-8xl font-black text-royal-cream mb-8 tracking-tight">
            TAJ <span className="text-transparent bg-gradient-adventure bg-clip-text">ROYALS</span>
          </h1>
          
          <div className="max-w-3xl mx-auto mb-10">
            <p className="text-2xl md:text-3xl text-foreground mb-4 leading-relaxed font-light">
              Where legends ride together.
            </p>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              Experience the royal heritage of motorcycling through epic adventures 
              across India's majestic landscapes.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              asChild
              size="lg" 
              className="bg-gradient-adventure text-black hover:shadow-glow transition-all duration-500 text-xl px-10 py-4 rounded-2xl font-bold border-2 border-royal-gold/30 hover:border-royal-gold"
            >
              <Link to="/membership">
                Join Our Brotherhood <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-2 border-royal-cream/40 text-royal-cream hover:bg-royal-cream/10 backdrop-blur-sm text-xl px-10 py-4 rounded-2xl font-bold hover:border-royal-cream transition-all duration-500"
            >
              <Link to="/rides">
                Explore Rides
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Animated Motorcycle on Path */}
        <div className="absolute top-1/2 left-0 w-full h-32 overflow-hidden pointer-events-none">
          <div className="relative w-full h-full">
            {/* Curved dashed path */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path
                d="M0,60 Q300,20 600,60 T1200,60"
                stroke="url(#pathGradient)"
                strokeWidth="3"
                strokeDasharray="20,10"
                fill="none"
                className="animate-[dash_8s_linear_infinite]"
              />
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--royal-gold))" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="hsl(var(--royal-gold))" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="hsl(var(--adventure-copper))" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Animated motorcycle */}
            <div className="absolute top-1/2 -translate-y-1/2 animate-[bikeRide_12s_ease-in-out_infinite]">
              <div className="relative">
                <Bike className="w-8 h-8 text-royal-gold drop-shadow-glow" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-royal-gold rounded-full animate-pulse opacity-60"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-royal-gold/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-royal-gold rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--royal-blue)_0%,_transparent_50%)] opacity-10" />
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-10 shadow-glow hover:shadow-royal transition-all duration-500 bg-gradient-to-br from-card to-muted border-royal-gold/20 hover:border-royal-gold/40 group">
              <div className="bg-gradient-adventure p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-smooth shadow-adventure">
                <Users className="w-12 h-12 text-black" />
              </div>
              <h3 className="text-4xl font-black text-primary mb-3">150+</h3>
              <p className="text-muted-foreground font-medium tracking-wide">Royal Members</p>
            </Card>
            <Card className="text-center p-10 shadow-glow hover:shadow-royal transition-all duration-500 bg-gradient-to-br from-card to-muted border-royal-gold/20 hover:border-royal-gold/40 group">
              <div className="bg-gradient-royal p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-smooth shadow-royal">
                <MapPin className="w-12 h-12 text-royal-cream" />
              </div>
              <h3 className="text-4xl font-black text-primary mb-3">25+</h3>
              <p className="text-muted-foreground font-medium tracking-wide">Epic Routes</p>
            </Card>
            <Card className="text-center p-10 shadow-glow hover:shadow-royal transition-all duration-500 bg-gradient-to-br from-card to-muted border-royal-gold/20 hover:border-royal-gold/40 group">
              <div className="bg-gradient-to-r from-adventure-copper to-royal-burgundy p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-smooth shadow-adventure">
                <Trophy className="w-12 h-12 text-royal-cream" />
              </div>
              <h3 className="text-4xl font-black text-primary mb-3">5+</h3>
              <p className="text-muted-foreground font-medium tracking-wide">Years of Legacy</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Highlights Banner */}
      <section className="py-20 bg-gradient-to-r from-royal-blue/10 via-background to-adventure-copper/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--royal-gold)_0%,_transparent_70%)] opacity-5" />
        
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-royal-gold/20 text-royal-gold border-royal-gold/40 px-6 py-3 text-lg">
              <Trophy className="w-5 h-5 mr-2" />
              Our Achievements
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Champions on the Road
            </h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              Celebrating our victories and the unbreakable bonds forged through countless adventures
            </p>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-adventure rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Taj Royals members celebrating victory at motorcycle rally with trophies and awards"
                className="w-full rounded-xl shadow-glow object-cover max-h-[500px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-xl"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border border-royal-gold/30">
                  <h3 className="text-2xl font-bold text-royal-cream mb-2">Rally Champions 2024</h3>
                  <p className="text-royal-cream/80 text-lg">
                    Our brotherhood standing strong after another successful rally conquest
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-royal-blue/10 text-royal-blue border-royal-blue/20">
                Our Legacy
              </Badge>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                The Royal Brotherhood
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Founded by passionate Royal Enfield enthusiasts, Taj Royals represents the spirit 
                of adventure, camaraderie, and the timeless appeal of classic motorcycling. 
                We're not just a riding group – we're a family bound by our love for the open road.
              </p>
              <Button asChild className="bg-gradient-royal shadow-royal">
                <Link to="/about">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src={membersImage} 
                alt="Taj Royals members with their Royal Enfield motorcycles"
                className="rounded-lg shadow-adventure"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-adventure-copper/10 text-adventure-copper border-adventure-copper/20">
              <Bike className="w-4 h-4 mr-2" />
              Our Fleet
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">Legends on Wheels</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              From the thundering Interceptor to the classic Bullet, our members ride 
              the finest Royal Enfield motorcycles across India's diverse terrains.
            </p>
          </div>
          <div className="relative">
            <img 
              src={fleetImage} 
              alt="Collection of Royal Enfield motorcycles" 
              className="w-full rounded-lg shadow-adventure"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-black via-royal-blue/20 to-adventure-copper/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_25%_25%,_white_1px,_transparent_1px)] bg-[length:60px_60px]" />
        
        <div className="max-w-5xl mx-auto px-4 text-center relative">
          <div className="bg-gradient-to-r from-card/50 to-muted/50 backdrop-blur-xl rounded-3xl p-12 border border-royal-gold/20 shadow-glow">
            <Badge className="mb-8 bg-royal-gold/30 text-royal-gold border-royal-gold/50 px-6 py-2 text-lg">
              Join the Elite
            </Badge>
            
            <h2 className="text-5xl md:text-6xl font-black text-foreground mb-8 leading-tight">
              Ready to Join the <br />
              <span className="text-transparent bg-gradient-adventure bg-clip-text">Royal Legacy?</span>
            </h2>
            
            <p className="text-foreground/80 text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
              Experience the thrill of riding with India's most prestigious Royal Enfield community. 
              Adventure awaits, brotherhood calls.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                asChild
                size="lg" 
                className="bg-gradient-adventure text-black hover:shadow-glow transition-all duration-500 text-xl px-12 py-4 rounded-2xl font-bold border-2 border-royal-gold/50 hover:border-royal-gold"
              >
                <Link to="/membership">
                  Start Your Journey <Crown className="ml-3 h-6 w-6" />
                </Link>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                size="lg" 
                className="border-2 border-primary/50 text-primary hover:bg-primary/10 backdrop-blur-sm text-xl px-12 py-4 rounded-2xl font-bold hover:border-primary transition-all duration-500"
              >
                <Link to="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;