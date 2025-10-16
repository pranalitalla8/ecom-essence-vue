import { Home, Package, ShoppingCart, Users, FileText, DollarSign, BarChart3, Percent, FileBarChart, Settings, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const menuItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Seller Dashboard", url: "/seller-dashboard", icon: BarChart3 },
  { title: "Buyer Dashboard", url: "/buyer-dashboard", icon: ShoppingCart },
  { 
    title: "Auctions", 
    icon: Package,
    subItems: [
      { title: "Auction House", url: "/auctions", badge: "5" },
      { title: "Create Listing", url: "/create-listing" },
    ]
  },
  { title: "Orders", url: "/orders", icon: ShoppingCart, badge: "2" },
  { title: "Customers", url: "/customers", icon: Users },
  { title: "Content", url: "/content", icon: FileText },
  { title: "Finances", url: "/finances", icon: DollarSign },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
  { title: "Discounts", url: "/discounts", icon: Percent },
  { title: "Reports", url: "/reports", icon: FileBarChart },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar className={collapsed ? "w-16" : "w-64"} collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground">
            <Package className="h-4 w-4" />
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <span className="text-sm font-semibold">My Store</span>
              <span className="text-xs text-muted-foreground">Not published</span>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.subItems ? (
                    <Collapsible defaultOpen className="group/collapsible">
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton className="w-full">
                          <item.icon className="h-4 w-4" />
                          {!collapsed && (
                            <>
                              <span>{item.title}</span>
                              <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                            </>
                          )}
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      {!collapsed && (
                        <CollapsibleContent>
                          <SidebarMenu className="ml-4 border-l border-sidebar-border pl-2">
                            {item.subItems.map((subItem) => (
                              <SidebarMenuItem key={subItem.url}>
                                <SidebarMenuButton asChild>
                                  <NavLink 
                                    to={subItem.url}
                                    className={({ isActive }) =>
                                      isActive ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" : ""
                                    }
                                  >
                                    <span>{subItem.title}</span>
                                    {subItem.badge && (
                                      <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-muted text-xs">
                                        {subItem.badge}
                                      </span>
                                    )}
                                  </NavLink>
                                </SidebarMenuButton>
                              </SidebarMenuItem>
                            ))}
                          </SidebarMenu>
                        </CollapsibleContent>
                      )}
                    </Collapsible>
                  ) : (
                    <SidebarMenuButton asChild>
                      <NavLink 
                        to={item.url}
                        className={({ isActive }) =>
                          isActive ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" : ""
                        }
                      >
                        <item.icon className="h-4 w-4" />
                        {!collapsed && (
                          <>
                            <span>{item.title}</span>
                            {item.badge && (
                              <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-muted text-xs">
                                {item.badge}
                              </span>
                            )}
                          </>
                        )}
                      </NavLink>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink to="/settings">
                    <Settings className="h-4 w-4" />
                    {!collapsed && <span>Settings</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
