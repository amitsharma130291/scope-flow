export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="mt-1 text-gray-500">
          Manage agency profile, branding, and account settings.
        </p>
      </div>

      <div className="rounded-xl border bg-white p-6">
        <h2 className="text-lg font-semibold">Agency Profile</h2>

        <div className="mt-6 grid gap-4 max-w-xl">
          <div>
            <label className="text-sm font-medium">Agency name</label>
            <input
              className="mt-1 w-full rounded-lg border px-3 py-2"
              placeholder="ScopeFlow Agency"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Website</label>
            <input
              className="mt-1 w-full rounded-lg border px-3 py-2"
              placeholder="https://youragency.com"
            />
          </div>

          <button className="w-fit rounded-lg bg-black px-4 py-2 text-sm font-medium text-white">
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}