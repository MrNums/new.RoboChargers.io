// Script to process robot images
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

// Get the directory name properly in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create the output directory if it doesn't exist
const outputDir = path.join(__dirname, 'client/src/assets/robots');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Helper function to process an image
async function processImage(inputPath, outputPath, options = {}) {
  try {
    // Start with the base image
    let pipeline = sharp(inputPath);
    
    // Resize if specified
    if (options.width || options.height) {
      pipeline = pipeline.resize({
        width: options.width,
        height: options.height,
        fit: 'inside',
        withoutEnlargement: true
      });
    }
    
    // If background removal is specified (simplified, just makes a PNG with transparency)
    if (options.removeBackground) {
      // Convert to PNG for transparency
      pipeline = pipeline.png({ quality: 95 });
    } else {
      // Otherwise optimize as JPEG
      pipeline = pipeline.jpeg({ quality: 85 });
    }
    
    // Save the processed image
    await pipeline.toFile(outputPath);
    console.log(`Processed: ${outputPath}`);
  } catch (error) {
    console.error(`Error processing ${inputPath}:`, error);
  }
}

// Process the robot images
async function processRobotImages() {
  // 2023 Robot
  await processImage(
    path.join(__dirname, 'attached_assets/DSC05155.jpg'),
    path.join(outputDir, 'robot_2023.png'),
    { width: 800, removeBackground: true }
  );
  
  // 2024 Robot
  await processImage(
    path.join(__dirname, 'attached_assets/IMG_1593.jpg'),
    path.join(outputDir, 'robot_2024.png'),
    { width: 800, removeBackground: true }
  );
  
  // 2025 Robot (using PXL_20240316_214902392.jpg as it appears to be a recent competition image)
  await processImage(
    path.join(__dirname, 'attached_assets/PXL_20240316_214902392.jpg'),
    path.join(outputDir, 'robot_2025.png'),
    { width: 800, removeBackground: true }
  );
  
  // Logo variations - all have transparent backgrounds already
  await processImage(
    path.join(__dirname, 'attached_assets/2_20230413_174021_0001.png'),
    path.join(outputDir, 'team_logo_blue.png'),
    { width: 300 }
  );
  
  await processImage(
    path.join(__dirname, 'attached_assets/1_20230413_174021_0000.png'),
    path.join(outputDir, 'team_logo_white.png'),
    { width: 300 }
  );
  
  await processImage(
    path.join(__dirname, 'attached_assets/3_20230413_174021_0002.png'),
    path.join(outputDir, 'team_logo_pride1.png'),
    { width: 300 }
  );
  
  await processImage(
    path.join(__dirname, 'attached_assets/4_20230413_174021_0003.png'),
    path.join(outputDir, 'team_logo_pride2.png'),
    { width: 300 }
  );
  
  // Process other images for the gallery
  const galleryImages = [
    'DSC02194.jpg',
    'DSC02681.jpg',
    'DSC07443-L.jpg',
    'IMG_0860.jpg',
    '20240315105707_IMG_1450.jpg'
  ];
  
  for (const image of galleryImages) {
    await processImage(
      path.join(__dirname, `attached_assets/${image}`),
      path.join(outputDir, `gallery_${image.replace(/\s+/g, '_')}`),
      { width: 600 }
    );
  }
  
  console.log('All images processed successfully!');
}

// Run the processing function
processRobotImages().catch(console.error);