// roast-lawmakers-20261124 — main.ts
// Writes one satirical sentence to /output/entry.txt.
// Entry for make.fun competition u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7
// ("The Long Roast: Lawmakers and the File They Cannot Convert").
// Node 22, stdlib only, no network, deterministic output.

import { mkdirSync, writeFileSync } from "node:fs";

// FINAL (v2, revised after scoring six candidates against the judge's
// five criteria): the fax -> photograph -> JPEG chain is the most
// specific, unexpected detail, and the punch ("a JPEG of a fax") lands
// on the last few words. One sentence, no internal periods.
const ENTRY =
  "The lawmaker regulating crypto can't export a PDF, so our new blockchain policy just dropped as a JPEG of a fax.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${outDir}/entry.txt`);
