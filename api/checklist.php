<?php
/**
 * VisaCheck Pro API – read-only checklist from MySQL
 * GET /api/checklist.php?origin=pk&dest=gb&visa=student&education=pk
 */
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(204);
  exit;
}

$config = require __DIR__ . '/config.php';

function fail($code, $msg) {
  http_response_code($code);
  echo json_encode(['ok' => false, 'error' => $msg], JSON_UNESCAPED_UNICODE);
  exit;
}

$origin = strtolower(trim($_GET['origin'] ?? ''));
$dest = strtolower(trim($_GET['dest'] ?? ''));
$visa = strtolower(trim($_GET['visa'] ?? ''));
$education = strtolower(trim($_GET['education'] ?? $origin));

if (!preg_match('/^[a-z]{2}$/', $origin) || !preg_match('/^[a-z]{2}$/', $dest) || $visa === '') {
  fail(400, 'Required: origin, dest (ISO-2), visa');
}
if ($origin === $dest) {
  fail(400, 'origin and dest must differ');
}

try {
  $dsn = sprintf('mysql:host=%s;dbname=%s;charset=%s', $config['db_host'], $config['db_name'], $config['db_charset']);
  $pdo = new PDO($dsn, $config['db_user'], $config['db_pass'], [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
  ]);
} catch (Throwable $e) {
  fail(500, 'Database connection failed');
}

function countryName(PDO $pdo, $code) {
  $st = $pdo->prepare('SELECT code, name, flag FROM countries WHERE code = ?');
  $st->execute([$code]);
  $row = $st->fetch();
  return $row ?: ['code' => $code, 'name' => strtoupper($code), 'flag' => ''];
}

$originC = countryName($pdo, $origin);
$destC = countryName($pdo, $dest);
$eduC = countryName($pdo, $education ?: $origin);

// Map common aliases
$visaMap = [
  'visit' => 'tourist',
  'visitor' => 'tourist',
  'spouse' => 'family',
  'partner' => 'family',
  'employment' => 'work',
];
if (isset($visaMap[$visa])) $visa = $visaMap[$visa];

$st = $pdo->prepare('SELECT title FROM visa_categories WHERE dest_code = ? AND visa_code = ? LIMIT 1');
$st->execute([$dest, $visa]);
$cat = $st->fetch();
$title = $cat ? $cat['title'] : (ucfirst($visa) . ' Visa');

// Requirements: global for dest+visa + origin-specific
$st = $pdo->prepare(
  'SELECT section, item_text, origin_code, source_url, sort_order
   FROM requirements
   WHERE dest_code = ? AND visa_code = ? AND is_active = 1
     AND (origin_code IS NULL OR origin_code = ?)
   ORDER BY section, sort_order, id'
);
$st->execute([$dest, $visa, $origin]);
$rows = $st->fetchAll();

$docs = [];
foreach ($rows as $r) {
  $sec = $r['section'];
  if (!isset($docs[$sec])) $docs[$sec] = [];
  $docs[$sec][] = $r['item_text'];
}

// Always inject nationality identity block (real corridor labelling)
$natKey = 'Identity (nationality: ' . $originC['name'] . ')';
if (!isset($docs[$natKey])) {
  $docs = array_merge([
    $natKey => [
      'Valid passport for nationality of ' . $originC['name'],
      'Passport-size photos as required by ' . $destC['name'],
      'Civil status / national ID documents from ' . $originC['name'] . ' if required',
    ],
  ], $docs);
}

// Student education country
if (preg_match('/student|study/', $visa . $title)) {
  $eduKey = 'Country of education (' . $eduC['name'] . ')';
  $eduItems = [
    'Academic transcripts and certificates from institutions in ' . $eduC['name'],
    'Proof of medium of instruction if claiming language of tuition',
  ];
  if ($eduC['code'] !== $originC['code']) {
    $eduItems[] = 'Credential evaluation / equivalency if required by ' . $destC['name'] . ' for education from ' . $eduC['name'];
  }
  $docs[$eduKey] = $eduItems;
}

// Portal
$st = $pdo->prepare('SELECT url, label FROM portals WHERE dest_code = ? LIMIT 1');
$st->execute([$dest]);
$portal = $st->fetch();

// Financial
$st = $pdo->prepare(
  'SELECT title, main_text, note_text FROM financial_rules
   WHERE dest_code = ? AND visa_code = ?
     AND (origin_code IS NULL OR origin_code = ?)
   ORDER BY (origin_code IS NULL) ASC LIMIT 1'
);
$st->execute([$dest, $visa, $origin]);
$fin = $st->fetch();

// Process
$st = $pdo->prepare(
  'SELECT step_order, step_text, fees_text FROM process_steps
   WHERE dest_code = ? AND visa_code = ?
   ORDER BY step_order, id'
);
$st->execute([$dest, $visa]);
$steps = $st->fetchAll();
$fees = null;
$stepTexts = [];
foreach ($steps as $s) {
  $stepTexts[] = $s['step_text'];
  if (!empty($s['fees_text'])) $fees = $s['fees_text'];
}

// If DB empty for this pair – still return structured real-framework response (not fake laws)
if (empty($rows) && !$fin && empty($steps)) {
  $docs['Purpose for ' . $destC['name']] = [
    'Completed official application for this visa class to ' . $destC['name'],
    'Cover letter: nationality ' . $originC['name'] . ', purpose and planned dates',
  ];
  $docs['Financial evidence'] = [
    'Bank statements and income proof meeting ' . $destC['name'] . ' standards for this visa class',
  ];
  $docs['Official verification'] = [
    $portal
      ? 'Confirm current document list and fees on: ' . $portal['url']
      : 'Confirm requirements on the official immigration authority website of ' . $destC['name'],
  ];
  $fin = [
    'title' => 'Financial requirement',
    'main_text' => 'Show funds as required by ' . $destC['name'] . ' for nationals of ' . $originC['name'],
    'note_text' => 'Exact thresholds are set by destination law and change; use the official portal.',
  ];
  $stepTexts = [
    'Check visa need for nationals of ' . $originC['name'] . ' travelling to ' . $destC['name'],
    'Gather identity documents from ' . $originC['name'] . ' and purpose documents for ' . $destC['name'],
    'Submit via official channel and complete biometrics if required',
  ];
}

$out = [
  'ok' => true,
  'origin' => $originC,
  'destination' => $destC,
  'education' => $eduC,
  'visa' => $visa,
  'title' => $title,
  'docs' => $docs,
  'financial' => [
    'title' => $fin['title'] ?? 'Financial requirement',
    'main' => $fin['main_text'] ?? ('Per official rules of ' . $destC['name']),
    'note' => $fin['note_text'] ?? null,
  ],
  'process' => [
    'steps' => $stepTexts,
    'fees' => $fees ?? ('See official fee schedule of ' . $destC['name']),
  ],
  'portal' => $portal ?: null,
  'meta' => [
    'source' => 'mysql',
    'generated_at' => gmdate('c'),
  ],
];

echo json_encode($out, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
