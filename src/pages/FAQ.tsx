import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp, HelpCircle, Users, Bike, Calendar, Shield, Crown } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const faqCategories = [
    {
      id: "membership",
      title: "Membership",
      icon: <Users className="w-5 h-5" />,
      color: "bg-royal-blue/10 text-royal-blue border-royal-blue/20",
      questions: [
        {
          id: "membership-1",
          question: "What are the requirements to join Taj Royals?",
          answer: "To join Taj Royals, you need to own a Royal Enfield motorcycle (any model), have a valid driving license with 2-wheeler endorsement, be at least 18 years old with minimum 1 year of riding experience, and demonstrate commitment to safety protocols and group values."
        },
        {
          id: "membership-2", 
          question: "How much does membership cost?",
          answer: "We offer two membership tiers: Royal Rider (₹2,500 annual) which includes all ride access, club merchandise, roadside assistance, and priority booking. Heritage Member (₹5,000 lifetime) includes all Royal Rider benefits plus lifetime membership, exclusive heritage rides, VIP event access, and custom number plate."
        },
        {
          id: "membership-3",
          question: "What benefits do members get?",
          answer: "Members enjoy priority ride bookings, official club merchandise, 24/7 roadside assistance, group insurance coverage, safety training sessions, networking opportunities, member discounts at partner garages and gear stores, and access to exclusive events and workshops."
        },
        {
          id: "membership-4",
          question: "Can I join if I have a different motorcycle brand?",
          answer: "Taj Royals is exclusively for Royal Enfield owners. This ensures our rides are tailored to the specific capabilities and characteristics of Royal Enfield motorcycles, maintaining group cohesion and safety standards."
        }
      ]
    },
    {
      id: "rides",
      title: "Rides & Events", 
      icon: <Calendar className="w-5 h-5" />,
      color: "bg-adventure-copper/10 text-adventure-copper border-adventure-copper/20",
      questions: [
        {
          id: "rides-1",
          question: "How do I register for a ride?",
          answer: "Members can register for rides through our website or WhatsApp group. Registration typically opens 2-4 weeks before the ride date. Early registration is recommended as spots fill up quickly, especially for popular destinations like Leh-Ladakh."
        },
        {
          id: "rides-2",
          question: "What should I bring on rides?",
          answer: "Essential items include DOT-approved helmet, protective riding gear, valid documents (license, insurance, registration), tool kit, spare parts, first-aid kit, and personal items. Detailed packing lists are shared before each ride based on the destination and duration."
        },
        {
          id: "rides-3", 
          question: "Are rides suitable for beginners?",
          answer: "We organize rides for different skill levels. Easy rides (coastal routes, short distances) are perfect for beginners, while challenging rides (high-altitude, long-distance) require advanced riding experience. Each ride description includes difficulty level and requirements."
        },
        {
          id: "rides-4",
          question: "What if my bike breaks down during a ride?",
          answer: "Our rides include experienced mechanics and support vehicles. We provide basic roadside assistance, tools, and spare parts. For major breakdowns, we arrange local mechanic support or transportation. Group solidarity means no rider is left behind."
        }
      ]
    },
    {
      id: "bikes", 
      title: "Motorcycles & Maintenance",
      icon: <Bike className="w-5 h-5" />,
      color: "bg-royal-gold/10 text-royal-gold border-royal-gold/20", 
      questions: [
        {
          id: "bikes-1",
          question: "Which Royal Enfield models are most popular in the group?",
          answer: "Our members ride various models: Interceptor 650 and Continental GT 650 for highway cruising, Himalayan for adventure touring, Classic 350 and Meteor 350 for city and highway rides, and Bullet 350 for the classic experience. Each model brings unique character to our rides."
        },
        {
          id: "bikes-2",
          question: "Do you provide maintenance workshops?",
          answer: "Yes, we conduct monthly maintenance workshops covering basic servicing, troubleshooting, tool usage, and riding techniques. These free sessions for members are led by experienced mechanics and senior riders, helping you understand your motorcycle better."
        },
        {
          id: "bikes-3", 
          question: "What modifications are recommended for long rides?",
          answer: "Popular modifications include crash guards, panniers or tank bags, auxiliary lights, engine guards, comfortable seats, and windshields. We recommend consulting with our technical team before major modifications to ensure they suit your riding style and bike model."
        },
        {
          id: "bikes-4",
          question: "How often should I service my Royal Enfield?",
          answer: "Follow the manufacturer's service schedule: typically every 5,000-6,000 km or 6 months. Before long rides, get a thorough check-up including engine oil, brakes, tires, chain, and electrical systems. Regular maintenance ensures reliability during adventures."
        }
      ]
    },
    {
      id: "safety",
      title: "Safety & Guidelines",
      icon: <Shield className="w-5 h-5" />,
      color: "bg-royal-burgundy/10 text-royal-burgundy border-royal-burgundy/20",
      questions: [
        {
          id: "safety-1", 
          question: "What safety gear is mandatory?",
          answer: "Mandatory gear includes DOT/ISI approved helmet, riding jacket with armor, riding gloves, riding boots/shoes, and knee guards. Additional recommended gear includes back protector, elbow guards, and reflective vest for night riding. Safety is non-negotiable in our group."
        },
        {
          id: "safety-2",
          question: "What are the group riding rules?",
          answer: "Key rules: Follow ride leader instructions, maintain safe distances, ride in designated positions, no solo breakaways, help fellow riders, communicate through hand signals, stop only at designated points, and never overtake the ride leader without permission."
        },
        {
          id: "safety-3",
          question: "Do you have insurance coverage during rides?",
          answer: "Members get basic group insurance coverage during official rides. However, we strongly recommend having comprehensive personal insurance for your motorcycle and health insurance. The group coverage is supplementary and covers specific scenarios during organized rides."
        },
        {
          id: "safety-4", 
          question: "What happens in case of an accident?",
          answer: "We have established emergency protocols: immediate first-aid, contacting emergency services, notifying families, arranging medical assistance, and handling insurance formalities. Our ride leaders are trained in basic first-aid, and we carry emergency contact information for all participants."
        }
      ]
    }
  ];

  const quickStats = [
    { icon: <Users className="w-8 h-8" />, number: "150+", label: "Active Members" },
    { icon: <Calendar className="w-8 h-8" />, number: "25+", label: "Rides Completed" },
    { icon: <Bike className="w-8 h-8" />, number: "8", label: "RE Models" },
    { icon: <Crown className="w-8 h-8" />, number: "5", label: "Years Legacy" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-royal-cream to-background">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <Badge className="mb-6 bg-royal-blue/10 text-royal-blue border-royal-blue/20">
            <HelpCircle className="w-4 h-4 mr-2" />
            Help Center
          </Badge>
          <h1 className="text-5xl font-bold text-foreground mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about membership, rides, safety protocols, 
            and everything you need to know about being part of the Taj Royals brotherhood.
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {quickStats.map((stat, index) => (
              <Card key={index} className="p-6 text-center shadow-adventure hover:shadow-royal transition-smooth">
                <div className="text-royal-blue mb-3 flex justify-center">{stat.icon}</div>
                <div className="text-2xl font-bold text-foreground mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-adventure-copper/10 text-adventure-copper border-adventure-copper/20">
              Knowledge Base
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">Get Your Answers</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Browse through our comprehensive FAQ sections organized by topics. 
              Can't find what you're looking for? Contact us directly.
            </p>
          </div>

          <div className="space-y-8">
            {faqCategories.map((category) => (
              <div key={category.id}>
                <div className="flex items-center mb-6">
                  <div className="text-royal-blue mr-3">{category.icon}</div>
                  <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                  <Badge className={`ml-4 ${category.color}`}>
                    {category.questions.length} questions
                  </Badge>
                </div>
                
                <div className="space-y-4">
                  {category.questions.map((faq) => (
                    <Card key={faq.id} className="shadow-adventure hover:shadow-royal transition-smooth">
                      <Collapsible open={openItems.includes(faq.id)} onOpenChange={() => toggleItem(faq.id)}>
                        <CollapsibleTrigger asChild>
                          <div className="p-6 flex items-center justify-between cursor-pointer hover:bg-muted/50 transition-smooth">
                            <h4 className="text-lg font-medium text-foreground text-left pr-4">
                              {faq.question}
                            </h4>
                            {openItems.includes(faq.id) ? (
                              <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                            )}
                          </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <div className="px-6 pb-6">
                            <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-foreground mb-6">Still Have Questions?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our team is here to help you with 
              any questions about membership, rides, or the Taj Royals community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center shadow-adventure hover:shadow-royal transition-smooth">
              <HelpCircle className="w-12 h-12 text-royal-blue mx-auto mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-3">Contact Support</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get in touch with our support team for detailed assistance
              </p>
              <Button asChild className="w-full bg-gradient-royal">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </Card>

            <Card className="p-6 text-center shadow-adventure hover:shadow-royal transition-smooth">
              <Users className="w-12 h-12 text-adventure-copper mx-auto mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-3">Join Community</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Connect with fellow riders who can share their experiences
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/membership">Become Member</Link>
              </Button>
            </Card>

            <Card className="p-6 text-center shadow-adventure hover:shadow-royal transition-smooth">
              <Crown className="w-12 h-12 text-royal-gold mx-auto mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-3">Visit Events</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Attend our meetups to get answers in person from experienced riders
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/rides">View Events</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-gradient-royal">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-royal-cream mb-6">
            Ready to Join the Adventure?
          </h2>
          <p className="text-royal-cream/90 text-lg mb-8 max-w-2xl mx-auto">
            Don't let questions hold you back from experiencing the royal brotherhood. 
            Take the next step and become part of India's premier Royal Enfield community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg" 
              className="bg-royal-gold text-royal-blue hover:bg-royal-gold/90 shadow-adventure"
            >
              <Link to="/membership">
                <Crown className="mr-2 h-5 w-5" />
                Start Membership
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-royal-cream/30 text-royal-cream hover:bg-royal-cream/10"
            >
              <Link to="/rides">
                <Calendar className="mr-2 h-5 w-5" />
                View Upcoming Rides
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;