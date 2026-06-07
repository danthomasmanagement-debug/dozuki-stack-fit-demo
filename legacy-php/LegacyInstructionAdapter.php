<?php
declare(strict_types=1);

final readonly class ModernInstructionStep
{
    public function __construct(
        public string $id,
        public int $sequence,
        public string $title,
        public string $body,
        public string $requiredEvidenceType,
    ) {
    }
}

final readonly class ModernInstruction
{
    /**
     * @param ModernInstructionStep[] $steps
     */
    public function __construct(
        public string $id,
        public string $title,
        public string $version,
        public string $status,
        public array $steps,
    ) {
    }

    public function toApiPayload(): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'version' => $this->version,
            'status' => $this->status,
            'steps' => array_map(
                static fn (ModernInstructionStep $step): array => [
                    'id' => $step->id,
                    'sequence' => $step->sequence,
                    'title' => $step->title,
                    'body' => $step->body,
                    'requiredEvidenceType' => $step->requiredEvidenceType,
                ],
                $this->steps
            ),
        ];
    }
}

final class LegacyInstructionAdapter
{
    public function fromLegacyRows(array $instructionRow, array $stepRows): ModernInstruction
    {
        return new ModernInstruction(
            id: (string) $instructionRow['id'],
            title: (string) $instructionRow['title'],
            version: (string) $instructionRow['version'],
            status: (string) $instructionRow['status'],
            steps: array_map(
                static fn (array $row): ModernInstructionStep => new ModernInstructionStep(
                    id: (string) $row['id'],
                    sequence: (int) $row['sequence'],
                    title: (string) $row['title'],
                    body: (string) $row['body'],
                    requiredEvidenceType: (string) $row['required_evidence_type'],
                ),
                $stepRows
            ),
        );
    }
}

