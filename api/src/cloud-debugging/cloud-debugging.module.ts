import { Module } from "@nestjs/common";
import { CloudDebuggingController } from "./cloud-debugging.controller";
import { CloudDebuggingService } from "./cloud-debugging.service";

@Module({
  controllers: [CloudDebuggingController],
  providers: [CloudDebuggingService],
  exports: [CloudDebuggingService]
})
export class CloudDebuggingModule {}

