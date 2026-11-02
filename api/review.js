// Review status for each feature and each main-flow frame.
// Every change is saved as a new, never-overwritten blob (an append-only log),
// so reads are never stale from caching. GET returns the latest entry per key.
// Needs a Vercel Blob store connected to the project (BLOB_READ_WRITE_TOKEN).
import { put, list } from "@vercel/blob";

const STATUSES = ["proposed", "rejected", "approved", "done"];
const KEY = /^[a-z0-9-]+(\/[a-z0-9:_-]+)?$/i;
const PREFIX = "reviews/";

async function readAll() {
  const blobs = [];
  let cursor;
  do {
    const page = await list({ prefix: PREFIX, cursor, limit: 1000 });
    blobs.push(...page.blobs);
    cursor = page.hasMore ? page.cursor : undefined;
  } while (cursor);
  const entries = await Promise.all(
    blobs.map(b => fetch(b.url).then(r => (r.ok ? r.json() : null)).catch(() => null))
  );
  const items = {};
  for (const e of entries) {
    if (!e || !e.key) continue;
    if (!items[e.key] || items[e.key].at < e.at) items[e.key] = e;
  }
  return items;
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return res.status(503).json({ error: "storage-not-connected" });
  }
  try {
    if (req.method === "GET") {
      return res.status(200).json({ items: await readAll() });
    }
    if (req.method === "POST") {
      const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
      const key = String(body.key || "");
      const status = String(body.status || "");
      const comment = String(body.comment || "").trim().slice(0, 1000);
      if (!KEY.test(key) || key.length > 160) return res.status(400).json({ error: "bad-key" });
      if (!STATUSES.includes(status)) return res.status(400).json({ error: "bad-status" });
      if (status === "rejected" && !comment) return res.status(400).json({ error: "comment-required" });
      const entry = { key, status, comment: status === "rejected" ? comment : "", at: Date.now() };
      const name = `${PREFIX}${entry.at}-${Math.random().toString(36).slice(2, 8)}.json`;
      await put(name, JSON.stringify(entry), {
        access: "public",
        contentType: "application/json",
        addRandomSuffix: false,
      });
      return res.status(200).json({ entry });
    }
    res.setHeader("Allow", "GET, POST");
    return res.status(405).json({ error: "method-not-allowed" });
  } catch (err) {
    return res.status(500).json({ error: "server-error" });
  }
}
