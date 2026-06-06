# Dozuki Stack Fit Demo

Portfolio project for the Dozuki Software Engineer II interview.

This is a small connected-worker system design and code sample. It shows how I would work across Dozuki's stack: a React/Next.js frontend, a NestJS/TypeScript API, relational data modeling, legacy PHP compatibility, AI-assisted review logic, and AWS-style debugging.

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
- **Data stack:** PostgreSQL-style schema for instructions, work runs, step results, review findings, and audit events.
- **AWS cloud debugging:** CloudWatch-style log correlation, S3 evidence URLs, RDS query tracing, request IDs, and incident notes.

## Why It Fits Dozuki

Dozuki's product lives where documentation, training, quality, safety, and software reliability overlap. This project intentionally combines:

- Work instructions and operator UX.
- Relational data and audit history.
- Human-in-the-loop AI review.
- Legacy system compatibility.
- Cloud troubleshooting habits.
- Clear documentation for engineers and non-engineers.

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

## Interview Positioning

The honest story is not "I have already worked in Dozuki's exact stack for years." The stronger story is:

> I have worked in production systems where data accuracy, user workflow, documentation, technical support, debugging, and AI-assisted delivery mattered. This demo shows how I am translating that background into Dozuki's stack: React/Next.js, NestJS, TypeScript, PHP, SQL, and AWS debugging.
