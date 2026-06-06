"use client";

import { useMemo, useState } from "react";
import type { InstructionSummary, StepStatus } from "../lib/types";

type Props = {
  instruction: InstructionSummary;
};

export function InstructionDashboard({ instruction }: Props) {
  const [steps, setSteps] = useState(instruction.steps);

  const readiness = useMemo(() => calculateReadiness(steps), [steps]);

  function toggleStep(stepId: string) {
    setSteps((current) =>
      current.map((step) =>
        step.id === stepId
          ? {
              ...step,
              status: step.status === "complete" ? "needs_evidence" : "complete"
            }
          : step
      )
    );
  }

  return (
    <section aria-labelledby="instruction-title" className="dashboard">
      <div className="panel">
        <p className="eyebrow">Instruction</p>
        <h2 id="instruction-title">{instruction.title}</h2>
        <p>{instruction.description}</p>
        <dl className="meta-grid">
          <div>
            <dt>Version</dt>
            <dd>{instruction.version}</dd>
          </div>
          <div>
            <dt>Line</dt>
            <dd>{instruction.lineName}</dd>
          </div>
          <div>
            <dt>Readiness</dt>
            <dd>{readiness.percent}%</dd>
          </div>
        </dl>
      </div>

      <div className="panel">
        <h3>Required Steps</h3>
        <ol className="step-list">
          {steps.map((step) => (
            <li key={step.id}>
              <button
                aria-pressed={step.status === "complete"}
                className="step-button"
                onClick={() => toggleStep(step.id)}
                type="button"
              >
                <span>{step.title}</span>
                <StatusPill status={step.status} />
              </button>
              <p>{step.requiredEvidence}</p>
            </li>
          ))}
        </ol>
      </div>

      <aside aria-labelledby="review-title" className="panel review-panel">
        <h3 id="review-title">Supervisor Review</h3>
        <p>
          This UI keeps AI review explainable by showing deterministic readiness
          checks before any model-generated recommendation is accepted.
        </p>
        <ul>
          <li>{readiness.completeCount} completed steps</li>
          <li>{readiness.blockedCount} steps still need evidence</li>
          <li>Request ID: {instruction.latestRequestId}</li>
        </ul>
      </aside>
    </section>
  );
}

function StatusPill({ status }: { status: StepStatus }) {
  const label =
    status === "complete"
      ? "Complete"
      : status === "blocked"
        ? "Blocked"
        : "Needs evidence";

  return <span className={`status-pill ${status}`}>{label}</span>;
}

function calculateReadiness(steps: InstructionSummary["steps"]) {
  const completeCount = steps.filter((step) => step.status === "complete").length;
  const blockedCount = steps.length - completeCount;
  const percent = Math.round((completeCount / steps.length) * 100);

  return {
    completeCount,
    blockedCount,
    percent
  };
}

