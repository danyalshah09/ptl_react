/**
 * WebP Converter Script
 * 
 * This script is intended to be run as a build step to convert JPG/PNG images to WebP format.
 * It requires the 'sharp' library for image processing.
 * 
 * Installation:
 * npm install --save-dev sharp
 * 
 * Usage:
 * node webp-converter.js
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Configuration
const IMAGE_DIRS = [
  './public/assets/images',
  './public/assets/slider',
];
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png'];
const QUALITY = 80; // WebP quality (0-100)

async function convertToWebP(inputPath) {
  const fileExt = path.extname(inputPath).toLowerCase();
  
  if (!IMAGE_EXTENSIONS.includes(fileExt)) {
    return;
  }
  
  const outputPath = inputPath.replace(fileExt, '.webp');
  
  // Skip if WebP already exists and is newer than source
  if (fs.existsSync(outputPath)) {
    const inputStat = fs.statSync(inputPath);
    const outputStat = fs.statSync(outputPath);
    
    if (outputStat.mtime > inputStat.mtime) {
      console.log(`Skipping ${path.basename(inputPath)} (WebP already up to date)`);
      return;
    }
  }
  
  try {
    await sharp(inputPath)
      .webp({ quality: QUALITY })
      .toFile(outputPath);
    
    console.log(`Converted: ${path.basename(inputPath)} → ${path.basename(outputPath)}`);
  } catch (error) {
    console.error(`Error converting ${inputPath}: ${error.message}`);
  }
}

async function processDirectory(directory) {
  try {
    // Create directory if it doesn't exist
    if (!fs.existsSync(directory)) {
      console.log(`Creating directory: ${directory}`);
      fs.mkdirSync(directory, { recursive: true });
      return;
    }
    
    const files = fs.readdirSync(directory);
    
    for (const file of files) {
      const filePath = path.join(directory, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        await processDirectory(filePath);
      } else if (stat.isFile()) {
        await convertToWebP(filePath);
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${directory}: ${error.message}`);
  }
}

async function main() {
  console.log('Starting WebP conversion...');
  
  for (const dir of IMAGE_DIRS) {
    console.log(`Processing directory: ${dir}`);
    await processDirectory(dir);
  }
  
  console.log('WebP conversion complete!');
}

// Run the script
main().catch(error => {
  console.error('Conversion failed:', error);
  process.exit(1);
}); 