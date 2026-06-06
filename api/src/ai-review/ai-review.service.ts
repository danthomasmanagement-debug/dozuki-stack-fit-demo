import { Injectable } from "@nestjs/common";
import type { Instruction } from "../instructions/instruction.model";
import type { WorkRun } from "../work-runs/work-run.model";
import type { ReviewFinding, ReviewResult } from "./review-finding.model";

@Injectable()
export class AiReviewService {
  reviewWorkRun(instruction: Instruction, workRun: WorkRun): ReviewResult {
    const findings: ReviewFinding[] = [];

    for (const step of instruction.steps) {
      const result = workRun.stepResults.find((item) => item.stepId === step.id);

      if (!result || result.status !== "complete") {
        findings.push({
          severity: "high",
          category: "missing_evidence",
          message: `Step ${step.sequence} is not complete: ${step.title}`,
          recommendedAction: `Capture required ${step.requiredEvidenceType} evidence before approval.`
        });
        continue;
      }

      if (!result.evidenceUrl && step.requiredEvidenceType === "photo") {
        findings.push({
          severity: "medium",
          category: "missing_evidence",
          message: `Step ${step.sequence} requires photo evidence but no evidence URL was provided.`,
          recommendedAction: "Upload the S3 evidence object and link it to the step result."
        });
      }
    }

    return {
      approvedForSupervisorReview: findings.length === 0,
      findings
    };
  }
}

