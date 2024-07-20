import { Home, Zap, DollarSign, Mail } from "lucide-react";
import Index from "./pages/Index.jsx";
import Features from "./pages/Features.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Features",
    to: "/features",
    icon: <Zap className="h-4 w-4" />,
    page: <Features />,
  },
  {
    title: "Pricing",
    to: "/pricing",
    icon: <DollarSign className="h-4 w-4" />,
    page: <div>Pricing Page</div>, // Placeholder
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <Mail className="h-4 w-4" />,
    page: <div>Contact Page</div>, // Placeholder
  },
];