# Image Optimization Guide for Passu Tourist Lodge Website

This guide explains how to ensure all images on the website load instantly using WebP format.

## WebP Format Benefits

WebP is a modern image format developed by Google that provides superior compression and quality compared to JPEG and PNG formats:

- **Smaller file sizes**: 25-35% smaller than JPEG, 26% smaller than PNG
- **Faster loading**: Reduces page load time and improves performance
- **Supports transparency**: Like PNG but with better compression
- **Supports animation**: Like GIF but with better compression

## How to Convert Images to WebP

The project includes tools to automatically convert all your images to WebP format:

### Option 1: Automatic Conversion During Development

Run the development server with automatic WebP conversion:

```bash
npm run dev:optimized
```

This will:
1. Convert all JPG/PNG/GIF images to WebP format
2. Start the development server

### Option 2: Manually Convert Images

If you want to convert images without starting the server:

```bash
npm run webp
```

For responsive image variants (creates multiple sizes):

```bash
npm run webp:responsive
```

### Option 3: During Build

Images are automatically converted to WebP during the build process:

```bash
npm run build
```

## Using WebP Images in Components

### 1. Using the OptimizedImage Component (Recommended)

The easiest way to use WebP images is with the `OptimizedImage` component, which automatically handles WebP conversion and fallbacks:

```jsx
import { OptimizedImage } from "../utils/imageOptimizer";

// Then in your component:
<OptimizedImage
  src="/assets/images/example.jpg" // Original image path
  alt="Description of image"
  width={800}
  height={600}
  priority={true} // For important above-the-fold images
/>
```

The component will automatically:
- Use the WebP version if available
- Fall back to the original format if WebP is not supported
- Handle responsive sizing
- Apply lazy loading for off-screen images

### 2. Direct CSS Background Images

When using background images in CSS, use the WebP format directly:

```css
.hero-section {
  background-image: url('/assets/images/hero.webp');
}
```

Or in JSX:

```jsx
<div className="bg-[url('/assets/images/hero.webp')]">
  {/* content */}
</div>
```

## Adding New Images

1. Place your original images (JPG/PNG) in the appropriate directory under `/public/assets/`
2. Run `npm run webp` to convert them to WebP format
3. Use the OptimizedImage component in your React components

## Image Directories

The WebP converter scans these directories:
- `./public/assets/images`
- `./public/assets/slider`
- `./public/assets/rooms`
- `./public/assets/about`
- `./public/assets/location`
- `./public/assets/random`

## Troubleshooting

If images are not converting correctly:

1. Make sure the Sharp library is installed:
```bash
npm install sharp --save-dev
```

2. Check image paths and extensions
3. Ensure the image directories exist
4. Try running the conversion with verbose logging:
```bash
npm run webp
```

5. For certain images that need specific quality settings, you can adjust the `QUALITY` parameter in `webp-converter.js` 