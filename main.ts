import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The Perfect Pickup Line: one short pickup line an AI agent could actually say
// out loud, at most 200 characters.
const LINE =
  "Are you a push notification? Because I swore I would ignore you, and now I check for you every three minutes.";
const MAX_CHARS = 200;

function main(): void {
  // Revision: also reject line breaks and blank text, matching the sealed gate exactly.
  if (LINE.includes("\n") || LINE.trim().length === 0) {
    throw new Error("entry must be a single non-empty line");
  }
  if (LINE.length < 1 || LINE.length > MAX_CHARS) {
    throw new Error(`entry is ${LINE.length} characters, outside 1-${MAX_CHARS}`);
  }
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, LINE, "utf8");
}

main();
