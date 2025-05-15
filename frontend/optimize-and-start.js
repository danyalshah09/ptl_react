/**
 * Optimize images and start development server
 * 
 * This script automates the process of:
 * 1. Converting images to WebP format
 * 2. Starting the development server
 * 
 * Usage:
 * node optimize-and-start.js
 */

import { spawn, exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Check if sharp is installed
try {
  import('sharp');
  console.log('✓ Sharp is installed.');
  startProcess();
} catch (e) {
  console.error('Error: Sharp module is not installed.');
  console.log('Installing sharp...');
  try {
    exec('npm install sharp --save-dev', (error, stdout, stderr) => {
      if (error) {
        console.error(`Error installing sharp: ${error.message}`);
        process.exit(1);
      }
      console.log('✓ Sharp installed successfully.');
      startProcess();
    });
  } catch (err) {
    console.error('Failed to install sharp. Please run: npm install sharp --save-dev');
    process.exit(1);
  }
}

// Main process
function startProcess() {
  console.log('Starting WebP conversion process...');
  
  // Check image directories and create if they don't exist
  const directories = [
    './public/assets',
    './public/assets/images',
    './public/assets/slider',
    './public/assets/rooms',
    './public/assets/about',
    './public/assets/location',
    './public/assets/random'
  ];
  
  directories.forEach(dir => {
    if (!fs.existsSync(dir)) {
      console.log(`Creating directory: ${dir}`);
      fs.mkdirSync(dir, { recursive: true });
    }
  });
  
  // Start WebP conversion
  const webpConverter = spawn('node', ['webp-converter.js'], {
    stdio: 'inherit',
    shell: true
  });
  
  webpConverter.on('exit', (code) => {
    if (code === 0) {
      console.log('✓ WebP conversion completed successfully.');
      console.log('Starting development server...');
      
      // Start development server
      const devServer = spawn('npm', ['run', 'dev'], {
        stdio: 'inherit',
        shell: true
      });
      
      devServer.on('exit', (code) => {
        if (code !== 0) {
          console.error(`Development server exited with code ${code}`);
        }
      });
    } else {
      console.error(`WebP conversion failed with code ${code}`);
    }
  });
}

// Start the process
startProcess(); 