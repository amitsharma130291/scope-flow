import { LogoutButton } from "@/app/dashboard/logout-button";

export function DashboardTopNav({ userEmail }: { userEmail: string }) {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-8">
      <div>
        <p className="text-sm text-gray-500">Welcome back</p>
      </div>

      <div className="flex items-center gap-4">
        <p className="text-sm text-gray-600">{userEmail}</p>
        <LogoutButton />
      </div>
    </header>
  );
}