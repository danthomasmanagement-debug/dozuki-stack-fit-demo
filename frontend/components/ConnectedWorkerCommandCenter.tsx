"use client";

import { useMemo, useState } from "react";

type Mode = "author" | "execute" | "review" | "trace" | "audit";

type Step = {
  id: string;
  title: string;
  body: string;
  evidence: "photo" | "measurement" | "initials";
  completed: boolean;
  evidenceCaptured: boolean;
};

const initialSteps: Step[] = [
  {
    id: "sku",
    title: "Verify label roll SKU",
    body: "Compare the label roll against the batch traveler before the first production sample.",
    evidence: "photo",
    completed: true,
    evidenceCaptured: true
  },
  {
    id: "seal",
    title: "Run five-unit seal sample",
    body: "Record seal measurements and confirm all five samples meet quality thresholds.",
    evidence: "measurement",
    completed: false,
    evidenceCaptured: false
  },
  {
    id: "signoff",
    title: "Supervisor release signoff",
    body: "Release the line only after evidence is attached and deviations are resolved.",
    evidence: "initials",
    completed: false,
    evidenceCaptured: false
  }
];

const modeCopy: Record<Mode, { label: string; title: string; text: string }> = {
  author: {
    label: "Author",
    title: "AI-assisted authoring turns tribal knowledge into controlled work.",
    text: "The authoring view models document control, versioning, required evidence, and approval state before instructions reach the floor."
  },
  execute: {
    label: "Execute",
    title: "Operators get a guided workflow with evidence gates.",
    text: "The workflow keeps the next action obvious, captures proof, and prevents quiet approval when required information is missing."
  },
  review: {
    label: "Review",
    title: "AI review is useful because deterministic validation stays in charge.",
    text: "The AI layer explains risk, but hard checks still decide whether a work run is ready for supervisor review."
  },
  trace: {
    label: "Trace",
    title: "Cloud debugging follows one request across UI, API, storage, and data.",
    text: "The trace view shows how I would debug a production issue with CloudWatch logs, S3 evidence, and RDS/PostgreSQL rows."
  },
  audit: {
    label: "Audit",
    title: "Every action leaves evidence an engineer, QA lead, or auditor can inspect.",
    text: "The audit view connects UI events to SQL tables, API contracts, test gates, and the legacy PHP migration path."
  }
};

