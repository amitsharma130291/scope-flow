export default function NewProposalPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Create Proposal</h1>
        <p className="mt-1 text-gray-500">
          Start building a paid ads proposal for a new client.
        </p>
      </div>

      <div className="rounded-xl border bg-white p-6">
        <h2 className="text-lg font-semibold">Proposal Details</h2>

        <div className="mt-6 grid gap-4 max-w-2xl">
          <div>
            <label className="text-sm font-medium">Client name</label>
            <input
              className="mt-1 w-full rounded-lg border px-3 py-2"
              placeholder="Bright Dental Studio"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Client industry</label>
            <input
              className="mt-1 w-full rounded-lg border px-3 py-2"
              placeholder="Dental clinic, ecommerce, gym, real estate..."
            />
          </div>

          <div>
            <label className="text-sm font-medium">Monthly ad budget</label>
            <input
              className="mt-1 w-full rounded-lg border px-3 py-2"
              placeholder="$5,000"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Platforms</label>
            <input
              className="mt-1 w-full rounded-lg border px-3 py-2"
              placeholder="Meta Ads, Google Ads, TikTok Ads"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Campaign goal</label>
            <textarea
              className="mt-1 min-h-28 w-full rounded-lg border px-3 py-2"
              placeholder="Generate qualified leads, increase ROAS, scale ecommerce sales..."
            />
          </div>

          <button className="w-fit rounded-lg bg-black px-4 py-2 text-sm font-medium text-white">
            Generate Proposal
          </button>
        </div>
      </div>
    </div>
  );
}