# Product Walkthrough

## Short Version

LineGuard is a fictional connected-worker product for Northstar Components. It shows how an old paper instruction manual and form fill-out process can become a Dozuki-ready digital workflow: visual guides, live publishing, training progress, worker feedback, evidence capture, supervisor release gates, and audit records that can be traced through SQL and cloud logs.

## Full Walkthrough

Northstar Components starts with a common manufacturing problem: important changeover knowledge lives in static PDFs, binders, shift notes, and operator memory. Workers also fill out a release form after the work is done, which makes evidence inconsistent and hard to audit. A work instruction is not just text on a screen. It affects whether a process is followed correctly, whether quality evidence exists, whether workers are trained, and whether a supervisor can trust the result.

LineGuard turns that process into a guided workflow. The product section shows four Dozuki-aligned modules:

- Visual guides: step-by-step instructions with media, QR access, and required evidence.
- Live updates: draft, AI assist, QA approval, publish, and rollback-ready version control.
- Training: course progress built from the same controlled guide workers use on the floor.
- Feedback: worker-submitted issues routed to quality, engineering, or training owners.

The frontend also shows an operator or supervisor what is complete and what still needs evidence. The backend is shaped like a NestJS modular API, with separate instruction, work-run, AI-review, and cloud-debugging services. The SQL schema models instructions, steps, work runs, evidence, findings, and audit events. A PHP endpoint shows how a legacy compatibility layer can continue serving older instruction data while newer services evolve.

The AWS-style debugging path starts with a request ID, traces CloudWatch logs, checks S3 evidence paths, and compares the result with the RDS/PostgreSQL row. That creates a practical investigation trail for the kind of evidence mismatch a support or engineering team might see in production.

## Stack Coverage

- React/Next.js for the operator and supervisor UI.
- Product UI for manual-to-digital guide conversion, live publishing, training, and feedback.
- NestJS/TypeScript shape for API boundaries and service logic.
- PHP for legacy instruction compatibility.
- SQL for instruction, evidence, finding, and audit records.
- AWS-style tracing through logs, storage, database state, and request IDs.
- AI review guardrails with deterministic checks and human approval.