export function ConnectedWorkerCommandCenter() {
  const [mode, setMode] = useState<Mode>("execute");
  const [steps, setSteps] = useState(initialSteps);

  const status = useMemo(() => {
    const completed = steps.filter((step) => step.completed).length;
    const evidence = steps.filter((step) => step.evidenceCaptured).length;

    return {
      completed,
      evidence,
      readiness: Math.round(((completed + evidence) / (steps.length * 2)) * 100)
    };
  }, [steps]);

  const findings = useMemo(() => buildFindings(steps), [steps]);

  function toggleComplete(stepId: string) {
    setSteps((current) =>
      current.map((step) =>
        step.id === stepId ? { ...step, completed: !step.completed } : step
      )
    );
  }

  function toggleEvidence(stepId: string) {
    setSteps((current) =>
      current.map((step) =>
        step.id === stepId
          ? { ...step, evidenceCaptured: !step.evidenceCaptured }
          : step
      )
    );
  }

  return (
    <section aria-labelledby="command-title" className="command-shell">
      <div className="command-top">
        <div>
          <p className="eyebrow">Interactive Demo</p>
          <h2 id="command-title">Connected worker command center</h2>
          <p>
            A Dozuki-inspired slice of product engineering: author controlled
            procedures, guide operators, review with AI guardrails, and debug
            production evidence issues from request ID to database row.
          </p>
        </div>
        <div className="readiness-card" aria-label="Readiness score">
          <span>{status.readiness}%</span>
          <p>release readiness</p>
        </div>
      </div>

      <div className="metric-strip" aria-label="Workflow metrics">
        <Metric value="3" label="controlled steps" detail="versioned procedure" />
        <Metric value={`${status.completed}/3`} label="steps complete" detail="operator progress" />
        <Metric value={`${status.evidence}/3`} label="evidence captured" detail="photo, measurement, signoff" />
        <Metric value={findings.length.toString()} label="AI findings" detail="human review required" />
      </div>

      <div className="mode-tabs" role="tablist" aria-label="Demo modes">
        {(["author", "execute", "review", "trace", "audit"] as Mode[]).map((item) => (
          <button
            aria-selected={mode === item}
            className="mode-tab"
            key={item}
            onClick={() => setMode(item)}
            role="tab"
            type="button"
          >
            {modeCopy[item].label}
          </button>
        ))}
      </div>

      <div className="command-grid">
        <div className="console-panel primary-console">
          <p className="eyebrow">{modeCopy[mode].label} Mode</p>
          <h3>{modeCopy[mode].title}</h3>
          <p>{modeCopy[mode].text}</p>
          {mode === "author" && <AuthorView />}
          {mode === "execute" && (
            <ExecuteView
              onToggleComplete={toggleComplete}
              onToggleEvidence={toggleEvidence}
              steps={steps}
            />
          )}
          {mode === "review" && <ReviewView findings={findings} status={status} />}
          {mode === "trace" && <TraceView steps={steps} />}
          {mode === "audit" && (
            <AuditView
              auditEvents={buildAuditEvents(steps, findings)}
              findings={findings}
              status={status}
            />
          )}
        </div>

        <aside className="console-panel side-console" aria-label="Engineering proof">
          <p className="eyebrow">Engineering Proof</p>
          <h3>Why this is not just a mockup</h3>
          <ul className="proof-list">
            <li>Next.js static export deploys to GitHub Pages.</li>
            <li>NestJS services separate instruction, review, and cloud-debug logic.</li>
            <li>PostgreSQL schema models versioned instructions and audit events.</li>
            <li>Legacy PHP endpoint demonstrates migration-safe compatibility.</li>
            <li>Tests validate missing evidence and incomplete work runs.</li>
          </ul>
          <div className="impact-card">
            <span>Early contribution lane</span>
            <strong>
              Debug data/API issues, improve test coverage, document production
              workflows, and help ship guarded AI features.
            </strong>
          </div>
          <QualityGatePanel />
        </aside>
      </div>
    </section>
  );
}

function Metric({ value, label, detail }: { value: string; label: string; detail: string }) {
  return (
    <div className="metric-card">
      <strong>{value}</strong>
      <span>{label}</span>
      <small>{detail}</small>
    </div>
  );
}

function AuthorView() {
  return (
    <div className="author-board">
      <div className="author-card approved">
        <span>v3.2 approved</span>
        <strong>Line Changeover Quality Check</strong>
        <p>Owner: Quality Ops | Review cadence: quarterly | Approval: supervisor required</p>
      </div>
      <div className="author-card">
        <span>AI draft assist</span>
        <strong>Suggested improvement</strong>
        <p>Add photo evidence for label roll SKU because prior defects came from traveler mismatch.</p>
      </div>
      <div className="author-card">
        <span>Control gate</span>
        <strong>Do not publish until QA signs off</strong>
        <p>Versioned instructions need approval history, audit trail, and operator feedback loop.</p>
      </div>
    </div>
  );
}

function ExecuteView({
  steps,
  onToggleComplete,
  onToggleEvidence
}: {
  steps: Step[];
  onToggleComplete: (stepId: string) => void;
  onToggleEvidence: (stepId: string) => void;
}) {
  return (
    <ol className="operator-steps">
      {steps.map((step, index) => (
        <li className={step.completed ? "operator-step complete" : "operator-step"} key={step.id}>
          <div className="step-number">{index + 1}</div>
          <div>
            <h4>{step.title}</h4>
            <p>{step.body}</p>
            <div className="step-actions">
              <button
                aria-pressed={step.completed}
                onClick={() => onToggleComplete(step.id)}
                type="button"
              >
                {step.completed ? "Mark incomplete" : "Complete step"}
              </button>
              <button
                aria-pressed={step.evidenceCaptured}
                onClick={() => onToggleEvidence(step.id)}
                type="button"
              >
                {step.evidenceCaptured ? "Remove evidence" : `Attach ${step.evidence}`}
              </button>
            </div>
          </div>
          <span className={step.evidenceCaptured ? "evidence-pill captured" : "evidence-pill"}>
            {step.evidenceCaptured ? "Evidence captured" : `${step.evidence} required`}
          </span>
        </li>
      ))}
    </ol>
  );
}

