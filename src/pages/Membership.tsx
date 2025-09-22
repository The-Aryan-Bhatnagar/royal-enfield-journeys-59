import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Crown, Users, Shield, Calendar, Gift, Star, CheckCircle, Bike } from "lucide-react";
import fleetImage from "@/assets/fleet-image.jpg";

const Membership = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    bikeModel: "",
    experience: "",
    motivation: "",
    agreeTerms: false
  });

  const membershipBenefits = [
    {
      icon: <Crown className="w-6 h-6 text-royal-gold" />,
      title: "Royal Status",
      description: "Official Taj Royals member with exclusive club merchandise and royal treatment."
    },
    {
      icon: <Calendar className="w-6 h-6 text-royal-blue" />,
      title: "Priority Rides", 
      description: "First access to all rides with priority booking and member-only exclusive expeditions."
    },
    {
      icon: <Shield className="w-6 h-6 text-adventure-copper" />,
      title: "Safety Support",
      description: "24/7 roadside assistance, group insurance coverage, and safety training sessions."
    },
    {
      icon: <Users className="w-6 h-6 text-royal-burgundy" />,
      title: "Brotherhood Network",
      description: "Connect with 150+ passionate riders, mentorship programs, and lifetime friendships."
    },
    {
      icon: <Gift className="w-6 h-6 text-royal-gold" />,
      title: "Exclusive Perks",
      description: "Member discounts at partner garages, gear stores, and special anniversary celebrations."
    },
    {
      icon: <Star className="w-6 h-6 text-adventure-copper" />,
      title: "Skill Development",
      description: "Free workshops on maintenance, riding techniques, and adventure preparation."
    }
  ];

  const membershipTiers = [
    {
      name: "Royal Rider",
      price: "₹2,500",
      duration: "Annual",
      features: [
        "All ride access",
        "Club merchandise kit", 
        "Roadside assistance",
        "Priority booking",
        "Monthly meetups",
        "Safety training"
      ],
      popular: true
    },
    {
      name: "Heritage Member",
      price: "₹5,000", 
      duration: "Lifetime",
      features: [
        "All Royal Rider benefits",
        "Lifetime membership",
        "Exclusive heritage rides",
        "VIP event access",
        "Custom number plate",
        "Legacy recognition"
      ],
      popular: false
    }
  ];

  const requirements = [
    "Own a Royal Enfield motorcycle (any model)",
    "Valid driving license with 2-wheeler endorsement", 
    "Age 18+ with riding experience of at least 1 year",
    "Commitment to safety protocols and group values",
    "Passion for adventure and motorcycling heritage"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Membership application:", formData);
    // Handle form submission
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section 
        className="py-20 bg-gradient-to-b from-royal-cream to-background relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${fleetImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <Badge className="mb-6 bg-royal-gold/10 text-royal-gold border-royal-gold/20">
            <Crown className="w-4 h-4 mr-2" />
            Join the Brotherhood
          </Badge>
          <h1 className="text-5xl font-bold text-foreground mb-6">Become a Taj Royal</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join India's most prestigious Royal Enfield community. Experience epic adventures, 
            forge lifelong friendships, and become part of a legacy that celebrates the 
            true spirit of motorcycling.
          </p>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-royal-blue/10 text-royal-blue border-royal-blue/20">
              Member Privileges
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">Why Join Taj Royals?</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Membership opens doors to exclusive experiences, lifelong connections, 
              and adventures that go beyond ordinary riding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {membershipBenefits.map((benefit, index) => (
              <Card key={index} className="p-6 shadow-adventure hover:shadow-royal transition-smooth">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-adventure-copper/10 text-adventure-copper border-adventure-copper/20">
              Membership Tiers
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">Choose Your Royal Status</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Select the membership tier that best fits your riding lifestyle and commitment to the brotherhood.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {membershipTiers.map((tier, index) => (
              <Card key={index} className={`p-8 shadow-adventure hover:shadow-royal transition-smooth relative ${
                tier.popular ? 'ring-2 ring-royal-gold border-royal-gold/20' : ''
              }`}>
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-royal-gold text-royal-blue">
                    Most Popular
                  </Badge>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-royal-gold mb-1">{tier.price}</div>
                  <div className="text-sm text-muted-foreground">{tier.duration}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${tier.popular ? 'bg-gradient-royal' : 'bg-gradient-adventure'} shadow-royal`}
                >
                  Choose {tier.name}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-royal-burgundy/10 text-royal-burgundy border-royal-burgundy/20">
              <Bike className="w-4 h-4 mr-2" />
              Prerequisites
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">Membership Requirements</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              To maintain the quality and safety of our community, we have specific requirements for new members.
            </p>
          </div>

          <Card className="max-w-4xl mx-auto p-8 shadow-adventure">
            <ul className="space-y-4">
              {requirements.map((requirement, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-royal-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{requirement}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-royal-blue/10 text-royal-blue border-royal-blue/20">
              Application Form
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">Start Your Royal Journey</h2>
            <p className="text-muted-foreground">
              Fill out this form to begin your membership application. We'll review your details 
              and get back to you within 48 hours.
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
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input 
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="city">City *</Label>
                  <Input 
                    id="city"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    placeholder="Enter your city"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="bikeModel">Royal Enfield Model *</Label>
                  <Select onValueChange={(value) => handleInputChange('bikeModel', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your bike model" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="interceptor-650">Interceptor 650</SelectItem>
                      <SelectItem value="continental-gt-650">Continental GT 650</SelectItem>
                      <SelectItem value="himalayan">Himalayan</SelectItem>
                      <SelectItem value="classic-350">Classic 350</SelectItem>
                      <SelectItem value="meteor-350">Meteor 350</SelectItem>
                      <SelectItem value="bullet-350">Bullet 350</SelectItem>
                      <SelectItem value="thunderbird-x">Thunderbird X</SelectItem>
                      <SelectItem value="scram-411">Scram 411</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="experience">Riding Experience *</Label>
                  <Select onValueChange={(value) => handleInputChange('experience', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-2-years">1-2 years</SelectItem>
                      <SelectItem value="3-5-years">3-5 years</SelectItem>
                      <SelectItem value="6-10-years">6-10 years</SelectItem>
                      <SelectItem value="10-plus-years">10+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="motivation">Why do you want to join Taj Royals? *</Label>
                <Textarea 
                  id="motivation"
                  value={formData.motivation}
                  onChange={(e) => handleInputChange('motivation', e.target.value)}
                  placeholder="Tell us about your motivation to join our community..."
                  className="min-h-24"
                  required
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="terms"
                  checked={formData.agreeTerms}
                  onCheckedChange={(checked) => handleInputChange('agreeTerms', checked as boolean)}
                />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the terms and conditions, safety protocols, and code of conduct of Taj Royals *
                </Label>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-royal shadow-royal"
                disabled={!formData.agreeTerms}
              >
                Submit Application
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-royal">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-royal-cream mb-6">
            Questions About Membership?
          </h2>
          <p className="text-royal-cream/90 text-lg mb-8 max-w-2xl mx-auto">
            Our team is here to help you understand the benefits and process of joining 
            the Taj Royals brotherhood. Don't hesitate to reach out!
          </p>
          <Button 
            size="lg" 
            className="bg-royal-gold text-royal-blue hover:bg-royal-gold/90 shadow-adventure"
          >
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Membership;