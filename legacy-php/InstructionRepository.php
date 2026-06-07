<?php
declare(strict_types=1);

require_once __DIR__ . '/LegacyInstructionAdapter.php';

final class InstructionRepository
{
    public function __construct(
        private PDO $db,
        private LegacyInstructionAdapter $adapter,
    ) {
    }

    public function findModernInstruction(string $instructionId): ?ModernInstruction
    {
        $instruction = $this->fetchInstruction($instructionId);

        if ($instruction === null) {
            return null;
        }

        return $this->adapter->fromLegacyRows(
            instructionRow: $instruction,
            stepRows: $this->fetchSteps($instructionId),
        );
    }

    private function fetchInstruction(string $instructionId): ?array
    {
        $statement = $this->db->prepare(
            'SELECT id, title, version, status
             FROM instructions
             WHERE id = :instruction_id'
        );

        $statement->execute(['instruction_id' => $instructionId]);
        $row = $statement->fetch(PDO::FETCH_ASSOC);

        return $row === false ? null : $row;
    }

    private function fetchSteps(string $instructionId): array
    {
        $statement = $this->db->prepare(
            'SELECT id, sequence, title, body, required_evidence_type
             FROM instruction_steps
             WHERE instruction_id = :instruction_id
             ORDER BY sequence'
        );

        $statement->execute(['instruction_id' => $instructionId]);

        return $statement->fetchAll(PDO::FETCH_ASSOC);
    }
}

