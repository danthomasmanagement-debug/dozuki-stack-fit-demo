export type EvidenceType = "photo" | "measurement" | "initials";

export class InstructionStep {
  constructor(
    public readonly id: string,
    public readonly sequence: number,
    public readonly title: string,
    public readonly body: string,
    public readonly requiredEvidenceType: EvidenceType
  ) {}
}

export class Instruction {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly version: string,
    public readonly status: "draft" | "approved" | "archived",
    public readonly steps: InstructionStep[]
  ) {}
}

