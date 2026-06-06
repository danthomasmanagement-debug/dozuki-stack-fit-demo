export type StepStatus = "complete" | "needs_evidence" | "blocked";

export type InstructionStepSummary = {
  id: string;
  title: string;
  status: StepStatus;
  requiredEvidence: string;
};

export type InstructionSummary = {
  id: string;
  title: string;
  description: string;
  version: string;
  lineName: string;
  latestRequestId: string;
  steps: InstructionStepSummary[];
};

export type ReviewFinding = {
  severity: "low" | "medium" | "high";
  category: "missing_evidence" | "process_risk" | "documentation_gap";
  message: string;
  recommendedAction: string;
};

