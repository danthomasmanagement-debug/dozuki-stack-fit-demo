import { InstructionDashboard } from "../components/InstructionDashboard";
import { CloudDebugTrace } from "../components/CloudDebugTrace";
import { StackEvidence } from "../components/StackEvidence";
import { getInstructionSummary } from "../lib/demo-data";

export default async function Page() {
  const instruction = await getInstructionSummary("line-changeover-101");

  return (
    <main>
      <header className="hero">
        <p className="eyebrow">Dozuki Software Engineer II Portfolio Demo</p>
        <h1>Connected-worker quality workflow with AI review</h1>
        <p>
          A focused demo showing how I would work across React/Next.js,
          NestJS/TypeScript, SQL, legacy PHP, AWS debugging, and human-reviewed
          AI workflows for manufacturing operations.
        </p>
        <div className="hero-actions" aria-label="Project proof points">
          <span>Static Next.js build passes</span>
          <span>API TypeScript build passes</span>
          <span>Backend tests pass</span>
        </div>
      </header>

      <InstructionDashboard instruction={instruction} />
      <StackEvidence />
      <CloudDebugTrace />
    </main>
  );
}
