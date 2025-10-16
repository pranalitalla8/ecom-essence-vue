import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCard } from "@/components/StatCard";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  DollarSign, 
  Package, 
  Users, 
  TrendingUp, 
  Upload, 
  ChevronRight,
  Gavel,
  Eye,
  Clock,
  BarChart3
} from "lucide-react";

export default function Dashboard() {
  const setupSteps = [
    { label: "Add your first auction listing", completed: false },
    { label: "Configure shipping settings", completed: false },
    { label: "Upload store logo", completed: false },
    { label: "Set up payment processing", completed: false },
    { label: "Add store policies", completed: false },
    { label: "Set up tax settings", completed: false },
  ];

  const completedSteps = setupSteps.filter(step => step.completed).length;
  const progress = (completedSteps / setupSteps.length) * 100;

  const activeAuctions = [
    {
      id: 1,
      title: "Vintage Camera Collection",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=300&fit=crop",
      currentBid: "$1,250",
      startingBid: "$500",
      endTime: "2h 15m",
      bidders: 8,
      views: 156,
      status: "active"
    },
    {
      id: 2,
      title: "Antique Pocket Watch",
      image: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=400&h=300&fit=crop",
      currentBid: "$890",
      startingBid: "$300",
      endTime: "45m",
      bidders: 12,
      views: 234,
      status: "ending-soon"
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Seller Dashboard</h1>
          <p className="text-muted-foreground mt-1">Manage your auctions and track your performance</p>
        </div>
        <Link to="/create-listing">
          <Button className="rounded-full">
            <Upload className="mr-2 h-4 w-4" />
            Create Auction
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Setup Guide</CardTitle>
          <CardDescription>Complete these steps to start selling</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">Progress</span>
              <span className="text-muted-foreground">{completedSteps}/{setupSteps.length} completed</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <div className="grid gap-2 md:grid-cols-2">
            {setupSteps.map((step, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className={`h-4 w-4 rounded-full border-2 ${step.completed ? 'bg-success border-success' : 'border-muted'}`} />
                <span className={step.completed ? 'text-muted-foreground line-through' : ''}>{step.label}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          title="Total Sales" 
          value="$0" 
          icon={DollarSign}
          iconColor="text-success"
          iconBgColor="bg-success/10"
        />
        <StatCard 
          title="Active Auctions" 
          value="0" 
          icon={Package}
          iconColor="text-info"
          iconBgColor="bg-info/10"
        />
        <StatCard 
          title="Total Bidders" 
          value="0" 
          icon={Users}
          iconColor="text-purple"
          iconBgColor="bg-purple/10"
        />
        <StatCard 
          title="Conversion Rate" 
          value="0%" 
          icon={TrendingUp}
          iconColor="text-warning"
          iconBgColor="bg-warning/10"
        />
      </div>

      {/* Active Auctions */}
      <Card className="border-0 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Your Active Auctions</CardTitle>
              <CardDescription>Monitor and manage your live listings</CardDescription>
            </div>
            <Link to="/auctions">
              <Button variant="outline" className="rounded-full">
                <BarChart3 className="mr-2 h-4 w-4" />
                View All
              </Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {activeAuctions.map((auction) => (
              <Card key={auction.id} className="overflow-hidden border-0 bg-gradient-to-br from-card to-card/50 hover:shadow-lg transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src={auction.image} 
                    alt={auction.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className={`absolute top-3 left-3 rounded-full ${
                    auction.status === 'ending-soon' 
                      ? 'bg-warning/90 text-warning-foreground' 
                      : 'bg-success/90 text-success-foreground'
                  }`}>
                    {auction.status === 'ending-soon' ? '⚡ Ending Soon' : '✓ Active'}
                  </Badge>
                  <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span className="text-xs font-medium">{auction.endTime}</span>
                  </div>
                </div>
                
                <CardContent className="p-4 space-y-3">
                  <h3 className="font-semibold text-lg">{auction.title}</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Starting Bid</p>
                      <p className="text-sm font-medium">{auction.startingBid}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Current Bid</p>
                      <p className="text-lg font-bold text-success">{auction.currentBid}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t">
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {auction.bidders} bidders
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {auction.views} views
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-3">
        <Link to="/create-listing">
          <Card className="cursor-pointer hover:bg-accent/50 transition-all duration-300 hover:shadow-lg border-0 bg-gradient-to-br from-pastel-mint/20 to-pastel-blue/20 backdrop-blur-sm">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Gavel className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Create Auction</h3>
                <p className="text-xs text-muted-foreground">List a new item</p>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground ml-auto" />
            </CardContent>
          </Card>
        </Link>

        <Link to="/auctions">
          <Card className="cursor-pointer hover:bg-accent/50 transition-all duration-300 hover:shadow-lg border-0 bg-gradient-to-br from-pastel-lavender/20 to-pastel-pink/20 backdrop-blur-sm">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-info/10">
                <Package className="h-6 w-6 text-info" />
              </div>
              <div>
                <h3 className="font-semibold">Manage Listings</h3>
                <p className="text-xs text-muted-foreground">Edit your auctions</p>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground ml-auto" />
            </CardContent>
          </Card>
        </Link>

        <Card className="cursor-pointer hover:bg-accent/50 transition-all duration-300 hover:shadow-lg border-0 bg-gradient-to-br from-pastel-peach/20 to-pastel-pink/20 backdrop-blur-sm">
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-warning/10">
              <BarChart3 className="h-6 w-6 text-warning" />
            </div>
            <div>
              <h3 className="font-semibold">View Analytics</h3>
              <p className="text-xs text-muted-foreground">Track performance</p>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground ml-auto" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
