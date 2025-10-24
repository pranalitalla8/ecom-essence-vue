import { useState } from "react";
import { BuyerHeader } from "@/components/BuyerHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/billing");
  };

  return (
    <div className="min-h-screen bg-background">
      <BuyerHeader />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Choose Your Payment Method</h1>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* PayPal Option */}
          <Card className={`border-2 ${paymentMethod === "paypal" ? "border-primary" : "border-border"}`}>
            <CardContent className="p-6">
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                <div className="flex items-start gap-4">
                  <RadioGroupItem value="paypal" id="paypal" className="mt-1" />
                  <div className="flex-1 space-y-4">
                    <Label htmlFor="paypal" className="text-lg font-semibold cursor-pointer">
                      PayPal
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Safe payment online. Credit card needed. PayPal account is not necessary.
                    </p>
                    {paymentMethod === "paypal" && (
                      <div className="max-w-md">
                        <Label htmlFor="paypal-email">Email address</Label>
                        <Input 
                          id="paypal-email"
                          type="email" 
                          placeholder="Enter your PayPal email"
                          className="mt-2"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Credit Card Option */}
          <Card className={`border-2 ${paymentMethod === "credit-card" ? "border-primary" : "border-border"}`}>
            <CardContent className="p-6">
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                <div className="flex items-start gap-4">
                  <RadioGroupItem value="credit-card" id="credit-card" className="mt-1" />
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="credit-card" className="text-lg font-semibold cursor-pointer">
                        Credit Card
                      </Label>
                      <div className="flex gap-2">
                        <img src="/placeholder.svg" alt="Visa" className="h-8 opacity-50" />
                        <img src="/placeholder.svg" alt="Mastercard" className="h-8 opacity-50" />
                        <img src="/placeholder.svg" alt="Discover" className="h-8 opacity-50" />
                        <img src="/placeholder.svg" alt="Amex" className="h-8 opacity-50" />
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Safe money transfer using your bank account.
                    </p>
                    
                    {paymentMethod === "credit-card" && (
                      <div className="space-y-4 pt-4">
                        <div>
                          <Label htmlFor="card-number">CREDIT CARD NUMBER</Label>
                          <Input 
                            id="card-number"
                            placeholder="0000 0000 0000 0000"
                            className="mt-2"
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expiration">EXPIRATION</Label>
                            <Input 
                              id="expiration"
                              placeholder="MM/YY"
                              className="mt-2"
                            />
                          </div>
                          <div>
                            <Label htmlFor="cvv">CVV CODE</Label>
                            <Input 
                              id="cvv"
                              placeholder="123"
                              className="mt-2"
                              maxLength={3}
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="cardholder">CARDHOLDER NAME</Label>
                          <Input 
                            id="cardholder"
                            placeholder="John Doe"
                            className="mt-2"
                          />
                        </div>

                        <div className="flex justify-end pt-4">
                          <Button 
                            className="bg-foreground hover:bg-foreground/90 text-background px-12"
                            onClick={handleCheckout}
                          >
                            Checkout
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
