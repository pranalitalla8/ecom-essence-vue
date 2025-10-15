import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoreVertical, Eye, Users } from "lucide-react";

interface AuctionCardProps {
  image: string;
  title: string;
  pieces: string;
  category: string;
  status: "live" | "ended" | "upcoming";
  currentBid?: string;
  finalPrice?: string;
  startingBid?: string;
  timing: string;
  estimatedValue: string;
  condition: string;
  views: number;
  watchers: number;
}

export function AuctionCard({
  image,
  title,
  pieces,
  category,
  status,
  currentBid,
  finalPrice,
  startingBid,
  timing,
  estimatedValue,
  condition,
  views,
  watchers,
}: AuctionCardProps) {
  const statusConfig = {
    live: { label: "Live", className: "bg-success text-success-foreground" },
    ended: { label: "Ended", className: "bg-muted text-muted-foreground" },
    upcoming: { label: "Upcoming", className: "bg-info text-info-foreground" },
  };

  const statusInfo = statusConfig[status];

  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <div className="absolute left-3 top-3">
          <Badge className={statusInfo.className}>{statusInfo.label}</Badge>
        </div>
        <button className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-background/90 hover:bg-background">
          <MoreVertical className="h-4 w-4" />
        </button>
      </div>
      
      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-base mb-1">{title}</h3>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">{pieces}</span>
            <Badge variant="outline" className="text-xs">{category}</Badge>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 py-2 border-y">
          <div>
            <div className="text-xs text-muted-foreground mb-1">
              {status === "ended" ? "Final Price" : status === "upcoming" ? "Starting Bid" : "Current Bid"}
            </div>
            <div className="text-lg font-semibold">
              {status === "ended" ? finalPrice : status === "upcoming" ? startingBid : currentBid}
            </div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground mb-1">
              {status === "ended" ? "Ended" : status === "upcoming" ? "Starts in" : "Ends in"}
            </div>
            <div className="text-sm font-medium">{timing}</div>
          </div>
        </div>

        <div className="space-y-1 text-xs">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Est. Retail Value</span>
            <span className="font-medium">{estimatedValue}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Condition</span>
            <span className="font-medium">{condition}</span>
          </div>
          <div className="flex items-center gap-4 pt-1">
            <span className="flex items-center gap-1 text-muted-foreground">
              <Eye className="h-3 w-3" /> {views}
            </span>
            <span className="flex items-center gap-1 text-muted-foreground">
              <Users className="h-3 w-3" /> {watchers} watching
            </span>
          </div>
        </div>

        <Button className="w-full" variant={status === "ended" ? "outline" : "default"}>
          {status === "ended" ? "View Results" : "View Auction"}
        </Button>
      </CardContent>
    </Card>
  );
}
