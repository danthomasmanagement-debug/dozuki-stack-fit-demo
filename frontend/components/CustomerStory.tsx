const outcomes = [
  {
    label: "Before",
    title: "Paper manual plus form fill-out",
    body: "Operators used a printed instruction binder and a handwritten release form. Updates were slow, evidence was inconsistent, and supervisors had to trust that the right version was followed."
  },
  {
    label: "LineGuard",
    title: "Dozuki-ready digital workflow",
    body: "The old manual becomes a visual guide with photos, video prompts, required evidence, live version control, training progress, feedback, and supervisor release gates."
  },
  {
    label: "After",
    title: "Audit-ready learning system",
    body: "Quality, training, engineering, and operations can trace every run through guide versions, course completions, feedback items, SQL records, cloud logs, and legacy system boundaries."
  }
];

const releaseChecks = [
  "Latest approved guide opened from QR scan",
  "Operator training status verified",
  "Required seal measurement captured",
  "Label roll SKU photo attached",
  "Worker feedback routed to owner",
  "Supervisor release signoff recorded",
  "Request ID linked to logs and database rows"
];

export function CustomerStory() {
  return (
    <section aria-labelledby="story-title" className="story-section">
      <div className="story-grid">
        <div>
          <p className="eyebrow">Product Scenario</p>
          <h2 id="story-title">An old instruction manual becomes a controlled digital workflow.</h2>
          <p>
            Northstar Components starts with a common manufacturing problem:
            a paper binder, a static PDF, and a form workers fill out after the
            job is done. LineGuard turns that into a live instruction system
            with visual steps, training, feedback, evidence, and release control.
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
