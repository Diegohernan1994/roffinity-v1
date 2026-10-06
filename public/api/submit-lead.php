<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept, X-Requested-With');
header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method Not Allowed']);
    exit;
}

$rawBody = file_get_contents('php://input');
$data = !empty($rawBody) ? json_decode($rawBody, true) : $_POST;

// Honeypot anti-spam check
if (!empty($data['website_url'])) {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Processed']);
    exit;
}

date_default_timezone_set('America/Los_Angeles');

$payload = [
    'name'                 => trim((string)($data['name'] ?? '')),
    'phone'                => trim((string)($data['phone'] ?? '')),
    'email'                => trim((string)($data['email'] ?? '')),
    'service'              => trim((string)($data['service'] ?? 'General Roofing Inquiry')),
    'address'              => trim((string)($data['address'] ?? '')),
    'message'              => trim((string)($data['message'] ?? '')),
    'company'              => 'Roofinity',
    'submission_date_time' => date('Y-m-d H:i:s T'),
    'submission_date_iso'  => date('c'),
    'full_url'             => trim((string)($data['full_url'] ?? $_SERVER['HTTP_REFERER'] ?? '')),
    'client_ip'            => $_SERVER['REMOTE_ADDR'] ?? '',
    'user_agent'           => $_SERVER['HTTP_USER_AGENT'] ?? ''
];

// In demo mode or if no webhook is defined, log lead and return success
$logFile = __DIR__ . '/leads_log.jsonl';
@file_put_contents($logFile, json_encode($payload) . PHP_EOL, FILE_APPEND);

http_response_code(200);
echo json_encode([
    'success' => true,
    'message' => 'Lead received successfully by Roofinity',
    'lead'    => $payload
]);
