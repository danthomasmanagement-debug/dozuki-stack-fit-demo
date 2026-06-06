import type { StepResult } from "./work-run.model";

export type CreateWorkRunDto = {
  instructionId: string;
  operatorName: string;
  requestId: string;
  stepResults: StepResult[];
};

