import { AiReviewService } from "./ai-review.service";
import { Instruction, InstructionStep } from "../instructions/instruction.model";
import type { WorkRun } from "../work-runs/work-run.model";

describe("AiReviewService", () => {
  const instruction = new Instruction("instruction-1", "Line Changeover", "1.0", "approved", [
    new InstructionStep("step-1", 1, "Verify label roll", "Check SKU before release.", "photo"),
    new InstructionStep("step-2", 2, "Record seal measurement", "Measure five-unit sample.", "measurement")
  ]);

  it("approves a run when all required evidence is present", () => {
    const service = new AiReviewService();
    const run: WorkRun = {
      id: "run-1",
      instructionId: "instruction-1",
      operatorName: "Daniel",
      requestId: "req-pass",
      stepResults: [
        {
          stepId: "step-1",
          status: "complete",
          evidenceUrl: "s3://dozuki-demo-evidence/run-1/label-roll.jpg"
        },
        {
          stepId: "step-2",
          status: "complete",
          note: "All five units passed seal inspection."
        }
      ]
    };

    expect(service.reviewWorkRun(instruction, run)).toEqual({
      approvedForSupervisorReview: true,
      findings: []
    });
  });

  it("flags incomplete work before supervisor approval", () => {
    const service = new AiReviewService();
    const run: WorkRun = {
      id: "run-2",
      instructionId: "instruction-1",
      operatorName: "Daniel",
      requestId: "req-fail",
      stepResults: [
        {
          stepId: "step-1",
          status: "complete"
        }
      ]
    };

    const result = service.reviewWorkRun(instruction, run);

    expect(result.approvedForSupervisorReview).toBe(false);
    expect(result.findings).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          severity: "medium",
          category: "missing_evidence"
        }),
        expect.objectContaining({
          severity: "high",
          category: "missing_evidence"
        })
      ])
    );
  });
});

