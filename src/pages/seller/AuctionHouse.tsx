import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, LayoutGrid, List, Package, TrendingUp, Eye, Plus } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const auctions = [
  {
    id: 1,
    title: "Home Appliance Collection",
    items: 24,
    endDate: "09-30-2025",
    status: "upcoming",
    highBid: "$0",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=400&fit=crop"
  },
  {
    id: 2,
    title: "Home Appliance Collection",
    items: 32,
    endDate: "09-26-2025",
    status: "live",
    highBid: "$40,250",
    image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=500&h=400&fit=crop"
  },
  {
    id: 3,
    title: "Home Decor Collection",
    items: 24,
    endDate: "09-30-2025",
    status: "ended",
    highBid: "$35,550",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=400&fit=crop"
  },
  {
    id: 4,
    title: "Landscaping Collection",
    items: 32,
    endDate: "09-26-2025",
    status: "ended",
    highBid: "$56,ff000",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&h=400&fit=crop"
  }
];

export default function AuctionHouse() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">My Overstock Auctions</h1>
          <p className="text-muted-foreground mt-1">Manage your overstock lot auctions and track wholesale performance</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          List New Lot
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-info/10">
                <Package className="h-5 w-5 text-info" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Lots</p>
                <p className="text-2xl font-bold">5</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10">
                <TrendingUp className="h-5 w-5 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Active</p>
                <p className="text-2xl font-bold">2</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple/10">
                <span className="text-lg font-bold text-purple">$</span>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Revenue</p>
                <p className="text-2xl font-bold">$3,000</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warning/10">
                <Eye className="h-5 w-5 text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Views</p>
                <p className="text-2xl font-bold">2,828</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search lots..." className="pl-9" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="End Date" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Dates</SelectItem>
            <SelectItem value="week">This Week</SelectItem>
            <SelectItem value="month">This Month</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex items-center gap-1 border rounded-md">
          <Button variant="ghost" size="icon">
            <LayoutGrid className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All (5)</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming (1)</TabsTrigger>
          <TabsTrigger value="live">Live (2)</TabsTrigger>
          <TabsTrigger value="ended">Ended (2)</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid gap-6 md:grid-cols-2">
        {auctions.map((auction) => (
          <Card key={auction.id} className="overflow-hidden hover:shadow-lg transition-all">
            <div className="relative aspect-video w-full bg-muted">
              <img 
                src={auction.image} 
                alt={auction.title}
                className="h-full w-full object-cover"
              />
              <Badge 
                className={`absolute top-3 left-3 ${
                  auction.status === "live" 
                    ? "bg-success text-success-foreground" 
                    : auction.status === "upcoming" 
                    ? "bg-info text-info-foreground" 
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {auction.status === "live" ? "▶ Live" : auction.status === "upcoming" ? "⏱ Upcoming" : "⊗ Ended"}
              </Badge>
            </div>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">{auction.title}</h3>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span>{auction.items} pieces</span>
                <span>•</span>
                <span className="capitalize">{auction.title.split(' ')[0]}</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">
                    {auction.status === "ended" ? "Final Price" : "Current Bid"}
                  </p>
                  <p className="text-xl font-bold">{auction.highBid}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">
                    {auction.status === "ended" ? "Ended" : auction.status === "live" ? "Ends in" : "Starts in"}
                  </p>
                  <p className="text-sm font-medium">
                    {auction.status === "ended" ? "Ended" : auction.endDate}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-4 pt-4 border-t text-xs text-muted-foreground">
                <span>Est. Retail Value: $3,850.00</span>
                <span>Condition: {auction.status === "ended" ? "Customer Returns" : "Overstock"}</span>
              </div>

              <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Eye className="h-3 w-3" />
                  {12} watching
                </span>
                <span>48 watching</span>
              </div>

              <Button className="w-full mt-4" variant={auction.status === "ended" ? "outline" : "default"}>
                {auction.status === "ended" ? "View Results" : "View Auction"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
