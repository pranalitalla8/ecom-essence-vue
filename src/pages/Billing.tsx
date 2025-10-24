import { BuyerHeader } from "@/components/BuyerHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function Billing() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Payment processed successfully!");
    setTimeout(() => {
      navigate("/buyer-dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <BuyerHeader />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Create Billing Account</h1>

        <form onSubmit={handleSubmit}>
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-8 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">FIRST NAME</Label>
                  <Input 
                    id="firstName"
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">LAST NAME</Label>
                  <Input 
                    id="lastName"
                    required
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="address">ADDRESS</Label>
                  <Input 
                    id="address"
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="postal">POSTAL / ZIP</Label>
                  <Input 
                    id="postal"
                    required
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="city">CITY</Label>
                  <Input 
                    id="city"
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="country">COUNTRY</Label>
                  <Input 
                    id="country"
                    required
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-2">
                  <Label htmlFor="cardNumber">CARD NUMBER</Label>
                  <Input 
                    id="cardNumber"
                    placeholder="0000 0000 0000 0000"
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input 
                    id="cvv"
                    placeholder="123"
                    maxLength={3}
                    required
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="expiration">EXPIRATION</Label>
                  <Input 
                    id="expiration"
                    placeholder="MM/YY"
                    required
                    className="mt-2"
                  />
                </div>
                <div className="flex items-end">
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="w-full"
                  >
                    Use your debit or credit card to pay with PayPal
                  </Button>
                </div>
              </div>

              <div className="pt-4">
                <Button 
                  type="submit"
                  className="w-full bg-foreground hover:bg-foreground/90 text-background"
                >
                  Complete Payment
                </Button>
              </div>
            </CardContent>
          </Card>
        </form>
      </div>
    </div>
  );
}
