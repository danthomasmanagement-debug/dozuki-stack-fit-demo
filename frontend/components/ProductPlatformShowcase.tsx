"use client";

import { useMemo, useState } from "react";

type PlatformMode = "guide" | "publish" | "training" | "feedback";

const visualSteps = [
  {
    number: "01",
    title: "Scan the line QR code",
    media: "QR",
    detail: "Loads the approved Line 4 changeover guide on tablet or workstation."
  },
  {
    number: "02",
    title: "Verify label roll SKU",
    media: "PHOTO",
    detail: "Operator compares the label roll against the batch traveler and attaches proof."
  },
  {
    number: "03",
    title: "Record five-unit seal sample",
    media: "VIDEO",
    detail: "Embedded clip shows the correct sample pull before measurements are entered."
  },
  {
    number: "04",
    title: "Request supervisor release",
    media: "SIGNOFF",
    detail: "Release stays blocked until evidence, training, and review checks pass."
  }
];

const publishEvents = [
  ["Draft v3.3", "Quality adds a photo example for the label roll check."],
  ["AI assist", "Suggested wording removes ambiguity from the seal sample step."],
  ["QA approval", "Required evidence, version notes, and rollback path verified."],
  ["Published live", "Operators scanning the QR code now receive v3.3 instantly."]
];

const trainingRows = [
  ["Maya R.", "Changeover basics", "100%", "Passed"],
  ["Andre P.", "Seal inspection", "84%", "In progress"],
  ["Jordan K.", "Supervisor release", "92%", "Passed"]
];

const feedbackItems = [
  {
    label: "Missing photo",
    text: "Operator flagged that the approved guide did not show the alternate label roll packaging.",
    status: "Routed to Quality"
  },
  {
    label: "Tool mismatch",
    text: "Maintenance noted the torque wrench spec changed after a fixture update.",
    status: "Engineering review"
  },
  {
    label: "Training gap",
    text: "Three workers replayed the seal inspection clip before passing the course check.",
    status: "Course update queued"
  }
];

const modeCopy: Record<PlatformMode, { label: string; title: string; text: string }> = {
  guide: {
    label: "Visual Guides",
    title: "Paper manuals become step-by-step work instructions.",
    text: "Each step combines plain language, media, evidence requirements, and the exact action an operator needs on the floor."
  },
  publish: {
    label: "Live Updates",
    title: "Controlled publishing keeps every worker on the latest version.",
    text: "Quality can draft, review, approve, publish, and roll back a procedure without chasing binders or static PDFs."
  },
  training: {
    label: "Training",
    title: "Guides turn into lessons with trackable learning progress.",
    text: "Supervisors can see who completed the course, who needs follow-up, and which steps create confusion."
  },
  feedback: {
    label: "Feedback",
    title: "Workers can improve the process while the issue is fresh.",
    text: "Real-time feedback closes the loop between the people doing the work and the teams maintaining the procedure."
  }
};

export function ProductPlatformShowcase() {
  const [mode, setMode] = useState<PlatformMode>("guide");

  const modeIndex = useMemo(
    () => (["guide", "publish", "training", "feedback"] as PlatformMode[]).indexOf(mode) + 1,
    [mode]
  );

  return (
    <section aria-labelledby="platform-title" className="platform-section">
      <div className="platform-heading">
        <p className="eyebrow">Dozuki Product Alignment</p>
        <h2 id="platform-title">LineGuard turns old manuals into a live connected-worker system.</h2>
        <p>
          This is the part that makes the demo feel like a product a manufacturer
          could actually use: visual instructions, live updates, training, and
          worker feedback in one controlled workflow.
        </p>
      </div>

      <div className="platform-shell">
        <div className="platform-nav" role="tablist" aria-label="Product modules">
          {(["guide", "publish", "training", "feedback"] as PlatformMode[]).map((item) => (
            <button
              aria-selected={mode === item}
              className="platform-tab"
              key={item}
              onClick={() => setMode(item)}
              role="tab"
              type="button"
            >
              <span>0{(["guide", "publish", "training", "feedback"] as PlatformMode[]).indexOf(item) + 1}</span>
              {modeCopy[item].label}
            </button>
          ))}
        </div>

        <div className="platform-main">
          <div className="platform-copy">
            <span>Module 0{modeIndex}</span>
            <h3>{modeCopy[mode].title}</h3>
            <p>{modeCopy[mode].text}</p>
          </div>

          {mode === "guide" && <VisualGuidePreview />}
          {mode === "publish" && <PublishingPreview />}
          {mode === "training" && <TrainingPreview />}
          {mode === "feedback" && <FeedbackPreview />}
        </div>
      </div>
    </section>
  );
}

function VisualGuidePreview() {
  return (
    <div className="visual-guide-preview">
      <div className="device-frame" aria-label="Tablet guide preview">
        <div className="device-toolbar">
          <span>Line 4 Changeover</span>
          <strong>v3.3 Live</strong>
        </div>
        <div className="guide-step-list">
          {visualSteps.map((step) => (
            <article className="guide-step-card" key={step.number}>
              <div className="media-tile">
                <span>{step.media}</span>
              </div>
              <div>
                <small>{step.number}</small>
                <h4>{step.title}</h4>
                <p>{step.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="qr-card">
        <div className="fake-qr" aria-hidden="true">
          {Array.from({ length: 25 }).map((_, index) => (
            <span key={index} className={index % 2 === 0 || index === 7 || index === 18 ? "filled" : ""} />
          ))}
        </div>
        <strong>Scan to open latest guide</strong>
        <p>QR routing keeps workers off stale paper instructions.</p>
      </div>
    </div>
  );
}

function PublishingPreview() {
  return (
    <div className="publish-board">
      <div className="version-card">
        <span>Current production version</span>
        <strong>v3.2</strong>
        <p>Active on Line 4 tablets and QR stations.</p>
      </div>
      <div className="publish-timeline">
        {publishEvents.map(([label, detail]) => (
          <article className="publish-event" key={label}>
            <span>{label}</span>
            <p>{detail}</p>
          </article>
        ))}
      </div>
      <div className="version-card next">
        <span>Ready to publish</span>
        <strong>v3.3</strong>
        <p>Instant update with audit trail and rollback note.</p>
      </div>
    </div>
  );
}

function TrainingPreview() {
  return (
    <div className="training-board">
      <div className="course-card">
        <span>Course</span>
        <strong>Packaging Line 4 Changeover Certification</strong>
        <p>Lesson built from the same controlled guide operators use on the floor.</p>
      </div>
      <div className="training-table" role="table" aria-label="Training progress">
        <div role="row">
          <strong>Worker</strong>
          <strong>Lesson</strong>
          <strong>Progress</strong>
          <strong>Status</strong>
        </div>
        {trainingRows.map(([worker, lesson, progress, status]) => (
          <div role="row" key={worker}>
            <span>{worker}</span>
            <span>{lesson}</span>
            <span>{progress}</span>
            <em>{status}</em>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeedbackPreview() {
  return (
    <div className="feedback-board">
      {feedbackItems.map((item) => (
        <article className="feedback-card" key={item.label}>
          <span>{item.label}</span>
          <p>{item.text}</p>
          <strong>{item.status}</strong>
        </article>
      ))}
      <div className="feedback-loop">
        <span>Closed loop</span>
        <strong>Feedback to review to version update to training refresh</strong>
      </div>
    </div>
  );
}
