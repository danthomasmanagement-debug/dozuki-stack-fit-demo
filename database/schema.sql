CREATE TABLE instructions (
  id UUID PRIMARY KEY,
  title TEXT NOT NULL,
  version TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('draft', 'approved', 'archived')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE instruction_steps (
  id UUID PRIMARY KEY,
  instruction_id UUID NOT NULL REFERENCES instructions(id),
  sequence INTEGER NOT NULL,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  required_evidence_type TEXT NOT NULL CHECK (
    required_evidence_type IN ('photo', 'measurement', 'initials')
  ),
  UNIQUE (instruction_id, sequence)
);

CREATE TABLE work_runs (
  id UUID PRIMARY KEY,
  instruction_id UUID NOT NULL REFERENCES instructions(id),
  operator_name TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('in_progress', 'needs_review', 'approved', 'rejected')),
  request_id TEXT NOT NULL,
  started_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  completed_at TIMESTAMPTZ
);

CREATE INDEX idx_work_runs_request_id ON work_runs(request_id);
CREATE INDEX idx_work_runs_instruction_id ON work_runs(instruction_id);

CREATE TABLE step_results (
  id UUID PRIMARY KEY,
  work_run_id UUID NOT NULL REFERENCES work_runs(id),
  step_id UUID NOT NULL REFERENCES instruction_steps(id),
  status TEXT NOT NULL CHECK (status IN ('complete', 'missing_evidence', 'blocked')),
  evidence_url TEXT,
  note TEXT,
  completed_at TIMESTAMPTZ,
  UNIQUE (work_run_id, step_id)
);

CREATE TABLE review_findings (
  id UUID PRIMARY KEY,
  work_run_id UUID NOT NULL REFERENCES work_runs(id),
  severity TEXT NOT NULL CHECK (severity IN ('low', 'medium', 'high')),
  category TEXT NOT NULL,
  message TEXT NOT NULL,
  recommended_action TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE audit_events (
  id UUID PRIMARY KEY,
  work_run_id UUID REFERENCES work_runs(id),
  actor TEXT NOT NULL,
  event_type TEXT NOT NULL,
  payload_json JSONB NOT NULL,
  request_id TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_audit_events_request_id ON audit_events(request_id);

