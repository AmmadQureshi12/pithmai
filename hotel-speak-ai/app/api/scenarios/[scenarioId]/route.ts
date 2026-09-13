import { scenarios } from "@/lib/scenarios";

export async function GET(_request: Request, { params }: { params: Promise<{ scenarioId: string }> }) {
  const { scenarioId } = await params;
  const scenario = scenarios.find((item) => item.id === scenarioId);

  if (!scenario) {
    return Response.json({ error: "Scenario not found" }, { status: 404 });
  }

  return Response.json(scenario);
}
