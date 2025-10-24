import { useState } from "react";
import { BuyerHeader } from "@/components/BuyerHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function AuctionListing() {
  const [priceRange, setPriceRange] = useState([50000, 20000]);

  const products = Array(9).fill(null).map((_, i) => ({
    id: i + 1,
    name: "Product name",
    price: "Rs.120",
    bids: 3,
    seller: "Seller name",
    rating: 45,
    timeLeft: "4d 20h",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop"
  }));

  return (
    <div className="min-h-screen bg-background">
      <BuyerHeader />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>›</span>
          <span className="text-foreground">Ongoing Auctions</span>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 pb-16">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside className="w-64 flex-shrink-0 hidden lg:block">
            <Card className="border rounded-lg">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Filter</h3>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <span className="text-lg">⚙️</span>
                  </Button>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-3">Categories</h4>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3">Lot Type</h4>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3">Auction Status</h4>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3">Location & Shipping</h4>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3">House Rating</h4>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">Price</h4>
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={20000}
                      min={50000}
                      step={1000}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Rs.{priceRange[0]}</span>
                      <span>Rs.{priceRange[1]}</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full rounded-full bg-foreground hover:bg-foreground/90">
                  Apply Filter
                </Button>
              </CardContent>
            </Card>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold">Ongoing Auctions</h1>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <select className="border rounded-md px-3 py-1 text-sm">
                  <option>Most Popular</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Ending Soon</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-3 left-3 bg-destructive text-white">
                        Time left {product.timeLeft}
                      </Badge>
                    </div>
                    <CardContent className="p-4 space-y-2">
                      <h3 className="font-semibold">{product.name}</h3>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold">{product.price}</span>
                        <span className="text-sm text-muted-foreground">{product.bids} bids</span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>(Seller name) {product.rating}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          Time left {product.timeLeft} (Sat, 02:39 PM)
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-8">
              <Button variant="outline" size="icon">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              {[1, 2, 3, "...", 8, 9, 10].map((page, i) => (
                <Button 
                  key={i}
                  variant={page === 1 ? "default" : "outline"}
                  size="icon"
                  className="w-10 h-10"
                >
                  {page}
                </Button>
              ))}
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <section className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-2">STAY UPTO DATE ABOUT OUR LATEST AUCTIONS</h2>
            </div>
            <div className="w-full md:w-auto space-y-3">
              <Input 
                placeholder="Enter your email address" 
                className="bg-background text-foreground min-w-[300px]"
              />
              <Button className="w-full bg-background text-foreground hover:bg-background/90">
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl font-bold">Logo</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Join online auctions and find unique items to buy and sell with excitement!
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">COMPANY</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/features">Features</Link></li>
                <li><Link to="/works">Works</Link></li>
                <li><Link to="/career">Career</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">HELP</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/support">Customer Support</Link></li>
                <li><Link to="/delivery">Delivery Details</Link></li>
                <li><Link to="/terms">Terms & Conditions</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">FAQ</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/account">Account</Link></li>
                <li><Link to="/deliveries">Manage Deliveries</Link></li>
                <li><Link to="/orders">Orders</Link></li>
                <li><Link to="/payments">Payments</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            © All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
}
