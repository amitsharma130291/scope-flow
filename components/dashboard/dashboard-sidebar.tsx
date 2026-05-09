import Link from "next/link";
import { LayoutDashboard, FileText, Settings } from "lucide-react";

const navItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Proposals",
    href: "/proposals",
    icon: FileText,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export function DashboardSidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r bg-white px-4 py-6">
      <div className="mb-8">
        <h1 className="text-xl font-bold">ScopeFlow</h1>
        <p className="text-sm text-gray-500">Proposal automation</p>
      </div>

      <nav className="space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}