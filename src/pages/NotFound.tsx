import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Crown, Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-royal-cream to-background">
      <div className="text-center max-w-2xl mx-auto px-4">
        <div className="mb-8">
          <Crown className="w-24 h-24 text-royal-gold mx-auto mb-4" />
          <h1 className="text-6xl font-bold text-royal-blue mb-4">404</h1>
          <h2 className="text-2xl font-bold text-foreground mb-4">Page Not Found</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            The royal road you're looking for doesn't exist. Let's get you back to familiar territory.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-gradient-royal shadow-royal">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Return Home
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/rides">
              <Search className="mr-2 h-4 w-4" />
              Browse Rides
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
