import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { LogoutButton } from "./logout-button";
import Link from "next/link";
import { FileText, Plus, TrendingUp, Clock } from "lucide-react";

export default async function DashboardPage() {
  const supabase = await createClient();
  const recentProposals = [
    {
      client: "Bright Dental Studio",
      type: "Google Ads Lead Gen",
      status: "Draft",
      date: "Today",
    },
    {
      client: "UrbanFit Gym",
      type: "Meta Ads Campaign",
      status: "Sent",
      date: "Yesterday",
    },
    {
      client: "Luxe Home Decor",
      type: "Ecommerce Growth",
      status: "Draft",
      date: "2 days ago",
    },
  ];

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <main className="p-8">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="mt-1 text-gray-500">
              Manage proposals and agency workflows.
            </p>
          </div>

          <Link
            href="/proposals/new"
            className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
          >
            <Plus className="h-4 w-4" />
            Create Proposal
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border bg-white p-5">
            <FileText className="mb-3 h-5 w-5 text-gray-500" />
            <p className="text-sm text-gray-500">Total Proposals</p>
            <p className="mt-1 text-2xl font-bold">12</p>
          </div>

          <div className="rounded-xl border bg-white p-5">
            <Clock className="mb-3 h-5 w-5 text-gray-500" />
            <p className="text-sm text-gray-500">Drafts</p>
            <p className="mt-1 text-2xl font-bold">4</p>
          </div>

          <div className="rounded-xl border bg-white p-5">
            <TrendingUp className="mb-3 h-5 w-5 text-gray-500" />
            <p className="text-sm text-gray-500">Sent</p>
            <p className="mt-1 text-2xl font-bold">8</p>
          </div>
        </div>

        <section className="rounded-xl border bg-white">
          <div className="border-b p-5">
            <h2 className="text-lg font-semibold">Recent Proposals</h2>
          </div>

          <div className="divide-y">
            {recentProposals.map((proposal) => (
              <div
                key={proposal.client}
                className="flex items-center justify-between p-5"
              >
                <div>
                  <p className="font-medium">{proposal.client}</p>
                  <p className="text-sm text-gray-500">{proposal.type}</p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
                    {proposal.status}
                  </span>
                  <p className="text-sm text-gray-500">{proposal.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
