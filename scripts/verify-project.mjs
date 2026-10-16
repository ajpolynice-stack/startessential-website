// Pre-build file integrity check for the Essential Solutions website.
// This catches incomplete browser uploads before the Next.js compilation begins.
import { readFileSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";

const required = [
  "package.json", "tsconfig.json", "next.config.ts",
  "app/layout.tsx", "app/page.tsx", "app/globals.css",
  "app/api/health/route.ts", "app/api/leads/route.ts",
  "app/privacy/page.tsx", "app/terms/page.tsx",
  "components/HomePage.tsx", "components/SignupDialog.tsx", "components/BrandLockup.tsx", "components/HighLevelChatWidget.tsx",
  "lib/site.ts",
  "public/images/essential-logo.webp", "public/images/essential-mark.png",
  "public/images/ribbon-left.svg", "public/images/ribbon-right.svg",
];
let failures = 0;
for (const rel of required) {
  const path = join(process.cwd(), rel);
  if (!existsSync(path) || !statSync(path).isFile() || statSync(path).size === 0) {
    console.error(`[MISSING OR EMPTY] ${rel}`);
    failures++;
  }
}
try {
  const parsed = JSON.parse(readFileSync(join(process.cwd(), "package.json"), "utf8"));
  if (!parsed.scripts?.build || !parsed.dependencies?.next) throw Error("Missing build or Next.js dependency");
} catch (error) {
  console.error(`[INVALID PACKAGE.JSON] ${error instanceof Error ? error.message : String(error)}`);
  failures++;
}
if (failures) {
  console.error(`Project verification failed (${failures} issue(s)). Reupload the complete extracted folder tree, not ZIP or empty placeholders.`);
  process.exit(1);
}
console.log("Essential Solutions project files verified. Proceeding with Next.js build.");
