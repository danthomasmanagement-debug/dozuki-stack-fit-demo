import { Module } from "@nestjs/common";
import { AiReviewModule } from "./ai-review/ai-review.module";
import { CloudDebuggingModule } from "./cloud-debugging/cloud-debugging.module";
import { InstructionsModule } from "./instructions/instructions.module";
import { WorkRunsModule } from "./work-runs/work-runs.module";

@Module({
  imports: [
    InstructionsModule,
    WorkRunsModule,
    AiReviewModule,
    CloudDebuggingModule
  ]
})
export class AppModule {}

