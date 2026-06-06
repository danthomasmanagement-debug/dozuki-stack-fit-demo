# Architecture

```mermaid
flowchart LR
  operator["Operator uses Next.js / React UI"]
  api["NestJS modular API"]
  db["PostgreSQL / RDS"]
  s3["S3 evidence storage"]
  ai["AI review service"]
  php["Legacy PHP endpoint"]
  supervisor["Supervisor review"]
  logs["CloudWatch logs"]

  operator -->|"Complete steps / upload evidence"| api
  api -->|"Persist work run"| db
  api -->|"Store photo evidence"| s3
  api -->|"Request structured review"| ai
  ai -->|"Findings + recommended actions"| api
  api --> supervisor
  php -->|"Read instruction summaries during migration"| db
  api --> logs
```

## Design Choices

- Keep deterministic validation separate from AI recommendations.
- Use request IDs across UI, API, logs, database rows, and evidence paths.
- Treat the PHP layer as a compatibility bridge, not a dumping ground for new logic.
- Use relational tables for auditability because manufacturing quality workflows need traceable state.
- Keep frontend components typed and accessible so the operator workflow is clear.

