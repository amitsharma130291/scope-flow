import Link from "next/link";
import { Plus } from "lucide-react";

export default function ProposalsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Proposals</h1>
          <p className="mt-1 text-gray-500">
            View, edit, and create client proposals.
          </p>
        </div>

        <Link
          href="/proposals/new"
          className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
        >
          <Plus className="h-4 w-4" />
          New Proposal
        </Link>
      </div>

      <div className="rounded-xl border bg-white p-8 text-center">
        <h2 className="text-lg font-semibold">No proposals yet</h2>
        <p className="mt-2 text-gray-500">
          Create your first AI-powered paid ads proposal.
        </p>
      </div>
    </div>
  );
}