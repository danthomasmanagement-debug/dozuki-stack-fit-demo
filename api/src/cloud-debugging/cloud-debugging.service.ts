import { Injectable } from "@nestjs/common";
import type { CloudDebugContext, CloudDebugSummary } from "./cloud-debugging.model";

@Injectable()
export class CloudDebuggingService {
  summarize(context: CloudDebugContext): CloudDebugSummary {
    const firstPlacesToCheck = [
      `CloudWatch log group ${context.cloudWatchLogGroup} filtered by requestId=${context.requestId}`,
      `RDS queries tagged ${context.rdsQueryTag}`,
      `S3 prefix ${context.s3EvidencePrefix} for missing evidence objects`
    ];

    return {
      requestId: context.requestId,
      firstPlacesToCheck,
      probableCause:
        context.suspectedFailureMode ??
        "Step evidence may have uploaded successfully but failed to attach to the work-run record.",
      nextAction:
        "Compare the API request log, RDS step_result row, and S3 object metadata before changing application code."
    };
  }
}

