import { Body, Controller, Post } from "@nestjs/common";
import { InstructionsService } from "../instructions/instructions.service";
import type { WorkRun } from "../work-runs/work-run.model";
import { AiReviewService } from "./ai-review.service";

@Controller("ai-review")
export class AiReviewController {
  constructor(
    private readonly aiReviewService: AiReviewService,
    private readonly instructionsService: InstructionsService
  ) {}

  @Post("work-run")
  reviewWorkRun(@Body() workRun: WorkRun) {
    const instruction = this.instructionsService.findOne(workRun.instructionId);
    return this.aiReviewService.reviewWorkRun(instruction, workRun);
  }
}

