import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, Calendar, MapPin, Users, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import fleetImage from "@/assets/fleet-image.jpg";
import membersImage from "@/assets/members-image.jpg";
import roadViewImage from "@/assets/gallery/road-view.jpg";
import bikeServiceImage from "@/assets/gallery/bike-service-2024.webp";
import ridersHandshakeImage from "@/assets/gallery/riders-handshake.webp";
import forestRiderImage from "@/assets/gallery/forest-rider.webp";
import tajRoyalsRoadImage from "@/assets/gallery/taj-royals-road.webp";
import groupHotelImage from "@/assets/gallery/group-hotel.webp";
import templeGroupImage from "@/assets/gallery/temple-group.jpg";
import bhutanGroupRide from "@/assets/gallery/bhutan-group-ride.jpg";
import mountainRoadLineup from "@/assets/gallery/mountain-road-lineup.webp";
import sunriseBikeLineup from "@/assets/gallery/sunrise-bike-lineup.webp";
import tirthanValleyGroup from "@/assets/gallery/tirthan-valley-group.webp";
import vintageBulletMountains from "@/assets/gallery/vintage-bullet-mountains.jpg";
import engineDetailChrome from "@/assets/gallery/engine-detail-chrome.jpg";
import workshopCustomization from "@/assets/gallery/workshop-customization.jpg";
import himalayanTouringSetup from "@/assets/gallery/himalayan-touring-setup.jpg";

