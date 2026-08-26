import fs from "fs";
import path from "path";

let db: any = null;
let useJsonFallback = false;
const dbPath = path.resolve(process.cwd(), "avasa.db");
const jsonDbPath = path.resolve(process.cwd(), "src/data/db.json");

// Initialize database
try {
  const { DatabaseSync } = require("node:sqlite");
  db = new DatabaseSync(dbPath);
  
  // Create tables if they do not exist
  db.exec(`
    CREATE TABLE IF NOT EXISTS callback_requests (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      phone TEXT NOT NULL,
      date TEXT NOT NULL,
      time TEXT NOT NULL,
      reason TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'pending',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);
  
  db.exec(`
    CREATE TABLE IF NOT EXISTS enquiries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      phone TEXT NOT NULL,
      reason TEXT NOT NULL,
      channel TEXT NOT NULL DEFAULT 'whatsapp',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);
} catch (error) {
  console.warn("node:sqlite is not available or failed to initialize, falling back to JSON database:", error);
  useJsonFallback = true;
  
  // Ensure the directory for JSON DB exists
  const dir = path.dirname(jsonDbPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  if (!fs.existsSync(jsonDbPath)) {
    fs.writeFileSync(jsonDbPath, JSON.stringify({ callback_requests: [], enquiries: [] }, null, 2));
  }
}

export interface CallbackRequest {
  name: string;
  phone: string;
  date: string;
  time: string;
  reason: string;
  status?: string;
  created_at?: string;
}

export interface Enquiry {
  name: string;
  phone: string;
  reason: string;
  channel: string;
  created_at?: string;
}

export async function insertCallbackRequest(req: CallbackRequest) {
  if (useJsonFallback) {
    const data = JSON.parse(fs.readFileSync(jsonDbPath, "utf8"));
    const newRecord = {
      id: data.callback_requests.length + 1,
      ...req,
      status: req.status || "pending",
      created_at: new Date().toISOString()
    };
    data.callback_requests.push(newRecord);
    fs.writeFileSync(jsonDbPath, JSON.stringify(data, null, 2));
    return newRecord;
  } else {
    const stmt = db.prepare(`
      INSERT INTO callback_requests (name, phone, date, time, reason)
      VALUES (?, ?, ?, ?, ?)
    `);
    const result = stmt.run(req.name, req.phone, req.date, req.time, req.reason);
    return { id: result.lastInsertRowid, ...req };
  }
}

export async function insertEnquiry(enquiry: Enquiry) {
  if (useJsonFallback) {
    const data = JSON.parse(fs.readFileSync(jsonDbPath, "utf8"));
    const newRecord = {
      id: data.enquiries.length + 1,
      ...enquiry,
      created_at: new Date().toISOString()
    };
    data.enquiries.push(newRecord);
    fs.writeFileSync(jsonDbPath, JSON.stringify(data, null, 2));
    return newRecord;
  } else {
    const stmt = db.prepare(`
      INSERT INTO enquiries (name, phone, reason, channel)
      VALUES (?, ?, ?, ?)
    `);
    const result = stmt.run(enquiry.name, enquiry.phone, enquiry.reason, enquiry.channel);
    return { id: result.lastInsertRowid, ...enquiry };
  }
}

export function getCallbackRequests() {
  if (useJsonFallback) {
    const data = JSON.parse(fs.readFileSync(jsonDbPath, "utf8"));
    return data.callback_requests;
  } else {
    const stmt = db.prepare("SELECT * FROM callback_requests ORDER BY created_at DESC");
    return stmt.all();
  }
}

export function getEnquiries() {
  if (useJsonFallback) {
    const data = JSON.parse(fs.readFileSync(jsonDbPath, "utf8"));
    return data.enquiries;
  } else {
    const stmt = db.prepare("SELECT * FROM enquiries ORDER BY created_at DESC");
    return stmt.all();
  }
}
