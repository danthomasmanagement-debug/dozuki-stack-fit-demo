export type CloudDebugContext = {
  requestId: string;
  workRunId: string;
  cloudWatchLogGroup: string;
  rdsQueryTag: string;
  s3EvidencePrefix: string;
  suspectedFailureMode?: string;
};

export type CloudDebugSummary = {
  requestId: string;
  firstPlacesToCheck: string[];
  probableCause: string;
  nextAction: string;
};