function ReviewView({
  findings,
  status
}: {
  findings: ReturnType<typeof buildFindings>;
  status: { completed: number; evidence: number; readiness: number };
}) {
  return (
    <div className="review-board">
      <div className="review-score">
        <span>{findings.length === 0 ? "Ready" : "Hold"}</span>
        <strong>{status.readiness}%</strong>
        <p>
          {findings.length === 0
            ? "All deterministic checks passed. AI recommendation can move to supervisor review."
            : "AI review found risks. A human should resolve these before release."}
        </p>
      </div>
      <div className="finding-list" aria-live="polite">
        {findings.length === 0 ? (
          <article className="finding pass">
            <span>PASS</span>
            <strong>No blocking findings</strong>
            <p>Evidence, completion, and release checks are aligned.</p>
          </article>
        ) : (
          findings.map((finding) => (
            <article className="finding" key={finding.title}>
              <span>{finding.severity}</span>
              <strong>{finding.title}</strong>
              <p>{finding.action}</p>
            </article>
          ))
        )}
      </div>
    </div>
  );
}

function AuditView({
  auditEvents,
  findings,
  status
}: {
  auditEvents: ReturnType<typeof buildAuditEvents>;
  findings: ReturnType<typeof buildFindings>;
  status: { completed: number; evidence: number; readiness: number };
}) {
  return (
    <div className="audit-workbench">
      <div className="audit-timeline">
        {auditEvents.map((event) => (
          <article className="audit-event" key={`${event.time}-${event.title}`}>
            <span>{event.time}</span>
            <strong>{event.title}</strong>
            <p>{event.detail}</p>
          </article>
        ))}
      </div>
      <div className="sql-inspector">
        <div className="inspector-header">
          <span>SQL Inspector</span>
          <strong>{status.readiness}% readiness</strong>
        </div>
        <pre>{buildSqlSnippet(findings.length)}</pre>
      </div>
      <ApiContractPanel findings={findings} />
      <MigrationPanel />
      <AiGuardrailPanel findings={findings} />
    </div>
  );
}

function TraceView({ steps }: { steps: Step[] }) {
  const missing =
    steps.find((step) => step.completed && !step.evidenceCaptured) ??
    steps.find((step) => !step.completed);
  const objectState = missing
    ? "Evidence object or step_result row needs investigation"
    : "S3 object and step_result row are consistent";

  return (
    <div className="trace-console">
      <code>requestId=req_20260606_1542_changeover</code>
      <div className="trace-row">
        <span>CloudWatch</span>
        <strong>Filter API logs by requestId and workRunId</strong>
      </div>
      <div className="trace-row">
        <span>S3</span>
        <strong>Check evidence prefix /line-4/run-8392/</strong>
      </div>
      <div className="trace-row">
        <span>RDS</span>
        <strong>Query step_results and audit_events for matching request_id</strong>
      </div>
      <div className="trace-row attention">
        <span>Root cause lens</span>
        <strong>{objectState}</strong>
      </div>
    </div>
  );
}

function QualityGatePanel() {
  const gates = [
    ["Validation engine", "PASS"],
    ["API unit tests", "PASS"],
    ["API TypeScript build", "PASS"],
    ["Next.js static export", "PASS"],
    ["PHP syntax check", "PASS"]
  ];

  return (
    <div className="quality-gates" aria-label="Quality gates">
      <span>Quality Gates</span>
      {gates.map(([label, result]) => (
        <div className="quality-gate" key={label}>
          <strong>{label}</strong>
          <em>{result}</em>
        </div>
      ))}
    </div>
  );
}

