import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, FileText, Clock } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background px-6 py-20">
      <section className="mx-auto max-w-5xl text-center">
        <div className="mb-6 inline-flex items-center rounded-full border px-4 py-2 text-sm">
          <Sparkles className="mr-2 h-4 w-4" />
          Proposal automation for paid ads agencies
        </div>

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Generate paid ads proposals in minutes.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Create professional Meta, Google, and PPC campaign proposals faster
          with AI-assisted workflows built for performance marketing agencies.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg">Start generating</Button>
          <Button size="lg" variant="outline">
            View demo
          </Button>
        </div>
      </section>

      <section className="mx-auto mt-20 grid max-w-5xl gap-6 md:grid-cols-3">
        <Card>
          <CardContent className="p-6">
            <FileText className="mb-4 h-8 w-8" />
            <h3 className="font-semibold">AI proposals</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Generate strategy, deliverables, pricing, timelines, and onboarding sections.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <Clock className="mb-4 h-8 w-8" />
            <h3 className="font-semibold">Save hours</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Turn repetitive proposal writing into a 5–10 minute workflow.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <Sparkles className="mb-4 h-8 w-8" />
            <h3 className="font-semibold">Agency-specific</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Built around ad budgets, ROAS, CPA, campaign structure, and media buying.
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}