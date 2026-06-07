import { LegacyInstructionAdapter } from "./legacy-instruction.adapter";

describe("LegacyInstructionAdapter", () => {
  it("normalizes legacy PHP database rows into the modern instruction model", () => {
    const adapter = new LegacyInstructionAdapter();

    const instruction = adapter.fromRows(
      {
        id: "instruction-1",
        title: "Line Changeover",
        version: "3.2",
        status: "approved"
      },
      [
        {
          id: "step-1",
          sequence: "1",
          title: "Verify label roll",
          body: "Capture photo evidence.",
          required_evidence_type: "photo"
        }
      ]
    );

    expect(instruction.steps[0].sequence).toBe(1);
    expect(instruction.steps[0].requiredEvidenceType).toBe("photo");
  });
});

