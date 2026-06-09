# LineGuard Manual-to-Digital Work Instruction Demo

Fictional connected-worker product scenario showing how an old paper instruction manual and form fill-out process can become a Dozuki-ready digital workflow.

LineGuard is a fictional product used by Northstar Components, a fictional manufacturing customer. The demo starts with a familiar manufacturing problem: printed binders, static PDFs, handwritten release forms, tribal knowledge, and inconsistent evidence. It turns that into visual step-by-step guides, live version publishing, training progress, worker feedback, supervisor release gates, audit trails, and production debugging.

The implementation also maps to Dozuki's engineering stack: React/Next.js frontend, NestJS/TypeScript API shape, relational data modeling, legacy PHP compatibility, AI-assisted review logic, and AWS-style debugging.

## Live Demo

View the deployed workflow: https://danthomasmanagement-debug.github.io/dozuki-stack-fit-demo/

The frontend is configured for static export and GitHub Pages deployment. Publishing notes are in `docs/github-publish.md`.

## Product Scenario

Northstar Components runs a packaging line where changeover mistakes can create quality escapes. The old process is a paper manual plus a release form workers fill out after the job. LineGuard turns that manual into a live digital instruction system.

1. A quality lead converts the old manual into visual steps with photos, video prompts, required tools, and safety notes.
2. A new procedure version moves from draft to QA approval to live publish.
3. Workers open the latest guide by device or QR code instead of using stale paper.
4. Training progress is tracked from the same controlled guide.
5. Operators submit feedback when a step is confusing, missing media, or mismatched to the floor.
6. A supervisor sees findings, missing evidence, training status, and cloud-debugging context before release.
7. Legacy PHP endpoints can still read instruction data during migration.

## What This Demonstrates

- **Frontend frameworks:** React component structure, typed props, accessible status UI, API client separation.
- **Dozuki-style product workflows:** Visual guide builder, QR/live publishing, training progress, worker feedback, and supervisor release gates.
- **OOP and modern development:** Service classes, DTOs, dependency injection, typed domain models, deterministic validation before AI output.
- **TypeScript and NestJS:** Controller/service/module style, route boundaries, testable backend logic.
- **PHP:** Legacy-style endpoint and gateway pattern with parameterized SQL.
- **Legacy migration:** PHP repository/adapter classes plus a TypeScript adapter that normalize legacy rows into modern models.
- **Data stack:** PostgreSQL-style schema for instructions, work runs, step results, review findings, and audit events.
- **AWS cloud debugging:** CloudWatch-style log correlation, S3 evidence URLs, RDS query tracing, request IDs, and incident notes.
- **Auditability:** Interactive audit timeline, SQL inspector, API contract panel, quality gates, and AI guardrail flow.

## Why It Fits Dozuki

Dozuki's product lives where documentation, training, quality, safety, and software reliability overlap. This project intentionally centers the story on turning an old manual/form process into a modern digital workflow:

- Visual work instructions and operator UX.
- Live guide updates through versioned publishing.
- Training courses and worker progress.
- Real-time worker feedback routed to the right owner.
- Relational data and audit history.
- Human-in-the-loop AI review.
- Legacy system compatibility.
- Cloud troubleshooting habits.
- Clear documentation for engineers and non-engineers.
- A visible product workflow that connects operator behavior to audit events, SQL, API contracts, and test gates.

The source notes in `docs/sources.md` map this project to Dozuki's public job posting and product pages.

## Implementation Shape

- **Frontend:** Next.js, React, TypeScript.
- **Backend:** NestJS modular monolith with service-layer boundaries.
- **Database:** PostgreSQL, Prisma or TypeORM, migration-backed schema changes.
- **Legacy bridge:** PHP adapter endpoints while older routes are migrated.
- **Cloud:** AWS RDS, S3, CloudWatch, IAM-scoped evidence access, CI checks.
- **Testing:** Unit tests for validation, integration tests for API routes, component tests for the operator workflow.

## Local Verification Available Here

This repo includes a dependency-free validation engine in `validation/` so the core review logic can be tested with Node even without npm installed.

```powershell
node validation/run-review-tests.mjs
```

Full verification:

```powershell
npm run test:validation
npm --workspace api test
npm --workspace api run build
$env:NEXT_PUBLIC_BASE_PATH='/dozuki-stack-fit-demo'; npm --workspace frontend run build
php -l legacy-php/instruction_summary.php
```

If Node's built-in test runner is available in the environment, this also works:

```powershell
node --test validation/review-engine.test.mjs
```

## Audit Note

`npm audit --audit-level=high` currently passes with no high or critical findings. npm reports two moderate findings through Next/PostCSS; the available forced fix would introduce a breaking downgrade, so this project keeps the current Next.js version and documents the result.
