import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Users, Clock, Mountain, Flag, Star } from "lucide-react";
import { Link } from "react-router-dom";
import roadViewImage from "@/assets/gallery/road-view.jpg";

const Rides = () => {
  const upcomingRides = [
    {
      id: 1,
      title: "Goa Beach Ride",
      date: "April 15-20, 2024",
      duration: "6 Days",
      distance: "1,200 KM",
      difficulty: "Easy",
      maxParticipants: 25,
      currentParticipants: 18,
      route: "Mumbai → Pune → Kolhapur → Goa → Coastal Routes",
      highlights: ["Beach camping", "Coastal highways", "Portuguese heritage sites"],
      price: "₹15,000",
      description: "Experience the perfect blend of adventure and relaxation on Goa's pristine beaches and scenic coastal roads."
    },
    {
      id: 2,
      title: "Sikkim Mountain Expedition",
      date: "May 10-22, 2024", 
      duration: "13 Days",
      distance: "2,800 KM",
      difficulty: "Challenging",
      maxParticipants: 20,
      currentParticipants: 12,
      route: "Kolkata → Siliguri → Gangtok → Nathula Pass → Pelling",
      highlights: ["Himalayan views", "Mountain passes", "Monastery visits"],
      price: "₹35,000",
      description: "Conquer the Eastern Himalayas with breathtaking mountain passes and stunning monastery visits."
    },
    {
      id: 3,
      title: "Rajasthan Desert Safari",
      date: "June 5-15, 2024",
      duration: "11 Days", 
      distance: "2,400 KM",
      difficulty: "Moderate",
      maxParticipants: 30,
      currentParticipants: 22,
      route: "Delhi → Jaipur → Jodhpur → Jaisalmer → Bikaner → Pushkar",
      highlights: ["Desert camping", "Royal palaces", "Camel safari"],
      price: "₹28,000",
      description: "Explore the royal heritage of Rajasthan through majestic palaces, desert landscapes, and cultural experiences."
    }
  ];

  const pastRides = [
    {
      id: 1,
      title: "Leh-Ladakh Expedition 2023",
      date: "August 2023",
      participants: 25,
      distance: "3,500 KM",
      rating: 4.9,
      summary: "Epic high-altitude adventure through world's highest motorable roads.",
      highlights: ["Khardung La Pass", "Pangong Lake", "Magnetic Hill"]
    },
    {
      id: 2,
      title: "Kerala Backwaters Tour 2023",
      date: "December 2023",
      participants: 20,
      distance: "1,800 KM", 
      rating: 4.8,
      summary: "Serene journey through God's Own Country with spice plantations and backwaters.",
      highlights: ["Munnar tea gardens", "Alleppey backwaters", "Spice markets"]
    },
    {
      id: 3,
      title: "Northeast Discovery 2022",
      date: "October 2022",
      participants: 18,
      distance: "3,200 KM",
      rating: 4.9,
      summary: "Unexplored beauty of Seven Sisters with diverse cultures and landscapes.",
      highlights: ["Living root bridges", "Kaziranga National Park", "Tribal villages"]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-500/10 text-green-700 border-green-500/20";
      case "Moderate": return "bg-yellow-500/10 text-yellow-700 border-yellow-500/20";
      case "Challenging": return "bg-red-500/10 text-red-700 border-red-500/20";
      default: return "bg-gray-500/10 text-gray-700 border-gray-500/20";
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section 
        className="py-20 bg-gradient-to-b from-royal-cream to-background relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${roadViewImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <Badge className="mb-6 bg-royal-blue/10 text-royal-blue border-royal-blue/20">
            <Mountain className="w-4 h-4 mr-2" />
            Epic Adventures
          </Badge>
          <h1 className="text-5xl font-bold text-foreground mb-6">Rides & Events</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join us on carefully planned adventures across India's most spectacular landscapes. 
            From mountain passes to coastal highways, every ride is a story waiting to be written.
          </p>
        </div>
      </section>

      {/* Rides Tabs */}
      <section className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4">
          <Tabs defaultValue="upcoming" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="upcoming">Upcoming Rides</TabsTrigger>
                <TabsTrigger value="past">Past Rides</TabsTrigger>
              </TabsList>
            </div>

            {/* Upcoming Rides */}
            <TabsContent value="upcoming">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {upcomingRides.map((ride) => (
                  <Card key={ride.id} className="overflow-hidden shadow-adventure hover:shadow-royal transition-smooth">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <Badge className={getDifficultyColor(ride.difficulty)}>
                          {ride.difficulty}
                        </Badge>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-royal-gold">{ride.price}</div>
                          <div className="text-sm text-muted-foreground">per person</div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-foreground mb-3">{ride.title}</h3>
                      <p className="text-muted-foreground mb-4 text-sm">{ride.description}</p>
                      
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center text-sm">
                          <Calendar className="w-4 h-4 mr-2 text-royal-blue" />
                          <span className="font-medium">{ride.date}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Clock className="w-4 h-4 mr-2 text-adventure-copper" />
                          <span>{ride.duration} • {ride.distance}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Users className="w-4 h-4 mr-2 text-royal-burgundy" />
                          <span>{ride.currentParticipants}/{ride.maxParticipants} registered</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex items-center text-sm text-muted-foreground mb-2">
                          <MapPin className="w-4 h-4 mr-1" />
                          Route
                        </div>
                        <p className="text-sm font-medium text-foreground">{ride.route}</p>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-foreground mb-2">Highlights</h4>
                        <div className="flex flex-wrap gap-1">
                          {ride.highlights.map((highlight, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button className="flex-1 bg-gradient-royal">
                          Register Now
                        </Button>
                        <Button variant="outline" className="flex-1">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Past Rides */}
            <TabsContent value="past">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pastRides.map((ride) => (
                  <Card key={ride.id} className="overflow-hidden shadow-adventure hover:shadow-royal transition-smooth">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <Badge className="bg-royal-blue/10 text-royal-blue border-royal-blue/20">
                          Completed
                        </Badge>
                        <div className="flex items-center text-sm">
                          <Star className="w-4 h-4 text-royal-gold mr-1" />
                          <span className="font-medium">{ride.rating}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-foreground mb-2">{ride.title}</h3>
                      <p className="text-muted-foreground mb-4 text-sm">{ride.summary}</p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Date:</span>
                          <span className="font-medium">{ride.date}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Participants:</span>
                          <span className="font-medium">{ride.participants} riders</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Distance:</span>
                          <span className="font-medium">{ride.distance}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-foreground mb-2">Highlights</h4>
                        <div className="flex flex-wrap gap-1">
                          {ride.highlights.map((highlight, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button asChild variant="outline" className="flex-1">
                          <Link to="/gallery">View Photos</Link>
                        </Button>
                        <Button variant="outline" className="flex-1">
                          Read Report
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Ride Guidelines */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-adventure-copper/10 text-adventure-copper border-adventure-copper/20">
              <Flag className="w-4 h-4 mr-2" />
              Guidelines
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">Ride Essentials</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              To ensure everyone's safety and enjoyment, please follow these essential guidelines for all rides.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 shadow-adventure">
              <h3 className="text-lg font-bold text-foreground mb-4">Safety First</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• DOT approved helmet mandatory</li>
                <li>• Protective riding gear required</li>
                <li>• Valid license and documents</li>
                <li>• Insurance coverage essential</li>
              </ul>
            </Card>
            
            <Card className="p-6 shadow-adventure">
              <h3 className="text-lg font-bold text-foreground mb-4">Bike Requirements</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Well-maintained Royal Enfield</li>
                <li>• Recent service check</li>
                <li>• Tool kit and spare parts</li>
                <li>• Adequate fuel range</li>
              </ul>
            </Card>
            
            <Card className="p-6 shadow-adventure">
              <h3 className="text-lg font-bold text-foreground mb-4">Group Etiquette</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Follow ride leader instructions</li>
                <li>• Maintain safe distances</li>
                <li>• No solo breakaways</li>
                <li>• Help fellow riders</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-royal">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-royal-cream mb-6">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-royal-cream/90 text-lg mb-8 max-w-2xl mx-auto">
            Join the Taj Royals brotherhood and experience the thrill of epic rides 
            across India's most spectacular destinations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg" 
              className="bg-royal-gold text-royal-blue hover:bg-royal-gold/90 shadow-adventure"
            >
              <Link to="/membership">
                Become a Member
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-royal-cream/30 text-royal-cream hover:bg-royal-cream/10"
            >
              <Link to="/contact">
                Ask Questions
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rides;