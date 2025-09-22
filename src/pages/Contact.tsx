import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, MessageSquare, Users, Calendar, HelpCircle } from "lucide-react";
import groupHotelImage from "@/assets/gallery/group-hotel.webp";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-royal-blue" />,
      title: "Phone",
      details: ["+91 98765 43210", "+91 87654 32109"],
      description: "Call us for immediate assistance"
    },
    {
      icon: <Mail className="w-6 h-6 text-adventure-copper" />,
      title: "Email",
      details: ["info@tajroyals.com", "rides@tajroyals.com"],
      description: "Send us your questions anytime"
    },
    {
      icon: <MapPin className="w-6 h-6 text-royal-burgundy" />,
      title: "Address",
      details: ["Royal Enfield Showroom", "MG Road, Mumbai - 400001"],
      description: "Visit us for meetups and events"
    },
    {
      icon: <Clock className="w-6 h-6 text-royal-gold" />,
      title: "Office Hours", 
      details: ["Mon-Fri: 10 AM - 6 PM", "Sat-Sun: 9 AM - 5 PM"],
      description: "When we're available to help"
    }
  ];

  const quickLinks = [
    {
      icon: <Users className="w-5 h-5" />,
      title: "Membership Inquiries",
      description: "Questions about joining our brotherhood",
      action: "membership"
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Ride Information", 
      description: "Details about upcoming rides and events",
      action: "rides"
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "General Questions",
      description: "Any other questions or feedback",
      action: "general"
    },
    {
      icon: <HelpCircle className="w-5 h-5" />,
      title: "Technical Support",
      description: "Help with website or app issues",
      action: "technical"
    }
  ];

  const socialLinks = [
    { platform: "Instagram", handle: "@tajroyals_official", followers: "15.2K" },
    { platform: "Facebook", handle: "Taj Royals Club", followers: "8.5K" },
    { platform: "YouTube", handle: "Taj Royals Adventures", followers: "12.1K" },
    { platform: "WhatsApp", handle: "Join our group", followers: "150+" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submission:", formData);
    // Handle form submission
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const setQuickCategory = (category: string) => {
    handleInputChange('category', category);
    // Scroll to form
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section 
        className="py-20 bg-gradient-to-b from-royal-cream to-background relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${groupHotelImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <Badge className="mb-6 bg-royal-blue/10 text-royal-blue border-royal-blue/20">
            <MessageSquare className="w-4 h-4 mr-2" />
            Get in Touch
          </Badge>
          <h1 className="text-5xl font-bold text-foreground mb-6">Contact Taj Royals</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions about membership, rides, or want to connect with our community? 
            We're here to help you start or continue your royal journey with us.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 text-center shadow-adventure hover:shadow-royal transition-smooth">
                <div className="mb-4 flex justify-center">{info.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-3">{info.title}</h3>
                <div className="space-y-1 mb-3">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm font-medium text-royal-blue">{detail}</p>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">{info.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-adventure-copper/10 text-adventure-copper border-adventure-copper/20">
              Quick Help
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">How Can We Help?</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Choose your inquiry type for faster assistance. We'll make sure you get the right information quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Card 
                key={index} 
                className="p-6 text-center shadow-adventure hover:shadow-royal transition-smooth cursor-pointer group"
                onClick={() => setQuickCategory(link.action)}
              >
                <div className="mb-4 flex justify-center text-royal-blue group-hover:text-royal-gold transition-smooth">
                  {link.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{link.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{link.description}</p>
                <Button variant="ghost" size="sm" className="text-royal-blue hover:text-royal-blue/80">
                  Select This Topic
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-royal-gold/10 text-royal-gold border-royal-gold/20">
              Send Message
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">Get in Touch</h2>
            <p className="text-muted-foreground">
              Fill out the form below and we'll get back to you within 24 hours. 
              For urgent matters, please call us directly.
            </p>
          </div>

          <Card className="p-8 shadow-royal">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input 
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input 
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <Label htmlFor="category">Inquiry Type *</Label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="membership">Membership Inquiries</SelectItem>
                      <SelectItem value="rides">Ride Information</SelectItem>
                      <SelectItem value="general">General Questions</SelectItem>
                      <SelectItem value="technical">Technical Support</SelectItem>
                      <SelectItem value="partnership">Partnership/Sponsorship</SelectItem>
                      <SelectItem value="feedback">Feedback/Suggestions</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="subject">Subject *</Label>
                <Input 
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  placeholder="Brief subject of your message"
                  required
                />
              </div>

              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea 
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Tell us how we can help you..."
                  className="min-h-32"
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-royal shadow-royal"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-royal-burgundy/10 text-royal-burgundy border-royal-burgundy/20">
              Social Connect
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">Follow Our Journey</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Stay connected with the Taj Royals community on social media. 
              Get daily updates, ride photos, and connect with fellow riders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialLinks.map((social, index) => (
              <Card key={index} className="p-6 text-center shadow-adventure hover:shadow-royal transition-smooth cursor-pointer group">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-royal rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-smooth">
                    <MessageSquare className="w-6 h-6 text-royal-cream" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{social.platform}</h3>
                <p className="text-sm text-royal-blue font-medium mb-2">{social.handle}</p>
                <Badge variant="outline" className="text-xs">
                  {social.followers} followers
                </Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-royal-blue/10 text-royal-blue border-royal-blue/20">
              <MapPin className="w-4 h-4 mr-2" />
              Find Us
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">Visit Our Location</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Drop by our meetup location for face-to-face discussions, bike inspections, 
              or just to meet fellow Royal Enfield enthusiasts.
            </p>
          </div>

          <Card className="overflow-hidden shadow-royal">
            <div className="h-96 bg-gradient-to-br from-royal-blue/20 to-adventure-copper/20 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Interactive Map</h3>
                <p className="text-muted-foreground">Coming Soon - Find us easily with our interactive location map</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-gradient-royal">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-royal-cream mb-6">
            Need Immediate Help?
          </h2>
          <p className="text-royal-cream/90 text-lg mb-8 max-w-2xl mx-auto">
            For emergency roadside assistance during rides or urgent matters, 
            call our 24/7 helpline. We're always here for our royal family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-royal-gold text-royal-blue hover:bg-royal-gold/90 shadow-adventure"
            >
              <Phone className="mr-2 h-5 w-5" />
              Emergency Helpline
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-royal-cream/30 text-royal-cream hover:bg-royal-cream/10"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              WhatsApp Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;