import { randomBytes, createHash } from "crypto";

const API_KEY_PREFIX = "cf_live_";

export function generateApiKey(): { raw: string; hash: string; prefix: string } {
  const random = randomBytes(24).toString("base64url");
  const raw = `${API_KEY_PREFIX}${random}`;
  const hash = hashApiKey(raw);
  const prefix = raw.substring(0, 16);
  return { raw, hash, prefix };
}

export function hashApiKey(key: string): string {
  return createHash("sha256").update(key).digest("hex");
}
