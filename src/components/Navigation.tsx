import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Bike, Crown } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Gallery" },
    { href: "/rides", label: "Rides" },
    { href: "/membership", label: "Join Us" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
    { href: "/faq", label: "FAQ" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-card/90 backdrop-blur-lg border-b border-border/50 shadow-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative p-2 bg-gradient-royal rounded-xl shadow-royal group-hover:shadow-glow transition-all duration-500">
              <Crown className="h-8 w-8 text-royal-cream group-hover:scale-110 transition-smooth" />
              <Bike className="h-4 w-4 text-royal-gold absolute -bottom-1 -right-1 bg-card rounded-full p-0.5" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-adventure bg-clip-text text-transparent">
                Taj Royals
              </span>
              <span className="text-xs text-muted-foreground tracking-wider">RIDE • EXPLORE • CONQUER</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-6 py-3 rounded-xl transition-all duration-300 font-medium relative overflow-hidden ${
                  isActive(item.href)
                    ? "bg-gradient-royal text-royal-cream shadow-royal"
                    : "text-foreground hover:bg-gradient-dark hover:text-primary hover:shadow-adventure"
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                {isActive(item.href) && (
                  <div className="absolute inset-0 bg-gradient-adventure opacity-20 animate-pulse" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-lg transition-smooth font-medium ${
                      isActive(item.href)
                        ? "bg-gradient-royal text-royal-cream shadow-royal"
                        : "text-foreground hover:bg-muted hover:text-accent-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;