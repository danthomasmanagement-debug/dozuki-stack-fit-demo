# Dozuki Stack Fit Demo

Connected-worker engineering demo for manufacturing quality workflows.

This is a small connected-worker system design and code sample covering a React/Next.js frontend, a NestJS/TypeScript API, relational data modeling, legacy PHP compatibility, AI-assisted review logic, and AWS-style debugging.

## Live Demo

The frontend is configured for static export and GitHub Pages deployment. Publishing notes are in `docs/github-publish.md`.

Suggested repo name:

```text
dozuki-stack-fit-demo
```

## Product Idea

Manufacturing teams need digital work instructions that are clear, auditable, and safe to execute. This demo models a simplified workflow:

1. An operator opens a work instruction.
2. The operator completes required steps and attaches evidence.
3. A backend service stores the run, validates required data, and produces an AI-assisted review.
4. A supervisor sees findings, missing evidence, and cloud-debugging context.
5. Legacy PHP endpoints can still read instruction data during migration.

## What This Demonstrates

- **Frontend frameworks:** React component structure, typed props, accessible status UI, API client separation.
- **OOP and modern development:** Service classes, DTOs, dependency injection, typed domain models, deterministic validation before AI output.
- **TypeScript and NestJS:** Controller/service/module style, route boundaries, testable backend logic.
- **PHP:** Legacy-style endpoint and gateway pattern with parameterized SQL.
- **Legacy migration:** PHP repository/adapter classes plus a TypeScript adapter that normalize legacy rows into modern models.
- **Data stack:** PostgreSQL-style schema for instructions, work runs, step results, review findings, and audit events.
- **AWS cloud debugging:** CloudWatch-style log correlation, S3 evidence URLs, RDS query tracing, request IDs, and incident notes.
- **Auditability:** Interactive audit timeline, SQL inspector, API contract panel, quality gates, and AI guardrail flow.

## Why It Fits Dozuki

Dozuki's product lives where documentation, training, quality, safety, and software reliability overlap. This project intentionally combines:

- Work instructions and operator UX.
- Relational data and audit history.
- Human-in-the-loop AI review.
- Legacy system compatibility.
- Cloud troubleshooting habits.
- Clear documentation for engineers and non-engineers.
- A visible product workflow that connects operator behavior to audit events, SQL, API contracts, and test gates.

The source notes in `docs/sources.md` map this project to Dozuki's public job posting and product pages.

## How I Would Build This In Production

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
