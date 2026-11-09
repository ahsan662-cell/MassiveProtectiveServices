import fs from 'fs';
import path from 'path';

export interface FormSubmissionRecord {
  id: string;
  timestamp: string; // ISO String
  createdAt: number; // Unix timestamp
  channel: 'email' | 'whatsapp';
  status: 'success' | 'failed';
  formSource: string;
  fullName: string;
  email: string;
  phone: string;
  serviceType?: string;
  location?: string;
  preferredDate?: string;
  companyName?: string;
  jobTitle?: string;
  message?: string;
  resumeFileName?: string;
  ndaRequested?: boolean;
  requiresArmedDriver?: boolean;
  details?: Record<string, unknown>;
  errorMessage?: string;
  ip?: string;
  userAgent?: string;
  idempotencyKey?: string;
}

export interface SubmissionStats {
  total: number;
  successful: number;
  failed: number;
  email: number;
  whatsapp: number;
  todayCount: number;
}

const DATA_DIR = path.join(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'submissions.json');

// In-Memory cache for high-speed retrieval
let cachedSubmissions: FormSubmissionRecord[] | null = null;

function ensureDataFile(): void {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(DATA_FILE)) {
      fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2), 'utf-8');
    }
  } catch (err) {
    console.error('[MPS Store] Failed to initialize storage file:', err);
  }
}

function loadFromDisk(): FormSubmissionRecord[] {
  try {
    ensureDataFile();
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, 'utf-8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        return parsed;
      }
    }
  } catch (err) {
    console.error('[MPS Store] Failed reading from disk:', err);
  }
  return [];
}

function saveToDisk(records: FormSubmissionRecord[]): void {
  try {
    ensureDataFile();
    fs.writeFileSync(DATA_FILE, JSON.stringify(records, null, 2), 'utf-8');
  } catch (err) {
    console.error('[MPS Store] Failed saving to disk:', err);
  }
}

/**
 * Record a new form submission (Email or WhatsApp) into persistent store.
 */
export async function recordSubmission(
  entry: Omit<FormSubmissionRecord, 'id' | 'timestamp' | 'createdAt'>
): Promise<FormSubmissionRecord> {
  if (cachedSubmissions === null) {
    cachedSubmissions = loadFromDisk();
  }

  const now = new Date();
  const randomSuffix = Math.random().toString(36).substring(2, 7).toUpperCase();
  const id = `MPS-${now.getFullYear()}${(now.getMonth() + 1).toString().padStart(2, '0')}-${randomSuffix}`;

  const newRecord: FormSubmissionRecord = {
    ...entry,
    id,
    timestamp: now.toISOString(),
    createdAt: Date.now(),
  };

  // Add to front of array (latest first)
  cachedSubmissions.unshift(newRecord);

  // Keep up to 1000 latest records
  if (cachedSubmissions.length > 1000) {
    cachedSubmissions = cachedSubmissions.slice(0, 1000);
  }

  // Persist asynchronously
  saveToDisk(cachedSubmissions);

  return newRecord;
}

/**
 * Retrieve all submissions, optionally filtered.
 */
export function getAllSubmissions(): FormSubmissionRecord[] {
  if (cachedSubmissions === null) {
    cachedSubmissions = loadFromDisk();
  }
  return [...cachedSubmissions];
}

/**
 * Calculate live metrics across all submissions.
 */
export function getSubmissionStats(): SubmissionStats {
  const records = getAllSubmissions();
  const now = new Date();
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();

  let successful = 0;
  let failed = 0;
  let email = 0;
  let whatsapp = 0;
  let todayCount = 0;

  for (const r of records) {
    if (r.status === 'success') {
      successful++;
    } else {
      failed++;
    }

    if (r.channel === 'whatsapp') {
      whatsapp++;
    } else {
      email++;
    }

    if (r.createdAt >= startOfToday) {
      todayCount++;
    }
  }

  return {
    total: records.length,
    successful,
    failed,
    email,
    whatsapp,
    todayCount,
  };
}

/**
 * Delete a submission by ID
 */
export function deleteSubmission(id: string): boolean {
  if (cachedSubmissions === null) {
    cachedSubmissions = loadFromDisk();
  }
  const beforeLength = cachedSubmissions.length;
  cachedSubmissions = cachedSubmissions.filter((s) => s.id !== id);
  if (cachedSubmissions.length !== beforeLength) {
    saveToDisk(cachedSubmissions);
    return true;
  }
  return false;
}

/**
 * Clear all submissions (administrative action)
 */
export function clearAllSubmissions(): void {
  cachedSubmissions = [];
  saveToDisk(cachedSubmissions);
}

