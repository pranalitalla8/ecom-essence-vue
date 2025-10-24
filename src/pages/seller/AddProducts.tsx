import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, Upload } from "lucide-react";

export default function AddProducts() {
  const [activeTab, setActiveTab] = useState("ai-lens");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Add products</h1>
          <p className="text-muted-foreground mt-1">Here's a guide to get started. As your business grows, you'll get fresh tips and insights here.</p>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="ai-lens">AI lens</TabsTrigger>
          <TabsTrigger value="barcode">Barcode</TabsTrigger>
          <TabsTrigger value="manifest">Manifest</TabsTrigger>
        </TabsList>

        <TabsContent value="ai-lens" className="mt-6">
          <Card className="border-2">
            <CardContent className="flex flex-col items-center justify-center py-24">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted mb-4">
                <Camera className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Take pictures</h3>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="barcode" className="mt-6">
          <Card className="border-2">
            <CardContent className="flex flex-col items-center justify-center py-24">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted mb-4">
                <Camera className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Scan barcodes</h3>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="manifest" className="mt-6">
          <Card className="border-2">
            <CardContent className="flex flex-col items-center justify-center py-24">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted mb-4">
                <Upload className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Upload manifest</h3>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
