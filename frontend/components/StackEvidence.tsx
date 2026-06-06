const stackItems = [
  {
    label: "React / Next.js",
    proof: "Accessible operator dashboard with typed component state.",
    resumeConnection: "Browser/API troubleshooting and user-facing analytics workflows."
  },
  {
    label: "NestJS / TypeScript",
    proof: "Modular API shape with instruction, work-run, AI review, and cloud-debug services.",
    resumeConnection: "Production support, structured problem-solving, and AI-assisted upskilling."
  },
  {
    label: "PHP Legacy Bridge",
    proof: "Compatibility endpoint using a gateway class and parameterized SQL.",
    resumeConnection: "Careful work inside mature enterprise systems."
  },
  {
    label: "SQL / Audit Data",
    proof: "PostgreSQL schema for instructions, step results, review findings, and audit events.",
    resumeConnection: "Strong SQL, data validation, reporting, and quality investigation."
  },
  {
    label: "AWS Debugging",
    proof: "Request ID tracing across CloudWatch logs, RDS rows, and S3 evidence paths.",
    resumeConnection: "Cloud debugging context, root-cause thinking, and production support."
  },
  {
    label: "AI With Guardrails",
    proof: "Deterministic validation catches missing evidence before model recommendations.",
    resumeConnection: "Claude, ChatGPT, Copilot, and Codex workflows with human review."
  }
];

export function StackEvidence() {
  return (
    <section aria-labelledby="stack-proof-title" className="section stack-section">
      <div className="section-heading">
        <p className="eyebrow">Stack Fit</p>
        <h2 id="stack-proof-title">Built around Dozuki's actual engineering signals</h2>
        <p>
          This project intentionally mirrors the role: frontend, backend, SQL,
          legacy PHP, AWS debugging, AI workflows, documentation, and tests.
        </p>
      </div>

      <div className="stack-grid">
        {stackItems.map((item) => (
          <article className="stack-card" key={item.label}>
            <h3>{item.label}</h3>
            <p>{item.proof}</p>
            <small>{item.resumeConnection}</small>
          </article>
        ))}
      </div>
    </section>
  );
}

