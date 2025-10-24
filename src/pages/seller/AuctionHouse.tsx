import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
        <h1 className="text-3xl font-bold">Your Auctions</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {auctions.map((auction) => (
          <Card key={auction.id} className="overflow-hidden">
            <div className="aspect-video w-full bg-muted">
              <img 
                src={auction.image} 
                alt={auction.title}
                className="h-full w-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-lg mb-1">{auction.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {auction.items} items • Ends {auction.endDate}
                  </p>
                </div>
                <Badge 
                  variant={auction.status === "live" ? "default" : auction.status === "upcoming" ? "secondary" : "outline"}
                  className="capitalize"
                >
                  {auction.status}
                </Badge>
              </div>
            </CardContent>
            <CardFooter className="border-t bg-muted/20 p-6">
              <div className="flex w-full items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  {auction.status === "ended" ? "Highest Bid" : "Current High Bid"}
                </span>
                <span className="text-lg font-bold">{auction.highBid}</span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
