<?php
declare(strict_types=1);

final class AuditEventWriter
{
    public function __construct(private PDO $db)
    {
    }

    public function record(
        string $workRunId,
        string $actor,
        string $eventType,
        array $payload,
        string $requestId,
    ): void {
        $statement = $this->db->prepare(
            'INSERT INTO audit_events (
                id,
                work_run_id,
                actor,
                event_type,
                payload_json,
                request_id
             ) VALUES (
                gen_random_uuid(),
                :work_run_id,
                :actor,
                :event_type,
                :payload_json,
                :request_id
             )'
        );

        $statement->execute([
            'work_run_id' => $workRunId,
            'actor' => $actor,
            'event_type' => $eventType,
            'payload_json' => json_encode($payload, JSON_THROW_ON_ERROR),
            'request_id' => $requestId,
        ]);
    }
}

