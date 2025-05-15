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

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const IMAGE_DIRS = [
  './public/assets/about',
  './public/assets/images',
  './public/assets/location',
  './public/assets/random',
  './public/assets/rooms',
  './public/assets/slider',
  './public/assets', // Root assets directory
  './src/assets'     // Source assets directory if used
];
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif'];
const QUALITY = 85; // WebP quality (0-100)
const SIZES = [320, 640, 1024]; // Responsive image sizes

async function convertToWebP(inputPath) {
  const fileExt = path.extname(inputPath).toLowerCase();
  
  if (!IMAGE_EXTENSIONS.includes(fileExt)) {
    return;
  }
  
  const outputPath = inputPath.replace(fileExt, '.webp');
  const fileName = path.basename(inputPath, fileExt);
  const dirName = path.dirname(inputPath);
  
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
    // Generate optimized WebP image
    await sharp(inputPath)
      .webp({ 
        quality: QUALITY,
        effort: 6, // Higher effort = better compression (0-6)
        lossless: false,
        nearLossless: false,
        smartSubsample: true,
        reductionEffort: 4 // Higher = better quality/size ratio (0-6)
      })
      .toFile(outputPath);
    
    console.log(`Converted: ${path.basename(inputPath)} → ${path.basename(outputPath)}`);
    
    // Generate responsive versions for larger images
    const imageInfo = await sharp(inputPath).metadata();
    
    // Only create responsive versions for images larger than 1024px
    if ((imageInfo.width > 1024 || imageInfo.height > 1024) && process.env.GENERATE_RESPONSIVE !== 'false') {
      for (const size of SIZES) {
        const resizedName = `${fileName}_${size}${fileExt}`;
        const resizedWebpName = `${fileName}_${size}.webp`;
        const resizedPath = path.join(dirName, resizedName);
        const resizedWebpPath = path.join(dirName, resizedWebpName);
        
        // Create resized JPG/PNG
        await sharp(inputPath)
          .resize({
            width: size,
            height: null,
            fit: 'inside',
            withoutEnlargement: true
          })
          .toFile(resizedPath);
        
        // Create resized WebP
        await sharp(resizedPath)
          .webp({ 
            quality: QUALITY,
            effort: 6,
            smartSubsample: true
          })
          .toFile(resizedWebpPath);
          
        console.log(`Created responsive image: ${resizedWebpName}`);
      }
    }
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
      
      try {
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
          await processDirectory(filePath);
        } else if (stat.isFile()) {
          await convertToWebP(filePath);
        }
      } catch (error) {
        console.error(`Error processing ${filePath}: ${error.message}`);
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${directory}: ${error.message}`);
  }
}

async function main() {
  console.log('Starting WebP conversion...');
  
  // Process each directory
  for (const dir of IMAGE_DIRS) {
    if (fs.existsSync(dir)) {
      console.log(`Processing directory: ${dir}`);
      await processDirectory(dir);
    } else {
      console.log(`Directory not found: ${dir} (skipping)`);
    }
  }
  
  console.log('WebP conversion complete!');
}

// Run the script
main().catch(error => {
  console.error('Conversion failed:', error);
  process.exit(1);
}); 