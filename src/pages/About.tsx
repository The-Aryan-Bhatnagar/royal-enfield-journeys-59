import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crown, Users, Target, Heart, Bike, MapPin, Award } from "lucide-react";
import { Link } from "react-router-dom";
import membersImage from "@/assets/members-image.jpg";
import fleetImage from "@/assets/fleet-image.jpg";

const About = () => {
  const foundingMembers = [
    {
      name: "Rajesh Kumar",
      role: "Founder & President",
      bike: "Royal Enfield Interceptor 650",
      experience: "15+ years of riding",
      description: "Passionate about long-distance touring and heritage motorcycles."
    },
    {
      name: "Arjun Singh", 
      role: "Vice President",
      bike: "Royal Enfield Classic 350",
      experience: "12+ years of riding",
      description: "Expert mechanic and safety advocate for the group."
    },
    {
      name: "Priya Sharma",
      role: "Secretary & Ride Coordinator", 
      bike: "Royal Enfield Meteor 350",
      experience: "8+ years of riding",
      description: "Organizes our epic adventures and ensures everyone's safety."
    }
  ];

  const bikeModels = [
    "Royal Enfield Interceptor 650",
    "Royal Enfield Continental GT 650", 
    "Royal Enfield Himalayan",
    "Royal Enfield Classic 350",
    "Royal Enfield Meteor 350",
    "Royal Enfield Bullet 350",
    "Royal Enfield Thunderbird X",
    "Royal Enfield Scram 411"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section 
        className="py-20 bg-gradient-to-b from-royal-cream to-background relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${membersImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <Badge className="mb-6 bg-royal-blue/10 text-royal-blue border-royal-blue/20">
            <Crown className="w-4 h-4 mr-2" />
            Est. 2019
          </Badge>
          <h1 className="text-5xl font-bold text-foreground mb-6">About Taj Royals</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Born from a shared passion for Royal Enfield motorcycles and the spirit of adventure, 
            Taj Royals has grown into India's premier Royal Enfield riding community.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-adventure-copper/10 text-adventure-copper border-adventure-copper/20">
                Our Story
              </Badge>
              <h2 className="text-4xl font-bold text-foreground mb-6">The Royal Journey</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  In 2019, a group of Royal Enfield enthusiasts came together with a simple vision: 
                  to create a brotherhood that celebrates the heritage and adventure spirit of 
                  these legendary motorcycles.
                </p>
                <p>
                  What started as weekend rides has evolved into an organized community of over 150 members, 
                  spanning across different cities but united by our love for the thump of Royal Enfield engines.
                </p>
                <p>
                  Today, Taj Royals organizes epic rides, charity events, technical workshops, 
                  and social gatherings that strengthen our bond as riders and friends.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={membersImage} 
                alt="Taj Royals group with their motorcycles"
                className="rounded-lg shadow-adventure"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gradient-to-r from-muted to-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 shadow-royal">
              <Target className="w-12 h-12 text-royal-gold mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be India's most respected Royal Enfield community, preserving the heritage 
                of motorcycling while creating unforgettable adventures and lasting friendships 
                across the diverse landscapes of our incredible country.
              </p>
            </Card>
            <Card className="p-8 shadow-royal">
              <Heart className="w-12 h-12 text-royal-burgundy mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To unite Royal Enfield riders in a spirit of camaraderie, safety, and adventure. 
                We organize rides, share knowledge, support each other, and give back to the 
                communities we ride through, always upholding the royal heritage of motorcycling.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-royal-gold/10 text-royal-gold border-royal-gold/20">
              <Users className="w-4 h-4 mr-2" />
              Leadership
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">Meet Our Founding Members</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              The passionate riders who turned a dream into India's most vibrant Royal Enfield community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {foundingMembers.map((member, index) => (
              <Card key={index} className="p-6 text-center shadow-adventure hover:shadow-royal transition-smooth">
                <div className="w-20 h-20 bg-gradient-royal rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Crown className="w-8 h-8 text-royal-cream" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                <Badge className="mb-3 bg-adventure-copper/10 text-adventure-copper border-adventure-copper/20">
                  {member.role}
                </Badge>
                <p className="text-sm text-royal-blue font-medium mb-2">{member.bike}</p>
                <p className="text-sm text-muted-foreground mb-3">{member.experience}</p>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Fleet */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-royal-blue/10 text-royal-blue border-royal-blue/20">
              <Bike className="w-4 h-4 mr-2" />
              Our Fleet
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">Legendary Machines</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
              Our members ride a diverse fleet of Royal Enfield motorcycles, each with its own character 
              and capability for different types of adventures.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {bikeModels.map((bike, index) => (
                  <Card key={index} className="p-4 text-center shadow-adventure hover:shadow-royal transition-smooth">
                    <Bike className="w-6 h-6 text-adventure-copper mx-auto mb-2" />
                    <p className="text-sm font-medium text-foreground">{bike}</p>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <img 
                src={fleetImage} 
                alt="Royal Enfield fleet showcase"
                className="rounded-lg shadow-adventure"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-royal">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-royal-cream mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Crown className="w-12 h-12 text-royal-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-royal-cream mb-2">Heritage</h3>
              <p className="text-royal-cream/80">Honoring the legacy of Royal Enfield</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-royal-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-royal-cream mb-2">Brotherhood</h3>
              <p className="text-royal-cream/80">United by passion, bonded by adventure</p>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 text-royal-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-royal-cream mb-2">Adventure</h3>
              <p className="text-royal-cream/80">Exploring India's diverse landscapes</p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-royal-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-royal-cream mb-2">Excellence</h3>
              <p className="text-royal-cream/80">Commitment to safety and quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Be Part of Our Legacy?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join the Taj Royals family and experience the thrill of riding with India's 
            most passionate Royal Enfield community.
          </p>
          <Button 
            asChild
            size="lg" 
            className="bg-gradient-adventure shadow-adventure"
          >
            <Link to="/membership">
              Join Taj Royals <Crown className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;