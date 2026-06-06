-- Find a work run by request ID, then trace missing step evidence.
SELECT
  wr.id AS work_run_id,
  wr.request_id,
  wr.status AS work_run_status,
  ins.title AS instruction_title,
  step.sequence,
  step.title AS step_title,
  result.status AS step_status,
  result.evidence_url,
  result.note
FROM work_runs wr
JOIN instructions ins ON ins.id = wr.instruction_id
JOIN instruction_steps step ON step.instruction_id = ins.id
LEFT JOIN step_results result
  ON result.work_run_id = wr.id
 AND result.step_id = step.id
WHERE wr.request_id = 'req_20260606_1542_changeover'
ORDER BY step.sequence;

