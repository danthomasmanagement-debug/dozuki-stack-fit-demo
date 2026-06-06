import { Injectable, NotFoundException } from "@nestjs/common";
import { Instruction, InstructionStep } from "./instruction.model";

@Injectable()
export class InstructionsService {
  private readonly instructions = new Map<string, Instruction>([
    [
      "line-changeover-101",
      new Instruction("line-changeover-101", "Line Changeover Quality Check", "3.2", "approved", [
        new InstructionStep(
          "step-lockout",
          1,
          "Confirm lockout/tagout removed by authorized lead",
          "Verify the line is safe to restart and record supervisor initials.",
          "initials"
        ),
        new InstructionStep(
          "step-label-roll",
          2,
          "Verify label roll SKU matches batch traveler",
          "Capture a photo of the label roll next to the traveler before release.",
          "photo"
        ),
        new InstructionStep(
          "step-test-run",
          3,
          "Run five-unit sample and inspect seal quality",
          "Record measurement values and sample disposition.",
          "measurement"
        )
      ])
    ]
  ]);

  findOne(id: string): Instruction {
    const instruction = this.instructions.get(id);

    if (!instruction) {
      throw new NotFoundException(`Instruction ${id} was not found`);
    }

    return instruction;
  }
}

