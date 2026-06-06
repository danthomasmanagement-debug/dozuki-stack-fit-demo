# Talking Script

## 30-Second Version

I built a small connected-worker demo to show how I am mapping my background to Dozuki's stack. It includes a React/Next.js operator UI, a NestJS/TypeScript API shape, SQL schema design, a legacy PHP compatibility endpoint, and AWS-style debugging notes. The goal is to show how I think about real production workflows: data accuracy, clear UX, auditability, and AI as an assistive layer with guardrails.

## 90-Second Version

Dozuki's product is interesting to me because the software is tied to real operational execution. A work instruction is not just text on a screen. It affects whether a process is followed correctly, whether quality evidence exists, and whether a supervisor can trust the result.

So I built this demo around a line-changeover workflow. The frontend shows an operator or supervisor what is complete and what still needs evidence. The backend is shaped like a NestJS modular API, with separate instruction, work-run, AI-review, and cloud-debugging services. The SQL schema models instructions, steps, work runs, evidence, findings, and audit events. I also included a PHP endpoint to show how I would think about maintaining legacy compatibility while newer services evolve.

The AWS part is based on debugging habits: use a request ID, trace CloudWatch logs, check S3 evidence paths, and compare that with the RDS/Postgres row. That is the kind of production investigation work I have done before, and it is one of the ways I believe I could contribute early while continuing to ramp deeper into React, NestJS, TypeScript, and PHP.

## How To Answer A Stack Gap Question

If asked whether I have professional experience in the exact Dozuki stack:

> Not in that exact combination end to end. My strongest professional experience is SQL, production troubleshooting, data quality, API/browser debugging, documentation, and AI-assisted technical work. I built this demo to make the stack ramp concrete: React/Next.js for the UI, NestJS and TypeScript for the API, PHP for legacy compatibility, SQL for the data model, and AWS debugging for the production workflow. I am confident I can become useful quickly because I know how to trace systems, validate assumptions, and document what I learn.

