import assert from "node:assert/strict";
import test from "node:test";
import { reviewWorkRun } from "./review-engine.mjs";

const instruction = {
  id: "line-changeover-101",
  steps: [
    {
      id: "step-lockout",
      title: "Confirm lockout/tagout removed by authorized lead",
      requiredEvidenceType: "initials"
    },
    {
      id: "step-label-roll",
      title: "Verify label roll SKU matches batch traveler",
      requiredEvidenceType: "photo"
    }
  ]
};

test("approves complete work run with required evidence", () => {
  const result = reviewWorkRun(instruction, {
    stepResults: [
      { stepId: "step-lockout", status: "complete", note: "DT 15:42" },
      {
        stepId: "step-label-roll",
        status: "complete",
        evidenceUrl: "s3://dozuki-demo-evidence/run-123/label-roll.jpg"
      }
    ]
  });

  assert.equal(result.approvedForSupervisorReview, true);
  assert.deepEqual(result.findings, []);
});

test("flags missing photo evidence even when a step is marked complete", () => {
  const result = reviewWorkRun(instruction, {
    stepResults: [
      { stepId: "step-lockout", status: "complete", note: "DT 15:42" },
      { stepId: "step-label-roll", status: "complete" }
    ]
  });

  assert.equal(result.approvedForSupervisorReview, false);
  assert.equal(result.findings.length, 1);
  assert.equal(result.findings[0].category, "missing_evidence");
});

test("flags a missing step result as a high-severity issue", () => {
  const result = reviewWorkRun(instruction, {
    stepResults: [{ stepId: "step-lockout", status: "complete", note: "DT 15:42" }]
  });

  assert.equal(result.approvedForSupervisorReview, false);
  assert.equal(result.findings[0].severity, "high");
});

