<?php
declare(strict_types=1);

// Legacy compatibility endpoint:
// Keeps an older PHP surface available while instruction storage is migrated
// behind safer SQL access and newer API services.

final class InstructionSummaryGateway
{
    public function __construct(private PDO $db)
    {
    }

    public function findById(string $instructionId): array
    {
        $instruction = $this->fetchInstruction($instructionId);
        $instruction['steps'] = $this->fetchSteps($instructionId);

        return $instruction;
    }

    private function fetchInstruction(string $instructionId): array
    {
        $statement = $this->db->prepare(
            'SELECT id, title, version, status
             FROM instructions
             WHERE id = :instruction_id'
        );

        $statement->execute(['instruction_id' => $instructionId]);
        $instruction = $statement->fetch(PDO::FETCH_ASSOC);

        if (!$instruction) {
            http_response_code(404);
            return ['error' => 'Instruction not found'];
        }

        return $instruction;
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

header('Content-Type: application/json');

$dsn = getenv('DATABASE_DSN') ?: 'pgsql:host=localhost;dbname=dozuki_demo';
$db = new PDO($dsn, getenv('DATABASE_USER') ?: 'postgres', getenv('DATABASE_PASSWORD') ?: '');

$instructionId = $_GET['instruction_id'] ?? '';
$gateway = new InstructionSummaryGateway($db);

echo json_encode($gateway->findById($instructionId), JSON_THROW_ON_ERROR);

