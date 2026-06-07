import { Instruction, InstructionStep } from "./instruction.model";

type LegacyInstructionRow = {
  id: string;
  title: string;
  version: string;
  status: "draft" | "approved" | "archived";
};

type LegacyStepRow = {
  id: string;
  sequence: number | string;
  title: string;
  body: string;
  required_evidence_type: "photo" | "measurement" | "initials";
};

export class LegacyInstructionAdapter {
  fromRows(instructionRow: LegacyInstructionRow, stepRows: LegacyStepRow[]): Instruction {
    return new Instruction(
      instructionRow.id,
      instructionRow.title,
      instructionRow.version,
      instructionRow.status,
      stepRows.map(
        (row) =>
          new InstructionStep(
            row.id,
            Number(row.sequence),
            row.title,
            row.body,
            row.required_evidence_type
          )
      )
    );
  }
}

