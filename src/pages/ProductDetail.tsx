import { useState } from "react";
import { BuyerHeader } from "@/components/BuyerHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Share2, ChevronLeft, ChevronRight, Truck, Package, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function ProductDetail() {
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();
  
  const images = [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=600&h=400&fit=crop"
  ];

  const relatedProducts = Array(4).fill(null).map((_, i) => ({
    id: i + 1,
    name: "Product name",
    price: "$69",
    bids: 2,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop"
  }));

  return (
    <div className="min-h-screen bg-background">
      <BuyerHeader />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>›</span>
          <Link to="/auctions" className="hover:text-foreground">All Categories</Link>
          <span>›</span>
          <span className="text-foreground">Product Name</span>
        </div>
      </div>

      {/* Product Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
              <img 
                src={images[currentImage]} 
                alt="Product"
                className="w-full h-full object-cover"
              />
              <Button 
                variant="ghost" 
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80"
                onClick={() => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80"
                onClick={() => setCurrentImage((prev) => (prev + 1) % images.length)}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 ${
                    i === currentImage ? "border-primary" : "border-transparent"
                  }`}
                >
                  <img src={img} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div className="flex items-start justify-between">
              <h1 className="text-3xl font-bold">Product Name</h1>
              <Button variant="ghost" size="icon">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-warning text-warning" />
                ))}
              </div>
              <span className="text-sm">(4.9 stars)</span>
              <span className="text-sm text-muted-foreground">• 234 reviews</span>
              <Link to="#" className="text-sm text-primary underline">Auction House Name</Link>
            </div>

            <div className="flex items-baseline gap-4">
              <span className="text-4xl font-bold">$99</span>
              <span className="text-lg text-muted-foreground">3 bids</span>
            </div>

            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              varius enim in eros elementum tristique. Duis cursus, mi quis viverra
              ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
            </p>

            <div className="space-y-2">
              <h3 className="font-semibold">ADVANTAGES</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground" />
                  <span className="text-sm">Lorem ipsum dolor sit amet, consectetur.</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground" />
                  <span className="text-sm">Lorem ipsum dolor sit amet, consectetur.</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground" />
                  <span className="text-sm">Lorem ipsum dolor sit amet, consectetur.</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <Button 
                className="w-full rounded-md bg-foreground hover:bg-foreground/90 text-background"
                onClick={() => navigate("/checkout")}
              >
                Bid Now
              </Button>
              <Button variant="outline" className="w-full rounded-md">
                Add to Watchlist
              </Button>
              <Button variant="outline" className="w-full rounded-md">
                Contact Auctioneer
              </Button>
            </div>

            <div className="bg-destructive/10 text-destructive px-4 py-3 rounded-md text-center font-semibold">
              Time left 4d 20h (Sat, 02:39 PM)
            </div>

            <Card className="border">
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5" />
                  <div>
                    <p className="font-medium">Shipping</p>
                    <p className="text-sm text-muted-foreground">$10 per order</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Package className="w-5 h-5" />
                  <div>
                    <p className="font-medium">Delivery</p>
                    <p className="text-sm text-muted-foreground">Estimated between Thu Jan 4 and Fri Jan 12</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="description" className="mb-16">
          <TabsList className="grid w-full max-w-2xl grid-cols-4">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="shipping">Shipping</TabsTrigger>
            <TabsTrigger value="payment">Payment Details</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="space-y-6 mt-8">
            <div>
              <h3 className="font-semibold text-lg mb-3">PRODUCT DESCRIPTION</h3>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius
                enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros
                dolor interdum nulla, ut commodo diam libero vitae erat.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">HOW TO USE</h3>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius
                enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros
                dolor interdum nulla, ut commodo diam libero vitae erat.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">INGREDIENTS</h3>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius
                enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros
                dolor interdum nulla, ut commodo diam libero vitae erat.
              </p>
            </div>
          </TabsContent>
        </Tabs>

        {/* Product Features */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">Product Feature</h2>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius
              enim in eros elementum tristique. Duis cursus, mi quis.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-lg bg-muted flex items-center justify-center">
                    <span className="text-2xl">✦</span>
                  </div>
                  <h3 className="font-semibold">Feature {i === 1 ? "one" : i === 2 ? "two" : "three"}</h3>
                  <p className="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius
                    enim in eros elementum tristique. Duis cursus, mi quis.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Related Products */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">Other Products</h2>
            <Button variant="outline" className="rounded-full">View All</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-bold">{product.price}</span>
                    <span className="text-sm text-muted-foreground">{product.bids} bids</span>
                  </div>
                  <Button className="w-full" variant="outline">Bid Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
