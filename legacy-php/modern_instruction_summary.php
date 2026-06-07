<?php
declare(strict_types=1);

require_once __DIR__ . '/InstructionRepository.php';

header('Content-Type: application/json');

$dsn = getenv('DATABASE_DSN') ?: 'pgsql:host=localhost;dbname=dozuki_demo';
$db = new PDO($dsn, getenv('DATABASE_USER') ?: 'postgres', getenv('DATABASE_PASSWORD') ?: '');

$repository = new InstructionRepository($db, new LegacyInstructionAdapter());
$instruction = $repository->findModernInstruction($_GET['instruction_id'] ?? '');

if ($instruction === null) {
    http_response_code(404);
    echo json_encode(['error' => 'Instruction not found'], JSON_THROW_ON_ERROR);
    return;
}

echo json_encode($instruction->toApiPayload(), JSON_THROW_ON_ERROR);

