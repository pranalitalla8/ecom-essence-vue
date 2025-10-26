import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Package, Clock, CheckCircle, Search } from "lucide-react";

const orders = [
  {
    id: "ORD-001",
    customer: { name: "John Smith", email: "john.smith@example.com" },
    auction: "Electronics Overstock Pallet #45",
    items: 3,
    auctionEnded: "Oct 09, 2025",
    status: "scheduled",
    pickupSlot: { date: "Oct 14, 2025", time: "11:00 AM - 01:00 PM" }
  },
  {
    id: "ORD-002",
    customer: { name: "Sarah Johnson", email: "sarah.j@example.com" },
    auction: "Home & Garden Bulk Lot #23",
    items: 2,
    auctionEnded: "Oct 08, 2025",
    status: "scheduled",
    pickupSlot: { date: "Oct 14, 2025", time: "10:00 AM - 12:00 PM" }
  },
  {
    id: "ORD-003",
    customer: { name: "Michael Chen", email: "mchen@business.com" },
    auction: "Clothing Overstock Mixed Pallet",
    items: 1,
    auctionEnded: "Oct 07, 2025",
    status: "scheduled",
    pickupSlot: { date: "Oct 15, 2025", time: "10:00 AM - 12:00 PM" }
  },
  {
    id: "ORD-004",
    customer: { name: "Emily Rodriguez", email: "emily.r@company.com" },
    auction: "Tools & Hardware Lot #12",
    items: 4,
    auctionEnded: "Oct 10, 2025",
    status: "scheduled",
    pickupSlot: { date: "Oct 15, 2025", time: "2:00 PM - 4:00 PM" }
  }
];

export default function OrderFulfillment() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Order Fulfillment</h1>
        <p className="text-muted-foreground mt-1">Manage pickup orders and schedule appointment times for winning bidders</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-warning/10">
                <Package className="h-6 w-6 text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Pending Pickups</p>
                <p className="text-3xl font-bold">5</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-info/10">
                <Clock className="h-6 w-6 text-info" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Scheduled</p>
                <p className="text-3xl font-bold">4</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success/10">
                <CheckCircle className="h-6 w-6 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Completed</p>
                <p className="text-3xl font-bold">3</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search by customer name, auction title, or order ID..." className="pl-9" />
        </div>
        <Select defaultValue="scheduled">
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Orders</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="scheduled">Scheduled</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="p-4 text-left text-sm font-semibold">Order ID</th>
                <th className="p-4 text-left text-sm font-semibold">Customer</th>
                <th className="p-4 text-left text-sm font-semibold">Auction Title</th>
                <th className="p-4 text-left text-sm font-semibold">Auction Ended</th>
                <th className="p-4 text-left text-sm font-semibold">Status</th>
                <th className="p-4 text-left text-sm font-semibold">Pickup Slot</th>
                <th className="p-4 text-left text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-muted/20 transition-colors">
                  <td className="p-4 text-sm font-medium">{order.id}</td>
                  <td className="p-4">
                    <div>
                      <div className="text-sm font-medium">{order.customer.name}</div>
                      <div className="text-xs text-muted-foreground">{order.customer.email}</div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="text-sm font-medium">{order.auction}</div>
                    <div className="text-xs text-muted-foreground">{order.items} item(s)</div>
                  </td>
                  <td className="p-4 text-sm">{order.auctionEnded}</td>
                  <td className="p-4">
                    <Badge className="bg-info/10 text-info border-info/20">
                      <Clock className="mr-1 h-3 w-3" />
                      Scheduled
                    </Badge>
                  </td>
                  <td className="p-4">
                    <div className="text-sm">📅 {order.pickupSlot.date}</div>
                    <div className="text-xs text-muted-foreground">🕐 {order.pickupSlot.time}</div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">Edit Slot</Button>
                      <Button size="sm" className="bg-success hover:bg-success/90 text-success-foreground">
                        Mark Complete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
