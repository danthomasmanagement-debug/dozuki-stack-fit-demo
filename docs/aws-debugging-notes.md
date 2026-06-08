# AWS Cloud Debugging Notes

LineGuard models a practical cloud-debugging path for a common connected-worker issue: required evidence exists somewhere in the system, but the supervisor view still reports it as missing.

## Dozuki-Relevant Debugging Flow

Scenario: an operator uploads required photo evidence, but the supervisor review says evidence is missing.

1. Start with the application request ID from the UI or API response.
2. Search CloudWatch logs by request ID.
3. Confirm whether the upload endpoint returned success.
4. Check S3 object path and metadata for the evidence upload.
5. Query RDS/PostgreSQL for the matching `step_results` row.
6. Compare the S3 object key to `step_results.evidence_url`.
7. If S3 has the object but SQL is missing the reference, focus on API persistence logic.
8. If SQL has the reference but UI does not show it, focus on frontend state or API response mapping.

## AWS Services In This Product Story

- **CloudWatch:** request logs, error traces, correlation IDs.
- **RDS/PostgreSQL:** instruction and work-run data.
- **S3:** operator evidence images and attachments.
- **IAM:** least-privilege access to evidence objects.
- **Lambda or ECS:** possible deployment target for review services.
- **CloudFormation/Terraform:** infrastructure-as-code direction for production.

## Debugging Principle

Avoid guessing. Follow the request ID through logs, storage, database state, API responses, and the user-facing view until the exact mismatch is visible.
