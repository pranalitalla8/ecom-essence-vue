import { Heart, User, ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Gavel } from "lucide-react";

export function BuyerHeader() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b">
      {/* Top banner */}
      <div className="bg-foreground text-background py-2 px-4 text-center text-sm">
        Sign up and get your first order. <Link to="/signup" className="underline font-medium">Sign Up Now</Link>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <Gavel className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold">Logo</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="px-4 py-2 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors">
              Home
            </Link>
            <Link to="/auctions" className="text-sm font-medium hover:text-primary transition-colors">
              Sell
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About us
            </Link>
          </nav>

          {/* Search */}
          <div className="flex-1 max-w-xl hidden lg:block">
            <div className="relative">
              <Input 
                placeholder="Search for products..." 
                className="w-full pl-4 pr-4 bg-muted/50 border-muted"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="h-5 w-5" />
            </Button>
            
            {isAuthenticated ? (
              <div className="flex items-center gap-2">
                <Link to="/buyer-dashboard">
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </Link>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={handleLogout}
                  className="hidden md:inline-flex"
                >
                  Logout
                </Button>
              </div>
            ) : (
              <Link to="/login">
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* Mobile search */}
        <div className="mt-4 lg:hidden">
          <Input 
            placeholder="Search for products..." 
            className="w-full bg-muted/50 border-muted"
          />
        </div>
      </div>
    </header>
  );
}
