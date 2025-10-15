import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCard } from "@/components/StatCard";
import { Progress } from "@/components/ui/progress";
import { DollarSign, Package, Users, TrendingUp, Upload, FileUp, ChevronRight } from "lucide-react";

export default function Dashboard() {
  const setupSteps = [
    { label: "Add your first auction listing", completed: false },
    { label: "Configure shipping settings", completed: false },
    { label: "Upload store logo", completed: false },
    { label: "Set up payment processing", completed: false },
    { label: "Add store policies", completed: false },
    { label: "Set up tax settings", completed: false },
  ];

  const completedSteps = setupSteps.filter(step => step.completed).length;
  const progress = (completedSteps / setupSteps.length) * 100;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Get ready to sell!</h1>
          <p className="text-muted-foreground mt-1">Here's a guide to get your auction house up and running.</p>
        </div>
        <Button>
          <Upload className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Setup Guide</CardTitle>
          <CardDescription>Complete these steps to start selling</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">Progress</span>
              <span className="text-muted-foreground">{completedSteps}/{setupSteps.length} completed</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <div className="grid gap-2 md:grid-cols-2">
            {setupSteps.map((step, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className={`h-4 w-4 rounded-full border-2 ${step.completed ? 'bg-success border-success' : 'border-muted'}`} />
                <span className={step.completed ? 'text-muted-foreground line-through' : ''}>{step.label}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          title="Total Sales" 
          value="$0" 
          icon={DollarSign}
          iconColor="text-success"
          iconBgColor="bg-success/10"
        />
        <StatCard 
          title="Active Auctions" 
          value="0" 
          icon={Package}
          iconColor="text-info"
          iconBgColor="bg-info/10"
        />
        <StatCard 
          title="Total Bidders" 
          value="0" 
          icon={Users}
          iconColor="text-purple"
          iconBgColor="bg-purple/10"
        />
        <StatCard 
          title="Conversion Rate" 
          value="0%" 
          icon={TrendingUp}
          iconColor="text-warning"
          iconBgColor="bg-warning/10"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="cursor-pointer hover:bg-accent/50 transition-colors">
          <CardContent className="flex items-center justify-between p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Package className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Start an Auction</h3>
                <p className="text-sm text-muted-foreground">Add your first products and start selling</p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:bg-accent/50 transition-colors">
          <CardContent className="flex items-center justify-between p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                <FileUp className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Sell online using a template</h3>
                <p className="text-sm text-muted-foreground">Choose from pre-made templates</p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <h3 className="font-semibold">Quick tasks:</h3>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          <Button variant="link" className="h-auto p-0 text-sm">
            <ChevronRight className="mr-1 h-3 w-3" />
            Add your first auction listing
          </Button>
          <Button variant="link" className="h-auto p-0 text-sm">
            <ChevronRight className="mr-1 h-3 w-3" />
            Manage your auction
          </Button>
          <Button variant="link" className="h-auto p-0 text-sm">
            <ChevronRight className="mr-1 h-3 w-3" />
            Manage your services
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
