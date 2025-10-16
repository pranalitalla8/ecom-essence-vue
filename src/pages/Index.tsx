import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Sparkles, 
  TrendingUp, 
  Shield, 
  Zap, 
  ArrowRight, 
  Gavel, 
  Clock, 
  Users,
  Heart,
  Eye
} from "lucide-react";

export default function Index() {
  const featuredAuctions = [
    {
      id: 1,
      title: "Vintage Art Collection",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=300&fit=crop",
      currentBid: "$2,450",
      endTime: "2h 15m",
      bidders: 12,
      views: 234,
      watchers: 45
    },
    {
      id: 2,
      title: "Rare Collectible Coins",
      image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=400&h=300&fit=crop",
      currentBid: "$890",
      endTime: "5h 30m",
      bidders: 8,
      views: 156,
      watchers: 28
    },
    {
      id: 3,
      title: "Designer Furniture Set",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop",
      currentBid: "$3,200",
      endTime: "1d 3h",
      bidders: 15,
      views: 412,
      watchers: 67
    }
  ];

  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Insights",
      description: "Smart pricing and market analytics powered by AI",
      color: "text-purple"
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Bank-level security for all your auctions",
      color: "text-success"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Real-time bidding with instant notifications",
      color: "text-warning"
    },
    {
      icon: TrendingUp,
      title: "Maximize Value",
      description: "Get the best prices for your items",
      color: "text-info"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-blue via-background to-pastel-lavender">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 animate-fade-in">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <Badge className="mb-4 bg-pastel-mint/20 text-foreground border-pastel-mint animate-float">
            <Sparkles className="w-3 h-3 mr-1" />
            AI-Powered Auction Platform
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-tight">
            Welcome to the Future of Auctions
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Experience seamless buying and selling with AI-driven insights, real-time bidding, and a community of passionate collectors.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Link to="/signup">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 rounded-full animate-scale-in">
                Start Selling
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/auctions">
              <Button size="lg" variant="outline" className="px-8 rounded-full border-2 animate-scale-in">
                <Gavel className="mr-2 h-5 w-5" />
                Browse Auctions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-in">
              <CardContent className="p-6 text-center space-y-4">
                <div className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-${feature.color}/20 to-transparent flex items-center justify-center`}>
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Auctions Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Live Auctions</h2>
          <p className="text-muted-foreground text-lg">Discover unique items from trusted sellers</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredAuctions.map((auction) => (
            <Card key={auction.id} className="overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={auction.image} 
                  alt={auction.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                  <Clock className="w-3 h-3 text-warning" />
                  <span className="text-xs font-medium">{auction.endTime}</span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{auction.title}</CardTitle>
                <div className="flex items-center justify-between pt-2">
                  <div>
                    <p className="text-xs text-muted-foreground">Current Bid</p>
                    <p className="text-2xl font-bold text-success">{auction.currentBid}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {auction.bidders} bidders
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="flex justify-between items-center mb-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {auction.views} views
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="w-3 h-3" />
                    {auction.watchers} watching
                  </span>
                </div>
                <Link to="/auctions">
                  <Button className="w-full rounded-full" variant="default">
                    Place Bid
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/auctions">
            <Button size="lg" variant="outline" className="rounded-full px-8">
              View All Auctions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="border-0 bg-gradient-to-r from-pastel-pink/30 via-pastel-lavender/30 to-pastel-blue/30 backdrop-blur-sm">
          <CardContent className="p-12 text-center space-y-6">
            <h2 className="text-4xl font-bold">Ready to Start Your Auction Journey?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of sellers and buyers who trust our platform for secure, efficient, and profitable auctions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/signup">
                <Button size="lg" className="rounded-full px-8">
                  Get Started Free
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="ghost" className="rounded-full px-8">
                  Sign In
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
