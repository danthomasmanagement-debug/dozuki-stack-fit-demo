import { Body, Controller, Post } from "@nestjs/common";
import type { CreateWorkRunDto } from "./create-work-run.dto";
import { WorkRunsService } from "./work-runs.service";

@Controller("work-runs")
export class WorkRunsController {
  constructor(private readonly workRunsService: WorkRunsService) {}

  @Post()
  create(@Body() dto: CreateWorkRunDto) {
    return this.workRunsService.create(dto);
  }
}

