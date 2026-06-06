import { Controller, Get, Param } from "@nestjs/common";
import { InstructionsService } from "./instructions.service";

@Controller("instructions")
export class InstructionsController {
  constructor(private readonly instructionsService: InstructionsService) {}

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.instructionsService.findOne(id);
  }
}

