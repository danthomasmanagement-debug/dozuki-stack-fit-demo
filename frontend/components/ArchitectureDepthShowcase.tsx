const depthCards = [
  {
    kicker: "Audit Timeline",
    title: "Operator actions become reviewable system events.",
    body: "The workflow traces instruction approval, work-run start, evidence capture, AI review findings, and supervisor release as audit events."
  },
  {
    kicker: "SQL Inspector",
    title: "Evidence and findings map back to relational tables.",
    body: "The work-run view is grounded in instructions, instruction_steps, step_results, review_findings, and audit_events."
  },
  {
    kicker: "Legacy PHP Migration",
    title: "PHP rows are normalized into modern TypeScript models.",
    body: "The repo includes PHP repository/adapter classes and a NestJS adapter test for legacy-to-modern migration boundaries."
  },
  {
    kicker: "AI Guardrails",
    title: "AI assists review after deterministic checks run first.",
    body: "The flow separates raw operator data, validation, structured AI findings, and human approval so model output does not silently approve work."
  },
  {
    kicker: "Quality Gates",
    title: "Verification is built into the workflow.",
    body: "Validation tests, API unit tests, TypeScript build, Next.js static export, and PHP syntax checks all pass."
  }
];

export function ArchitectureDepthShowcase() {
  return (
    <section aria-labelledby="depth-title" className="depth-section">
      <div className="section-heading">
        <p className="eyebrow">Engineering Depth</p>
        <h2 id="depth-title">Built for maintainability, traceability, and controlled migration.</h2>
        <p>
          The workflow connects frontline actions to audit events, relational
          data, API contracts, legacy migration boundaries, AI review guardrails,
          and automated quality checks.
        </p>
      </div>
      <div className="depth-grid">
        {depthCards.map((card) => (
          <article className="depth-card" key={card.kicker}>
            <span>{card.kicker}</span>
            <h3>{card.title}</h3>
            <p>{card.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
