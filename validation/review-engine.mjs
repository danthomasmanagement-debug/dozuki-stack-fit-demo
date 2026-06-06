export function reviewWorkRun(instruction, workRun) {
  const findings = [];

  for (const step of instruction.steps) {
    const result = workRun.stepResults.find((item) => item.stepId === step.id);

    if (!result) {
      findings.push({
        severity: "high",
        category: "missing_evidence",
        message: `No result was submitted for ${step.title}.`,
        recommendedAction: `Complete the step and capture ${step.requiredEvidenceType} evidence.`
      });
      continue;
    }

    if (result.status !== "complete") {
      findings.push({
        severity: "high",
        category: "process_risk",
        message: `${step.title} is marked ${result.status}.`,
        recommendedAction: "Resolve the blocked or incomplete step before supervisor approval."
      });
    }

    if (step.requiredEvidenceType === "photo" && !result.evidenceUrl) {
      findings.push({
        severity: "medium",
        category: "missing_evidence",
        message: `${step.title} requires a photo evidence URL.`,
        recommendedAction: "Verify S3 upload succeeded and attach the evidence URL to the step result."
      });
    }
  }

  return {
    approvedForSupervisorReview: findings.length === 0,
    findings
  };
}

