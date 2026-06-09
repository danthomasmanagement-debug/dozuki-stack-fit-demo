import { CloudDebugTrace } from "../components/CloudDebugTrace";
import { ConnectedWorkerCommandCenter } from "../components/ConnectedWorkerCommandCenter";
import { CustomerStory } from "../components/CustomerStory";
import { ArchitectureDepthShowcase } from "../components/ArchitectureDepthShowcase";
import { ProductPlatformShowcase } from "../components/ProductPlatformShowcase";
import { StackEvidence } from "../components/StackEvidence";

export default function Page() {
  return (
    <main>
      <header className="hero">
        <div className="hero-grid">
          <div>
            <p className="eyebrow">Northstar Components Case Study</p>
            <h1>LineGuard turns old manuals into live work instructions.</h1>
            <p>
              A fictional Dozuki-ready workflow for a manufacturing team
              replacing paper manuals, static PDFs, and form fill-out with
              visual step-by-step guides, live publishing, training progress,
              worker feedback, audit trails, and production debugging.
            </p>
            <div className="hero-actions" aria-label="Project proof points">
              <span>Visual guide builder</span>
              <span>QR / live updates</span>
              <span>Training tracker</span>
              <span>Feedback loop</span>
              <span>SQL audit trail</span>
            </div>
          </div>
          <div className="hero-product-card" aria-label="LineGuard summary">
            <div className="hero-product-top">
              <span>Northstar</span>
              <strong>Manual Modernization</strong>
            </div>
            <div className="hero-progress">
              <span style={{ width: "86%" }} />
            </div>
            <div className="hero-product-list">
              <p>
                <strong>Product:</strong> LineGuard
              </p>
              <p>
                <strong>Before:</strong> paper manual plus handwritten release form
              </p>
              <p>
                <strong>After:</strong> digital guide, training, feedback, audit
              </p>
              <p>
                <strong>Trace:</strong> QR scan to API to S3/RDS evidence
              </p>
            </div>
          </div>
        </div>
      </header>

      <CustomerStory />
      <ProductPlatformShowcase />
      <ConnectedWorkerCommandCenter />
      <ArchitectureDepthShowcase />
      <StackEvidence />
      <CloudDebugTrace />
    </main>
  );
}
