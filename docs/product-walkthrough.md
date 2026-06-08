# Product Walkthrough

## Short Version

LineGuard is a fictional connected-worker product for Northstar Components. It guides an operator through a packaging-line changeover, requires evidence before release, flags missing proof through deterministic validation and AI-assisted review, and leaves an audit trail that can be traced through SQL and cloud logs.

## Full Walkthrough

Northstar Components starts with a common manufacturing problem: important changeover knowledge lives in static PDFs, binders, shift notes, and operator memory. A work instruction is not just text on a screen. It affects whether a process is followed correctly, whether quality evidence exists, and whether a supervisor can trust the result.

LineGuard turns that process into a guided workflow. The frontend shows an operator or supervisor what is complete and what still needs evidence. The backend is shaped like a NestJS modular API, with separate instruction, work-run, AI-review, and cloud-debugging services. The SQL schema models instructions, steps, work runs, evidence, findings, and audit events. A PHP endpoint shows how a legacy compatibility layer can continue serving older instruction data while newer services evolve.

The AWS-style debugging path starts with a request ID, traces CloudWatch logs, checks S3 evidence paths, and compares the result with the RDS/PostgreSQL row. That creates a practical investigation trail for the kind of evidence mismatch a support or engineering team might see in production.

## Stack Coverage

- React/Next.js for the operator and supervisor UI.
- NestJS/TypeScript shape for API boundaries and service logic.
- PHP for legacy instruction compatibility.
- SQL for instruction, evidence, finding, and audit records.
- AWS-style tracing through logs, storage, database state, and request IDs.
- AI review guardrails with deterministic checks and human approval.
