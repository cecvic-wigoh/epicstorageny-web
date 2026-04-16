#!/usr/bin/env node
/**
 * Epic Storage NY — photo pipeline
 *
 * Reads every .HEIC file from the client's source folder (the one with the
 * trailing space in its name, handled explicitly below), decodes each via
 * heic-convert -> JPEG buffer, then re-encodes via sharp to three WebP widths.
 *
 * Output structure:
 *   public/images/_unsorted/<IMG_1234>-<width>.webp
 *
 * From there, the human operator visually reviews each image and moves it
 * into its final home:
 *   public/images/clarence-center/{hero,exterior,interior,drive-up,units,signage}/
 *   public/images/buffalo-niagara/{hero,exterior,interior,units,signage}/
 *   public/images/shared/
 *
 * Running the script is idempotent: re-runs overwrite.
 *
 * Usage: pnpm run process-photos
 */

import { mkdir, readdir, readFile } from "node:fs/promises";
import { join, basename, dirname, extname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import heicConvert from "heic-convert";

const __dirname = dirname(fileURLToPath(import.meta.url));

const SRC_DIR =
  process.env.PHOTOS_SRC ??
  // Note the trailing space in the source folder name — it's real. Don't remove.
  "/Users/cecvic/AiMT-Projects/Epic Storage/Epic storage photos ";

const OUT_DIR =
  process.env.PHOTOS_OUT ??
  join(__dirname, "..", "public", "images", "_unsorted");

const WIDTHS = [640, 1280, 1920];
const QUALITY = 80;

async function ensureDir(dir) {
  await mkdir(dir, { recursive: true });
}

async function listSourceHeics(src) {
  const entries = await readdir(src, { withFileTypes: true });
  return entries
    .filter((e) => e.isFile() && extname(e.name).toLowerCase() === ".heic")
    .map((e) => join(src, e.name));
}

async function convertOne(filePath) {
  const heicBuffer = await readFile(filePath);
  const jpegBuffer = await heicConvert({
    buffer: heicBuffer,
    format: "JPEG",
    quality: 0.92,
  });

  const stem = basename(filePath, extname(filePath));

  for (const width of WIDTHS) {
    const outName = `${stem}-${width}.webp`;
    const outPath = join(OUT_DIR, outName);
    await sharp(jpegBuffer)
      .rotate() // respect EXIF orientation then strip it
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: QUALITY, effort: 4 })
      .toFile(outPath);
    process.stdout.write(
      `  ${outName.padEnd(28)} `
    );
  }
  process.stdout.write("\n");
}

async function main() {
  console.log("Epic Storage NY — photo pipeline");
  console.log(`  source: ${SRC_DIR}`);
  console.log(`  out:    ${OUT_DIR}`);
  await ensureDir(OUT_DIR);

  const files = await listSourceHeics(SRC_DIR);
  console.log(`  found:  ${files.length} .HEIC files`);
  console.log();

  let converted = 0;
  for (const file of files) {
    const label = basename(file);
    console.log(label);
    try {
      await convertOne(file);
      converted += 1;
    } catch (err) {
      console.error(`  ! failed: ${err.message}`);
    }
  }

  console.log();
  console.log(`Done. Converted ${converted} / ${files.length}.`);
  console.log();
  console.log("Next step: open public/images/_unsorted/ and move the");
  console.log("relevant WebPs into the curated subtrees.");
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
