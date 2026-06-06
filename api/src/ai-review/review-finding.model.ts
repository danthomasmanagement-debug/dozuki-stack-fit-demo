export type ReviewFinding = {
  severity: "low" | "medium" | "high";
  category: "missing_evidence" | "process_risk" | "documentation_gap";
  message: string;
  recommendedAction: string;
};

export type ReviewResult = {
  approvedForSupervisorReview: boolean;
  findings: ReviewFinding[];
};

