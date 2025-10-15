import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AuctionCard } from "@/components/AuctionCard";
import { StatCard } from "@/components/StatCard";
import { Package, TrendingUp, DollarSign, Eye, Plus, Search, Grid3x3, List, ChevronDown } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Auctions() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const auctionData = [
    {
      image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=500&h=400&fit=crop",
      title: "Mixed Electronics Pallet - Customer Returns",
      pieces: "45 pieces",
      category: "Electronics",
      status: "live" as const,
      currentBid: "$1,425.00",
      timing: "1d 23h",
      estimatedValue: "$3,850.00",
      condition: "Customer Returns",
      views: 234,
      watchers: 48,
    },
    {
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=400&fit=crop",
      title: "Apparel Mixed Lot - Brand Name Clothing",
      pieces: "200 pieces",
      category: "Apparel",
      status: "ended" as const,
      finalPrice: "$1,150.00",
      timing: "Ended",
      estimatedValue: "$4,200.00",
      condition: "Overstock",
      views: 892,
      watchers: 156,
    },
    {
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=400&fit=crop",
      title: "Home & Garden Pallet - Seasonal Items",
      pieces: "1 pallet",
      category: "Home & Garden",
      status: "upcoming" as const,
      startingBid: "$300.00",
      timing: "23h 59m",
      estimatedValue: "$2,100.00",
      condition: "Shelf Pulls",
      views: 145,
      watchers: 23,
    },
    {
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&h=400&fit=crop",
      title: "General Merchandise Truckload - Mixed Categories",
      pieces: "26 pallets",
      category: "General Merchandise",
      status: "live" as const,
      currentBid: "$3,750.00",
      timing: "3d 23h",
      estimatedValue: "$12,500.00",
      condition: "Overstock",
      views: 312,
      watchers: 67,
    },
    {
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=400&fit=crop",
      title: "Amazon Return Pallet - Electronics & Accessories",
      pieces: "1 pallet",
      category: "Electronics",
      status: "ended" as const,
      finalPrice: "$1,850.00",
      timing: "Ended",
      estimatedValue: "$5,200.00",
      condition: "Customer Returns",
      views: 1245,
      watchers: 234,
    },
  ];

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

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          title="Total Lots" 
          value="5" 
          icon={Package}
          iconColor="text-info"
          iconBgColor="bg-info/10"
        />
        <StatCard 
          title="Active" 
          value="2" 
          icon={TrendingUp}
          iconColor="text-success"
          iconBgColor="bg-success/10"
        />
        <StatCard 
          title="Total Revenue" 
          value="$3,000" 
          icon={DollarSign}
          iconColor="text-purple"
          iconBgColor="bg-purple/10"
        />
        <StatCard 
          title="Total Views" 
          value="2,828" 
          icon={Eye}
          iconColor="text-warning"
          iconBgColor="bg-warning/10"
        />
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
            <SelectItem value="all">All dates</SelectItem>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="week">This week</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex items-center gap-1 rounded-md border">
          <Button
            variant={viewMode === "grid" ? "secondary" : "ghost"}
            size="icon"
            className="h-9 w-9"
            onClick={() => setViewMode("grid")}
          >
            <Grid3x3 className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "secondary" : "ghost"}
            size="icon"
            className="h-9 w-9"
            onClick={() => setViewMode("list")}
          >
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
        
        <TabsContent value="all" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {auctionData.map((auction, index) => (
              <AuctionCard key={index} {...auction} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="upcoming" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {auctionData.filter(a => a.status === "upcoming").map((auction, index) => (
              <AuctionCard key={index} {...auction} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="live" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {auctionData.filter(a => a.status === "live").map((auction, index) => (
              <AuctionCard key={index} {...auction} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="ended" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {auctionData.filter(a => a.status === "ended").map((auction, index) => (
              <AuctionCard key={index} {...auction} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
