import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, Image as ImageIcon, Sparkles, FileSpreadsheet, Maximize } from "lucide-react";

export default function CreateListing() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { number: 1, title: "Add Products", description: "Upload and identify items" },
    { number: 2, title: "Review & Arrange", description: "Organize into lots" },
    { number: 3, title: "Listing Details", description: "Set auction terms" },
    { number: 4, title: "Preview & Publish", description: "Review and go live" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center py-6">
        <div className="flex items-center gap-4">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className={`flex h-12 w-12 items-center justify-center rounded-full border-2 ${
                  step.number === currentStep 
                    ? 'border-primary bg-primary text-primary-foreground' 
                    : step.number < currentStep 
                    ? 'border-success bg-success text-success-foreground'
                    : 'border-muted bg-background text-muted-foreground'
                }`}>
                  {step.number < currentStep ? '✓' : step.number}
                </div>
                <div className="hidden md:block">
                  <div className={`text-sm font-semibold ${step.number === currentStep ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {step.title}
                  </div>
                  <div className="text-xs text-muted-foreground">{step.description}</div>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="h-[2px] w-12 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Add Your Products</h1>
          <p className="text-muted-foreground">Upload images of your overstock items and let AI help create your listings</p>
        </div>

        <Card className="border-2 border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-16">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted mb-4">
              <Upload className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Drop your images here</h3>
            <p className="text-sm text-muted-foreground mb-6">or choose from the options below</p>
            <Button variant="outline" size="lg">
              <ImageIcon className="mr-2 h-4 w-4" />
              Browse Images
            </Button>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-4 mt-6">
          <Card className="cursor-pointer hover:bg-accent/50 transition-colors">
            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted mb-3">
                <ImageIcon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-sm">Browse Files</h3>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:bg-accent/50 transition-colors border-info/30 bg-info/5">
            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-info/10 mb-3">
                <Sparkles className="h-6 w-6 text-info" />
              </div>
              <h3 className="font-semibold text-sm">AI Lens</h3>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:bg-accent/50 transition-colors">
            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted mb-3">
                <FileSpreadsheet className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-sm">CSV Import</h3>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:bg-accent/50 transition-colors">
            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted mb-3">
                <Maximize className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-sm">Barcode Scan</h3>
            </CardContent>
          </Card>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Supports JPG, PNG, WEBP up to 10MB each
        </p>

        <div className="flex items-center justify-between mt-8 pt-6 border-t">
          <Button variant="outline">
            Previous
          </Button>
          <p className="text-sm text-muted-foreground">Step 1 of 4</p>
          <Button>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
