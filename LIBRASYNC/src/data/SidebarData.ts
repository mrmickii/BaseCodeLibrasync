import dashboard from "../assets/dashboard.svg"
import list from "../assets/list.svg"
import manage from "../assets/manage.svg"
import report from "../assets/report.svg"
import manageUsers from '../assets/manage-users.svg'
import settings from "../assets/settings.svg"

export const SidebarData = [
  {
    category: "Menu",
    items: [
      {
        title: "Dashboard",
        icon: dashboard,
        path: "/dashboard"
      },
      {
        title: "Book Catalog",
        icon: list,
        path: "/book-catalog"
      },
      {
        title: "Manange Books",
        icon: manage,
        path: "/manage-books"
      },
      {
        title: "Reports & Logs",
        icon: report,
        path: "/reports"
      }
    ]
  },

  {
    category: "Users",
    items: [
      {
        title: "Manage Users",
        icon: manageUsers,
        path: "/home"
      },
      {
        title: "Settings",
        icon: settings,
        path: "/home"
      }
    ]
  },
]

export const SidebarFooter = [
  {
    footer: "Version 1.0.1",
    copyright: "© 2025 CALDEV"
  }
]