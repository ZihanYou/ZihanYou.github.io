import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const outDir = path.join(root, "out");
const docsDir = path.join(root, "docs");

if (!fs.existsSync(path.join(outDir, "index.html"))) {
  console.error("Missing out/index.html. Run next build first.");
  process.exit(1);
}

fs.rmSync(docsDir, { recursive: true, force: true });
fs.cpSync(outDir, docsDir, { recursive: true });
fs.writeFileSync(path.join(docsDir, ".nojekyll"), "");

const audit = spawnSync(process.execPath, ["scripts/audit-docs.mjs"], {
  cwd: root,
  stdio: "inherit",
});
process.exit(audit.status ?? 1);