function ApiContractPanel({ findings }: { findings: ReturnType<typeof buildFindings> }) {
  const payload = {
    workRunId: "run_8392",
    requestId: "req_20260606_1542_changeover",
    status: findings.length === 0 ? "ready_for_review" : "needs_attention",
    findings: findings.map((finding) => finding.title)
  };

  return (
    <div className="contract-panel">
      <div className="inspector-header">
        <span>API Contract</span>
        <strong>POST /api/ai-review/work-run</strong>
      </div>
      <pre>{JSON.stringify(payload, null, 2)}</pre>
    </div>
  );
}

function MigrationPanel() {
  return (
    <div className="migration-panel">
      <div className="inspector-header">
        <span>Legacy Migration</span>
        <strong>PHP to TypeScript adapter</strong>
      </div>
      <div className="migration-flow">
        <div>
          <span>Legacy PHP</span>
          <strong>InstructionSummaryGateway</strong>
        </div>
        <div>
          <span>Adapter</span>
          <strong>Normalize snake_case rows</strong>
        </div>
        <div>
          <span>NestJS</span>
          <strong>Typed Instruction model</strong>
        </div>
      </div>
    </div>
  );
}

function AiGuardrailPanel({ findings }: { findings: ReturnType<typeof buildFindings> }) {
  const stages = [
    ["Raw operator data", "Step state and evidence values only"],
    ["Deterministic validation", `${findings.length} blocking or warning checks`],
    ["Structured AI review", "JSON findings with severity and action"],
    ["Human approval", findings.length === 0 ? "Supervisor can release" : "Supervisor must resolve risks"]
  ];

  return (
    <div className="guardrail-panel">
      <div className="inspector-header">
        <span>AI Guardrails</span>
        <strong>Human in the loop</strong>
      </div>
      {stages.map(([stage, detail]) => (
        <div className="guardrail-stage" key={stage}>
          <strong>{stage}</strong>
          <p>{detail}</p>
        </div>
      ))}
    </div>
  );
}

function buildFindings(steps: Step[]) {
  const findings = [];

  for (const step of steps) {
    if (!step.completed) {
      findings.push({
        severity: "HIGH",
        title: `${step.title} is incomplete`,
        action: "Finish the operator step before supervisor release."
      });
    }

    if (step.completed && !step.evidenceCaptured) {
      findings.push({
        severity: "MEDIUM",
        title: `${step.title} is missing ${step.evidence} evidence`,
        action: "Attach evidence or document the exception in the audit trail."
      });
    }
  }

  return findings;
}

function buildAuditEvents(steps: Step[], findings: ReturnType<typeof buildFindings>) {
  const events = [
    {
      time: "08:42",
      title: "Instruction v3.2 approved",
      detail: "Quality Ops published a controlled procedure with required evidence gates."
    },
    {
      time: "09:13",
      title: "Operator started work run",
      detail: "Request ID req_20260606_1542_changeover created for Packaging Line 4."
    }
  ];

  for (const step of steps) {
    if (step.completed) {
      events.push({
        time: step.evidenceCaptured ? "09:22" : "09:19",
        title: `${step.title} completed`,
        detail: step.evidenceCaptured
          ? `${step.evidence} evidence attached and ready for supervisor review.`
          : `Completion recorded, but required ${step.evidence} evidence is missing.`
      });
    }
  }

  events.push({
    time: "09:31",
    title: findings.length === 0 ? "AI review passed" : "AI review generated findings",
    detail:
      findings.length === 0
        ? "No blocking issues found after deterministic validation."
        : `${findings.length} issue(s) require human review before line release.`
  });

  return events;
}

function buildSqlSnippet(findingCount: number) {
  return `SELECT
  wr.request_id,
  step.sequence,
  step.title,
  result.status,
  result.evidence_url,
  COUNT(finding.id) AS finding_count
FROM work_runs wr
JOIN instruction_steps step
  ON step.instruction_id = wr.instruction_id
LEFT JOIN step_results result
  ON result.work_run_id = wr.id
 AND result.step_id = step.id
LEFT JOIN review_findings finding
  ON finding.work_run_id = wr.id
WHERE wr.request_id = 'req_20260606_1542_changeover'
GROUP BY wr.request_id, step.sequence, step.title, result.status, result.evidence_url
-- current demo finding count: ${findingCount}`;
}