const Gallery = () => {
  // Gallery component with new photos
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      id: 1,
      image: tajRoyalsRoadImage,
      title: "TAJ ROYALS - Epic Road Formation",
      category: "rides",
      date: "2024",
      location: "Mountain Highway",
      description: "Our brotherhood in perfect formation on the scenic mountain roads."
    },
    {
      id: 2,
      image: roadViewImage,
      title: "Rider's Perspective",
      category: "rides", 
      date: "2024",
      location: "Hill Station Route",
      description: "The breathtaking view from a rider's perspective on winding mountain roads."
    },
    {
      id: 3,
      image: forestRiderImage,
      title: "Forest Trail Adventure",
      category: "rides",
      date: "2024", 
      location: "Forest Highway",
      description: "Solo adventure through the serene forest trails on the green machine."
    },
    {
      id: 4,
      image: bikeServiceImage,
      title: "Bike Maintenance & Care - 2024",
      category: "bikes",
      date: "2024",
      location: "Service Station",
      description: "Taking care of our machines - proper maintenance for epic adventures."
    },
    {
      id: 5,
      image: ridersHandshakeImage,
      title: "Brotherhood Bond",
      category: "events",
      date: "2024",
      location: "Mountain Peak",
      description: "The unbreakable bond between riders - friendship forged on the road."
    },
    {
      id: 6,
      image: groupHotelImage,
      title: "Mountain Lodge Gathering", 
      category: "events",
      date: "2024",
      location: "Hill Station Resort",
      description: "Group gathering at our mountain lodge base camp during expedition."
    },
    {
      id: 7,
      image: templeGroupImage,
      title: "Temple Visit & Blessings",
      category: "events", 
      date: "2024",
      location: "Himalayan Temple",
      description: "Seeking blessings for safe travels at the ancient Himalayan temple."
    },
    {
      id: 8,
      image: heroImage,
      title: "Himalayan Adventure 2024",
      category: "rides",
      date: "March 2024",
      location: "Leh-Ladakh, Himalayas", 
      description: "Epic 15-day journey through the world's highest motorable roads."
    },
    {
      id: 9,
      image: fleetImage,
      title: "Royal Fleet Showcase",
      category: "bikes",
      date: "January 2024",
      location: "Mumbai Meetup",
      description: "Our diverse collection of Royal Enfield motorcycles in all their glory."
    },
    {
      id: 10,
      image: membersImage,
      title: "Brotherhood Gathering",
      category: "events",
      date: "December 2023",
      location: "Taj Royals HQ",
      description: "Annual gathering celebrating our riding community and friendships."
    },
    {
      id: 11,
      image: bhutanGroupRide,
      title: "Bhutan Adventure Group",
      category: "rides",
      date: "2024",
      location: "Bhutan Highlands",
      description: "Epic group ride through the mystical kingdom of Bhutan with stunning mountain views."
    },
    {
      id: 12,
      image: mountainRoadLineup,
      title: "Mountain Road Formation",
      category: "rides", 
      date: "2024",
      location: "Hill Station Route",
      description: "Perfect formation lineup against the dramatic mountainous landscape backdrop."
    },
    {
      id: 13,
      image: sunriseBikeLineup,
      title: "Golden Hour Fleet",
      category: "bikes",
      date: "2024",
      location: "Sunrise Point",
      description: "Our magnificent fleet captured during the golden hour with perfect lighting."
    },
    {
      id: 14,
      image: tirthanValleyGroup,
      title: "Tirthan Valley Expedition",
      category: "events",
      date: "October 2024",
      location: "Tirthan Valley",
      description: "Group bonding session in the beautiful Tirthan Valley during our recent expedition."
    },
    {
      id: 15,
      image: vintageBulletMountains,
      title: "Vintage Bullet Heritage",
      category: "bikes",
      date: "2024",
      location: "Himalayan Highway",
      description: "Classic Royal Enfield Bullet showcasing timeless design against majestic mountain backdrop."
    },
    {
      id: 16,
      image: engineDetailChrome,
      title: "Engineering Excellence",
      category: "bikes",
      date: "2024",
      location: "Royal Enfield Showcase",
      description: "Detailed view of precision engineering and chrome craftsmanship in Royal Enfield motors."
    },
    {
      id: 17,
      image: workshopCustomization,
      title: "Custom Workshop Magic",
      category: "bikes",
      date: "2024",
      location: "TAJ Royals Workshop",
      description: "Behind the scenes in our customization workshop where dreams become reality."
    },
    {
      id: 18,
      image: himalayanTouringSetup,
      title: "Adventure Ready Himalayan",
      category: "bikes",
      date: "2024",
      location: "River Valley Base",
      description: "Fully loaded Royal Enfield Himalayan ready for the ultimate touring adventure."
    }
  ];

  console.log("Gallery items count:", galleryItems.length);
  console.log("Latest gallery items:", galleryItems.slice(-4));

  const rideHighlights = [
    {
      title: "Spiti Valley Expedition",
      duration: "12 Days",
      distance: "2,400 KM",
      participants: 25,
      year: "2024"
    },
    {
      title: "Coastal Karnataka Tour", 
      duration: "8 Days",
      distance: "1,800 KM", 
      participants: 18,
      year: "2023"
    },
    {
      title: "Northeast India Discovery",
      duration: "14 Days",
      distance: "3,200 KM",
      participants: 22,
      year: "2023"
    },
    {
      title: "Rajasthan Heritage Circuit",
      duration: "10 Days", 
      distance: "2,100 KM",
      participants: 30,
      year: "2022"
    }
  ];

  const filterItems = (category: string) => {
    return category === "all" ? galleryItems : galleryItems.filter(item => item.category === category);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section 
        className="py-20 bg-gradient-to-b from-royal-cream to-background relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <Badge className="mb-6 bg-adventure-copper/10 text-adventure-copper border-adventure-copper/20">
            <Camera className="w-4 h-4 mr-2" />
            Visual Journey
          </Badge>
          <h1 className="text-5xl font-bold text-foreground mb-6">Gallery</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Relive the epic moments, breathtaking landscapes, and unforgettable memories 
            from our Royal Enfield adventures across incredible India.
          </p>
        </div>
      </section>

      {/* Gallery Tabs */}
      <section className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-md grid-cols-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="rides">Rides</TabsTrigger>
                <TabsTrigger value="bikes">Bikes</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
              </TabsList>
            </div>

            {/* All Photos */}
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryItems.map((item) => (
                  <Card 
                    key={item.id} 
                    className="overflow-hidden shadow-adventure hover:shadow-royal transition-smooth cursor-pointer group"
                    onClick={() => setSelectedImage(item.image)}
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-smooth"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-royal-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                      <Badge className="absolute top-4 left-4 bg-royal-gold/90 text-royal-blue border-0">
                        {item.category.toUpperCase()}
                      </Badge>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <Calendar className="w-4 h-4 mr-1" />
                        {item.date}
                        <MapPin className="w-4 h-4 ml-4 mr-1" />
                        {item.location}
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Rides Photos */}
            <TabsContent value="rides">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterItems("rides").map((item) => (
                  <Card 
                    key={item.id} 
                    className="overflow-hidden shadow-adventure hover:shadow-royal transition-smooth cursor-pointer group"
                    onClick={() => setSelectedImage(item.image)}
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-smooth"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-royal-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <Calendar className="w-4 h-4 mr-1" />
                        {item.date}
                        <MapPin className="w-4 h-4 ml-4 mr-1" />
                        {item.location}
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Bikes Photos */}
            <TabsContent value="bikes">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterItems("bikes").map((item) => (
                  <Card 
                    key={item.id} 
                    className="overflow-hidden shadow-adventure hover:shadow-royal transition-smooth cursor-pointer group"
                    onClick={() => setSelectedImage(item.image)}
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-smooth"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-royal-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <Calendar className="w-4 h-4 mr-1" />
                        {item.date}
                        <MapPin className="w-4 h-4 ml-4 mr-1" />
                        {item.location}
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Events Photos */}
            <TabsContent value="events">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterItems("events").map((item) => (
                  <Card 
                    key={item.id} 
                    className="overflow-hidden shadow-adventure hover:shadow-royal transition-smooth cursor-pointer group"
                    onClick={() => setSelectedImage(item.image)}
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-smooth"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-royal-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <Calendar className="w-4 h-4 mr-1" />
                        {item.date}
                        <MapPin className="w-4 h-4 ml-4 mr-1" />
                        {item.location}
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Ride Statistics */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-royal-blue/10 text-royal-blue border-royal-blue/20">
              Ride Highlights
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">Epic Adventures</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Some of our most memorable rides that showcase the spirit and adventure of Taj Royals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rideHighlights.map((ride, index) => (
              <Card key={index} className="p-6 text-center shadow-adventure hover:shadow-royal transition-smooth">
                <h3 className="text-lg font-bold text-foreground mb-4">{ride.title}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Duration</span>
                    <Badge variant="outline">{ride.duration}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Distance</span>
                    <Badge variant="outline">{ride.distance}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Riders</span>
                    <Badge className="bg-royal-gold/10 text-royal-gold border-royal-gold/20">
                      <Users className="w-3 h-3 mr-1" />
                      {ride.participants}
                    </Badge>
                  </div>
                  <Badge className="bg-adventure-copper/10 text-adventure-copper border-adventure-copper/20">
                    {ride.year}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section Placeholder */}
      <section className="py-20 bg-gradient-royal">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-royal-cream mb-6">
            <Play className="inline-block w-8 h-8 mr-3" />
            Coming Soon: Video Gallery
          </h2>
          <p className="text-royal-cream/90 text-lg mb-8 max-w-2xl mx-auto">
            Experience our adventures in motion. Videos from our epic rides, 
            member interviews, and behind-the-scenes moments will be available soon.
          </p>
          <Button 
            size="lg" 
            className="bg-royal-gold text-royal-blue hover:bg-royal-gold/90"
            disabled
          >
            Subscribe for Updates
          </Button>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage} 
              alt="Gallery image"
              className="w-full h-full object-contain rounded-lg"
            />
            <Button 
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 bg-background/80 hover:bg-background"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;