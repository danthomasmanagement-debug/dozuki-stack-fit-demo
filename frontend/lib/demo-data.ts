import type { InstructionSummary } from "./types";

export async function getInstructionSummary(
  instructionId: string
): Promise<InstructionSummary> {
  // In production this would call the NestJS API:
  // GET /instructions/:instructionId/summary
  return {
    id: instructionId,
    title: "Northstar Packaging Line 4 Changeover",
    description:
      "Prepare a packaging line for the next product run and capture evidence before release.",
    version: "v3.2",
    lineName: "Northstar Packaging Line 4",
    latestRequestId: "req_20260606_1542_changeover",
    steps: [
      {
        id: "step-lockout",
        title: "Confirm lockout/tagout removed by authorized lead",
        status: "complete",
        requiredEvidence: "Supervisor initials and timestamp."
      },
      {
        id: "step-label-roll",
        title: "Verify label roll SKU matches batch traveler",
        status: "needs_evidence",
        requiredEvidence: "Photo of label roll and batch traveler."
      },
      {
        id: "step-test-run",
        title: "Run five-unit sample and inspect seal quality",
        status: "needs_evidence",
        requiredEvidence: "Measurement note and sample result."
      }
    ]
  };
}
