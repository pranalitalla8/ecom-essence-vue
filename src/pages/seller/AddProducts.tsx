import { Camera, FileText, Plus, Maximize2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function AddProducts() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Add Your Products</h1>
          <p className="text-muted-foreground mt-1">Upload images of your overstock items and let AI help create your listings</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Dialog>
          <DialogTrigger asChild>
            <Card className="cursor-pointer hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="flex flex-col items-center justify-center py-12 space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-info/10">
                  <Camera className="h-8 w-8 text-info" />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-1">Open AI Lens</h3>
                  <p className="text-sm text-muted-foreground">Pair mobile device to scan barcodes</p>
                </div>
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Camera className="h-5 w-5 text-info" />
                AI Lens
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              <p className="text-muted-foreground">Upload photos and let AI automatically create your listing</p>
              
              <div className="border-2 border-dashed rounded-lg p-12 flex flex-col items-center justify-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                  <Maximize2 className="h-8 w-8 text-muted-foreground" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-1">Scan the bar code of product</h3>
                  <p className="text-sm text-muted-foreground">Click 'next' to scan more products</p>
                </div>
              </div>

              <p className="text-xs text-center text-muted-foreground">Supports JPG, PNG, WEBP up to 10MB each</p>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-success/10">
                    <Camera className="h-6 w-6 text-success" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Product Detection</h4>
                    <p className="text-xs text-muted-foreground">Automatically identifies products from photos</p>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-info/10">
                    <FileText className="h-6 w-6 text-info" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Smart Categorization</h4>
                    <p className="text-xs text-muted-foreground">AI assigns appropriate categories and tags</p>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple/10">
                    <span className="text-lg font-bold text-purple">$</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Value Estimation</h4>
                    <p className="text-xs text-muted-foreground">Suggests starting bids based on market data</p>
                  </div>
                </div>
              </div>

              <div className="bg-info/10 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-info text-info-foreground flex-shrink-0">
                    <span className="text-sm font-bold">AI</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">AI-Powered Listing Creation</h4>
                    <p className="text-sm text-muted-foreground">Our AI will analyze your images and automatically generate titles, descriptions, categories, condition assessments, and estimated starting bids for your overstock lots.</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" className="flex-1">Cancel</Button>
                <Button className="flex-1">Upload</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <Card className="cursor-pointer hover:border-primary transition-all hover:shadow-lg">
          <CardContent className="flex flex-col items-center justify-center py-12 space-y-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
              <FileText className="h-8 w-8 text-success" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-1">Upload CSV Manifest</h3>
              <p className="text-sm text-muted-foreground">Bulk import from spreadsheet</p>
            </div>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:border-primary transition-all hover:shadow-lg">
          <CardContent className="flex flex-col items-center justify-center py-12 space-y-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple/10">
              <Plus className="h-8 w-8 text-purple" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-1">Add Manually</h3>
              <p className="text-sm text-muted-foreground">Enter item details by hand</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
