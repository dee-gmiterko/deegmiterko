import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { pageCounts } from '../constants.mjs';

const MAX_CHANGE = 0.02;

async function visualChange(a, b) {
  const [ra, rb] = await Promise.all(
    [a, b].map(img => sharp(img).ensureAlpha().raw().toBuffer()),
  );
  if (ra.length !== rb.length) return 1;
  let sum = 0;
  for (let i = 0; i < ra.length; i++) sum += Math.abs(ra[i] - rb[i]);
  return sum / ra.length / 255;
}

const OUTPUT_DIR = path.join(import.meta.dirname, '../src/images/page-thumbnails');

async function generateImages() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 1200 });

  for (const [bookId, pageCount] of Object.entries(pageCounts)) {
    for (let i = 0; i < pageCount; i++) {
      const outputPath = path.join(OUTPUT_DIR, `${bookId}-${i}.png`);

      const url = `http://localhost:8000/render/${bookId}/${i}`;
      console.log(`Rendering ${bookId}/${i}...`);

      await page.goto(url, { waitUntil: 'domcontentloaded' });
      await new Promise(r => setTimeout(r, 5000));
      const screenshotBuffer = await page.screenshot();
      const newBuffer = await sharp(screenshotBuffer)
        .resize(150, 150)
        .png()
        .toBuffer();
      if (fs.existsSync(outputPath)) {
        const change = await visualChange(fs.readFileSync(outputPath), newBuffer);
        if (change < MAX_CHANGE) {
          console.log(`Unchanged (${(change * 100).toFixed(2)}%), keeping ${bookId}/${i}`);
          continue;
        }
      }
      fs.writeFileSync(outputPath, newBuffer);
    }
  }

  await browser.close();
  console.log('Done!');
}

generateImages();
