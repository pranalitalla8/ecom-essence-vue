import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, useLocation } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/Header";
import Dashboard from "./pages/Dashboard";
import BuyerDashboard from "./pages/BuyerDashboard";
import Auctions from "./pages/Auctions";
import CreateListing from "./pages/CreateListing";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Index from "./pages/Index";
import AuctionListing from "./pages/AuctionListing";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import Billing from "./pages/Billing";
import AddProducts from "./pages/seller/AddProducts";
import AuctionHouse from "./pages/seller/AuctionHouse";
import OrderFulfillment from "./pages/seller/OrderFulfillment";

const queryClient = new QueryClient();

const App = () => {
  const location = useLocation();
  const publicRoutes = ["/", "/login", "/signup", "/forgot-password"];
  const buyerRoutes = ["/auctions", "/product/:id", "/checkout", "/billing"];
  const isPublicRoute = publicRoutes.includes(location.pathname);
  const isBuyerRoute = buyerRoutes.some(route => {
    const pattern = new RegExp(`^${route.replace(/:\w+/g, '[^/]+')}$`);
    return pattern.test(location.pathname);
  }) || location.pathname.startsWith("/product/");

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {isPublicRoute ? (
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        ) : isBuyerRoute ? (
          <Routes>
            <Route path="/auctions" element={<AuctionListing />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        ) : (
          <SidebarProvider defaultOpen>
            <div className="flex min-h-screen w-full">
              <AppSidebar />
              <div className="flex flex-1 flex-col">
                <Header />
                <main className="flex-1 p-6">
                  <Routes>
                    <Route path="/seller-dashboard" element={<Dashboard />} />
                    <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
                    <Route path="/auctions" element={<Auctions />} />
                    <Route path="/create-listing" element={<CreateListing />} />
                    <Route path="/add-products" element={<AddProducts />} />
                    <Route path="/auction-house" element={<AuctionHouse />} />
                    <Route path="/order-fulfillment" element={<OrderFulfillment />} />
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
              </div>
            </div>
          </SidebarProvider>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
