import { DashboardConfig } from "types"

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Support",
      href: "/support",
      disabled: true,
    },
  ],
  sidebarNav: [
    {
      title: "Projects",
      href: "/dashboard",
      icon: "post",
    },
    {
      title: "Services",
      href: "/dashboard/settings",
      icon: "add",
    },
    {
      title: "Databases",
      href: "/dashboard/settings",
      icon: "ellipsis",
    },

    {
      title: "Billing",
      href: "/dashboard/billing",
      icon: "billing",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "settings",
    },
  ],
}
