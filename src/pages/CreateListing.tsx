import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Eye, Save, Camera, Upload, Sparkles, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function CreateListing() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { number: 1, title: "Add Products", description: "Upload and identify items" },
    { number: 2, title: "Review & Arrange", description: "Organize into lots" },
    { number: 3, title: "Listing Details", description: "Set auction terms" },
    { number: 4, title: "Preview & Publish", description: "Review and go live" },
  ];

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center gap-3 mb-8">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center">
          <div className="flex items-center gap-3">
            <div className={`flex h-12 w-12 items-center justify-center rounded-full ${
              step.number === currentStep 
                ? 'bg-primary text-primary-foreground' 
                : step.number < currentStep 
                ? 'bg-success text-success-foreground'
                : 'bg-muted text-muted-foreground'
            }`}>
              {step.number < currentStep ? <Check className="h-5 w-5" /> : step.number}
            </div>
            <div className="hidden md:block">
              <div className={`text-sm font-semibold ${step.number <= currentStep ? 'text-foreground' : 'text-muted-foreground'}`}>
                {step.title}
              </div>
              <div className="text-xs text-muted-foreground">{step.description}</div>
            </div>
          </div>
          {index < steps.length - 1 && (
            <div className="h-[2px] w-16 bg-border mx-4" />
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div>
              <h1 className="text-xl font-bold">Create New Listing</h1>
              <p className="text-sm text-muted-foreground">Use AI to automatically generate listing details from your item photo</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Eye className="mr-2 h-4 w-4" />
              Show Preview
            </Button>
            <Button variant="outline" size="sm">
              <Save className="mr-2 h-4 w-4" />
              Save Draft
            </Button>
            <Button size="sm">
              Publish Listing
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {renderStepIndicator()}

        {currentStep === 1 && (
          <div className="grid gap-8 md:grid-cols-2">
            {/* Upload Section */}
            <Card>
              <CardHeader>
                <CardTitle>Upload Item Photo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed rounded-lg p-12 text-center">
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                      <Camera className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Take pictures</h3>
                      <p className="text-sm text-muted-foreground">or</p>
                    </div>
                    <Button variant="outline">Browse Files</Button>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-3">Supported formats: JPG, PNG, WEBP. Max size: 10MB</p>

                <Card className="mt-6 border-info/30 bg-info/5">
                  <CardContent className="p-4">
                    <div className="flex gap-3">
                      <Sparkles className="h-5 w-5 text-info shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm mb-1">AI-Powered Listing Creation</p>
                        <p className="text-xs text-muted-foreground">
                          Upload a photo of your item and our AI will automatically generate the title, description, category, and estimated starting bid for your auction listing.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>

            {/* Details Section */}
            <Card>
              <CardHeader>
                <CardTitle>Listing Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" placeholder="Enter auction item title" />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="electronics">Electronics</SelectItem>
                        <SelectItem value="apparel">Apparel</SelectItem>
                        <SelectItem value="home">Home & Garden</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="condition">Condition</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select condition" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="used">Used</SelectItem>
                        <SelectItem value="refurbished">Refurbished</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="starting-bid">Starting Bid ($)</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                      <Input id="starting-bid" placeholder="0.00" className="pl-7" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reserve">Reserve Price ($)</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                      <Input id="reserve" placeholder="Optional" className="pl-7" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration">Auction Duration</Label>
                  <Select defaultValue="7">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3">3 Days</SelectItem>
                      <SelectItem value="5">5 Days</SelectItem>
                      <SelectItem value="7">7 Days</SelectItem>
                      <SelectItem value="10">10 Days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Describe the item, its history, condition, and any notable features" 
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tags">Tags</Label>
                  <div className="flex gap-2">
                    <Input id="tags" placeholder="Add a tag" />
                    <Button>Add</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {currentStep === 2 && (
          <div className="max-w-2xl mx-auto text-center">
            <Card>
              <CardContent className="py-12">
                <div className="flex flex-col items-center gap-6">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-info/10">
                    <Camera className="h-10 w-10 text-info" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Pair Your Mobile Device</h2>
                    <p className="text-muted-foreground">Scan this code with your mobile app to connect</p>
                  </div>
                  <div className="p-8 bg-muted rounded-lg">
                    <div className="h-48 w-48 bg-background rounded flex items-center justify-center">
                      <p className="text-4xl">▄▄▄▄▄</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Pairing Code:</p>
                    <div className="flex gap-2">
                      {['A', 'B', 'C', 'D', 'E', 'F'].map((letter) => (
                        <div key={letter} className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center font-bold text-lg">
                          {letter}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        <div className="flex items-center justify-between mt-8 pt-6 border-t max-w-7xl">
          <Button 
            variant="outline"
            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            disabled={currentStep === 1}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
          <p className="text-sm text-muted-foreground">Step {currentStep} of 4</p>
          <Button 
            onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
            disabled={currentStep === 4}
          >
            Next
            <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
          </Button>
        </div>
      </div>
    </div>
  );
}
