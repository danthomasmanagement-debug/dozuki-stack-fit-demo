const traceSteps = [
  "Capture request ID from the operator workflow.",
  "Filter CloudWatch logs by request ID and work-run ID.",
  "Check S3 evidence object path and upload metadata.",
  "Query RDS/PostgreSQL step_results and audit_events.",
  "Compare backend state with frontend response mapping.",
  "Document root cause, fix, and verification notes."
];

export function CloudDebugTrace() {
  return (
    <section aria-labelledby="debug-title" className="section trace-section">
      <div className="section-heading">
        <p className="eyebrow">AWS Debugging</p>
        <h2 id="debug-title">How I would investigate missing evidence</h2>
        <p>
          The goal is not to guess. The goal is to follow one production event
          through logs, storage, database state, API response, and user impact.
        </p>
      </div>

      <ol className="trace-list">
        {traceSteps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </section>
  );
}

