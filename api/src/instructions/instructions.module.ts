import { Module } from "@nestjs/common";
import { InstructionsController } from "./instructions.controller";
import { InstructionsService } from "./instructions.service";
import { LegacyInstructionAdapter } from "./legacy-instruction.adapter";

@Module({
  controllers: [InstructionsController],
  providers: [InstructionsService, LegacyInstructionAdapter],
  exports: [InstructionsService, LegacyInstructionAdapter]
})
export class InstructionsModule {}
