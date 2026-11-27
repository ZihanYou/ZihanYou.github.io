import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const docs = path.join(root, "docs");
const errors = [];

function fail(message) {
  errors.push(message);
}

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else files.push(full);
  }
  return files;
}

if (!fs.existsSync(docs)) fail("docs/ does not exist");
if (fs.existsSync(path.join(docs, "Language2Drive"))) {
  fail("docs/Language2Drive would shadow the Language2Drive project site");
}
if (!fs.existsSync(path.join(docs, ".nojekyll"))) fail("docs/.nojekyll is missing");

const requiredFiles = [
  "index.html",
  "research/index.html",
  "publications/index.html",
  "experience/index.html",
  "engineering/index.html",
  "awards/index.html",
  "cv/index.html",
  "404.html",
  "sitemap.xml",
  "robots.txt",
  "favicon.svg",
  "og.png",
  "bio.jpg",
  "Zihan_You_Academic_CV.pdf",
  "images/teasers/language2drive.webp",
];
for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(docs, file))) fail(`missing ${file}`);
}

const pdf = path.join(docs, "Zihan_You_Academic_CV.pdf");
if (fs.existsSync(pdf)) {
  const header = fs.readFileSync(pdf).subarray(0, 5).toString("utf8");
  if (header !== "%PDF-") fail("academic CV is not a PDF");
  if (fs.statSync(pdf).size < 20_000) fail("academic CV PDF looks empty");
}

const banned = [
  [/PRIVATE_CANARY_DO_NOT_PUBLISH_7f3a9c/, "private canary"],
  [/213223318/, "old student email"],
  [/third[- ]year/i, "third-year"],
  [/Third Grade/i, "Third Grade"],
  [/MPhil/i, "MPhil"],
  [/Under Review/i, "Under Review"],
  [/\bECCV\b/, "ECCV"],
  [/\bICML\b/, "ICML"],
  [/state-of-the-art/i, "state-of-the-art"],
  [/groundbreaking/i, "groundbreaking"],
  [/world-leading/i, "world-leading"],
  [/\bAGI\b/, "AGI"],
  [/Intelligent Perception of Engineering/i, "old degree name"],
  [/Hong Kong University of Science/i, "unannounced graduate affiliation"],
  [/AD Scaling/i, "internal project name"],
  [/2,304 closed-loop/i, "unverified run count"],
  [/(?<!\d)1[3-9]\d{9}(?!\d)/, "phone number"],
];

const required = [
  "Zihan You",
  "尤子涵",
  "zihanyou@seu.edu.cn",
  "Language2Drive",
  "Agents' Last Exam",
  "Knowledge Externalization",
  "Li Auto",
  "China Automotive Innovation Corporation",
  "Intelligent Sensing Engineering",
  "June 2027",
  "ICLR 2026",
  "93.2% of successful",
  "Multimodal Foundation Models",
];

const textFiles = walk(docs).filter((file) =>
  /\.(html|txt|js|css|xml|json|svg|webmanifest)$/i.test(file),
);
const blob = textFiles.map((file) => fs.readFileSync(file, "utf8")).join("\n");
for (const [pattern, label] of banned) {
  if (pattern.test(blob)) fail(`public output contains ${label}`);
}
for (const phrase of required) {
  if (!blob.includes(phrase)) fail(`public output is missing “${phrase}”`);
}

function targetExists(urlPath) {
  const clean = decodeURIComponent(urlPath.split("#")[0].split("?")[0]);
  if (!clean.startsWith("/")) return true;
  const rel = clean.replace(/^\/+/, "");
  if (!rel) return fs.existsSync(path.join(docs, "index.html"));
  const direct = path.join(docs, rel);
  if (fs.existsSync(direct) && fs.statSync(direct).isFile()) return true;
  if (fs.existsSync(path.join(direct, "index.html"))) return true;
  if (fs.existsSync(path.join(docs, `${rel}.html`))) return true;
  return false;
}

const htmlFiles = textFiles.filter((file) => file.endsWith(".html"));
for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  const refs = html.matchAll(/\b(?:href|src)="([^"]+)"/g);
  for (const match of refs) {
    const ref = match[1];
    if (ref.startsWith("http") || ref.startsWith("mailto:") || ref.startsWith("#") || ref.startsWith("data:")) {
      continue;
    }
    if (!targetExists(ref)) fail(`${path.relative(docs, file)} has a broken local link ${ref}`);
  }
}

if (errors.length > 0) {
  console.error(errors.map((error) => `- ${error}`).join("\n"));
  process.exit(1);
}
console.log(`Audited ${textFiles.length} public files in docs/.`);
