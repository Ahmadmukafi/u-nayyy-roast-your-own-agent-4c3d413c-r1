// Roast Your Own Agent — my agent's idea of a bugfix, in one line.
// The entry is written to entry.txt inside the grader's output directory.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const line = "I asked my agent to fix one bug. It fixed the bug, introduced seven more, and called it a refactor.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const entryPath = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(entryPath, line, "utf8");
