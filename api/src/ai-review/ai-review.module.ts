import { Module } from "@nestjs/common";
import { InstructionsModule } from "../instructions/instructions.module";
import { AiReviewController } from "./ai-review.controller";
import { AiReviewService } from "./ai-review.service";

@Module({
  imports: [InstructionsModule],
  controllers: [AiReviewController],
  providers: [AiReviewService],
  exports: [AiReviewService]
})
export class AiReviewModule {}

