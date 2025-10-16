import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Heart, 
  TrendingUp, 
  Clock, 
  Gavel, 
  Bell,
  Eye,
  Filter,
  Star
} from "lucide-react";

export default function BuyerDashboard() {
  const [searchQuery, setSearchQuery] = useState("");

  const liveAuctions = [
    {
      id: 1,
      title: "Vintage Camera Collection",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=300&fit=crop",
      currentBid: "$1,250",
      yourBid: "$1,150",
      endTime: "2h 15m",
      bidders: 8,
      status: "outbid",
      category: "Electronics"
    },
    {
      id: 2,
      title: "Antique Pocket Watch",
      image: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=400&h=300&fit=crop",
      currentBid: "$890",
      yourBid: "$890",
      endTime: "45m",
      bidders: 12,
      status: "winning",
      category: "Collectibles"
    },
    {
      id: 3,
      title: "Limited Edition Sneakers",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
      currentBid: "$450",
      yourBid: null,
      endTime: "3h 20m",
      bidders: 15,
      status: "watching",
      category: "Fashion"
    },
    {
      id: 4,
      title: "First Edition Book Set",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=300&fit=crop",
      currentBid: "$2,100",
      yourBid: null,
      endTime: "1d 5h",
      bidders: 6,
      status: "watching",
      category: "Books"
    }
  ];

  const recommendedAuctions = [
    {
      id: 5,
      title: "Vintage Vinyl Records",
      image: "https://images.unsplash.com/photo-1488384018495-2e4f8b5f6d38?w=400&h=300&fit=crop",
      startingBid: "$120",
      endTime: "6h",
      category: "Music"
    },
    {
      id: 6,
      title: "Art Deco Lamp",
      image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=300&fit=crop",
      startingBid: "$280",
      endTime: "12h",
      category: "Home Decor"
    }
  ];

  const stats = [
    { label: "Active Bids", value: "2", icon: Gavel, color: "text-success" },
    { label: "Watching", value: "8", icon: Eye, color: "text-info" },
    { label: "Favorites", value: "15", icon: Heart, color: "text-destructive" },
    { label: "Won Auctions", value: "24", icon: Star, color: "text-warning" }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Welcome Back, Buyer!</h1>
          <p className="text-muted-foreground mt-1">Discover amazing items and place your bids</p>
        </div>
        <Button className="rounded-full">
          <Bell className="mr-2 h-4 w-4" />
          Notifications
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 flex items-center gap-4">
              <div className={`p-3 rounded-xl bg-${stat.color}/10`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search Bar */}
      <Card className="border-0 bg-gradient-to-r from-pastel-blue/20 to-pastel-lavender/20 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search for auctions, categories, or items..." 
                className="pl-10 rounded-full border-0 bg-background/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" className="rounded-full">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Tabs */}
      <Tabs defaultValue="active" className="space-y-6">
        <TabsList className="grid w-full max-w-md grid-cols-3 rounded-full">
          <TabsTrigger value="active" className="rounded-full">Active Bids</TabsTrigger>
          <TabsTrigger value="watching" className="rounded-full">Watching</TabsTrigger>
          <TabsTrigger value="recommended" className="rounded-full">For You</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Your Active Bids</h2>
            <Badge variant="outline" className="rounded-full">
              {liveAuctions.filter(a => a.yourBid).length} Active
            </Badge>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {liveAuctions.filter(auction => auction.yourBid).map((auction) => (
              <Card key={auction.id} className="overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src={auction.image} 
                    alt={auction.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className={`absolute top-3 left-3 rounded-full ${
                    auction.status === 'winning' 
                      ? 'bg-success/90 text-success-foreground' 
                      : 'bg-warning/90 text-warning-foreground'
                  }`}>
                    {auction.status === 'winning' ? '🏆 Winning' : '⚠️ Outbid'}
                  </Badge>
                  <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3 text-destructive" />
                    <span className="text-xs font-medium">{auction.endTime}</span>
                  </div>
                </div>
                
                <CardContent className="p-6 space-y-4">
                  <div>
                    <Badge variant="outline" className="mb-2 rounded-full text-xs">{auction.category}</Badge>
                    <h3 className="font-semibold text-lg">{auction.title}</h3>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-muted-foreground">Current Bid</p>
                      <p className="text-xl font-bold text-success">{auction.currentBid}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">Your Bid</p>
                      <p className="text-lg font-semibold">{auction.yourBid}</p>
                    </div>
                  </div>

                  <div className="pt-2 space-y-2">
                    <Button className="w-full rounded-full" variant={auction.status === 'winning' ? 'outline' : 'default'}>
                      {auction.status === 'winning' ? 'Increase Bid' : 'Place Higher Bid'}
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                      {auction.bidders} bidders • Ends in {auction.endTime}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="watching" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Items You're Watching</h2>
            <Badge variant="outline" className="rounded-full">
              {liveAuctions.filter(a => a.status === 'watching').length} Items
            </Badge>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {liveAuctions.filter(auction => auction.status === 'watching').map((auction) => (
              <Card key={auction.id} className="overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src={auction.image} 
                    alt={auction.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Button 
                    size="icon"
                    variant="secondary"
                    className="absolute top-3 right-3 rounded-full bg-background/90 backdrop-blur-sm hover:bg-destructive hover:text-destructive-foreground"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  <div className="absolute bottom-3 right-3 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span className="text-xs font-medium">{auction.endTime}</span>
                  </div>
                </div>
                
                <CardContent className="p-6 space-y-4">
                  <div>
                    <Badge variant="outline" className="mb-2 rounded-full text-xs">{auction.category}</Badge>
                    <h3 className="font-semibold text-lg">{auction.title}</h3>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-muted-foreground">Current Bid</p>
                      <p className="text-xl font-bold text-success">{auction.currentBid}</p>
                    </div>
                    <div className="text-right text-xs text-muted-foreground">
                      {auction.bidders} bidders
                    </div>
                  </div>

                  <Button className="w-full rounded-full">
                    <Gavel className="mr-2 h-4 w-4" />
                    Place Bid
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="recommended" className="space-y-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-success" />
            <h2 className="text-2xl font-semibold">Recommended For You</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedAuctions.map((auction) => (
              <Card key={auction.id} className="overflow-hidden border-0 bg-gradient-to-br from-pastel-mint/20 to-pastel-blue/20 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src={auction.image} 
                    alt={auction.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-3 left-3 bg-success/90 text-success-foreground rounded-full">
                    ✨ Recommended
                  </Badge>
                </div>
                
                <CardContent className="p-6 space-y-4">
                  <div>
                    <Badge variant="outline" className="mb-2 rounded-full text-xs">{auction.category}</Badge>
                    <h3 className="font-semibold text-lg">{auction.title}</h3>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-muted-foreground">Starting Bid</p>
                      <p className="text-xl font-bold">{auction.startingBid}</p>
                    </div>
                    <div className="text-right text-xs text-muted-foreground">
                      Starts in {auction.endTime}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 rounded-full">Place Bid</Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
