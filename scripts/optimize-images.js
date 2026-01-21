import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const wallpapersDir = path.join(__dirname, '../public/wallpapers');
const outputDir = path.join(__dirname, '../public/wallpapers');

async function optimizeImages() {
  try {
    const files = fs.readdirSync(wallpapersDir);
    const jpegFiles = files.filter(
      file =>
        file.toLowerCase().endsWith('.jpeg') ||
        file.toLowerCase().endsWith('.jpg')
    );

    console.log(`Found ${jpegFiles.length} JPEG files to optimize...`);

    for (const file of jpegFiles) {
      const inputPath = path.join(wallpapersDir, file);
      const outputName = file.replace(/\.(jpg|jpeg)$/i, '.webp');
      const outputPath = path.join(outputDir, outputName);

      try {
        const stats = fs.statSync(inputPath);
        const originalSize = (stats.size / 1024).toFixed(2);

        await sharp(inputPath)
          .webp({ quality: 80 })
          .toFile(outputPath);

        const optimizedStats = fs.statSync(outputPath);
        const optimizedSize = (optimizedStats.size / 1024).toFixed(2);
        const savings = (
          ((stats.size - optimizedStats.size) / stats.size) *
          100
        ).toFixed(2);

        console.log(
          `✓ ${file} → ${outputName}`
        );
        console.log(
          `  Original: ${originalSize}KB → Optimized: ${optimizedSize}KB (${savings}% savings)`
        );
      } catch (error) {
        console.error(`✗ Failed to optimize ${file}:`, error);
      }
    }

    console.log('\n✓ Image optimization complete!');
  } catch (error) {
    console.error('Error during optimization:', error);
    process.exit(1);
  }
}

optimizeImages();
