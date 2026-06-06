export type StepResultStatus = "complete" | "missing_evidence" | "blocked";

export type StepResult = {
  stepId: string;
  status: StepResultStatus;
  evidenceUrl?: string;
  note?: string;
};

export type WorkRun = {
  id: string;
  instructionId: string;
  operatorName: string;
  requestId: string;
  stepResults: StepResult[];
};

