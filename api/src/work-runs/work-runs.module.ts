import { Module } from "@nestjs/common";
import { WorkRunsController } from "./work-runs.controller";
import { WorkRunsService } from "./work-runs.service";

@Module({
  controllers: [WorkRunsController],
  providers: [WorkRunsService],
  exports: [WorkRunsService]
})
export class WorkRunsModule {}

