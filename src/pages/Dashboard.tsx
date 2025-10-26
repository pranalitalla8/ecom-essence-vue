import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCard } from "@/components/StatCard";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  DollarSign, 
  Package, 
  Users, 
  TrendingUp, 
  Upload, 
  ChevronRight,
  Gavel,
  Eye,
  Clock,
  BarChart3
} from "lucide-react";

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
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Get ready to sell!</h1>
          <p className="text-muted-foreground mt-1">Here's a guide to get your auction house up and running.</p>
        </div>
        <Link to="/add-products">
          <Button className="rounded-full">
            <Upload className="mr-2 h-4 w-4" />
            Add Product
          </Button>
        </Link>
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

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="border-0 bg-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Gavel className="h-5 w-5" />
              Start an Auction
            </CardTitle>
            <CardDescription>Add your first products and start selling</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Link to="/add-products">
              <Button className="w-full">
                <Upload className="mr-2 h-4 w-4" />
                Add Products
              </Button>
            </Link>
            <Button variant="outline" className="w-full">
              <Package className="mr-2 h-4 w-4" />
              Import Products
            </Button>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Link to="/auction-house">
            <Card className="cursor-pointer hover:bg-accent/50 transition-all duration-300">
              <CardContent className="flex items-center justify-between p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-info/10">
                    <Package className="h-5 w-5 text-info" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Sell online using a template</h3>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </CardContent>
            </Card>
          </Link>

          <Card className="cursor-pointer hover:bg-accent/50 transition-all duration-300">
            <CardContent className="flex items-center justify-between p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Store settings</h3>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:bg-accent/50 transition-all duration-300">
            <CardContent className="flex items-center justify-between p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Launch your online store</h3>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick tasks */}
      <div>
        <h3 className="text-sm font-medium mb-3">Quick tasks:</h3>
        <div className="flex flex-wrap gap-3">
          <Link to="/create-listing">
            <Button variant="ghost" className="text-info hover:text-info">
              <ChevronRight className="h-4 w-4 mr-1" />
              Add your first auction listing
            </Button>
          </Link>
          <Link to="/auction-house">
            <Button variant="ghost" className="text-info hover:text-info">
              <ChevronRight className="h-4 w-4 mr-1" />
              Manage your auction
            </Button>
          </Link>
          <Button variant="ghost" className="text-info hover:text-info">
            <ChevronRight className="h-4 w-4 mr-1" />
            Manage your services
          </Button>
        </div>
      </div>
    </div>
  );
}
