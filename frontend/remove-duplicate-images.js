/**
 * Remove Original Image Files (JPG/PNG/JPEG)
 * 
 * This script identifies and removes original JPG/PNG/JPEG images 
 * when WebP versions exist to save storage space.
 * 
 * Usage:
 * node remove-duplicate-images.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

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

const ORIGINAL_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif'];
const DRY_RUN = false; // Set to true to only report files without deleting

/**
 * Check if WebP version exists for a file
 */
function webpVersionExists(filePath) {
  const webpPath = filePath.replace(path.extname(filePath), '.webp');
  return fs.existsSync(webpPath);
}

/**
 * Check if a file is a responsive variant
 */
function isResponsiveVariant(filePath) {
  const fileName = path.basename(filePath);
  // Match patterns like filename_320.jpg, filename_640.jpg, etc.
  const responsivePattern = /(.+)_(\d+)\.(jpg|jpeg|png|gif)$/i;
  return responsivePattern.test(fileName);
}

/**
 * Get all image files from directories
 */
function getAllImageFiles() {
  const files = [];
  
  for (const dir of IMAGE_DIRS) {
    if (!fs.existsSync(dir)) {
      console.log(`Directory not found: ${dir} (skipping)`);
      continue;
    }
    
    const dirFiles = getFilesRecursively(dir);
    files.push(...dirFiles);
  }
  
  return files;
}

/**
 * Get files recursively from a directory
 */
function getFilesRecursively(dir) {
  const files = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...getFilesRecursively(fullPath));
      } else if (stat.isFile()) {
        const ext = path.extname(fullPath).toLowerCase();
        if (ORIGINAL_EXTENSIONS.includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}: ${error.message}`);
  }
  
  return files;
}

/**
 * Process images and remove originals when WebP exists
 */
function processImages() {
  console.log('Scanning for original images to remove...');
  
  const imageFiles = getAllImageFiles();
  console.log(`Found ${imageFiles.length} original image files to analyze.`);
  
  let totalRemoved = 0;
  let totalSizeReclaimed = 0;
  
  for (const file of imageFiles) {
    const ext = path.extname(file).toLowerCase();
    
    // Skip if the file doesn't have a WebP version
    if (!webpVersionExists(file)) {
      console.log(`Keeping: ${file} (no WebP version found)`);
      continue;
    }
    
    // Handle responsive variants (also check their WebP versions)
    if (isResponsiveVariant(file)) {
      try {
        const stats = fs.statSync(file);
        totalSizeReclaimed += stats.size;
        totalRemoved++;
        
        console.log(`Removing: ${file} (has WebP version, ${Math.round(stats.size / 1024)} KB)`);
        
        if (!DRY_RUN) {
          fs.unlinkSync(file);
        }
      } catch (error) {
        console.error(`Error removing ${file}: ${error.message}`);
      }
      continue;
    }
    
    // Process regular files
    try {
      const stats = fs.statSync(file);
      totalSizeReclaimed += stats.size;
      totalRemoved++;
      
      console.log(`Removing: ${file} (has WebP version, ${Math.round(stats.size / 1024)} KB)`);
      
      if (!DRY_RUN) {
        fs.unlinkSync(file);
      }
    } catch (error) {
      console.error(`Error removing ${file}: ${error.message}`);
    }
  }
  
  console.log('\nSummary:');
  console.log(`Total original images analyzed: ${imageFiles.length}`);
  console.log(`Original files removed: ${totalRemoved}`);
  console.log(`Storage reclaimed: ${Math.round(totalSizeReclaimed / 1024 / 1024 * 100) / 100} MB`);
  
  if (DRY_RUN) {
    console.log('\nThis was a dry run. No files were actually deleted.');
    console.log('Set DRY_RUN = false to actually remove files.');
  }
}

// Run the script
processImages(); 