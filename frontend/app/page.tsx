import { CloudDebugTrace } from "../components/CloudDebugTrace";
import { ConnectedWorkerCommandCenter } from "../components/ConnectedWorkerCommandCenter";
import { ArchitectureDepthShowcase } from "../components/ArchitectureDepthShowcase";
import { StackEvidence } from "../components/StackEvidence";

export default function Page() {
  return (
    <main>
      <header className="hero">
        <div className="hero-grid">
          <div>
            <p className="eyebrow">Connected Worker Engineering Demo</p>
            <h1>Industrial AI workflow console for frontline quality.</h1>
            <p>
              A connected-worker workflow for controlled instructions, operator
              evidence capture, AI-assisted review, audit trails, legacy PHP
              migration, and AWS-style production debugging.
            </p>
            <div className="hero-actions" aria-label="Project proof points">
              <span>Interactive workflow</span>
              <span>Static Next.js deploy</span>
              <span>Backend tests pass</span>
              <span>GitHub Pages live</span>
            </div>
          </div>
          <div className="hero-product-card" aria-label="Demo summary">
            <div className="hero-product-top">
              <span>Line 4</span>
              <strong>Changeover Release</strong>
            </div>
            <div className="hero-progress">
              <span style={{ width: "72%" }} />
            </div>
            <div className="hero-product-list">
              <p>
                <strong>AI finding:</strong> seal sample evidence missing
              </p>
              <p>
                <strong>Trace:</strong> CloudWatch to S3 to RDS
              </p>
              <p>
                <strong>Impact:</strong> fewer defects, faster onboarding, cleaner audits
              </p>
            </div>
          </div>
        </div>
      </header>

      <ConnectedWorkerCommandCenter />
      <ArchitectureDepthShowcase />
      <StackEvidence />
      <CloudDebugTrace />
    </main>
  );
}
