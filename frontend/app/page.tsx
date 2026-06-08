import { CloudDebugTrace } from "../components/CloudDebugTrace";
import { ConnectedWorkerCommandCenter } from "../components/ConnectedWorkerCommandCenter";
import { CustomerStory } from "../components/CustomerStory";
import { ArchitectureDepthShowcase } from "../components/ArchitectureDepthShowcase";
import { StackEvidence } from "../components/StackEvidence";

export default function Page() {
  return (
    <main>
      <header className="hero">
        <div className="hero-grid">
          <div>
            <p className="eyebrow">Northstar Components Case Study</p>
            <h1>LineGuard keeps changeovers from shipping defects.</h1>
            <p>
              A fictional connected-worker product for a manufacturing team
              replacing tribal knowledge and static PDFs with guided work
              instructions, evidence capture, AI-assisted review, audit trails,
              and production debugging.
            </p>
            <div className="hero-actions" aria-label="Project proof points">
              <span>Operator workflow</span>
              <span>Supervisor release gate</span>
              <span>SQL audit trail</span>
              <span>Cloud trace</span>
            </div>
          </div>
          <div className="hero-product-card" aria-label="LineGuard summary">
            <div className="hero-product-top">
              <span>Northstar</span>
              <strong>Changeover Release</strong>
            </div>
            <div className="hero-progress">
              <span style={{ width: "72%" }} />
            </div>
            <div className="hero-product-list">
              <p>
                <strong>Product:</strong> LineGuard
              </p>
              <p>
                <strong>Current risk:</strong> seal sample evidence missing
              </p>
              <p>
                <strong>Trace:</strong> CloudWatch to S3 to RDS
              </p>
            </div>
          </div>
        </div>
      </header>

      <CustomerStory />
      <ConnectedWorkerCommandCenter />
      <ArchitectureDepthShowcase />
      <StackEvidence />
      <CloudDebugTrace />
    </main>
  );
}
