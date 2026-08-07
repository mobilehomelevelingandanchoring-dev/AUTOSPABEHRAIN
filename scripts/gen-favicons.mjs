import sharp from "sharp";
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const PUBLIC = join(ROOT, "public");

// 5-pointed star: outer R=13, inner r=5.4, center (16,16), tip pointing up
const STAR_PATH =
  "M16,3 L19.1,11.5 L28,12.6 L21.8,18.6 L23.6,27.4 L16,23.2 L8.4,27.4 L10.2,18.6 L4,12.6 L12.9,11.5 Z";

const SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="6" fill="white"/>
  <path d="${STAR_PATH}" fill="#d4af37"/>
</svg>`;

const buf = Buffer.from(SVG);

async function png(size) {
  return sharp(buf).resize(size, size).png({ compressionLevel: 9 }).toBuffer();
}

function icoFromPngs(pngBuffers, sizes) {
  const count = pngBuffers.length;
  const headerSize = 6 + count * 16;
  let offset = headerSize;

  const dirs = pngBuffers.map((b, i) => {
    const s = sizes[i];
    const dir = Buffer.alloc(16);
    dir.writeUInt8(s >= 256 ? 0 : s, 0);
    dir.writeUInt8(s >= 256 ? 0 : s, 1);
    dir.writeUInt8(0, 2);
    dir.writeUInt8(0, 3);
    dir.writeUInt16LE(1, 4);
    dir.writeUInt16LE(32, 6);
    dir.writeUInt32LE(b.length, 8);
    dir.writeUInt32LE(offset, 12);
    offset += b.length;
    return dir;
  });

  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);

  return Buffer.concat([header, ...dirs, ...pngBuffers]);
}

const [p16, p32, p48, p180, p192, p512] = await Promise.all([
  png(16), png(32), png(48), png(180), png(192), png(512),
]);

writeFileSync(join(PUBLIC, "favicon-16x16.png"), p16);
writeFileSync(join(PUBLIC, "favicon-32x32.png"), p32);
writeFileSync(join(PUBLIC, "apple-touch-icon.png"), p180);
writeFileSync(join(PUBLIC, "android-chrome-192x192.png"), p192);
writeFileSync(join(PUBLIC, "android-chrome-512x512.png"), p512);
writeFileSync(join(PUBLIC, "favicon.ico"), icoFromPngs([p16, p32, p48], [16, 32, 48]));

console.log("✓ favicon.ico  (16 + 32 + 48)");
console.log("✓ favicon-16x16.png");
console.log("✓ favicon-32x32.png");
console.log("✓ apple-touch-icon.png  (180×180)");
console.log("✓ android-chrome-192x192.png");
console.log("✓ android-chrome-512x512.png");
