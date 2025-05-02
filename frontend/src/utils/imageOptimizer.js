/**
 * Image optimization utility for optimizing image loading
 */

// Function to generate image source sets for responsive images
export const generateSrcSet = (imagePath, sizes = [400, 800, 1200]) => {
  // Remove file extension
  const baseImagePath = imagePath.substring(0, imagePath.lastIndexOf('.'));
  const extension = imagePath.substring(imagePath.lastIndexOf('.'));
  
  // Generate srcset string
  return sizes.map(size => `${baseImagePath}_${size}${extension} ${size}w`).join(', ');
};

// Component to render optimized images
export const OptimizedImage = ({ 
  src, 
  alt, 
  className, 
  width, 
  height,
  loading = 'lazy',
  sizes = '100vw',
  hasWebp = true
}) => {
  // Check if src contains a file extension
  const hasExtension = src.includes('.');
  if (!hasExtension) return null;
  
  // Generate WebP path
  const webpSrc = hasWebp ? src.substring(0, src.lastIndexOf('.')) + '.webp' : null;
  
  return (
    <picture>
      {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
      <img 
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
        sizes={sizes}
      />
    </picture>
  );
};

// Utility to preload critical images
export const preloadCriticalImages = (imagePaths) => {
  if (!imagePaths || !Array.isArray(imagePaths) || !imagePaths.length) return;
  
  imagePaths.forEach(path => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = path;
    document.head.appendChild(link);
  });
};

export default {
  generateSrcSet,
  OptimizedImage,
  preloadCriticalImages
}; 