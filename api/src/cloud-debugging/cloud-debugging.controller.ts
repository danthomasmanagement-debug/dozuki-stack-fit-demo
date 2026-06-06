import { Body, Controller, Post } from "@nestjs/common";
import type { CloudDebugContext } from "./cloud-debugging.model";
import { CloudDebuggingService } from "./cloud-debugging.service";

@Controller("cloud-debugging")
export class CloudDebuggingController {
  constructor(private readonly cloudDebuggingService: CloudDebuggingService) {}

  @Post("summarize")
  summarize(@Body() context: CloudDebugContext) {
    return this.cloudDebuggingService.summarize(context);
  }
}

