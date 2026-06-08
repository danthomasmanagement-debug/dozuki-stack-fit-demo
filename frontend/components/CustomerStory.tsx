const outcomes = [
  {
    label: "Before",
    title: "Static PDFs and tribal knowledge",
    body: "Changeover checks lived across printed binders, operator memory, and loose shift notes. Supervisors could see that work was marked complete, but not always why it was safe to release."
  },
  {
    label: "LineGuard",
    title: "Guided execution with evidence gates",
    body: "Operators follow versioned instructions, attach required proof, and get clear release criteria. The system blocks quiet approvals when evidence is missing."
  },
  {
    label: "After",
    title: "Audit-ready quality records",
    body: "Quality, engineering, and operations can trace every run through work steps, review findings, SQL records, cloud logs, and legacy system boundaries."
  }
];

const releaseChecks = [
  "Required seal measurement captured",
  "Label roll SKU photo attached",
  "Supervisor release signoff recorded",
  "AI review findings resolved",
  "Request ID linked to logs and database rows"
];

export function CustomerStory() {
  return (
    <section aria-labelledby="story-title" className="story-section">
      <div className="story-grid">
        <div>
          <p className="eyebrow">Product Scenario</p>
          <h2 id="story-title">A fictional customer with a real manufacturing problem.</h2>
          <p>
            Northstar Components runs a packaging line where small changeover
            mistakes can create expensive quality escapes. LineGuard gives the
            team one place to author the procedure, guide the operator, review
            risk, and preserve evidence for audits.
          </p>
        </div>
        <div className="release-checklist" aria-label="Release checklist">
          <span>Release Gate</span>
          {releaseChecks.map((check, index) => (
            <div className="release-check" key={check}>
              <strong>{index + 1}</strong>
              <p>{check}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="outcome-grid">
        {outcomes.map((item) => (
          <article className="outcome-card" key={item.label}>
            <span>{item.label}</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
