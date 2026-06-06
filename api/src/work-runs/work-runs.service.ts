import { Injectable } from "@nestjs/common";
import type { CreateWorkRunDto } from "./create-work-run.dto";
import type { WorkRun } from "./work-run.model";

@Injectable()
export class WorkRunsService {
  private readonly runs = new Map<string, WorkRun>();

  create(dto: CreateWorkRunDto): WorkRun {
    const run: WorkRun = {
      id: `run_${Date.now()}`,
      ...dto
    };

    this.runs.set(run.id, run);
    return run;
  }

  findOne(id: string): WorkRun | undefined {
    return this.runs.get(id);
  }
}

