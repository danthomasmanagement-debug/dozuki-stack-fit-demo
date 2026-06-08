# Presentation Outline

## Slide 1: Product Scenario

- Northstar Components needs safer packaging-line changeovers.
- Current state: static PDFs, tribal knowledge, inconsistent evidence.
- LineGuard turns the process into guided, auditable execution.

## Slide 2: Workflow

- Operator opens a controlled instruction.
- Required evidence is captured at the step level.
- AI-assisted review flags risk after deterministic checks.
- Supervisor sees release status, findings, audit trail, and trace context.

## Slide 3: Stack Fit

- React/Next.js: operator-facing UI and workflow state.
- NestJS/TypeScript: modular backend services and APIs.
- PHP: legacy compatibility and careful migration thinking.
- SQL: instruction, run, evidence, finding, and audit data.
- AWS: CloudWatch logs, RDS debugging, S3 evidence, request correlation.

## Slide 4: Product Interface

- LineGuard changeover console.
- Operator completes required steps.
- Backend validates missing evidence.
- AI review assists, but deterministic checks stay in control.
- Supervisor sees findings, audit events, SQL traceability, and debugging context.

## Slide 4B: Migration And Audit Depth

- Legacy PHP adapter normalizes existing database rows.
- NestJS adapter consumes the same instruction shape.
- SQL inspector shows how evidence and findings are traceable.
- Audit timeline makes every user/system action reviewable.

## Slide 5: Why The Product Design Matters

- Manufacturing software needs clarity, traceability, and trust.
- AI should support humans, not hide unclear logic.
- Audit history matters for quality, safety, and continuous improvement.

## Slide 6: Engineering Contribution Areas

- Data/API debugging tickets.
- Documentation and runbook improvements.
- UI polish and accessibility fixes.
- Test coverage around validation and legacy migration logic.
- AI workflow experiments with clear guardrails.

## Slide 7: 30/60/90 Day Plan

- 30 days: learn product, codebase, support flows, ship small fixes.
- 60 days: own scoped tickets across UI/API/data layers.
- 90 days: contribute to AI-assisted features, quality workflows, and system documentation.

## Slide 8: Closing

LineGuard shows a practical, reviewable path from manufacturing workflow to product UI, API boundaries, relational data, legacy compatibility, cloud debugging, and AI guardrails.
