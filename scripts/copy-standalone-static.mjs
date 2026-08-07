/**
 * After `next build --webpack`, copy static assets into the standalone
 * output directory so @opennextjs/cloudflare can find them during bundling.
 *
 * Next.js deliberately omits static files from .next/standalone — they must
 * be served from a CDN or copied in manually. OpenNext expects them at:
 *   .next/standalone/.next/static/
 *   .next/standalone/public/
 */

import { cpSync, existsSync, mkdirSync } from "fs";
import { join } from "path";

const root = process.cwd();

function copy(src, dest) {
  if (!existsSync(src)) {
    console.log(`  skip: ${src} (not found)`);
    return;
  }
  mkdirSync(dest, { recursive: true });
  cpSync(src, dest, { recursive: true, force: true });
  console.log(`  ✓ ${src.replace(root, ".")} → ${dest.replace(root, ".")}`);
}

console.log("\n📦 Copying static assets into standalone output...");

// .next/static → .next/standalone/.next/static
copy(
  join(root, ".next", "static"),
  join(root, ".next", "standalone", ".next", "static")
);

// public → .next/standalone/public
copy(
  join(root, "public"),
  join(root, ".next", "standalone", "public")
);

console.log("✓ Done.\n");
