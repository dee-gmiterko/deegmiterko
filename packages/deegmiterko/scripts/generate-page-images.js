const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const { pageCounts } = require('../constants.js');

const OUTPUT_DIR = path.join(__dirname, '../src/images/page-thumbnails');

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
      await sharp(screenshotBuffer)
        .resize(150, 150)
        .png()
        .toFile(outputPath);
    }
  }

  await browser.close();
  console.log('Done!');
}

generateImages();
