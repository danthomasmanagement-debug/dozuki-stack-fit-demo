# Engineering Notes

## Project Summary

LineGuard is a fictional connected-worker workflow for Northstar Components. It shows how a manufacturing quality process can move from static procedures into guided execution, evidence capture, AI-assisted review, audit events, and traceable production debugging.

The project includes:

- React/Next.js frontend for an operator/supervisor workflow.
- NestJS/TypeScript API structure with modules, services, controllers, and DTO-style inputs.
- PostgreSQL schema for instructions, step results, review findings, and audit events.
- Legacy PHP compatibility endpoint for reading instruction summaries.
- PHP migration adapter classes that normalize legacy rows into modern API payloads.
- A NestJS-side adapter test showing the same migration boundary in TypeScript.
- AWS debugging flow using request IDs, CloudWatch, RDS/PostgreSQL, and S3 evidence paths.
- Tests for deterministic review logic and legacy-to-modern data normalization.
- Interactive audit timeline, SQL inspector, API contract, AI guardrail, and quality gate panels.

## Design Position

The product story is intentionally narrow: one packaging-line changeover, one work run, one missing evidence issue, and one traceable path from the browser to the database. That keeps the workflow understandable while still showing frontend, backend, data, cloud, legacy, and AI concerns.

## Engineering Strengths Shown

- **SQL/data quality:** evidence and findings are modeled as inspectable relational records.
- **Production debugging:** the same request ID appears across UI, API, cloud logs, S3 evidence, and RDS/PostgreSQL rows.
- **Documentation:** architecture notes, debugging notes, and publishing notes live with the code.
- **AI workflow discipline:** AI assists review after deterministic validation, not before it.
- **Remote collaboration:** the project is small enough to review asynchronously and clear enough for product, QA, and engineering readers.

## Early Contribution Areas

### First 30 Days

- Learn Dozuki's product flows, codebase structure, deployment process, and support patterns.
- Pick up small UI, SQL, documentation, test, and debugging tickets.
- Build a mental map of legacy PHP vs modern NestJS responsibilities.

### First 60 Days

- Own scoped tickets across UI/API/data boundaries.
- Add or improve test coverage around validation-heavy workflows.
- Help document system behavior and support runbooks.

### First 90 Days

- Contribute meaningfully to AI-assisted features, quality workflows, or migration work.
- Become reliable on tickets that require tracing issues across frontend, backend, data, and cloud logs.

## Product And Engineering Questions

- How is work divided between the PHP monolith, NestJS modules, and microservices today?
- Where is the team using AI most actively: authoring, review, search, training, or support?
- What kinds of customer-facing issues are most expensive or painful right now?
- How do engineers balance new feature work with legacy modernization?
- What does success look like for a Software Engineer II in the first 90 days?
